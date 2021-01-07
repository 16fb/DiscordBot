// Generates a random nhentai link from 0 to 300k

module.exports = {
	name: 'nhentai',
	description: 'Sends a nhentai link with a random hentai or search for specific book by book id',
	args: false, // Asks if args required.
    usage: '<>',
	execute(message, args) {
        // arg is string array.

        // No Argument Given -> Random Book
        if (!args.length)
        {
            // Old Method 

            const num = Math.floor((Math.random() * 300000));
            message.reply(`https://nhentai.net/g/${num}/`);

            //message.reply(`https://nhentai.net/random/`);

            // New method
            //getRandomBook(message);


            return;
        } 

        // Ensure valid number of args, args <= 1
        if (args.length != 1) 
        {
            message.channel.send(`Please only give one argument`);
            return;
        }


        var string = args[0];
        message.reply(`https://nhentai.net/g/${string}/`);       
	},
};


// code thats not wroking

const axios = require("axios");

            
const getJoke = async () => {
    const randomBook = await axios({
        method: "get",
        headers: {
          Accept: "application/json"
        },
        url: "https://nhentai.net/random/"
      });
    return randomBook.id.toString(); 
}

async function getRandomBook(message)
{
    try
    {
        // var bookId = await getJoke();
        // console.log(bookId);
        message.channel.send("https://nhentai.net/random/");//`https://nhentai.net/g/${bookId}/`); 
    }
    catch (e)
    {
        console.error(e);
    }

}