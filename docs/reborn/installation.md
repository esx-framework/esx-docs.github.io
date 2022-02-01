
# Installation

**NOTE: SHOULD NOT BE USED**
Instructions on how to download and install **es_extended** *develop branch*.

## Requirements

NOTE: SHOULD NOT BE USED

- [MariaDB Server](https://downloads.mariadb.org/) (we will not support MySQL)
- [Mysql-Async](https://github.com/brouznouf/fivem-mysql-async)
- [NodeJs 8+](https://nodejs.org/en/)
- [Async](https://github.com/esx-framework/async)
- [Cron](https://github.com/esx-framework/cron)

## Download

NOTE: SHOULD NOT BE USED

### Using Git

```git
git clone https://github.com/es_extended/tree/develop
```

### Manually

- Download <https://github.com/esx-framework/es_extended/tree/develop>

### How to Install

**NOTE: SHOULD NOT BE USED**
"How install MariaDB on linux"
    1. Run `sudo nano /etc/yum.repos.d/MariaDB.repo`
    2. Paste the following:

```sql
[mariadb]
name = MariaDB
baseurl = <http://yum.mariadb.org/10.5.3/centos7-amd64>
gpgkey=<https://yum.mariadb.org/RPM-GPG-KEY-MariaDB>
gpgcheck=1
```

  1. Then Ctrl+X, then y to save, then enter
  2. Run `sudo yum remove mariadb-server`
  3. Run `sudo yum remove mariadb`
  4. Run `sudo yum install mariadb`
  5. Run `sudo yum install mariadb-server`
  6. Add `sql_mode='MYSQL40'` below `[mariadb]` in `/etc/my.cnf.d/server.cnf`
  7. Run `mariadb-upgrade`
  8. Run `service mysql restart`

- Put the resources in the `cfx-server-data/resources` directory
- Import `es_extended.sql` in your database
- Open a cmd in the es_extended resource.
- Type `npm i` or `yarn install` in-order-to install node_modules. If you want to use Node.js, install it from: <https://nodejs.org/en/>. If you want to use yarn, install it from: <https://classic.yarnpkg.com/en/docs/install/#windows-stable>. Choose the stable version. This is only if you haven't already installed it. NOTE: Do not change the directory!
- Copy the part of the `server.cfg` sample and paste it to yours.

```diff
set mysql_connection_string "mysql://user:password@localhost/es_extended?charset=utf8mb4"

stop webadmin

ensure mapmanager
ensure chat
ensure spawnmanager
ensure sessionmanager
ensure hardcap
ensure rconlog
ensure baseevents

ensure yarn

ensure mysql-async
ensure cron

ensure es_extended # Will now auto-generate fxmanifest.lua to prevent platform-dependant behavior, will prompt you to type ensure es_extended in console when fxmanifest has changed. To save some typing, uncomment below lines

add_ace resource.es_extended command.add_ace allow
add_ace resource.es_extended command.remove_principal allow
add_ace resource.es_extended command.add_principal allow
add_ace resource.es_extended command.remove_ace allow
add_ace resource.es_extended command.list_aces allow
add_ace resource.es_extended command.list_principals allow
add_ace resource.es_extended command.remove_aces_for_object allow

```
