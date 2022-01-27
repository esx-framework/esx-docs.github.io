let guidelines

if (process.env.NODE_ENV === "development") {
  guidelines = {
    label: "Guidelines (DEV ONLY)",
    type: "category",
    items: [
      {
        type: "category",
        label: "Templates",
        items: [
          "__guidelines/template/guide",
          "__guidelines/template/function",
          "__guidelines/template/sql",
        ],
      },
      "__guidelines/naming-convention",
      "__guidelines/content-hierarchy",
      "__guidelines/lexicon",
      "__guidelines/markdown",
      "__guidelines/sql-code-blocks",
      "__guidelines/influences",
    ],
  }
}

module.exports = {
  docs: [
    {
      id: "introduction",
      type: "doc",
    },
    {
      label: "Legacy",
      type: "category",
      items: [
        {
          type: "category",
          label: "Client",
          items: [
            {
              type: "category",
              label: "Events",
              items: [
                "legacy/client/events/playerloaded",
                "legacy/client/events/showadvancednotification",
                "legacy/client/events/showhelpnotification",
                "legacy/client/events/shownotification",
              ],
            },
            {
              type: "category",
              label: "Functions",
              items: [
                "legacy/client/functions/getplayerdata",
                "legacy/client/functions/isplayerloaded",
                "legacy/client/functions/setplayerdata",
                "legacy/client/functions/showadvancednotification",
              ],
            },
          ],
        },
      "legacy/installation",
      ],
    },
  ].filter(Boolean),
}
