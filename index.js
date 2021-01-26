const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
prefix = '.'
blocked = []


var casas = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
var posx = null;
var posy = null;
var player = null;
var game_ativ = false;
var player1 = null;
var player2 = null;

function velha(casas, x, y, player){
	var sig = null;
	if (verificar_casa(casas, x, y)!=0){
		if (player == 1) sig = '❌'
		if (player == 2) sig = '⭕'
		casas[x][y]=sig

	imprime_jogo(casas)

	client.sendMessage(from, verificar_win(casas), text)
	}
}

function verificar_win(casas){


	if (casas[0][0]&&casas[0][1]&&casas[0][2] == '❌') {
		game_ativ = false
		return client.sendMessage(from, `player 1 ganhou`, text)
	}
	else if (casas[0][0]&&casas[0][1]&&casas[0][2] == "⭕") {
		game_ativ = false
		return client.sendMessage(from, `player 2 ganhou`, text)
	}

	else if (casas[1][0]&&casas[1][1]&&casas[1][2] == '❌') {
		game_ativ = false
		return client.sendMessage(from, `player 1 ganhou`, text)
	}
	else if (casas[1][0]&&casas[1][1]&&casas[1][2] == "⭕") {
		game_ativ = false
		return client.sendMessage(from, `player 2 ganhou`, text)
	}

	else if (casas[2][0]&&casas[2][1]&&casas[2][2] == '❌') {
		game_ativ = false
		return client.sendMessage(from, `player 1 ganhou`, text)
	}
	else if (casas[2][0]&&casas[2][1]&&casas[2][2] == '⭕') {
		game_ativ = false
		return client.sendMessage(from, `player 2 ganhou`, text)
	}

	else if (casas[0][0]&&casas[1][1]&&casas[2][2] == '❌') {
		game_ativ = false
		return client.sendMessage(from, `player 1 ganhou`, text)
	}
	else if (casas[0][0]&&casas[1][1]&&casas[2][2] == '⭕') {
		game_ativ = false
		return client.sendMessage(from, `player 2 ganhou`, text)
	}

	else if (casas[0][2]&&casas[1][1]&&casas[2][0] == '❌') {
		game_ativ = false
		return client.sendMessage(from, `player 1 ganhou`, text)
	}
	else if (casas[0][2]&&casas[1][1]&&casas[2][0] == '⭕') {
		game_ativ = false
		return client.sendMessage(from, `player 2 ganhou`, text)
	}

	else if (casas[0][0]&&casas[0][1]&&casas[0][2]&&casas[1][0]&&casas[1][2]&&casas[1][3]&&casas[2][0]&&casas[2][1]&&casas[2][2] != null) return client.sendMessage(from, 'Os dois são podres, ninguém ganhou', text)

	return client.sendMessage(from, `aguardando o outro player...`, text)

}



function imprime_jogo(casas){
	for(let casa of casas){

	}
}

