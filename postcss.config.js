module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./source/assets/design-system/tailwind.config.js"),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
}