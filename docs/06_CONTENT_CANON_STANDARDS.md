# 06. CONTENT, CANON, ATTRIBUTION, AND SOURCE STANDARDS

**Loyiha nomi:** TOLKIEN OLAMI  
**Hujjat holati:** Faza 1 (Arxitektura va rejalashtirish)  
**Oxirgi yangilanish:** 2026-10-11

---

## 1. Ilmiy Xolislik va Matnshunoslik Falsafasi

Tolkienning Legendariumi (afsonalar olami) yagona, qotib qolgan monolit kitob emas, balki muallifning butun umri davomida (1914-yildan 1973-yilgacha) uzluksiz rivojlangan, oʻzgargan va qayta yozilgan murakkab qoʻlyozmalar majmuasidir.

Shu sababli, **TOLKIEN OLAMI ensiklopediyasi oʻta soddalashtirilgan "qora yoki oq" qoidalariga asoslanmaydi**. Biz afsonalarni oʻzboshimchalik bilan yagona "qonun" deb eʼlon qilmaymiz, balki manbalarning paydo boʻlish tarixi, matn variantlari va Christopher Tolkien tahrirlarini bir-biridan qatʼiy farqlab taqdim etamiz.

---

## 2. Manbalar Tasnifi va Matnshunoslik Lugʻati (Textual Provenance)

Ensiklopediya matnlarni sunʼiy va asossiz "kanon" ierarxiyasiga majburlamaydi. Buning oʻrniga har bir daʼvo quyidagi 4 ta filologik toifa (`textual_status`) boʻyicha tasniflanadi:

```
┌────────────────────────────────────────────────────────────────────────┐
│               MATNSHUNOSLIK VA PROVENANCE IERARXIYASI                  │
│                                                                        │
│  [1. author_published: MUALLIF HAYOTLIGIDAGI ASARLAR]                  │
│  • The Hobbit (1937), The Lord of the Rings (1954–1955)                │
│  • The Adventures of Tom Bombadil (1962), The Road Goes Ever On        │
│  ───────────────────────────────────────────────────────────────────  │
│  [2. posthumous_edited: CHRISTOPHER TOLKIEN TAHRIRLARI]                │
│  • The Silmarillion (1977), Unfinished Tales (1980)                    │
│  • The Children of Húrin (2007), Beren and Lúthien, Fall of Gondolin   │
│  ───────────────────────────────────────────────────────────────────  │
│  [3. draft_variant: MATN EVOLYUTSIYASI VA QORALAMALAR]                 │
│  • The History of Middle-earth (12 jild, HoME)                         │
│  • The Nature of Middle-earth (2021, Carl F. Hostetter)                │
│  • The Letters of J.R.R. Tolkien (1981, 2023 kengaytirilgan nashr)     │
│  ───────────────────────────────────────────────────────────────────  │
│  [4. disputed_variant: ZIDDIYATLI VA OʻZGARUVCHAN MATNLAR]             │
│  • Tolkien umri davomida fikrini o'zgartirgan yoki qat'iy yechimga     │
│    kelmagan masalalar (O'rklarning kelib chiqishi, Gil-galad nasabi)   │
└────────────────────────────────────────────────────────────────────────┘
```

> [!IMPORTANT]
> **Tashqi Adaptatsiyalar (Adaptations) Matn Kanoni EMAS:**  
> Peter Jackson kinofilmlari, Amazon seriallari, multfilmlar va video oʻyinlar matnshunoslik darajasiga kiritilmaydi va hech qachon matn maqomi (`textual_status`) hisoblanmaydi. Ular alohida `adaptations` obyektida tahlil qilinadi va UI-da faqat `--color-status-apocrypha` bezagi bilan tashqi taʼsir sifatida ajratib koʻrsatiladi.

---

## 3. Ziddiyatli Matn Variantlarini Koʻrsatish Qoidasi

Tolkien Legendariumida bir qator masalalar boʻyicha muallifning oʻzi bir necha xil qarashlarni qoldirgan. Ensiklopediya ularni yashirmaydi yoki birini soxta ravishda "yagona haqiqat" deb eʼlon qilmaydi:

