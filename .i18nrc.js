const { defineConfig } = require('@lobehub/i18n-cli');

const outputLocales = [
  'en-US',
  'fa-IR',
];

module.exports = defineConfig({
  modelName: 'gpt-4o-mini',
  outputLocales: outputLocales,
  markdown: {
    // entry: ['./pages/zh-CN/**/*.mdx', './pages/zh-CN/**/*.ts'],
    entry: ['./pages/zh-CN/docs/quick/*.mdx'],
    exclude: [
      './pages/zh-CN/docs/quick/zeabur.mdx',
      './pages/zh-CN/docs/quick/_meta.ts',
      './pages/zh-CN/docs/quick/docker.*.ts',
      // './pages/zh-CN/_meta.ts',
      // './pages/zh-CN/changelog',
    ],
    entryLocale: 'zh-CN',
    outputExtensions: (locale, config) => {
      if (locale === 'zh-CN') {
        return config.filePath.endsWith('.ts') ? '.ts' : '.mdx';
      }
      return config.filePath.endsWith('.ts') ? `.${locale}.ts` : `.${locale}.mdx`;
    },
    translateCode: true,
    includeMatter: true,
  },
});
