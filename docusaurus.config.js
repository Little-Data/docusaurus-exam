// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

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
    'docusaurus-plugin-zooming',
    './plugins/quiz-plugin',
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: false,
            limit: 15,
          },
          onInlineTags: 'ignore',
          onInlineAuthors: 'ignore',
          onUntruncatedBlogPosts: 'ignore',
          blogSidebarCount: 0,
          showLastUpdateTime:true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/favicon.ico',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'follow_me',
        content: '⭐️ 如果这个网站能帮助到你，欢迎关注！  <a target="_blank" rel="noopener noreferrer" href="https://github.com/little-Data">GitHub</a>  |  <a target="_blank" rel="noopener noreferrer" href="https://space.bilibili.com/357695126">Bilibili</a>',
        //backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      navbar: {
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
            href: 'https://github.com/little-Data',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        logo:{
          alt:'访问计数',
          src:'https://count.getloli.com/@little_ceyan?name=little_ceyan&theme=original-new&padding=7&offset=0&align=top&scale=1&pixelated=1&darkmode=auto',
          },
        style: 'light',
        copyright: `logo icon by <a href="https://github.com/microsoft/fluentui-system-icons">Microsoft</a><br/>所有文档及其它资源收集于互联网，无法准确知晓作者。如有问题可到Github提出issue`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['Java','bash','PowerShell'],
      },
    }),
};

export default config;
