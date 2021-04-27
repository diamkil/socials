# Socials: Single Link You'll Ever Need to Share
Socials is a single-page website that stores all your social media and personal websites to share. It is similar to tappy.tech, sociallinks.co, compiled.social and linktr.ee, but open-source and built on Next.js 👨🏽‍💻. Self-hosting or publishing as a static website using the source code or Docker recommended!

## Changelog

- Updated the icons to a higher resolution and similar design style
- Added several new icons (such as reddit, tumblr, dribbble, youtube and more), and rearranged the web interface to look pretty. Minor changes to display the content neatly on mobile devices.
- Added icons for naming Instagram either 'insta' or 'instagram' did the same for snapchat
- Added support for custom websites

## How to add users

Users are stored in the folder "people". There is a `.json` file to serve as an example. The one named `default.json` will be binded to the root directory. The other ones will be the url directory (example if it's named `felix.json` then url will be https://example.com/felix)

Supported socials (for now) are: 
- Apple Music (appleMusic) music
- Behance (behance) _new_
- Discord (discord)
- Dribbble (dribbble) _new_
- Facebook (facebook)
- Github (github)
- Instagram (insta or instagram)
- Linkedin (linkedin)
- Medium (medium) _new_
- Pinterest (pinterest) _new_
- Reddit (reddit) _new_
- Snapchat (snap or snapchat)
- Spotify (spotify)
- Tumblr (tumblr) _new_
- Twitter (twitter)
- Vimeo (vimeo) _new_
- Custom Website (website) _new_
- Whatsapp (whatsapp) _new_
- Youtube (youtube) _new_

## How to run

The two options for running are either as a [docker container](https://registry.hub.docker.com/r/diamkil/socials) or on your machine using node.js/next.js.

Run the project using `npm` or `yarn`:

```bash
# Skip this step if using the bulit-in `npm`
npm i -g yarn
```

Once project is cloned you can go in the directory and run these `yarn` commands:
```bash
# Download dependencies
yarn install
# Build project
yarn build
# Start production build
yarn start
```
Or run the following `npm` commands:
```bash
# Download dependencies
npm install
# Build project
npm build
# Start production build
npm run start
```

You should be able to access the website on `localhost:3000`. Edit the `defaults.json` with your info and build the project to publish it!

## Contributing

If you are contributing I assume you know about `nodejs` and `yarn`, so start the project in development mode and happy pull requesting:
```bash
# yarn 🧶
yarn install && yarn dev
# npm 📦
npm install && npm run dev
```

If something is not at your liking, feel free to open an issue [here](https://github.com/diamkil/socials/issues)
