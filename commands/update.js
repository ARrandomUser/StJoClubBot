// Update command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	let authorizedPersons = ["8797"]

	if (authorizedPersons.includes(message.author.discriminator) === false) {
		return message.reply("tu n'as pas la permission d'effectuer la commande !update").then(msg => msg.delete({timeout: 5000}))
	}

	if (args[0] == 'stop') {
		client.user.setPresence({ activity: { type: "PLAYING", name: 'discord.js' },  status: 'online' })
	}
	else if (args[0] == 'start') {
		client.user.setPresence({ activity: { type: "PLAYING", name: 'Mise à jour...' },  status: 'dnd' })
	}
}
