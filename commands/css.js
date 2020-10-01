// Css command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```css\n' + args.join(' ') + '\n```')
}
