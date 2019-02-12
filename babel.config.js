module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [
    [
      "import",
      {
        "libraryName": "iview",
        "libraryDirectory": "src/components"
      }
    ],
    ["import", {
      "libraryName": "we-vue",
      "style": "style.css"
    }, "we-vue"]
  ]
}