## How to Configure

1. Clone the project

```
git clone -b main https://github.com/DarkPhoenix2704/discowin-reimagined.git
```

2. Go to Project Directory

```
cd discowin-reimagined
```

3. Install Dependencies

```
yarn
```

4. Create .env

```
BOT_TOKEN=
DBSERVER=
PREFIX=
```

Get the BOT_TOKEN from Discord Developer portal after creating an application and a bot.
DBSERVER is for mongodb
PREFIX is the bot prefix to call commands (e.g. ?help -> ? is the PREFIX)

5. Run The Bot

```
yarn start
```

or

```
node src/index.js
```