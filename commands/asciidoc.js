// Asciidoc command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```asciidoc\n' + args.join(' ') + '\n```')
}
