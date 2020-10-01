// Xl command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```xl\n' + args.join(' ') + '\n```')
}
