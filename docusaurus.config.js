module.exports = {
  title: "Omnify Digital",
  tagline:
    "Modern Websites and Apps that deliver better performance, today, and into the future.",
  url: "https://omnify.digital",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Sionnach Buí / Sionnach Solutions", // Usually your GitHub org/user name.
  projectName: "digital", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Omnify Digital",
      logo: {
        alt: "Omnify Digital",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/doc1",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/martinkilmartin/digital",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/doc1",
            },
            {
              label: "Second Doc",
              to: "docs/doc2",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/omnify.digital",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/omnify.digital",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/omnify.digital",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/martinkilmartin/digital",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sionnach Buí / Sionnach Solutions. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/martinkilmartin/digital/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/martinkilmartin/digital/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
