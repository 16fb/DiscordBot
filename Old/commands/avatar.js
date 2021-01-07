module.exports = {
	name: 'avatar',
    description: 'shows avatar of users pinged.\n Author\'s avatar if no one pinged',
    args: false,
    usage: '<> <>',
    execute(message, args)
    {
        if (!message.mentions.users.size) // Return user avatar if no mention
        {
            return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
        }
    
        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
        });

        message.channel.send(avatarList);
	},
};