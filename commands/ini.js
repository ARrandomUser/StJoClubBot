// Ini command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```ini\n' + args.join(' ') + '\n```')
}
