bot.on("message", async message =>{
	if(message.content === "antilink"){
        if (!message.guild) return message.reply(`\`Tu n'as pas le droit d'executer des commandes en DM.\``);
				if (!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.reply(`\`Tu n'as pas la permission de faire cette commande.\``);
		let msg = await message.channel.send("L'antilink à bien été activé sur le serveur.")

		let embed = new Discord.MessageEmbed()
		.addField("**Votre ping est de : ",Math.floor(msg.createdAt - message.createdAt))
		.addField("**Ma latence est de :", bot.ws.ping)
		message.channel.send(embed)
		msg.delete()
         
	}
})
bot.on("message", async message =>{
    await newchannel.send(`l'antilink à bien été activé sur le serveur <@!${message.author.id}>`);
	if(message.content === "antilink off"){
        if (!message.guild) return message.reply(`\`Tu n'as pas le droit d'executer des commandes en DM.\``);
				if (!message.member.hasPermission(`MANAGE_MESSAGES`)) return message.reply(`\`Tu n'as pas la permission de faire cette commande.\``);
		let msg = await message.channel.send("L'antilink est maintenant desactivé sur le serveur ")
        await newchannel.send(` <@!${message.author.id}>`);
		let embed = new Discord.MessageEmbed()
		message.channel.send(embed)
		
         
	}
})