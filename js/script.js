/* =========================================================================
   NUSATRAVEL - Premium Travel Agency JavaScript (Red & White Theme)
   ========================================================================= */

const travelData = [
    {
        id: 1,
        region: 'indonesia',
        title: 'Jakarta Bandung',
        price: 2480,
        duration: '4 Hari 3 Malam',
        dates: 'Rujuk Tarikh Pelepasan di Bawah',
        desc: 'Jelajah membeli-belah di Bandung dan kesibukan kota Jakarta.',
        image: 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        highlights: ['Tangkuban Perahu', 'Kawah Putih', 'Pasar Baru', 'Jalan Malioboro'],
        detailedDates: {
            premier: ['26 MAR - 29 MAR', '30 MAY - 02 JUN', '01 JUN - 04 JUN', '30 AUG - 02 SEP', '01 SEP - 04 SEP', '06 DIS - 09 DIS', '11 DIS - 14 DIS', '18 DIS - 21 DIS', '26 DIS - 29 DIS'],
            regular: ['05 FEB - 08 FEB', '13 FEB - 16 FEB', '02 APR - 05 APR', '17 APR - 20 APR', '01 MAY - 04 MAY', '15 MAY - 18 MAY', '19 JUN - 22 JUN', '17 JUL - 20 JUL', '01 AUG - 04 AUG', '22 AUG - 25 AUG', '16 SEP - 19 SEP', '26 SEP - 29 SEP', '16 OCT - 19 OCT', '06 NOV - 09 NOV'],
            school: ['05 JUN - 08 JUN 2026', '28 AUG - 31 AUG 2026', '20 SEP - 23 SEP 2026', '18 DIS - 21 DIS 2026']
        },
        fullItinerary: [
            { day: 1, title: 'KUALA LUMPUR – JAKARTA – BANDUNG (MOB/L,D)', desc: 'Berkumpul 3 jam sebelum penerbangan di KLIA, urusan daftar masuk dan terbang ke Soekarno Hatta Jakarta (penerbangan mengambil masa 2 jam). Tiba di Jakarta, urusan bagasi & pemeriksaan imigresen seterusnya menuju ke Bandung dengan menaiki Bullet Train. Makan tengahari di restoran tempatan. Seterusnya Singgah ke Masjid Al Jabar yang terkenal dengan keunikan seni Bina. Peserta dibawa ke Pasar Baru untuk sesi shopping. Makan malam & berjalan di sekitar Braga Street. Check in hotel di Bandung.' },
            { day: 2, title: 'BANDUNG TOUR (B,L,D)', desc: 'Selepas sarapan pagi, peserta akan dibawa ke Gunung Kawah Putih, merupakan danau yang terbentuk kerana Letusan Gunung Patuha. Peserta diberi masa bebas bergambar. Makan tengahari. Seterusnya, peserta dibawa ke Ranca Upas yang terkenal kerana pemandangan yang memukau, Peserta dapat bergambar dengan Rusa. Selepas Itu, membeli belah di Toko 3. Makan malam dan Pulang ke hotel. Makan malam dan bermalam di Bandung.' },
            { day: 3, title: 'BANDUNG TOUR – JAKARTA (B,L,D)', desc: 'Sarapan pagi di hotel, dimulakan dengan acara berbelanja di Kartika Sari yang merupakan manisan terkenal di Bandung. Selepas itu, meneruskan Tour ke Maribaya Lodge iaitu tempat pelancongan yang terkenal dengan pemandangan hutan pinus, peserta dapat bergambar dengan berbagai spot foto yang cantik. Makan tengahari. Peserta dibawa ke Orchid Forest yang terletak dalam hutan pinus, dan bertolak ke Jakarta. Makan malam dan check in hotel di Jakarta.' },
            { day: 4, title: 'JAKARTA - KUALA LUMPUR (B/L/MOB)', desc: 'Selepas sarapan pagi di hotel, Photostop di Monas dan Masjid Istiqlal. Peserta diberi masa bebas untuk membeli-belah di Thamrin City dan PIK by the sea Pantai Aloha sebelum bertolak ke lapangan terbang untuk penerbangan pulang ke Malaysia dengan membawa seribu kemanisan di Bumi Indonesia.' }
        ],
        includes: ['Tiket Penerbangan Pergi Balik', 'Tiket Bullet Train - One Way', 'Makan minum sesuai aturcara', 'Pengangkutan sepanjang program', '3 malam penginapan', 'Pemandu pelancongan', 'Bayaran masuk tempat lawatan', 'Air mineral dalam bas', 'Bagasi 20KG', 'Meal Dalam Flight'],
        excludes: ['Perbelanjaan Peribadi', 'Insuran Peribadi', 'Tipping Guide RM50']
    },
    {
        id: 12,
        region: 'china',
        title: 'Wilayah Yunnan',
        price: 4490,
        duration: '7 Hari 5 Malam',
        dates: 'Rujuk Tarikh Pelepasan di Bawah',
        desc: 'Jelajah Wilayah Yunnan Attraction termasuk Kunming, Dali, dan Lijiang. Saksikan persembahan kebudayaan dan alam semula jadi memukau.',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        highlights: ['Jade Dragon Snow Mountain', 'Blue Moon Valley', 'Stone Forest', 'Dali Foreigner Street', 'Impression Of Lijiang'],
        detailedDates: {
            premier: ['25 MAR', '28 MEI', '29 MEI', '30 MEI', '31 MEI', '01 JUN', '28 AUG', '29 AUG', '30 AUG', '31 AUG', '04 DEC', '05 DEC', '10 DEC', '11 DEC', '17 DEC', '18 DEC', '19 DEC', '23 DEC', '24 DEC'],
            regular: ['07 FEB (Winter)', '02 APR (Spring)', '09 APR', '16 APR', '17 APR', '22 APR', '23 APR', '07 MEI', '08 MEI', '14 MEI', '15 MEI', '10 JUN (Summer)', '16 JUN', '03 JUL', '17 JUL', '06 AUG', '13 AUG', '22 AUG', '16 SEP', '24 SEP', '09 OCT (Autumn)', '16 OCT', '22 OCT', '23 OCT', '06 NOV', '07 NOV', '19 NOV', '20 NOV'],
            school: ['Cuti 1: 19 MAR - 29 MAR 2026', 'Cuti 2: 23 MAY - 07 JUN 2026', 'Cuti 3: 29 AUG - 06 SEP 2026', 'Cuti 4: 05 DIS - 31 DIS 2026']
        },
        fullItinerary: [
            { day: 1, title: 'KUALA LUMPUR – KUNMING (MOB)', desc: 'Berkumpul di Lapangan Terbang untuk urusan daftar masuk dan taklimat ringkas sebelum berlepas ke Kunming. Tiba di Lapangan Terbang Antarabangsa Kunming. Peserta di jemput oleh wakil kami disana dan dibawa terus ke hotel untuk berehat.' },
            { day: 2, title: 'KUNMING - WEISHAN - DALI (B/L/D)', desc: 'Selepas sarapan pagi dan daftar keluar hotel, peserta bergerak menuju ke stesen keretapi laju untuk meneruskan perjalanan ke Dali. Kemudian makan tengahari di restoran tempatan dan ke Weishan Mosque. Seterusnya singgah melawat dan bergambar di Dali Erhai Lake Ecology Landscape Corridor yang merupakan sebuah tasik semula jadi dengan pemandangan yang sangat indah. Makan malam dan berehat di hotel.' },
            { day: 3, title: 'DALI - LIJIANG (B/L/D)', desc: 'Selepas sarapan pagi, peserta dibawa ke Dali Lixiangbang, Mini Dali Santorini untuk bergambar, kawasan yang diinspirasikan oleh Santorini, Greece. Terletak di kawasan Dali, bandar yang terkenal dengan seni bina klasik, tasik indah dan warisan budaya etnik Bai. Lixiangbang ini bagaikan satu perkampungan ala Eropah. Makan tengah hari dan singgah di Nanmen Mosque, Dali Ancient City-Foreigners Street. Bergerak ke Lijiang untuk makan malam dan check in hotel.' },
            { day: 4, title: 'LIJIANG (B/L/D)', desc: 'Selepas sarapan pagi, peserta dibawa ke Jade Dragon Snow Mountain (termasuk kereta kabel). Salah satu tarikan alam semula jadi yang terkenal di Yunnan, China — terletak kira-kira 25 km dari bandar purba Lijiang. Gunung ini sangat terkenal kerana landskapnya yang dramatik dan keindahan semula jadi yang menakjubkan, menjadikannya lokasi wajib untuk pengunjung yang ke Yunnan. Seterusnya peserta akan dibawa untuk menyaksikan persembahan tarian secara langsung Impression of Lijiang. Makan tengah hari. Berkunjung ke White Water River dan Blue Moon Valley. Lawatan diteruskan ke Lijiang Mosque. Makan malam dan berehat di hotel.' },
            { day: 5, title: 'LIJIANG – KUNMING (B/L/D)', desc: 'Selepas sarapan pagi dan daftar keluar hotel. Lawatan ke Black Dragon Pool yang merupakan sumber air dari Lijiang Old town, air nya yang jernih seperti jed. Makan tengahari dan menaiki keretapi ke Kunming. Singgah di Shuncheng Mosque yang merupakan masjid pertama dibina pada awal 1425 dan juga ibu pejabat Persatuan Islam di Wilayah Yunnan. Seterusnya ke Green Lake Park untuk bergambar. Makan malam dan bermalam di hotel.' },
            { day: 6, title: 'KUNMING – KUALA LUMPUR (B/L/D)', desc: 'Selepas sarapan pagi di hotel dan melawat Naigu Stone Forest. Dikenali sejak Dinasti Ming (1368-1644 A.D.) sebagai \'Keajaiban Pertama Dunia\' berada di daerah Lunan Yi Nationality Autonomous County. Shilin adalah lambang pelancongan Yunnan. Ia meliputi kawasan seluas 400 kilometer persegi (96,000 ekar) termasuk hutan batu besar dan batu kecil, serta banyak tempat indah yang lain Selepas itu, peserta dibawa membeli belah di Nanping Pedestrian Street. Kemudian photostop di Kunming Old Street. Makan malam dan bertolak ke Lapangan Terbang untuk penerbangan pulang ke Kuala Lumpur.' },
            { day: 7, title: 'KUALA LUMPUR (MOB)', desc: 'Tiba di KLIA dengan sejuta kenangan indah di Wilayah Yunnan.' }
        ],
        includes: ['Tiket Penerbangan Pergi Balik', 'Tiket kereta api 2x', 'Penginapan 5 malam', 'Makan HALAL sesuai aturcara', 'Pengangkutan berhawa dingin', 'Pemandu pelancong yang berpengalaman', 'Tour Escort yang Kacak dari Malaysia', 'Bayaran masuk tempat lawatan'],
        excludes: ['Insurans Peribadi', 'Optional Tour', 'Tipping RM100 seorang']
    },
    {
        id: 2, region: 'indonesia', title: 'Jogja Solo', price: 2480, duration: '4 Hari 3 Malam', dates: 'Apr 2026 - Sep 2026', desc: 'Hayati budaya dan sejarah purba di tengah-tengah kepulauan Jawa.', image: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', highlights: ['Candi Borobudur', 'Jalan Malioboro', 'Keraton Yogyakarta', 'Gunung Merapi Jeep Tour'],
        detailedDates: { premier: ['APR 2026 - SEP 2026 (Hubungi Untuk Tarikh Tepat)'] },
        fullItinerary: [
            { day: 1, title: 'KETIBAAN DI JOGJAKARTA', desc: 'Sesi ramah mesra dan check-in hotel. Aktiviti bebas di sekitar jalan berhampiran.' },
            { day: 2, title: 'LAWATAN SEJARAH', desc: 'Melawat Candi Borobudur, Keraton Yogyakarta dan menikmati sejarah purba Jawa.' },
            { day: 3, title: 'AKTIVITI HARIAN', desc: 'Gunung Merapi Jeep Tour yang mencabar, disusuli membeli belah di Jalan Malioboro.' },
            { day: 4, title: 'JOGJAKARTA - KUALA LUMPUR', desc: 'Persiapan pulang dan bergerak ke lapangan terbang untuk penerbangan.' }
        ],
        includes: ['Tiket Penerbangan Pergi Balik (bergantung tarikh)', 'Penginapan 3 malam', 'Pengangkutan berhawa dingin', 'Makan Minum', 'Bayaran masuk tempat lawatan', 'Tourist Guide Tempatan'],
        excludes: ['Insuran Peribadi', 'Tipping RM50', 'Perbelanjaan Peribadi']
    },
    {
        id: 3, region: 'indonesia', title: 'Surabaya Bromo', price: 2480, duration: '4 Hari 3 Malam', dates: 'Mei 2026 - Dis 2026', desc: 'Pengembaraan alam semula jadi mengagumi matahari terbit di Gunung Bromo.', image: 'https://images.unsplash.com/photo-1624027492686-22441c9b60da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', highlights: ['Sunrise View Bromo', 'Kawah Bromo', 'Museum Angkut', 'Taman Safari'],
        detailedDates: { premier: ['MEI 2026 - DIS 2026 (Hubungi Untuk Tarikh Tepat)'] },
        fullItinerary: [
            { day: 1, title: 'KETIBAAN DI SURABAYA', desc: 'Tiba di Surabaya, bergerak terus ke kaki Gunung Bromo untuk check-in dan persediaan perjalanan awal pagi.' },
            { day: 2, title: 'BROMO SUNRISE TOUR', desc: 'Bertolak jam 3:00 pagi menaiki Jeep untuk melihat Sunrise Bromo. Lawatan Kawah Bromo dan Pasir Berbisik. Pulang rehat.' },
            { day: 3, title: 'TAMAN SAFARI & MUSEUM', desc: 'Melawat Taman Safari Indonesia dan meneroka keindahan klasik di Museum Angkut.' },
            { day: 4, title: 'SURABAYA - KUALA LUMPUR', desc: 'Membeli ole-ole tradisional Surabaya dan bertolak ke lapangan terbang.' }
        ],
        includes: ['Penginapan 3 malam', 'Pengangkutan berhawa dingin', 'Jeep Bromo 4WD', 'Makan Minum', 'Bayaran Taman Negara'],
        excludes: ['Sewaan Kuda di Bromo', 'Insuran Peribadi', 'Tipping RM50', 'Perbelanjaan Peribadi']
    },
    {
        id: 4, region: 'china', title: 'China 4 Wilayah', price: 3780, duration: '8 Hari 7 Malam', dates: 'Apr 2026 - Okt 2026', desc: 'Jelajah kepelbagaian dan kemajuan 4 wilayah utama di China.', image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', highlights: ['Great Wall', 'Forbidden City', 'Terracotta Warriors', 'Shanghai Bund'],
        detailedDates: { premier: ['APR 2026 - OKT 2026 (Hubungi Untuk Tarikh Tepat)'] },
        fullItinerary: [
            { day: 1, title: 'KUALA LUMPUR - BEIJING', desc: 'Ketibaan di Beijing dan daftar masuk hotel.' },
            { day: "2-7", title: 'BEIJING - XI AN - SHANGHAI', desc: 'Lawatan padat ke Great Wall, Kota Larangan, menaiki keretapi laju ke Xi An melihat Terracotta Warriors, dan berakhir di metropolis Shanghai untuk pemandangan Bund.' },
            { day: 8, title: 'SHANGHAI - KUALA LUMPUR', desc: 'Membeli belah terakhir dan pulang ke Malaysia.' }
        ],
        includes: ['Tiket Keretapi Domestik China', 'Penginapan 7 malam', 'Makan Minum Halal/Seafood', 'Tiket Masuk', 'Pemandu Pelancong'],
        excludes: ['Visa China', 'Insuran Peribadi', 'Tipping', 'Perbelanjaan Peribadi']
    },
    {
        id: 5, region: 'china', title: 'Avatar Zhangjiajie', price: 4580, duration: '7 Hari 6 Malam', dates: 'Apr - Ogos 2026', desc: 'Saksikan keajaiban alam seperti dalam filem Avatar di bumi nyata.', image: 'https://images.unsplash.com/photo-1522204555883-74b86866ad50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', highlights: ['National Forest Park', 'Tianmen Mountain', 'Glass Bridge', 'Bailong Elevator'],
        detailedDates: { regular: ['APR 2026 - OGOS 2026 (Hubungi Untuk Tarikh Tepat)'] },
        fullItinerary: [
            { day: 1, title: 'KETIBAAN DI ZHANGJIAJIE', desc: 'Selamat tiba di bandar ajaib Zhangjiajie, daftar masuk dan berehat.' },
            { day: "2-6", title: 'JELAJAH ZHANGJIAJIE', desc: 'Melawat National Forest Park (laluan pergunungan Avatar), menaiki Bailong Elevator, menyeberangi Glass Bridge yang mendebarkan, dan Tianmen Mountain dengan kereta kabel terpanjang.' },
            { day: 7, title: 'ZHANGJIAJIE - KUALA LUMPUR', desc: 'Perjalanan pulang ke tanah air membawa kenangan alam luar biasa.' }
        ],
        includes: ['Tiket Kereta Kabel/Lif', 'Penginapan 6 malam', 'Makan Minum Halal/Seafood', 'Tiket Masuk Taman Negara', 'Pemandu Pelancong'],
        excludes: ['Visa China', 'Insuran Peribadi', 'Tipping', 'Perbelanjaan Peribadi']
    },
    {
        id: 6, region: 'other-asia', title: 'Korea', price: 3699, duration: '6 Hari 5 Malam', dates: 'Apr / Okt 2026', desc: 'Eksplorasi keindahan K-Culture, istana bersejarah dan syurga membeli belah.', image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea45c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', highlights: ['Nami Island', 'Gyeongbokgung Palace', 'Myeongdong', 'Bukchon Hanok'],
        detailedDates: { premier: ['Musim Bunga (Spring) APR 2026', 'Musim Luruh (Autumn) OKT 2026'] },
        fullItinerary: [
            { day: 1, title: 'SEOUL KETIBAAN', desc: 'Ketibaan di lapangan terbang Incheon. Berpindah ke ibu kota Seoul.' },
            { day: "2-5", title: 'JAJAH SEOUL & NAMI ISLAND', desc: 'Berdress-up Hanbok di Istana Gyeongbokgung, lawatan pulau romantik Nami Island, menyelusuri sejarah di Bukchon Hanok dan pesta membeli-belah sakan di Myeongdong.' },
            { day: 6, title: 'SEOUL - KUALA LUMPUR', desc: 'Singgah di pusat cenderamata/kimchi dan berangkat pulang.' }
        ],
        includes: ['Penginapan 5 malam', 'Pengangkutan selesa', 'Makan Minum Halal/Seafood', 'Tiket Masuk', 'Pemandu Pelancong Berbahasa Melayu/Inggeris'],
        excludes: ['K-ETA', 'Insuran Peribadi', 'Tipping', 'Perbelanjaan Peribadi']
    },
    {
        id: 8, region: 'other-asia', title: 'Trans Vietnam', price: 2488, duration: '7 Hari 6 Malam', dates: 'Apr 2026 - Nov 2026', desc: 'Perjalanan merentasi sejarah padat dari Hanoi ke ketenangan Ha Long Bay.', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', highlights: ['Hanoi Old Quarter', 'Ha Long Bay Cruise', 'Sapa Valley'],
        detailedDates: { regular: ['APR 2026 - NOV 2026 (Hubungi Untuk Tarikh Tepat)'] },
        fullItinerary: [
            { day: 1, title: 'HANOI KETIBAAN', desc: 'Tiba di Hanoi. Menikmati suasana petang di sekitar Hanoi Old Quarter.' },
            { day: "2-6", title: 'HA LONG BAY & SAPA', desc: 'Bertolak ke Ha Long Bay untuk menikmati pemandangan laut berbatu kapur yang mistik menaiki Cruise. Kemudian bergerak pula ke Sapa Valley menikmati kecantikan lereng bukit menghijau dan kehidupan perkampungan.' },
            { day: 7, title: 'HANOI - KUALA LUMPUR', desc: 'Berlepas pulang ke Malaysia dengan pelbagai ole-ole dari Vietnam.' }
        ],
        includes: ['Penginapan 6 malam', 'Cruise/Boat di Ha Long Bay', 'Makan Minum Halal (disediakan)', 'Tiket Masuk', 'Pemandu Pelancong Tempatan'],
        excludes: ['Insuran Peribadi', 'Tipping', 'Perbelanjaan Peribadi']
    },
    {
        id: 9, region: 'europe', title: 'Istanbul Mono', price: 3999, duration: '6 Hari 5 Malam', dates: 'Sepanjang tahun', desc: 'Merungkai sejarah dua benua dalam satu kota yang penuh misteri dan moden.', image: 'https://images.unsplash.com/photo-1524230572899-a752b38b584c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', highlights: ['Hagia Sophia', 'Blue Mosque', 'Bosphorus Cruise', 'Grand Bazaar'],
        detailedDates: { regular: ['Sepanjang Tahun 2026 (Hubungi Untuk Tarikh Tepat)'] },
        fullItinerary: [
            { day: 1, title: 'ISTANBUL KETIBAAN', desc: 'Tiba di bumi Uthmaniyyah. Check-in hotel dan rehat ringkas.' },
            { day: "2-5", title: 'SEJARAH ISTANBUL', desc: 'Meneroka kegemilangan Islam di Hagia Sophia dan Blue Mosque. Belayar di antara benua Eropah dan Asia di Selat Bosphorus. Membeli-belah di Grand Bazaar dan Spice Market.' },
            { day: 6, title: 'ISTANBUL - KUALA LUMPUR', desc: 'Bertolak pulang dengan pemandangan dan kisah sejarah Turki.' }
        ],
        includes: ['Penerbangan Pergi Balik', 'Penginapan 5 malam di Istanbul', 'Pengangkutan selesa', 'Makan Minum', 'Tiket Bosphorus Cruise', 'Local Guide Profesional'],
        excludes: ['Insuran Peribadi', 'Tipping €30', 'Cukai Pelancong (Tourist Tax)', 'Perbelanjaan Peribadi']
    },
    {
        id: 10, region: 'europe', title: 'Balkan', price: 8790, duration: '12 Hari 11 Malam', dates: 'Mac - Nov 2026', desc: 'Kembara alam romantik merentas sempadan 5 negara Balkan yang penuh sejarah unik.', image: 'https://images.unsplash.com/photo-1555990203-b8d96e578297?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', highlights: ['Dubrovnik', 'Sarajevo', 'Plitvice Lakes', 'Kotor Bay'],
        detailedDates: { premier: ['MAC 2026 - NOV 2026 (Kekosongan Terhad)'] },
        fullItinerary: [
            { day: 1, title: 'KUALA LUMPUR - SARAJEVO', desc: 'Penerbangan panjang merentas Eropah Timur.' },
            { day: "2-11", title: 'JELAJAH 5 NEGARA BALKAN', desc: 'Kembara bermula. Merungkai keindahan Bosnia, Croatia (Dubrovnik The Pearl of Adriatic, Plitvice Lakes), Montenegro (Kotor Bay), Albania dan Macedonia Utara.' },
            { day: 12, title: 'BALKAN - KUALA LUMPUR', desc: 'Penerbangan pulang setelah 12 hari menjejak Balkan.' }
        ],
        includes: ['Penerbangan Pergi Balik KUL - Balkan', 'Penginapan 11 Malam di pelbagai negara', 'Transport Bas Premium', 'Makan Minum (Sarapan/Makan Malam Utama)', 'Tol merentas sempadan', 'Tiket Taman Negara Plitvice'],
        excludes: ['Insuran Peribadi', 'Makan tengah hari', 'Tipping Guide €60', 'Cukai Pelancong Hotel']
    },
    {
        id: 11, region: 'europe', title: 'New Zealand North & South', price: 13999, duration: '14 Hari 13 Malam', dates: 'Okt 2026 - Mac 2027', desc: 'Pengembaraan epik ke hujung dunia dikelilingi alam semula jadi luar biasa.', image: 'https://images.unsplash.com/photo-1469521669194-babbdf9ff9cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', highlights: ['Hobbiton', 'Rotorua', 'Milford Sound', 'Queenstown'],
        detailedDates: { premier: ['Musim Panas OKT 2026 - MAC 2027 (Kekosongan Terhad)'] },
        fullItinerary: [
            { day: 1, title: 'KUALA LUMPUR - AUCKLAND', desc: 'Berlepas ke Auckland, New Zealand.' },
            { day: "2-7", title: 'PULAU UTARA (NORTH ISLAND)', desc: 'Pengembaraan Lord of The Rings di Hobbiton, mengalami aktiviti Geothermal di Rotorua, dan Waitomo Glowworm Caves.' },
            { day: "8-13", title: 'PULAU SELATAN (SOUTH ISLAND)', desc: 'Penerbangan domestik ke Pulau Selatan (Christchurch). Menuju Queenstown untuk aktiviti ekstrem, belayar menakjubkan di Milford Sound dan melihat Mt. Cook.' },
            { day: 14, title: 'CHRISTCHURCH - KUALA LUMPUR', desc: 'Kepulangan ke tanah air dari negara kiwi.' }
        ],
        includes: ['Penerbangan Antarabangsa KUL-Auckland, CHC-KUL', 'Penerbangan Domestik', 'Penginapan Motel/Apartment berkongsi', 'Sewa MPV/Van', 'Tiket Lawatan Utama (Hobbiton/Milford)'],
        excludes: ['NZeTA (Visa)', 'Insuran Peribadi', 'Makan Minum (Konsep Cook-It-Yourself di Apartment)', 'Minyak Kenderaan (Kongsi bersama)', 'Aktiviti Pilihan Ekstrem']
    }
];

