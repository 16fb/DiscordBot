module.exports = {
	name: 'hello',
	description: 'Replies to the fuckboi saying hello',
	args: false,
    usage: '<> <>',
	execute(message, args) {
		message.reply(`i fucking hate anyone with letters in their name`);
	},
};