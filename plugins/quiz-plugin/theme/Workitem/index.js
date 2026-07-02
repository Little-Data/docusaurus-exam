import React, { useState, useMemo, useCallback, useContext, useLayoutEffect, useReducer, useRef, useEffect } from 'react';
import Wenben from '@theme/Wenben';
import Xuanxiang from '@theme/Xuanxiang';
import Jiexi from '@theme/Jiexi';
import Ansinput from '@theme/Ansinput';
import { QuizContext } from '../QuizContext';
import styles from './styles.module.css';

// 递归提取 React children 中的纯文本
function extractText(children) {
  if (!children || typeof children === 'boolean') return '';
  if (typeof children === 'string' || typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(extractText).join('');
  if (children.props?.children) return extractText(children.props.children);
  return '';
}

// 快速哈希，生成短标识
function shortHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h) + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h).toString(36);
}

// 会话存储持久化工具函数
function getQuizStorageKey(pageContent) {
  if (typeof window === 'undefined') return '';
  const path = window.location.pathname.replace(/[^a-zA-Z0-9_\/-]/g, '_');
  const full = extractText(pageContent).replace(/\s+/g, '');
  const text = full.slice(0, 60);
  const hash = shortHash(full);
  return `quiz:${path}:${text}_${hash}`;
}

function persistQuizState(key, state) {
  if (!key) return;
  try {
    const data = {};
    ['userSelected', 'userLocked', 'redoCount', 'inputValue'].forEach(f => {
      if (f in state) {
        const val = state[f];
        data[f] = val instanceof Set ? [...val] : val;
      }
    });
    sessionStorage.setItem(key, JSON.stringify(data));
  } catch {}
}

function restoreQuizState(key, defaultState) {
  if (!key) return defaultState;
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    const restored = { ...defaultState };
    if (parsed.userSelected !== undefined) {
      restored.userSelected = Array.isArray(parsed.userSelected)
        ? new Set(parsed.userSelected)
        : parsed.userSelected;
    }
    if (parsed.userLocked !== undefined) restored.userLocked = parsed.userLocked;
    if (parsed.redoCount !== undefined) restored.redoCount = parsed.redoCount;
    if (parsed.inputValue !== undefined) restored.inputValue = parsed.inputValue;
    return restored;
  } catch {
    return defaultState;
  }
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 解析区域组件（带动画）
function JiexiSection({ jiexiContent, initialCollapsed, forceExpandAllState }) {
  const [isExpanded, setIsExpanded] = useState(!initialCollapsed);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);
  const resizeObserverRef = useRef(null);

  useLayoutEffect(() => {
    if (forceExpandAllState !== null) {
      setIsExpanded(forceExpandAllState);
    }
  }, [forceExpandAllState]);

  // 计算高度的函数
  const updateHeight = useCallback(() => {
    if (contentRef.current && isExpanded) {
      setHeight(contentRef.current.scrollHeight);
    } else if (contentRef.current && !isExpanded) {
      // 收起时也需要存储完整高度，以便展开动画
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isExpanded]);

  // 监听内容变化和图片加载
  useLayoutEffect(() => {
    if (!contentRef.current) return;

    updateHeight();

    // 使用 ResizeObserver 监听内容区域的大小变化
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserverRef.current = new ResizeObserver(() => {
        updateHeight();
      });
      resizeObserverRef.current.observe(contentRef.current);
    }

    // 查找所有图片，监听图片加载完成事件
    const images = contentRef.current.querySelectorAll('img');
    const handleImageLoad = () => {
      updateHeight();
    };
    
    images.forEach(img => {
      if (img.complete) {
        // 图片已缓存，直接更新高度
        updateHeight();
      } else {
        img.addEventListener('load', handleImageLoad);
      }
    });

    // 监听字体加载（如果有自定义字体）
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        updateHeight();
      });
    }

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      images.forEach(img => {
        img.removeEventListener('load', handleImageLoad);
      });
    };
  }, [jiexiContent, updateHeight]);

  // 当展开状态变化时，重新计算高度
  useLayoutEffect(() => {
    if (isExpanded) {
      // 使用 requestAnimationFrame 确保 DOM 已更新
      requestAnimationFrame(() => {
        updateHeight();
        // 额外延迟一次，处理异步内容
        setTimeout(updateHeight, 50);
      });
    } else {
      // 收起时也要存储高度，确保收起动画正确
      updateHeight();
    }
  }, [isExpanded, updateHeight]);

  const handleTitleClick = () => {
    setIsExpanded(prev => !prev);
  };

  if (!jiexiContent) return null;

  return (
    <div className={styles.jiexi}>
      <div className={styles.jiexiTitle} onClick={handleTitleClick}>
        <span className={`${styles.jiexiToggle} ${isExpanded ? styles.expanded : ''}`}>
          ▶
        </span>
        解析
      </div>
      <div
        className={styles.jiexiContentWrapper}
        style={{ maxHeight: isExpanded ? `${height}px` : '0' }}
      >
        <div className={styles.jiexiContent} ref={contentRef}>
          {jiexiContent}
        </div>
      </div>
    </div>
  );
}

