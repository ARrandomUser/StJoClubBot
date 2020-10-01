// Reload command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()

	if (!message.member.permissions.has('ADMINISTRATOR')) {
		return message.reply("tu n'as pas la permission d'effectuer la commande !reload").then(msg => msg.delete({timeout: 5000}))
	}

	try {
		delete require.cache[require.resolve(`./${args[0]}.js`)]
	} catch(e) {
		return message.channel.send(`Impossible de recharger la commande: !${args[0]}`).then(msg => msg.delete({timeout: 5000}))
	}
	message.channel.send(`Commande rechargée avec succès: !${args[0]}`).then(msg => msg.delete({timeout: 5000}))
}
