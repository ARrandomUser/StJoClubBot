// Html command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```html\n' + args.join(' ') + '\n```')
}
