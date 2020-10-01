// Test command - Made by Sam1222

exports.run = (client, message, args) => {
	console.log('----------------------------')

	if (message.member.roles.cache.has('760893942551674891')) {
		console.log('YEP')
	}

	if (message.member.permissions.has('ADMINISTRATOR')) {
		console.log('YEP2')
	}

	message.delete()
}
