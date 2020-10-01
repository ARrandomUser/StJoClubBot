// Js command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```js\n' + args.join(' ') + '\n```')
}
