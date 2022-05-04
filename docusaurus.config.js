// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Source Software Analysis and Comparing Tools',
  tagline: ' Deep Insights into Billions of GitHub events',
  url: 'https://ossinsight.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'pingcap', // Usually your GitHub org/user name.
  projectName: 'ossinsight', // Usually your repo name.
  scripts: [
    'https://api.ossinsight.io/qo/repos/groups/osdb?format=global_variable',
    'https://www.google.com/recaptcha/api.js?render=6LcBQpkfAAAAAFmuSRkRlJxVtmqR34nNawFgKohC'
  ],
  plugins: [
    [
      path.resolve(__dirname, 'plugins/dynamic-route'),
      {
        routes: [
          {
            path: '/analyze/:owner/:repo',
            exact: true,
            component: '@site/src/dynamic-pages/analyze'
          }
        ]
      }
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: '_blog',
        routeBasePath: '_blog',
        path: './_blog',
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        pages: {
          exclude: [
            '**/_*/**',
            '**/_*'
          ]
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/pingcap/ossinsight/edit/main/',
          routeBasePath: '/',
        },
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/pingcap/ossinsight/edit/main/',
          feedOptions: {
            type: ['rss'],
            copyright: `Copyright © ${new Date().getFullYear()} PingCAP`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-KW4FDPBLLJ',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/gharchive-title-img.png',
      metadata: [
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'keywords', content: 'tidb, mysql, github events, oss, compare oss, oss analysis, pingcap'}
      ],
//       hideableSidebar: true,
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
//       announcementBar: {
//         id: 'announcement-20220414',
//         content:
//           'TiDB 6.0 is released, go to read the <a target="_blank" rel="noopener noreferrer" href="https://docs.pingcap.com/tidb/v6.0/release-6.0.0-dmr">release notes</a> 🎉🎉🎉',
//         backgroundColor: '#fafbfc',
//         textColor: '#091E42',
//         isCloseable: false,
//       },
      navbar: {
        title: 'OSS Insight',
        logo: {
          alt: 'OSS Insight',
          src: 'img/logo.svg',
        },
        style: 'dark',
        items: [
          {
            type: 'doc',
            docId: 'database/deep-insight-into-open-source-databases',
            position: 'left',
            label: 'Insights',
          },
          {to: '/try-your-own-dataset/?utm_content=header', label: '🔥 Try Your Own Dataset', position: 'right'},
          {
            href: 'https://en.pingcap.com/tidb-cloud/?utm_source=ossinsight',
            label: 'TiDB Cloud',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: 'More',
            position: 'right',
            items: [
              {to: '/about', label: 'About'},
              {to: '/blog', label: 'Blogs'},
              {to: '/blog/how-it-works', label: 'How It Works'},
              {href: 'https://twitter.com/OSSInsight', label: 'Twitter'},
            ],
          },
          {
            href: 'https://github.com/pingcap/ossinsight',
            className: 'navbar-item-github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'OSS Insight',
            items: [
              {
                label: 'Insight',
                to: '/database/deep-insight-into-open-source-databases/',
              },
              {
                label: 'Try Your Own Dataset',
                to: '/try-your-own-dataset/?utm_content=footer',
              },
              {
                label: 'How It Works',
                to: '/blog/how-it-works',
              },
              {
                label: 'About',
                to: '/about',
              },
              {
                label: 'Blogs',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Sponsored By',
            items: [
              {
                label: 'TiDB Community',
                href: 'https://en.pingcap.com/community?utm_source=ossinsight',
              },
              {
                label: 'PingCAP',
                href: 'https://en.pingcap.com?utm_source=ossinsight',
              },
            ],
          },
          {
            title: 'Built With',
            items: [
              {
                label: 'GH Archive',
                href: 'http://www.gharchive.org/',
              },
              {
                label: 'GHTorrent',
                href: 'https://ghtorrent.org/',
              },
              {
                label: 'Docusaurus',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Apache ECharts',
                href: 'https://echarts.apache.org/',
              },
              {
                label: 'TiDB Cloud',
                href: 'https://tidbcloud.com/?utm_source=ossinsight',
              },
              {
                label: 'TiDB',
                href: 'https://github.com/pingcap/tidb',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/pingcap/ossinsight',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/OSSInsight',
              },
            ],
          },
        ],
        logo: {
          alt: 'OSS Insight Logo',
          src: '/img/pingcap-white-300x79.png',
        },
        copyright: `Copyright &copy; ${new Date().getFullYear()} <a href="https://en.pingcap.com" target="_blank">PingCAP</a>. All Rights Reserved | <a href="https://en.pingcap.com/privacy-policy/" target="_blank">Privacy</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        autoCollapseSidebarCategories: true,
      },
    }),
};

module.exports = config;