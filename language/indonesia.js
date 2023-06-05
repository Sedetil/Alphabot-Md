exports.onlyPrem = `Fitur khusus member premium`
exports.aikey = `apikey open ai salah, silahkan ganti di settins.js`
exports.DelSetWel = `Sukses delete set welcome di grup ini`
exports.NoSetWel = `Belum ada set welcome di grup ini`
exports.DelSetLeft = `Sukses delete set goodbye di grup ini`
exports.NoSetLeft = `Belum ada set goodbye di grup ini`
exports.doneSet = `Sudah di ubah sebelumnya`
exports.serverErr = `Server sedang eror`
exports.kodeErr = `Kode bahasa salah, silahkan cek menggunakan perintah .kodebahasa`
exports.Tts = (prefix, command) => {
    return `Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
	• Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
	• Contoh : ${prefix + command} id
Daftar bahasa yang di dukung ${prefix}kodebahasa`
}
exports.langkode = `*「 KODE BAHASA 」*
af : Afrikaans
sq : Albanian
ar : Arab
hy : Armenian
ca : Catalan
zh : Chinese
zh-cn : Chinese (Mandarin/China)
zh-tw : Chinese (Mandarin/Taiwan)
zh-yue : Chinese (Cantonese)
hr : Croatian
cs : Czech
da : Danish
nl : Dutch
en : English
en-au : English (Australia)
en-uk : English (United Kingdom)
en-us : English (United States)
eo : Esperanto
fi : Finnish
fr : French
de : German
el : Greek
ht : Haitian Creole
hi : Hindi
hu : Hungarian
is : Icelandic
id : Indonesian
it : Italian
ja : Japanese
ko : Korean
la : Latin
lv : Latvian
mk : Macedonian
no : Norwegian
pl : Polish
pt : Portuguese
pt-br : Portuguese (Brazil)
ro : Romanian
ru : Russian
sr : Serbian
sk : Slovak
es : Spanish
es-es : Spanish (Spain)
es-us : Spanish (United States)
sw : Swahili
sv : Swedish
ta : Tamil
th : Thai
tr : Turkish
vi : Vietnamese
cy : Welsh`
exports.limitLu = (m) =>{
	return`Sisa limit kamu : ${m} `
	}
	
exports.addstik = (a, b) =>{
	return`List ${a} dengan key ${b} sudah ada di database`
	}
exports.delstik = (a, b) =>{
	return`List ${a} dengan key ${b} tidak ada di database`
	}
exports.profile = (username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal, regTime,premium, msToDate , premiumDate, now, lastclaim) =>{
	return`📛 Nama: ${username} (@${m.sender.split`@`[0]})${about ? '\n💌 Bio: ' + about : ''}
👨‍❤️‍👨 Status: ${pasangan ? `Berpacaran @${pasangan.split`@`[0]}` : '-' }
#️⃣ Nomor: ${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 Link: https://wa.me/${m.sender.split`@`[0]}
🤷‍♂️ XP: Total ${exp} (${exp - min} / ${xp}) [ ${math <= 0 ? `Ready to *${prefix}levelup*` : `${math} XP left to levelup`} ]
🎚️ Level: ${level}
🎢 Role: ${role}
📊 Limit: ${limit}
®️ Registered: ${registered ? '✅ (' + tanggal(regTime) + ')' : '❌'}
⛽ Premium: ${premium ? `✅\n⏰ Expired Premium : msToDate(premiumDate - now)` : '❌'}
🛄 Last claim: ${lastclaim > 0 ? tanggal(lastclaim) : '-'}`
	}

//
exports.needReg = (a, b, c) =>{
	return`🇲🇨 Daftar dulu bang

Gini : #daftar nama|umur|gender|hobi
Contoh : #daftar ${a}|18|cowo|Game

🇺🇲 Please register first

Like this : #register name|age|gender|hobby
Example : #register ${a}|18|male|Games`
}
exports.Nolimit = (prefix) =>{
	return`Limit kamu hari ini telah habis ⚠️\n\nSilahkan beli limit dengan cara ketik ${prefix}buy atau ${prefix}buyall`
	}
exports.Noseri = () =>{
	return`Nomor seri (sn) nya salah\n.ceksn -- _cek serial number_`
	}
exports.NoseriOk = () =>{
	return`Berhasil membatalkan pendaftaran!`
	}
exports.ExReg = (c) =>{
	return`🇲🇨 Gunakan tanda "|" sebagai pembatas

Gini : #daftar nama|umur|gender|hobi
Contoh : #daftar ${a}|18|cowo|Game


🇺🇲 Use the "|" sign as a barrier

Like this : #register name|age|gender|hobby
Example : #register ${a}|18|male|Games`
	}
exports.DoneReg = () =>{
	return`Kamu sudah terdaftar di database`
	}
exports.UmurReg = () =>{
	return`Umur harus berupa angka`
	}
exports.NamaReg = () =>{
	return`Nama kamu panjang banget, gunakan nama awal saja`
	}
exports.HobiReg = () =>{
	return`Hobi kamu banyak banget, cukup 1 atau 2 hobi saja`
	}
exports.RegReg = (a,b,c,d,e,f,g,h,i) =>{
	return`╭─「 *VERIFIKASI BERHASIL* 」
│\`\`\`Verifikasi Sukses Dengan\`\`\` 
│
│\`\`\`SN: ${a}\`\`\`
│\`\`\`Pada : ${b}\`\`\`
│\`\`\`Nama : ${c}\`\`\`
│\`\`\`Umur : ${d}\`\`\`
│\`\`\`Gender : ${e}\`\`\`
│\`\`\`Nomor : @${f}\`\`\`
│\`\`\`Untuk menggunakan bot silahkan \`\`\`
│\`\`\`Kirim perintah ${g}menu\`\`\`
│\`\`\`atau ${h}allmenu\`\`\`
│
│\`\`\`\Total : ${i} Users\`\`\`
╰─────────────────────`
	}
exports.genderReg = (a) =>{
	return`Pilih salah satu ( cewe / cowo)\n\n${a}`
	}
exports.UmurXReg = () =>{
	return`Umur kamu terlalu tua, bukannya mati ehh malah main bot`
	}
exports.firstChat = (a, b, c) =>{
	return`Selamat ${a} ${b} 🤗, saya adalah ${c} yaitu bot whatsapp. Ada yang bisa ${c} bantu?`
	}
exports.StartAbsen = () =>{
	return`Mulai Absen`
	}
exports.AddstikOk = (q, a, b, prefix, command) =>{
	return`Sukses Menambahkan ${q} Ke Dalam Database ${a}\n\nCek dengan cara ${prefix}${b}`
	}
	
exports.AddstikOk_ = (a,b) =>{
	return`Durasi ${a} detik, yaitu durasi maksimal ${b} yang bisa bot simpan ke dalam database`
	}
exports.Addvn = () =>{
	return`Tunggu sebentar, saya akan mencoba untuk mengupload media ini ke database`
	}
	
exports.ListStik = (a) =>{
	return`_Untuk mengambil ${a} silahkan kirim pesan sesuai dengan list ${a} yang ada di atas_`
	}
exports.noAbsen = () =>{
return `❌ Tidak ada absen berlangsung di group ini! \n.absenstart -- mulai absen`
}
exports.StartAbsen = () =>{
	return`Mulai Absen`
	}
exports.DahAbsen = () =>{
	return`Kamu sudah absen`
	}
exports.DelAbsen = () =>{
	return`✅ Berhasil menghapus absen di group ini`
	}
exports.adaAbsen = () =>{
	return`Masih ada sesi absen di group ini !`
	}
exports.SAbsen = () =>{
	return`Absen dimulai\n.absen -- mulai absen`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`Reply stiker!!\nExample : ${prefix + command} .menu\n\n\n*Note : Harus disertai Prefix!!*`
	}
exports.CmdApa = () =>{
	return`Untuk Command Apa?`
	}
exports.UCmd = () =>{
	return`Anda tidak memiliki izin untuk mengubah perintah stiker ini`
	}
exports.HashCmd = () =>{
	return`Tidak ada hash`
	}
exports.DelCmd = () =>{
	return`✅ Sticker cmd telah di hapus`
	}
exports.LockCmd = () =>{
	return`Reply pesan`
	}
exports.NoCmd = () =>{
	return`Hash tidak ditemukan di database`
	}
exports.ReplyMsg = () =>{
	return`Reply Message Yang Ingin Disave Di Database`
	}
exports.NoMsg = (prefix, command) =>{
	return`Contoh : ${prefix + command} nama file`
	}
exports.AdMsg = (text) => {
    return `'${text}' telah terdaftar di list pesan`
}
exports.DoneMsg = (prefix, text) => {
    return `Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}
Lihat list Pesan Dengan ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' tidak terdaftar di list pesan`
}
exports.DelMsg = (text) => {
    return `Berhasil menghapus '${text}' dari list pesan`
}

exports.OnBef = () => {
    return `Sudah di aktifkan sebelumnya`
}
exports.OffYaBef = () => {
    return `Sudah di nonaktifkan sebelumnya`
}
exports.OkOn = (command) => {
    return `${command} Berhasil Di Aktifkan !`
}
exports.OffBef = (command) => {
    return `${command} Berhasil Di Nonaktifkan !`
}
exports.OkMute = () => {
    return `Bot Telah Di Mute Di Group Ini`
}
exports.OkUnMute = () => {
    return `Bot Berhasil Di UnMute`
}
exports.OkUnBanC = () => {
    return `Bot Berhasil Di unban chat`
}
exports.NoMute = () => {
    return `Bot belum di ban dalam group ini`
}

