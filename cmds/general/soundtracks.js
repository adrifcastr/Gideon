const Discord = require("discord.js");
const Util = require("../../Util");

/**
 * @param {Discord.Client} gideon
 * @param {Discord.Message} message
 * @param {string[]} args
 */
module.exports.run = async (gideon, message) => {
    const sturls = [
        'https://open.spotify.com/album/0xiJwfDcZRQ77bsbjS9TF5', 
        'https://open.spotify.com/album/2EE7W74Rk1LDHzbYC9js2Z',
        'https://open.spotify.com/album/0DCUAyJVmG1fNxkBaZqFLt', 
        'https://open.spotify.com/album/12WS02J0JBAVeEGj6aJ7R8',
        'https://open.spotify.com/album/0Hsit07149488kiRI1UiaJ', 
        'https://open.spotify.com/album/234N1BIHMSxaKSVAM0JrOC', 
        'https://open.spotify.com/album/2SYmYysAbloAQkkr2TEncT', 
        'https://open.spotify.com/album/1IA3XNL6kv5zOpFG18M1au',
        'https://open.spotify.com/album/7ivC8XKulyl3akjhiRtJjA', 
        'https://open.spotify.com/album/2sT1ks3i5yn0ZAGGvZQv92', 
        'https://open.spotify.com/album/0jSqj8Tr0BrQIdqV4DZ9jD', 
        'https://open.spotify.com/album/7x4PDyJb3FJoYkRnF2hu2K',
        'https://open.spotify.com/album/6zXns0k78HUh5UlNprKhvf',
        'https://open.spotify.com/album/0ceTcs3rDUEiyzshxjJFdB', 
        'https://open.spotify.com/album/4r6t4EyqVZskLi0jD9yOhU', 
        'https://open.spotify.com/album/0FPZ6xZBcwsupOaxKULGAF',
        'https://open.spotify.com/album/4AtHQFEn8Qrp9aSSt0ehob', 
        'https://open.spotify.com/album/7vs9fu0ORNPmV2opBjLu5z', 
        'https://open.spotify.com/album/1jFljSQGFqtKkFNURoEOeI'
    ];

    const stracks = new Discord.MessageEmbed()
    .setColor('#2791D3')
    .setTitle('Arrowverse Soundtracks')
    .addField('The Flash', `[Season 1](${sturls[0]} '${sturls[0]}')\n[Season 2](${sturls[1]} '${sturls[1]}')\n[Season 3](${sturls[2]} '${sturls[2]}')\n[Season 4](${sturls[3]} '${sturls[3]}')`, true)
    .addField('Arrow', `[Season 1](${sturls[4]} '${sturls[4]}')\n[Season 2](${sturls[5]} '${sturls[5]}')\n[Season 3](${sturls[6]} '${sturls[6]}')\n[Season 4](${sturls[7]} '${sturls[7]}')\n[Season 5](${sturls[8]} '${sturls[8]}')\n[Season 6](${sturls[9]} '${sturls[9]}')`, true)
    .addField('Supergirl', `[Season 1](${sturls[10]} '${sturls[10]}')\n[Season 2](${sturls[11]} '${sturls[11]}')\n[Season 3](${sturls[12]} '${sturls[12]}')`, true)
    .addField('DC\'s Legends of Tomorrow', `[Season 1](${sturls[13]} '${sturls[13]}')\n[Season 2](${sturls[14]} '${sturls[14]}')\n[Season 3](${sturls[15]} '${sturls[15]}')`, true)
    .addField('Crossovers', `[The Flash vs. Arrow: Music Selections from the Epic 2-Night Event](${sturls[16]} '${sturls[16]}')\n[The Flash – Music From the Special Episode: Duet](${sturls[17]} '${sturls[17]}')\n[Crisis on Earth-X (Original Television Score)](${sturls[18]} '${sturls[18]}')`, true)
    .setFooter(Util.config.footer, gideon.user.avatarURL());

    message.channel.send(stracks);  
}

module.exports.help = {
    name: ["soundtracks", "tracks", "music"],
    type: "general",
    help_text: "soundtracks",
    help_desc: "Displays all soundtracks"
}