/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau ubah/edit owner di settings.js
› Kalau mau tambahin fitur di index.js
*/

//—————「 Menu 」—————//
exports.menu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`┅━━━━━═┅═❏ *DASHBOARD* ❏═┅═━━━━━┅
❏═┅═━–〈 *I N F O*
┆⫹⫺ *Name:* ${pushname}
┆⫹⫺ *Limit:* ${limitUser}
┆⫹⫺ *Time WIB:* ${time}
┆⫹⫺ *Time WIT:* ${wit}
┆⫹⫺ *Time WITA:* ${wita} 
┆⫹⫺ *Botname:* ${botname}
┗––––––––––✦

❏═┅═━–〈 *I N T R O*
┆ *Good ${salam}*
┆• *Saya ${botname}, Bot Ini Adalah Beta Multi-Device WhatsApp.*
┆• *Jika Kamu Menemukan Semacam Bug Atau Kesalahan Mohon Dimaklumi Dulu Ya!*
┗––––––––––✦`
}

//—————「 List 」—————//
exports.list = (pushname) => {
	return`Halo kak ${pushname}, silahkan dipilih list menu dibawah ini`
}

//—————「 All Menu 」—————//
exports.allmenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Main* 』––––––
┆✦ ${prefix}ping
┆✦ ${prefix}runtime
┆✦ ${prefix}speed
┆✦ ${prefix}owner
┆✦ ${prefix}menu
┆✦ ${prefix}delete
┆✦ ${prefix}infochat
┆✦ ${prefix}quoted
┆✦ ${prefix}listpc
┆✦ ${prefix}listgc
┆✦ ${prefix}listonline
┗━═┅═━––––––๑

❏––––––『 *Group* 』––––––
┆✦ ${prefix}linkgroup
┆✦ ${prefix}ephemeral [option]
┆✦ ${prefix}setppgc
┆✦ ${prefix}setname 
┆✦ ${prefix}setdesc 
┆✦ ${prefix}group [option]
┆✦ ${prefix}editinfo [option]
┆✦ ${prefix}add @user
┆✦ ${prefix}kick @user
┆✦ ${prefix}hidetag 
┆✦ ${prefix}tagall 
┆✦ ${prefix}antilink [on/off]
┆✦ ${prefix}mute [on/off]
┆✦ ${prefix}promote @user
┆✦ ${prefix}demote @user
┆✦ ${prefix}vote 
┆✦ ${prefix}devote
┆✦ ${prefix}upvote
┆✦ ${prefix}cekvote
┆✦ ${prefix}hapusvote
┗━═┅═━––––––๑  

❏––––––『 *Downloader* 』––––––
┆✦ ${prefix}tiktoknowm 
┆✦ ${prefix}tiktokwm 
┆✦ ${prefix}tiktokmp3 
┆✦ ${prefix}instagram 
┆✦ ${prefix}twitter 
┆✦ ${prefix}twittermp3 
┆✦ ${prefix}facebook 
┆✦ ${prefix}pinterestdl 
┆✦ ${prefix}ytmp3 
┆✦ ${prefix}ytmp4 
┆✦ ${prefix}getmusic 
┆✦ ${prefix}getvideo 
┆✦ ${prefix}umma 
┆✦ ${prefix}joox 
┆✦ ${prefix}soundcloud
┗━═┅═━––––––๑
  
❏––––––『 *Search* 』––––––
┆✦ ${prefix}play 
┆✦ ${prefix}yts 
┆✦ ${prefix}google 
┆✦ ${prefix}gimage 
┆✦ ${prefix}pinterest 
┆✦ ${prefix}wikimedia 
┆✦ ${prefix}ytsearch 
┆✦ ${prefix}ringtone 
┆✦ ${prefix}stalk [option] 
┆✦ ${prefix}webtoons 
┆✦ ${prefix}drakor 
┆✦ ${prefix}animesearch 
┆✦ ${prefix}character 
┆✦ ${prefix}manga 
┆✦ ${prefix}playstore 
┆✦ ${prefix}gsmarena 
┆✦ ${prefix}jadwalbioskop 
┆✦ ${prefix}nowplayingbioskop 
┆✦ ${prefix}aminio 
┆✦ ${prefix}wattpad 
┆✦ ${prefix}webtoons 
┗━═┅═━––––––๑
  
❏––––––『 *Tele Stick* 』––––––
┆✦ ${prefix}gurastick
┆✦ ${prefix}dogestick
┆✦ ${prefix}bucinstick
┆✦ ${prefix}patrick
┗━═┅═━––––––๑
  
