// Diff command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```diff\n' + args.join(' ') + '\n```')
}
