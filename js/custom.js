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
  "text": "Çankaya Uydu Servisi & Ankara Çanak Anten Kurulum ve Arıza Servisi Çankaya Uydu Sistemleri | Kaliteli Malzeme, Profesyonel İşçilik Merkezi Uydu Sistemi Arıza & Kurulum Bireysel Çanak Anten Arıza & Kurulum Yardım Konuları"
 },
 {
  "title": "Altus TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026)",
  "url": "altus-tv-uydu-kanal-arama.html",
  "desc": "Altus televizyonda uydu kanal arama ve şebeke arama nasıl yapılır? Türksat 2026 değişikliği sonrası TKGS, otomatik ve manuel arama adımları, menü görselleri.",
  "text": "Altus TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) Menünüz Hangisi? (Arçelik Grubu Menü Tipleri) Altus TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Altus TV'de uydu ayarı nasıl yapılır? Altus TV hangi firmanın? Altus TV'de TKGS nasıl kapatılır?"
 },
 {
  "title": "Ankara Çanak Anten Açısı: Türksat 42° Doğu Ayar Değerleri",
  "url": "ankara-canak-anten-acisi.html",
  "desc": "Ankara'da Türksat 42° Doğu için çanak anten açısı: elevasyon yaklaşık 43°, azimut 166° (pusulada ~160°), LNB açısı ~11°. Adım adım ayar rehberi.",
  "text": "Ankara Çanak Anten Açısı: Türksat 42° Doğu Ayar Değerleri Ankara İçin Türksat 42°E Ayar Değerleri Elevasyon Açısı Nasıl Ayarlanır? Azimut (Yön) Nasıl Bulunur? LNB Açısı (Skew) Adım Adım Ayar Sık Sorulan Sorular Ankara'da çanak anten hangi yöne bakmalı? Ankara'da çanak anten elevasyon açısı kaç derece? Çanak anten açısı biraz kayarsa ne olur?"
 },
 {
  "title": "Arçelik TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026)",
  "url": "arcelik-tv-uydu-kanal-arama.html",
  "desc": "Arçelik televizyonda uydu kanal arama ve şebeke arama nasıl yapılır? Türksat 2026 değişikliği sonrası TKGS, otomatik ve manuel arama adımları, menü görselleri.",
  "text": "Arçelik TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) Menünüz Hangisi? (Arçelik Grubu Menü Tipleri) Arçelik TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Arçelik TV'de uydu kanal arama nasıl yapılır? Arçelik TV'de kanallar Türksat değişikliğinden sonra gelmiyor, ne yapmalı? Arçelik Google TV'de kanal tarama nerede?"
 },
 {
  "title": "Beko TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026)",
  "url": "beko-tv-uydu-kanal-arama.html",
  "desc": "Beko televizyonda uydu kanal arama ve şebeke arama nasıl yapılır? Türksat 2026 değişikliği sonrası TKGS, otomatik ve manuel arama adımları, menü görselleri.",
  "text": "Beko TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) Menünüz Hangisi? (Arçelik Grubu Menü Tipleri) Beko TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Beko TV'de uydu kanal arama nasıl yapılır? Beko kendinden uydulu TV'de manuel arama nasıl yapılır? Beko TV'de mevcut kanalları korumalı mıyım?"
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
  "title": "Hi-Level, Axen, Telefunken, Onvo, Sunny TV Uydu Kanal Arama (2026)",
  "url": "diger-marka-tv-uydu-kanal-arama.html",
  "desc": "Hi-Level, Axen, Telefunken, Onvo ve Sunny televizyonlarda uydu kanal arama ve TKGS: menü tipinize göre adımlar, şebeke araması değerleri (Türksat 2026).",
  "text": "Hi-Level, Axen, Telefunken, Onvo, Sunny TV Uydu Kanal Arama (2026) 1. Menü Tipinizi Belirleyin 2. Marka Notları Sunny Onvo Hi-Level Axen Telefunken 3. Şebeke Araması (Tüm Markalar) Diğer Markalar Sık Sorulan Sorular Hi-Level TV'de uydu ayarlama nasıl yapılır? Sunny TV'de uydu kurulumu nasıl yapılır? Onvo TV uydu görmüyor, ne yapmalıyım?"
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
  "title": "Grundig TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026)",
  "url": "grundig-tv-uydu-kanal-arama.html",
  "desc": "Grundig televizyonda uydu kanal arama ve şebeke arama nasıl yapılır? Türksat 2026 değişikliği sonrası TKGS, otomatik ve manuel arama adımları, menü görselleri.",
  "text": "Grundig TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) Menünüz Hangisi? (Arçelik Grubu Menü Tipleri) Grundig TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Grundig TV'de uydu kanal arama nasıl yapılır? Grundig ve Arçelik menüleri aynı mı? Grundig Google TV'de kanal tarama nerede?"
 },
 {
  "title": "Hakkımızda",
  "url": "hakkimizda.html",
  "desc": "Çankaya Uydu Servisi: Ankara/Çankaya’da çanak anten ve uydu sistemleri konusunda 15 yılı aşkın tecrübe. Profesyonel, hızlı ve garantili servis! 0553 450 20 33",
  "text": "Hakkımızda Merhaba, ben Tuncay Özer Teknisyen"
 },
 {
  "title": "Hisense TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026)",
  "url": "hisense-tv-uydu-kanal-arama.html",
  "desc": "Hisense televizyonda uydu kanal arama ve şebeke arama nasıl yapılır? Türksat 2026 değişikliği sonrası TKGS, otomatik ve manuel arama adımları, menü görselleri.",
  "text": "Hisense TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: Otomatik Kanal Arama Yöntem 2: Şebeke Araması (Manuel) Hisense TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Hisense TV'de uydu ayarlama nasıl yapılır? Hisense TV'de manuel uydu araması nasıl yapılır? Hisense TV'de Türksat listede yok, ne yapmalıyım?"
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
  "title": "Uydu Kanal Sıralaması Bozuldu: Nasıl Düzeltilir?",
  "url": "kanal-siralamasi-bozuldu.html",
  "desc": "Uydu kanal sıralaması bozuldu mu? TKGS ile standart sıraya dönme, kanal taşıma, favori listesi ve kanal aramasından sonra karışan listeyi düzeltme yolları.",
  "text": "Uydu Kanal Sıralaması Bozuldu: Nasıl Düzeltilir? 1. TKGS ile Standart Sıraya Dönün (En Kolay Yol) 2. Kanal Düzenleme ile Elle Sıralayın 3. Favori Listesi Oluşturun Kanallar Çift Göründüyse Sık Sorulan Sorular Uydu kanal sıralaması neden bozulur? Kanal sıralamasını eski haline nasıl getiririm? Kanal listesinde aynı kanal iki kez çıkıyor, neden?"
 },
 {
  "title": "LG TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026)",
  "url": "lg-tv-uydu-kanal-arama.html",
  "desc": "LG televizyonda uydu kanal arama ve şebeke arama nasıl yapılır? Türksat 2026 değişikliği sonrası TKGS, otomatik ve manuel arama adımları, menü görselleri.",
  "text": "LG TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) LG TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular LG TV'de uydu kanal arama nasıl yapılır? LG TV'de kanallar Türksat değişikliğinden sonra gitti, neden? LG TV'de kanal ayarları menüsü nerede?"
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
  "title": "Philips TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026)",
  "url": "philips-tv-uydu-kanal-arama.html",
  "desc": "Philips televizyonda uydu kanal arama ve şebeke arama nasıl yapılır? Türksat 2026 değişikliği sonrası TKGS, otomatik ve manuel arama adımları, menü görselleri.",
  "text": "Philips TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: Otomatik Kanal Arama Yöntem 2: Şebeke Araması (Manuel) Philips TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Philips TV'de uydu kanal arama nasıl yapılır? Philips TV Türksat'ı buluyor ama kanal getirmiyor, neden? Philips TV'de manuel transponder nasıl girilir?"
 },
 {
  "title": "Gizlilik Politikası",
  "url": "privacy-policy.html",
  "desc": "Çanak Anten Uydu Sistemleri Arıza ve Kurulum İşlerinizi, Kaliteli Malzemeler ve Profesyonel İşçilik Hizmeti ile Çözüyoruz..",
  "text": "Gizlilik Politikası"
 },
 {
  "title": "Regal TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026)",
  "url": "regal-tv-uydu-kanal-arama.html",
  "desc": "Regal televizyonda uydu kanal arama ve şebeke arama nasıl yapılır? Türksat 2026 değişikliği sonrası TKGS, otomatik ve manuel arama adımları, menü görselleri.",
  "text": "Regal TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) Regal TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Regal TV'de kanal arama nasıl yapılır? Regal ve Vestel menüleri aynı mı? Regal TV TKGS destekliyor mu?"
 },
 {
  "title": "Rüzgârdan Çanak Anten Kaydı, Uydu Bozuldu: Ne Yapmalı?",
  "url": "ruzgar-canak-anten-kaydi.html",
  "desc": "Fırtına veya sert rüzgârdan sonra uydu bozuldu, sinyal yok mu diyor? Çanak anten kaymasının belirtileri, güvenli kontroller ve kalıcı çözüm.",
  "text": "Rüzgârdan Çanak Anten Kaydı, Uydu Bozuldu: Ne Yapmalı? Belirtiler Güvenli Kontroller Kalıcı Çözüm Sık Sorulan Sorular Rüzgârdan sonra uydu neden gider? Rüzgârdan kayan çanak anteni kendim ayarlayabilir miyim? Çanak antenin rüzgârda kaymasını nasıl önlerim?"
 },
 {
  "title": "Samsung TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026)",
  "url": "samsung-tv-uydu-kanal-arama.html",
  "desc": "Samsung televizyonda uydu kanal arama ve şebeke arama nasıl yapılır? Türksat 2026 değişikliği sonrası TKGS, otomatik ve manuel arama adımları, menü görselleri.",
  "text": "Samsung TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) Samsung TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Samsung TV'de uydu kanal arama nasıl yapılır? Samsung TV'de Uzman Ayarları şifresi nedir? Samsung TV'de Türksat değişikliğinden sonra kanallar gelmiyor, ne yapmalıyım?"
 },
 {
  "title": "Şebeke Arama Nasıl Yapılır? Tüm TV Markaları İçin Adım Adım (2026)",
  "url": "sebeke-arama-nasil-yapilir.html",
  "desc": "Şebeke (ağ) arama nasıl yapılır? Türksat 42°E için 12380 MHz Dikey 27500 değeriyle tüm kanalları bulma: Samsung, LG, Vestel, Arçelik, Beko ve diğer markalar için menü yolları.",
  "text": "Şebeke Arama Nasıl Yapılır? Tüm TV Markaları İçin Adım Adım (2026) Şebeke Arama Değerleri Adım Adım Şebeke Araması Markalara Göre Şebeke Araması Menü Yolu Şebeke Araması Kanal Bulmuyorsa Sık Sorulan Sorular Şebeke arama nedir? Şebeke arama frekansı kaç? Şebeke araması açık mı kapalı mı olmalı?"
 },
 {
  "title": "Sony TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026)",
  "url": "sony-tv-uydu-kanal-arama.html",
  "desc": "Sony televizyonda uydu kanal arama ve şebeke arama nasıl yapılır? Türksat 2026 değişikliği sonrası TKGS, otomatik ve manuel arama adımları, menü görselleri.",
  "text": "Sony TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: Otomatik Kanal Arama Yöntem 2: Şebeke Araması (Manuel) Sony TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Sony TV'de uydu kanal arama nasıl yapılır? Sony Bravia'da Türksat değişikliğinden sonra kanallar gitti, ne yapmalıyım? Sony TV'de kanallar nerede görünür?"
 },
 {
  "title": "TCL TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026)",
  "url": "tcl-tv-uydu-kanal-arama.html",
  "desc": "TCL televizyonda uydu kanal arama ve şebeke arama nasıl yapılır? Türksat 2026 değişikliği sonrası TKGS, otomatik ve manuel arama adımları, menü görselleri.",
  "text": "TCL TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: Otomatik Kanal Arama Yöntem 2: Şebeke Araması (Manuel) TCL TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular TCL TV'de uydu kanal arama nasıl yapılır? TCL Google TV'de uydu kanalları nerede? TCL TV'de Türksat kanalları eksik geliyor, ne yapmalı?"
 },
 {
  "title": "TKGS Nedir? Nasıl Açılır, Kapatılır ve Güncellenir?",
  "url": "tkgs-nedir.html",
  "desc": "TKGS (Türksat Kanal Güncelleme Sistemi) nedir, ne işe yarar? Televizyonda TKGS nasıl açılır, kapatılır ve güncellenir; TKGS güncelleme hatası çözümü.",
  "text": "TKGS Nedir? Nasıl Açılır, Kapatılır ve Güncellenir? TKGS Ne İşe Yarar? Televizyonumda TKGS Var mı? TKGS Nasıl Açılır ve Güncellenir? TKGS Nasıl Kapatılır? Ne Zaman Kapatmalı? TKGS Güncelleme Hatası Sık Sorulan Sorular TKGS nedir? TKGS açık mı olmalı kapalı mı? TKGS güncelleme nasıl yapılır?"
 },
 {
  "title": "Toshiba TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026)",
  "url": "toshiba-tv-uydu-kanal-arama.html",
  "desc": "Toshiba televizyonda uydu kanal arama ve şebeke arama nasıl yapılır? Türksat 2026 değişikliği sonrası TKGS, otomatik ve manuel arama adımları, menü görselleri.",
  "text": "Toshiba TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) Toshiba TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Toshiba TV'de uydu kanal arama nasıl yapılır? Toshiba TV'de TKGS güncellemesi nerede? Toshiba TV'de kanallar Türksat değişikliğinden sonra gitti, ne yapmalı?"
 },
 {
  "title": "Uydu Frekans Ayarları 2026: Türksat Şebeke Arama Frekansı",
  "url": "turksat-sebeke-arama-frekansi.html",
  "desc": "Uydu frekans ayarları 2026: Türksat 42°E şebeke arama frekansı 12380 MHz Dikey 27500 (FEC 3/4), yedek 12423 MHz Dikey 27500. Kanal arama adımları.",
  "text": "Uydu Frekans Ayarları 2026: Türksat Şebeke Arama Frekansı Türksat 42°E Şebeke Arama Değerleri Şebeke Araması Nasıl Yapılır? Polarizasyona Dikkat"
 },
 {
  "title": "Türksat Uydu Değişikliği (16 Ağustos 2026): Kanallar Nasıl Geri Gelir?",
  "url": "turksat-uydu-degisikligi-2026.html",
  "desc": "Türksat 3A'daki yayınlar 16 Ağustos 2026'da yeni uydulara taşındı. Kanallarınız gittiyse TKGS veya şebeke araması ile geri getirin. Samsung, LG, Vestel ve diğer markalar için rehberler.",
  "text": "Türksat Uydu Değişikliği (16 Ağustos 2026): Kanallar Nasıl Geri Gelir? Ne Değişti? Çanak Antenimi Değiştirmem Gerekiyor mu? Kanallar Nasıl Geri Gelir? 1. TKGS destekli cihazlar 2. TKGS olmayan cihazlar: Şebeke araması Televizyon Markanıza Göre Adım Adım Ayrı Uydu Alıcısı Kullanıyorsanız Hâlâ Kanal Gelmiyorsa Sık Sorulan Sorular Türksat uydu değişikliği ne zaman oldu? Uydu değişikliği için çanak antenimi çevirmem gerekiyor mu? Uydu değişikliğinden sonra kanallar nasıl geri gelir?"
 },
 {
  "title": "TV Duvar Montajı: Doğru Yükseklik, Aparat Seçimi ve VESA Ölçüsü",
  "url": "tv-duvar-montaji.html",
  "desc": "Televizyon duvara kaç cm yükseğe asılır? VESA ölçüsüne göre TV duvar montaj aparatı seçimi, duvar tipine göre vidalama ve kabloların gizlenmesi.",
  "text": "TV Duvar Montajı: Doğru Yükseklik, Aparat Seçimi ve VESA Ölçüsü Televizyon Kaç cm Yükseğe Asılmalı? VESA Ölçüsü ve Aparat Seçimi Duvar Tipine Göre Montaj Kabloları Gizlemek Sık Sorulan Sorular Televizyon duvara kaç cm yükseğe asılmalı? VESA ölçüsü nedir? Alçıpan duvara televizyon asılır mı?"
 },
 {
  "title": "Televizyonumda Uydu Alıcısı Var mı? DVB-S2 Nedir?",
  "url": "tv-uydu-alicisi-var-mi.html",
  "desc": "Televizyonunuzda dahili uydu alıcısı (DVB-S2) olup olmadığını nasıl anlarsınız? Arka paneldeki girişler, model özellikleri ve DVB-S2'nin anlamı.",
  "text": "Televizyonumda Uydu Alıcısı Var mı? DVB-S2 Nedir? DVB-S2 Nedir? Arka Paneldeki Girişlere Bakın Menüden Kontrol Uydu Alıcısı Yoksa Sık Sorulan Sorular DVB-S2 nedir? Televizyonumda uydu alıcısı olduğunu nasıl anlarım? Uydu alıcısı olmayan televizyonda uydu kanalları izlenir mi?"
 },
 {
  "title": "Televizyonda Uydu Kanal Arama: Samsung, LG, Vestel, Arçelik, Beko",
  "url": "tv-uydu-kanal-arama.html",
  "desc": "Samsung, LG, Vestel, Arçelik ve Beko televizyonlarda uydu kanal arama nasıl yapılır? Türksat ayarları, LNB değerleri ve sık yapılan hatalar.",
  "text": "Televizyonda Uydu Kanal Arama: Samsung, LG, Vestel, Arçelik, Beko Tüm Markalarda Geçerli Ayarlar Markanıza Özel Ayrıntılı Rehberler Samsung LG Vestel, Arçelik, Beko, Grundig Sık Yapılan Hatalar Sık Sorulan Sorular Televizyonda uydu kanal arama nasıl yapılır? Uydu cihazı olmadan televizyonda kanal izlenir mi? Kanal aramada hiç kanal bulunmuyor, neden?"
 },
 {
  "title": "Uydu Alıcısı (Uydu Cihazı) Kurulumu Adım Adım",
  "url": "uydu-alicisi-kurulumu.html",
  "desc": "Uydu alıcısı nasıl kurulur? Kablo ve HDMI bağlantısı, ilk kurulum sihirbazı, TKGS ve Türksat ayarları, uydu cihazı güncelleme ve sık yapılan hatalar.",
  "text": "Uydu Alıcısı (Uydu Cihazı) Kurulumu Adım Adım 1. Bağlantılar 2. İlk Kurulum Sihirbazı 3. Kanallar Gelmezse Uydu Cihazı Güncelleme Sık Yapılan Hatalar Sık Sorulan Sorular Uydu alıcısı nasıl kurulur? Uydu cihazı kurdum ama ekranda sinyal yok yazıyor, neden? Uydu cihazı güncelleme nasıl yapılır?"
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
  "title": "Uydudan Radyo Nasıl Dinlenir? Türksat Radyo Kanalları",
  "url": "uydudan-radyo-dinleme.html",
  "desc": "Televizyondan veya uydu alıcısından Türksat radyo kanalları nasıl dinlenir? Radyo kanallarını arama, radyo listesine geçme ve bulunamayan radyolar için çözüm.",
  "text": "Uydudan Radyo Nasıl Dinlenir? Türksat Radyo Kanalları Radyo Kanallarına Nasıl Geçilir? Radyolar Listede Yoksa Belirli Bir Radyonun Frekansı Sık Sorulan Sorular Televizyondan uydu radyosu nasıl dinlenir? Uydu radyo kanalları listede yok, ne yapmalıyım? Uydu radyo frekanslarını nereden bulurum?"
 },
 {
  "title": "Vestel TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026)",
  "url": "vestel-tv-uydu-kanal-arama.html",
  "desc": "Vestel televizyonda uydu kanal arama ve şebeke arama nasıl yapılır? Türksat 2026 değişikliği sonrası TKGS, otomatik ve manuel arama adımları, menü görselleri.",
  "text": "Vestel TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) Vestel TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Vestel TV'de TKGS güncellemesi nasıl yapılır? Vestel TV'de kanal arama nasıl yapılır? Vestel TV'de kanal sıralaması bozuldu, nasıl düzelir?"
 },
 {
  "title": "Xiaomi TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026)",
  "url": "xiaomi-tv-uydu-kanal-arama.html",
  "desc": "Xiaomi televizyonda uydu kanal arama ve şebeke arama nasıl yapılır? Türksat 2026 değişikliği sonrası TKGS, otomatik ve manuel arama adımları, menü görselleri.",
  "text": "Xiaomi TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: Otomatik Kanal Arama Yöntem 2: Şebeke Araması (Manuel) Xiaomi TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Xiaomi TV'de uydu kurulumu nasıl yapılır? Xiaomi TV Box'ta uydu kanalları var mı? Xiaomi TV'de Türksat 4A uydu ekleme nasıl yapılır?"
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
  "text": "Yardım ve Sık Sorulan Sorular - Çankaya Uydu Servisi TV Markanıza Göre Kanal Arama (Türksat 2026)"
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

// Hizmetlerimiz: a menu link like hizmetlerimiz.html#tv-montaji opens that tab (accordion on phones)
(function () {
	var SERVICES = ['canak-anten', 'merkezi-uydu-sistemi', 'internet-kablo', 'tv-montaji', 'uydu-cihazi', 'servis-destek'];
	var tabs = document.querySelector('.responsive-tabs');
	if (!tabs) return;

	function openFromHash(tries) {
		var index = SERVICES.indexOf(window.location.hash.slice(1).split('|')[0]);
		if (index < 0) return;
		var items = tabs.querySelectorAll('.resp-tab-item');
		var headers = tabs.querySelectorAll('.resp-accordion');
		// the template initialises the tabs plugin on load, wait for it
		if (!items.length || !headers.length) {
			if (tries < 40) setTimeout(function () { openFromHash(tries + 1); }, 100);
			return;
		}
		var item = items[index];
		var header = headers[index];
		var phone = item.offsetParent === null;
		var target = phone ? header : item;
		if (!target.classList.contains('resp-tab-active')) window.jQuery(target).trigger('click');
		// the tabs plugin appends its own "|..." part to the address, keep it clean
		if (window.history && history.replaceState) history.replaceState(null, '', '#' + SERVICES[index]);
		// scroll after the template's own load-time scrolling has finished
		// the template scrolls <body>, not the window, so let the browser find the scroller
		setTimeout(function () {
			var navbar = document.querySelector('.rd-navbar-fixed .rd-navbar-panel, .rd-navbar-static');
			var el = phone ? header : tabs;
			el.style.scrollMarginTop = (navbar ? navbar.getBoundingClientRect().height + 16 : 100) + 'px';
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}, 350);
		// close the phone menu if the link was picked from it while already on this page
		var toggle = document.querySelector('.rd-navbar-toggle.active');
		if (toggle) toggle.click();
	}

	window.addEventListener('load', function () { openFromHash(0); });
	window.addEventListener('hashchange', function () { openFromHash(0); });
})();

// Phone menu: tapping "Hizmetlerimiz" or "Yardım" opens its sub-topics under it instead of leaving the page
(function () {
	document.addEventListener('click', function (e) {
		var link = e.target.closest && e.target.closest('.rd-navbar-fixed .rd-navbar-submenu > .rd-nav-link');
		if (!link) return;
		var toggle = link.parentNode.querySelector(':scope > .rd-navbar-submenu-toggle');
		if (!toggle) return;
		e.preventDefault();
		toggle.click();
	}, true);
})();
