// Ping command - Made by Sam1222

exports.run = async (client, message, args) => {
	message.delete()
	let stopAuthorizedPersons = ["8797"]
	var stopUserId = message.author.discriminator

	if (stopAuthorizedPersons.includes(stopUserId) === false) {
		return message.reply("tu n'as pas la permission d'effectuer la commande !ping").then(msg => msg.delete({timeout: 5000}))
	}

	const pingMsg = await message.channel.send(':ping_pong: Pinging...')

	pingMsg.edit(`:ping_pong: Pong\nLatence: ${Math.floor(pingMsg.createdAt - message.createdAt)}ms\nLatence de l'API: ${Math.round(client.ping)}ms`).then(msg => msg.delete({timeout: 10000}))
}