❏––––––『 *Random* 』––––––
┆✦ ${prefix}coffe
┆✦ ${prefix}quotesanime
┆✦ ${prefix}couple
┆✦ ${prefix}darkjokes
┗━═┅═━––––––๑  
  
❏––––––『 *Random Anime* 』––––––
┆✦ ${prefix}loli
┆✦ ${prefix}neko
┆✦ ${prefix}waifu
┆✦ ${prefix}shinobu
┆✦ ${prefix}megumin
┆✦ ${prefix}bully
┆✦ ${prefix}cuddle
┆✦ ${prefix}cry
┆✦ ${prefix}hug
┆✦ ${prefix}awoo
┆✦ ${prefix}kiss
┆✦ ${prefix}lick
┆✦ ${prefix}pat
┆✦ ${prefix}smug
┆✦ ${prefix}bonk
┆✦ ${prefix}yeet
┆✦ ${prefix}blush
┆✦ ${prefix}smile
┆✦ ${preflix}wave
┆✦ ${prefix}highfive
┆✦ ${prefix}handhold
┆✦ ${prefix}nom
┆✦ ${prefix}bite
┆✦ ${prefix}glomp
┆✦ ${prefix}slap
┆✦ ${prefix}kill
┆✦ ${prefix}happy
┆✦ ${prefix}wink
┆✦ ${prefix}poke
┆✦ ${prefix}dance
┆✦ ${prefix}cringe
┆✦ ${prefix}anime
┆✦ ${prefix}waifu
┆✦ ${prefix}husbu
┆✦ ${prefix}neko
┆✦ ${prefix}shinobu
┆✦ ${prefix}waifus 
┆✦ ${prefix}nekos 
┆✦ ${prefix}trap 
┆✦ ${prefix}blowjob 
┗━═┅═━––––––๑  
  
❏––––––『 *Text Pro* 』––––––
┆✦ ${prefix}3dchristmas
┆✦ ${prefix}3ddeepsea
┆✦ ${prefix}americanflag
┆✦ ${prefix}3dscifi
┆✦ ${prefix}3drainbow
┆✦ ${prefix}3dwaterpipe
┆✦ ${prefix}halloweenskeleton
┆✦ ${prefix}sketch
┆✦ ${prefix}bluecircuit
┆✦ ${prefix}space
┆✦ ${prefix}metallic
┆✦ ${prefix}fiction
┆✦ ${prefix}greenhorror
┆✦ ${prefix}transformer
┆✦ ${prefix}berry
┆✦ ${prefix}thunder
┆✦ ${prefix}magma
┆✦ ${prefix}3dcrackedstone
┆✦ ${prefix}3dneonlight
┆✦ ${prefix}impressiveglitch
┆✦ ${prefix}naturalleaves
┆✦ ${prefix}fireworksparkle
┆✦ ${prefix}matrix
┆✦ ${prefix}dropwater
┆✦ ${prefix}harrypotter
┆✦ ${prefix}foggywindow
┆✦ ${prefix}neondevils
┆✦ ${prefix}christmasholiday
┆✦ ${prefix}3dgradient
┆✦ ${prefix}blackpink
┆✦ ${prefix}gluetext
┗━═┅═━––––––๑
  
❏––––––『 *Photo Oxy* 』––––––
┆✦ ${prefix}shadow
┆✦ ${prefix}romantic
┆✦ ${prefix}smoke
┆✦ ${prefix}burnpapper
┆✦ ${prefix}naruto
┆✦ ${prefix}lovemsg
┆✦ ${prefix}grassmsg
┆✦ ${prefix}lovetext
┆✦ ${prefix}coffecup
┆✦ ${prefix}butterfly
┆✦ ${prefix}harrypotter
┆✦ ${prefix}retrolol
┗━═┅═━––––––๑
    
❏––––––『 *Ephoto* 』––––––
┆✦ ${prefix}ffcover
┆✦ ${prefix}crossfire
┆✦ ${prefix}galaxy
┆✦ ${prefix}glass
┆✦ ${prefix}neon
┆✦ ${prefix}beach
┆✦ ${prefix}blackpink
┆✦ ${prefix}igcertificate
┆✦ ${prefix}ytcertificate
┗━═┅═━––––––๑  
  