const packagesContainer = document.getElementById('packagesContainer');
const filterBtns = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sortPrices');
const modal = document.getElementById('packageModal');
const closeModal = document.querySelector('.close-modal');
const modalBody = document.querySelector('.modal-body');

const formatCurrency = (number) => {
    return new Intl.NumberFormat('ms-MY', { style: 'currency', currency: 'MYR', minimumFractionDigits: 0 }).format(number);
};

const waNumber = '60123456789';

// 1. Intersection Observer for Scroll Reveal Animations (Optimized for Mobile)
const revealOptions = {
    threshold: 0.1,
    rootMargin: "50px 0px 50px 0px" // Trigger slightly before it enters screen
};

const revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Animate only once to save mobile resources
        }
    });
}, revealOptions);

function observeReveals() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
}

// 2. Render Packages
function renderPackages(data) {
    if (!packagesContainer) return;
    packagesContainer.innerHTML = '';

    if (data.length === 0) {
        packagesContainer.innerHTML = '<p class="text-center font-bold" style="grid-column: 1/-1; font-size: 1.2rem;">Tiada pakej dijumpai untuk carian ini.</p>';
        return;
    }

    data.forEach((pkg, index) => {
        let regionLabel = pkg.region;
        if (pkg.region === 'other-asia') regionLabel = 'Asia';
        if (pkg.region === 'europe') regionLabel = 'Antarabangsa';
        regionLabel = regionLabel.charAt(0).toUpperCase() + regionLabel.slice(1);

        // Add dynamic delay for cascade effect based on index
        const delayClass = `delay-${(index % 4) + 1}`;

        const card = document.createElement('div');
        card.className = `pkg-card reveal fade-up ${delayClass}`;
        card.innerHTML = `
            <div class="pkg-img">
                <span class="pkg-region">${regionLabel}</span>
                <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
            </div>
            <div class="pkg-content">
                <h3 class="pkg-title">${pkg.title}</h3>
                <div class="pkg-price">${formatCurrency(pkg.price)} <span>/ pax</span></div>
                
                <div class="pkg-meta">
                    <i class="far fa-calendar-alt"></i> ${pkg.duration}
                </div>
                
                <p class="pkg-desc">${pkg.desc}</p>
                
                <div class="pkg-actions">
                    <button class="btn btn-outline-white" style="border-color: var(--border); color: var(--secondary);" onclick="openModal(${pkg.id})">Lihat Detail</button>
                    <a href="https://wa.me/${waNumber}?text=Hi%20NUSATRAVEL,%20ikhlaskan%20saya%20tempah%20pakej%20${encodeURIComponent(pkg.title)}" target="_blank" class="btn btn-whatsapp outline">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                </div>
            </div>
        `;
        packagesContainer.appendChild(card);
    });

    // Re-bind observer to newly added cards
    observeReveals();
}

