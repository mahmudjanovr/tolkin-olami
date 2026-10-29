# 01. PRODUCT VISION AND ACCEPTANCE CRITERIA

**Loyiha nomi:** TOLKIEN OLAMI  
**Loyiha shiori:** *J.R.R. Tolkien afsonalar olamining raqamli ensiklopediyasi*  
**Hujjat holati:** Faza 1 (Arxitektura va rejalashtirish)  
**Oxirgi yangilanish:** 2026-10-11

---

## 1. Mahsulot Falsafasi va Maqsadi

**TOLKIEN OLAMI** — Jon Ronald Ruel Tolkien (J.R.R. Tolkien) tomonidan yaratilgan afsonalar olami (Legendarium: Arda, Oʻrta-yer va Valinor) boʻyicha oʻzbek tilidagi birinchi chuqur ilmiy, matnshunoslikka asoslangan va premium editorial raqamli ensiklopediyasidir.

### Nima uchun ushbu loyiha zarur?
Oʻzbek tilidagi internet makonida Tolkien merosi boʻyicha tizimli, ishonchli va chuqur manbalar mavjud emas. Bor maʼlumotlar ham asosan Gollivud filmlarining yuzaki talqinlari, tarqoq tarjimalar yoki sifatsiz fan-artlar bilan cheklangan. Ushbu loyiha Oʻzbekiston va butun dunyodagi oʻzbekzabon kitobxonlar, filologlar, tarjimonlar va fantastika ixlosmandlari uchun Oksford universiteti nashriyoti, Bodleian kutubxonasi va *The Paris Review* darajasidagi obroʻli, akademik jihatdan tekshirilgan maʼlumotlar manbai boʻlib xizmat qiladi.

---

## 2. Asosiy Qoidalar: Loyiha Nima EMAS?

Loyiha quyidagi 4 ta keng tarqalgan xatoga aslo yoʻl qoʻymaydi:

1. **Loyiha oddiy "fandom viki" (Fandom Wiki) EMAS:**
   - Reklamalar bilan toʻlib-toshgan, pala-partish tahrirlangan, kim nima xohlasa yozadigan wikia tizimi boʻlmaydi.
   - Har bir maqola qatʼiy tahririyat filtri, ilmiy tekshiruv va manba tasdigʻidan oʻtadi.
2. **Loyiha "bolalar fantaziya oʻyini portali" EMAS:**
   - Har tomondan yiltirab turuvchi neon chiroqlar, pikselli oʻyin elementlari, "daraja oshirish" (gamification) yoki bemaʼni animatsiyalar qatʼiyan taqiqlanadi.
3. **Loyiha "shablon landing page" yoki "generativ AI portali" EMAS:**
   - Sunʼiy intellekt tomonidan yaratilgan qolipdagi, shaxsiyatsiz, 3 ustunli zerikarli kartochkalar boʻlmaydi.
   - Asl bosma kitob sanʼati, qogʻoz va terilgan harflar nafosati his qilinishi shart.
4. **Loyiha sunʼiy intellekt tomonidan toʻqib chiqarilgan "soxta portretlar galereyasi" EMAS:**
   - Midjourney yoki Stable Diffusion orqali "Aragorn" yoki "Fëanor" deb chizdirilgan soxta rasmlar haqiqiy asar illyustratsiyasi sifatida taqdim etilmaydi.
   - Faqat Tolkienning oʻz qoʻli bilan chizilgan chizmalari, tasdiqlangan ilmiy xaritalar, jamoat mulki (public domain) asarlar yoki original vektorli tipografik belgilar ishlatiladi.

---

## 3. Vizual va Hissiy Yoʻnalish (Aesthetic Direction)

Loyiha dizayni **95% Qogʻoz, Siyoh va Neytral ohanglar**, hamda **5% Vazmin Tilla (Gold) urgʻulari** mutanosibligiga asoslanadi.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      TOLKIEN OLAMI RANGLAR FALSAFASI                     │
│                                                                         │
│  [95% ASOSIY GʻOYA]                                   [5% ZARGARLIK]     │
│  Qogʻoz va Siyoh (Paper & Ink)                        Vazmin Tilla       │
│  ─────────────────────────────                        ────────────       │
│  • Fon: Qadimiy qogʻoz, ilmiy nashr matolari          • Kamdan-kam       │
│  • Matn: Toʻq qora siyoh, chuqur neytrallar            hollarda:         │
│  • Boʻshliq: Saxiy tahririyat boʻshliqlari             Muhim ramzlar,    │
│  • Tipografiya: Klassik Oksford matbaachiligi         Kanonik nishonlar  │
└─────────────────────────────────────────────────────────────────────────┘
```

- **Qogʻoz va matbaa hissi:** Zamonaviy monoxrom minimalizm bilan qadimiy qoʻlyozma madaniyatining sintezi. Haddan tashqari sariq yoki kir pergament teksturalaridan qochiladi; toza, nozik, tabiiy paxta qogʻozi tuslari (`#F7F5F0`) asos qilib olinadi.
- **Tipografik ierarxiya:** Asosiy eʼtibor vizual shovqinga emas, balki matnning oʻqilish qulayligiga, harflar oraligʻiga (kerning/tracking) va sarlavhalarning vazminligiga qaratiladi.
- **Vazmin harakat (Cinematic Restraint):** Sahifani varaqlash, xaritada hududlarni ochish yoki nasabnomada avlodlarni koʻrsatishdagi harakatlar koʻzni toliqtirmaydi, aksincha ilmiy ekspeditsiya yoki kitob mutolaasi hissini beradi.