exports.NoMsgBot = () => {
    return `Pesan tersebut bukan dikirim oleh bot!`
}
exports.ToimgErr = () => {
    return `Maaf Saat Ini Belum Support Sticker Gif`
}
exports.NoToImg = (prefix, command) => {
    return `Reply Sticker Dengan Caption *${prefix + command}*`
}
exports.BotPublic = () => {
    return `Sukses Ganti Ke Mode Public`
}
exports.BotSelf = () => {
    return `Sukses Ganti Ke Mode Self\n\nUntuk mengubah ke mode public silahkan gunakan nomor bot`
}
exports.NoToStik = (prefix, command) => {
    return `Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`
}
exports.NoPpBot = (prefix, command) => {
    return `Kirim/Reply Image Dengan Caption ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
}
exports.NoQouted = () => {
    return `Pesan Yang anda reply tidak mengandung reply`
}
exports.SetGcName = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*`
}
exports.SetPpGc = (prefix, command) => {
    return `Kirim/Reply Image Dengan Caption ${prefix + command}`
}
exports.JoinGc = () => {
    return `Masukkan Link Group!`
}
exports.MauKick = () => {
    return `Kirim nomer/tag/reply target yang ingin di kick !`
}
exports.MauAdd = () => {
    return `Kirim nomer/tag/reply target yang ingin di add !`
}
exports.NakPm= () => {
    return `Kirim nomer/tag/reply target yang ingin di promote !`
}
exports.NakDm = () => {
    return `Kirim nomer/tag/reply target yang ingin di demote !`
}
exports.Family = () => {
    return `Soal ini belum selesai!`
}
exports.NoWm = (prefix, command) => {
    return `Kirim perintah ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif Berhasil Diubah Menjadi\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks*\n\nContoh : ${prefix + command} WhatsApp Bot`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *teks 1|teks 2*\n\nContoh : ${prefix + command} WhatsApp|Bot`
}
exports.OffNsfw = () => {
    return `Fitur nsfw belum di aktifkan`
}
exports.CoverBanLol = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*Color Yg Kamu Masukkan Salah*\n\n_Berikut list color yg benar, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `Contoh: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `Contoh: ${prefix + command} nama|${style}\nUsage: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `Contoh: ${g + h} ${a}|${b}|${c}\nUsage: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} Yg Kamu Masukkan Salah*\n\n_Berikut List ${style2} Yg Benar, Total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style, style2 = "query") => {
    return `Kirim perintah: \n${prefix + command} ${style2}\n\nContoh penggunaan:\n${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Contoh : ${prefix + command} ${juz}\nUsage: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Contoh penggunaan : ${prefix + command} ${surah}|${ayat}\nUsage: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `❌ Jawaban Salah`
}

exports.JwbTrue = (tebak, exp) => {
return`🎮 ${tebak} 🎮\n\nJawaban Benar 🎉\n+${exp} XP`
}
exports.TbGam = () => {
    return `Tebak Gambar`
}
exports.TbKa = () => {
    return `Tebak Kata`
}
exports.TbBe = () => {
    return `Tebak Bendera`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Susun Kata`
}
exports.TbAt = () => {
    return `Tebak Kalimat`
}
exports.TbSi = () => {
    return `Tebak Siapa`
}
exports.Tbte = () => {
    return `Teka Teki`
}
exports.TbEn = () => {
    return `Tebak Kabupaten`
}
exports.TbKi = () => {
    return `Tebak Kimia`
}
exports.TbLi = () => {
    return `Tebak Lirik`
}
exports.TbKan = () => {
    return `Tebak Tebakan`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Jawablah Pertanyaan Berikut :*\n${soal}\n\nTerdapat *${jawaban}* Jawaban ${find}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} Telah Afk Dengan Alasan ${afk ? ': ' + afk : 'Nothing'}`
}

exports.TbGambar = (desk, time, exp) => {
    return `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${desk}\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbGambar_ = (jawaban) => {
    return `Waktu Habis\nJawaban:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Waktu Habis\nJawaban:  ${jawaban}}\nDeskripsi : ${desk}`
}
exports.TbKata = (soal, time, exp) => {
    return `Silahkan Jawab Pertanyaan Berikut\n\n${soal}\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbBendera = (time, exp) => {
    return `Silahkan Jawab Pertanyaan Diatas\n\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbKabupaten = (time, exp) => {
    return `Gambar Diatas Adalah Gambar dari Kabupaten?\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbKimia = (soal, time, exp) => {
    return `Apa Arti Dari Simbol : *${soal}*?\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbLirik = (soal, time, exp) => {
    return `Ini Adalah Lirik Dari Lagu? : *${soal}*?\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbSusun = (soal, tipe, time, exp) => {
    return `*Jawablah Pertanyaan Berikut :*\nSoal : ${soal}\nTipe : ${tipe}\nWaktu : ${time} detik\nHadiah : ${exp} XP`
}
exports.TbMath = (modes, prefix, command) => {
    return `Mode: ${modes}\nContoh penggunaan: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*Berapa hasil dari: ${soal}*?\n\nWaktu: ${time} detik`
}
exports.TbJail = (prefix, command) => {
    return `Kirim/Reply Foto/Sticker Dengan Caption ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Kirim perintah ${prefix + command} *user* *repo* *branch*\n\nExp. ${prefix + command} *zeeone-ofc* *Alphabot-Md* *v12*`
}
exports.StalkIg = () => {
    return `Masukkan username`
}
exports.Tomp4 = (prefix, command) => {
    return `Reply stiker gif dengan caption ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Kirim/Reply Media Dengan Caption ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Mengirim Broadcast Ke ${anu} ${chat}\nWaktu Selesai ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Reply sticker dengan caption ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Kirim/reply ${video} dengan caption ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `Contoh :

1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
	• Contoh : ${prefix + command} id halo
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
	• Contoh : ${prefix + command} id
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `Key tidak boleh sama dengan fitur / command bot`
}
exports.Addlist_ = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key|response*\n\n_Contoh_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `List respon dengan key : *${arg}* sudah ada di group ini.`
}
exports.AddlistDone = (arg) => {
    return `Sukses set list message dengan key : *${arg}*\n\nNote : Tunggu beberapa menit jika list tidak berubah`
}
exports.Dellist = () => {
    return `Belum ada list message di database`
}
exports.Dellist_  = (prefix, command) => {
    return `Gunakan dengan cara ${prefix + command} *key*\n\n_Contoh_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `List respon dengan key *${key}* tidak ada di database!`
}
exports.DellistDone = (key) => {
    return `Sukses delete list message dengan key *${key}*`
}
exports.ListUp = (key) => {
    return `Maaf, untuk key *${key}* belum terdaftar di group ini`
}
exports.UpList = (key) => {
    return `Sukses update list message dengan key : *${key}*\n\nNote : Tunggu beberapa menit jika list tidak berubah`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hai ${pushname} Selamat Datang di Anonymous Chat\n\nKetik ${prefix}start untuk mencari Teman Chat anda, atau bisa pencet tombol Search dibawah`
}
exports.Anon = () => {
    return `Cari Teman Chat`
}
exports.StopAnon = (prefix) => {
    return `Kamu Sedang Tidak Berada Di Sesi Anonymous\n${prefix}start -- _cari pasangan baru_`
}
exports.AnonNew = () => {
    return `Cari Teman Baru`
}
exports.AnonDahStop = (prefix) => {
    return `✅ Berhasil memberhentikan chat\n${prefix}start -- _cari pasangan baru_`
}
exports.StopAnonByFren = (prefix) => {
    return `⚠️ Sesi chat ini telah diberhentikan oleh teman chat kamu_\n${prefix}start -- _cari pasangan baru_`
}
exports.AnonOn = (prefix) => {
    return `⚠️ Kamu masih dalam sesi chat dengan partner!\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
}
exports.AnonFind = (prefix) => {
    return `_Pasangan Ditemukan 🐼_\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
}
exports.AnonSearch = (prefix) => {
    return `🔎 Mohon tunggu sedang mencari teman chat\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan percarian ini_`
}
exports.NoAnon = (prefix) => {
    return `⚠️ Kamu belum pernah memulai chat!\n${prefix}start -- _cari pasangan baru_`
}
exports.NoAudRep = (prefix, command) => {
    return `Balas audio yang ingin diubah dengan caption *${prefix + command}*`
}

exports.NoTagBan = (prefix, command) => {
    return `Contoh penggunaan :\n${prefix + command} 62938828728992 \natau\n${prefix + command} @tagmember`
}
exports.getBan = (a) => {
    return `⚠️ Mohon maaf nomor kamu telah di banned oleh owner\n\nOwner 👇\nwa.me/${a}`
}
exports.Addstik = (prefix, command, t) => {
    return `Reply ${t} dengan caption ${prefix + command} text\n\nExample : ${prefix + command} bot`
}
exports.AllFitur = () => {
    return `\n_Semua fitur bot_`
}
exports.InfoMenu = () => {
    return `\n_Mencari informasi terkini melalui bot_`
}
exports.KhususOwn = () => {
    return `\n_Fitur khusus owner bot_`
}
exports.DataBor = () => {
    return `\n_Menyimpan sesuatu di database bot_`
}
exports.MenuGc = () => {
    return `\n_Menampilkan fitur khusus group_`
}
exports.MenuAni = () => {
    return `\n_Mencari random gambar anime_`
}
exports.TagMem = () => {
    return `\n_Menandai member group_`
}
exports.StalkOrk = () => {
    return `\n_Kepoin sosmed orang_`
}
exports.Hoja = () => {
    return `\n_Mencari sesuatu yang gk penting_`
}
exports.CovertWi = () => {
    return `\n_Mengkorversi sesuatu dengan bot_`
}
exports.AnuFoto = () => {
    return `\n_Mengubah gambar jadi lebih menarik_`
}
exports.HajuStik = () => {
    return `\n_Membuat stiker yang unik_`
}
exports.EloDown= () => {
    return `\n_Menampilkan fitur download_`
}
exports.StikerWibu = () => {
    return `\n_Random stiker anime_`
}
exports.ImageDewasa = () => {
    return `\n_Random image anime 18+_`
}
exports.MakeLogo = () => {
    return `\n_Untuk membuat logo menggunakan bot_`
}
exports.oterMenu = () => {
    return `\n_Menu lainnya_`
}
exports.GameBot = () => {
    return `\n_Fitur untuk bermain dengan bot_`
}
exports.RandRik = () => {
    return `\n_Random video tiktok_`
}
exports.RandCew = () => {
    return `\n_Random gambar cewe cantik_`
}
exports.RamalOi = () => {
    return `\n_Ramalan masa kini_`
}
exports.TeleStik= () => {
    return `\n_Random stiker dari telegram_`
}
exports.BuatLogoLagi = () => {
    return `\n_Membuat logo keren dengan bot_`
}
exports.SoundNih= () => {
    return `\n_Random sound_`
}
exports.KanLogoLagi = () => {
    return `\n_Membuat logo menarik_`
}
exports.TobatBro = () => {
    return `\n_Fitur islami_`
}
exports.MauJualan = () => {
    return `\n_Fitur untuk berjualan_`
}
exports.Maustorage = () => {
    return `\n_Fitur untuk menyimpan stiker, audio, foto dan video_`
}
exports.MauChanger = () => {
    return `\n_Fitur untuk mengubah suara audio / vn_`
}
exports.GadaChat = () => {
    return `\n_Fitur untuk melakukan chat random_`
}
exports.SumberBot = () => {
    return `\n_Sumber script bot ini_`
}
exports.Tqnya = () => {
    return `\n_Siapa aja yang berkontribusi di dalam bot ini_`
}
exports.SetAh = () => {
    return `Mau set menu ya ?`
}
exports.KickAh = (gc) => {
    return `*Antilink Group Terdeteksi*\n\nKamu akan dikeluarkan dari group ${gc}`
    }
    exports.GjdKick = () => {
    return `Sepertinya kamu mengirimkan link group ini, kamu tidak akan di keluarkan`
    }
/////////

/////////
exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `⏳ Mohon tunggu sebentar`
}
exports.ok = () => {
    return `✅ Done.`
}

exports.err = () => {
    return `⚠️ Fitur Sedang Error`
}
exports.erorLink = () => {
    return `⚠️ Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ❎ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `✅  ️Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `🙅  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User bukan seorang admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai kak ${pushname} 👋 selamat ${salam} , 
saya ${botname}, bot ini adalah Beta Multi-Device Whatsapp.
`
}
exports.listMenu = (prefix) => {
    return `乂 * 𝗦 𝗨 𝗕 -- 𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}infomenu
☍ ${prefix}storemenu
☍ ${prefix}rpgmenu
☍ ${prefix}photooxymenu
☍ ${prefix}storagemenu
☍ ${prefix}voicemenu
☍ ${prefix}anonymouscmd
☍ ${prefix}ownermenu
☍ ${prefix}databasemenu
☍ ${prefix}groupmenu
☍ ${prefix}animemenu
☍ ${prefix}tagmenu
☍ ${prefix}stalkmenu
☍ ${prefix}searchmenu
☍ ${prefix}convertmenu
☍ ${prefix}imageeffect
☍ ${prefix}stickereffect
☍ ${prefix}downloadmenu
☍ ${prefix}randomanime
☍ ${prefix}nsfwmenu
☍ ${prefix}textpromenu
☍ ${prefix}othermenu
☍ ${prefix}gamemenu
☍ ${prefix}soundmenu
☍ ${prefix}logomenu
☍ ${prefix}islammenu
☍ ${prefix}asupanmenu
☍ ${prefix}cecanmenu
☍ ${prefix}primboncmd
☍ ${prefix}telestiker
☍ ${prefix}ephotocmd
☍ ${prefix}tqto
`
}
exports.listMenu2 = (prefix) => {
    return `乂 * 𝗕 𝗢 𝗧  𝗜 𝗡 𝗙 𝗢 * 
☍ ${prefix}owner
☍ ${prefix}rules
☍ ${prefix}sc
☍ ${prefix}ping
☍ ${prefix}runtime
☍ ${prefix}botstatus
☍ ${prefix}donate


乂 * 𝗢 𝗪 𝗡 𝗘 𝗥 * 
☍ ${prefix}setmenu
☍ ${prefix}setwm
☍ ${prefix}sendsesi
☍ ${prefix}listpc
☍ ${prefix}listgc
☍ ${prefix}broadcast 
☍ ${prefix}bc 
☍ ${prefix}bcgc 
☍ ${prefix}pushkontak  
☍ ${prefix}bcimage
☍ ${prefix}bcaudio
☍ ${prefix}bcstiker
☍ ${prefix}bcvn
☍ ${prefix}bcvideo
☍ ${prefix}banuser
☍ ${prefix}unban
☍ ${prefix}banned
☍ ${prefix}listbanned
☍ ${prefix}block
☍ ${prefix}ublock
☍ ${prefix}listblock
☍ ${prefix}addpremium
☍ ${prefix}delpremium
☍ ${prefix}listpremium
☍ ${prefix}nsfw 
☍ ${prefix}mute 
☍ ${prefix}autoblok212 
☍ ${prefix}banchat
☍ ${prefix}unbanchat
☍ ${prefix}autorespond 
☍ ${prefix}antiviewonce 
☍ ${prefix}antidelete 
☍ ${prefix}autobio 
☍ ${prefix}anticall 
☍ ${prefix}join
☍ ${prefix}self
☍ ${prefix}public [only bot]
☍ ${prefix}del [reply pesan bot]
☍ ${prefix}pppanjang
☍ ${prefix}setpppanjang
☍ ${prefix}setppbot 

乂 * 𝗦 𝗧 𝗢 𝗥 𝗘  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}list
☍ ${prefix}addlist [key|respond]
☍ ${prefix}dellist [key]
☍ ${prefix}update [key|respond]
☍ ${prefix}store
☍ ${prefix}kali
☍ ${prefix}bagi
☍ ${prefix}tambah
☍ ${prefix}kurang
☍ ${prefix}kalkulator
☍ ${prefix}setproses
☍ ${prefix}updateproses
☍ ${prefix}cekproses
☍ ${prefix}delproses
☍ ${prefix}setdone
☍ ${prefix}updatedone
☍ ${prefix}cekdone
☍ ${prefix}deldone
☍ ${prefix}pay
☍ ${prefix}setcaptionpay
☍ ${prefix}setpaysewa
☍ ${prefix}proses
☍ ${prefix}done

乂 * 𝗔 𝗡 𝗢 𝗡 𝗬 𝗠 𝗢 𝗨 𝗦 *
☍ ${prefix}menfess
☍ ${prefix}confess
☍ ${prefix}balasmenfess
☍ ${prefix}tolakmenfess
☍ ${prefix}stopmenfess
☍ ${prefix}anonymous 
☍ ${prefix}start
☍ ${prefix}skip
☍ ${prefix}stop


乂 * 𝗗 𝗔 𝗧 𝗔 𝗕 𝗔 𝗦 𝗘 *
☍ ${prefix}setcmd 
☍ ${prefix}delcmd 
☍ ${prefix}listcmd
☍ ${prefix}absen
☍ ${prefix}cekabsen
☍ ${prefix}deleteabsen
☍ ${prefix}absenstart
☍ ${prefix}addmsg
☍ ${prefix}getmsg
☍ ${prefix}listmsg
☍ ${prefix}delmsg

乂 * 𝗥 𝗣 𝗚  𝗚 𝗔 𝗠 𝗘 𝗦 *
☍ ${prefix}adventure
☍ ${prefix}weekly
☍ ${prefix}use
☍ ${prefix}transfer
☍ ${prefix}slot
☍ ${prefix}shop
☍ ${prefix}pasar
☍ ${prefix}profile
☍ ${prefix}ojek
☍ ${prefix}open
☍ ${prefix}nguli
☍ ${prefix}narik
☍ ${prefix}nabung
☍ ${prefix}monthly
☍ ${prefix}mining
☍ ${prefix}merampok
☍ ${prefix}mancing
☍ ${prefix}kolam
☍ ${prefix}koboy
☍ ${prefix}kerja
☍ ${prefix}kandang
☍ ${prefix}levelup
☍ ${prefix}judi
☍ ${prefix}inventory
☍ ${prefix}hourly
☍ ${prefix}fishop
☍ ${prefix}feed
☍ ${prefix}duel
☍ ${prefix}daily
☍ ${prefix}craft
☍ ${prefix}cooldown
☍ ${prefix}cook
☍ ${prefix}collect
☍ ${prefix}chop
☍ ${prefix}casino
☍ ${prefix}buy
☍ ${prefix}bank 
☍ ${prefix}bansos
☍ ${prefix}berdagang
☍ ${prefix}berkebon
☍ ${prefix}build

乂 * 𝗚 𝗥 𝗢 𝗨 𝗣 * 
☍ ${prefix}addsewa
☍ ${prefix}delsewa
☍ ${prefix}listsewa
☍ ${prefix}ceksewa
☍ ${prefix}register
☍ ${prefix}unregister
☍ ${prefix}ceksn
☍ ${prefix}listonline
☍ ${prefix}sider
☍ ${prefix}wm packname|author
☍ ${prefix}infochat
☍ ${prefix}setdesk 
☍ ${prefix}setppgrup 
☍ ${prefix}pppanjanggc
☍ ${prefix}setpppanjanggc
☍ ${prefix}revoke
☍ ${prefix}leave
☍ ${prefix}add
☍ ${prefix}kick
☍ ${prefix}leave
☍ ${prefix}linkgc
☍ ${prefix}welcome 
☍ ${prefix}goodbye 
☍ ${prefix}demotedetect 
☍ ${prefix}promotedetect  
☍ ${prefix}setwelcome
☍ ${prefix}updatewelcome
☍ ${prefix}delwelcome
☍ ${prefix}cekwelcome
☍ ${prefix}setgoodbye
☍ ${prefix}updategoodbye
☍ ${prefix}delgoodbye
☍ ${prefix}cekgoodbye
☍ ${prefix}setpromote
☍ ${prefix}updatepromote
☍ ${prefix}setdemote
☍ ${prefix}updatedemote
☍ ${prefix}cekpromote
☍ ${prefix}cekdemote
☍ ${prefix}delpromote
☍ ${prefix}deldemote
☍ ${prefix}nsfw 
☍ ${prefix}antilink 
☍ ${prefix}antilink2
☍ ${prefix}antiwame 
☍ ${prefix}antiwame2
☍ ${prefix}antibadword
☍ ${prefix}antibadword2
☍ ${prefix}take
☍ ${prefix}group 
☍ ${prefix}tagall 
☍ ${prefix}hidetag 

乂 * 𝗔 𝗡 𝗜 𝗠 𝗘 * 
☍ ${prefix}quotesanime
☍ ${prefix}anime
☍ ${prefix}animeinfo
☍ ${prefix}manga
☍ ${prefix}character

乂 * 𝗧 𝗔 𝗚 * 
☍ ${prefix}stickertag
☍ ${prefix}videotag
☍ ${prefix}vntag
☍ ${prefix}imagetag

乂 * 𝗦 𝗧 𝗔 𝗟 𝗞 𝗜 𝗡 𝗚 * 
☍ ${prefix}mlstalk [id|zona id]
☍ ${prefix}ffstalk [id]
☍ ${prefix}igstalk 
☍ ${prefix}ghstalk 
☍ ${prefix}ytstalk [channel]


乂 * 𝗦 𝗘 𝗔 𝗥 𝗖 𝗛 * 
☍ ${prefix}ytsearch
☍ ${prefix}openai
☍ ${prefix}openaiimg
☍ ${prefix}aidraw
☍ ${prefix}chatgpt
☍ ${prefix}githubsearch
☍ ${prefix}kbbi
☍ ${prefix}lirik
☍ ${prefix}wallpaper
☍ ${prefix}google
☍ ${prefix}wikimedia
☍ ${prefix}apksearch
☍ ${prefix}findapk
☍ ${prefix}hentai
☍ ${prefix}wattpad
☍ ${prefix}webtoons
☍ ${prefix}brainly
☍ ${prefix}pinterest


乂 * 𝗖 𝗢 𝗡 𝗩 𝗘 𝗥 𝗧 𝗘 𝗥 *
☍ ${prefix}emoji [😭]
☍ ${prefix}emojimix [😭+💩]
☍ ${prefix}toaudio
☍ ${prefix}tomp3
☍ ${prefix}tovn
☍ ${prefix}stiker 
☍ ${prefix}tourl
☍ ${prefix}ssweb [url]
☍ ${prefix}togif
☍ ${prefix}tomp4
☍ $prefix}toimg [reply sticker]


