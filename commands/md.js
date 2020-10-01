// Md command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```md\n' + args.join(' ') + '\n```')
}
