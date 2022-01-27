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
                {
                  type: "category",
                  label: "Game",
                  items: [
                    "legacy/client/functions/game/deleteobject",
                    "legacy/client/functions/game/deletevehicle",
                    "legacy/client/functions/game/getclosestEntity",
                    "legacy/client/functions/game/getclosestobject",
                    "legacy/client/functions/game/getclosestped",
                    "legacy/client/functions/game/getclosestplayer",
                    "legacy/client/functions/game/getclosestvehicle",
                    "legacy/client/functions/game/getobjects",
                    "legacy/client/functions/game/getpedmugshot",
                    "legacy/client/functions/game/getpeds",
                    "legacy/client/functions/game/getplayers",
                    "legacy/client/functions/game/getplayersinarea",
                    "legacy/client/functions/game/getvehicleindirection",
                    "legacy/client/functions/game/getvehicleproperties",
                    "legacy/client/functions/game/getvehicles",
                    "legacy/client/functions/game/getvehiclesinarea",
                    "legacy/client/functions/game/isspawnpointclear",
                    "legacy/client/functions/game/isvehicleempty",
                    "legacy/client/functions/game/setvehicleproperties",
                    "legacy/client/functions/game/spawnlocalobject",
                    "legacy/client/functions/game/spawnlocalvehicle",
                    "legacy/client/functions/game/spawnobject",
                    "legacy/client/functions/game/spawnvehicle",
                    "legacy/client/functions/game/teleport",
                  ],
                },
                "legacy/client/functions/getplayerdata",
                "legacy/client/functions/isplayerloaded",
                "legacy/client/functions/setplayerdata",
                "legacy/client/functions/showadvancednotification",
                "legacy/client/functions/showfloatinghelpnotification",
                "legacy/client/functions/showhelpnotification",
                "legacy/client/functions/showinventory",
                "legacy/client/functions/shownotification",
              ],
            },
          ],
        },
      "legacy/installation",
      ],
    },
  ].filter(Boolean),
}