❏––––––『 *Game & Fun* 』––––––
┆✦ ${prefix}simih
┆✦ ${prefix}bagaimanakah
┆✦ ${prefix}kapankah
┆✦ ${prefix}apakah
┆✦ ${prefix}bisakah
┆✦ ${prefix}rate
┆✦ ${prefix}wangy
┆✦ ${prefix}gantengcek
┆✦ ${prefix}cekganteng
┆✦ ${prefix}cantikcek
┆✦ ${prefix}cekcantik
┆✦ ${prefix}sangecek
┆✦ ${prefix}ceksange
┆✦ ${prefix}gaycek
┆✦ ${prefix}cekgay
┆✦ ${prefix}lesbicek
┆✦ ${prefix}halah
┆✦ ${prefix}hilih
┆✦ ${prefix}huluh
┆✦ ${prefix}heleh
┆✦ ${prefix}holoh
┆✦ ${prefix}jadian
┆✦ ${prefix}jodohku
┆✦ ${prefix}tictactoe
┆✦ ${prefix}delttt
┆✦ ${prefix}family100
┆✦ ${prefix}tebak [option]
┆✦ ${prefix}math [mode]
┆✦ ${prefix}suitpvp [@tag]
┗━═┅═━––––––๑

❏––––––『 *Primbon* 』––––––
┆✦ ${prefix}nomorhoki
┆✦ ${prefix}artimimpi
┆✦ ${prefix}artinama
┆✦ ${prefix}ramaljodoh
┆✦ ${prefix}ramaljodohbali
┆✦ ${prefix}suamiistri
┆✦ ${prefix}ramalcinta
┆✦ ${prefix}cocoknama
┆✦ ${prefix}pasangan
┆✦ ${prefix}jadiannikah
┆✦ ${prefix}sifatusaha
┆✦ ${prefix}rezeki
┆✦ ${prefix}pekerjaan
┆✦ ${prefix}nasib
┆✦ ${prefix}penyakit
┆✦ ${prefix}tarot
┆✦ ${prefix}fengshui
┆✦ ${prefix}haribaik
┆✦ ${prefix}harisangar
┆✦ ${prefix}harisial
┆✦ ${prefix}nagahari
┆✦ ${prefix}arahrezeki
┆✦ ${prefix}peruntungan
┆✦ ${prefix}weton
┆✦ ${prefix}karakter
┆✦ ${prefix}keberuntungan
┆✦ ${prefix}memancing
┆✦ ${prefix}masasubur
┆✦ ${prefix}zodiak
┆✦ ${prefix}shio
┗━═┅═━––––––๑

❏––––––『 *Cerpen* 』––––––
┆✦ ${prefix}cerpen anak
┆✦ ${prefix}cerpen bahasa daerah
┆✦ ${prefix}cerpen bahasa inggris
┆✦ ${prefix}cerpen bahasa jawa
┆✦ ${prefix}cerpen bahasa sunda
┆✦ ${prefix}cerpen budaya
┆✦ ${prefix}cerpen cinta
┆✦ ${prefix}cerpen cinta islami
┆✦ ${prefix}cerpen cinta pertama
┆✦ ${prefix}cerpen cinta romantis
┆✦ ${prefix}cerpen cinta sedih
┆✦ ${prefix}cerpen cinta segitiga
┆✦ ${prefix}cerpen cinta sejati
┆✦ ${prefix}cerpen galau
┆✦ ${prefix}cerpen gokil
┆✦ ${prefix}cerpen inspiratif
┆✦ ${prefix}cerpen jepang
┆✦ ${prefix}cerpen kehidupan
┆✦ ${prefix}cerpen keluarga
┆✦ ${prefix}cerpen kisah nyata
┆✦ ${prefix}cerpen korea
┆✦ ${prefix}cerpen kristen
┆✦ ${prefix}cerpen liburan
┆✦ ${prefix}cerpen lingkungan
┆✦ ${prefix}cerpen lucu
┆✦ ${prefix}cerpen malaysia
┆✦ ${prefix}cerpen mengharukan
┆✦ ${prefix}cerpen misteri
┆✦ ${prefix}cerpen motivasi
┆✦ ${prefix}cerpen nasihat
┆✦ ${prefix}cerpen nasionalisme
┆✦ ${prefix}cerpen olahraga
┆✦ ${prefix}cerpen patah hati
┆✦ ${prefix}cerpen penantian
┆✦ ${prefix}cerpen pendidikan
┆✦ ${prefix}cerpen pengalaman pribadi
┆✦ ${prefix}cerpen pengorbanan
┆✦ ${prefix}cerpen penyesalan
┆✦ ${prefix}cerpen perjuangan
┆✦ ${prefix}cerpen perpisahan
┆✦ ${prefix}cerpen persahabatan
┆✦ ${prefix}cerpen petualangan
┆✦ ${prefix}cerpen ramadhan
┆✦ ${prefix}cerpen remaja
┆✦ ${prefix}cerpen renungan
┆✦ ${prefix}cerpen rindu
┆✦ ${prefix}cerpen rohani
┆✦ ${prefix}cerpen romantis
┆✦ ${prefix}cerpen sastra
┆✦ ${prefix}cerpen sedih
┆✦ ${prefix}cerpen sejarah
┆✦ ${prefix}cerpen slice of life
┆✦ ${prefix}cerpen terjemahan
┆✦ ${prefix}cerpen thriller
┗━═┅═━––––––๑
  
