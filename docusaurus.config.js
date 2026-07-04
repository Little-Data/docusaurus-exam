// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkTocHeading from './plugins/remark-toc-heading/index.js';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '测验库',
  tagline: '在线测验',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://exam.little-data.top',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'little-data', // Usually your GitHub org/user name.
  projectName: 'docusaurus-exam', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  plugins: [
    './plugins/image-viewer',
    './plugins/quiz-plugin',
    './plugins/toc-mobile'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: false,
            limit: 15,
          },
          onInlineTags: 'ignore',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
          blogSidebarCount: 0,
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath, remarkTocHeading],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  scripts: [
    {
      src: '/katex/katex.min.js',
      defer: true,  // 确保在 DOM 加载后执行，不阻塞页面渲染
    },
  ],

  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/favicon.ico',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      imageViewer: {
        scale: 1.8,
        enableWheelZoom: true,
        containerSelector: 'article',
        excludeSelector: '.avatar',
        minScale: 0.5,
        maxScale: Infinity,
        wheelStep: 0.25,
      },
      announcementBar: {
        id: 'follow_me',
        content: '⭐️ 如果这个网站能帮助到你，欢迎关注！  <a target="_blank" rel="noopener noreferrer" href="https://github.com/little-Data">GitHub</a>  |  <a target="_blank" rel="noopener noreferrer" href="https://space.bilibili.com/357695126">Bilibili</a>',
        //backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      algolia: {
        appId: 'QRAVS459AQ',
        apiKey: '833898bcf0a6a7d7c29b3417a228cc31',
        indexName: '测验库爬虫',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        searchPagePath: 'search',
        maxResultsPerGroup: 7,
        recentSearchesLimit: 7,
        recentSearchesWithFavoritesLimit: 5,
        keyboardShortcuts: { 'Ctrl/Cmd+K': false, '/': false },
      },
      navbar: {
        hideOnScroll: true,
        title: '测验库',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            href:'/',
            label: '主页',
            position: 'left',
          },
          {
            to:'/archive',
            label: '往期测验',
            position: 'left',
          },
          {
            href: 'https://little-data.eu.org',
            label: '博客', 
            position: 'left'
          },
          {
            href:'https://exam.little-data.top/rss.xml',
            label: 'Rss订阅',
            position: 'left',
          },
          {
            href: 'https://github.com/Little-Data/docusaurus-exam',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: '实用工具',
            items: [
              {
                label: '在线绘图',
                href: 'https://dwaz.top/huitu',
              },
              {
                label: 'LaTeX 公式可视化编辑',
                href: 'https://dwaz.top/gs',
              },
            ],
          },
        ],
        logo:{
          alt:'访问计数',
          src:'https://count.getloli.com/@little_ceyan?name=little_ceyan&theme=original-new&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=auto',
          },
        style: 'light',
        copyright: `解析及答案不一定100%准确！仅提供思路<br/>所有文档及其它资源收集于互联网，无法准确知晓作者。如有问题可到Github提出issue<br />Built with Docusaurus. logo icon by <a href="https://github.com/microsoft/fluentui-system-icons">Microsoft</a><br />Cat Sprite in Navbar made by <a href="https://cupnooble.itch.io/">Cup Nooble</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['Java','bash','PowerShell', 'ini'],
      },
    }),
};

export default config;