乂 * 𝗜 𝗠 𝗔 𝗚 𝗘  𝗘 𝗙 𝗙 𝗘 𝗖 𝗧 * 
☍ ${prefix}wanted 
☍ ${prefix}utatoo 
☍ ${prefix}unsharpen 
☍ ${prefix}thanos 
☍ ${prefix}sniper 
☍ ${prefix}sharpen 
☍ ${prefix}sepia 
☍ ${prefix}scary 
☍ ${prefix}rip 
☍ ${prefix}redple 
☍ ${prefix}rejected 
☍ ${prefix}posterize 
☍ ${prefix}ps4 
☍ ${prefix}pixelize 
☍ ${prefix}missionpassed 
☍ ${prefix}moustache 
☍ ${prefix}lookwhatkarenhave 
☍ ${prefix}jail 
☍ ${prefix}invert 
☍ ${prefix}instagram 
☍ ${prefix}greyscale 
☍ ${prefix}glitch2 
☍ ${prefix}gay 
☍ ${prefix}frame 
☍ ${prefix}fire 
☍ ${prefix}distort 
☍ ${prefix}dictator 
☍ ${prefix}deepfry 
☍ ${prefix}ddungeon 
☍ ${prefix}circle 
☍ ${prefix}challenger 
☍ ${prefix}burn 
☍ ${prefix}brazzers 
☍ ${prefix}beautiful 


乂 * 𝗦 𝗧 𝗜 𝗖 𝗞 𝗘 𝗥  𝗘 𝗙 𝗙 𝗘 𝗖 𝗧 * 
☍ ${prefix}jail 
☍ ${prefix}red 
☍ ${prefix}gay 
☍ ${prefix}bloo 
☍ ${prefix}blue 
☍ ${prefix}sepia 
☍ ${prefix}green 
☍ ${prefix}glass 
☍ ${prefix}invert 
☍ ${prefix}blurple 
☍ ${prefix}blurple2 
☍ ${prefix}wasted 
☍ ${prefix}passed 
☍ ${prefix}triggered 
☍ ${prefix}comrade 
☍ ${prefix}greyscale 
☍ ${prefix}threshold 
☍ ${prefix}brightness 
☍ ${prefix}invertgreyscale 


乂 * 𝗗 𝗢 𝗪 𝗡 𝗟 𝗢 𝗔 𝗗 *
☍ ${prefix}tiktok
☍ ${prefix}tiktoknowm
☍ ${prefix}tiktokwm
☍ ${prefix}tiktokaudio
☍ ${prefix}ytdl
☍ ${prefix}play
☍ ${prefix}ytmp3
☍ ${prefix}ytshortmp3
☍ ${prefix}ytmp4
☍ ${prefix}ytshorts
☍ ${prefix}facebook
☍ ${prefix}facebooksd
☍ ${prefix}facebookhd
☍ ${prefix}fbaudio
☍ ${prefix}igstory 
☍ ${prefix}igdl
☍ ${prefix}igphoto
☍ ${prefix}igvideo
☍ ${prefix}igreels
☍ ${prefix}igtv
☍ ${prefix}soundcloud
☍ ${prefix}gitclone [link repo]
☍ ${prefix}gitrepo [username repo branch]
☍ ${prefix}mediafire
☍ ${prefix}nhentaipdf [id]
☍ ${prefix}twitter link

乂 * 𝗣 𝗥 𝗜 𝗠 𝗕 𝗢 𝗡 *
☍ ${prefix}nomorhoki 887435047326
☍ ${prefix}artimimpi
☍ ${prefix}artinama
☍ ${prefix}ramaljodoh
☍ ${prefix}ramaljodohbali
☍ ${prefix}suamiistri
☍ ${prefix}ramalcinta
☍ ${prefix}cocoknama
☍ ${prefix}pasangan
☍ ${prefix}jadiannikah
☍ ${prefix}sifatusaha
☍ ${prefix}rezeki
☍ ${prefix}pekerjaan
☍ ${prefix}nasib
☍ ${prefix}penyakit
☍ ${prefix}tarot
☍ ${prefix}fengshui
☍ ${prefix}haribaik
☍ ${prefix}harisangar
☍ ${prefix}harisial
☍ ${prefix}nagahari
☍ ${prefix}arahrezeki
☍ ${prefix}peruntungan
☍ ${prefix}weton
☍ ${prefix}karakter
☍ ${prefix}keberuntungan
☍ ${prefix}memancing
☍ ${prefix}masasubur
☍ ${prefix}zodiak 
☍ ${prefix}shio

乂 * 𝗥 𝗔 𝗡 𝗗 𝗢 𝗠  𝗔 𝗡 𝗜 𝗠 𝗘 *
☍ ${prefix}loli
☍ ${prefix}neko
☍ ${prefix}waifu
☍ ${prefix}shinobu
☍ ${prefix}megumin
☍ ${prefix}bully
☍ ${prefix}cuddle
☍ ${prefix}cry
☍ ${prefix}hug
☍ ${prefix}awoo
☍ ${prefix}kiss
☍ ${prefix}lick
☍ ${prefix}pat
☍ ${prefix}smug
☍ ${prefix}bonk
☍ ${prefix}yeet
☍ ${prefix}blush
☍ ${prefix}smile
☍ ${prefix}wave
☍ ${prefix}highfive
☍ ${prefix}handhold
☍ ${prefix}nom
☍ ${prefix}bite
☍ ${prefix}glomp
☍ ${prefix}slap
☍ ${prefix}kill
☍ ${prefix}happy
☍ ${prefix}wink
☍ ${prefix}poke
☍ ${prefix}dance
☍ ${prefix}cringe

乂 * 𝗩 𝗢 𝗜 𝗖 𝗘  𝗖 𝗛 𝗔 𝗡 𝗚 𝗘  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}bass
☍ ${prefix}blown
☍ ${prefix}deep
☍ ${prefix}earrape
☍ ${prefix}fast
☍ ${prefix}fat
☍ ${prefix}nightcore
☍ ${prefix}reverse
☍ ${prefix}robot
☍ ${prefix}slow
☍ ${prefix}smooth
☍ ${prefix}tupai

