// Yaml command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```yaml\n' + args.join(' ') + '\n```')
}