---

## 4. Qabul Qilish Mezonlari (Acceptance Criteria)

Har bir ishlab chiqiladigan boʻlim va xususiyat quyidagi qatʼiy talablarga javob bergandagina qabul qilinadi:

### 4.1. Tahririyat va Kontent Butunligi
- [ ] Barcha asosiy interfeys matnlari va maqolalar adabiy **Oʻzbek lotin** yozuvida boʻlishi kerak.
- [ ] Tolkienning kanonik nomlari (`Fëanor`, `Eärendil`, `Númenor`, `Lothlórien`) oʻzining xalqaro diakritik belgilari bilan aniq saqlanishi shart.
- [ ] Har bir jiddiy ensiklopedik daʼvo va tarixiy voqea orqasida Tolkien manbasi (masalan: *LotR, II, 2: "The Council of Elrond"*) koʻrsatilishi shart.
- [ ] Asosiy kanon, Christopher Tolkien tahrirlari, tarixiy qoralamalar va tashqi moslashuvlar (filmlar) qatʼiy ravishda bir-biridan ajratilgan boʻlishi lozim.

### 4.2. Axborot Arxitekturasi va Oʻzaro Bogʻliqlik (Interlinking)
- [ ] Birorta ham maqola "izolyatsiyalangan orol" (dead end) boʻlib qolmasligi kerak.
- [ ] Masalan, `Fëanor` maqolasidan uning nasabnomasi (`House of Finwë`), yaratgan narsalari (`Silmarillar`, `Tengwar`), yashagan joyi (`Formenos`), ishtirok etgan urushlari va manba kitobi (`Silmarillion`) ga ikki tomonlama ishlaydigan aloqalar mavjud boʻlishi shart.

### 4.3. Texnik Barqarorlik va Resurslarni Tejash
- [ ] Sayt toʻliq **Static-First** arxitekturasida qurilishi, asosiy kontent sahifalarida nol mijoz JavaScript (0 KB client JS) talab etilishi lozim.
- [ ] Atlas (Xarita) komponenti oʻlchami oʻzgarganda (resize), filtrlashda yoki yon panel ochilib-yopilganda **aslo qorayib yoki boʻshab qolmasligi** shart.
- [ ] Desktopda maʼlumot panellari xarita ustiga nooʻrin chiqib ketmasligi (overlap boʻlmasligi), CSS Grid orqali qatʼiy yonma-yon joylashishi shart.
- [ ] Ishlab chiqish va yigʻish jarayoni **8 GB RAM** chekloviga ega mashinada xotira yetishmovchiligisiz (OOM xatolarisiz) tezkor ishlashi shart.

### 4.4. Qidiruv va Mobil Foydalanish Qulayligi
- [ ] Qidiruv tizimi Oʻzbek lotin alifbosi oʻziga xosliklarini (`oʻ`, `gʻ`, tutuq belgisi) va Tolkien diakritikalarini (`ë`, `ä`, `ú`) avtomatik normalizatsiya qilishi, server yukisiz 50 ms ichida natija berishi shart.
- [ ] Mobil telefonlarda nasabnomalar va xaritalar toʻliq sensorli (touch) imo-ishoralar bilan qulay boshqarilishi, ekran chetidan chiqib ketmasligi shart.

### 4.5. Qulaylik (Accessibility) va Ishlash Tezligi
- [ ] WCAG 2.1 AA darajasidagi kontrast va toʻliq klaviatura boshqaruvi.
- [ ] Core Web Vitals boʻyicha oʻlchanadigan maqsadlar: LCP < 1.5s, CLS < 0.05, INP < 100ms.

---

## 5. Ochiq Qarorlar va Keyingi Qadamlar

- **Ochiq masala 1:** Oʻzbek tilidagi rasmiy tarjimalar yoʻqligi sababli ayrim geografik nomlar (masalan: *Shire*, *Rivendell*, *Mirkwood*) toʻgʻridan-toʻgʻri transliteratsiya qilinadimi yoki Tolkienning tarjimonlar uchun qoʻllanmasi (*Guide to the Names in The Lord of the Rings*) asosida ilmiy tarjima izohi bilan beriladimi? (Batafsil 06-hujjatda koʻrib chiqiladi).
- **Keyingi qadam:** Axborot arxitekturasi va URL marshrutlarini `docs/02_INFORMATION_ARCHITECTURE.md` da qatʼiylashtirish.
