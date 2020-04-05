"use strict";
const axios = require("axios");

const getJoke = async () => {
    const randomJoke = await axios({
        method: "get",
        headers: {
          Accept: "application/json"
        },
        url: "https://icanhazdadjoke.com/"
      });
    return randomJoke.data.joke 
}


module.exports = {
	name: 'joke',
    description: 'A very bad dad joke',
    aliases: [''],
    args: false,
    usage: '<> <>',
    guildOnly: false,
    execute(message, args)
    {
        sendJoke(message);
	},
};

async function sendJoke(message)
{
    try
    {
        var joke = await getJoke();
        message.channel.send(`${joke}`); 
    }
    catch (e)
    {
        console.error(e);
    }

}