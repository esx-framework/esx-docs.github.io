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
                  {
                    type: "category",
                    label: "Scaleform",
                    items: [
                      "legacy/client/functions/scaleform/utils/requestscaleformmovie",
                      "legacy/client/functions/scaleform/showbreakingnews",
                      "legacy/client/functions/scaleform/showfreemodemessage",
                      "legacy/client/functions/scaleform/showpopupmessage",
                      "legacy/client/functions/scaleform/showtrafficmovie",
                    ],
                },
                {
                  type: "category",
                  label: "Streaming",
                  items: [
                    "legacy/client/functions/streaming/requestanimdict",
                    "legacy/client/functions/streaming/requestanimset",
                    "legacy/client/functions/streaming/requestmodel",
                    "legacy/client/functions/streaming/requestnamedptfxasset",
                    "legacy/client/functions/streaming/requeststreamedtexturedict",
                    "legacy/client/functions/streaming/requestweaponasset",
                  ],
                },
                  {
                    type: "category",
                    label: "UI",
                    items: [
                      "legacy/client/functions/ui/showinventoryitemnotification",
                      {
                        type: "category",
                        label: "HUD",
                        items: [
                          "legacy/client/functions/ui/hud/registerelement",
                          "legacy/client/functions/ui/hud/removeelement",
                          "legacy/client/functions/ui/hud/setdisplay",
                          "legacy/client/functions/ui/hud/updateelement",
                        ],
                      },
                      {
                        type: "category",
                        label: "Menu",
                        items: [
                          "legacy/client/functions/ui/menu/open",
                          "legacy/client/functions/ui/menu/isopen",
                          "legacy/client/functions/ui/menu/getopened",
                          "legacy/client/functions/ui/menu/closeall",
                          "legacy/client/functions/ui/menu/close",
                        ],
                      },
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
                "legacy/client/functions/triggerservercallback",
              ],
            },
          ],
        },
      "legacy/installation",
      ],
    },
  ].filter(Boolean),
}
