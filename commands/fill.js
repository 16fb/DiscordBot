module.exports = 
{
	name: 'fill',
    description: 'select a role from fill',
    aliases: ['fill','filler','role'],
    args: false,
    usage: '',
    guildOnly: false,
    execute(message, args)
    {
        // Math.random() never gives a 1 or 0
        let randNum = Math.floor( Math.random()*5 );
        let role = '';

        switch (randNum)
        {
            case 0:
                role = 'Top';
                break;
            case 1:
                role = 'Jungle';
                break;
            case 2:
                role = 'Mid';
                break;
            case 3:
                role = 'Adc';
                break;
            case 4: 
                role = 'Sp';
                break;
        }

        let channelOut = `Play ${role}`;

        message.channel.send(channelOut);

        

	},
};