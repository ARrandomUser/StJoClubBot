// Cpp command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()
	message.reply('```cpp\n' + args.join(' ') + '\n```')
}