❏––––––『 *Convert* 』––––––
┆✦ ${prefix}toimage
┆✦ ${prefix}removebg
┆✦ ${prefix}sticker
┆✦ ${prefix}emojimix
┆✦ ${prefix}tovideo
┆✦ ${prefix}togif
┆✦ ${prefix}tourl
┆✦ ${prefix}tovn
┆✦ ${prefix}tomp3
┆✦ ${prefix}toaudio
┆✦ ${prefix}ebinary
┆✦ ${prefix}dbinary
┆✦ ${prefix}styletext
┆✦ ${prefix}smeme
┗━═┅═━––––––๑

❏––––––『 *Information* 』––––––
┆✦ ${prefix}merdeka-news 
┆✦ ${prefix}kontan-news 
┆✦ ${prefix}cnbc-news 
┆✦ ${prefix}tribun-news 
┆✦ ${prefix}indozone-news 
┆✦ ${prefix}kompas-news 
┆✦ ${prefix}detik-news 
┆✦ ${prefix}daily-news 
┆✦ ${prefix}inews-news 
┆✦ ${prefix}okezone-news 
┆✦ ${prefix}sindo-news 
┆✦ ${prefix}tempo-news 
┆✦ ${prefix}antara-news 
┆✦ ${prefix}cnn-news 
┆✦ ${prefix}fajar-news 
┗━═┅═━––––––๑
  
❏––––––『 *Database* 』––––––
┆✦ ${prefix}setcmd
┆✦ ${prefix}listcmd
┆✦ ${prefix}delcmd
┆✦ ${prefix}lockcmd
┆✦ ${prefix}addmsg
┆✦ ${prefix}listmsg
┆✦ ${prefix}getmsg
┆✦ ${prefix}delmsg
┗━═┅═━––––––๑
  
❏––––––『 *Anonymous* 』––––––
┆✦ ${prefix}anonymous
┆✦ ${prefix}start
┆✦ ${prefix}next
┆✦ ${prefix}keluar
┆✦ ${prefix}sendkontak
┗━═┅═━––––––๑
  
❏––––––『 *Islamic* 』––––––
┆✦ ${prefix}iqra
┆✦ ${prefix}hadist
┆✦ ${prefix}alquran
┆✦ ${prefix}juzamma
┆✦ ${prefix}tafsirsurah
┗━═┅═━––––––๑
  
❏––––––『 *Voice Changer* 』––––––
┆✦ ${prefix}bass
┆✦ ${prefix}blown
┆✦ ${prefix}deep
┆✦ ${prefix}earrape
┆✦ ${prefix}fast
┆✦ ${prefix}fat
┆✦ ${prefix}nightcore
┆✦ ${prefix}reverse
┆✦ ${prefix}robot
┆✦ ${prefix}slow
┆✦ ${prefix}tupai
┗━═┅═━––––––๑  
  
❏––––––『 *Owner* 』––––––
┆✦ ${prefix}react [emoji]
┆✦ ${prefix}chat [option]
┆✦ ${prefix}join [link]
┆✦ ${prefix}leave
┆✦ ${prefix}block @user
┆✦ ${prefix}unblock @user
┆✦ ${prefix}bcgroup 
┆✦ ${prefix}bcall 
┆✦ ${prefix}setppbot  
┆✦ ${prefix}setexif
┆✦ ${prefix}setmenu
┆✦ ${prefix}setallmenu
┗━═┅═━––––––๑
 
                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
 `
}

//—————「 Welcome 」—————//
exports.welcome = (pushname) => {
	return`Welcome ${pushname}
`
}

//—————「 Leave 」—————//
exports.leave = (pushname) => {
	return`Good Bye ${pushname}
`
}

//—————「 Donasi 」—————//
exports.donasi  = (ownernomer) => {
	return`
—————「 *DONATE* 」—————

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi
Berapapun donasi kalian akan sangat berarti 👍

Thanks!

╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _4k/grup (1 minggu)_
┊⫹⫺ *Normal:* _7k/grup (1 bulan)_
┊⫹⫺ *Standar:* _12k/grup (5 bulan)_
┊⫹⫺ *Pro:* _19k/grup (12 bulan)_                                                      
┊⫹⫺ *Vip:* = _25k/grup (Permanent)
╰═┅═━––––––๑
╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _3k (1 minggu)_
┊⫹⫺ *Normal:* _5,5k (1 bulan)_
┊⫹⫺ *Pro:* _11k (4 bulan)_
┊⫹⫺ *Vip:* _17k (8 bulan)_                                               
┊⫹⫺ *Permanent:* = _25k (Unlimited)_
╰═┅═━––––––๑
*⫹⫺ PAYMENT:*
• *Pulsa:* [085872761910]
• *Dana:* [085872761910]
• *GoPay:* [085872761910]

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Ada harga ada kualitas kak!
🗣️: Scam ga nih kak?
💬: Enggalah

  *Minat? Langsung chat aja ya cuy 🐦*

  *Contact person Owner* :
  wa.me/${ownernomer}
`
}

//—————「 Simple Menu 」—————//
exports.groupmenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


 ❏––––––『 *Group* 』––––––
┆✦ ${prefix}linkgroup
┆✦ ${prefix}ephemeral [option]
┆✦ ${prefix}setppgc
┆✦ ${prefix}setname 
┆✦ ${prefix}setdesc 
┆✦ ${prefix}group [option]
┆✦ ${prefix}editinfo [option]
┆✦ ${prefix}add @user
┆✦ ${prefix}kick @user
┆✦ ${prefix}hidetag 
┆✦ ${prefix}tagall 
┆✦ ${prefix}antilink [on/off]
┆✦ ${prefix}mute [on/off]
┆✦ ${prefix}promote @user
┆✦ ${prefix}demote @user
┆✦ ${prefix}vote 
┆✦ ${prefix}devote
┆✦ ${prefix}upvote
┆✦ ${prefix}cekvote
┆✦ ${prefix}hapusvote
┗━═┅═━––––––๑

                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
  `
}

exports.downloadermenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Downloader* 』––––––
┆✦ ${prefix}tiktoknowm 
┆✦ ${prefix}tiktokwm 
┆✦ ${prefix}tiktokmp3 
┆✦ ${prefix}instagram 
┆✦ ${prefix}twitter 
┆✦ ${prefix}twittermp3 
┆✦ ${prefix}facebook 
┆✦ ${prefix}pinterestdl 
┆✦ ${prefix}ytmp3 
┆✦ ${prefix}ytmp4 
┆✦ ${prefix}getmusic 
┆✦ ${prefix}getvideo 
┆✦ ${prefix}umma 
┆✦ ${prefix}joox 
┆✦ ${prefix}soundcloud
┗━═┅═━––––––๑
  
                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
`
}

exports.searchmenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Search* 』––––––
┆✦ ${prefix}play 
┆✦ ${prefix}yts 
┆✦ ${prefix}google 
┆✦ ${prefix}gimage 
┆✦ ${prefix}pinterest 
┆✦ ${prefix}wikimedia 
┆✦ ${prefix}ytsearch 
┆✦ ${prefix}ringtone 
┆✦ ${prefix}stalk [option] 
┆✦ ${prefix}webtoons 
┆✦ ${prefix}drakor 
┆✦ ${prefix}animesearch 
┆✦ ${prefix}character 
┆✦ ${prefix}manga 
┆✦ ${prefix}playstore 
┆✦ ${prefix}gsmarena 
┆✦ ${prefix}jadwalbioskop 
┆✦ ${prefix}nowplayingbioskop 
┆✦ ${prefix}aminio 
┆✦ ${prefix}wattpad 
┆✦ ${prefix}webtoons 
┗━═┅═━––––––๑

                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
  `
}

exports.telestickmenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Tele Stick* 』––––––
┆✦ ${prefix}gurastick
┆✦ ${prefix}dogestick
┆✦ ${prefix}bucinstick
┆✦ ${prefix}patrick
┗━═┅═━––––––๑

                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
`
}

exports.randommenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Random* 』––––––
┆✦ ${prefix}coffe
┆✦ ${prefix}quotesanime
┆✦ ${prefix}couple
┆✦ ${prefix}darkjokes
┗━═┅═━––––––๑

                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
  `
}