乂 * 𝗦 𝗧 𝗢 𝗥 𝗔 𝗚 𝗘  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}addvn
☍ ${prefix}listvn
☍ ${prefix}delvn
☍ ${prefix}addbadword
☍ ${prefix}listbadword
☍ ${prefix}delbadword
☍ ${prefix}adddocument
☍ ${prefix}listdocument
☍ ${prefix}deldocument
☍ ${prefix}addtext
☍ ${prefix}listtext
☍ ${prefix}deltext
☍ ${prefix}addaudio
☍ ${prefix}listaudio
☍ ${prefix}delaudio
☍ ${prefix}addimage
☍ ${prefix}listimage
☍ ${prefix}delimage
☍ ${prefix}addvideo
☍ ${prefix}listvideo
☍ ${prefix}delvideo
☍ ${prefix}addstik
☍ ${prefix}delstik
☍ ${prefix}liststik

乂 * 𝗡 𝗦 𝗙 𝗪  &  𝗦 𝗙 𝗪 *
☍ ${prefix}ahegao
☍ ${prefix}anal
☍ ${prefix}avatar2
☍ ${prefix}baka
☍ ${prefix}bdsm
☍ ${prefix}bj
☍ ${prefix}blowjob
☍ ${prefix}boobs
☍ ${prefix}classic
☍ ${prefix}cuckold
☍ ${prefix}cuddle
☍ ${prefix}cum
☍ ${prefix}cumarts
☍ ${prefix}cumsluts
☍ ${prefix}ero
☍ ${prefix}erofeet
☍ ${prefix}erokemonomimi
☍ ${prefix}erokitsune
☍ ${prefix}eroneko
☍ ${prefix}eroyuri
☍ ${prefix}feed
☍ ${prefix}feet
☍ ${prefix}feetgif
☍ ${prefix}femdom
☍ ${prefix}foot
☍ ${prefix}foxgirl
☍ ${prefix}futanari
☍ ${prefix}gangbang
☍ ${prefix}girl-solo
☍ ${prefix}girl-solo-gif
☍ ${prefix}glasses
☍ ${prefix}hentai
☍ ${prefix}hentai
☍ ${prefix}hentai-gif
☍ ${prefix}holo
☍ ${prefix}holo2
☍ ${prefix}holoero
☍ ${prefix}hug
☍ ${prefix}jahy
☍ ${prefix}kemonomimi
☍ ${prefix}kemonomimi2
☍ ${prefix}keta
☍ ${prefix}kiss
☍ ${prefix}kitsune
☍ ${prefix}kuni
☍ ${prefix}lesbian
☍ ${prefix}lizard
☍ ${prefix}masturbation
☍ ${prefix}meowi
☍ ${prefix}neko
☍ ${prefix}neko-gif
☍ ${prefix}neko-sfw
☍ ${prefix}neko2
☍ ${prefix}nsfw-neko
☍ ${prefix}orgy
☍ ${prefix}panties
☍ ${prefix}pat
☍ ${prefix}poke
☍ ${prefix}pussyart
☍ ${prefix}pussywankgif
☍ ${prefix}slap
☍ ${prefix}smug
☍ ${prefix}spank
☍ ${prefix}tentacles
☍ ${prefix}thighs
☍ ${prefix}tickle
☍ ${prefix}tits
☍ ${prefix}trap
☍ ${prefix}woof
☍ ${prefix}yuri
☍ ${prefix}zettai

乂 * 𝗘 𝗣 𝗛 𝗢 𝗧 𝗢 𝟯𝟲𝟬  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}1917text
☍ ${prefix}angelwing
☍ ${prefix}announofwin
☍ ${prefix}birthdaycake
☍ ${prefix}capercut
☍ ${prefix}cardhalloween
☍ ${prefix}cartoonstyle
☍ ${prefix}christmascard 
☍ ${prefix}christmasseason
☍ ${prefix}covergamepubg
☍ ${prefix}covergraffiti
☍ ${prefix}dragonfire
☍ ${prefix}embroider
☍ ${prefix}fabrictext
☍ ${prefix}facebookgold
☍ ${prefix}facebooksilver
☍ ${prefix}funnyanimations
☍ ${prefix}funnyhalloween
☍ ${prefix}galaxybat
☍ ${prefix}galaxywallpaper
☍ ${prefix}generalexam 
☍ ${prefix}glowingtext
☍ ${prefix}graffiti3d
☍ ${prefix}graffititext
☍ ${prefix}graffititext2
☍ ${prefix}graffititext3
☍ ${prefix}greetingcardvideo 
☍ ${prefix}halloweenbats
☍ ${prefix}heartcup
☍ ${prefix}heartflashlight
☍ ${prefix}horrorletter
☍ ${prefix}icetext
☍ ${prefix}instagramgold
☍ ${prefix}instagramsilver
☍ ${prefix}lightningpubg
☍ ${prefix}lovecard
☍ ${prefix}lovelycute
☍ ${prefix}masteryavatar
☍ ${prefix}merrycard
☍ ${prefix}messagecoffee
☍ ${prefix}metalstar
☍ ${prefix}milkcake
☍ ${prefix}moderngold
☍ ${prefix}moderngold2
☍ ${prefix}moderngold3
☍ ${prefix}moderngoldsilver
☍ ${prefix}multicolor
☍ ${prefix}nameonheart
☍ ${prefix}noeltext
☍ ${prefix}projectyasuo
☍ ${prefix}pubgbirthday
☍ ${prefix}pubgglicthvideo 
☍ ${prefix}pubgmascotlogo
☍ ${prefix}puppycute
☍ ${prefix}realembroidery
☍ ${prefix}retrotext
☍ ${prefix}rosebirthday
☍ ${prefix}shirtclub
☍ ${prefix}snowontext
☍ ${prefix}starsnight
☍ ${prefix}summerbeach
☍ ${prefix}sunglightshadow
☍ ${prefix}textcakes
☍ ${prefix}texthalloween
☍ ${prefix}textonglass
☍ ${prefix}textsky
☍ ${prefix}thundertext
☍ ${prefix}twittergold
☍ ${prefix}twittersilver
☍ ${prefix}viettel
☍ ${prefix}vintagetelevision
☍ ${prefix}watercolor2
☍ ${prefix}womansday
☍ ${prefix}writeblood
☍ ${prefix}writegalaxy
☍ ${prefix}writehorror
☍ ${prefix}youtubegold
☍ ${prefix}youtubesilver
☍ ${prefix}zombie3d


乂 * 𝗧 𝗘 𝗫 𝗧 𝗣 𝗥 𝗢  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}halloween2 
☍ ${prefix}horror 
☍ ${prefix}game8bit 
☍ ${prefix}layered 
☍ ${prefix}glitch2 
☍ ${prefix}cool-graffiti 
☍ ${prefix}cool-wall-graffiti 
☍ ${prefix}realistic 
☍ ${prefix}space3d 
☍ ${prefix}glitch-tiktok 
☍ ${prefix}stone 
☍ ${prefix}marvel 
☍ ${prefix}marvel2 
☍ ${prefix}pornhub 
☍ ${prefix}avengers 
☍ ${prefix}metal-rainbow 
☍ ${prefix}metal-gold 
☍ ${prefix}metal-galaxy 
☍ ${prefix}halloween2 
☍ ${prefix}lion 
☍ ${prefix}wolf-black-white 
☍ ${prefix}wolf-galaxy 
☍ ${prefix}ninja 
☍ ${prefix}3dsteel 
☍ ${prefix}horror2 
☍ ${prefix}lava 
☍ ${prefix}bagel 
☍ ${prefix}blackpink 
☍ ${prefix}rainbow2 
☍ ${prefix}water-pipe 
☍ ${prefix}halloween 
☍ ${prefix}sketch 
☍ ${prefix}sircuit 
☍ ${prefix}discovery 
☍ ${prefix}metallic2 
☍ ${prefix}fiction 
☍ ${prefix}demon 
☍ ${prefix}transformer 
☍ ${prefix}berry 
☍ ${prefix}thunder 
☍ ${prefix}magma 
☍ ${prefix}3dstone 
☍ ${prefix}neon 
☍ ${prefix}glitch 
☍ ${prefix}harry-potter 
☍ ${prefix}embossed 
☍ ${prefix}broken 
☍ ${prefix}papercut 
☍ ${prefix}gradient 
☍ ${prefix}glossy 
☍ ${prefix}watercolor 
☍ ${prefix}multicolor 
☍ ${prefix}neon-devil 
☍ ${prefix}underwater 
☍ ${prefix}bear 
☍ ${prefix}wonderful-graffiti 
☍ ${prefix}christmas 
☍ ${prefix}neon-light 
☍ ${prefix}snow 
☍ ${prefix}cloudsky 
☍ ${prefix}luxury2 
☍ ${prefix}gradient2 
☍ ${prefix}summer 
☍ ${prefix}writing 
☍ ${prefix}engraved 
☍ ${prefix}summery 
☍ ${prefix}3dglue 
☍ ${prefix}metaldark 
☍ ${prefix}neonlight 
☍ ${prefix}oscar 
☍ ${prefix}minion 
☍ ${prefix}holographic 
☍ ${prefix}purple 
☍ ${prefix}glossy-blue 
☍ ${prefix}deluxe-gold 
☍ ${prefix}glossy-carbon 
☍ ${prefix}fabric 
☍ ${prefix}neonc 
☍ ${prefix}newyear 
☍ ${prefix}newyear2 
☍ ${prefix}metal-silver 
☍ ${prefix}xmas 
☍ ${prefix}blood 
☍ ${prefix}dark-gold 
☍ ${prefix}joker 
☍ ${prefix}wicker 
☍ ${prefix}natural 
☍ ${prefix}firework 
☍ ${prefix}skeleton 
☍ ${prefix}red-balloon 
☍ ${prefix}purple-balloon 
☍ ${prefix}pink-balloon 
☍ ${prefix}green-balloon 
☍ ${prefix}cyan-balloon 
☍ ${prefix}blue-balloon 
☍ ${prefix}gold-balloon 
☍ ${prefix}steel 
☍ ${prefix}gloss 
☍ ${prefix}denim 
☍ ${prefix}decorate 
☍ ${prefix}decorate-purple 
☍ ${prefix}peridot 
☍ ${prefix}rock 
☍ ${prefix}yellow-glass 
☍ ${prefix}purple-glass 
☍ ${prefix}orange-glass 
☍ ${prefix}green-glass 
☍ ${prefix}cyan-glass 
☍ ${prefix}blue-glass 
☍ ${prefix}red-glass 
☍ ${prefix}purple-shiny-glass 
☍ ${prefix}captain-as2 
☍ ${prefix}robot 
☍ ${prefix}equalizer 
☍ ${prefix}toxic 
☍ ${prefix}pink-sparkling 
☍ ${prefix}blue-sparkling 
☍ ${prefix}green-sparkling 
☍ ${prefix}purple-sparkling 
☍ ${prefix}gold-sparkling 
☍ ${prefix}red-sparkling 
☍ ${prefix}cyan-sparkling 
☍ ${prefix}decorative 
☍ ${prefix}chocolate 
☍ ${prefix}strawberry 
☍ ${prefix}koifish 
☍ ${prefix}bread 
☍ ${prefix}matrix 
☍ ${prefix}blood2 
☍ ${prefix}neonligth2 
☍ ${prefix}thunder2 
☍ ${prefix}3dbox 
☍ ${prefix}neon2 
☍ ${prefix}road-warning 
☍ ${prefix}bokeh 
☍ ${prefix}green-neon 
☍ ${prefix}advanced 
☍ ${prefix}dropwater 
☍ ${prefix}wall 
☍ ${prefix}chrismast 
☍ ${prefix}honey2 
☍ ${prefix}drug 
☍ ${prefix}marble 
☍ ${prefix}marble2 
☍ ${prefix}ice 
☍ ${prefix}juice 
☍ ${prefix}rusty 
☍ ${prefix}abstra 
☍ ${prefix}biscuit 
☍ ${prefix}wood 
☍ ${prefix}scifi 
☍ ${prefix}metal-rainbow 
☍ ${prefix}metal-rose-gold 
☍ ${prefix}purple-gem 
☍ ${prefix}shiny  
☍ ${prefix}yellow-jewelry 
☍ ${prefix}silver-jewelry 
☍ ${prefix}red-jewelry 
☍ ${prefix}purple-jewelry 
☍ ${prefix}orange-jewelry 
☍ ${prefix}green-jewelry 
☍ ${prefix}cyan-jewelry 
☍ ${prefix}blue-jewelry 
☍ ${prefix}hot-metal 
☍ ${prefix}golden 
☍ ${prefix}blue-glitter 
☍ ${prefix}purple-glitter 
☍ ${prefix}pink-glitter 
☍ ${prefix}green-glitter 
☍ ${prefix}silver-glitter 
☍ ${prefix}gold-glitter 
☍ ${prefix}bronze-glitter 
☍ ${prefix}eroded-metal 
☍ ${prefix}carbon 
☍ ${prefix}candy 
☍ ${prefix}blue-metal 
☍ ${prefix}blue-gem 
☍ ${prefix}3dchrome 
☍ ${prefix}black-metal 
☍ ${prefix}metal-gold 
 

