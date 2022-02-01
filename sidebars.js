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
        {
          type: "category",
          label: "Commands",
          items: [
            "legacy/commands/admin/principals",
            "legacy/commands/admin/car",
            "legacy/commands/admin/coords",
            "legacy/commands/admin/deletevehicle",
            "legacy/commands/admin/save",
            "legacy/commands/admin/saveall",
            "legacy/commands/admin/giveitem",
            "legacy/commands/admin/giveweapon",
            "legacy/commands/admin/giveweaponcomponent",
            "legacy/commands/admin/clearinventory",
            "legacy/commands/admin/clearall",
            "legacy/commands/admin/clearLoadout",
            "legacy/commands/admin/giveaccountmoney",
            "legacy/commands/admin/setaccountmoney",
            "legacy/commands/admin/setcoords",
            "legacy/commands/admin/setgroup",
            "legacy/commands/admin/setjob",
            "legacy/commands/admin/tpm",
            "legacy/commands/admin/goto",
            "legacy/commands/admin/bring",
            "legacy/commands/admin/freeze",
            "legacy/commands/admin/unfreeze",
            "legacy/commands/admin/job",
            "legacy/commands/admin/group",
            "legacy/commands/admin/info",
            "legacy/commands/admin/kill",
          ],
        },
        {
          type: "category",
          label: "Common",
          items: [
            {
              type: "category",
              label: "Events",
              items: [
                "legacy/common/events/onplayerdeath",
              ],
            },
            {
              type: "category",
              label: "Functions",
              items: [
                "legacy/common/functions/cleartimeout",
                "legacy/common/functions/dumptable",
                "legacy/common/functions/getconfig",
                "legacy/common/functions/getrandomstring",
                "legacy/common/functions/getweapon",
                "legacy/common/functions/getweaponcomponent",
                "legacy/common/functions/getweaponlabel",
                "legacy/common/functions/getweaponlist",
                "legacy/common/functions/groupdigits",
                "legacy/common/functions/round",
                "legacy/common/functions/setimeout",
                "legacy/common/functions/trim",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Server",
          items: [
            {
              type: "category",
              label: "xPlayer",
              items: [
                "legacy/server/xplayer/functions/addaccountmoney",
                "legacy/server/xplayer/functions/addinventoryitem",
                "legacy/server/xplayer/functions/addmoney",
                "legacy/server/xplayer/functions/addweapon",
                "legacy/server/xplayer/functions/addweaponammo",
                "legacy/server/xplayer/functions/addweaponcomponent",
                "legacy/server/xplayer/functions/cancarryitem",
                "legacy/server/xplayer/functions/canswapitem",
                "legacy/server/xplayer/functions/getaccount",
                "legacy/server/xplayer/functions/getaccounts",
                "legacy/server/xplayer/functions/getcoords",
                "legacy/server/xplayer/functions/getgroup",
                "legacy/server/xplayer/functions/getidentifier",
                "legacy/server/xplayer/functions/getinventory",
                "legacy/server/xplayer/functions/getinventoryitem",
                "legacy/server/xplayer/functions/getjob",
                "legacy/server/xplayer/functions/getloadout",
                "legacy/server/xplayer/functions/getmissingaccounts",
                "legacy/server/xplayer/functions/getmoney",
                "legacy/server/xplayer/functions/getname",
                "legacy/server/xplayer/functions/getweapon",
                "legacy/server/xplayer/functions/getweight",
                "legacy/server/xplayer/functions/hasweapon",
                "legacy/server/xplayer/functions/hasweaponcomponent",
                "legacy/server/xplayer/functions/removeaccountmoney",
                "legacy/server/xplayer/functions/removeinventoryitem",
                "legacy/server/xplayer/functions/kick",
                "legacy/server/xplayer/functions/removemoney",
                "legacy/server/xplayer/functions/removeweapon",
                "legacy/server/xplayer/functions/removeweaponammo",
                "legacy/server/xplayer/functions/removeweaponcomponent",
                "legacy/server/xplayer/functions/setaccountmoney",
                "legacy/server/xplayer/functions/setcoords",
                "legacy/server/xplayer/functions/setinventoryitem",
                "legacy/server/xplayer/functions/setjob",
                "legacy/server/xplayer/functions/setmaxweight",
                "legacy/server/xplayer/functions/setmoney",
                "legacy/server/xplayer/functions/setname",
                "legacy/server/xplayer/functions/setweapontint",
                "legacy/server/xplayer/functions/showhelpnotification",
                "legacy/server/xplayer/functions/shownotification",
                "legacy/server/xplayer/functions/triggerevent",
                "legacy/server/xplayer/functions/updatecoords",
              ],
            },
            {
              type: "category",
              label: "Functions",
              items: [
                "legacy/server/functions/createpickup",
                "legacy/server/functions/doesjobexist",
                "legacy/server/functions/getitemlabel",
                "legacy/server/functions/getplayerfromid",
                "legacy/server/functions/getplayerfromidentifier",
                "legacy/server/functions/getplayers",
                "legacy/server/functions/registercommand",
                "legacy/server/functions/registerservercallback",
                "legacy/server/functions/registerusableitem",
                "legacy/server/functions/saveplayer",
                "legacy/server/functions/saveplayers",
                "legacy/server/functions/trace",
                "legacy/server/functions/useitem",
              ],
            },
          ],
        },
      "legacy/installation",
      ],
    },
    {
      label: "Infinity",
      type: "category",
      items: [
      "infinity/installation",
      ],
    },
    {
      label: "Reborn",
      type: "category",
      items: [
      "reborn/installation",
      ],
    },
  ].filter(Boolean),
}