exports.randomanimemenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Random Anime* 』––––––
┆✦ ${prefix}loli
┆✦ ${prefix}neko
┆✦ ${prefix}waifu
┆✦ ${prefix}shinobu
┆✦ ${prefix}megumin
┆✦ ${prefix}bully
┆✦ ${prefix}cuddle
┆✦ ${prefix}cry
┆✦ ${prefix}hug
┆✦ ${prefix}awoo
┆✦ ${prefix}kiss
┆✦ ${prefix}lick
┆✦ ${prefix}pat
┆✦ ${prefix}smug
┆✦ ${prefix}bonk
┆✦ ${prefix}yeet
┆✦ ${prefix}blush
┆✦ ${prefix}smile
┆✦ ${preflix}wave
┆✦ ${prefix}highfive
┆✦ ${prefix}handhold
┆✦ ${prefix}nom
┆✦ ${prefix}bite
┆✦ ${prefix}glomp
┆✦ ${prefix}slap
┆✦ ${prefix}kill
┆✦ ${prefix}happy
┆✦ ${prefix}wink
┆✦ ${prefix}poke
┆✦ ${prefix}dance
┆✦ ${prefix}cringe
┆✦ ${prefix}anime
┆✦ ${prefix}waifu
┆✦ ${prefix}husbu
┆✦ ${prefix}neko
┆✦ ${prefix}shinobu
┆✦ ${prefix}waifus 
┆✦ ${prefix}nekos 
┆✦ ${prefix}trap 
┆✦ ${prefix}blowjob 
┗━═┅═━––––––๑

                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
  `
}

exports.textpromenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Text Pro* 』––––––
┆✦ ${prefix}3dchristmas
┆✦ ${prefix}3ddeepsea
┆✦ ${prefix}americanflag
┆✦ ${prefix}3dscifi
┆✦ ${prefix}3drainbow
┆✦ ${prefix}3dwaterpipe
┆✦ ${prefix}halloweenskeleton
┆✦ ${prefix}sketch
┆✦ ${prefix}bluecircuit
┆✦ ${prefix}space
┆✦ ${prefix}metallic
┆✦ ${prefix}fiction
┆✦ ${prefix}greenhorror
┆✦ ${prefix}transformer
┆✦ ${prefix}berry
┆✦ ${prefix}thunder
┆✦ ${prefix}magma
┆✦ ${prefix}3dcrackedstone
┆✦ ${prefix}3dneonlight
┆✦ ${prefix}impressiveglitch
┆✦ ${prefix}naturalleaves
┆✦ ${prefix}fireworksparkle
┆✦ ${prefix}matrix
┆✦ ${prefix}dropwater
┆✦ ${prefix}harrypotter
┆✦ ${prefix}foggywindow
┆✦ ${prefix}neondevils
┆✦ ${prefix}christmasholiday
┆✦ ${prefix}3dgradient
┆✦ ${prefix}blackpink
┆✦ ${prefix}gluetext
┗━═┅═━––––––๑

                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
  `
}

exports.photooxymenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Photo Oxy* 』––––––
┆✦ ${prefix}shadow
┆✦ ${prefix}romantic
┆✦ ${prefix}smoke
┆✦ ${prefix}burnpapper
┆✦ ${prefix}naruto
┆✦ ${prefix}lovemsg
┆✦ ${prefix}grassmsg
┆✦ ${prefix}lovetext
┆✦ ${prefix}coffecup
┆✦ ${prefix}butterfly
┆✦ ${prefix}harrypotter
┆✦ ${prefix}retrolol
┗━═┅═━––––––๑

                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
  `
}

exports.ephotomenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Ephoto* 』––––––
┆✦ ${prefix}ffcover
┆✦ ${prefix}crossfire
┆✦ ${prefix}galaxy
┆✦ ${prefix}glass
┆✦ ${prefix}neon
┆✦ ${prefix}beach
┆✦ ${prefix}blackpink
┆✦ ${prefix}igcertificate
┆✦ ${prefix}ytcertificate
┗━═┅═━––––––๑

                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
  `
}

