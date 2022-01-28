const nodeFetch = require("node-fetch")

module.exports = () => ({
  name: "fetch-contributors-count",
  async loadContent() {
    const response = await nodeFetch(
      `https://github.com/esx-framework/esx-framework.github.io/blob/development/docs/credits.md`,
    )

    const data = await response.json()

    return data.contributors.length
  },
  async contentLoaded({ content, actions }) {
    const { setGlobalData } = actions
    setGlobalData({ contributorsCount: content })
  },
})