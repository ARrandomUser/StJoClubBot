// Changelog command - Made by Sam1222

exports.run = (client, message, args) => {
	const Discord = require('discord.js')

	var changelogBool = false
	var changelogMsgTitle = ''
	var changelogMsg = []
	var changelogMsgContent = ''

	message.delete()

	if (args.length === 0) {
		changelogBool = true
		args = ['2020-09-30','2020-10-01']
	}

	if (changelogBool === false) {
		changelogMsgTitle += 'Changelog pour:'

		for (let x = 0; x < args.length; x++) {
			changelogMsgTitle += ' *' + args[x] + '*'
		}
	}

	for (let x = 0; x < args.length; x++) {
		if (changelogMsgContent.length >= 800) {
			changelogMsg.push(changelogMsgContent)
			changelogMsgContent = ''
		}

		if (args[x] === '2020-09-30') {
			changelogMsgContent += '```python\n# v1.0.0 2020-09-30\n- Finalisation du Bot (Faites !help pour afficher la liste des commandes disponibles)\n```'
		}

		if (args[x] === '2020-10-01') {
			changelogMsgContent += '```python\n# v1.0.1 2020-10-01\n- Corrections de bugs:\n - !changelog affiche désormais la bonne date\n - !help affiche désormais les commandes suggest, reload et ping\nAjout de commandes:\n - !sourcecode\n```'
		}
	}

	if (changelogMsgContent != "") {
		changelogMsg.push(changelogMsgContent)
	}

	if (changelogMsgTitle.length > 256) {
		return message.author.send('Erreur: Le contenu du titre dépasse les 256 caractères')
	}

	if (changelogMsg.length > 25) {
		return message.author.send('Erreur: Le contenu du message dépasse les 20 000 caractères')
	}

	const embed = new Discord.MessageEmbed()
		.setColor('#34495e')
		.setAuthor(`Changelog créé par ${message.author.username}`, "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".png")
		.setTitle(changelogMsgTitle)

	if (changelogMsg.length == 0) {
		embed.addField(`Erreur`, 'Aucun des arguments ne correspond à une commande éxistante')
	}

	for (x in changelogMsg) {
		embed.addField(`Partie ${parseInt(x) + 1}`, changelogMsg[x])
	}

	message.author.send(embed)
}
