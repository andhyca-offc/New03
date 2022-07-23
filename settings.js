/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di apa² in, udah free apikey :)
'https://zenzapis.xyz': 'BagasGanz',
}

//—————「 Setting Owner 」—————//
global.owner = ['6285872761910','6285794408499','6287829536442','62895330584590'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['6285872761910','6285794408499','6287829536442','62895330584590'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '6285872761910','6285794408499','6287829536442','62895330584590' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = '🅚︎Ⓘ︎🅝︎Ⓖ︎ • 𝐴𝑛𝑑ℎ𝑦𝑐𝑎ᵍᵃⁿᶻ' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = '𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = '⫹⫺ 𝗧𝗶𝗺𝗲 𝗦𝗲𝗿𝘃𝗲𝗿 : ${wktuwib}\n⫹⫺ 𝗗𝗮𝘁𝗲 𝗦𝗲𝗿𝘃𝗲𝗿: ${week} ${date}l' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = ''https://youtube.com/channel/UCtt_8qM9i8x83BY_U8oozOg'
global.ig = 'https://instagram.com/andhycarsrofficial'
global.mygc = 'https://chat.whatsapp.com/DTtOcmrCAkKFrVZJD6jb6M'
global.myweb = 'https://instagram.com/andhycarsrofficial'
global.email = 'andhykarzksepramdh@gmail.com'
global.region = 'indonesia'

//—————「 Set Wm 」—————//
global.packname = 'Ⓒ︎ By' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = '☂︎\n𝐀\n𝐧\n𝐝\n𝐡\n𝐲\n𝐜\n𝐚\n-\n𝗕\n𝗢\n𝗧\n✦\n\n⫹⫺ Whatsapp BOT\nwa.me/${global.nomorbot}' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.limitawal = {
premium: "Infinity",
free: 49,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/chika.jpg')
/*global.veloriy = fs.readFileSync('./image/chika.mp4')*/

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mai ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '⫹⫺'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
success: '𝗗𝗼𝗻𝗲 ᵇʸ 𝐀𝐧𝐝𝐡𝐲𝐜𝐚𝐛𝐨𝐭𝐳-𝐌𝐝ོ',
admin: '*𝗔𝗖𝗖𝗦𝗘𝗦 𝗔𝗥𝗘 𝗗𝗘𝗡𝗜𝗘𝗗* 〄\n *ᴄᴏᴍᴍᴀɴᴅ* • Lu Admin? Hanya bisa di akses Admin Group !',
botAdmin: '*𝗔𝗖𝗖𝗦𝗘𝗦 𝗔𝗥𝗘 𝗗𝗘𝗡𝗜𝗘𝗗* 〄\n *ᴄᴏᴍᴍᴀɴᴅ* • Fitur ini Hanya bisa di gunakan ketika Bot Menjadi Admin !',
owner: '*𝗔𝗖𝗖𝗦𝗘𝗦 𝗔𝗥𝗘 𝗗𝗘𝗡𝗜𝗘𝗗* 〄\n *ᴄᴏᴍᴍᴀɴᴅ* • Fitur ini Hanya bisa di akses untuk Owner !',
group: '*𝗔𝗖𝗖𝗦𝗘𝗦 𝗔𝗥𝗘 𝗗𝗘𝗡𝗜𝗘𝗗* 〄\n *ᴄᴏᴍᴍᴀɴᴅ* • Fitur ini Hanya bisa di Akses Di Group !',
private: '*𝗔𝗖𝗖𝗦𝗘𝗦 𝗔𝗥𝗘 𝗗𝗘𝗡𝗜𝗘𝗗* 〄\n *ᴄᴏᴍᴍᴀɴᴅ* • Fitur ini Hanya bisa di akses Di private Chat !',
bot: '*𝗔𝗖𝗖𝗦𝗘𝗦 𝗔𝗥𝗘 𝗗𝗘𝗡𝗜𝗘𝗗* 〄\n *ᴄᴏᴍᴍᴀɴᴅ* • Fitur ini Hanya bisa di gunakan user bot !',
wait: '```[█████▒▒▒▒▒] 𝙻𝙾𝙰𝙳𝙸𝙽𝙶. . .```',
error: '```「⚠️」 Server Are Error...```',
endLimit: '𝗔𝗖𝗖𝗦𝗘𝗦 𝗔𝗥𝗘 𝗗𝗘𝗡𝗜𝗘𝗗* 〄\n *ᴄᴏᴍᴍᴀɴᴅ* • Limit anda telah habis !',
}

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
