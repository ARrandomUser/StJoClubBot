// Main file - Made by Sam1222

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', async message => {
	let args = message.content.slice('!').trim().split(' ')
	let cmd = args.shift().toLowerCase()

	if (message.author.bot) {return}
	if (!message.content.startsWith('!')) {return}

	try {
		delete require.cache[require.resolve(`./commands/${cmd}.js`)]
		let commandFile = require(`./commands/${cmd}.js`)
		commandFile.run(client, message, args)
	} catch(e) {
		console.log(e.stack)
		message.delete()
	}
})

client.on('ready', function() {
	console.log(`\x1b[33m%s\x1b[0m`,'[WARN]','\x1b[0m','Connexion en cours...')
	console.log(`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m', 'Connexion à l\'API Discord.js effectuée')
	console.log(`\x1b[36m%s\x1b[0m`,'[INFO]', '\x1b[0m','Connecté sur "' + client.user.username + '#' + client.user.discriminator + '"')
	console.log(`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Chargement terminé')
	console.log(`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Prêt et connecté - Développé par Sam1222.')

	client.user.setPresence({ activity: { type: "PLAYING", name: 'discord.js' },  status: 'online' })
	client.user.setAvatar('./textures/bot.png')
})

client.login(process.env.TOKEN)