乂 * 𝗢 𝗧 𝗛 𝗘 𝗥 𝗦 *
☍ ${prefix}afk
☍ ${prefix}translate
☍ ${prefix}tts
☍ ${prefix}kalkulator
☍ ${prefix}smeme 
☍ ${prefix}smeme2 
☍ ${prefix}memegen 


乂 * 𝗚 𝗔 𝗠 𝗘  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}tembak
☍ ${prefix}tolak
☍ ${prefix}terima
☍ ${prefix}putusin
☍ ${prefix}ikhlasin
☍ ${prefix}cekpacar
☍ ${prefix}kuismath
☍ ${prefix}tebakgambar
☍ ${prefix}tebakkata
☍ ${prefix}tebakbendera
☍ ${prefix}tebakkalimat
☍ ${prefix}tebaksiapa
☍ ${prefix}tebakkabupaten
☍ ${prefix}tebakkimia
☍ ${prefix}tebaklirik
☍ ${prefix}tebaktebakan
☍ ${prefix}tekateki
☍ ${prefix}susunkata
☍ ${prefix}caklontong


乂 * 𝗔 𝗦 𝗨 𝗣 𝗔 𝗡  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}chika
☍ ${prefix}delvira
☍ ${prefix}ayu
☍ ${prefix}bunga
☍ ${prefix}aura
☍ ${prefix}nisa
☍ ${prefix}ziva
☍ ${prefix}yana
☍ ${prefix}viona
☍ ${prefix}syania
☍ ${prefix}riri
☍ ${prefix}syifa
☍ ${prefix}mama_gina
☍ ${prefix}alcakenya
☍ ${prefix}mangayutri
☍ ${prefix}rikagusriani
☍ ${prefix}asupan
☍ ${prefix}bocil
☍ ${prefix}geayubi
☍ ${prefix}santuy
☍ ${prefix}ukhty
☍ ${prefix}syifa

乂 * 𝗧 𝗘 𝗟 𝗘 𝗚 𝗥 𝗔 𝗠  𝗦 𝗧 𝗜 𝗖 𝗞 𝗘 𝗥 *
☍ ${prefix}awoawo
☍ ${prefix}benedict
☍ ${prefix}chat
☍ ${prefix}dbfly
☍ ${prefix}dino_kuning
☍ ${prefix}doge
☍ ${prefix}gojosatoru
☍ ${prefix}hope_boy
☍ ${prefix}jisoo
☍ ${prefix}kr_robot
☍ ${prefix}kucing
☍ ${prefix}lonte
☍ ${prefix}manusia_lidi
☍ ${prefix}menjamet
☍ ${prefix}meow
☍ ${prefix}nicholas
☍ ${prefix}patrick
☍ ${prefix}popoci
☍ ${prefix}sponsbob
☍ ${prefix}kawan_sponsbob
☍ ${prefix}tyni

乂 * 𝗥 𝗔 𝗡 𝗗 𝗢 𝗠  𝗖 𝗘 𝗪 𝗘 *
☍ ${prefix}china 
☍ ${prefix}indonesia 
☍ ${prefix}malaysia 
☍ ${prefix}thailand 
☍ ${prefix}korea 
☍ ${prefix}japan 
☍ ${prefix}vietnam 
☍ ${prefix}jenni 
☍ ${prefix}jiso 
☍ ${prefix}lisa  
☍ ${prefix}rose

乂 * 𝗟 𝗢 𝗚 𝗢  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}anonymous2
☍ ${prefix}astronotspace
☍ ${prefix}avatar3q360
☍ ${prefix}avatarff
☍ ${prefix}avatarleagueofking
☍ ${prefix}avatarlolbyname
☍ ${prefix}avataroverwatch
☍ ${prefix}bannerofaov
☍ ${prefix}bannerofaov2
☍ ${prefix}bannerofapex
☍ ${prefix}banneroffreefire
☍ ${prefix}banneroflol
☍ ${prefix}bannerofoverwatch
☍ ${prefix}bannerofpubg
☍ ${prefix}bannerytcsgo
☍ ${prefix}beautifulgalaxylol
☍ ${prefix}beautifulshimmering
☍ ${prefix}blueneon
☍ ${prefix}circlemarcotteam
☍ ${prefix}colorfulpubg
☍ ${prefix}companylogo
☍ ${prefix}companylogo2
☍ ${prefix}coverbannerlol
☍ ${prefix}coverdota2
☍ ${prefix}coverfblol
☍ ${prefix}coverfreefirefb
☍ ${prefix}coverleagueofking
☍ ${prefix}coverloknew
☍ ${prefix}coverofwarface
☍ ${prefix}coveronepiecefb
☍ ${prefix}crossfirecover
☍ ${prefix}crossfirestyle
☍ ${prefix}csgocover
☍ ${prefix}cutegirlgamer
☍ ${prefix}cyberhunterfb
☍ ${prefix}dragonballfb
☍ ${prefix}effect3donbeach
☍ ${prefix}elegantrotation
☍ ${prefix}fbgamepubgcover
☍ ${prefix}footballteam
☍ ${prefix}gaminglogo4fvs
☍ ${prefix}gamingmascot
☍ ${prefix}gradientlogo
☍ ${prefix}gunlogogaming
☍ ${prefix}introvideomaker
☍ ${prefix}letterlogos 
☍ ${prefix}logoaccording 
☍ ${prefix}logogamingassasin 
☍ ${prefix}lolcoverbyname 
☍ ${prefix}lolpentakill 
☍ ${prefix}lolwallpaper 
☍ ${prefix}maketeamlogo 
☍ ${prefix}mascotstyle 
☍ ${prefix}metalmascot 
☍ ${prefix}newlolavatar 
☍ ${prefix}overwatchcover 
☍ ${prefix}overwatchwallpaper 
☍ ${prefix}pencilsketch 
☍ ${prefix}pubgcutelogo 
☍ ${prefix}pubglogomaker 
☍ ${prefix}rovwallpaper 
☍ ${prefix}rovwallpaperhd 
☍ ${prefix}teamlogo 
☍ ${prefix}wallpaperaov 
☍ ${prefix}wallpaperml 


乂 「 Islamic Menu 」
☍ ${prefix}asmaulhusna
☍ ${prefix}kisahnabi
☍ ${prefix}jadwalshalat
☍ ${prefix}randomquran
☍ ${prefix}randomquran2
☍ ${prefix}listsurah
☍ ${prefix}tafsirsurah
☍ ${prefix}alquranaudio

乂 「 Sound Menu 」
☍ ${prefix}sound1
☍ ${prefix}sound2
☍ ${prefix}sound3
☍ ${prefix}sound4
☍ ${prefix}sound5
☍ ${prefix}sound6
☍ ${prefix}sound7
☍ ${prefix}sound8
☍ ${prefix}sound9
☍ ${prefix}sound10
☍ ${prefix}sound11
☍ ${prefix}sound12
☍ ${prefix}sound13
☍ ${prefix}sound14
☍ ${prefix}sound15
☍ ${prefix}sound16
☍ ${prefix}sound17
☍ ${prefix}sound18 
☍ ${prefix}sound19
☍ ${prefix}sound20
☍ ${prefix}sound21
☍ ${prefix}sound22
☍ ${prefix}sound23
☍ ${prefix}sound24
☍ ${prefix}sound25
☍ ${prefix}sound26
☍ ${prefix}sound27
☍ ${prefix}sound28
☍ ${prefix}sound29
☍ ${prefix}sound30
☍ ${prefix}sound31
☍ ${prefix}sound32
☍ ${prefix}sound33
☍ ${prefix}sound34
☍ ${prefix}sound35
☍ ${prefix}sound36
☍ ${prefix}sound37
☍ ${prefix}sound38
☍ ${prefix}sound39
☍ ${prefix}sound40
☍ ${prefix}sound41
☍ ${prefix}sound42
☍ ${prefix}sound43
☍ ${prefix}sound44
☍ ${prefix}sound45
☍ ${prefix}sound46
☍ ${prefix}sound47
☍ ${prefix}sound48
☍ ${prefix}sound49
☍ ${prefix}sound50
☍ ${prefix}sound51
☍ ${prefix}sound52
☍ ${prefix}sound53
☍ ${prefix}sound54
☍ ${prefix}sound55
☍ ${prefix}sound56
☍ ${prefix}sound57
☍ ${prefix}sound58
☍ ${prefix}sound59
☍ ${prefix}sound60
☍ ${prefix}sound61
☍ ${prefix}sound62
☍ ${prefix}sound63
☍ ${prefix}sound64
☍ ${prefix}sound65
☍ ${prefix}sound66
☍ ${prefix}sound67
☍ ${prefix}sound68
☍ ${prefix}sound69
☍ ${prefix}sound70

乂 「 TqTo 」 
│○ My God
│○ My Parents
│○ Fatih A.
│○ Ferdiz
│○ DikaArdnt
│○ Mhankbarbar
│○ Nurutomo
│○ ZeeoneOfc
│○ Wanz-BOT
│○ Penyedia Module
╰❒ And All Support
    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
2. Jangan telepon bot. ☎️
3. Jangan membandingkan bot 👍

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan.

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini bisa kalian dapatkan di YouTube Alwan priyanto

🗯️ Boleh saya menambah ke grup?
➡️ Untuk itu tergantung dari owner bot sendiri

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix & bisa kamu gunakan tanpa prefix

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan bot dapat berubah kapan saja 

Terimakasih! 
`
}
exports.welcome = () =>{
	return`𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 𝗄𝖺𝗄 🤗
	
☍ 𝖭𝖺𝗆𝖺 :
☍ 𝖴𝗆𝗎𝗋 :
☍ 𝖦𝖾𝗇𝖽𝖾𝗋 :
☍ 𝖠𝗌𝗄𝗈𝗍 :
☍ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://s.id/YouTube-Zeeoneofc
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍
Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`乂 * 𝗕 𝗢 𝗧  𝗜 𝗡 𝗙 𝗢 * 
☍ ${prefix}owner
☍ ${prefix}rules
☍ ${prefix}sc
☍ ${prefix}ping
☍ ${prefix}runtime
☍ ${prefix}botstatus
☍ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`乂 * 𝗢 𝗪 𝗡 𝗘 𝗥 * 
☍ ${prefix}setmenu
☍ ${prefix}setwm
☍ ${prefix}sendsesi
☍ ${prefix}listpc
☍ ${prefix}listgc
☍ ${prefix}broadcast 
☍ ${prefix}bc 
☍ ${prefix}bcgc 
☍ ${prefix}pushkontak 
☍ ${prefix}bcimage
☍ ${prefix}bcaudio
☍ ${prefix}bcstiker
☍ ${prefix}bcvn
☍ ${prefix}bcvideo
☍ ${prefix}banuser
☍ ${prefix}unban
☍ ${prefix}banned
☍ ${prefix}listbanned
☍ ${prefix}block
☍ ${prefix}ublock
☍ ${prefix}listblock
☍ ${prefix}addpremium
☍ ${prefix}delpremium
☍ ${prefix}listpremium
☍ ${prefix}nsfw 
☍ ${prefix}mute 
☍ ${prefix}autoblok212 
☍ ${prefix}banchat
☍ ${prefix}unbanchat
☍ ${prefix}autorespond 
☍ ${prefix}antiviewonce 
☍ ${prefix}antidelete 
☍ ${prefix}autobio 
☍ ${prefix}anticall 
☍ ${prefix}join
☍ ${prefix}self
☍ ${prefix}public
☍ ${prefix}del
☍ ${prefix}pppanjang
☍ ${prefix}setpppanjang
☍ ${prefix}setppbot
`}

exports.database = (prefix) =>{
	return`乂 * 𝗗 𝗔 𝗧 𝗔 𝗕 𝗔 𝗦 𝗘 * 
☍ ${prefix}setcmd 
☍ ${prefix}delcmd 
☍ ${prefix}listcmd
☍ ${prefix}absen
☍ ${prefix}cekabsen
☍ ${prefix}deleteabsen
☍ ${prefix}absenstart
☍ ${prefix}addmsg
☍ ${prefix}getmsg
☍ ${prefix}listmsg
☍ ${prefix}delmsg
`}

exports.group = (prefix) =>{
	return`乂 * 𝗚 𝗥 𝗢 𝗨 𝗣 * 
