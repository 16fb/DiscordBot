const fs = require('fs');
const Discord = require("discord.js");
const axios = require('axios'); // Enable GET requests
const config = require('./config.json'); // naming the struct to be config?
const {token,prefix} = require('./config.json');
const bot = new Discord.Client(); // This is the bot 
bot.commands = new Discord.Collection(); // sets the folder we made into a collection.
const cooldowns = new Discord.Collection(); // Collection of Cooldowns

// Log Bot Ready
bot.on('ready', () => console.log(`FUCKING READY DUDE`) );

// Reads directory of bot commands.
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) 
{
    //sees a file, add it into command. 
	const command = require(`./commands/${file}`); 

	// set a new item in the Collection from command
	// with the key as the command name and the value as the exported module
	bot.commands.set(command.name, command);
}

// GET REQUEST

// const url = 'https://nhentai.net/api/galleries/search?query=female';
// axios.get(url)
// .then( json => 
// {
//     // var obj = JSON.parse(data);

//     // to find data length
//     // var data = json.data.length;
//     var book = json.data.result[0];
//     console.log(`book id is: ${book.id} `);
//     console.log(`media id is : ${book.media_id}`);
//     console.log(`title is : ${book.title.english}`);
//     console.log(`tags are : ${book.tags[0].name}`);
//     console.log(`number pages is : ${book.num_pages}`);
//     console.log(`number favourites is : ${book.num_favourites}`);

// })
// .catch(err => console.log(err))




bot.on('message', (message) => 
{
    // Activate on user Proper
    if (!message.content.startsWith(prefix) || message.author.bot)
    {
        return;
    } 

	const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    // find command from collection.
    const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    // Check command exists
    if (!command)
    { 
        message.reply('there is no such command.');
        return;
    }

    if (command.guildOnly && message.channel.type != 'text') 
    {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    if (command.args && !args.length) 
    {
        let reply = `You didn't provide any arguments, ${message.author}!`;
        if (command.usage)
        {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }

    if (!cooldowns.has(command.name)) 
    {
        cooldowns.set(command.name, new Discord.Collection());
    }
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 1) * 1000;

    if (timestamps.has(message.author.id)) 
    {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
        if (now < expirationTime) 
        {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    //console.log(`${timestamps.get(message.author.id)}`);

    try 
    {
	    command.execute(message, args);
    }catch (error) 
    {
	    console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});


bot.login(token); // Log the bot into the Server