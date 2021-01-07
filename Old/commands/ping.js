module.exports = {
	name: 'ping',
	description: 'Ping!',    
	args: false,
	usage: false,
	cooldown: 3,
	execute(message, args) {
		message.channel.send('Pong.');
	},
};