# Billy Herrington - Aniki bot for:
![Discord][Discord-logo]

[Discord-logo]: https://discordapp.com/assets/4ff060e44afc171e9622fbe589c2c09e.png 

Project includes a multi-purpose Discord bot based on [discord.js](https://github.com/hydrabolt/discord.js/) and a stats website built with [Meteor](https://meteor.com).

A fork from https://github.com/elmadev/botman 

Currently in a working but not so working state.

Feel free to contribute.

## Commands
Format: ` @prefix@command [optional argument] [multiple | choice | argument] <required argument>`

###`!log <item>`
Logs an item. Shorthands for common items available such as: `!bear`, `!cofe`, etc. - see !loggables

###`!loggables`
Shows the list of items available to log using an `!<item>` shorthand command

###`![today | week | month]` <item>
Shows the top loggers of the specified item in the specified time period

###`!draw [name]`
Shows the link to drawing game with optionally the provided room name included in the link

###`!github`
Shows the link to this repository

###`!trello[-invite]`
Shows the link to the Trello board, optionally making it an invite link

###`!playlist`
Shows the link to the Google Spreadsheet containing links to songs for the Music Bot's autoplaylist

###`!imdb <title>`
Lookup a title on imdb.com

###`!imdbupdate`
Import your imdb ratings (must have set link to vote list with `!set imdb <link>` first)

###`!imdbtop [series | game] [s:votes|s:bottom] [g:drama,action,..] [y:<year>]`
List servers top10 rated titles, with movies selected by default.

###`!set <setting> <value>`
Set or update a profile setting such as:
- `eol`: EOL nickname
- `lastfm`: Last.fm username
- `imdb`: Link to personal IMDB vote list
- `steam`: Link to Steam profile
- `rocket`: Link to Rocket League Rank profile
- `games`: List of games looking for players you want to be notified about (worms, csgo, rocketleague)

`!lastfm [username]`

Shows last song played on Last.fm

###`!rand [min] [max]`
Returns a random number between 0-100 or optionally between specified min and max

###`!worm`
Lets other players know you want to play Worms Armageddon

###`!rocket`
Lets other players know you want to play Rocket League

###`!csgo`
Lets other players know you want to play Counter-Strike: Global Offensive


## Deprecation
- Any EOL feature or at the very least restructure it to be a module and not part of the bot
- Any mentioning of G2A within the bot - due to questionable business practices

## Coming soon
- rewrite of the code to try and be more modular and have a package like oriented system
- certain mod features such as putting on rules and what not
- restructure of the settings.json file.
- reconstruct the commands being tied to the module itself and having it send the command to an array which then is parsed on a lookup table.
- ~~Fix the website~~ Works somewhat for now.
- **VERY FAR HEAD** Try and get meteor to use node v6




## Development starting guide:
- Install Meteor
  - Windows: https://install.meteor.com/windows
  - Linux: `curl https://install.meteor.com/ | sh`
- git clone this repo
- Create own server in Discord for testing purposes
- Rename `settings-example.json` to `settings-development.json` and add own bot token, api keys etc
- `npm install` in the project's folder
- Run locally with `meteor npm start`

### Windows issues
- You need python installed, version 2.x from https://www.python.org/downloads/
- You need some VS build tools, you can go through these instructions: https://github.com/nodejs/node-gyp (Option 1 worked for me)

## Contribution guidelines
Must keep code [JavaScript Standard Style](http://standardjs.com/) compliant (run `standard` in the project directory to make sure it is). Project structure roughly follows that suggested by [Base](https://github.com/themeteorchef/base)

Separation of concerns:
- Put various settings, simple response lists and helper functions in separate files whenever possible and import them where needed, to improve readability in the main bot file (`bot.js`)
