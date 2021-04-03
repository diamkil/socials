export async function getSocialLink(social, user) {
    switch (social) {
        case "snap":
            const snapLink = "https://www.snapchat.com/add/" + user
            return snapLink
        case "discord":
            const discordLink = "https://discordapp.com/users/" + user
            return discordLink
        case "insta":
            const instaLink = "https://www.instagram.com/" + user
            return instaLink
        case "facebook":
            const fbLink = "https://www.facebook.com/" + user
            return fbLink
        case "twitter":
            const twitterLink = "https://twitter.com/" + user
            return twitterLink
        case "applemusic":
            const musicLink = "https://itunes.apple.com/profile/" + user
            return musicLink
        case "spotify":
            const spotifyLink = user
            return spotifyLink
    }
}

export async function getSocialName(social) {
    switch (social) {
        case "snap":
            return "Snap"
        case "discord":
            return "Discord"
        case "insta":
            return "Instagram"
        case "facebook":
            return "Facebook"
        case "twitter":
            return "Twitter"
        case "applemusic":
            return "Apple Music"
        case "spotify": 
            return "Spotify"
    }
}