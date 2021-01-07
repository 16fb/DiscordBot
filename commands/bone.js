module.exports = {
	name: 'bone',
    description: 'boneofmysword',
    aliases: ['boneofmysword','boner','iamtheboneofmysword'],
    args: false,
    usage: '<> <>',
    guildOnly: false,
    execute(message, args)
    {
        var text = "I am the Bone of my Sword Steel is my Body and Fire is my Blood. I have created over a Thousand Blades, Unknown to Death"
        var text2 =  "Nor known to Life Have withstood Pain to create many Weapons Yet those Hands will never hold Anything. So, as I Pray- Unlimited Blade Works"
        message.channel.send(text, {
            tts: true
           })
        message.channel.send(text2, {
            tts: true
        })
	},
};