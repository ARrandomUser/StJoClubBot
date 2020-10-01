// Math command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	const math = require('mathjs')
	const Discord = require('discord.js')

	if (!args[0]) {
		message.reply('il manque un argument')
			.then(msg => {
				msg.delete({ timeout: 5000 })
			})
		return
	}

	let resp

	try {
		resp = math.evaluate(args.join(' '))
	} catch (e) {
		message.reply("l'opération est invalide")
			.then(msg => {
				msg.delete({ timeout: 5000 })
			})
		return
	}

	const embed = new Discord.MessageEmbed()
		.setColor('#f39c12')
		.setAuthor(`Calcul créé par ${message.author.username}`, "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".png")
		.setTitle('Calculatrice')
		.addField('Entrée', `\`\`\`js\n${args.join(' ')}\n\`\`\``)
		.addField('Sortie', `\`\`\`js\n${resp}\n\`\`\``)

	message.channel.send(embed)
}