exports.funmenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Game & Fun* 』––––––
┆✦ ${prefix}simih
┆✦ ${prefix}bagaimanakah
┆✦ ${prefix}kapankah
┆✦ ${prefix}apakah
┆✦ ${prefix}bisakah
┆✦ ${prefix}rate
┆✦ ${prefix}wangy
┆✦ ${prefix}gantengcek
┆✦ ${prefix}cekganteng
┆✦ ${prefix}cantikcek
┆✦ ${prefix}cekcantik
┆✦ ${prefix}sangecek
┆✦ ${prefix}ceksange
┆✦ ${prefix}gaycek
┆✦ ${prefix}cekgay
┆✦ ${prefix}lesbicek
┆✦ ${prefix}halah
┆✦ ${prefix}hilih
┆✦ ${prefix}huluh
┆✦ ${prefix}heleh
┆✦ ${prefix}holoh
┆✦ ${prefix}jadian
┆✦ ${prefix}jodohku
┆✦ ${prefix}tictactoe
┆✦ ${prefix}delttt
┆✦ ${prefix}family100
┆✦ ${prefix}tebak [option]
┆✦ ${prefix}math [mode]
┆✦ ${prefix}suitpvp [@tag]
┗━═┅═━––––––๑

                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
  `
}

exports.primbonmenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Primbon* 』––––––
┆✦ ${prefix}nomorhoki
┆✦ ${prefix}artimimpi
┆✦ ${prefix}artinama
┆✦ ${prefix}ramaljodoh
┆✦ ${prefix}ramaljodohbali
┆✦ ${prefix}suamiistri
┆✦ ${prefix}ramalcinta
┆✦ ${prefix}cocoknama
┆✦ ${prefix}pasangan
┆✦ ${prefix}jadiannikah
┆✦ ${prefix}sifatusaha
┆✦ ${prefix}rezeki
┆✦ ${prefix}pekerjaan
┆✦ ${prefix}nasib
┆✦ ${prefix}penyakit
┆✦ ${prefix}tarot
┆✦ ${prefix}fengshui
┆✦ ${prefix}haribaik
┆✦ ${prefix}harisangar
┆✦ ${prefix}harisial
┆✦ ${prefix}nagahari
┆✦ ${prefix}arahrezeki
┆✦ ${prefix}peruntungan
┆✦ ${prefix}weton
┆✦ ${prefix}karakter
┆✦ ${prefix}keberuntungan
┆✦ ${prefix}memancing
┆✦ ${prefix}masasubur
┆✦ ${prefix}zodiak
┆✦ ${prefix}shio
┗━═┅═━––––––๑
 
                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
 `
}

exports.cerpenmenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Cerpen* 』––––––
┆✦ ${prefix}cerpen anak
┆✦ ${prefix}cerpen bahasa daerah
┆✦ ${prefix}cerpen bahasa inggris
┆✦ ${prefix}cerpen bahasa jawa
┆✦ ${prefix}cerpen bahasa sunda
┆✦ ${prefix}cerpen budaya
┆✦ ${prefix}cerpen cinta
┆✦ ${prefix}cerpen cinta islami
┆✦ ${prefix}cerpen cinta pertama
┆✦ ${prefix}cerpen cinta romantis
┆✦ ${prefix}cerpen cinta sedih
┆✦ ${prefix}cerpen cinta segitiga
┆✦ ${prefix}cerpen cinta sejati
┆✦ ${prefix}cerpen galau
┆✦ ${prefix}cerpen gokil
┆✦ ${prefix}cerpen inspiratif
┆✦ ${prefix}cerpen jepang
┆✦ ${prefix}cerpen kehidupan
┆✦ ${prefix}cerpen keluarga
┆✦ ${prefix}cerpen kisah nyata
┆✦ ${prefix}cerpen korea
┆✦ ${prefix}cerpen kristen
┆✦ ${prefix}cerpen liburan
┆✦ ${prefix}cerpen lingkungan
┆✦ ${prefix}cerpen lucu
┆✦ ${prefix}cerpen malaysia
┆✦ ${prefix}cerpen mengharukan
┆✦ ${prefix}cerpen misteri
┆✦ ${prefix}cerpen motivasi
┆✦ ${prefix}cerpen nasihat
┆✦ ${prefix}cerpen nasionalisme
┆✦ ${prefix}cerpen olahraga
┆✦ ${prefix}cerpen patah hati
┆✦ ${prefix}cerpen penantian
┆✦ ${prefix}cerpen pendidikan
┆✦ ${prefix}cerpen pengalaman pribadi
┆✦ ${prefix}cerpen pengorbanan
┆✦ ${prefix}cerpen penyesalan
┆✦ ${prefix}cerpen perjuangan
┆✦ ${prefix}cerpen perpisahan
┆✦ ${prefix}cerpen persahabatan
┆✦ ${prefix}cerpen petualangan
┆✦ ${prefix}cerpen ramadhan
┆✦ ${prefix}cerpen remaja
┆✦ ${prefix}cerpen renungan
┆✦ ${prefix}cerpen rindu
┆✦ ${prefix}cerpen rohani
┆✦ ${prefix}cerpen romantis
┆✦ ${prefix}cerpen sastra
┆✦ ${prefix}cerpen sedih
┆✦ ${prefix}cerpen sejarah
┆✦ ${prefix}cerpen slice of life
┆✦ ${prefix}cerpen terjemahan
┆✦ ${prefix}cerpen thriller
┗━═┅═━––––––๑

                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
