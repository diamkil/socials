# Socials: Single Link You'll Ever Need to Share

[![CI/CD](https://github.com/diamkil/socials/actions/workflows/main.yml/badge.svg)](https://github.com/diamkil/socials/actions/workflows/main.yml)
![Code Size](https://img.shields.io/github/languages/code-size/diamkil/socials?label=Code%20Size)
![Issues](https://img.shields.io/github/issues/diamkil/socials)
![Pull Requests](https://img.shields.io/github/issues-pr/diamkil/socials)

Socials is a single-page website that stores all your social media and personal websites to share. It is similar to tappy.tech, sociallinks.co, and linktr.ee, but open-source and built using Typescript, Sass, Express.js and EJS. Self-hosting or publishing as a static website or Docker is recommended!

## Changelog

- Added Phone and Email
- Rewrote the app using Express and EJS, json file structure changed!
- Updated the icons to a higher resolution and similar design style
- Added several new icons (such as reddit, tumblr, dribbble, youtube and more), and rearranged the web interface to look pretty. Minor changes to display the content neatly on mobile devices.

## How to add users

Users are stored in the folder `/people`. There is a `.json` file to serve as an example. The one named `default.json` will be binded to the base directory. The other ones will be the url directory (example if it's named `felix.json` then url will be https://example.com/felix)

Supported socials (for now) are:

- Apple Music (`applemusic`)
- Behance (`behance`)
- Discord (`discord`)
- Dribbble (`dribbble`)
- Facebook (`facebook`)
- Github (`github`)
- Instagram (`instagram`)
- Linkedin (`linkedin`)
- Medium (`medium`)
- Phone (`phone`) _new_
- Pinterest (`pinterest`)
- Reddit (`reddit`)
- Snapchat (`snapchat`)
- Spotify (`spotify`)
- Tiktok (`tiktok`)
- Tumblr (`tumblr`)
- Twitch (`twitch`) _new_
- Twitter (`twitter`)
- Vimeo (`vimeo`)
- Custom Website (`website`)
- Whatsapp (`whatsapp`)
- Youtube (`youtube`)

## How to run

### [Docker](https://github.com/diamkil/socials/pkgs/container/socials) (recommended)

```
docker run -d \
    --name=Socials \
    -p 7574:7574/tcp \
    -v /path/to/socials/people:/app/people \
    ghcr.io/diamkil/socials:main
```

### Node.JS

```
git pull https://github.com/diamkil/socials
cd socials
yarn install (or npm i)
yarn build (or npm run build)
yarn start (or npm run start
```

You should be able to access the website on `localhost:7574`. Edit the `default.json` or create a new `.json` file with your info!

## Contributing

If you are contributing, we require using `yarn` for development, so start the project in `dev` mode and happy pull requesting:

```bash
# install the dependencies
yarn install
# run the project in development
yarn dev
```

If something is not to your liking, feel free to open an issue [here](https://github.com/diamkil/socials/issues).
