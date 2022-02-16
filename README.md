# Discowin ReImagined

Discowin Reimagined is a improved version of [DisCowin](https://github.com/darkphoenix2704/discowin) bot. The new bot is designed with scalability in mind.

## Important

This project is in WIP

## Requirements

Node.js v16.6 or Higher

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

## Contributing

Fork this repo, follow the installation process mentioned above(clone your repo after fork and not this one), make the required changes, push to your repo and create a pull request.
Please make sure to pull any changes in upstream before pushing your changes.

For major changes, please open an issue first to discuss what you would like to change.
