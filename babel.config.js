module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '49',
          safari: '10',
          ie: '11',
        },
        useBuiltIns: 'usage',
        corejs: '3',
      },
    ],
  ],
};
