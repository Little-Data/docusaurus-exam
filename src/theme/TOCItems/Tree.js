import React from 'react';
import Link from '@docusaurus/Link';
import GithubSlugger from 'github-slugger';

/**
 * HTML 实体解码
 */
function decodeHtmlEntities(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

/**
 * 严格检测标题末尾是否有 "空格 [...]" 格式
 */
function hasCustomPattern(text) {
  return /^.+?\s+\[.+\]\s*$/.test(text);
}

/**
 * 提取方括号内的内容（仅用于自定义模式）
 */
function extractBracketContent(text) {
  const match = text.match(/\[([^\]]+)\]$/); // 取最后一个方括号
  return match ? match[1].trim() : text.trim();
}

/**
 * 生成自定义锚点：去掉末尾的 [...] 部分，解码后 slug
 */
function getCustomAnchorId(text, slugger) {
  const cleanText = text.replace(/\s+\[[^\]]*\]\s*$/, '').trim();
  const decoded = decodeHtmlEntities(cleanText);
  return slugger.slug(decoded);
}

function TOCItem({ heading, linkClassName, slugger }) {
  const value = heading.value;
  let displayValue, anchorId;

  if (hasCustomPattern(value)) {
    // 自定义模式：显示方括号内内容，锚点基于去掉末尾 [...] 的部分
    displayValue = extractBracketContent(value);
    anchorId = getCustomAnchorId(value, slugger);
  } else {
    // 回退原生：显示原标题（解码），锚点用 Docusaurus 默认生成的 heading.id
    displayValue = decodeHtmlEntities(value);
    anchorId = heading.id;
  }

  return (
    <li key={heading.id}>
      <Link
        to={`#${anchorId}`}
        className={linkClassName || undefined}
        dangerouslySetInnerHTML={{ __html: displayValue }}
      />
      {heading.children?.length > 0 && (
        <TOCItemTree
          isChild
          toc={heading.children}
          className={undefined}
          linkClassName={linkClassName}
          slugger={slugger}
        />
      )}
    </li>
  );
}

function TOCItemTree({ toc, className, linkClassName, isChild, slugger: parentSlugger }) {
  const slugger = parentSlugger || new GithubSlugger();

  if (!toc || !toc.length) {
    return null;
  }

  return (
    <ul className={isChild ? undefined : className}>
      {toc.map((heading) => (
        <TOCItem
          key={heading.id}
          heading={heading}
          linkClassName={linkClassName}
          slugger={slugger}
        />
      ))}
    </ul>
  );
}

export default React.memo(TOCItemTree);