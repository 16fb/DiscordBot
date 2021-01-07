const axios = require('axios');

// Searches nhentai with GET resquest using args and returns first result

module.exports = {
	name: 'nhentaisearch',
    description: 'full page for nhentai, testing purposes',
    aliases: ['hentaisearch','nhentaiSearch','nhsearch','nhs','search'],
    args: true,
    usage: '<search query>',
    guildOnly: false,
    execute(message, args)
    {
        // place arguements into url
        var argsCombined = args.join(" ");
        const url = `https://nhentai.net/api/galleries/search?query=${argsCombined}`;


        // GET and display first result
        axios.get(url)
        .then( json => 
        {
            // var obj = JSON.parse(data);

            // to find data length
            // var data = json.data.length;


            var book = json.data.result[0];
            // console.log(`book id is: ${book.id} `);
            // console.log(`media id is : ${book.media_id}`);
            // console.log(`title is : ${book.title.english}`);
            // console.log(`tags are : ${book.tags[0].name}`);
            // console.log(`number pages is : ${book.num_pages}`);
            // console.log(`number favourites is : ${book.num_favourites}`);

            message.channel.send(`https://nhentai.net/g/${book.id}/`);

        })
        .catch(err => console.log(err));

	},
};