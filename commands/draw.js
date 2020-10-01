// Draw command - Made by Sam1222

exports.run = (client, message, args) => {
	message.delete()

	const ascii = require('ascii-art')
	ascii.font(args.join(' '), 'Doom', function(err, rendered) {
		rendered = rendered.trimRight()

		if (rendered.length > 2000) {
			message.reply('désolé, le message est trop long!')
				.then(msg => {
					msg.delete({ timeout: 5000 })
					return
				})
		}
		message.reply(rendered, {
			code: 'md'
		})
	})
}