☍ ${prefix}addsewa
☍ ${prefix}delsewa
☍ ${prefix}listsewa
☍ ${prefix}ceksewa
☍ ${prefix}delsewa
☍ ${prefix}register
☍ ${prefix}unregister
☍ ${prefix}ceksn
☍ ${prefix}listonline
☍ ${prefix}sider
☍ ${prefix}wm
☍ ${prefix}infochat
☍ ${prefix}setdesk 
☍ ${prefix}setppgrup 
☍ ${prefix}pppanjanggc
☍ ${prefix}setpppanjanggc
☍ ${prefix}revoke
☍ ${prefix}leave
☍ ${prefix}add
☍ ${prefix}kick
☍ ${prefix}leave
☍ ${prefix}linkgc
☍ ${prefix}welcome 
☍ ${prefix}goodbye 
☍ ${prefix}demotedetect 
☍ ${prefix}promotedetect  
☍ ${prefix}setwelcome
☍ ${prefix}updatewelcome
☍ ${prefix}delwelcome
☍ ${prefix}cekwelcome
☍ ${prefix}setgoodbye
☍ ${prefix}updategoodbye
☍ ${prefix}delgoodbye
☍ ${prefix}cekgoodbye
☍ ${prefix}setpromote
☍ ${prefix}updatepromote
☍ ${prefix}setdemote
☍ ${prefix}updatedemote
☍ ${prefix}cekpromote
☍ ${prefix}cekdemote
☍ ${prefix}delpromote
☍ ${prefix}deldemote
☍ ${prefix}nsfw 
☍ ${prefix}antilink 
☍ ${prefix}antilink2
☍ ${prefix}antiwame 
☍ ${prefix}antiwame2
☍ ${prefix}antibadword
☍ ${prefix}antibadword2
☍ ${prefix}take
☍ ${prefix}group
☍ ${prefix}tagall 
☍ ${prefix}hidetag 
`}

exports.anime = (prefix) =>{
	return`乂 * 𝗔 𝗡 𝗜 𝗠 𝗘 * 
☍ ${prefix}quotesanime
☍ ${prefix}anime
☍ ${prefix}animeinfo
☍ ${prefix}manga
☍ ${prefix}character
`}

exports.tag = (prefix) =>{
	return`乂 * 𝗧 𝗔 𝗚 * 
☍ ${prefix}stickertag
☍ ${prefix}videotag
☍ ${prefix}vntag
☍ ${prefix}imagetag
`}

exports.stalk = (prefix) =>{
	return`乂 * 𝗦 𝗧 𝗔 𝗟 𝗞 𝗜 𝗡 𝗚 * 
☍ ${prefix}mlstalk 
☍ ${prefix}ffstalk
☍ ${prefix}igstalk 
☍ ${prefix}ghstalk 
☍ ${prefix}ytstalk
`}

exports.search = (prefix) =>{
	return`乂 * 𝗦 𝗘 𝗔 𝗥 𝗖 𝗛 * 
☍ ${prefix}ytsearch
☍ ${prefix}openai
☍ ${prefix}openaiimg
☍ ${prefix}aidraw
☍ ${prefix}chatgpt
☍ ${prefix}githubsearch
☍ ${prefix}kbbi
☍ ${prefix}lirik
☍ ${prefix}wallpaper
☍ ${prefix}google
☍ ${prefix}wikimedia
☍ ${prefix}apksearch
☍ ${prefix}findapk
☍ ${prefix}hentai
☍ ${prefix}wattpad
☍ ${prefix}webtoons
☍ ${prefix}brainly
☍ ${prefix}pinterest
`}

exports.converter = (prefix) =>{
	return`乂 * 𝗖 𝗢 𝗡 𝗩 𝗘 𝗥 𝗧 𝗘 𝗥 * 
☍ ${prefix}emoji
☍ ${prefix}emojimix
☍ ${prefix}toaudio
☍ ${prefix}tomp3
☍ ${prefix}tovn
☍ ${prefix}stiker 
☍ ${prefix}tourl
☍ ${prefix}ssweb
☍ ${prefix}togif
☍ ${prefix}tomp4
☍ ${prefix}toimg 
`}

exports.effect = (prefix) =>{
	return`乂 * 𝗜 𝗠 𝗔 𝗚 𝗘  𝗘 𝗙 𝗙 𝗘 𝗖 𝗧 * 
☍ ${prefix}wanted 
☍ ${prefix}utatoo 
☍ ${prefix}unsharpen 
☍ ${prefix}thanos 
☍ ${prefix}sniper 
☍ ${prefix}sharpen 
☍ ${prefix}sepia 
☍ ${prefix}scary 
☍ ${prefix}rip 
☍ ${prefix}redple 
☍ ${prefix}rejected 
☍ ${prefix}posterize 
☍ ${prefix}ps4 
☍ ${prefix}pixelize 
☍ ${prefix}missionpassed 
☍ ${prefix}moustache 
☍ ${prefix}lookwhatkarenhave 
☍ ${prefix}jail 
☍ ${prefix}invert 
☍ ${prefix}instagram 
☍ ${prefix}greyscale 
☍ ${prefix}glitch 
☍ ${prefix}gay 
☍ ${prefix}frame 
☍ ${prefix}fire 
☍ ${prefix}distort 
☍ ${prefix}dictator 
☍ ${prefix}deepfry 
☍ ${prefix}ddungeon 
☍ ${prefix}circle 
☍ ${prefix}challenger 
☍ ${prefix}burn 
☍ ${prefix}brazzers 
☍ ${prefix}beautiful 
`}

//
exports.effect2 = (prefix) =>{
	return`乂 * 𝗦 𝗧 𝗜 𝗖 𝗞 𝗘 𝗥  𝗘 𝗙 𝗙 𝗘 𝗖 𝗧 * 
☍ ${prefix}jail 
☍ ${prefix}red 
☍ ${prefix}gay 
☍ ${prefix}bloo 
☍ ${prefix}blue 
☍ ${prefix}sepia 
☍ ${prefix}green 
☍ ${prefix}glass 
☍ ${prefix}invert 
☍ ${prefix}blurple 
☍ ${prefix}blurple2 
☍ ${prefix}wasted 
☍ ${prefix}passed 
☍ ${prefix}triggered 
☍ ${prefix}comrade 
☍ ${prefix}greyscale 
☍ ${prefix}threshold 
☍ ${prefix}brightness 
☍ ${prefix}invertgreyscale 
`
}

exports.download = (prefix) =>{
return`乂 * 𝗗 𝗢 𝗪 𝗡 𝗟 𝗢 𝗔 𝗗 * 
☍ ${prefix}tiktok
☍ ${prefix}tiktoknowm
☍ ${prefix}tiktokwm
☍ ${prefix}tiktokaudio
☍ ${prefix}ytdl
☍ ${prefix}play
☍ ${prefix}ytmp3
☍ ${prefix}ytshortmp3
☍ ${prefix}ytmp4
☍ ${prefix}ytshorts
☍ ${prefix}facebook
☍ ${prefix}facebooksd
☍ ${prefix}facebookhd
☍ ${prefix}fbaudio
☍ ${prefix}igstory 
☍ ${prefix}igdl
☍ ${prefix}igphoto
☍ ${prefix}igvideo
☍ ${prefix}igreels
☍ ${prefix}igtv
☍ ${prefix}soundcloud
☍ ${prefix}gitclone
☍ ${prefix}gitrepo
☍ ${prefix}mediafire
☍ ${prefix}nhentaipdf
☍ ${prefix}twitter
`
}

exports.ranime = (prefix) =>{
	return`乂 * 𝗥 𝗔 𝗡 𝗗 𝗢 𝗠  𝗔 𝗡 𝗜 𝗠 𝗘 *
