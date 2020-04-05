const axios = require('axios');

// when s
// can search by text or by tag number

// lets make it use the already made search function to search for tag.

module.exports = {
	name: 'nhentaitag',
    description: 'Search random book by tag',
    aliases: ['nhtag','nhTag'],
    args: true,
    usage: '<> <>',
    guildOnly: false,
    execute(message, args)
    {
        var TAG_ID = args[0];
        
        //var url = `https://nhentai.net/api/galleries/tagged?tag_id=${TAG_ID}`
        var url = `https://nhentai.net/api/galleries/search?query=${TAG_ID}`

        axios.get(url)
        .then( json => 
        {
            // read number of books of selected tag
            // traverse to select a random book.

            var total_pages = json.data.num_pages;
            var random_num = Math.floor((Math.random() * (total_pages*25) ));

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