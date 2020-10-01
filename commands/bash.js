// Bash command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```bash\n' + args.join(' ') + '\n```')
}