// 3. Filtering and Sorting
let currentRegion = 'all';

function filterData() {
    let filtered = travelData;

    if (currentRegion !== 'all') {
        filtered = filtered.filter(pkg => pkg.region === currentRegion);
    }

    const sortVal = sortSelect.value;
    if (sortVal === 'low-to-high') {
        filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortVal === 'high-to-low') {
        filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    renderPackages(filtered);
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentRegion = e.target.getAttribute('data-filter');
        filterData();
    });
});

if (sortSelect) {
    sortSelect.addEventListener('change', filterData);
}

// 4. Modal Logic (with solid slide-up animation)
window.openModal = function (id) {
    const pkg = travelData.find(p => p.id === id);
    if (!pkg) return;

    const highlightsHTML = pkg.highlights.map(h => `<li style="display:flex; align-items:flex-start; margin-bottom:0.3rem;"><i class="fas fa-check text-red" style="margin-right:0.6rem; margin-top:0.3rem;"></i> <span>${h}</span></li>`).join('');

    // Dynamic Itinerary Generation
    let itineraryHTML = '';
    if (pkg.fullItinerary && pkg.fullItinerary.length > 0) {
        itineraryHTML = `
            <h3 class="text-red itinerary-title" style="font-size:1.6rem; margin-top:2.5rem; margin-bottom:1.5rem; text-transform:uppercase;"><i class="fas fa-map-marked-alt"></i> Itinerari Lengkap</h3>
            <div class="itinerary-timeline">
                ${pkg.fullItinerary.map(day => `
                    <div class="timeline-item">
                        <div class="timeline-badge text-white bg-red">HARI ${day.day}</div>
                        <div class="timeline-content">
                            <h4 style="color:var(--secondary); font-weight:800; margin-bottom:0.8rem; font-size:1.1rem;">${day.title}</h4>
                            <p style="font-size:0.95rem; line-height:1.7; color:var(--text-muted); margin-bottom:0;">${day.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        itineraryHTML = `
            <div class="itinerary-placeholder">
                <h4 style="color:var(--secondary); margin-bottom:0.5rem;"><i class="fas fa-map-signs text-red"></i> Itinerari Ringkas</h4>
                <p>Oleh kerana pakej ini mendapat permintaan tinggi (high demand), jadual interaktif penuh akan dibentangkan oleh ejen jualan kami secara terus. Bertindak pantas!</p>
            </div>
        `;
    }

    // Dynamic Includes / Excludes Generation
    let incExcHTML = '';
    if (pkg.includes && pkg.excludes && Array.isArray(pkg.includes)) {
        incExcHTML = `
            <div class="inc-exc-grid">
                <div class="inc-box">
                    <h4 style="color:#2E7D32; margin-bottom:1.5rem; font-weight:800; font-size:1.1rem; text-transform:uppercase;"><i class="fas fa-check-circle"></i> Harga Termasuk</h4>
                    <ul class="inc-list">
                        ${pkg.includes.map(inc => `<li><i class="fas fa-check text-green-600" style="color:#2E7D32; margin-top:4px;"></i> <span>${inc}</span></li>`).join('')}
                    </ul>
                </div>
                <div class="exc-box">
                    <h4 class="text-red" style="margin-bottom:1.5rem; font-weight:800; font-size:1.1rem; text-transform:uppercase;"><i class="fas fa-times-circle"></i> Tidak Termasuk</h4>
                    <ul class="exc-list">
                        ${pkg.excludes.map(exc => `<li><i class="fas fa-times text-red" style="margin-top:4px;"></i> <span>${exc}</span></li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    } else {
        incExcHTML = `
            <div class="itinerary-placeholder" style="margin-top:1.5rem;">
                <h4 style="color:var(--secondary); margin-bottom:0.5rem;"><i class="fas fa-exclamation-circle text-red"></i> Tidak Termasuk</h4>
                <p>${pkg.exclude}. Tertakluk maklumat penuh dan terma semasa.</p>
            </div>
        `;
    }

    // Dynamic Dates Generation
    let datesHTML = '';
    if (pkg.detailedDates) {
        datesHTML = `
            <div class="dates-section" style="margin-top:2.5rem;">
                <h3 class="text-red" style="font-size:1.6rem; margin-bottom:1.5rem; text-transform:uppercase;"><i class="far fa-calendar-alt"></i> Tarikh Pelepasan 2026</h3>
                <div class="dates-grid">
                    ${pkg.detailedDates.premier && pkg.detailedDates.premier.length ? `
                    <div class="date-category border-red-top">
                        <h4 style="color:var(--primary); font-weight:800; padding-bottom:0.8rem; margin-bottom:1.2rem; border-bottom: 2px solid rgba(211, 47, 47, 0.1);">Premier Dates</h4>
                        <ul class="dates-list">
                            ${pkg.detailedDates.premier.map(d => `<li><i class="far fa-calendar-check" style="color:var(--primary);"></i> ${d}</li>`).join('')}
                        </ul>
                    </div>` : ''}

                    ${pkg.detailedDates.regular && pkg.detailedDates.regular.length ? `
                    <div class="date-category" style="border-top: 5px solid var(--secondary);">
                        <h4 style="color:var(--secondary); font-weight:800; padding-bottom:0.8rem; margin-bottom:1.2rem; border-bottom: 2px solid rgba(26, 26, 26, 0.1);">Tarikh Regular</h4>
                        <ul class="dates-list">
                            ${pkg.detailedDates.regular.map(d => `<li><i class="far fa-calendar-check" style="color:var(--secondary);"></i> ${d}</li>`).join('')}
                        </ul>
                    </div>` : ''}

                    ${pkg.detailedDates.school && pkg.detailedDates.school.length ? `
                    <div class="date-category" style="border-top: 5px solid #d97706;">
                        <h4 style="color:#d97706; font-weight:800; padding-bottom:0.8rem; margin-bottom:1.2rem; border-bottom: 2px solid rgba(217, 119, 6, 0.1);">Cuti Sekolah</h4>
                        <ul class="dates-list">
                            ${pkg.detailedDates.school.map(d => `<li><i class="far fa-calendar-check" style="color:#d97706;"></i> ${d}</li>`).join('')}
                        </ul>
                    </div>` : ''}
                </div>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="modal-hero" style="background-image: url('${pkg.image}')">
            <div class="modal-hero-overlay">
                <h2>${pkg.title}</h2>
                <p>${pkg.desc}</p>
            </div>
        </div>
        <div class="modal-details">
            <div class="modal-meta-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1.5rem; margin-bottom:2.5rem; background:var(--bg-light); padding:1.5rem; border-radius:12px; border-left:4px solid var(--primary);">
                <div class="modal-meta-item" style="display:flex; gap:1rem; align-items:center;">
                    <i class="fas fa-tag text-red" style="font-size:1.8rem;"></i>
                    <div>
                        <small style="text-transform:uppercase; font-size:0.75rem; font-weight:700; color:var(--text-muted); letter-spacing:1px;">Harga Asas</small>
                        <div style="font-size:1.7rem; font-weight:900; color:var(--primary); line-height:1.2;">${formatCurrency(pkg.price)}</div>
                    </div>
                </div>
                <div class="modal-meta-item" style="display:flex; gap:1rem; align-items:center;">
                    <i class="far fa-clock text-red" style="font-size:1.8rem;"></i>
                    <div>
                        <small style="text-transform:uppercase; font-size:0.75rem; font-weight:700; color:var(--text-muted); letter-spacing:1px;">Tempoh</small>
                        <div style="font-size:1.2rem; font-weight:800; color:var(--secondary); line-height:1.2;">${pkg.duration}</div>
                    </div>
                </div>
                ${!pkg.detailedDates ? `
                <div class="modal-meta-item" style="display:flex; gap:1rem; align-items:center;">
                    <i class="far fa-calendar-check text-red" style="font-size:1.8rem;"></i>
                    <div>
                        <small style="text-transform:uppercase; font-size:0.75rem; font-weight:700; color:var(--text-muted); letter-spacing:1px;">Musim Perjalanan</small>
                        <div style="font-size:1.1rem; font-weight:800; color:var(--secondary); line-height:1.2;">${pkg.dates}</div>
                    </div>
                </div>
                ` : `
                <div class="modal-meta-item" style="display:flex; gap:1rem; align-items:center;">
                    <i class="fas fa-paper-plane text-red" style="font-size:1.8rem;"></i>
                    <div>
                        <small style="text-transform:uppercase; font-size:0.75rem; font-weight:700; color:var(--text-muted); letter-spacing:1px;">Penerbangan</small>
                        <div style="font-size:1.2rem; font-weight:800; color:var(--secondary); line-height:1.2;">KLIA (KUL)</div>
                    </div>
                </div>
                `}
            </div>
            
            <h3 class="text-red" style="font-size:1.5rem; margin-bottom:1.5rem; text-transform:uppercase;"><i class="fas fa-star" style="margin-right:0.5rem;"></i> Highlight Terpilih</h3>
            <ul style="list-style:none; margin-bottom: 0; color: var(--secondary); font-weight:600; font-size:1.05rem; display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1rem;">
                ${highlightsHTML}
            </ul>

            ${datesHTML}
            
            ${itineraryHTML}
            
            ${incExcHTML}
            
            <div class="modal-cta" style="margin-top:4rem;">
                <a href="https://wa.me/${waNumber}?text=Hi%20NUSATRAVEL,%20ikhlaskan%20saya%20tempah%20pakej%20${encodeURIComponent(pkg.title)}%20berharga%20${formatCurrency(pkg.price)}." target="_blank" class="btn btn-primary btn-block btn-lg" style="box-shadow:var(--shadow-red); font-size:1.2rem;">
                    <i class="fab fa-whatsapp" style="font-size:1.4rem;"></i> Sahkan Slot Anda Di WhatsApp
                </a>
            </div>
        </div>
    `;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });
}
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// 5. Navigation Scroll
const navbar = document.querySelector('.navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// 6. FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const answer = question.nextElementSibling;
        const isActive = item.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(otherItem => {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-answer').style.maxHeight = null;
        });

        if (!isActive) {
            item.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

// 7. Form Simulation with premium feeling
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = enquiryForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;

        btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Memproses...';
        btn.style.opacity = '0.8';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-check-double"></i> Berjaya! Ejen Akan Hubungi Anda';
            btn.style.backgroundColor = 'var(--secondary)';
            btn.style.color = '#fff';
            btn.style.opacity = '1';

            setTimeout(() => {
                enquiryForm.reset();
                btn.innerHTML = originalText;
                btn.style.backgroundColor = 'var(--primary)';
                btn.disabled = false;
            }, 3500);
        }, 1200);
    });
}

// Initial Run
document.addEventListener('DOMContentLoaded', () => {
    // We render a subset of packages to keep script size small for demo
    renderPackages(travelData);

    // Trigger reveals initially
    observeReveals();
});
