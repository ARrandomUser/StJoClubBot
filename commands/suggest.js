// Suggest command - Made by Sam1222

exports.run = (client, message, args) => {
	const Discord = require('discord.js')

	if (args.length > 0) {
		const embed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setAuthor(`Suggestion de ${message.author.username}`, "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".png")
			.setDescription(args.join(' '))
			.setTimestamp()

		message.delete()

		let channelID = ''

		if (message.guild.id == '760893580943294496') { // Club Info
			channelID = '760901031247740990'
		} else if (message.guild.id == '760531978524295220') { // Club Jeux de Société
			channelID = '760536061377380412'
		}

		if (channelID != '') {
			client.channels.cache.get(channelID).send(embed)
				.then(function (message) {
					message.react("👍")
					message.react("👎")
				}).catch(function() {
					})
		}
	}
	else {
		message.delete()
	}
}