// 选择题状态 reducer
function selectionReducer(state, action) {
  switch (action.type) {
    case 'SELECT_SINGLE':
      return { ...state, userSelected: action.payload, userLocked: true, redoCount: state.redoCount };
    case 'SELECT_MULTIPLE': {
      const newSelected = typeof action.payload === 'function'
        ? action.payload(state.userSelected)
        : action.payload;
      return { ...state, userSelected: newSelected, userLocked: false, redoCount: state.redoCount };
    }
    case 'SUBMIT':
      return { ...state, userLocked: true };
    case 'RESET':
      return { userSelected: action.payload.initialSelected, userLocked: false, redoCount: state.redoCount + 1 };
    case 'RESET_ALL':
      return { userSelected: action.payload.initialSelected, userLocked: false, redoCount: state.redoCount };
    case 'FORCE_SHOW_ANS':
      return { userSelected: action.payload.selected, userLocked: true, redoCount: 0 };
    case 'CLEAR_FORCE':
      return { userSelected: action.payload.initialSelected, userLocked: false, redoCount: 0 };
    default:
      return state;
  }
}

let _selectionId = 0;
function nextSelectionId() { return ++_selectionId; }

function SelectionQuestion({ question, options, jiexiContent, jiexiShouqi }) {
  const { showAnsDirectly, showJiexiDirectly, forceExpandAllState, resetAllSignal, registerWorkitem, unregisterWorkitem, notifyActiveChange } = useContext(QuizContext);
  const itemId = useRef(`sel_${nextSelectionId()}`).current;
  const isMultiple = options.filter(o => o.isAnswer).length > 1;
  const correctAnswers = useMemo(
    () => options.map((o, idx) => (o.isAnswer ? idx : -1)).filter(i => i !== -1),
    [options]
  );

  const initialSelected = useMemo(() => {
    return isMultiple ? new Set() : null;
  }, [isMultiple]);

  const storageKey = useMemo(() => getQuizStorageKey(question), [question]);

  const [state, dispatch] = useReducer(selectionReducer, null, () =>
    restoreQuizState(storageKey, {
      userSelected: initialSelected,
      userLocked: false,
      redoCount: 0,
    })
  );

  // 标记是否首次挂载，避免初次挂载时 CLEAR_FORCE 清除恢复的答案
  const isFirstMount = useRef(true);
  const isSystemUpdate = useRef(false);
  const prevShowAnsRef = useRef(showAnsDirectly);

  useLayoutEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      prevShowAnsRef.current = showAnsDirectly;
      if (showAnsDirectly) {
        isSystemUpdate.current = true;
        dispatch({
          type: 'FORCE_SHOW_ANS',
          payload: { selected: isMultiple ? new Set(correctAnswers) : correctAnswers[0] },
        });
      }
      return;
    }

    // 仅当 showAnsDirectly 值真正变化时才执行，避免因依赖项引用变化误触
    if (showAnsDirectly === prevShowAnsRef.current) return;
    prevShowAnsRef.current = showAnsDirectly;

    isSystemUpdate.current = true;
    if (showAnsDirectly) {
      const forcedSelected = isMultiple ? new Set(correctAnswers) : correctAnswers[0];
      dispatch({ type: 'FORCE_SHOW_ANS', payload: { selected: forcedSelected } });
    } else {
      dispatch({ type: 'CLEAR_FORCE', payload: { initialSelected } });
    }
  }, [showAnsDirectly, isMultiple, correctAnswers, initialSelected]);

  // 持久化用户答题状态（排除系统强制更新的场景）
  const prevStateRef = useRef(state);
  useEffect(() => {
    if (isSystemUpdate.current) {
      isSystemUpdate.current = false;
      prevStateRef.current = state;
      return;
    }
    // 检查用户状态是否真的有变化
    const prev = prevStateRef.current;
    if (prev.userLocked !== state.userLocked || prev.redoCount !== state.redoCount ||
        (isMultiple ? prev.userSelected?.size !== state.userSelected?.size || 
          [...(prev.userSelected || [])].sort().join() !== [...(state.userSelected || [])].sort().join()
         : prev.userSelected !== state.userSelected)) {
      persistQuizState(storageKey, {
        userSelected: state.userSelected,
        userLocked: state.userLocked,
        redoCount: state.redoCount,
      });
    }
    prevStateRef.current = state;
  }, [state, storageKey, isMultiple]);

  // 监听重置全部信号
  const prevResetRef = useRef(resetAllSignal);
  useEffect(() => {
    if (prevResetRef.current !== resetAllSignal) {
      prevResetRef.current = resetAllSignal;
      isSystemUpdate.current = true;
      const sel = isMultiple ? new Set() : null;
      dispatch({ type: 'RESET_ALL', payload: { initialSelected: sel } });
      try { sessionStorage.removeItem(storageKey); } catch {}
    }
  }, [resetAllSignal, isMultiple]);

  // 注册活跃状态（是否已有答题内容）
  const isActive = state.userLocked && !showAnsDirectly;
  const isActiveRef = useRef(isActive);
  isActiveRef.current = isActive;
  useEffect(() => {
    registerWorkitem(itemId, isActiveRef);
    return () => unregisterWorkitem(itemId);
  }, []);
  // 状态变化时通知 Workpaper 更新
  useEffect(() => {
    notifyActiveChange();
  }, [isActive]);

  const locked = showAnsDirectly || state.userLocked;
  const selected = showAnsDirectly
    ? (isMultiple ? new Set(correctAnswers) : correctAnswers[0])
    : state.userSelected;
  const showJiexi = showAnsDirectly || showJiexiDirectly || state.userLocked;

  const initialCollapsed = useMemo(() => {
    if (jiexiShouqi !== undefined) return jiexiShouqi;
    return false;
  }, [jiexiShouqi]);

  const handleSingleClick = useCallback((idx) => {
    if (locked) return;
    dispatch({ type: 'SELECT_SINGLE', payload: idx });
  }, [locked]);

  const handleMultipleClick = useCallback((idx) => {
    if (locked) return;
    dispatch({
      type: 'SELECT_MULTIPLE',
      payload: (prev) => {
        const newSet = new Set(prev);
        if (newSet.has(idx)) newSet.delete(idx);
        else newSet.add(idx);
        return newSet;
      },
    });
  }, [locked]);

  const handleSubmit = useCallback(() => {
    dispatch({ type: 'SUBMIT' });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: 'RESET', payload: { initialSelected } });
  }, [initialSelected]);

  const isCorrect = (idx) => {
    if (!locked) return null;
    const isSelected = selected.has ? selected.has(idx) : selected === idx;
    const isAns = correctAnswers.includes(idx);
    if (isAns && isSelected) return 'correct';
    if (!isAns && isSelected) return 'incorrect';
    if (isAns && !isSelected) return 'missed';
    return null;
  };

  const hasSelection = isMultiple ? selected.size > 0 : selected !== null;
  const showReset = !showAnsDirectly && state.userLocked;

  return (
    <div className={styles.item}>
      <div className={styles.question}>{question}</div>
      <div className={`${styles.options} ${isMultiple ? styles.multiple : ''}`}>
        {options.map((opt, idx) => {
          const status = isCorrect(idx);
          let optionClass = styles.option;
          if (locked) {
            if (status === 'correct') optionClass += ` ${styles.correct}`;
            else if (status === 'incorrect') optionClass += ` ${styles.incorrect}`;
            else if (status === 'missed') optionClass += ` ${styles.missed}`;
          } else {
            if (isMultiple ? selected.has(idx) : selected === idx) {
              optionClass += ` ${styles.selected}`;
            }
          }

          const isInsideCodeBlock = (element) => {
            // 匹配 pre 标签，以及代码块内常见的交互按钮（复制、自动换行等）
            return element.closest('pre, button, [class*="codeBlock"], [class*="copyButton"], [class*="wrapButton"]');
          };

          const handleOptionClick = (e, idx) => {
            // 点击图片时不触发选项切换
            if (e.target.tagName === 'IMG') return;
            // 如果点击发生在代码块内部，让代码块自身的按钮处理，不触发选项切换
            if (isInsideCodeBlock(e.target)) return;
            if (locked) return;
            if (isMultiple) {
              handleMultipleClick(idx);
            } else {
              handleSingleClick(idx);
            }
          };

          const handleOptionKeyDown = (e, idx) => {
            if (e.key === 'Enter' || e.key === ' ') {
              // 键盘事件时，检查当前活动元素是否在代码块内
              if (isInsideCodeBlock(document.activeElement)) return;
              if (document.activeElement?.tagName === 'IMG') return;
              e.preventDefault();
              if (locked) return;
              if (isMultiple) {
                handleMultipleClick(idx);
              } else {
                handleSingleClick(idx);
              }
            }
          };

          return (
            <div
              key={idx}
              className={optionClass}
              role="button"
              tabIndex={locked ? -1 : 0}
              aria-disabled={locked}
              onClick={(e) => handleOptionClick(e, idx)}
              onKeyDown={(e) => handleOptionKeyDown(e, idx)}
            >
              <span className={styles.optionLabel}>
                {opt.label || String.fromCharCode(65 + idx)}
              </span>
              <span className={styles.optionText}>{opt.text}</span>
            </div>
          );
        })}
      </div>

      {isMultiple && !locked && (
        <div className={styles.submitRow}>
          {state.redoCount > 0 && <span className={styles.redoCount}>重做次数: {state.redoCount}</span>}
          <button
            className={`${styles.submitBtn} ${!hasSelection ? styles.hiddenBtn : ''}`}
            onClick={handleSubmit}
            disabled={!hasSelection}
          >
            确定
          </button>
        </div>
      )}

      <div className={styles.actionBar}>
        {showReset && (
          <button className={styles.resetBtn} onClick={handleReset}>
            重置
          </button>
        )}
        {!isMultiple && !locked && state.redoCount > 0 && !showAnsDirectly && (
          <span className={styles.redoCount}>重做次数: {state.redoCount}</span>
        )}
      </div>

      {showJiexi && jiexiContent && (
        <JiexiSection
          jiexiContent={jiexiContent}
          initialCollapsed={initialCollapsed}
          forceExpandAllState={forceExpandAllState}
        />
      )}
    </div>
  );
}

