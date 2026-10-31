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
  "desc": "Çankaya Uydu Servisi: Dikmen merkezli çanak anten kurulumu, bireysel ve merkezi uydu arızası, internet kablosu çekimi. Ankara Çankaya: 0553 450 20 33",
  "text": "Çankaya'da Çanak Anten Kurulumu ve Uydu Arıza Servisi Çankaya'da Çanak Anten ve Uydu Hizmetlerimiz Bireysel Çanak Anten Kurulum ve Arıza Merkezi Uydu Sistemi Arıza ve Kurulum İnternet Kablosu Çekimi Hizmet Bölgelerimiz Yardım Konuları"
 },
 {
  "title": "Altus TV Uydu Kanal Arama (Türksat 2026)",
  "url": "altus-tv-uydu-kanal-arama.html",
  "desc": "Altus TV'de uydu kanal arama: Kaynak Ayarları'ndan otomatik arama, TKGS'yi kapatıp elle şebeke araması ve Türksat 2026 sonrası frekanslar.",
  "text": "Altus TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) Menünüz Hangisi? (Arçelik Grubu Menü Tipleri) Altus TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Altus TV'de uydu ayarı nasıl yapılır? Altus TV hangi firmanın? Altus TV'de TKGS nasıl kapatılır?"
 },
 {
  "title": "Ankara Çanak Anten Açısı (Türksat 42°E)",
  "url": "ankara-canak-anten-acisi.html",
  "desc": "Ankara'da Türksat 42° Doğu için çanak anten açısı: elevasyon yaklaşık 43°, azimut 166° (pusulada ~160°), LNB açısı ~11°. Adım adım ayar rehberi.",
  "text": "Ankara Çanak Anten Açısı: Türksat 42° Doğu Ayar Değerleri Ankara İçin Türksat 42°E Ayar Değerleri Elevasyon Açısı Nasıl Ayarlanır? Azimut (Yön) Nasıl Bulunur? LNB Açısı (Skew) Adım Adım Ayar Sık Sorulan Sorular Ankara'da çanak anten hangi yöne bakmalı? Ankara'da çanak anten elevasyon açısı kaç derece? Çanak anten açısı biraz kayarsa ne olur?"
 },
 {
  "title": "Arçelik TV Uydu Kanal Arama (Türksat 2026)",
  "url": "arcelik-tv-uydu-kanal-arama.html",
  "desc": "Arçelik TV'de Kaynak Ayarları, Türksat TKGS ayarları ve elle kanal arama: menü tipinize göre yol ve Türksat 2026 sonrası şebeke arama değerleri.",
  "text": "Arçelik TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) Menünüz Hangisi? (Arçelik Grubu Menü Tipleri) Arçelik TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Arçelik TV'de uydu kanal arama nasıl yapılır? Arçelik TV'de kanallar Türksat değişikliğinden sonra gelmiyor, ne yapmalı? Arçelik Google TV'de kanal tarama nerede?"
 },
 {
  "title": "Beko TV Uydu Kanal Arama (Türksat 2026)",
  "url": "beko-tv-uydu-kanal-arama.html",
  "desc": "Beko TV'de uydu kanal arama: Kaynak Ayarları, TKGS ve elle kanal arama adımları, menü tipleri ve Türksat 2026 sonrası şebeke arama değerleri.",
  "text": "Beko TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) Menünüz Hangisi? (Arçelik Grubu Menü Tipleri) Beko TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Beko TV'de uydu kanal arama nasıl yapılır? Beko kendinden uydulu TV'de manuel arama nasıl yapılır? Beko TV'de mevcut kanalları korumalı mıyım?"
 },
 {
  "title": "Çanak Anten Kaç cm Olmalı? Doğru Boyut Seçimi",
  "url": "canak-anten-kac-cm-olmali.html",
  "desc": "Çanak anten kaç cm olmalı? Ankara'da Türksat için tek dairede genellikle 60–80 cm yeterli. Merkezi sistem, ikinci uydu ve yağmurda kesinti için doğru boyut seçimi.",
  "text": "Çanak Anten Kaç cm Olmalı? Ankara İçin Doğru Boyut Ankara İçin Hangi Boyut? Büyük Çanağın Avantajı ve Dezavantajı Küçük Çanak Yeterli mi? Merkezi Sistemde Neden Daha Büyük Çanak? Boyuttan Önce Ayar Sık Sorulan Sorular Çanak anten kaç cm olmalı? Çanak anten büyüdükçe görüntü kalitesi artar mı? En küçük çanak anten kaç cm? Merkezi uydu sistemi için kaç cm çanak gerekir?"
 },
 {
  "title": "Çanak Anten Kurulum Kampanyası: Next Set + Kurulum 2500₺",
  "url": "canak-anten-kampanya.html",
  "desc": "Çanak anten set kurulumu kampanyası: 70 cm Next çanak, Next tekli LNB, 20 m Next kablo, montaj ayağı, kurulum dahil. Dikmen ve Çankaya'da balkon 2500₺, çatı 2700₺.",
  "text": "Çanak Anten Kurulum Kampanyası: Next Set + Kurulum 2500₺'den Çanak Anten Set Kurulumu: Malzeme + Kurulum Tek Fiyat Kampanya Fiyatları (Semtlere Göre) Sette Neler Var? Kurulumda Neler Yapılıyor? Nasıl Yararlanırım? Sık Sorulan Sorular Çanak anten kurulum fiyatı ne kadar? Kampanyalı çanak anten setinde neler var? Balkon ve çatı kurulumu fiyatı neden farklı? Kampanyalı kurulumda garanti var mı? Kampanya hangi semtlerde geçerli?"
 },
 {
  "title": "Çanak Anten Kurulumu Ankara: Dikmen ve Çankaya",
  "url": "canak-anten-kurulumu.html",
  "desc": "Çankaya Uydu Servisi ile çanak anten kurulumu: yer tespiti, montaj, Türksat 42°E yön ayarı, LNB ve kablo, kanal kurulumu. Dikmen ve Çankaya'da yerinde servis.",
  "text": "Çanak Anten Kurulumu: Dikmen, Çankaya ve Çevresi Kurulum Nasıl Yapılıyor? Hangi Çanak ve LNB? Apartmanlar İçin Merkezi Sistem Ücret ve Garanti Hizmet Bölgeleri ve Saatler Sık Sorulan Sorular Çanak anten kurulumu nasıl yapılır? Çanak anten kurulumu hangi bölgelerde yapılıyor? Çanak anten kurulum ücreti neye göre değişir? Kurulumdan sonra garanti var mı? Hafta sonu çanak anten kurulumu yapıyor musunuz?"
 },
 {
  "title": "Çanak Anten Nasıl Ayarlanır? Adım Adım",
  "url": "canak-anten-nasil-ayarlanir.html",
  "desc": "Çanak anten nasıl kurulur ve ayarlanır? Gerekli malzemeler, yer seçimi, Türksat 42°E için açı ve yön ayarı, LNB açısı ve kanal araması adım adım.",
  "text": "Çanak Anten Nasıl Ayarlanır? Gerekli Malzemeler Montaj Yeri Seçimi Çanak Anten Yönünün Ayarlanması Kablonun Çanak Antene ve Cihaza Bağlanması Sinyal Ayarı ve İnce Ayarlar Kanal Tarama ve Ayar Son Kontroller"
 },
 {
  "title": "Çanak Anten Nedir, Nasıl Çalışır?",
  "url": "canak-anten-nedir.html",
  "desc": "Çanak anten nedir, nasıl çalışır? Çanak ve LNB'nin görevi, Türksat yayınlarının alınması, çanak antenin avantajları ve dikkat edilmesi gerekenler.",
  "text": "Çanak Anten Nedir, Nasıl Çalışır? Çanak Antenin Yapısı Kurulum Kullanım Alanları Çanak Antenin Avantajları Dikkat Edilmesi Gerekenler Özet"
 },
 {
  "title": "Diğer Marka TV'lerde Uydu Kanal Arama (2026)",
  "url": "diger-marka-tv-uydu-kanal-arama.html",
  "desc": "Hi-Level, Axen, Telefunken, Onvo ve Sunny televizyonlarda uydu kanal arama ve TKGS: menü tipinize göre adımlar, şebeke araması değerleri (Türksat 2026).",
  "text": "Hi-Level, Axen, Telefunken, Onvo, Sunny TV Uydu Kanal Arama (2026) 1. Menü Tipinizi Belirleyin 2. Marka Notları Sunny Onvo Hi-Level Axen Telefunken 3. Şebeke Araması (Tüm Markalar) Diğer Markalar Sık Sorulan Sorular Hi-Level TV'de uydu ayarlama nasıl yapılır? Sunny TV'de uydu kurulumu nasıl yapılır? Onvo TV uydu görmüyor, ne yapmalıyım?"
 },
 {
  "title": "Digitürk Kanalları ve Kanal Numaraları",
  "url": "digiturk-kanal-listesi.html",
  "desc": "Digitürk kanalları ve kanal numaraları: TRT 1 23, ATV 25, TV8 28, tv100 37, beIN Sports 1 77, A Spor 88. Hangi kanal kaçıncı sırada, S Sport var mı?",
  "text": "Digitürk Kanalları ve Kanal Numaraları Popüler Kanallar Digitürk'te Kaçıncı Kanalda? Digitürk'te Var mı? Kanal Numarası Kutudan Nasıl Öğrenilir? Tüm Digitürk Kanalları (Kategorilere Göre) Ulusal Kanallar Dizi Kanalları Film Kanalları Haber Kanalları Spor Kanalları Yaşam Kanalları Belgesel Kanalları Çocuk Kanalları Müzik Kanalları Uluslararası Kanallar Radyo Kanalları Sık Sorulan Sorular Digitürk'te TRT 1 kaçıncı kanalda? Digitürk'te ATV kaçıncı kanalda? Digitürk'te TV8 kaçıncı kanalda? Digitürk'te A2 kaçıncı kanalda? Digitürk'te tv100 var mı, kaçıncı kanalda? Digitürk'te beIN Sports 1 kaçıncı "
 },
 {
  "title": "DiSEqC Nedir, Ne Olmalı? 1.0, 1.1 ve Port Ayarı",
  "url": "diseqc-nedir.html",
  "desc": "DiSEqC nedir, ne olmalı? Tek çanakta kapalı, DiSEqC anahtarlı sistemde Türksat'ın bağlı olduğu port. DiSEqC 1.0, 1.1, 1.2 farkları ve yanlış ayarın belirtileri.",
  "text": "DiSEqC Nedir, Ne Olmalı? DiSEqC 1.0, 1.1 ve Port Ayarı DiSEqC Ne Zaman Gerekir? DiSEqC Ne Olmalı? (Duruma Göre Ayar) DiSEqC 1.0, 1.1 ve 1.2 Farkı Yanlış DiSEqC Ayarının Belirtileri Merkezi Uydu Sisteminde DiSEqC Sık Sorulan Sorular DiSEqC ne olmalı? DiSEqC 1.0 ile 1.1 arasındaki fark nedir? Yanlış DiSEqC portu seçilirse ne olur? Merkezi uydu sisteminde DiSEqC açık mı olmalı?"
 },
 {
  "title": "Çanak Anten ve Uydu Sık Sorulan Sorular",
  "url": "faq.html",
  "desc": "134 soru-cevap: Türksat kanal arama, TKGS, çanak anten ayarı, sinyal yok, LNB, DiSEqC, merkezi sistem, Digitürk DMDU LNB ve hata kodları. Çankaya Uydu, Ankara.",
  "text": "Çanak Anten ve Uydu: Sıkça Sorulan Sorular Türksat, Kanal Arama ve TKGS Çanak Anten Kurulumu ve Ayarı Sinyal Yok ve Arızalar LNB, Kablo ve Bağlantılar Merkezi Uydu Sistemi Televizyon ve Uydu Alıcısı Digitürk Bakım ve Ömür Servis ve Hizmetlerimiz"
 },
 {
  "title": "Galeri: Çanak Anten Kurulumu ve Ürünler",
  "url": "gallery.html",
  "desc": "Çanak anten kurulumu ile kullandığımız ürünler: merkezi uydu sistemi (multiswitch), çanak ve LNB, uydu alıcısı, internet kablosu ve Android TV Box.",
  "text": "Galeri: Çanak Anten Kurulumu ve Ürünler Kurulumlar ve Kullandığımız Ürünler Çanak Anten LNB Merkezi Uydu Sistemi Uydu Alıcıları ve Android Box Kablo"
 },
 {
  "title": "Grundig TV Uydu Kanal Arama (Türksat 2026)",
  "url": "grundig-tv-uydu-kanal-arama.html",
  "desc": "Grundig TV'de uydu kanal ve şebeke arama: Arçelik grubu menülerinde TKGS, otomatik ve elle arama adımları, Türksat 2026 sonrası değerler.",
  "text": "Grundig TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) Menünüz Hangisi? (Arçelik Grubu Menü Tipleri) Grundig TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Grundig TV'de uydu kanal arama nasıl yapılır? Grundig ve Arçelik menüleri aynı mı? Grundig Google TV'de kanal tarama nerede?"
 },
 {
  "title": "Hakkımızda: Tuncay Özer",
  "url": "hakkimizda.html",
  "desc": "Tuncay Özer 2008'den beri elektrik-elektronik alanında; Çankaya ve çevresinde çanak anten, merkezi uydu sistemi ve TV montajı işlerini bizzat yapıyor.",
  "text": "Hakkımızda: Tuncay Özer, Çankaya Uydu Sistemleri Merhaba, ben Tuncay Özer Teknisyen"
 },
 {
  "title": "Hisense TV Uydu Kanal Arama (Türksat 2026)",
  "url": "hisense-tv-uydu-kanal-arama.html",
  "desc": "Hisense VIDAA TV'de uydu otomatik tarama ve manuel ağ araması; listede Türksat adı, LNB ayarı ve Türksat 2026 sonrası 12380 MHz değerleri.",
  "text": "Hisense TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: Otomatik Kanal Arama Yöntem 2: Şebeke Araması (Manuel) Hisense TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Hisense TV'de uydu ayarlama nasıl yapılır? Hisense TV'de manuel uydu araması nasıl yapılır? Hisense TV'de Türksat listede yok, ne yapmalıyım?"
 },
 {
  "title": "Hizmet Bölgeleri ve Servis Ücreti: Dikmen, Çankaya",
  "url": "hizmet-bolgeleri.html",
  "desc": "Çankaya Uydu hizmet bölgeleri ve servis ücreti: Dikmen, Ayrancı, Balgat, Öveçler 700 TL; Bahçelievler, Emek, Maltepe, Gaziosmanpaşa, Cebeci 800 TL.",
  "text": "Hizmet Bölgelerimiz: Dikmen, Ayrancı, Balgat ve Çevresi Servis Ücreti (Semtlere Göre) Dikmen Ayrancı Balgat Öveçler Sokullu Keklikpınarı İlker Bahçelievler Emek Maltepe Mebusevleri Gaziosmanpaşa Esat Seyranbağları Cebeci Çalışma Saatlerimiz Sık Sorulan Sorular Hangi semtlere servis veriyorsunuz? Servis ücreti ne kadar? Çalışma saatleriniz nedir? Merkezi uydu sistemi arızasına geliyor musunuz?"
 },
 {
  "title": "Çanak Anten, Merkezi Uydu ve İnternet Kablosu",
  "url": "hizmetlerimiz.html",
  "desc": "Çanak anten kurulumu, bireysel ve merkezi uydu sistemi arızası, internet kablosu çekimi. Dikmen, Ayrancı, Balgat, Öveçler, Emek ve Çankaya geneli.",
  "text": "Hizmetlerimiz: Çanak Anten, Merkezi Uydu ve İnternet Kablosu Bireysel Çanak Anten Kurulum ve Arıza Servisi Neler sunuyoruz? Neden Çankaya Uydu? Merkezi Uydu Sistemi Kurulum ve Arıza Neler sunuyoruz? Avantajları Nerelerde kullanılır? İnternet Kablosu Çekimi Neler sunuyoruz? Duvara TV Montajı Montajda dikkat ettiklerimiz Uydu Alıcısı ve Android Box Satışı Ürünler Hizmet Sonrası Destek ve Garanti Garanti kapsamı İletişime Geçin"
 },
 {
  "title": "İletişim: 0553 450 20 33",
  "url": "iletisim.html",
  "desc": "Çankaya Uydu Sistemleri, Dikmen/Çankaya. Telefon ve WhatsApp: 0553 450 20 33. Hafta içi 09:00–20:00, hafta sonu 11:00–18:00. Arızanın fotoğrafını gönderin.",
  "text": "İletişim: Çanak Anten Servisi, Dikmen / Çankaya Bize Ulaşın Mesaj Gönderin Adres Çalışma Saatleri Hizmet Bölgeleri Sosyal Medya"
 },
 {
  "title": "İnternet Kablosu Çekimi: Krone Kutusundan Daireye",
  "url": "internet-kablosu-cekimi.html",
  "desc": "İnternet kablosu çekimi: bina girişindeki Krone kutusundan daireye CAT6 hat, modemden odalara kablo ve priz. Dikmen, Ayrancı, Balgat ve Çankaya'da servis.",
  "text": "İnternet Kablosu Çekimi: Krone Kutusundan Daireye ve Odalara Krone Kutusu Nedir? Ne Zaman Yeni Kablo Gerekir? Neler Yapıyoruz? Kablo mu, Wi-Fi mı? Çanak Anten Kablosuyla Birlikte Hangi Bölgelerde? Sık Sorulan Sorular İnternet kablosunu kim çeker, sağlayıcı mı? Eski telefon kablosu interneti yavaşlatır mı? Hangi kablo kullanılıyor? Modemden odalara kablo çekiyor musunuz?"
 },
 {
  "title": "Uydu Kanal Sıralaması Bozuldu: Nasıl Düzeltilir?",
  "url": "kanal-siralamasi-bozuldu.html",
  "desc": "Uydu kanal sıralaması bozuldu mu? TKGS ile standart sıraya dönme, kanal taşıma, favori listesi ve kanal aramasından sonra karışan listeyi düzeltme yolları.",
  "text": "Uydu Kanal Sıralaması Bozuldu: Nasıl Düzeltilir? 1. TKGS ile Standart Sıraya Dönün (En Kolay Yol) 2. Kanal Düzenleme ile Elle Sıralayın 3. Favori Listesi Oluşturun Kanallar Çift Göründüyse Sık Sorulan Sorular Uydu kanal sıralaması neden bozulur? Kanal sıralamasını eski haline nasıl getiririm? Kanal listesinde aynı kanal iki kez çıkıyor, neden?"
 },
 {
  "title": "LG TV Uydu Kanal Arama (Türksat 2026)",
  "url": "lg-tv-uydu-kanal-arama.html",
  "desc": "LG TV'de (webOS) uydu kanal ve şebeke arama: Kanal Ayarı → Otomatik Ayar, Manuel Ayarlama ve Türksat 2026 sonrası 12380 MHz Dikey değerleri.",
  "text": "LG TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) LG TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular LG TV'de uydu kanal arama nasıl yapılır? LG TV'de kanallar Türksat değişikliğinden sonra gitti, neden? LG TV'de kanal ayarları menüsü nerede?"
 },
 {
  "title": "LNB Frekansı Kaç Olmalı? 9750/10600 Ayarı",
  "url": "lnb-frekansi-kac-olmali.html",
  "desc": "LNB frekansı kaç olmalı? Üniversal LNB için 9750/10600 MHz, 22 kHz otomatik, LNB gücü açık. LNB ayarlarının anlamı ve yanlış ayarın belirtileri.",
  "text": "LNB Frekansı Kaç Olmalı? Doğru LNB Ayarları (9750/10600) Türkiye İçin Doğru LNB Ayarları Bu Değerler Ne Anlama Geliyor? Yanlış Ayarın Belirtileri Merkezi Sistemlerde Dikkat Sık Sorulan Sorular LNB frekansı kaç olmalı? LNB gücü açık mı kapalı mı olmalı? 22 kHz ne işe yarar?"
 },
 {
  "title": "LNB Nedir? Çeşitleri ve Arıza Belirtileri",
  "url": "lnb-nedir.html",
  "desc": "LNB nedir, ne işe yarar? Single, twin, quad ve quattro LNB farkları, LNB arızasının belirtileri ve LNB değişimi hakkında bilmeniz gerekenler.",
  "text": "LNB Nedir? Çeşitleri ve LNB Arızası Nasıl Anlaşılır? LNB Nasıl Çalışır? LNB Çeşitleri LNB Arızasının Belirtileri LNB Değişimi Sık Sorulan Sorular LNB ne işe yarar? LNB bozulursa ne olur? Twin ve quad LNB farkı nedir?"
 },
 {
  "title": "Merkezi Uydu Sistemi Nedir, Nasıl Çalışır?",
  "url": "merkezi-uydu-sistemi-nedir.html",
  "desc": "Merkezi uydu sistemi nedir, nasıl çalışır? Apartman ve sitelerde tek çanakla tüm dairelere yayın, multiswitch, quattro LNB ve sık görülen arızalar.",
  "text": "Merkezi Uydu Sistemi Nedir? Apartmanlarda Nasıl Çalışır? Merkezi Sistemin Parçaları Kaç Daireye Göre Kurulur? Avantajları Sık Görülen Arızalar Sık Sorulan Sorular Merkezi uydu sistemi nedir? Merkezi sistemde tüm dairelerde yayın yok, neden? Multiswitch nedir?"
 },
 {
  "title": "Merkezi Uydu Sisteminde TV Kurulumu",
  "url": "merkezi-uydu-tv-kurulumu.html",
  "desc": "Merkezi uydu sisteminde TV nasıl bağlanır? Uydu prizinden televizyona bağlantı, LNB ve unicable ayarları, kanal araması ve \"sinyal yok\" çözümü.",
  "text": "Merkezi Uydu Sisteminde TV Kurulumu ve Kanal Arama 1. Doğru Prize ve Doğru Girişe Bağlayın 2. Ayarları Seçin Tek Kablolu (Unicable) Sistemler 3. Kanal Araması Merkezi Sistemde \"Sinyal Yok\" Diyorsa Sık Sorulan Sorular Merkezi uydu sistemi TV'ye nasıl bağlanır? Merkezi sistemde LNB ayarı ne olmalı? Merkezi sistemde iki televizyonu aynı prize bağlayabilir miyim?"
 },
 {
  "title": "Philips TV Uydu Kanal Arama (Türksat 2026)",
  "url": "philips-tv-uydu-kanal-arama.html",
  "desc": "Philips TV'de Uydu Kurulumu ile kanal arama, manuel transponder girişi ve Türksat bulunup kanal gelmemesi sorununun çözümü (Türksat 2026).",
  "text": "Philips TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: Otomatik Kanal Arama Yöntem 2: Şebeke Araması (Manuel) Philips TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Philips TV'de uydu kanal arama nasıl yapılır? Philips TV Türksat'ı buluyor ama kanal getirmiyor, neden? Philips TV'de manuel transponder nasıl girilir?"
 },
 {
  "title": "Gizlilik Politikası",
  "url": "privacy-policy.html",
  "desc": "Çankaya Uydu Sistemleri web sitesinde hangi verilerin işlendiği, çerezler, Google reklam ölçümü ve KVKK kapsamındaki haklarınız.",
  "text": "Gizlilik Politikası"
 },
 {
  "title": "Regal TV Uydu Kanal Arama (Türksat 2026)",
  "url": "regal-tv-uydu-kanal-arama.html",
  "desc": "Regal TV'de TKGS güncellemesi ve manuel şebeke araması: Vestel altyapılı menülerde adım adım yol ve Türksat 2026 sonrası 12380 MHz değerleri.",
  "text": "Regal TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) Regal TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Regal TV'de kanal arama nasıl yapılır? Regal ve Vestel menüleri aynı mı? Regal TV TKGS destekliyor mu?"
 },
 {
  "title": "Rüzgârda Çanak Anten Kaydı: Ne Yapmalı?",
  "url": "ruzgar-canak-anten-kaydi.html",
  "desc": "Fırtına veya sert rüzgârdan sonra uydu bozuldu, sinyal yok mu diyor? Çanak anten kaymasının belirtileri, güvenli kontroller ve kalıcı çözüm.",
  "text": "Rüzgârda Çanak Anten Kaydı: Uydu Sinyali Gitti, Ne Yapmalı? Belirtiler Güvenli Kontroller Kalıcı Çözüm Sık Sorulan Sorular Rüzgârdan sonra uydu neden gider? Rüzgârdan kayan çanak anteni kendim ayarlayabilir miyim? Çanak antenin rüzgârda kaymasını nasıl önlerim?"
 },
 {
  "title": "Samsung TV Uydu Kanal Arama (Türksat 2026)",
  "url": "samsung-tv-uydu-kanal-arama.html",
  "desc": "Samsung TV'de uydu kanal ve şebeke arama: Ayarlar → Yayın → Otomatik Ayarlama, Uzman Ayarları'ndan manuel tarama ve Türksat 2026 sonrası değerler.",
  "text": "Samsung TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) Samsung TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Samsung TV'de uydu kanal arama nasıl yapılır? Samsung TV'de Uzman Ayarları şifresi nedir? Samsung TV'de Türksat değişikliğinden sonra kanallar gelmiyor, ne yapmalıyım?"
 },
 {
  "title": "Şebeke Arama Nasıl Yapılır? Markalara Göre",
  "url": "sebeke-arama-nasil-yapilir.html",
  "desc": "Şebeke (ağ) araması nasıl yapılır? Türksat 42°E için 12380 MHz Dikey 27500 değeriyle tüm kanalları bulun; Samsung, LG, Vestel ve diğer markaların menü yolları.",
  "text": "Şebeke Arama Nasıl Yapılır? Tüm TV Markaları İçin Adım Adım (2026) Şebeke Arama Değerleri Adım Adım Şebeke Araması Markalara Göre Şebeke Araması Menü Yolu Şebeke Araması Kanal Bulmuyorsa Sık Sorulan Sorular Şebeke arama nedir? Şebeke arama frekansı kaç? Şebeke araması açık mı kapalı mı olmalı?"
 },
 {
  "title": "Sony TV Uydu Kanal Arama (Türksat 2026)",
  "url": "sony-tv-uydu-kanal-arama.html",
  "desc": "Sony Bravia (Google TV/Android TV) uydu kanal tarama ve manuel ağ araması; Türksat 2026 değişikliği sonrası 12380 MHz Dikey 27500 değerleri.",
  "text": "Sony TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: Otomatik Kanal Arama Yöntem 2: Şebeke Araması (Manuel) Sony TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Sony TV'de uydu kanal arama nasıl yapılır? Sony Bravia'da Türksat değişikliğinden sonra kanallar gitti, ne yapmalıyım? Sony TV'de kanallar nerede görünür?"
 },
 {
  "title": "TCL TV Uydu Kanal Arama (Türksat 2026)",
  "url": "tcl-tv-uydu-kanal-arama.html",
  "desc": "TCL Google TV'de uydu kanal tarama ve manuel ağ araması; kanalların Canlı TV'deki yeri ve Türksat 2026 sonrası güncel arama değerleri.",
  "text": "TCL TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: Otomatik Kanal Arama Yöntem 2: Şebeke Araması (Manuel) TCL TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular TCL TV'de uydu kanal arama nasıl yapılır? TCL Google TV'de uydu kanalları nerede? TCL TV'de Türksat kanalları eksik geliyor, ne yapmalı?"
 },
 {
  "title": "TKGS Nedir? Açma, Kapatma ve Güncelleme",
  "url": "tkgs-nedir.html",
  "desc": "TKGS (Türksat Kanal Güncelleme Sistemi) nedir, ne işe yarar? Televizyonda TKGS nasıl açılır, kapatılır ve güncellenir; TKGS güncelleme hatası çözümü.",
  "text": "TKGS Nedir? Nasıl Açılır, Kapatılır ve Güncellenir? TKGS Ne İşe Yarar? Televizyonumda TKGS Var mı? TKGS Nasıl Açılır ve Güncellenir? TKGS Ne Zaman ve Nasıl Kapatılır? TKGS Güncelleme Hatası Sık Sorulan Sorular TKGS nedir? TKGS açık mı olmalı kapalı mı? TKGS güncelleme nasıl yapılır?"
 },
 {
  "title": "Toshiba TV Uydu Kanal Arama (Türksat 2026)",
  "url": "toshiba-tv-uydu-kanal-arama.html",
  "desc": "Toshiba TV'de TKGS güncellemesi, klasik ve Google TV menülerinde kanal tarama, manuel şebeke araması ve Türksat 2026 sonrası değerler.",
  "text": "Toshiba TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) Toshiba TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Toshiba TV'de uydu kanal arama nasıl yapılır? Toshiba TV'de TKGS güncellemesi nerede? Toshiba TV'de kanallar Türksat değişikliğinden sonra gitti, ne yapmalı?"
 },
 {
  "title": "Türksat Şebeke Arama Frekansı 2026",
  "url": "turksat-sebeke-arama-frekansi.html",
  "desc": "Türksat 42°E şebeke arama frekansı: 12380 MHz Dikey 27500 (FEC 3/4); yedek 12423 MHz Dikey 27500 ve 12458 MHz Dikey 30000. Kanal arama adımları.",
  "text": "Türksat Şebeke Arama Frekansı (2026 Güncel) Türksat 42°E Şebeke Arama Değerleri Şebeke Araması Nasıl Yapılır? Polarizasyona Dikkat"
 },
 {
  "title": "Türksat Uydu Değişikliği 2026: Kanallar Nasıl Geri Gelir?",
  "url": "turksat-uydu-degisikligi-2026.html",
  "desc": "Türksat 3A yayınları 15–16 Ağustos 2026 gecesi aynı 42° Doğu'daki yeni uydulara taşındı. Çanak ayarı değişmez; kanalları TKGS veya şebeke aramasıyla geri getirin.",
  "text": "Türksat Uydu Değişikliği (16 Ağustos 2026): Kanallar Nasıl Geri Gelir? Ne Değişti? Çanak Antenimi Değiştirmem Gerekiyor mu? Kanallar Nasıl Geri Gelir? 1. TKGS destekli cihazlar 2. TKGS olmayan cihazlar: Şebeke araması Televizyon Markanıza Göre Adım Adım Ayrı Uydu Alıcısı Kullanıyorsanız Hâlâ Kanal Gelmiyorsa Sık Sorulan Sorular Türksat uydu değişikliği ne zaman oldu? Uydu değişikliği için çanak antenimi çevirmem gerekiyor mu? Uydu değişikliğinden sonra kanallar nasıl geri gelir?"
 },
 {
  "title": "TV Duvar Montajı: Yükseklik ve VESA Ölçüsü",
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
  "title": "TV'de Uydu Kanal Arama: Marka Marka Ayarlar",
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
  "title": "Uydu Kablosu Bağlama ve F Konnektör Takma",
  "url": "uydu-kablosu-nasil-baglanir.html",
  "desc": "Uydu anten kablosu nasıl bağlanır, F konnektör nasıl takılır, kablo nasıl ek yapılır? Doğru kablo seçimi ve sinyal kaybına yol açan hatalar.",
  "text": "Uydu Anten Kablosu Nasıl Bağlanır? F Konnektör Takma ve Ek Yapma Doğru Kablo Seçimi F Konnektör Nasıl Takılır? Kablo Nasıl Ek Yapılır? Sinyal Kaybettiren Hatalar Sık Sorulan Sorular Uydu kablosu nasıl ek yapılır? Uydu için hangi kablo kullanılır? F konnektör takınca neden sinyal yok?"
 },
 {
  "title": "Uydu Kanalları Gitti: Adım Adım Çözüm",
  "url": "uydu-kanallari-gitti.html",
  "desc": "Uydu kanalları gitti mi? Frekans değişikliği, TKGS güncellemesi ve kanal arama ile kaybolan kanalları geri getirmenin yolları. Hangi durumda servis gerekir?",
  "text": "Uydu Kanalları Gitti, Ne Yapmalıyım? Adım Adım Çözüm Önce Şunu Belirleyin: Hepsi mi Gitti, Bazıları mı? 1. TKGS ile Otomatik Güncelleme 2. Otomatik Kanal Arama 3. Kanal Sıralaması Bozulduysa 4. Hâlâ Gelmiyorsa Sık Sorulan Sorular Uydu kanalları neden gider? TKGS nedir? Kanal arama yaptım ama hiç kanal bulunmadı, neden?"
 },
 {
  "title": "Uydu Sinyal Güçlendirici İşe Yarar mı?",
  "url": "uydu-sinyal-guclendirici.html",
  "desc": "Uydu sinyal güçlendirici ve sinyal bulucu ne işe yarar, ne zaman gerekir? Hangi sorunları çözer, hangilerini çözmez? Profesyonel ölçüm cihazı farkı.",
  "text": "Uydu Sinyal Güçlendirici ve Sinyal Bulucu İşe Yarar mı? Uydu Sinyal Güçlendirici (Hat Yükseltici) Nedir? Ne Zaman İşe Yarar? Ne Zaman İşe Yaramaz? Uydu Sinyal Bulucu Sık Sorulan Sorular Uydu sinyal güçlendirici işe yarar mı? Uydu sinyal bulucu nasıl kullanılır? Sinyal seviyesi yüksek ama görüntü donuyor, neden?"
 },
 {
  "title": "Uydu \"Sinyal Yok\" Hatası ve Çözümü",
  "url": "uydu-sinyal-yok-hatasi.html",
  "desc": "Televizyonda uydu \"sinyal yok\" uyarısı mı var? Kablo, LNB, çanak yönü ve merkezi sistem kaynaklı nedenler ile evde yapabileceğiniz kontroller.",
  "text": "Uydu \"Sinyal Yok\" Hatası Neden Olur, Nasıl Çözülür? 1. Önce Basit Kontroller 2. Kablo ve Konnektör Kontrolü 3. Çanak Anten Yönü Kaymış Olabilir 4. LNB Arızası 5. Apartmanda Merkezi Sistem Varsa Ne Zaman Teknik Servis Çağırmalı? Sık Sorulan Sorular Uydu sinyal yok hatası neden olur? Sadece bazı kanallarda sinyal yok, neden? Yağmurda sinyal gidiyor, sonra geliyor. Bu arıza mı?"
 },
 {
  "title": "Uydudan Radyo Nasıl Dinlenir? Türksat Radyoları",
  "url": "uydudan-radyo-dinleme.html",
  "desc": "Televizyondan veya uydu alıcısından Türksat radyo kanalları nasıl dinlenir? Radyo kanallarını arama, radyo listesine geçme ve bulunamayan radyolar için çözüm.",
  "text": "Uydudan Radyo Nasıl Dinlenir? Türksat Radyo Kanalları Radyo Kanallarına Nasıl Geçilir? Radyolar Listede Yoksa Belirli Bir Radyonun Frekansı Sık Sorulan Sorular Televizyondan uydu radyosu nasıl dinlenir? Uydu radyo kanalları listede yok, ne yapmalıyım? Uydu radyo frekanslarını nereden bulurum?"
 },
 {
  "title": "Vestel TV Uydu Kanal Arama (Türksat 2026)",
  "url": "vestel-tv-uydu-kanal-arama.html",
  "desc": "Vestel TV'de TKGS güncellemesi, otomatik kanal taraması ve TKGS kapalıyken manuel şebeke araması. Türksat 2026 değişikliği sonrası güncel değerler.",
  "text": "Vestel TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: TKGS ile Otomatik Güncelleme Yöntem 2: Otomatik Kanal Arama Yöntem 3: Şebeke Araması (Manuel) Vestel TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Vestel TV'de TKGS güncellemesi nasıl yapılır? Vestel TV'de kanal arama nasıl yapılır? Vestel TV'de kanal sıralaması bozuldu, nasıl düzelir?"
 },
 {
  "title": "Xiaomi TV Uydu Kanal Arama (Türksat 2026)",
  "url": "xiaomi-tv-uydu-kanal-arama.html",
  "desc": "Xiaomi TV'de uydu kanal tarama ve manuel ağ araması; uydu alıcısı kontrolü, TV Box farkı ve Türksat 2026 sonrası güncel değerler.",
  "text": "Xiaomi TV Uydu Kanal Arama ve Şebeke Arama (Türksat 2026) Başlamadan Önce Menü Yolu (Görselli) Yöntem 1: Otomatik Kanal Arama Yöntem 2: Şebeke Araması (Manuel) Xiaomi TV'de Sık Karşılaşılan Sorunlar Diğer Markalar Sık Sorulan Sorular Xiaomi TV'de uydu kurulumu nasıl yapılır? Xiaomi TV Box'ta uydu kanalları var mı? Xiaomi TV'de Türksat (42°E) uydusu nasıl eklenir?"
 },
 {
  "title": "Yağmurda ve Karda Uydu Neden Donar?",
  "url": "yagmurda-uydu-sinyali.html",
  "desc": "Yağmurda veya karda uydu yayını neden donar, sinyal neden gider? Normal kesinti ile arızanın farkı ve kalıcı çözüm için yapılması gerekenler.",
  "text": "Yağmurda ve Karda Uydu Neden Donar? Çözüm Önerileri Neden Olur? Normal mi, Arıza mı? Kalıcı Çözümler Sık Sorulan Sorular Yağmur yağınca uydu neden gidiyor? Karda uydu yayını neden donar? Yağmurda donmayı önlemek için ne yapılmalı?"
 },
 {
  "title": "Yardım: Uydu ve Çanak Anten Rehberleri",
  "url": "yardim.html",
  "desc": "Türksat 2026 değişikliği, şebeke arama, TKGS, marka marka kanal arama, sinyal yok hatası ve LNB ayarları için adım adım rehberler.",
  "text": "Uydu ve Çanak Anten Yardım Rehberleri TV Markanıza Göre Kanal Arama (Türksat 2026)"
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
		if (!target.classList.contains('resp-tab-active')) {
			// switch without the slide animation, so the layout is final before we scroll
			var $ = window.jQuery;
			var fxOff = $.fx.off;
			$.fx.off = true;
			$(target).trigger('click');
			$.fx.off = fxOff;
		}
		// the tabs plugin appends its own "|..." part to the address, keep it clean
		if (window.history && history.replaceState) history.replaceState(null, '', '#' + SERVICES[index]);
		// scroll after the template's own load-time scrolling; scrollIntoView finds the
		// right scroller (the template scrolls <html> or <body>)
		setTimeout(function () {
			// phones: fixed top bar; desktop: the slim sticky menu that appears after scrolling
			var panel = document.querySelector('.rd-navbar-fixed .rd-navbar-panel');
			var el = phone ? header : tabs;
			el.style.scrollMarginTop = (panel ? panel.getBoundingClientRect().height + 16 : 90) + 'px';
			el.scrollIntoView({ block: 'start' });
		}, 300);
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

// SSS: the tab plugin opens the first answer of every category; keep only the first category's open
(function () {
	if (!document.querySelector('.faq-group')) return;
	window.addEventListener('load', function () {
		var groups = document.querySelectorAll('.faq-group');
		for (var i = 1; i < groups.length; i++) {
			var head = groups[i].querySelector('.resp-accordion.resp-tab-active');
			var body = groups[i].querySelector('.resp-tab-content-active');
			if (head) head.classList.remove('resp-tab-active');
			if (body) { body.classList.remove('resp-tab-content-active'); body.style.display = 'none'; }
		}
	});
	// the plugin writes "#undefinedN" into the address on every click; drop it
	document.addEventListener('click', function (e) {
		if (!e.target.closest || !e.target.closest('.faq-group .resp-accordion')) return;
		setTimeout(function () {
			if (/^#undefined/.test(location.hash) && window.history && history.replaceState) history.replaceState(null, '', location.pathname + location.search);
		}, 0);
	});
})();

// İletişim: çalışma saatlerine göre (Ankara saati) "şu an açık/kapalı" bilgisi
(function () {
	var el = document.querySelector('[data-open-status]');
	if (!el || !window.Intl) return;
	var HOURS = { weekday: [9, 20], weekend: [11, 18] };
	var DAYS = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
	function update() {
		var parts = {};
		new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Istanbul', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false })
			.formatToParts(new Date()).forEach(function (p) { parts[p.type] = p.value; });
		var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(parts.weekday);
		var minutes = (parseInt(parts.hour, 10) % 24) * 60 + parseInt(parts.minute, 10);
		var range = function (d) { return (d === 0 || d === 6) ? HOURS.weekend : HOURS.weekday; };
		var today = range(day);
		if (minutes >= today[0] * 60 && minutes < today[1] * 60) {
			el.className = 'open-status is-open';
			el.textContent = 'Şu an çalışma saatlerimiz içindeyiz (bugün ' + today[1] + ':00\'e kadar)';
		} else {
			var nextDay = minutes < today[0] * 60 ? day : (day + 1) % 7;
			var when = nextDay === day ? 'bugün' : (nextDay === (day + 1) % 7 ? 'yarın' : DAYS[nextDay]);
			el.className = 'open-status is-closed';
			el.textContent = 'Şu an çalışma saatlerimiz dışındayız. Açılış: ' + when + ' ' + ('0' + range(nextDay)[0]).slice(-2) + ':00. WhatsApp\'tan mesaj bırakabilirsiniz.';
		}
		el.hidden = false;
	}
	update();
	setInterval(update, 60000);
})();

// İletişim: harita yalnızca istenince Google'dan yüklenir
(function () {
	Array.prototype.forEach.call(document.querySelectorAll('.map-embed[data-map-src]'), function (box) {
		var btn = box.querySelector('.map-embed-btn');
		if (!btn) return;
		btn.addEventListener('click', function () {
			var frame = document.createElement('iframe');
			frame.src = box.getAttribute('data-map-src');
			frame.title = 'Çankaya Uydu Sistemleri harita konumu';
			frame.loading = 'lazy';
			frame.referrerPolicy = 'no-referrer-when-downgrade';
			box.innerHTML = '';
			box.appendChild(frame);
			box.classList.add('is-loaded');
		});
	});
})();

// Değer tabloları: telefonda kart görünümü için her hücreye sütun başlığını yaz
(function () {
	Array.prototype.forEach.call(document.querySelectorAll('table.values-table'), function (table) {
		var heads = Array.prototype.map.call(table.querySelectorAll('thead th'), function (th) { return th.textContent.trim(); });
		Array.prototype.forEach.call(table.querySelectorAll('tbody tr'), function (tr) {
			Array.prototype.forEach.call(tr.children, function (td, i) {
				if (heads[i]) td.setAttribute('data-label', heads[i]);
			});
		});
		table.classList.add('values-table-ready');
	});
})();

// "Başa dön" düğmesine ekran okuyucu etiketi
(function () {
	var tries = 0, t = setInterval(function () {
		var b = document.getElementById('ui-to-top');
		if (b) { b.setAttribute('aria-label', 'Sayfanın başına dön'); b.setAttribute('title', 'Sayfanın başına dön'); clearInterval(t); }
		if (++tries > 20) clearInterval(t);
	}, 250);
})();
