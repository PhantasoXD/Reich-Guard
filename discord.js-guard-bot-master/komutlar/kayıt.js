const Discord = require('discord.js');
module.exports.run = async (client, msg, args) => {

    let kay覺t = msg.guild.member(msg.mentions.users.first()) || msg.guild.member(args[0]);
    if (!kay覺t) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("Kendini etiketle!")
        }
    })

    let role = msg.guild.roles.find(r => r.name === "????|??ye");
    if (!role) {
        try {
            role = await msg.guild.Role({
            });

            msg.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }

    }

    if (kay覺t.roles.has(role.id)) return msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: (" Zaten 繹nceden kay覺t olmu??sun, botu mu bozcan git yav karde??im ")
        }
    });

    await kay覺t.addRole(role);
    msg.channel.send({
        embed: {
            color: Math.floor(Math.random() * (0xFFFFFF + 1)),
            description: ("Tebrikler kay覺t oldunuz, y繹nlendiriliyorsunuz bekleyin")
        }
    })
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'kay覺t-ol',
    description: 'Sunucuya kay覺t olursunuz!',
    usage: 'kay覺t-ol'
};