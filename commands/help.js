const { prefix } = require('../config.json');
const fs = require('fs');

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 0,
	execute(message, args) {
		// message.channel.send("need to make" + command);
		//const name = bot.commands.get(all);
		//message.channel.send(` testing + ${name} `)

		/* Show usage of specific help*/
		if (false)
		{
			bot.getcommand(args)
			const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
			text = new Array();

			for (const file of commandFiles) 
			{
			}

		}
		else
		{
			/* Reads file names and send out list */

			const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
			text = new Array();

			for (const file of commandFiles) 
			{
				//sees a file, add it into command. 
				const command = require(`./${file}`); 
				text.push(` ${prefix}${command.name}`);
			}

			message.channel.send(` List of Commands include : ${text} `)

		}


	},
};