`
}

exports.convertmenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Convert* 』––––––
┆✦ ${prefix}toimage
┆✦ ${prefix}removebg
┆✦ ${prefix}sticker
┆✦ ${prefix}emojimix
┆✦ ${prefix}tovideo
┆✦ ${prefix}togif
┆✦ ${prefix}tourl
┆✦ ${prefix}tovn
┆✦ ${prefix}tomp3
┆✦ ${prefix}toaudio
┆✦ ${prefix}ebinary
┆✦ ${prefix}dbinary
┆✦ ${prefix}styletext
┆✦ ${prefix}smeme
┗━═┅═━––––––๑
 
                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
 `
}

exports.informationmenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Information* 』––––––
┆✦ ${prefix}merdeka-news 
┆✦ ${prefix}kontan-news 
┆✦ ${prefix}cnbc-news 
┆✦ ${prefix}tribun-news 
┆✦ ${prefix}indozone-news 
┆✦ ${prefix}kompas-news 
┆✦ ${prefix}detik-news 
┆✦ ${prefix}daily-news 
┆✦ ${prefix}inews-news 
┆✦ ${prefix}okezone-news 
┆✦ ${prefix}sindo-news 
┆✦ ${prefix}tempo-news 
┆✦ ${prefix}antara-news 
┆✦ ${prefix}cnn-news 
┆✦ ${prefix}fajar-news 
┗━═┅═━––––––๑

                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
`
}

exports.mainmenu = (prefix, pushname, botname, time, wit, wita, salam) => {
return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Main* 』––––––
┆✦ ${prefix}ping
┆✦ ${prefix}runtime
┆✦ ${prefix}speed
┆✦ ${prefix}owner
┆✦ ${prefix}menu
┆✦ ${prefix}delete
┆✦ ${prefix}infochat
┆✦ ${prefix}quoted
┆✦ ${prefix}listpc
┆✦ ${prefix}listgc
┆✦ ${prefix}listonline
┗━═┅═━––––––๑

                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
  `
}

exports.databasemenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Database* 』––––––
┆✦ ${prefix}setcmd
┆✦ ${prefix}listcmd
┆✦ ${prefix}delcmd
┆✦ ${prefix}lockcmd
┆✦ ${prefix}addmsg
┆✦ ${prefix}listmsg
┆✦ ${prefix}getmsg
┆✦ ${prefix}delmsg
┗━═┅═━––––––๑

                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
`
}

exports.anonymousmenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Anonymous* 』––––––
┆✦ ${prefix}anonymous
┆✦ ${prefix}start
┆✦ ${prefix}next
┆✦ ${prefix}keluar
┆✦ ${prefix}sendkontak
┗━═┅═━––––––๑
 
                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
 `
}

exports.islamicmenu = (prefix) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Islamic* 』––––––
┆✦ ${prefix}iqra
┆✦ ${prefix}hadist
┆✦ ${prefix}alquran
┆✦ ${prefix}juzamma
┆✦ ${prefix}tafsirsurah
┗━═┅═━––––––๑

                  𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
  `
}

exports.voicechargermenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦


❏––––––『 *Voice Changer* 』––––––
┆✦ ${prefix}bass
┆✦ ${prefix}blown
┆✦ ${prefix}deep
┆✦ ${prefix}earrape
┆✦ ${prefix}fast
┆✦ ${prefix}fat
┆✦ ${prefix}nightcore
┆✦ ${prefix}reverse
┆✦ ${prefix}robot
┆✦ ${prefix}slow
┆✦ ${prefix}tupai
┗━═┅═━––––––๑  
   
                 𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕ 
 `
}

exports.ownermenu = (prefix, pushname, limitUser, botname, time, wit, wita, salam) => {
	return`❏═┅═━–〈 *I N F O*
┆• *Name:* ${pushname}
┆• *Limit:* ${limitUser}
┆• *Time Wib:* ${time}
┆• *Time Wit:* ${wit}
┆• *Time Wita:* ${wita}
┆• *Bot Name:* ${botname}
┆• *Keadaan:* ${salam}
┗––––––––––✦

  
❏––––––『 *Owner* 』––––––
┆✦ ${prefix}react [emoji]
┆✦ ${prefix}chat [option]
┆✦ ${prefix}join [link]
┆✦ ${prefix}leave
┆✦ ${prefix}block @user
┆✦ ${prefix}unblock @user
┆✦ ${prefix}bcgroup 
┆✦ ${prefix}bcall 
┆✦ ${prefix}setppbot  
┆✦ ${prefix}setexif
┆✦ ${prefix}setmenu
┆✦ ${prefix}setallmenu
┗━═┅═━––––––๑
   
                 𝚂𝚑𝚒𝚛𝚘𝙱𝚘𝚝𝚣-𝙼𝙳
            ⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
  `
}
