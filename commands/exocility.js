module.exports = {
	name: 'exocility',
    description: 'Links to James twitch',
    aliases: ['bestdestinyplayer','filthyyasuomain','exo'],
    args: false,
    usage: '<> <>',
    guildOnly: false,
    execute(message, args)
    {
        message.channel.send(`https://www.twitch.tv/exocility`);
        
    },
};