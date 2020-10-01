// Tex command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```tex\n' + args.join(' ') + '\n```')
}
