// Clear command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()

	if (!message.member.permissions.has('MANAGE_MESSAGE')) {
		return message.reply("tu n'as pas la permission d'effectuer la commande !clear").then(msg => msg.delete({timeout: 5000}))
	}

	let deleteAmount

	if (parseInt(args[0] > 100)) {
		deleteAmount = 100
	} else {
		deleteAmount = parseInt(args[0])
	}

	message.channel.bulkDelete(deleteAmount, true)
		.then(deleted => message.channel.send(`Messages supprimés: ${deleted.size}`)).then(msg => msg.delete({timeout: 5000}))
		.catch(err => message.channel.send(`Une erreur s'est produite:\n${err}`))
}
