module.exports = {
  base: '/http-guide-notes/',
  title: 'httpGuidePdf notes',
  host: '0.0.0.0',
  description: 'httpGuidePdf notes',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg'
      }
    ]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Get started',
        collapsable: false,
        children: ['/javascript/001-get-started.md']
      }
    ]
  }
};
