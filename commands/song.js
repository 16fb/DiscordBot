module.exports = {
	name: 'song',
	description: 'youtube link of the best song!',
	args: false,
	usage: false,
	execute(message, args) {
        message.channel.send(`https://www.youtube.com/watch?v=6UlBUfRb83k`);
	},
};