☍ ${prefix}loli
☍ ${prefix}neko
☍ ${prefix}waifu
☍ ${prefix}shinobu
☍ ${prefix}megumin
☍ ${prefix}bully
☍ ${prefix}cuddle
☍ ${prefix}cry
☍ ${prefix}hug
☍ ${prefix}awoo
☍ ${prefix}kiss
☍ ${prefix}lick
☍ ${prefix}pat
☍ ${prefix}smug
☍ ${prefix}bonk
☍ ${prefix}yeet
☍ ${prefix}blush
☍ ${prefix}smile
☍ ${prefix}wave
☍ ${prefix}highfive
☍ ${prefix}handhold
☍ ${prefix}nom
☍ ${prefix}bite
☍ ${prefix}glomp
☍ ${prefix}slap
☍ ${prefix}kill
☍ ${prefix}happy
☍ ${prefix}wink
☍ ${prefix}poke
☍ ${prefix}dance
☍ ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`乂 * 𝗡 𝗦 𝗙 𝗪  &  𝗦  𝗙 𝗪 *
☍ ${prefix}ahegao
☍ ${prefix}anal
☍ ${prefix}avatar2
☍ ${prefix}baka
☍ ${prefix}bdsm
☍ ${prefix}bj
☍ ${prefix}blowjob
☍ ${prefix}boobs
☍ ${prefix}classic
☍ ${prefix}cuckold
☍ ${prefix}cuddle
☍ ${prefix}cum
☍ ${prefix}cumarts
☍ ${prefix}cumsluts
☍ ${prefix}ero
☍ ${prefix}erofeet
☍ ${prefix}erokemonomimi
☍ ${prefix}erokitsune
☍ ${prefix}eroneko
☍ ${prefix}eroyuri
☍ ${prefix}feed
☍ ${prefix}feet
☍ ${prefix}feetgif
☍ ${prefix}femdom
☍ ${prefix}foot
☍ ${prefix}foxgirl
☍ ${prefix}futanari
☍ ${prefix}gangbang
☍ ${prefix}girl-solo
☍ ${prefix}girl-solo-gif
☍ ${prefix}glasses
☍ ${prefix}hentai
☍ ${prefix}hentai
☍ ${prefix}hentai-gif
☍ ${prefix}holo
☍ ${prefix}holo2
☍ ${prefix}holoero
☍ ${prefix}hug
☍ ${prefix}jahy
☍ ${prefix}kemonomimi
☍ ${prefix}kemonomimi2
☍ ${prefix}keta
☍ ${prefix}kiss
☍ ${prefix}kitsune
☍ ${prefix}kuni
☍ ${prefix}lesbian
☍ ${prefix}lizard
☍ ${prefix}masturbation
☍ ${prefix}meowi
☍ ${prefix}neko
☍ ${prefix}neko-gif
☍ ${prefix}neko-sfw
☍ ${prefix}neko2
☍ ${prefix}nsfw-neko
☍ ${prefix}orgy
☍ ${prefix}panties
☍ ${prefix}pat
☍ ${prefix}poke
☍ ${prefix}pussyart
☍ ${prefix}pussywankgif
☍ ${prefix}slap
☍ ${prefix}smug
☍ ${prefix}spank
☍ ${prefix}tentacles
☍ ${prefix}thighs
☍ ${prefix}tickle
☍ ${prefix}tits
☍ ${prefix}trap
☍ ${prefix}woof
☍ ${prefix}yuri
☍ ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`乂 * 𝗧 𝗘 𝗫 𝗧 𝗣 𝗥 𝗢  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}halloween2 
☍ ${prefix}horror 
☍ ${prefix}game8bit 
☍ ${prefix}layered 
☍ ${prefix}glitch2 
☍ ${prefix}cool-graffiti 
☍ ${prefix}cool-wall-graffiti 
☍ ${prefix}realistic 
☍ ${prefix}space3d 
☍ ${prefix}glitch-tiktok 
☍ ${prefix}stone 
☍ ${prefix}marvel 
☍ ${prefix}marvel2 
☍ ${prefix}pornhub 
☍ ${prefix}avengers 
☍ ${prefix}metal-rainbow 
☍ ${prefix}metal-gold 
☍ ${prefix}metal-galaxy 
☍ ${prefix}halloween2 
☍ ${prefix}lion 
☍ ${prefix}wolf-black-white 
☍ ${prefix}wolf-galaxy 
☍ ${prefix}ninja 
☍ ${prefix}3dsteel 
☍ ${prefix}horror2 
☍ ${prefix}lava 
☍ ${prefix}bagel 
☍ ${prefix}blackpink 
☍ ${prefix}rainbow2 
☍ ${prefix}water-pipe 
☍ ${prefix}halloween 
☍ ${prefix}sketch 
☍ ${prefix}sircuit 
☍ ${prefix}discovery 
☍ ${prefix}metallic2 
☍ ${prefix}fiction 
☍ ${prefix}demon 
☍ ${prefix}transformer 
☍ ${prefix}berry 
☍ ${prefix}thunder 
☍ ${prefix}magma 
☍ ${prefix}3dstone 
☍ ${prefix}neon 
☍ ${prefix}glitch 
☍ ${prefix}harry-potter 
☍ ${prefix}embossed 
☍ ${prefix}broken 
☍ ${prefix}papercut 
☍ ${prefix}gradient 
☍ ${prefix}glossy 
☍ ${prefix}watercolor 
☍ ${prefix}multicolor 
☍ ${prefix}neon-devil 
☍ ${prefix}underwater 
☍ ${prefix}bear 
☍ ${prefix}wonderful-graffiti 
☍ ${prefix}christmas 
☍ ${prefix}neon-light 
☍ ${prefix}snow 
☍ ${prefix}cloudsky 
☍ ${prefix}luxury2 
☍ ${prefix}gradient2 
☍ ${prefix}summer 
☍ ${prefix}writing 
☍ ${prefix}engraved 
☍ ${prefix}summery 
☍ ${prefix}3dglue 
☍ ${prefix}metaldark 
☍ ${prefix}neonlight 
☍ ${prefix}oscar 
☍ ${prefix}minion 
☍ ${prefix}holographic 
☍ ${prefix}purple 
☍ ${prefix}glossy-blue 
☍ ${prefix}deluxe-gold 
☍ ${prefix}glossy-carbon 
☍ ${prefix}fabric 
☍ ${prefix}neonc 
☍ ${prefix}newyear 
☍ ${prefix}newyear2 
☍ ${prefix}metal-silver 
☍ ${prefix}xmas 
☍ ${prefix}blood 
☍ ${prefix}dark-gold 
☍ ${prefix}joker 
☍ ${prefix}wicker 
☍ ${prefix}natural 
☍ ${prefix}firework 
☍ ${prefix}skeleton 
☍ ${prefix}red-balloon 
☍ ${prefix}purple-balloon 
☍ ${prefix}pink-balloon 
☍ ${prefix}green-balloon 
☍ ${prefix}cyan-balloon 
☍ ${prefix}blue-balloon 
☍ ${prefix}gold-balloon 
☍ ${prefix}steel 
☍ ${prefix}gloss 
☍ ${prefix}denim 
☍ ${prefix}decorate 
☍ ${prefix}decorate-purple 
☍ ${prefix}peridot 
☍ ${prefix}rock 
☍ ${prefix}yellow-glass 
☍ ${prefix}purple-glass 
☍ ${prefix}orange-glass 
☍ ${prefix}green-glass 
☍ ${prefix}cyan-glass 
☍ ${prefix}blue-glass 
☍ ${prefix}red-glass 
☍ ${prefix}purple-shiny-glass 
☍ ${prefix}captain-as2 
☍ ${prefix}robot 
☍ ${prefix}equalizer 
☍ ${prefix}toxic 
☍ ${prefix}pink-sparkling 
☍ ${prefix}blue-sparkling 
☍ ${prefix}green-sparkling 
☍ ${prefix}purple-sparkling 
☍ ${prefix}gold-sparkling 
☍ ${prefix}red-sparkling 
☍ ${prefix}cyan-sparkling 
☍ ${prefix}decorative 
☍ ${prefix}chocolate 
☍ ${prefix}strawberry 
☍ ${prefix}koifish 
☍ ${prefix}bread 
☍ ${prefix}matrix 
☍ ${prefix}blood2 
☍ ${prefix}neonligth2 
☍ ${prefix}thunder2 
☍ ${prefix}3dbox 
☍ ${prefix}neon2 
☍ ${prefix}road-warning 
☍ ${prefix}bokeh 
☍ ${prefix}green-neon 
☍ ${prefix}advanced 
☍ ${prefix}dropwater 
☍ ${prefix}wall 
☍ ${prefix}chrismast 
☍ ${prefix}honey2 
☍ ${prefix}drug 
☍ ${prefix}marble 
☍ ${prefix}marble2 
☍ ${prefix}ice 
☍ ${prefix}juice 
☍ ${prefix}rusty 
☍ ${prefix}abstra 
☍ ${prefix}biscuit 
☍ ${prefix}wood 
☍ ${prefix}scifi 
☍ ${prefix}metal-rainbow 
☍ ${prefix}metal-rose-gold 
☍ ${prefix}purple-gem 
☍ ${prefix}shiny  
☍ ${prefix}yellow-jewelry 
☍ ${prefix}silver-jewelry 
☍ ${prefix}red-jewelry 
☍ ${prefix}purple-jewelry 
☍ ${prefix}orange-jewelry 
☍ ${prefix}green-jewelry 
☍ ${prefix}cyan-jewelry 
☍ ${prefix}blue-jewelry 
☍ ${prefix}hot-metal 
☍ ${prefix}golden 
☍ ${prefix}blue-glitter 
☍ ${prefix}purple-glitter 
☍ ${prefix}pink-glitter 
☍ ${prefix}green-glitter 
☍ ${prefix}silver-glitter 
☍ ${prefix}gold-glitter 
☍ ${prefix}bronze-glitter 
☍ ${prefix}eroded-metal 
☍ ${prefix}carbon 
☍ ${prefix}candy 
☍ ${prefix}blue-metal 
☍ ${prefix}blue-gem 
☍ ${prefix}3dchrome 
☍ ${prefix}black-metal 
☍ ${prefix}metal-gold 
`
}


exports.other = (prefix) =>{
return`乂 * 𝗢 𝗧 𝗛 𝗘 𝗥 𝗦 *
☍ ${prefix}ttp 
☍ ${prefix}attp 
☍ ${prefix}afk
☍ ${prefix}translate
☍ ${prefix}tts
☍ ${prefix}kalkulator
☍ ${prefix}smeme 
☍ ${prefix}smeme2 
☍ ${prefix}memegen 
`
}
exports.game = (prefix) =>{
return`乂 * 𝗚 𝗔 𝗠 𝗘  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}tembak
☍ ${prefix}tolak
☍ ${prefix}terima
☍ ${prefix}putusin
☍ ${prefix}ikhlasin
☍ ${prefix}cekpacar
☍ ${prefix}kuismath
☍ ${prefix}tebakgambar
☍ ${prefix}tebakkata
☍ ${prefix}tebakbendera
☍ ${prefix}tebakkalimat
☍ ${prefix}tebaksiapa
☍ ${prefix}tebakkabupaten
☍ ${prefix}tebakkimia
☍ ${prefix}tebaklirik
☍ ${prefix}tebaktebakan
☍ ${prefix}tekateki
☍ ${prefix}susunkata
☍ ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`乂 * 𝗔 𝗦 𝗨 𝗣 𝗔 𝗡  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}chika
☍ ${prefix}delvira
☍ ${prefix}ayu
☍ ${prefix}bunga
☍ ${prefix}aura
☍ ${prefix}nisa
☍ ${prefix}ziva
☍ ${prefix}yana
☍ ${prefix}viona
☍ ${prefix}syania
☍ ${prefix}riri
☍ ${prefix}syifa
☍ ${prefix}mama_gina
☍ ${prefix}alcakenya
☍ ${prefix}mangayutri
☍ ${prefix}rikagusriani
☍ ${prefix}asupan
☍ ${prefix}bocil
☍ ${prefix}geayubi
☍ ${prefix}santuy
☍ ${prefix}ukhty
☍ ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`乂 * 𝗥 𝗔 𝗡 𝗗 𝗢 𝗠  𝗖 𝗘 𝗪 𝗘 *
☍ ${prefix}china 
☍ ${prefix}indonesia 
☍ ${prefix}malaysia 
☍ ${prefix}thailand 
☍ ${prefix}korea 
☍ ${prefix}japan 
☍ ${prefix}vietnam 
☍ ${prefix}jenni 
☍ ${prefix}jiso 
☍ ${prefix}lisa  
☍ ${prefix}rose
`
}

exports.tqto = () =>{
	return`乂 「 TqTo 」 
│○ My God
│○ My Parents
│○ Fatih A.
│○ Ferdiz
│○ DikaArdnt
│○ Mhankbarbar
│○ Nurutomo
│○ ZeeoneOfc
│○ Penyedia Module
╰❒ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`乂 * 𝗣 𝗥 𝗜 𝗠 𝗕 𝗢 𝗡 *
☍ ${prefix}nomorhoki
☍ ${prefix}artimimpi
☍ ${prefix}artinama
☍ ${prefix}ramaljodoh
☍ ${prefix}ramaljodohbali
☍ ${prefix}suamiistri
☍ ${prefix}ramalcinta
☍ ${prefix}cocoknama
☍ ${prefix}pasangan
☍ ${prefix}jadiannikah
☍ ${prefix}sifatusaha
☍ ${prefix}rezeki
☍ ${prefix}pekerjaan
☍ ${prefix}nasib
☍ ${prefix}penyakit
☍ ${prefix}tarot
☍ ${prefix}fengshui
☍ ${prefix}haribaik
☍ ${prefix}harisangar
☍ ${prefix}harisial
☍ ${prefix}nagahari
☍ ${prefix}arahrezeki
☍ ${prefix}peruntungan
☍ ${prefix}weton
☍ ${prefix}karakter
☍ ${prefix}keberuntungan
☍ ${prefix}memancing
☍ ${prefix}masasubur
☍ ${prefix}zodiak 
☍ ${prefix}shio
`
}

exports.stcmenu = (prefix) =>{
       return`乂 * 𝗧 𝗘 𝗟 𝗘 𝗚 𝗥 𝗔 𝗠  𝗦 𝗧 𝗜 𝗖 𝗞 𝗘 𝗥 *
☍ ${prefix}awoawo
☍ ${prefix}benedict
☍ ${prefix}chat
☍ ${prefix}dbfly
☍ ${prefix}dino_kuning
☍ ${prefix}doge
☍ ${prefix}gojosatoru
☍ ${prefix}hope_boy
☍ ${prefix}jisoo
☍ ${prefix}kr_robot
☍ ${prefix}kucing
☍ ${prefix}lonte
☍ ${prefix}manusia_lidi
☍ ${prefix}menjamet
☍ ${prefix}meow
☍ ${prefix}nicholas
☍ ${prefix}patrick
☍ ${prefix}popoci
☍ ${prefix}sponsbob
☍ ${prefix}kawan_sponsbob
☍ ${prefix}tyni
`}

exports.ephotomenu = (prefix) =>{
	return`乂 * 𝗘 𝗣 𝗛 𝗢 𝗧 𝗢 𝟯 𝟲 𝟬  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}1917text
☍ ${prefix}angelwing
☍ ${prefix}announofwin
☍ ${prefix}birthdaycake
☍ ${prefix}capercut
☍ ${prefix}cardhalloween
☍ ${prefix}cartoonstyle
☍ ${prefix}christmascard 
☍ ${prefix}christmasseason
☍ ${prefix}covergamepubg
☍ ${prefix}covergraffiti
☍ ${prefix}dragonfire
☍ ${prefix}embroider
☍ ${prefix}fabrictext
☍ ${prefix}facebookgold
☍ ${prefix}facebooksilver
☍ ${prefix}funnyanimations
☍ ${prefix}funnyhalloween
☍ ${prefix}galaxybat
☍ ${prefix}galaxywallpaper
☍ ${prefix}generalexam 
☍ ${prefix}glowingtext
☍ ${prefix}graffiti3d
☍ ${prefix}graffititext
☍ ${prefix}graffititext2
☍ ${prefix}graffititext3
☍ ${prefix}greetingcardvideo 
☍ ${prefix}halloweenbats
☍ ${prefix}heartcup
☍ ${prefix}heartflashlight
☍ ${prefix}horrorletter
☍ ${prefix}icetext
☍ ${prefix}instagramgold
☍ ${prefix}instagramsilver
☍ ${prefix}lightningpubg
☍ ${prefix}lovecard
☍ ${prefix}lovelycute
☍ ${prefix}masteryavatar
☍ ${prefix}merrycard
☍ ${prefix}messagecoffee
☍ ${prefix}metalstar
☍ ${prefix}milkcake
☍ ${prefix}moderngold
☍ ${prefix}moderngold2
☍ ${prefix}moderngold3
☍ ${prefix}moderngoldsilver
☍ ${prefix}multicolor
☍ ${prefix}nameonheart
☍ ${prefix}noeltext
☍ ${prefix}projectyasuo
☍ ${prefix}pubgbirthday
☍ ${prefix}pubgglicthvideo 
☍ ${prefix}pubgmascotlogo
☍ ${prefix}puppycute
☍ ${prefix}realembroidery
☍ ${prefix}retrotext
☍ ${prefix}rosebirthday
☍ ${prefix}shirtclub
☍ ${prefix}snowontext
☍ ${prefix}starsnight
☍ ${prefix}summerbeach
☍ ${prefix}sunglightshadow
☍ ${prefix}textcakes
☍ ${prefix}texthalloween
☍ ${prefix}textonglass
☍ ${prefix}textsky
☍ ${prefix}thundertext
☍ ${prefix}twittergold
☍ ${prefix}twittersilver
☍ ${prefix}viettel
☍ ${prefix}vintagetelevision
☍ ${prefix}watercolor2
☍ ${prefix}womansday
☍ ${prefix}writeblood
☍ ${prefix}writegalaxy
☍ ${prefix}writehorror
☍ ${prefix}youtubegold
☍ ${prefix}youtubesilver
☍ ${prefix}zombie3d`
}