### Misollar:
1. **Oʻrklarning kelib chiqishi (Origin of Orcs):**
   - *Silmarillion (1977)* talqini: Melkor tomonidan qiynoqqa solingan va buzilgan Elflar.
   - *Kechki qoralamalar (Morgoth's Ring)* talqini: Tolkien keyinchalik Elflarning bu darajada buzilishini teologik jihatdan rad etgan va Oʻrklarni odamlarning buzilishi yoki jonsiz hayvoniy maxluqlar deb hisoblashga moyil boʻlgan.
   - *Ensiklopediya talabi:* Maqolada ikkala variant ham oʻzining xronologik rivoji bilan yoritiladi.
2. **Gil-galadning nasabi:**
   - *Silmarillion*da Fingonning oʻgʻli deb olingan.
   - Tolkienning keyingi yozuvlarida Orodrethning oʻgʻli deb qayd etilgan (Christopher Tolkien keyinchalik buni Silmarilliondagi tahririy xato deb tan olgan).
   - *Ensiklopediya talabi:* Nasabnoma sahifasida asosiy chiziq va tahririy izoh yonma-yon beriladi.

---

## 4. Oksford Uslubidagi Iqtibos Standarti (Citation Model)

Har bir ensiklopedik fakt Oksford akademik qisqartmalari asosida aniq manba bilan tasdiqlanadi:

- **LotR:** *The Lord of the Rings* [Kitob raqami, Bob raqami: "Bob nomi"]  
  *Misol:* `[LotR, II, 2: "Elrond Kengashi"]`
- **Silm:** *The Silmarillion* [Boʻlim nomi, Bob raqami]  
  *Misol:* `[Silm, Quenta Silmarillion, XIX bob: "Beren va Lúthien haqida"]`
- **UT:** *Unfinished Tales* [Qism raqami, Boʻlim]  
  *Misol:* `[UT, 2-qism, IV: "Galadriel va Celeborn tarixi"]`
- **Letters:** *The Letters of J.R.R. Tolkien* [Xat raqami, Sana]  
  *Misol:* `[Letters, №131, Milton Waldmanga maktub, 1951]`
- **HoME:** *The History of Middle-earth* [Jild raqami, Sahifa]  
  *Misol:* `[HoME X, Morgoth's Ring, 5-qism, 384-bet]`

---

## 5. Oʻzbek Lotin Imloyisi va Nomlar Transliteratsiyasi

### 5.1. Diakritik Belgilarning Qatʼiy Saqlanishi
Tolkien oʻzi yaratgan tillar (Quenya, Sindarin, Khuzdul) uchun aniq fonetik diakritika tizimini ishlab chiqqan. Ushbu belgilar shaxsning talaffuzini belgilaydi:
- **ë (trema):** Soʻz oxirida yoki boʻgʻinda 'e' harfi jim qolmasdan oʻqilishini bildiradi (*Fëanor*, *Eärendil*, *Manwë*). Oʻzbek tilida bu belgilar aslo oʻchirib yuborilmaydi.
- **Urgu belgilari (á, é, í, ó, ú):** Choʻziq unlilarni ifodalaydi (*Númenor*, *Lórien*, *Húrin*).
- **Khuzdul va boshqa belgilar:** *Khazad-dûm*.

### 5.2. Oʻzbek Tilidagi Maxsus Harflar
Oʻzbek lotin alifbosidagi `oʻ` va `gʻ` harflari toʻgʻri tipografik belgilar bilan (U+02BB yoki standart teskari vergul bilan) yozilishi shart. Qidiruv tizimida bu harflar oddiy apostrof bilan ham avtomatik tenglashtiriladi.

### 5.3. Geografik va Qahramon Nomlarini Oʻgirish Siyosati
J.R.R. Tolkienning tarjimonlar uchun maxsus qoʻllanmasi (*Guide to the Names in The Lord of the Rings*) mezonlari asos qilib olinadi:
1. **Elvish va Qadimiy tillardagi nomlar:** Tarjima qilinmaydi, asl nusxada saqlanadi (*Gondolin*, *Nargothrond*, *Morgoth*, *Elrond*).
2. **Umumiy Vestron (Common Speech) nomlari:** 
   - Maqolaning asosiy sarlavhasida asl xalqaro nomi saqlanadi (*The Shire*, *Rivendell*, *Mirkwood*).
   - Qavs ichida va maqola matnida uning oʻzbekcha adabiy maʼnosi izohlab ketiladi (*Shire (Grafik/Viloyat)*, *Rivendell (Yoriqvodiy)*, *Mirkwood (Zulmatzor)*).

---

## 6. Illyustratsiyalar va Tasvirlar Siyosati: Sunʼiy Intellekt Soxtaliklariga Qarshi Qoida

> [!CAUTION]
> Ushbu qoida loyihaning eng muhim tahririyat filtri hisoblanadi.

1. **AI-generatsiya qilingan portretlar mutlaqo taqiqlanadi:**
   - Internetda tarqalgan Midjourney yoki boshqa AI modellarida yasalgan soxta "Elflar" yoki "Tolkien portretlari" aslo yuklanmaydi.
2. **Tasdiqlangan vizual manbalar:**
   - J.R.R. Tolkienning oʻzi chizgan chizmalar, gerblar va xaritalar (tegishli manba va huquqiy izoh bilan).
   - Jamoat mulki (public domain) boʻlgan yoki jamoa rassomlari tomonidan maxsus yaratilgan vektorli ramzlar va gerblar.
   - Rasmiy litsenziyasi boʻlmagan holatlarda, tasvir oʻrniga **yuqori darajadagi tipografik monogramma, SVG xarita yoki gerb belgisi** qoʻllaniladi.

---

## 7. Mualliflik Huquqi, Litsenziyalash va Manbalar Etiqodi (Copyright & Licensing Policy)

1. **Tolkien Merosi Mualliflik Huquqlari:**
   - J.R.R. Tolkienning kitoblari, xaritalari va Christopher Tolkien tomonidan nashr etilgan asarlarning matnlari *Tolkien Estate* va *HarperCollins Publishers* qonuniy mualliflik huquqi himoyasidadir.
   - «Fair dealing» yoki «fair use» doktrinalari asarlarni erkin nusxalash uchun universal avtomatik istisno hisoblanmaydi.
2. **Iqtibos Keltirish Mezonlari:**
   - Ensiklopediyada Tolkien matnlaridan faqat tahlil, ilmiy sharh va matnshunoslik uchun **zarur boʻlgan minimal hajmda** qisqa iqtiboslar olinadi. Har bir iqtibos bob va asar nomi bilan qatʼiy tasdiqlanadi. Asarlarning butun boblarini yoki uzun parchalarni ruxsatsiz joylash taqiqlanadi.
3. **Grafik va Kartografik Aktivlar:**
   - Internetda erkin koʻrinib turgan har qanday xarita yoki tasvirni jamoat mulki deb faraz qilish qatʼiyan man etiladi.
   - Faqat rasmiy litsenziyalangan, jamoat mulkiga (Public Domain) oʻtgan yoki loyiha uchun maxsus noldan chizilgan original vektor xaritalar va shajara sxemalaridan foydalaniladi. Barcha aktivlarning manbasi va mualliflik huquqi egasi metadatada ochiq qayd etiladi.
