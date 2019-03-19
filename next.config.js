const withImages = require('next-images');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript(
  withImages({
    env: {
      GA_ID: process.env.GA_ID,
    },
    distDir: '../.next',
  }),
);