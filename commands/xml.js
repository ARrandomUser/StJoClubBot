// Xml command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```xml\n' + args.join(' ') + '\n```')
}
