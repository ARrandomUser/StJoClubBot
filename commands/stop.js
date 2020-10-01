// Stop command - Made by Sam1222

exports.run = async (client, message, args) => {
	message.delete()
	let authorizedPersons = ["8797"]

	if (authorizedPersons.includes(message.author.discriminator) === false) {
		return message.reply("tu n'as pas la permission d'effectuer la commande !stop").then(msg => msg.delete({timeout: 5000}))
	}

	console.log('Stopped!')
	client.user.setPresence({ activity: { type: "PLAYING", name: 'Hors Service' },  status: 'idle' })
		.then(client.destroy())
}