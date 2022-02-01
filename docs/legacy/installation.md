# Installation

Instructions on how to download and install the basics of **ES Extended**.

## Requirements

- [oxmysql](https://github.com/overextended/oxmysql)
- spawnmanager

## Download

### Using Git

```diff
 cd resources
 git clone https://github.com/esx-framework/esx-legacy 
```

### Manually

- Download and Install `oxmysql` - [Documentation](https://overextended.github.io/oxmysql/)
- Download <https://github.com/esx-framework/esx-legacy>
- Put it in the `resource` directory

## Install

- Import `es_extended.sql` in your database
- Make sure your `server.cfg` to looks similar to this

```diff
add_principal group.admin group.user
add_ace resource.es_extended command.add_ace allow
add_ace resource.es_extended command.add_principal allow
add_ace resource.es_extended command.remove_principal allow
add_ace resource.es_extended command.stop allow


ensure oxmysql
ensure spawnmanager
ensure es_extended

ensure esx_menu_default
ensure esx_menu_list
ensure esx_menu_dialog
```

- Make Sure you are **NOT** running an of these resources:
  - `essentialmode`
  - `basic-gamemode`
  - `fivem-map-skater`
  - `fivem-map-hipster`
  - `default_spawnpoint`
