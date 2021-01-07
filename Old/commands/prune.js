module.exports = {
	name: 'prune',
    description: 'Takes in a number from 1-100, prunes said number of messages.',
    args: true,
    guildOnly: true,
    usage: '<number from 1 to 100>',
    execute(message, args) 
    {
        const amount = parseInt(args[0]) + 1;
    
        if (isNaN(amount)) 
        {
            return message.reply('that doesn\'t seem to be a valid number.');
        }
        else if (amount <= 1 || amount > 100)
        {
            return message.reply(`Enter a number that is between 1 and 100.`)
        }
        message.channel.bulkDelete(amount, true).catch(err =>{
            console.error(err);
            message.channel.send(`There appears to be an error with pruning messages.`); 
            // maybe one day make it so that you give an error, then send something saying what kind of error it is?
        }

        );	
    },
};