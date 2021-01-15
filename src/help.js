const help = (prefix) => {
	return `> *Comandos do Sticker* <
comando : *${prefix}sticker* or *${prefix}stiker*
desc : converte uma imagem/gif/video em sticker
uso : marque uma imagem/gif/video, ou envie uma imagem/gif/video com o comando\n
comando : *${prefix}sticker nobg* ou *${prefix}stiker nobg*
desc : converte uma imagem para sticker tirando o fundo *edição podre*
uso : marque uma imagem, ou envie uma imagem com o comando\n
comando : *${prefix}toimg*
desc : converte o sticker em imagem
uso : marque um sticker\n
comando : *${prefix}tsticker* or *${prefix}tstiker*
desc : converte texto em sticker
uso : *${prefix}tsticker _texto aqui_*\n\n
> *Memes podres* <
comando : *${prefix}meme*
desc : imagem aleatória de um "memekkk" [english]
uso : só envia o comando aí\n

> *outros comandos* <
comando : *${prefix}gtts*
desc : converte o texto em fala/audio
uso : *${prefix}gtts [cc] [text]*\exemplo : *${prefix}gtts pt mariluvaitomarnocu*\n
comando : *${prefix}url2img*
desc : tira print de uma página web
uso : *${prefix}url2img [tipe] [url]*\n
comando : *${prefix}simi*
desc : a mensagem vai ser respondida pelo simi
uso : *${prefix}simi yourmessage*\n
comando : *${prefix}ocr*
desc : coloca texto em uma imagem ~funciona quase nunca~
uso : marque uma imagem, ou envie uma imagem com o comando\n
comando : *${prefix}wait*
desc : procura um anime com a imagem [ What Anime Is This/That ] ~apenas para os esquisitos~
uso : marque uma imagem, ou envie uma imagem com o comando\n
comando : *${prefix}setprefix*
desc : troca o prefixo dos comandos
uso : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : só o mais brabor pode usar\n
> *Comandos de grupos* <
comando : *${prefix}add*
desc : adiciona um gado no grupo
uso : *${prefix}add 55219985xxxxx*\n
note : Só funciona quando o bot é ademiro e quem usa o comando tbm é um ademiro\n
comando : *${prefix}kick*
desc : Pra mandar alguém ir de base
uso : *${prefix}kick @tagmember*\n
note : Só funciona quando o bot é ademiro e quem usa o comando tbm é um ademiro\n
comando : *${prefix}promote*
desc : transforma membro comum em ademiro
uso : *${prefix}promote @tagmember*\n
note : Só funciona quando o bot é ademiro e quem usa o comando tbm é um ademiro\n
comando : *${prefix}demote*
desc : transforma ademiro em membro comum
uso : *${prefix}demote @tagmember*\n
note : Só funciona quando o bot é ademiro e quem usa o comando tbm é um ademiro\n
comando : *${prefix}linkgroup*
desc : manda o link do grupo
uso : só usa o comando aí
note : Só funciona quando o bot é ademiro e quem usa o comando tbm é um ademiro\n
comando : *${prefix}leave*
desc : Tira o bot do grupo
uso : só usa o comando aí
note : Só pode ser usado pelos ademiros e pelo dono do bot\n
comando : *${prefix}tagall*
desc : marca td mundo inclusive os ademiros
uso : só manda o comando aí
note : Só pode ser usado pelos ademiros\n
comando : *${prefix}simih*
desc : ativa o modo SimSimi
uso : *${prefix}simih 1* para ativar e *${prefix}simih 0* para desativar
note : Só pode ser usado pelos ademiros\n`
}

exports.help = help