// 填空题状态 reducer
function fillReducer(state, action) {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, inputValue: action.payload };
    case 'SUBMIT':
      return { ...state, userLocked: true };
    case 'RESET':
      return { userLocked: false, inputValue: '', redoCount: state.redoCount + 1 };
    case 'RESET_ALL':
      return { userLocked: false, inputValue: '', redoCount: state.redoCount };
    case 'FORCE_SHOW_ANS':
      return { userLocked: true, inputValue: state.inputValue, redoCount: 0 };
    case 'CLEAR_FORCE':
      return { userLocked: false, inputValue: '', redoCount: 0 };
    default:
      return state;
  }
}

let _fillId = 0;
function nextFillId() { return ++_fillId; }

function FillQuestion({ question, hasAnsinput, hasKaTeX, jiexiContent, jiexiShouqi }) {
  const { showAnsDirectly, showJiexiDirectly, forceExpandAllState, resetAllSignal, registerWorkitem, unregisterWorkitem, notifyActiveChange } = useContext(QuizContext);
  const itemId = useRef(`fill_${nextFillId()}`).current;

  const storageKey = useMemo(() => getQuizStorageKey(question), [question]);

  const [state, dispatch] = useReducer(fillReducer, null, () =>
    restoreQuizState(storageKey, {
      userLocked: false,
      inputValue: '',
      redoCount: 0,
    })
  );

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewError, setPreviewError] = useState(null);
  const [submittedAnswerRaw, setSubmittedAnswerRaw] = useState('');
  const [submittedDisplayMode, setSubmittedDisplayMode] = useState('rendered');

  const previewContainerRef = useRef(null);
  const answerContainerRef = useRef(null);

  const [errorExpanded, setErrorExpanded] = useState(true);
  const errorContentRef = useRef(null);
  const [errorHeight, setErrorHeight] = useState(0);

  // 测量错误内容高度
  useEffect(() => {
    if (errorContentRef.current) {
      setErrorHeight(errorContentRef.current.scrollHeight);
    }
  }, [previewError]);

  const toggleErrorExpand = () => {
    setErrorExpanded(!errorExpanded);
  };

  // 渲染混合内容
  const renderMixedContent = useCallback((content, container, setErrorFn) => {
    if (!container) return;
    if (setErrorFn) setErrorFn(null);
    
    container.innerHTML = '';
    if (!content.trim()) return;

    const patterns = [
      { regex: /```math\s*([\s\S]*?)\s*```/g, displayMode: true },
      { regex: /\$\$([\s\S]+?)\$\$/g, displayMode: true },
      { regex: /\$([^\$]+?)\$/g, displayMode: false }
    ];

    let matches = [];
    for (const pattern of patterns) {
      const regex = new RegExp(pattern.regex.source, pattern.regex.flags);
      let match;
      while ((match = regex.exec(content)) !== null) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          raw: match[0],
          math: match[1],
          displayMode: pattern.displayMode
        });
      }
    }
    matches.sort((a, b) => a.start - b.start);

    let cursor = 0;
    const fragments = [];
    for (const match of matches) {
      if (match.start < cursor) continue;
      if (match.start > cursor) {
        fragments.push({ type: 'text', content: content.substring(cursor, match.start) });
      }
      fragments.push({ type: 'math', content: match.math, displayMode: match.displayMode });
      cursor = match.end;
    }
    if (cursor < content.length) {
      fragments.push({ type: 'text', content: content.substring(cursor) });
    }

    // 收集错误消息
    const errorMessages = [];
    
    for (const frag of fragments) {
      if (frag.type === 'text') {
        const span = document.createElement('span');
        span.style.whiteSpace = 'pre-wrap';
        span.innerText = frag.content;
        container.appendChild(span);
      } else {
        try {
          const elem = document.createElement('span');
          if (frag.displayMode) {
            elem.style.display = 'block';
            elem.style.textAlign = 'center';
            elem.style.margin = '0.5em 0';
          }
          if (window.katex) {
            window.katex.render(frag.content, elem, {
              throwOnError: true,
              displayMode: frag.displayMode,
              output: 'html',
              strict: false,
              trust: true
            });
          } else {
            throw new Error('KaTeX not loaded');
          }
          container.appendChild(elem);
        } catch (err) {
          // 收集错误信息，不中断渲染
          errorMessages.push(`公式「${frag.content}」渲染失败: ${err.message}`);
          // 显示原始文本作为降级
          const errSpan = document.createElement('span');
          errSpan.style.color = 'var(--ifm-color-danger)';
          errSpan.style.backgroundColor = 'var(--ifm-color-danger-lightest)';
          errSpan.style.padding = '0.2em 0.4em';
          errSpan.style.borderRadius = '4px';
          errSpan.style.fontFamily = 'monospace';
          errSpan.innerText = frag.content;
          container.appendChild(errSpan);
        }
      }
    }
    
    // 统一设置错误信息
    if (errorMessages.length > 0) {
      if (setErrorFn) setErrorFn(errorMessages.join(' | '));
    } else {
      if (setErrorFn) setErrorFn(null);
    }
  }, []);

  const openOrRefreshPreview = useCallback(() => {
    if (!hasKaTeX || !hasAnsinput) return;
    const currentContent = state.inputValue.trim();
    if (!currentContent) return;
    if (!previewOpen) {
      setPreviewOpen(true);
      setTimeout(() => {
        if (previewContainerRef.current && currentContent) {
          renderMixedContent(currentContent, previewContainerRef.current, setPreviewError);
        }
      }, 0);
    } else {
      if (previewContainerRef.current && currentContent) {
        renderMixedContent(currentContent, previewContainerRef.current, setPreviewError);
      }
    }
  }, [previewOpen, hasKaTeX, hasAnsinput, state.inputValue, renderMixedContent]);

  const closePreview = useCallback(() => {
    setPreviewOpen(false);
    setPreviewError(null);
    if (previewContainerRef.current) previewContainerRef.current.innerHTML = '';
  }, []);

  const debouncedRenderPreview = useMemo(
    () => debounce((content) => {
      if (previewOpen && previewContainerRef.current) {
        renderMixedContent(content, previewContainerRef.current, setPreviewError);
      }
    }, 500),
    [previewOpen, renderMixedContent]
  );

  const locked = showAnsDirectly || state.userLocked;
  const showJiexi = showAnsDirectly || showJiexiDirectly || state.userLocked;
  const isKaTeXMode = hasKaTeX && hasAnsinput;
  const hasContent = state.inputValue.trim().length > 0;
  const initialCollapsed = useMemo(() => {
    if (jiexiShouqi !== undefined) return jiexiShouqi;
    return false;
  }, [jiexiShouqi]);
  const showReset = !showAnsDirectly && state.userLocked;

  const handleInputChange = useCallback((e) => {
    if (locked) return;
    const newValue = e.target.value;
    dispatch({ type: 'SET_INPUT', payload: newValue });
    if (previewOpen) {
      // 新输入时先清除之前的错误
      setPreviewError(null);
      debouncedRenderPreview(newValue);
    }
  }, [locked, previewOpen, debouncedRenderPreview]);

  const handleSubmit = useCallback(() => {
    if (!hasContent) return;
    setSubmittedAnswerRaw(state.inputValue);
    setSubmittedDisplayMode('rendered');
    dispatch({ type: 'SUBMIT' });
    setPreviewOpen(false);
  }, [state.inputValue, hasContent]);

  const handleReset = useCallback(() => {
    dispatch({ type: 'RESET' });
    setPreviewOpen(false);
    setPreviewError(null);
    setSubmittedAnswerRaw('');
    setSubmittedDisplayMode('rendered');
    if (previewContainerRef.current) previewContainerRef.current.innerHTML = '';
  }, []);

  const toggleDisplayMode = useCallback(() => {
    setSubmittedDisplayMode(prev => {
      const newMode = prev === 'rendered' ? 'raw' : 'rendered';
      return newMode;
    });
  }, []);

  // 渲染提交的答案到 DOM
  const renderSubmittedAnswer = useCallback((answerText) => {
    const node = answerContainerRef.current;
    if (!node) return;
    if (isKaTeXMode && submittedDisplayMode === 'rendered') {
      renderMixedContent(answerText, node, () => {});
    } else {
      node.innerHTML = '';
      const pre = document.createElement('pre');
      pre.style.whiteSpace = 'pre-wrap';
      pre.style.margin = '0';
      pre.style.fontFamily = 'inherit';
      pre.style.padding = '0.5rem';
      pre.style.background = 'var(--ifm-color-emphasis-100)';
      pre.style.borderRadius = 'var(--ifm-card-border-radius)';
      pre.innerText = answerText;
      node.appendChild(pre);
    }
  }, [isKaTeXMode, submittedDisplayMode, renderMixedContent]);

  // 初始提交／切换显示模式／刷新恢复后渲染答案
  useEffect(() => {
    if (submittedAnswerRaw) {
      renderSubmittedAnswer(submittedAnswerRaw);
    }
  }, [submittedAnswerRaw, submittedDisplayMode, renderSubmittedAnswer]);

  // 页面刷新时从 sessionStorage 恢复 submittedAnswerRaw
  useEffect(() => {
    if (state.userLocked && !submittedAnswerRaw && state.inputValue) {
      setSubmittedAnswerRaw(state.inputValue);
    }
  }, []);

  // 处理 SSR 水合后未调用 useReducer 初始化器的场景
  // 浏览器 F5 刷新后，从 sessionStorage 恢复未锁定的输入状态
  useLayoutEffect(() => {
    try {
      const raw = sessionStorage.getItem(storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!state.inputValue && !state.userLocked) {
        if (parsed.inputValue) {
          dispatch({ type: 'SET_INPUT', payload: parsed.inputValue });
        }
        if (parsed.userLocked) {
          dispatch({ type: 'SUBMIT' });
          setSubmittedAnswerRaw(parsed.inputValue || '');
        }
      }
    } catch {}
  }, []);

  const setAnswerRef = useCallback((node) => {
    answerContainerRef.current = node;
  }, []);

  const isFillFirstMount = useRef(true);
  const isFillSystemUpdate = useRef(false);

  useLayoutEffect(() => {
    if (isFillFirstMount.current) {
      isFillFirstMount.current = false;
      if (showAnsDirectly) {
        isFillSystemUpdate.current = true;
        dispatch({ type: 'FORCE_SHOW_ANS' });
      }
      return;
    }

    isFillSystemUpdate.current = true;
    if (showAnsDirectly) {
      dispatch({ type: 'FORCE_SHOW_ANS' });
    } else {
      dispatch({ type: 'CLEAR_FORCE' });
    }
  }, [showAnsDirectly]);

  const prevFillStateRef = useRef(state);
  useEffect(() => {
    if (isFillSystemUpdate.current) {
      isFillSystemUpdate.current = false;
      prevFillStateRef.current = state;
      return;
    }
    const prev = prevFillStateRef.current;
    if (prev.userLocked !== state.userLocked || prev.redoCount !== state.redoCount ||
        prev.inputValue !== state.inputValue) {
      persistQuizState(storageKey, {
        userLocked: state.userLocked,
        inputValue: state.inputValue,
        redoCount: state.redoCount,
      });
    }
    prevFillStateRef.current = state;
  }, [state, storageKey]);

  // 监听重置全部信号
  const fillPrevResetRef = useRef(resetAllSignal);
  useEffect(() => {
    if (fillPrevResetRef.current !== resetAllSignal) {
      fillPrevResetRef.current = resetAllSignal;
      isFillSystemUpdate.current = true;
      dispatch({ type: 'RESET_ALL' });
      try { sessionStorage.removeItem(storageKey); } catch {}
    }
  }, [resetAllSignal]);

  // 注册活跃状态（是否已有答题内容）
  const fillIsActive = !showAnsDirectly && state.inputValue.trim().length > 0;
  const fillActiveRef = useRef(fillIsActive);
  fillActiveRef.current = fillIsActive;
  useEffect(() => {
    registerWorkitem(itemId, fillActiveRef);
    return () => unregisterWorkitem(itemId);
  }, []);
  // 状态变化时通知 Workpaper 更新
  useEffect(() => {
    notifyActiveChange();
  }, [fillIsActive]);

  if (!locked) {
    return (
      <div className={styles.item}>
        <div className={styles.question}>{question}</div>
        {hasAnsinput && (
          <div className={styles.fillArea}>
            <textarea
              className={styles.textarea}
              rows={4}
              placeholder={isKaTeXMode ?
                "请输入你的答案... 兼容 LaTeX 数学公式代码" :
                "请输入你的答案..."}
              value={state.inputValue}
              onChange={handleInputChange}
            />
            {isKaTeXMode && previewOpen && (
              <div className={styles.previewArea}>
                <div className={styles.previewHeader}>
                  <span className={styles.previewTitle}>渲染效果</span>
                  <button className={styles.closePreviewBtn} onClick={closePreview} aria-label="关闭预览" title="关闭预览">×</button>
                </div>
                <div className={styles.previewContent} ref={previewContainerRef} />
                  {previewError && (
                    <div className={styles.previewErrorWrapper}>
                      <div className={styles.previewErrorHeader} onClick={toggleErrorExpand}>
                        <span className={`${styles.previewErrorArrow} ${errorExpanded ? styles.expanded : ''}`}>▶</span>
                        <span className={styles.previewErrorTitle}>渲染错误详情</span>
                      </div>
                      <div
                        className={styles.previewErrorContentWrapper}
                        style={{ maxHeight: errorExpanded ? `${errorHeight}px` : '0' }}
                      >
                        <div className={styles.previewErrorContent} ref={errorContentRef}>
                          {previewError}
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            )}
          </div>
        )}
        <div className={styles.submitRow}>
          {state.redoCount > 0 && <span className={styles.redoCount}>重做次数: {state.redoCount}</span>}
          <div className={styles.buttonGroup}>
            {isKaTeXMode && (
              <button
                className={`${previewOpen ? styles.refreshBtn : styles.previewBtn} ${!hasContent ? styles.hiddenBtn : ''}`}
                onClick={openOrRefreshPreview}
                disabled={!hasContent}
                title={previewOpen ? "强制刷新预览" : "打开预览面板"}
              >
                {previewOpen ? "刷新" : "预览"}
              </button>
            )}
            <button
              className={`${styles.submitBtn} ${!hasContent ? styles.hiddenBtn : ''}`}
              onClick={handleSubmit}
              disabled={!hasContent}
            >
              确定
            </button>
          </div>
        </div>
        {showJiexi && jiexiContent && (
          <JiexiSection
            jiexiContent={jiexiContent}
            initialCollapsed={initialCollapsed}
            forceExpandAllState={forceExpandAllState}
          />
        )}
      </div>
    );
  }

  return (
    <div className={styles.item}>
      <div className={styles.question}>{question}</div>
      {state.userLocked && !showAnsDirectly && hasAnsinput && (
        <div className={styles.submittedAnswerContainer}>
          <div className={styles.submittedAnswerHeader}>
            <span className={styles.submittedAnswerTitle}>你的答案</span>
            {isKaTeXMode && (
              <button className={styles.toggleRenderBtn} onClick={toggleDisplayMode}>
                {submittedDisplayMode === 'rendered' ? '显示原文' : '显示渲染'}
              </button>
            )}
          </div>
          <div className={styles.submittedAnswerContent} ref={setAnswerRef} />
        </div>
      )}
      <div className={styles.actionBar}>
        {showReset && <button className={styles.resetBtn} onClick={handleReset}>重置</button>}
      </div>
      {showJiexi && jiexiContent && (
        <JiexiSection
          jiexiContent={jiexiContent}
          initialCollapsed={initialCollapsed}
          forceExpandAllState={forceExpandAllState}
        />
      )}
    </div>
  );
}

export default function Workitem({ children, xuanze, tiankong, ...rest }) {
  const { wenbenContent, options, jiexiContent, jiexiShouqi, hasAnsinput, hasKaTeX } = useMemo(() => {
    const items = React.Children.toArray(children);
    const wenben = items.find(child => child.type === Wenben);
    const opts = items.filter(child => child.type === Xuanxiang);
    const jiexi = items.find(child => child.type === Jiexi);
    const ansinput = items.find(child => child.type === Ansinput);

    return {
      wenbenContent: wenben ? wenben.props.children : '',
      options: opts.map(opt => ({
        text: opt.props.children,
        isAnswer: opt.props.ans !== undefined,
        label: opt.props.label || null,
      })),
      jiexiContent: jiexi ? jiexi.props.children : null,
      jiexiShouqi: jiexi ? jiexi.props.shouqi === 'true' || jiexi.props.shouqi === true : undefined,
      hasAnsinput: !!ansinput,
      hasKaTeX: ansinput?.props?.katex === true,
    };
  }, [children]);

  const isSelection = xuanze !== undefined;
  const isFill = tiankong !== undefined;

  if (isSelection) {
    return (
      <SelectionQuestion
        question={wenbenContent}
        options={options}
        jiexiContent={jiexiContent}
        jiexiShouqi={jiexiShouqi}
      />
    );
  }

  if (isFill) {
    return (
      <FillQuestion
        question={wenbenContent}
        hasAnsinput={hasAnsinput}
        hasKaTeX={hasKaTeX}
        jiexiContent={jiexiContent}
        jiexiShouqi={jiexiShouqi}
      />
    );
  }

  return (
    <div className={styles.item}>
      <div className={styles.question}>{wenbenContent}</div>
    </div>
  );
}