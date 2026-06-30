import { visit } from 'unist-util-visit';
import GithubSlugger from 'github-slugger';

export default function remarkTocHeading() {
  return (tree) => {
    const slugger = new GithubSlugger();

    visit(tree, 'heading', (node) => {
      const textNode = node.children.find(
        (n) => n.type === 'text' || n.type === 'inlineCode'
      );
      if (!textNode) return;

      // 必须严格匹配：末尾有至少一个空格 + [...] + 可能的尾部空白
      const match = textNode.value.match(/^(.+?)\s+\[(.+?)\]\s*$/);
      if (!match) return;

      const [, title] = match;

      // 页面显示标题（去掉末尾的 [...]）
      textNode.value = title.trim();

      // 生成 slug 锚点
      const slug = slugger.slug(title.trim());
      node.data = node.data || {};
      node.data.id = slug;
      node.data.hProperties = {
        ...(node.data.hProperties || {}),
        id: slug,
      };
    });
  };
}