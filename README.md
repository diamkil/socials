# Socials: Single Link You'll Ever Need to Share
Socials is a single-page website that stores all your social media and personal websites to share. It is similar to tappy.tech, sociallinks.co, and linktr.ee, but open-source and built on Next.js. Self-hosting or publishing as a static website or Docker is recommended!

## Changelog

- Updated the icons to a higher resolution and similar design style
- Added several new icons (such as reddit, tumblr, dribbble, youtube and more), and rearranged the web interface to look pretty. Minor changes to display the content neatly on mobile devices.
- Added icons for naming Instagram either 'insta' or 'instagram' and did the same for Snapchat
- Added support and icon for custom websites

## How to add users

Users are stored in the folder `/people`. There is a `.json` file to serve as an example. The one named `default.json` will be binded to the base directory. The other ones will be the url directory (example if it's named `felix.json` then url will be https://example.com/felix)

Supported socials (for now) are: 
- Apple Music (`appleMusic`)
- Behance (`behance`) _new_
- Discord (`discord`)
- Dribbble (`dribbble`) _new_
- Facebook (`facebook`)
- Github (`github`)
- Instagram (`insta` or `instagram`)
- Linkedin (`linkedin`)
- Medium (`medium`) _new_
- Pinterest (`pinterest`) _new_
- Reddit (`reddit`) _new_
- Snapchat (`snap` or `snapchat`)
- Spotify (`spotify`)
- Tiktok (`tiktok`) _new_
- Spotify (`spotify`)
- Spotify (`spotify`)
- Tumblr (`tumblr`) _new_
- Twitter (`twitter`)
- Vimeo (`vimeo`) _new_
- Custom Website (`website`) _new_
- Whatsapp (`whatsapp`) _new_
- Youtube (`youtube`) _new_

## How to run

The two options for running are either as a [docker container](https://registry.hub.docker.com/r/diamkil/socials) or host it using node.js/next.js.

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

You should be able to access the website on `localhost:3000` or if using Docker, access the website on `localhost:7574`. Edit the `defaults.json` or create a new `.json` file with your info and build the project to see changes!

## Contributing

If you are contributing, we require using `yarn` for development, so start the project in `dev` mode and happy pull requesting:
```bash
# install the dependencies
yarn install
# run the project in development
yarn dev
```

If something is not to your liking, feel free to open an issue [here](https://github.com/diamkil/socials/issues).