function verificar_casa(casas, x, y){
	if (casas[x][y]!= null) return 0
	else return 1
}

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Connecting...')
	})
	client.on('open', () => {
		success('2', 'Connected')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]

				//try {
				//	ppimg = 'https://giphy.com/gifs/hE5NMSDJTRwM22rOuL/html5'
				//} catch {
				//	ppimg = 'https://giphy.com/gifs/hE5NMSDJTRwM22rOuL/html5'
				//}

				teks = `Dale @${num.split('@')[0]} ✌️🍃\nSeja bem vindo a *${mdata.subject}*, também conhecida como o grupo mais podre da twitch 🤢🤮`
				//let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, { url: 'src/welc.mp4' }, MessageType.video, {mimetype: Mimetype.gif,caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]

				//try {
				//	ppimg = 'https://giphy.com/gifs/8DyXPGfPhQu64LPAvn/html5'
				//} catch {
				//	ppimg = 'https://giphy.com/gifs/8DyXPGfPhQu64LPAvn/html5'
				//}

				teks = `Já vai tarde @${num.split('@')[0]}👋`
				//let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, { url: 'src/ban.mp4' }, MessageType.video, {mimetype: Mimetype.gif, caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			corpo = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''

			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const comando = body.trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)

			mess = {
				wait: '⌛ Espera aí corno ⌛',
				success: '✔️ Sou brabor, funcionou ✔️',
				error: {
					stick: '❌ Travei, tentei converter a imagem em sticker mas n deu n menó ❌',
					Iv: '❌ Link inválido ❌'
				},
				only: {
					group: '❌ Esse comando só pode ser usado em grupos! ❌',
					ownerG: '❌ Esse comando só pode ser usado pelo dono do grupo! ❌',
					ownerB: '❌ Esse comando só pode ser usado pelo dono do bot! ❌',
					admin: '❌ Esse comando só pode ser usado pelos ademiros do grupo! ❌',
					Badmin: '❌ Esse comando só pode ser usado quando o bot virar ademir! ❌'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["5521997081557@s.whatsapp.net"] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green']
			aleat = Math.floor(Math.random() * 101)
			bazuks = ['estrondar','zunzunar','estourar','minudenciar','amassar','pormenorizar','esmiuçar','rebombar','petrificar','desaparecer','pulverizar','centrifugar']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(comando) {
				case 'brocha':
					reply('Citaram o Jorgino?')
					break
			}

			switch(command) {

				case 'idiomas':
					reply(` 'af': 'Afrikaans',
  'sq': 'Albanian',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'ca': 'Catalan',
  'zh': 'Chinese',
  'zh-cn': 'Chinese (Mandarin/China)',
  'zh-tw': 'Chinese (Mandarin/Taiwan)',
  'zh-yue': 'Chinese (Cantonese)',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'en-au': 'English (Australia)',
  'en-uk': 'English (United Kingdom)',
  'en-us': 'English (United States)',
  'eo': 'Esperanto',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'ht': 'Haitian Creole',
  'hi': 'Hindi',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'id': 'Indonesian',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'la': 'Latin',
  'lv': 'Latvian',
  'mk': 'Macedonian',
  'no': 'Norwegian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pt-br': 'Portuguese (Brazil)',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sr': 'Serbian',
  'sk': 'Slovak',
  'es': 'Spanish',
  'es-es': 'Spanish (Spain)',
  'es-us': 'Spanish (United States)',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'ta': 'Tamil',
  'th': 'Thai',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'cy': 'Welsh'`)
					break



				case 'vemx1lixo':
					if (args.length < 1) return reply('Quer jogar sozinho? Marca alguém aí, seu esquizo.')

					if (game_ativ==false){

						game_ativ = true

						desafiado = mek.message.extendedTextMessage.contextInfo.mentionedJid
						player2 = desafiado

						desafiador = sender.split('@')[0]
						player1vez = desafiador

						mentions(`@${desafiado[0].split('@')[0]} você foi dasafiado para o jogo da velha, aceitas? \n .vemlixo @quem_te_chamou/ .arreguei @quem_te_chamou`, desafiado, true)
					}

					else{
						client.sendMessage(from, 'Já tem jogo ativo, calma ae.', text)
					}


				break

				case 'vemlixo':
					if (args.length < 1) return reply('Quer jogar sozinho? Marca alguém aí, seu esquizo.')
					if (game_ativ==false) return reply('Ninguém te chamou pra jogo nenhum, seu abortado.')
					sumber=sender.split('@')[0]

					if(player2=={contextInfo: {"mentionedJid": sumber}}){
						player2vez = sender.split('@')[0]
						player1 = mek.message.extendedTextMessage.contextInfo.mentionedJid
						vez = player1vez
						mentions(`@${player1[0].split('@')[0]} É a sua vez, escolha uma casa \n⏹️    0    1     2
0  ❌|❌|❌
    ----------------
1  ❌|❌|❌
    ----------------
2  ❌|❌|❌\n \nEX: .casa 21\n`, player1, true)
					}
					break

				case 'jogar':
					if (args.length < 1) return reply('Escolhe a casa que você vai jogar, mamute.')

					if (vez==sender.split('@')[0] && vez == player1vez) {
						posicao = args.split('')

						velha(casas, posicao[0], posicao[1], 1)

						casas[posicao[0]][posicao[1]]='❌'
						vez = player2vez

					}
					if (vez==sender.split('@')[0] && vez == player2vez) {
						posicao = args.split('')

						velha(casas, posicao[0], posicao[1], 2)


						casas[posicao[0]][posicao[1]]='⭕'
						vez = player1vez
					}


					break

				case 'bazukou':
				case 'bazucou':
					if (args.length < 1) return reply('Quer bazukar o vento? Marca alguém aí, mamute')
					bazukado = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentions(`@${sender.split('@')[0]} Bazukou @${bazukado[0].split('@')[0]} até ${bazuks[Math.floor(Math.random() * 12)]} . A chance de engravidar é de ${aleat.toString()} %`, bazukado, true)
					break

				case 'marion':
					reply('────────────────────────\n─────────▄▀▀▀▀▀▀▀▄──────\n────────█▒▒▒▒▒▒▒▒▒█─────\n───────▄▀▒▒▒▒▒▒▒▒▄▀─────\n──────█▒▒▒▒▒▒▒▒▒▒█──────\n─────▄▀▒▄▄▄▒▄▄▄▒▒█─NÃO──\n─────█▒▒─▀─▒─▀─▒▒█─BAN──\n─────█▒▒▒▒▒▒▒▒▒▒▒█──JINX─\n────▄▀▒▒▒▀▄▄▄▀▒▒▒▒▀▀▄─────▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄─\n─█▒▒▒▒▒▒▒MARI ON ▒▒▒▒█▒▒█─\n─▀▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄▀─\n───█▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌█───\n───▀█▌▌▌▌▌▌▌▌▌▌▌▌▌▌█▀───\n─────█▒▒▌▌▌▌▌▌▌▌▌▒▒█────\n──────▀▀─────────▀▀─────')
					break

					
				case 'prisão':

					client.sendMessage(from, { url: 'src/prisao.png' }, image, {quoted: mek, caption: 'Operação Mata Vermes concluída com sucesso!'})

					break

				case 'acad':

					client.sendMessage(from, { url: 'src/acad.png' }, image, {quoted: mek, caption: 'Marilas malhou foi pouco! 💪 #BumbumNaNuca'})

					break

				case 'cleycley':

					client.sendMessage(from, { url: 'src/cleycley.png' }, image, {quoted: mek, caption: '❌Indivíduo de alta periculosidade, matenha distância!❌'})

					break

				case 'cachorro':

					client.sendMessage(from, { url: 'src/cachorro.png' }, image, {quoted: mek, caption: 'Pernocas de bailarina '})

					break
				case 'help':
				case 'menu':
					client.sendMessage(from, help(prefix), text)
					break
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
				case 'stiker':
				case 'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falha ao converter ${tipe} em sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie a imagem com o comando ${prefix}sticker ou marque a imagem com o comando ${prefix}sticker`)
					}
					break
				case 'gtts':
					if (args.length < 1) return client.sendMessage(from, 'Não sou vidente, coloca a sigla do idioma aí na humildade', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Burrão! Coloca um texto aí pra eu falar', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Dimunui essa bíblia aí, vou ler essa porra toda não')
					: gtts.save(ranm, dtt, function() {
						client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
				case 'meme':
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
					break
				/*case 'loli':
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Citai Lolimu'})
					})
					break
				case 'nsfwloli':
					if (!isNsfw) return reply('❌ *FALSE* ❌')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					})
					break*/
				case 'hilih':
					if (args.length < 1) return reply('Cadê o texto?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'yt2mp3':
					if (args.length < 1) return reply('Cadê o URL?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytsearch':
					if (args.length < 1) return reply('Tá procurando oq? seu pênis? Manda o URL, seu corno')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/ytsearch?q=${body.slice(10)}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : ${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
				case 'tiktok':
					if (args.length < 1) return reply('Onde está o url, hum?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/tiktok?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
				case 'tiktokstalk':
					try {
						if (args.length < 1) return client.sendMessage(from, 'cadê o user?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Username errado parça')
					}
					break
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('Quer escrever oq?')
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/nulis?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
					break
				case 'url2img':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Tá usando oq?')
					if (!tipelist.includes(args[0])) return reply('desktop|tablet|mobile')
					if (args.length < 2) return reply('Cadê o URL, seu mamute?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'tstiker':
				case 'tsticker':
					if (args.length < 1) return reply('Tem q mandar o texto junto, burrão')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'tagmamacos':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					
					teks = "🇧🇷VAI TOMAR NO PEIXE EVOLUTIVO 🇧🇷\n\
\n\
ŚÓ USA EVOLUÇÃO QUEM NĀO SƏ GARÅNŢE NØ SOCO 🦍🦍🦍‼️‼️‼️\n\
\n\
.                 /¯/)              \\¯\\\n\
                /¯  /                 \\  ¯\\\n\
              /    /                     \\    \\\n\
       /´¯/'   '/´¯`•¸          ¸•´¯`\\'   '\\´¯\\\n\
    /'/   /    /     /¯\\  /¯`\\    \\   \\    \\  '\\\n\
 (   (   (   ( ¯  /'   ')  ('    '\\ ¯  )   )  )   )\n\
   \\                       /  \\                        /\n\
     \\                   /       \\                   /\n\
      (                  \\        /                  )\n\
\n\
🔥🦍🦍🦍 ÅŤÅQŮĘ ĐØ§ MAMACO ĽØĶØ🦍🦍🦍🔥\n\
👉😎👉\n\
👉😎👉\n\
 AGORA É NOIS QUE MANDA NESSA PORRA\n\
☣☣☣👿\n\
🦍🦍🤝🦍🦍\n\
\n\
OS SOLADORES DE LARGATIXA ESTÃO PASSANDO POR VOCÊ 🦎🦎🦎\n\
▬▬▬.◙.▬▬▬ \n\
═▂▄▄▓▄▄▂ \n\
◢◤ █▀🐒▀████▄▄▄▄◢◤ \n\
█▄ █ー ███▀▀▀▀▀▀▀╬ \n\
◥█████◤ \n\
══╩══╩═ Desafiamos todos os largatinho\n\
╬╬ \n\
╬╬ \n\
╬╬ \n\
╬╬\n\
A DESAFIAR O GRANDE REI KONG🦍🦍🔥🔥🔥\n\
\n\
MITOOOOOOOOOO King  👉😎👉\n\
SEGUE A RISADA DO MAMACO:\n\
KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK\n\
LARGATINHA TEM QUE SE FODER E ACABOU PORRA 🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🤡🦍🦍🐒🐒🐒🦍🦍🦍\n\
\n\
▕▇▇▇◤▔▔▔▔▔▔▔◥▇▇▇\n\
▕▇▇▇▏◥▇◣┊◢▇◤▕▇▇▇\n\
▕▇▇▇▏▃▆▅▎▅▆▃▕▇▇▇\n\
▕▇▇▇▏╱▔▕▎▔▔╲▕▇▇▇\n\
▕▇▇▇◣◣▃▅▎▅▃◢◢▇▇▇\n\
▕▇▇▇▇◣◥▅▅▅◤◢▇▇▇▇\n\
▕▇▇▇▇▇◣╲▇╱◢▇▇▇▇▇\n\
▕▇▇▇▇▇▇◣▇◢▇▇▇▇▇▇\n\
unhe     unhe  unhe unhe \n\
unhe     unhe  unhe unhe\n\
unhe                      unhe \n\
unhe                    unhe \n\
unhe                  unhe \n\
unhe                unhe \n\
unhe              unhe \n\
unhe            unhe \n\
unhe          unhe \n\
unhe        unhe \n\
unhe       unhe\n\
\n\
unhe     unhe  unhe unhe \n\
unhe     unhe  unhe unhe\n\
unhe                      unhe \n\
unhe                    unhe \n\
unhe                  unhe \n\
unhe                unhe \n\
unhe              unhe \n\
unhe            unhe \n\
unhe          unhe \n\
unhe        unhe \n\
unhe       unhe\n\
\n\
unhe     unhe  unhe unhe \n\
unhe     unhe  unhe unhe\n\
unhe                      unhe \n\
unhe                    unhe \n\
unhe                  unhe \n\
unhe                unhe \n\
unhe              unhe \n\
unhe            unhe \n\
unhe          unhe \n\
unhe        unhe \n\
unhe       unhe\n\
\n\
Facção KING 💪🏼🙈 O bonde dos mamaco ataca novamente 🦍🦍🦍 vai chorar 🦎? 😭😭 King acima de tudo, Kong encima de todos ✊✊ tá em shock ⚡⚡ 😯😯😳😳😳😳😳 fica Flinstons aí Godzilla corn0👋👋🥗🥗 Avante King 🏁🏁🏁🏁🏁🏁VAI TOMA NO CU ZILLA\n\
................./¯/)............(\\¯\\\n\
.............../¯ ./..............\\. ¯\\\n\
............./. . /................ \\ . .\\\n\
......../´¯/' . '/´¯`•¸,....,•´¯`\\' . '\\´¯\\\n\
..../' /. ./ . ./ . ./¯\\../¯\\. . \\. . \\. .\\ '\\\n\
..( . ( . ( . ( ¯ ./' . ')..(' . '\\. ¯ ) . ) . ) . )\n\
...\\ . . . . . . . . . . ./...\\. . . . . . . . . . ./\n\
.....\\ . . . . . . . . ./......\\. . . . . . . . . /\n\
.....(. . . . . . . . . \\......./. . . . . . . . . )\n\
ÅŤÅQŮĘ ĐØ MĄMÅČØ LØKØ💨 AGORA É NOS QUE MANDA NESSA PORRA \n\
☣☣☣👿\n\
👹 SAIAM DO GRUPO 👹\n\
COMEÇOU A SOLAÇÃO \n\
HÁ! HÁ! HÁ! HÁ! HÁ!\n\
🦶🏻🦶🏻🦶🏻🦶🏻🦶🏻🦶🏻🦶🏻\n\
VØÇË§ FØŘÅM ÅŤÅČÅĐØ§ PËLØ ĶĪÑĞ ĶØNG ĽØĶØ\n\
▕▇▇▇◤▔▔▔▔▔▔▔◥▇▇▇\n\
▕▇▇▇▏◥▇◣┊◢▇◤▕▇▇▇\n\
▕▇▇▇▏▃▆▅▎▅▆▃▕▇▇▇\n\
▕▇▇▇▏╱▔▕▎▔▔╲▕▇▇▇\n\
▕▇▇▇◣◣▃▅▎▅▃◢◢▇▇▇\n\
▕▇▇▇▇◣◥▅▅▅◤◢▇▇▇▇\n\
▕▇▇▇▇▇◣╲▇╱◢▇▇▇▇▇\n\
▕▇▇▇▇▇▇◣▇◢▇▇▇▇▇▇\n\
💨MĀMĀČØ ĽØĶØ💨\n\
̿̿ ̿̿ ̿̿ ̿'̿'\\̵͇̿̿\\з=🙈=ε/\n\
\n\
#teamkong"
					for (let mem of groupMembers) {
						//teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'tagall2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                                case 'tagall3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'clearall':
					if (!isOwner) return reply('Quem é você?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Zerei o chat :)')
					break
				case 'bc':
					if (!isOwner) return reply('Quem é você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ Ini Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Só sucesso')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ Ini Broadcast ]\n\n${body.slice(4)}`)
						}
						reply('Só sucesso')
					}
					break
                                case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Foi promovido com sucesso\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} Agora é ademir, surubão na casa delu hoje!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'perdeu o ademir\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} PERDEU O ADEMIR KKKKKKKKKKKKKKKKK!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Quer adicionar quem sem o número??')
					if (args[0].startsWith('9')) return reply('Tem q começar com o +55')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adicionar, talvez esse mamute tenha privado o wpp')
					}
					break
				case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marca aí quem vai tomar ban')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Sim, senhor!\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(` @${mentioned[0].split('@')[0]} foi de base`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
					if (!isGroup) return reply(mess.only.group)
					teks = `Ademiros do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                                case 'linkgroup':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                        linkgc = await client.groupInviteCode(from)
                                        reply('https://chat.whatsapp.com/'+linkgc)
                                        break
                                case 'leave':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (isGroupAdmins || isOwner) {
                                            client.groupLeave(from)
                                        } else {
                                            reply(mess.only.admin)
                                        }
                                        break
				case 'toimg':
					if (!isQuotedSticker) return reply('❌ Marca um sticker aí, gado ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Travei! Vc fez alguma merda ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
					if (args.length < 1) return reply('Cadê o texto?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('SimSimi ativado, vou responder td agr')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Modo SimSimi ativado com sucesso ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Modo SimSimi desativado com sucesso ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Já tá ativado')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Ativou com sucesso o recurso de boas-vindas neste grupo ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Desativando com sucesso o recurso de boas-vindas neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
                                      break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Marca alguma coisa aí pra copiar')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto do perfil atualizada com sucesso usando a foto do perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('TRAVEI')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Era só uma fotinha hj pprt')
					}
					break
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
						//reply('Seu esquizo, esse comando não existe')
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
