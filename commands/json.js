// Json command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```json\n' + args.join(' ') + '\n```')
}
