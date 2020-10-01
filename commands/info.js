// Info command - Made by Sam1222

exports.run = (client, message, args) => {
	if (args.length > 0) {
		const Discord = require('discord.js')
		const embed = new Discord.MessageEmbed()
			.setColor('#1abc9c')
			.setAuthor(`Information créée par ${message.author.username}`, "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".png")
			.setTitle(args.join(' '))
			.setDescription('Maintenant, vous êtes au courant!')
			.setTimestamp()

		console.log(message.author)
		message.delete()

		message.channel.send(embed)
	}
	else {
		message.delete()
	}
}
