## How to add users

Users are stored in the folder "people" I have mine in there as an example. The one named default.json will be binded to the root directory. The other ones will be the url directory (example if it's named felix.json then url will be http://example.com/felix)
Supported socials (for now) are: 
- Apple Music
- Discord
- Facebook
- Instagram
- Snapchat
- Spotify
- Twitter

## How to run

The two options for running are either in docker or on your machine using node.js
If running in Docker you can use the container I published (https://hub.docker.com/r/diamkil/socials)
If running on a machine you will need nodejs and Yarn. I will not cover installing node.js. To install Yarn:
```bash
npm i -g yarn
```
Once project is cloned you can go in the directory and run those commands:
```bash
# Download dependencies
yarn install
# Build project
yarn build
# Start production build
yarn start
```

## Contributing

If you are contributing I can assume you know about nodejs and yarn, so start by installing the dependencies
```bash
# Install dependencies
yarn install
# Start developpement server
yarn dev
```

If something is not at your liking you are more than open to open an issue
