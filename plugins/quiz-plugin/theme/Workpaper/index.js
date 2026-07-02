import React, { useState, useCallback, useLayoutEffect, useRef, useMemo } from 'react';
import Workpapersettings from '@theme/Workpapersettings';
import Workitem from '@theme/Workitem';
import Wenben from '@theme/Wenben';
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

function getWorkitemKey(child) {
  const items = React.Children.toArray(child.props.children);
  const wenben = items.find(c => c.type === Wenben);
  const content = wenben ? extractText(wenben.props.children) : '';
  const preview = content.replace(/\s+/g, '').slice(0, 50);
  const hash = shortHash(content);
  return `workitem-${content.length}-${preview}_${hash}`;
}

export default function Workpaper({ children }) {
  const initialSettings = useMemo(() => {
    const settingsElement = React.Children.toArray(children).find(
      child => child.type === Workpapersettings
    );
    return {
      showAns: settingsElement?.props?.showans === 'true' || settingsElement?.props?.showans === true,
      showJiexi: settingsElement?.props?.showjiexi === 'true' || settingsElement?.props?.showjiexi === true,
    };
  }, []);

  // 使用单一状态对象，确保所有状态原子性更新
  const [settings, setSettings] = useState({
    showAnsDirectly: initialSettings.showAns,
    showJiexiDirectlyUser: initialSettings.showJiexi,
    forceExpandAllState: null,
  });

  const { showAnsDirectly, showJiexiDirectlyUser, forceExpandAllState } = settings;

  // 使用 ref 追踪上一次的初始设置值
  const prevInitialRef = useRef(initialSettings);
  const hasMountedRef = useRef(false);

  // 使用 useLayoutEffect 确保在浏览器绘制前同步状态
  useLayoutEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    const prev = prevInitialRef.current;
    if (prev.showAns !== initialSettings.showAns || prev.showJiexi !== initialSettings.showJiexi) {
      setSettings({
        showAnsDirectly: initialSettings.showAns,
        showJiexiDirectlyUser: initialSettings.showJiexi,
        forceExpandAllState: null,
      });
      prevInitialRef.current = initialSettings;
    }
  }, [initialSettings]);

  const showJiexiDirectly = Boolean(showAnsDirectly) || Boolean(showJiexiDirectlyUser);

  const handleAnsChange = useCallback(() => {
    setSettings(prev => ({
      ...prev,
      showAnsDirectly: !prev.showAnsDirectly,
    }));
  }, []);

  const handleJiexiChange = useCallback(() => {
    setSettings(prev => ({
      ...prev,
      showJiexiDirectlyUser: !prev.showJiexiDirectlyUser,
    }));
  }, []);

  const toggleForceExpandAll = useCallback(() => {
    setSettings(prev => ({
      ...prev,
      forceExpandAllState: prev.forceExpandAllState === null ? false : !prev.forceExpandAllState,
    }));
  }, []);

  // 重置所有答题状态
  const [resetAllSignal, setResetAllSignal] = useState(0);
  const triggerResetAll = useCallback(() => {
    setResetAllSignal(s => s + 1);
  }, []);

  // 追踪每个 Workitem 是否有已答题内容
  const [hasAnyActive, setHasAnyActive] = useState(false);
  const activeRefs = useRef({});

  const registerWorkitem = useCallback((id, isActiveRef) => {
    activeRefs.current[id] = isActiveRef;
    const hasActive = Object.values(activeRefs.current).some(r => r.current);
    setHasAnyActive(hasActive);
  }, []);

  const unregisterWorkitem = useCallback((id) => {
    delete activeRefs.current[id];
    const hasActive = Object.values(activeRefs.current).some(r => r.current);
    setHasAnyActive(hasActive);
  }, []);

  // 供子组件通知活跃状态变化
  const notifyActiveChange = useCallback(() => {
    const hasActive = Object.values(activeRefs.current).some(r => r.current);
    setHasAnyActive(hasActive);
  }, []);

  const contextValue = useMemo(() => ({
    showAnsDirectly,
    showJiexiDirectly,
    forceExpandAllState,
    setForceExpandAllState: (val) => setSettings(prev => ({ ...prev, forceExpandAllState: val })),
    resetAllSignal,
    triggerResetAll,
    registerWorkitem,
    unregisterWorkitem,
    notifyActiveChange,
  }), [showAnsDirectly, showJiexiDirectly, forceExpandAllState, resetAllSignal, triggerResetAll, registerWorkitem, unregisterWorkitem, notifyActiveChange]);

  const modifiedChildren = React.Children.map(children, (child, index) => {
    if (child.type === Workpapersettings) {
      return React.cloneElement(child, {
        showAnsDirectly,
        showJiexiDirectlyUser,
        showJiexiDirectly,
        onAnsChange: handleAnsChange,
        onJiexiChange: handleJiexiChange,
        toggleForceExpandAll,
        hasAnyActiveContent: hasAnyActive,
        onResetAll: triggerResetAll,
      });
    }
    if (child.type === Workitem) {
      const key = getWorkitemKey(child);
      return React.cloneElement(child, { key });
    }
    return child;
  });

  return (
    <QuizContext.Provider value={contextValue}>
      <div className={styles.workpaper}>{modifiedChildren}</div>
    </QuizContext.Provider>
  );
}