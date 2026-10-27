/**
 * Çankaya Uydu - site geneli yardımcı betikler.
 * Site GitHub Pages üzerinde çalıştığı için PHP yok; arama, iletişim formu
 * ve paylaşım düğmeleri tarayıcıda çalışır.
 */
(function () {
	'use strict';

	var WHATSAPP = '905534502033';

	// Arama dizini: build sırasında sayfalardan üretilir (başlık, açıklama, alt başlıklar)
	var PAGES = /*PAGES*/[
 {
  "title": "Çankaya Uydu Servisi",
  "url": "index.html",
  "desc": "Ankara Çankaya bölgesinde profesyonel çanak anten kurulumu, uydu arıza tespiti, merkezi uydu sistemleri ve hızlı yerinde teknik servis hizmetleri. Hemen arayın!",
  "text": "📡 Çankaya Uydu Servisi & Ankara Çanak Anten Kurulum ve Arıza Servisi Çankaya Uydu Sistemleri | Kaliteli Malzeme, Profesyonel İşçilik 🏢 Merkezi Uydu Sistemi Arıza & Kurulum 🏠 Bireysel Çanak Anten Arıza & Kurulum Yardım Konuları"
 },
 {
  "title": "Ankara Çanak Anten Açısı: Türksat 42° Doğu Ayar Değerleri",
  "url": "ankara-canak-anten-acisi.html",
  "desc": "Ankara'da Türksat 42° Doğu için çanak anten açısı: elevasyon yaklaşık 43°, azimut 166° (pusulada ~160°), LNB açısı ~11°. Adım adım ayar rehberi.",
  "text": "Ankara Çanak Anten Açısı: Türksat 42° Doğu Ayar Değerleri Ankara İçin Türksat 42°E Ayar Değerleri Elevasyon Açısı Nasıl Ayarlanır? Azimut (Yön) Nasıl Bulunur? LNB Açısı (Skew) Adım Adım Ayar Sık Sorulan Sorular Ankara'da çanak anten hangi yöne bakmalı? Ankara'da çanak anten elevasyon açısı kaç derece? Çanak anten açısı biraz kayarsa ne olur?"
 },
 {
  "title": "Çanak Anten Nasıl Ayarlanır?",
  "url": "canak-anten-nasil-ayarlanir.html",
  "desc": "Çanak anten ayarı nasıl yapılır? Ankara Çankaya'da profesyonel çanak anten kurulum ve uydu ayar servisi. Sinyal alma ve yönlendirme işlemlerinin püf noktaları burada!",
  "text": "Çanak Anten Nasıl Ayarlanır? Çanak Anten Nasıl Ayarlanır? Çanak Anten Kurmak İçin Gerekli Malzemeler; Çanak Anten Montaj Yeri Seçimi; Çanak Anten Yönünün Ayarlanması Kablonun Çanak Antene ve Cihaza Bağlanması Sinyal Ayarı ve İnce Ayarlar Kanal Tarama ve Ayar Son Kontroller"
 },
 {
  "title": "Çanak Anten Nedir?",
  "url": "canak-anten-nedir.html",
  "desc": "Çanak anten nedir, nasıl çalışır? Ankara Çankaya'da uydu sistemleri ve çanak anten kurulumu hakkında bilmeniz gereken tüm bilgiler bu sayfada!",
  "text": "Çanak Anten Nedir? 1.Çanak Antenin Yapısı 2.Çanak Anten Kurulumu 3.Çanak Anten Kullanım Alanları 4.Çanak Antenin Avantajları 5.Çanak Antenin Dezavantajları Sonuç"
 },
 {
  "title": "Güncel Digitürk Kanal Listesi 2025",
  "url": "digiturk-kanal-listesi.html",
  "desc": "En güncel Digitürk kanal listesi 2025 burada! Tüm Digitürk kanallarını ve frekanslarını Çankaya Uydu Servisi farkıyla öğrenin. Ankara Çankaya’da uzman uydu servisi: 0553 450 20 33",
  "text": "Digitürk Kanal Listesi 2025 Digitürk Kanal Listesi 2025 Digitürk Film Kanalları Digitürk Dizi Kanalları Digitürk Belgesel Kanalları (Devamı 181'den sonra) Digitürk Ulusal Kanallar Digitürk Spor Kanalları Digitürk Müzik Kanalları Digitürk Yabancı Ulusal Kanallar Digitürk Mekke ve Medine Kanalları Digitürk Eba Kanalları Digitürk Çizgi Film Kanalları Digitürk Belgesel Kanalları Digitürk Box Office Kanalları Digitürk Taraftar Kanalları Digitürk Euro Kanalları Digitürk 4K Çözünürlüklü Kanalları Digitürk Türkçe Radyo Kanalları Digitürk Yabancı Radyo Kanalları Digitürk Ulusal Kanallar"
 },
 {
  "title": "SSS - Sıkça Sorulan Sorular",
  "url": "faq.html",
  "desc": "Çankaya Uydu Servisi ile ilgili sıkça sorulan sorular ve yanıtları. Çanak anten kurulumu, uydu arızaları, televizyon tamiri ve merkezi uydu sistemleri hakkında merak ettiklerinizi bu sayfada bulabilirsiniz.",
  "text": "Sıkça Sorulan Sorular (SSS)"
 },
 {
  "title": "Resim Galerisi",
  "url": "gallery.html",
  "desc": "Çanak Anten Uydu Sistemleri Arıza ve Kurulum İşlerinizi, Kaliteli Malzemeler ve Profesyonel İşçilik Hizmeti ile Çözüyoruz..",
  "text": "Galeri Çanak Anten ve Uydu Sistemleri"
 },
 {
  "title": "Hakkımızda",
  "url": "hakkimizda.html",
  "desc": "Çankaya Uydu Servisi: Ankara/Çankaya’da çanak anten ve uydu sistemleri konusunda 15 yılı aşkın tecrübe. Profesyonel, hızlı ve garantili servis! 0553 450 20 33",
  "text": "Hakkımızda Merhaba, ben Tuncay Özer Teknisyen"
 },
 {
  "title": "Hizmet Bölgelerimiz: Dikmen, Ayrancı, Balgat, Öveçler ve Çankaya",
  "url": "hizmet-bolgeleri.html",
  "desc": "Çankaya Uydu Sistemleri; Dikmen, Ayrancı, Öveçler, Sokullu, Balgat, Emek, Bahçelievler ve İncek'te çanak anten kurulum, arıza ve merkezi uydu sistemi servisi verir.",
  "text": "Hizmet Bölgelerimiz: Dikmen, Ayrancı, Balgat, Öveçler ve Çankaya Dikmen Ayrancı Öveçler ve Sokullu Balgat ve Emek Bahçelievler ve İncek Çalışma Saatlerimiz Sık Sorulan Sorular Hangi semtlere servis veriyorsunuz? Çalışma saatleriniz nedir?"
 },
 {
  "title": "Hizmetlerimiz",
  "url": "hizmetlerimiz.html",
  "desc": "Çankaya Uydu Servisi olarak Ankara'da çanak anten kurulumu, merkezi uydu sistemleri, arıza tespiti ve onarım hizmetleri sunuyoruz. Profesyonel ve yerinde çözüm!",
  "text": "Çankaya Uydu Servisi Hizmetlerimiz Bireysel Çanak Anten Arıza ve Kurulum Hizmetleri. Merkezi Uydu Sistemleri İnternet Kablo Çekimi Duvara TV Montajı Uydu Cihazı Satışı Hizmet Sonrası Destek"
 },
 {
  "title": "İletişim",
  "url": "iletisim.html",
  "desc": "Ankara Çankaya'da profesyonel çanak anten ve uydu servisi için bize ulaşın. Telefon: 0553 450 20 33 – Tuncay Özer",
  "text": "Çankaya Uydu Teknik Servis İletişim"
 },
 {
  "title": "LNB Frekansı Kaç Olmalı? Doğru LNB Ayarları (9750/10600)",
  "url": "lnb-frekansi-kac-olmali.html",
  "desc": "LNB frekansı kaç olmalı? Üniversal LNB için 9750/10600 MHz, 22 kHz otomatik, LNB gücü açık. LNB ayarlarının anlamı ve yanlış ayarın belirtileri.",
  "text": "LNB Frekansı Kaç Olmalı? Doğru LNB Ayarları (9750/10600) Kısa Cevap: Türkiye'de Doğru Değerler Bu Değerler Ne Anlama Geliyor? Yanlış Ayarın Belirtileri Merkezi Sistemlerde Dikkat Sık Sorulan Sorular LNB frekansı kaç olmalı? LNB gücü açık mı kapalı mı olmalı? 22 kHz ne işe yarar?"
 },
 {
  "title": "LNB Nedir? Çeşitleri ve LNB Arızası Nasıl Anlaşılır?",
  "url": "lnb-nedir.html",
  "desc": "LNB nedir, ne işe yarar? Single, twin, quad ve quattro LNB farkları, LNB arızasının belirtileri ve LNB değişimi hakkında bilmeniz gerekenler.",
  "text": "LNB Nedir? Çeşitleri ve LNB Arızası Nasıl Anlaşılır? LNB Nasıl Çalışır? LNB Çeşitleri LNB Arızasının Belirtileri LNB Değişimi Sık Sorulan Sorular LNB ne işe yarar? LNB bozulursa ne olur? Twin ve quad LNB farkı nedir?"
 },
 {
  "title": "Merkezi Uydu Sistemi Nedir? Apartmanlarda Nasıl Çalışır?",
  "url": "merkezi-uydu-sistemi-nedir.html",
  "desc": "Merkezi uydu sistemi nedir, nasıl çalışır? Apartman ve sitelerde tek çanakla tüm dairelere yayın, multiswitch, quattro LNB ve sık görülen arızalar.",
  "text": "Merkezi Uydu Sistemi Nedir? Apartmanlarda Nasıl Çalışır? Merkezi Sistemin Parçaları Kaç Daireye Göre Kurulur? Avantajları Sık Görülen Arızalar Sık Sorulan Sorular Merkezi uydu sistemi nedir? Merkezi sistemde tüm dairelerde yayın yok, neden? Multiswitch nedir?"
 },
 {
  "title": "Merkezi Uydu Sisteminde TV Kurulumu ve Kanal Arama",
  "url": "merkezi-uydu-tv-kurulumu.html",
  "desc": "Merkezi uydu sistemi TV'ye nasıl bağlanır? Uydu prizinden televizyona bağlantı, LNB ve unicable ayarları, kanal arama ve 'sinyal yok' sorununun çözümü.",
  "text": "Merkezi Uydu Sisteminde TV Kurulumu ve Kanal Arama 1. Doğru Prize ve Doğru Girişe Bağlayın 2. Ayarları Seçin Tek Kablolu (Unicable) Sistemler 3. Kanal Araması Merkezi Sistemde \"Sinyal Yok\" Diyorsa Sık Sorulan Sorular Merkezi uydu sistemi TV'ye nasıl bağlanır? Merkezi sistemde LNB ayarı ne olmalı? Merkezi sistemde iki televizyonu aynı prize bağlayabilir miyim?"
 },
 {
  "title": "Gizlilik Politikası",
  "url": "privacy-policy.html",
  "desc": "Çanak Anten Uydu Sistemleri Arıza ve Kurulum İşlerinizi, Kaliteli Malzemeler ve Profesyonel İşçilik Hizmeti ile Çözüyoruz..",
  "text": "Gizlilik Politikası"
 },
 {
  "title": "Türksat 4A Şebeke Arama Frekansları",
  "url": "turksat-sebeke-arama-frekansi.html",
  "desc": "Türksat 4A uydusu şebeke arama frekansları: frekans, polarizasyon, sembol oranı ve FEC değerleri ile uydu alıcısında kanal arama nasıl yapılır.",
  "text": "Türksat 4A Uydusu Şebeke Arama Frekansları 1. Batı (West) Yönü - Türkiye ve Avrupa Kapsama Alanı 2. Doğu (East) Yönü - Orta Asya ve Orta Doğu Kapsama Alanı 3. Doğu Yönü - Türkiye ve Orta Doğu Kapsama Alanı Orta Asya ve Afrika Beam"
 },
 {
  "title": "TV Duvar Montajı: Doğru Yükseklik, Aparat Seçimi ve VESA Ölçüsü",
  "url": "tv-duvar-montaji.html",
  "desc": "Televizyon duvara kaç cm yükseğe asılır? VESA ölçüsüne göre TV duvar montaj aparatı seçimi, duvar tipine göre vidalama ve kabloların gizlenmesi.",
  "text": "TV Duvar Montajı: Doğru Yükseklik, Aparat Seçimi ve VESA Ölçüsü Televizyon Kaç cm Yükseğe Asılmalı? VESA Ölçüsü ve Aparat Seçimi Duvar Tipine Göre Montaj Kabloları Gizlemek Sık Sorulan Sorular Televizyon duvara kaç cm yükseğe asılmalı? VESA ölçüsü nedir? Alçıpan duvara televizyon asılır mı?"
 },
 {
  "title": "Televizyonda Uydu Kanal Arama: Samsung, LG, Vestel, Arçelik, Beko",
  "url": "tv-uydu-kanal-arama.html",
  "desc": "Samsung, LG, Vestel, Arçelik ve Beko televizyonlarda uydu kanal arama nasıl yapılır? Türksat ayarları, LNB değerleri ve sık yapılan hatalar.",
  "text": "Televizyonda Uydu Kanal Arama: Samsung, LG, Vestel, Arçelik, Beko Tüm Markalarda Geçerli Ayarlar Samsung LG Vestel, Arçelik, Beko, Grundig Sık Yapılan Hatalar Sık Sorulan Sorular Televizyonda uydu kanal arama nasıl yapılır? Uydu cihazı olmadan televizyonda kanal izlenir mi? Kanal aramada hiç kanal bulunmuyor, neden?"
 },
 {
  "title": "Uydu Anten Kablosu Nasıl Bağlanır? F Konnektör Takma ve Ek Yapma",
  "url": "uydu-kablosu-nasil-baglanir.html",
  "desc": "Uydu anten kablosu nasıl bağlanır, F konnektör nasıl takılır, kablo nasıl ek yapılır? Doğru kablo seçimi ve sinyal kaybına yol açan hatalar.",
  "text": "Uydu Anten Kablosu Nasıl Bağlanır? F Konnektör Takma ve Ek Yapma Doğru Kablo Seçimi F Konnektör Nasıl Takılır? Kablo Nasıl Ek Yapılır? Sinyal Kaybettiren Hatalar Sık Sorulan Sorular Uydu kablosu nasıl ek yapılır? Uydu için hangi kablo kullanılır? F konnektör takınca neden sinyal yok?"
 },
 {
  "title": "Uydu Kanalları Gitti, Ne Yapmalıyım? Adım Adım Çözüm",
  "url": "uydu-kanallari-gitti.html",
  "desc": "Uydu kanalları gitti mi? Frekans değişikliği, TKGS güncellemesi ve kanal arama ile kaybolan kanalları geri getirmenin yolları. Hangi durumda servis gerekir?",
  "text": "Uydu Kanalları Gitti, Ne Yapmalıyım? Adım Adım Çözüm Önce Şunu Belirleyin: Hepsi mi Gitti, Bazıları mı? 1. TKGS ile Otomatik Güncelleme 2. Otomatik Kanal Arama 3. Kanal Sıralaması Bozulduysa 4. Hâlâ Gelmiyorsa Sık Sorulan Sorular Uydu kanalları neden gider? TKGS nedir? Kanal arama yaptım ama hiç kanal bulunmadı, neden?"
 },
 {
  "title": "Uydu Sinyal Güçlendirici ve Sinyal Bulucu İşe Yarar mı?",
  "url": "uydu-sinyal-guclendirici.html",
  "desc": "Uydu sinyal güçlendirici ve sinyal bulucu ne işe yarar, ne zaman gerekir? Hangi sorunları çözer, hangilerini çözmez? Profesyonel ölçüm cihazı farkı.",
  "text": "Uydu Sinyal Güçlendirici ve Sinyal Bulucu İşe Yarar mı? Uydu Sinyal Güçlendirici (Hat Yükseltici) Nedir? Ne Zaman İşe Yarar? Ne Zaman İşe Yaramaz? Uydu Sinyal Bulucu Sık Sorulan Sorular Uydu sinyal güçlendirici işe yarar mı? Uydu sinyal bulucu nasıl kullanılır? Sinyal seviyesi yüksek ama görüntü donuyor, neden?"
 },
 {
  "title": "Uydu \"Sinyal Yok\" Hatası Neden Olur, Nasıl Çözülür?",
  "url": "uydu-sinyal-yok-hatasi.html",
  "desc": "Televizyonda uydu 'sinyal yok' hatası mı alıyorsunuz? Kablo, LNB, çanak ayarı ve merkezi sistem kaynaklı nedenleri ve evde yapabileceğiniz kontrolleri anlattık.",
  "text": "Uydu \"Sinyal Yok\" Hatası Neden Olur, Nasıl Çözülür? 1. Önce Basit Kontroller 2. Kablo ve Konnektör Kontrolü 3. Çanak Anten Yönü Kaymış Olabilir 4. LNB Arızası 5. Apartmanda Merkezi Sistem Varsa Ne Zaman Teknik Servis Çağırmalı? Sık Sorulan Sorular Uydu sinyal yok hatası neden olur? Sadece bazı kanallarda sinyal yok, neden? Yağmurda sinyal gidiyor, sonra geliyor. Bu arıza mı?"
 },
 {
  "title": "Yağmurda ve Karda Uydu Neden Donar? Çözüm Önerileri",
  "url": "yagmurda-uydu-sinyali.html",
  "desc": "Yağmur yağınca veya kar yağınca uydu yayını neden donar, sinyal neden gider? Nedenleri ve kalıcı çözüm için yapılması gerekenler.",
  "text": "Yağmurda ve Karda Uydu Neden Donar? Çözüm Önerileri Neden Olur? Normal mi, Arıza mı? Kalıcı Çözümler Sık Sorulan Sorular Yağmur yağınca uydu neden gidiyor? Karda uydu yayını neden donar? Yağmurda donmayı önlemek için ne yapılmalı?"
 },
 {
  "title": "Yardım",
  "url": "yardim.html",
  "desc": "Çanak anten kurulumu, uydu arızası, merkezi sistemler ve TV kurulumu hakkında sık sorulan sorular ve pratik yardım rehberleri. Ankara Çankaya Uydu Servisi ile destek alın.",
  "text": "Yardım ve Sık Sorulan Sorular - Çankaya Uydu Servisi"
 }
];

	/** Türkçe karakterleri sadeleştirir: "Çanak" ve "canak" aynı sonucu verir. */
	function normalize(text) {
		return (text || '')
			.toLocaleLowerCase('tr')
			.replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/i̇/g, 'i')
			.replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u')
			.replace(/[^a-z0-9 ]+/g, ' ')
			.replace(/\s+/g, ' ')
			.trim();
	}

	PAGES.forEach(function (page) {
		page.nTitle = normalize(page.title);
		page.nAll = normalize(page.title + ' ' + page.desc + ' ' + page.text);
	});

	/**
	 * Kelimeyi metinde arar; bulamazsa sondaki ekleri (en fazla 3 harf) kırparak
	 * tekrar dener: "uyducu" -> "uydu", "ayarları" -> "ayar".
	 */
	function findStem(text, word) {
		var min = Math.max(4, word.length - 3);
		for (var len = word.length; len >= min; len--) {
			if (text.indexOf(word.slice(0, len)) !== -1) return word.slice(0, len);
		}
		return text.indexOf(word) !== -1 ? word : null;
	}

	// Kısaltmalar ve günlük kullanım: aramada karşılığıyla birlikte aranır
	var SYNONYMS = { tv: 'televizyon', uyducu: 'uydu servis', cihaz: 'alici', cihazi: 'alici' };

	/**
	 * Kelimelerin çoğunu içeren sayfaları döndürür (3+ kelimelik aramalarda bir
	 * kelime eksik olabilir); başlıkta geçen ve tam eşleşen kelimeler önde.
	 */
	function search(query) {
		var words = normalize(query).split(' ').filter(function (w) { return w.length > 1; });
		if (!words.length) return [];
		var needed = words.length <= 2 ? words.length : Math.ceil(words.length * 0.6);

		return PAGES
			.map(function (page) {
				var score = 0, matched = 0;
				for (var i = 0; i < words.length; i++) {
					var stem = findStem(page.nAll, words[i]);
					if (!stem && SYNONYMS[words[i]]) {
						stem = SYNONYMS[words[i]].split(' ').map(function (w) { return findStem(page.nAll, w); }).filter(Boolean)[0] || null;
					}
					if (!stem) continue;
					matched++;
					score += page.nTitle.indexOf(stem) !== -1 ? 3 : 1;
					if (stem === words[i]) score += 1;
				}
				return matched >= needed ? { page: page, score: score + matched * 4 } : null;
			})
			.filter(Boolean)
			.sort(function (a, b) { return b.score - a.score; })
			.map(function (r) { return r.page; });
	}

	function escapeHtml(text) {
		return String(text).replace(/[&<>"']/g, function (c) {
			return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
		});
	}

	// --- Üst menüdeki anlık arama ---
	Array.prototype.forEach.call(document.querySelectorAll('form[data-site-search]'), function (form) {
		var input = form.querySelector('input[name="s"]');
		var box = form.querySelector('.rd-search-results-live');
		if (!input || !box) return;
		var timer;

		input.addEventListener('input', function () {
			clearTimeout(timer);
			timer = setTimeout(function () {
				var query = input.value.trim();
				if (query.length < 2) {
					box.classList.remove('active');
					box.innerHTML = '';
					return;
				}
				var results = search(query).slice(0, 5);
				var html = '<div class="search-quick-result">Hızlı Sonuçlar</div><ol class="search_list">';
				if (!results.length) {
					html += '<li><p class="search_error">"' + escapeHtml(query) + '" için sonuç bulunamadı.</p></li>';
				}
				results.forEach(function (page) {
					html += '<li><h5 class="search_title"><a href="' + page.url + '">' + escapeHtml(page.title) + '</a></h5></li>';
				});
				html += '<li><a class="search_submit" href="search-results.html?s=' + encodeURIComponent(query) + '">Tüm Sonuçlar</a></li></ol>';
				box.innerHTML = html;
				box.classList.remove('cleared');
				box.classList.add('active');
			}, 150);
		});

		document.addEventListener('click', function (e) {
			if (!form.contains(e.target)) box.classList.remove('active');
		});
	});

	// --- Arama sonuçları sayfası ---
	var resultsBox = document.getElementById('results');
	var searchForm = document.getElementById('search-form');
	var searchInput = document.getElementById('search-input');

	function showResults(query) {
		if (!query.trim()) {
			resultsBox.innerHTML = '<p class="search-empty">Aramak istediğiniz kelimeyi yazın. Örn: <em>sinyal yok</em>, <em>LNB</em>, <em>merkezi sistem</em></p>';
			return;
		}
		var results = search(query);
		if (!results.length) {
			resultsBox.innerHTML = '<p class="search-empty">"' + escapeHtml(query) + '" için sonuç bulunamadı. ' +
				'Sorunuzu <a href="https://wa.me/' + WHATSAPP + '" target="_blank" rel="noopener">WhatsApp\'tan</a> sorabilirsiniz.</p>';
			return;
		}
		resultsBox.innerHTML = '<p class="search-count">' + results.length + ' sonuç bulundu</p>' + results.map(function (page) {
			return '<div class="search-result"><a href="' + page.url + '">' + escapeHtml(page.title) + '</a>' +
				'<p>' + escapeHtml(page.desc) + '</p></div>';
		}).join('');
	}

	if (resultsBox && searchForm && searchInput) {
		var params = new URLSearchParams(location.search);
		var initial = params.get('s') || params.get('q') || '';
		searchInput.value = initial;
		showResults(initial);

		searchForm.addEventListener('submit', function (e) {
			e.preventDefault();
			var query = searchInput.value;
			history.replaceState(null, '', '?s=' + encodeURIComponent(query));
			showResults(query);
		});
	}

	// --- WhatsApp iletişim formu ---
	Array.prototype.forEach.call(document.querySelectorAll('form.wa-form'), function (form) {
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			var name = form.elements.name.value.trim();
			var area = form.elements.area.value.trim();
			var message = form.elements.message.value.trim();
			if (!name || !message) {
				(name ? form.elements.message : form.elements.name).focus();
				form.classList.add('wa-form-invalid');
				return;
			}
			form.classList.remove('wa-form-invalid');
			var text = 'Merhaba, ben ' + name + (area ? ' (' + area + ')' : '') + '.\n' + message;
			window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
		});
	});

	// --- Yazı paylaşım düğmeleri ---
	var shareUrls = {
		facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
		whatsapp: 'https://wa.me/?text=',
		x: 'https://x.com/intent/post?url='
	};
	Array.prototype.forEach.call(document.querySelectorAll('[data-share]'), function (link) {
		var canonical = document.querySelector('link[rel="canonical"]');
		var url = canonical ? canonical.href : location.href;
		var target = link.getAttribute('data-share');
		var value = target === 'whatsapp' ? document.title + ' ' + url : url;
		link.href = shareUrls[target] + encodeURIComponent(value);
		link.target = '_blank';
		link.rel = 'noopener';
	});

	// --- Google Ads: telefon dönüşümü sadece numaraya tıklanınca sayılır ---
	document.addEventListener('click', function (e) {
		var link = e.target.closest && e.target.closest('a[href^="tel:"]');
		if (link && typeof window.gtag === 'function') {
			window.gtag('event', 'conversion', { send_to: 'AW-16706495413/ac9jCKvAt9QZELXHo54-' });
		}
	});
})();
