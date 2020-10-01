// Coffescript command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```coffescript\n' + args.join(' ') + '\n```')
}
