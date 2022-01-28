const visit = require("unist-util-visit")
const ssrTemplate = require("./src/internals/ssr.template")
const consts = require("./src/config/consts")
const customFields = require("./src/config/customFields")
const math = require("remark-math")
const katex = require("rehype-katex")

function variable() {
  const RE_VAR = /{@([\w-_]+)@}/g
  const getVariable = (full, partial) =>
    partial ? customFields[partial] : full

  function textVisitor(node) {
    node.value = node.value.replace(RE_VAR, getVariable)
  }

  function linkVisitor(node) {
    node.url = node.url.replace(RE_VAR, getVariable)

    if (node.title) {
      node.title = node.title.replace(RE_VAR, getVariable)
    }
  }

  function transformer(ast) {
    visit(ast, "text", textVisitor)
    visit(ast, "code", textVisitor)
    visit(ast, "link", linkVisitor)
  }

  return transformer
}

const config = {
  title: "The leading FiveM framework",
  tagline: "The leading FiveM framework",
  url: `https://${consts.domain}`,
  baseUrl: "/",
  baseUrlIssueBanner: false,
  favicon: "/img/favicon.png",
  organizationName: "ESX-Framework",
  projectName: "ESX Framework",
  customFields: customFields,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  plugins: [
    require.resolve("./plugins/fetch-latest-release/index"),
    require.resolve("./plugins/fetch-repo/index"),
    require.resolve("./plugins/fetch-contributors-count/index"),
    require.resolve("./plugins/webpack-ts/index"),
    require.resolve("./plugins/optimize/index"),
    require.resolve("./plugins/manifest/index"),
    require.resolve("./plugins/delay-code-block-appearance"),
    [
      require.resolve("./plugins/tutorial/compiled/index"),
      {
        remarkPlugins: [variable, math],
        rehypePlugins: [katex],
      },
    ],
    [
      "@docusaurus/plugin-pwa",
      {
        pwaHead: [
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.webmanifest",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#7EC8E3",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#21222c",
          },
        ],
      },
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: "github-star",
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: "/img/og.gif",
    gtag: {
      trackingID: "GTM-PVR7M2G",
      anonymizeIP: true,
    },
    prism: {
      defaultLanguage: "lua",
      additionalLanguages: ["rust", "csharp", "julia", "cpp", "java"],
      theme: require("./src/internals/prism-github"),
      darkTheme: require("./src/internals/prism-dracula"),
    },
    algolia: {
      apiKey: "75e3329b163256ab9d0442c18600ec8f",
      indexName: "ESX",
    },
    navbar: {
      title: "ESX",
      logo: {
        alt: "ESX-Framework",
        src: "/img/favicon.png",
      },
      items: [
        {
          label: "Get Started",
          position: "left",
          items: [
            {
              label: "Infinity",
              to: "/docs/legacy/installation/",
            },
            {
              label: "legacy",
              to: "/docs/legacy/installation/",
            },
            {
              label: "reborn",
              to: "/docs/legacy/installation/",
            },
          ],
        },
        {
          label: "Community",
          position: "left",
          items: [
            {
              label: "GitHub",
              to: customFields.githubUrl,
            },
            {
              label: "Discord",
              to: "https://discord.gg/ztzKWAF",
            },
          ],
        },
        {
          label: "Documentation",
          to: "/docs/introduction/",
          position: "left",
        },
      ],
    },
    footer: {
      links: [
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          remarkPlugins: [variable, math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          remarkPlugins: [variable, math],
          rehypePlugins: [katex],
          feedOptions: {
            type: "all",
            copyright: customFields.copyright,
          },
          showReadingTime: true,
        },
        sitemap: {
          // Removed: https://github.com/ekalinin/sitemap.js/blob/master/CHANGELOG.md#50-breaking-changes
          // cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "daily",
          priority: 0.7,
          trailingSlash: true,
        },
        theme: {
          customCss: [
            require.resolve("./src/css/katex.min.css"),
            require.resolve("./src/css/_global.css"),
          ],
        },
      },
    ],
  ],
}

module.exports = {
  ...config,
  ssrTemplate: ssrTemplate(config),
}
