// Help command - Made by Sam1222

exports.run = (client, message, args) => {
	const Discord = require('discord.js')

	var helpBool = false
	var helpMsgTitle = ''
	var helpMsg = []
	var helpMsgContent = ''

	message.delete()

	if (args.length === 0) {
		helpBool = true
		args = ['help','changelog',
			'html','css','js','python','c','cpp','h','yaml','json','asciidoc','autohotkey','bash','coffeescript','cs','diff','fix','glsl','ini','md','ml','tex','xl','xml',
			'stop','update','vote','draw','math','clear','suggest','info','reload','ping']
	}

	if (helpBool === false) {
		helpMsgTitle += 'Liste des Commandes pour:'

		for (let x = 0; x < args.length; x++) {
			helpMsgTitle += ' *' + args[x] + '*'
		}
	}

	helpMsgTitle += "\n*[text]* ➤ Argument optionnel\n*<text>* ➤ Argument obligatoire\n*...* ➤ L'argument précédent peut être répété"

	for (let x = 0; x < args.length; x++) {
		if (helpMsgContent.length >= 800) {
			helpMsg.push(helpMsgContent)
			helpMsgContent = ''
		}

		if (args[x] === 'help') {
			helpMsgContent += '```js\n!help [commande_1] [commande_2] [commande_3] ... // Renvoie la syntaxe de la commande```'
		}

		if (args[x] === 'info') {
			helpMsgContent += "```js\n!info <message> // Renvoie le message dans un cadre coloré pour qu'il soit mis en évidence```"
		}

		if (args[x] === 'changelog') {
			helpMsgContent += "```js\n!changelog [date] // Renvoie les modifications apportées lors des différentes mises à jour (de la date en question si précisée)```"
		}

		if (args[x] === 'html') {
			helpMsgContent += '```js\n!html <code> // Renvoie le code HTML avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'css') {
			helpMsgContent += '```js\n!css <code> // Renvoie le code CSS avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'js') {
			helpMsgContent += '```js\n!js <code> // Renvoie le code JS avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'python') {
			helpMsgContent += '```js\n!python <code> // Renvoie le code Python avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'py') {
			helpMsgContent += '```js\n!py <code> // Renvoie le code Python avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'c') {
			helpMsgContent += '```js\n!c <code> // Renvoie le code C avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'cpp' || args[x] === 'c++') {
			helpMsgContent += '```js\n!cpp <code> // Renvoie le code C++ avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'h') {
			helpMsgContent += '```js\n!h <code> // Renvoie le code H avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'yaml') {
			helpMsgContent += '```js\n!yaml <code> // Renvoie le code YAML avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'json') {
			helpMsgContent += '```js\n!json <code> // Renvoie le code JSON avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'asciidoc') {
			helpMsgContent += '```js\n!asciidoc <code> // Renvoie le code ASCIIDOC avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'autohotkey') {
			helpMsgContent += '```js\n!autohotkey <code> // Renvoie le code AUTOHOTKEY avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'bash') {
			helpMsgContent += '```js\n!bash <code> // Renvoie le code BASH avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'coffeescript') {
			helpMsgContent += '```js\n!coffeescript <code> // Renvoie le code COFFESCRIPT avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'cs') {
			helpMsgContent += '```js\n!cs <code> // Renvoie le code C# avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'diff') {
			helpMsgContent += '```js\n!diff <code> // Renvoie le code DIFF avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'fix') {
			helpMsgContent += '```js\n!fix <code> // Renvoie le code FIX avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'glsl') {
			helpMsgContent += '```js\n!glsl <code> // Renvoie le code GLSL avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'ini') {
			helpMsgContent += '```js\n!ini <code> // Renvoie le code INI avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'md') {
			helpMsgContent += '```js\n!md <code> // Renvoie le code MD avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'ml') {
			helpMsgContent += '```js\n!ml <code> // Renvoie le code ML avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'tex') {
			helpMsgContent += '```js\n!tex <code> // Renvoie le code TEX avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'xl') {
			helpMsgContent += '```js\n!xl <code> // Renvoie le code XL avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'xml') {
			helpMsgContent += '```js\n!xml <code> // Renvoie le code XML avec des couleurs pour rendre le code plus lisible```'
		}

		if (args[x] === 'stop') {
			helpMsgContent += '```js\n!stop // Éteint le Bot\n// Note: Cette commande est restrainte aux membres suivants: Sam1222#8797```'
		}

		if (args[x] === 'update') {
			helpMsgContent += '```js\n!update // Met le Bot en mode "Mise à jour". Dans ce mode, il est possible que certaines commandes ne fonctionnent pas.\n// Note: Cette commande est restrainte aux membres suivants: Sam1222#8797```'
		}

		if (args[x] === 'reload') {
			helpMsgContent += '```js\n!reload <command> // Recharge la commande\n// Note: Cette commande est restrainte aux membres suivants: Sam1222#8797```'
		}

		if (args[x] === 'draw') {
			helpMsgContent += '```js\n!draw <message> // Renvoie le message en ascii-art```'
		}

		if (args[x] === 'math') {
			helpMsgContent += '```js\n!math <calculation> // Renvoie le résultat du calcul ou de la conversion demandée```'
		}

		if (args[x] === 'clear') {
			helpMsgContent += '```js\n!clear <number> // Supprime un certain nombre de messages\n// Note: Cette commande est restrainte aux membres suivants: Sam1222#8797```'
		}

		if (args[x] === 'ping') {
			helpMsgContent += '```js\n!ping // Renvoie la latence de transmission entre le serveur et le Bot\n// Note: Cette commande est restrainte aux membres suivants: Sam1222#8797```'
		}

		if (args[x] === 'suggest') {
			helpMsgContent += "```js\n!suggest <message>\n// Renvoie une suggestion pour laquelle les utilisateurs peuvent voter\n// Note: Le vote s'effectue en cliquant sur les réactions se trouvant juste en dessous du sondage```"
		}

		if (args[x] === 'vote') {
			helpMsgContent += "```js\n!vote <message>\n// Renvoie un sondage pour lequel les utilisateurs peuvent voter\n// Note: Le vote s'effectue en cliquant sur les réactions se trouvant juste en dessous du sondage```"
		}
	}

	if (helpMsgContent != "") {
		helpMsg.push(helpMsgContent)
	}

	if (helpMsgTitle.length > 256) {
		return message.author.send('Erreur: Le contenu du titre dépasse les 256 caractères')
	}

	if (helpMsg.length > 25) {
		return message.author.send('Erreur: Le contenu du message dépasse les 20 000 caractères')
	}

	const embed = new Discord.MessageEmbed()
		.setColor('#9b59b6')
		.setAuthor(`Aide créée par ${message.author.username}`, "https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".png")
		.setTitle(helpMsgTitle)

	if (helpMsg.length == 0) {
		embed.addField(`Erreur`, 'Aucun des arguments ne correspond à une commande éxistante')
	}

	for (x in helpMsg) {
		embed.addField(`Partie ${parseInt(x) + 1}`, helpMsg[x])
	}

	message.author.send(embed)
}
