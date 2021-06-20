module.exports = {
	run: async (message, args) => {
		if (!message.guild) return message.reply(`\`Tu n'as pas le droit d'executer des commandes en DM.\``);
			if (!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.reply(`\`Tu n'as pas la permission de faire cette commande.\``);
	
        const member = message.mentions.members.first()
		if (!member) return message.channel.send('Veuillez mentionnez le membre à exclure.')
		if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas exclure le propiétaire du serveur.')
		if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas ban.')
		if (!member.banable) return message.channel.send('**Le bot ne peut pas ban ce membre.**')
		const reason = args.slice(1).join(' ') || 'Ancune raison fournie'
		await member.ban(reason)
		message.channel.send(`$(member.user.tag) a été exclu !`)
		if(!member) return message.channel.send('Ce membre à bien été exclue de ce serveur')
 	},
name: 'ban'
 
};