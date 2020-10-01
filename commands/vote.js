// Vote command - Made by Sam1222

exports.run = (client, message, args) => {
	const Discord = require('discord.js')

	if (args.length > 0) {
		const embed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setAuthor(`Vote créé par ${message.author.username}`, "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".png")
			.setTitle(args.join(' '))
			.setDescription('Réagissez au vote!')
			.setTimestamp()

		message.delete()

		let voteMsg = message.channel.send(embed)
			.then(function (message) {
				message.react("✅")
				message.react("❎")
			}).catch(function() {
				})
	}
	else {
		message.delete()
	}
}