exports.logomenu = (prefix) =>{
	return`乂 * 𝗟 𝗢 𝗚 𝗢  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}anonymous2
☍ ${prefix}astronotspace
☍ ${prefix}avatar3q360
☍ ${prefix}avatarff
☍ ${prefix}avatarleagueofking
☍ ${prefix}avatarlolbyname
☍ ${prefix}avataroverwatch
☍ ${prefix}bannerofaov
☍ ${prefix}bannerofaov2
☍ ${prefix}bannerofapex
☍ ${prefix}banneroffreefire
☍ ${prefix}banneroflol
☍ ${prefix}bannerofoverwatch
☍ ${prefix}bannerofpubg
☍ ${prefix}bannerytcsgo
☍ ${prefix}beautifulgalaxylol
☍ ${prefix}beautifulshimmering
☍ ${prefix}blueneon
☍ ${prefix}circlemarcotteam
☍ ${prefix}colorfulpubg
☍ ${prefix}companylogo
☍ ${prefix}companylogo2
☍ ${prefix}coverbannerlol
☍ ${prefix}coverdota2
☍ ${prefix}coverfblol
☍ ${prefix}coverfreefirefb
☍ ${prefix}coverleagueofking
☍ ${prefix}coverloknew
☍ ${prefix}coverofwarface
☍ ${prefix}coveronepiecefb
☍ ${prefix}crossfirecover
☍ ${prefix}crossfirestyle
☍ ${prefix}csgocover
☍ ${prefix}cutegirlgamer
☍ ${prefix}cyberhunterfb
☍ ${prefix}dragonballfb
☍ ${prefix}effect3donbeach
☍ ${prefix}elegantrotation
☍ ${prefix}fbgamepubgcover
☍ ${prefix}footballteam
☍ ${prefix}gaminglogo4fvs
☍ ${prefix}gamingmascot
☍ ${prefix}gradientlogo
☍ ${prefix}gunlogogaming
☍ ${prefix}introvideomaker
☍ ${prefix}letterlogos 
☍ ${prefix}logoaccording 
☍ ${prefix}logogamingassasin 
☍ ${prefix}lolcoverbyname 
☍ ${prefix}lolpentakill 
☍ ${prefix}lolwallpaper 
☍ ${prefix}maketeamlogo 
☍ ${prefix}mascotstyle 
☍ ${prefix}metalmascot 
☍ ${prefix}newlolavatar 
☍ ${prefix}overwatchcover 
☍ ${prefix}overwatchwallpaper 
☍ ${prefix}pencilsketch 
☍ ${prefix}pubgcutelogo 
☍ ${prefix}pubglogomaker 
☍ ${prefix}rovwallpaper 
☍ ${prefix}rovwallpaperhd 
☍ ${prefix}teamlogo 
☍ ${prefix}wallpaperaov 
☍ ${prefix}wallpaperml 
`
}

exports.islammenu = (prefix) =>{
	return`乂 * 𝗜 𝗦 𝗟 𝗔 𝗠 𝗜 𝗖  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}asmaulhusna
☍ ${prefix}kisahnabi
☍ ${prefix}jadwalshalat
☍ ${prefix}randomquran
☍ ${prefix}randomquran2
☍ ${prefix}listsurah
☍ ${prefix}tafsirsurah
☍ ${prefix}alquranaudio 
`
}
exports.anonchat = (prefix) =>{
	return`乂 * 𝗔 𝗡 𝗢 𝗡 𝗬 𝗠 𝗢 𝗨 𝗦 *
☍ ${prefix}menfess
☍ ${prefix}confess
☍ ${prefix}balasmenfess
☍ ${prefix}tolakmenfess
☍ ${prefix}stopmenfess
☍ ${prefix}anonymous 
☍ ${prefix}start
☍ ${prefix}skip 
☍ ${prefix}stop
`
}

exports.storemenu = (prefix) =>{
	return`乂 * 𝗦 𝗧 𝗢 𝗥 𝗘  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}list
☍ ${prefix}addlist
☍ ${prefix}dellist 
☍ ${prefix}update 
☍ ${prefix}store
☍ ${prefix}kali
☍ ${prefix}bagi
☍ ${prefix}tambah
☍ ${prefix}kurang
☍ ${prefix}kalkulator
☍ ${prefix}setproses
☍ ${prefix}updateproses
☍ ${prefix}cekproses
☍ ${prefix}delproses
☍ ${prefix}setdone
☍ ${prefix}updatedone
☍ ${prefix}cekdone
☍ ${prefix}deldone
☍ ${prefix}pay
☍ ${prefix}setcaptionpay
☍ ${prefix}setpaysewa
☍ proses
☍ done
`
}

exports.voiceChange = (prefix) =>{
	return`乂 * 𝗩 𝗢 𝗜 𝗖 𝗘  𝗖 𝗛 𝗔 𝗡 𝗚 𝗘  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}bass
☍ ${prefix}blown
☍ ${prefix}deep
☍ ${prefix}earrape
☍ ${prefix}fast
☍ ${prefix}fat
☍ ${prefix}nightcore
☍ ${prefix}reverse
☍ ${prefix}robot
☍ ${prefix}slow
☍ ${prefix}smooth
☍ ${prefix}tupai
`
}
exports.storagemenu = (prefix) =>{
	return`乂 * 𝗦 𝗧 𝗢 𝗥 𝗔 𝗚 𝗘  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}addvn
☍ ${prefix}listvn
☍ ${prefix}delvn
☍ ${prefix}addbadword
☍ ${prefix}listbadword
☍ ${prefix}delbadword
☍ ${prefix}adddocument
☍ ${prefix}listdocument
☍ ${prefix}deldocument
☍ ${prefix}addtext
☍ ${prefix}listtext
☍ ${prefix}deltext
☍ ${prefix}addaudio
☍ ${prefix}listaudio
☍ ${prefix}delaudio
☍ ${prefix}addimage
☍ ${prefix}listimage
☍ ${prefix}delimage
☍ ${prefix}addvideo
☍ ${prefix}listvideo
☍ ${prefix}delvideo
☍ ${prefix}addstik
☍ ${prefix}delstik
☍ ${prefix}liststik
`
}

exports.rpgmenu = (prefix) =>{
	return`乂 * 𝗥 𝗣 𝗚  𝗚 𝗔 𝗠 𝗘 𝗦 *
☍ ${prefix}adventure
☍ ${prefix}weekly
☍ ${prefix}use
☍ ${prefix}transfer
☍ ${prefix}slot
☍ ${prefix}shop
☍ ${prefix}profile
☍ ${prefix}pasar
☍ ${prefix}ojek
☍ ${prefix}open
☍ ${prefix}nguli
☍ ${prefix}narik
☍ ${prefix}nabung
☍ ${prefix}monthly
☍ ${prefix}mining
☍ ${prefix}merampok
☍ ${prefix}mancing
☍ ${prefix}kolam
☍ ${prefix}koboy
☍ ${prefix}kerja
☍ ${prefix}kandang
☍ ${prefix}levelup
☍ ${prefix}judi
☍ ${prefix}inventory
☍ ${prefix}hourly
☍ ${prefix}fishop
☍ ${prefix}feed
☍ ${prefix}duel
☍ ${prefix}daily
☍ ${prefix}craft
☍ ${prefix}cooldown
☍ ${prefix}cook
☍ ${prefix}collect
☍ ${prefix}chop
☍ ${prefix}casino
☍ ${prefix}buy
☍ ${prefix}bank 
☍ ${prefix}bansos
☍ ${prefix}berdagang
☍ ${prefix}berkebon
☍ ${prefix}build
`
}

exports.photooxy = (prefix)=>{
	return`乂 * 𝗣 𝗛 𝗢 𝗧 𝗢 𝗢 𝗫 𝗬  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}battlegrounds-logo
☍ ${prefix}battlefield4
☍ ${prefix}text-8bit
☍ ${prefix}typography-flower 
☍ ${prefix}under-flower 
☍ ${prefix}bevel-text 
☍ ${prefix}silk-text 
☍ ${prefix}sweet-andy 
☍ ${prefix}smoke-typography 
☍ ${prefix}carvedwood 
☍ ${prefix}scary-cemetery 
☍ ${prefix}royallook 
☍ ${prefix}coffeecup2 
☍ ${prefix}illuminated 
☍ ${prefix}harry-potter2
☍ ${prefix}birthday-cake 
☍ ${prefix}embroidery
☍ ${prefix}flaming 
☍ ${prefix}furtext 
☍ ${prefix}nightsky 
☍ ${prefix}glow-rainbow 
☍ ${prefix}gradient-avatar 
☍ ${prefix}white-cube
☍ ${prefix}graffiti-cover 
☍ ${prefix}rainbow-shine 
☍ ${prefix}smoky-neon 
☍ ${prefix}quotes-underfall
☍ ${prefix}vector-nature 
☍ ${prefix}yellow-rose 
☍ ${prefix}love-text 
☍ ${prefix}underwater-ocean 
☍ ${prefix}nature-text 
☍ ${prefix}wolf-metal 
☍ ${prefix}summer-text 
☍ ${prefix}wooden-board
☍ ${prefix}quote-wood 
☍ ${prefix}love-text 
☍ ${prefix}quotes-undergrass 
☍ ${prefix}naruto-banner 
☍ ${prefix}love-message 
☍ ${prefix}textoncup2 
☍ ${prefix}burn-paper 
☍ ${prefix}smoke 
☍ ${prefix}romantic-messages 
☍ ${prefix}shadow-sky 
☍ ${prefix}text-cup 
☍ ${prefix}coffecup
`
}
exports.soundmenu = (prefix) =>{
return`乂 * 𝗦 𝗢 𝗨 𝗡 𝗗  𝗠 𝗘 𝗡 𝗨 *
☍ ${prefix}sound1
☍ ${prefix}sound2
☍ ${prefix}sound3
☍ ${prefix}sound4
☍ ${prefix}sound5
☍ ${prefix}sound6
☍ ${prefix}sound7
☍ ${prefix}sound8
☍ ${prefix}sound9
☍ ${prefix}sound10
☍ ${prefix}sound11
☍ ${prefix}sound12
☍ ${prefix}sound13
☍ ${prefix}sound14
☍ ${prefix}sound15
☍ ${prefix}sound16
☍ ${prefix}sound17
☍ ${prefix}sound18 
☍ ${prefix}sound19
☍ ${prefix}sound20
☍ ${prefix}sound21
☍ ${prefix}sound22
☍ ${prefix}sound23
☍ ${prefix}sound24
☍ ${prefix}sound25
☍ ${prefix}sound26
☍ ${prefix}sound27
☍ ${prefix}sound28
☍ ${prefix}sound29
☍ ${prefix}sound30
☍ ${prefix}sound31
☍ ${prefix}sound32
☍ ${prefix}sound33
☍ ${prefix}sound34
☍ ${prefix}sound35
☍ ${prefix}sound36
☍ ${prefix}sound37
☍ ${prefix}sound38
☍ ${prefix}sound39
☍ ${prefix}sound40
☍ ${prefix}sound41
☍ ${prefix}sound42
☍ ${prefix}sound43
☍ ${prefix}sound44
☍ ${prefix}sound45
☍ ${prefix}sound46
☍ ${prefix}sound47
☍ ${prefix}sound48
☍ ${prefix}sound49
☍ ${prefix}sound50
☍ ${prefix}sound51
☍ ${prefix}sound52
☍ ${prefix}sound53
☍ ${prefix}sound54
☍ ${prefix}sound55
☍ ${prefix}sound56
☍ ${prefix}sound57
☍ ${prefix}sound58
☍ ${prefix}sound59
☍ ${prefix}sound60
☍ ${prefix}sound61
☍ ${prefix}sound62
☍ ${prefix}sound63
☍ ${prefix}sound64
☍ ${prefix}sound65
☍ ${prefix}sound66
☍ ${prefix}sound67
☍ ${prefix}sound68
☍ ${prefix}sound69
☍ ${prefix}sound70
`
}


☍
