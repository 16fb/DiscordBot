const{prefix}= require('../config.json');

module.exports = {
	name: 'args-info',
    description: 'Shows info of arguments sent with this message.',
    args: true,
    usage:'<something>',
    execute(message, args) 
    {
        const { commands } = message.client;
        message.channel.send(`Command name: ${prefix}${commands}\nArguments: ${args}`);
         // not sure how this would work.
        message.channel.send(`Argument length: ${args.length}`);	
    }
};