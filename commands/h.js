// H command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```h\n' + args.join(' ') + '\n```')
}
