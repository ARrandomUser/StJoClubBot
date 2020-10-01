// Ml command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```ml\n' + args.join(' ') + '\n```')
}
