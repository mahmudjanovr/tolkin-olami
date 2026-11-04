/**
 * TOLKIEN OLAMI — Universal Bogʻliqliklar va Havolalar Resolveri (Entity Link Resolver)
 *
 * Ushbu modul ensiklopediyadagi 11 ta axborot yoʻnalishi oʻrtasidagi oʻzaro bogʻliqliklarni (Knowledge Graph)
 * toʻgʻri va xavfsiz URL marshrutlariga oʻgiradi, singan havolalarning oldini oladi hamda
 * Oksford iqtiboslari uchun kitoblar bibliografiyasini muvofiqlashtiradi.
 */

export type EntityCollection =
  | 'characters'
  | 'peoples'
  | 'places'
  | 'events'
  | 'books'
  | 'languages'
  | 'genealogies'
  | 'cosmology'
  | 'articles';

export interface ResolvedEntityLink {
  id: string;
  name: string;
  href?: string;
  collection?: EntityCollection;
  isKnown: boolean;
}

export interface BookCitationMeta {
  id: string;
  title: string;
  author: string;
  year?: number;
  href?: string;
}

interface KnownEntityEntry {
  name: string;
  collection: EntityCollection;
  path?: string; // Maxsus URL (masalan atlas uchun ?joy=...)
}

/**
 * 1. Kanonik entitilar katalogi
 *
 * Oʻzbekcha toʻgʻri diakritik nomlar, toʻplam va URL yoʻnalishlari.
 */
const CANONICAL_REGISTRY: Record<string, KnownEntityEntry> = {
  // --- Qahramonlar (characters) ---
  feanor: { name: 'Fëanor', collection: 'characters' },
  finwe: { name: 'Finwë', collection: 'characters' },
  fingolfin: { name: 'Fingolfin', collection: 'characters' },
  finarfin: { name: 'Finarfin', collection: 'characters' },
  galadriel: { name: 'Galadriel', collection: 'characters' },
  miriel: { name: 'Míriel', collection: 'characters' },
  indis: { name: 'Indis', collection: 'characters' },
  nerdanel: { name: 'Nerdanel', collection: 'characters' },
  turgon: { name: 'Turgon', collection: 'characters' },
  fingon: { name: 'Fingon', collection: 'characters' },
  curufin: { name: 'Curufin', collection: 'characters' },
  celebrimbor: { name: 'Celebrimbor', collection: 'characters' },
  beren: { name: 'Beren Erchamion', collection: 'characters' },
  luthien: { name: 'Lúthien Tinúviel', collection: 'characters' },
  turin: { name: 'Túrin Turambar', collection: 'characters' },
  earendil: { name: 'Eärendil', collection: 'characters' },
  elwing: { name: 'Elwing', collection: 'characters' },
  elros: { name: 'Elros Tar-Minyatur', collection: 'characters' },
  elrond: { name: 'Elrond Yarim-elf', collection: 'characters' },
  elendil: { name: 'Elendil Boʻyi-baland', collection: 'characters' },
  isildur: { name: 'Isildur', collection: 'characters' },
  anarion: { name: 'Anárion', collection: 'characters' },
  aragorn: { name: 'Aragorn II Elessar', collection: 'characters' },
  arwen: { name: 'Arwen Undómiel', collection: 'characters' },
  theoden: { name: 'Théoden', collection: 'characters' },
  eomer: { name: 'Éomer', collection: 'characters' },
  eowyn: { name: 'Éowyn', collection: 'characters' },
  faramir: { name: 'Faramir', collection: 'characters' },
  'gil-galad': { name: 'Gil-galad (Ereinion)', collection: 'characters' },
  durin: { name: 'Durin Boqiy', collection: 'characters' },
  'durin-i': { name: 'Durin I Boqiy', collection: 'characters' },
  eorl: { name: 'Eorl Yosh', collection: 'characters' },
  melkor: { name: 'Melkor (Morgoth)', collection: 'characters' },
  sauron: { name: 'Sauron', collection: 'characters' },
  gandalf: { name: 'Gandalf (Mithrandir)', collection: 'characters' },
  'frodo-baggins': { name: 'Frodo Baggins', collection: 'characters' },
  frodo: { name: 'Frodo Baggins', collection: 'characters', path: '/qahramonlar/frodo-baggins/' },
  'samwise-gamgee': { name: 'Samwise Gamgee', collection: 'characters' },
  samwise: { name: 'Samwise Gamgee', collection: 'characters', path: '/qahramonlar/samwise-gamgee/' },
  sam: { name: 'Samwise Gamgee', collection: 'characters', path: '/qahramonlar/samwise-gamgee/' },
  'bilbo-baggins': { name: 'Bilbo Baggins', collection: 'characters' },
  bilbo: { name: 'Bilbo Baggins', collection: 'characters', path: '/qahramonlar/bilbo-baggins/' },
  'thorin-oakenshield': { name: 'Thorin II Oakenshield', collection: 'characters' },
  thorin: { name: 'Thorin II Oakenshield', collection: 'characters', path: '/qahramonlar/thorin-oakenshield/' },
  gimli: { name: 'Gimli', collection: 'characters' },
  legolas: { name: 'Legolas Greenleaf', collection: 'characters' },
  saruman: { name: 'Saruman', collection: 'characters' },
  gollum: { name: 'Gollum (Sméagol)', collection: 'characters' },
  smeagol: { name: 'Sméagol (Gollum)', collection: 'characters', path: '/qahramonlar/gollum/' },
  boromir: { name: 'Boromir', collection: 'characters' },
  shelob: { name: 'Shelob', collection: 'characters' },
  'witch-king': { name: 'Angmar Jodugar-qiroli', collection: 'characters' },
  'ar-pharazon': { name: 'Ar-Pharazôn', collection: 'characters' },
  cirdan: { name: 'Círdan Kemasoz', collection: 'characters' },
  finrod: { name: 'Finrod Felagund', collection: 'characters' },
  glorfindel: { name: 'Glorfindel', collection: 'characters' },
  hurin: { name: 'Húrin Thalion', collection: 'characters' },
  idril: { name: 'Idril Celebrindal', collection: 'characters' },
  maedhros: { name: 'Maedhros', collection: 'characters' },
  maeglin: { name: 'Maeglin', collection: 'characters' },
  thingol: { name: 'Elu Thingol', collection: 'characters' },
  tuor: { name: 'Tuor', collection: 'characters' },
  manwe: { name: 'Manwë Súlimo', collection: 'characters' },
  ulmo: { name: 'Ulmo', collection: 'characters' },
  aule: { name: 'Aulë', collection: 'characters' },
  varda: { name: 'Varda Elentári', collection: 'characters' },
  yavanna: { name: 'Yavanna Kementári', collection: 'characters' },
  mandos: { name: 'Mandos (Námo)', collection: 'characters' },
  nienna: { name: 'Nienna', collection: 'characters' },
  radagast: { name: 'Radagast Qoʻngʻir', collection: 'characters' },
  balin: { name: 'Balin', collection: 'characters' },
  'bard-the-bowman': { name: 'Kamonchi Bard (Bard I)', collection: 'characters' },
  beleg: { name: 'Beleg Cúthalion', collection: 'characters' },
  celeborn: { name: 'Keleborn (Celeborn)', collection: 'characters' },
  'dain-ironfoot': { name: 'Dáin II Temiroyoq', collection: 'characters' },
  'denethor-ii': { name: 'Denethor II', collection: 'characters' },
  glaurung: { name: 'Glaurung', collection: 'characters' },
  'helm-hammerhand': { name: 'Helm Bolgʻaqoʻl', collection: 'characters' },
  maglor: { name: 'Maglor', collection: 'characters' },
  smaug: { name: 'Smaug', collection: 'characters' },
  'thrain-ii': { name: 'Thráin II', collection: 'characters' },
  thranduil: { name: 'Thranduil', collection: 'characters' },
  'tom-bombadil': { name: 'Tom Bombadil', collection: 'characters' },
  treebeard: { name: 'Daraxtsoqol (Fangorn)', collection: 'characters' },

  // --- Xaritalar va Toponimlar (places) ---
  gondolin: { name: 'Gondolin', collection: 'places', path: '/xaritalar/?joy=gondolin' },
  menegroth: { name: 'Menegroth', collection: 'places', path: '/xaritalar/?joy=menegroth' },
  nargothrond: { name: 'Nargothrond', collection: 'places', path: '/xaritalar/?joy=nargothrond' },
  rivendell: { name: 'Rivendell (Imladris)', collection: 'places', path: '/xaritalar/?joy=rivendell' },
  bree: { name: 'Bri (Bree)', collection: 'places', path: '/xaritalar/?joy=bree' },
  'amon-sul': { name: 'Amon Sûl (Shamol Choʻqqisi / Weathertop)', collection: 'places', path: '/xaritalar/?joy=amon-sul' },
  'ered-luin': { name: 'Ered Luin (Moviy Togʻlar / Blue Mountains)', collection: 'places', path: '/xaritalar/?joy=ered-luin' },
  'minas-tirith': { name: 'Minas Tirith', collection: 'places', path: '/xaritalar/?joy=minas-tirith' },
  'barad-dur': { name: 'Barad-dûr', collection: 'places', path: '/xaritalar/?joy=barad-dur' },
  hobbiton: { name: 'Hobbiton (Bag End)', collection: 'places', path: '/xaritalar/?joy=hobbiton' },
  bywater: { name: 'Bywater (Suvboʻyi)', collection: 'places', path: '/xaritalar/?joy=bywater' },
  'michel-delving': { name: 'Michel Delving', collection: 'places', path: '/xaritalar/?joy=michel-delving' },
  tuckborough: { name: 'Tuckborough', collection: 'places', path: '/xaritalar/?joy=tuckborough' },
  'brandywine-bridge': { name: 'Toshkoʻprik (Brandywine Bridge)', collection: 'places', path: '/xaritalar/?joy=brandywine-bridge' },
  buckland: { name: 'Bukland (Brandival)', collection: 'places', path: '/xaritalar/?joy=buckland' },
  isengard: { name: 'Isengard (Angrenost)', collection: 'places', path: '/xaritalar/?joy=isengard' },
  lothlorien: { name: 'Lothlórien (Oltin Oʻrmon)', collection: 'places', path: '/xaritalar/?joy=lothlorien' },
  edoras: { name: 'Edoras', collection: 'places', path: '/xaritalar/?joy=edoras' },
  'helms-deep': { name: 'Helm jarligi (Hornburg)', collection: 'places', path: '/xaritalar/?joy=helms-deep' },
  osgiliath: { name: 'Osgiliath', collection: 'places', path: '/xaritalar/?joy=osgiliath' },
  pelargir: { name: 'Pelargir', collection: 'places', path: '/xaritalar/?joy=pelargir' },
  'khazad-dum': { name: 'Khazad-dûm (Moria)', collection: 'places', path: '/xaritalar/?joy=khazad-dum' },
  erebor: { name: 'Erebor (Yolgʻiz Togʻ)', collection: 'places', path: '/xaritalar/?joy=erebor' },
  'amon-hen': { name: 'Amon Hen', collection: 'places', path: '/xaritalar/?joy=amon-hen' },
  dunharrow: { name: 'Dunharrow (Dúnharg)', collection: 'places', path: '/xaritalar/?joy=dunharrow' },
  'paths-of-the-dead': { name: 'Oʻliklar Yoʻli', collection: 'places', path: '/xaritalar/?joy=paths-of-the-dead' },
  'dead-marshes': { name: 'Oʻlik Botqoqliklar (Dead Marshes)', collection: 'places', path: '/xaritalar/?joy=dead-marshes' },
  morannon: { name: 'Morannon (Qora Darvoza)', collection: 'places', path: '/xaritalar/?joy=morannon' },
  'henneth-annun': { name: 'Henneth Annûn', collection: 'places', path: '/xaritalar/?joy=henneth-annun' },
  'cirith-ungol': { name: 'Cirith Ungol va Minas Morgul', collection: 'places', path: '/xaritalar/?joy=cirith-ungol' },
  'minas-morgul': { name: 'Minas Morgul (Cirith Ungol)', collection: 'places', path: '/xaritalar/?joy=cirith-ungol' },
  orodruin: { name: 'Orodruin (Hukm Togʻi)', collection: 'places', path: '/xaritalar/?joy=orodruin' },
  'mount-doom': { name: 'Orodruin (Hukm Togʻi)', collection: 'places', path: '/xaritalar/?joy=orodruin' },
  mordor: { name: 'Mordor', collection: 'places', path: '/xaritalar/?joy=barad-dur' },
  tirion: { name: 'Tirion', collection: 'places', path: '/xaritalar/?joy=tirion' },
  formenos: { name: 'Formenos', collection: 'places', path: '/xaritalar/?joy=formenos' },
  mithrim: { name: 'Mithrim', collection: 'places', path: '/xaritalar/?joy=mithrim' },
  alqualonde: { name: 'Alqualondë', collection: 'places', path: '/xaritalar/?joy=alqualonde' },
  anfauglith: { name: 'Anfauglith (Ard-galen)', collection: 'places', path: '/xaritalar/?joy=anfauglith' },
  'ard-galen': { name: 'Ard-galen (Anfauglith)', collection: 'places', path: '/xaritalar/?joy=anfauglith' },
  numenor: { name: 'Númenor', collection: 'places', path: '/xaritalar/?joy=numenor' },
  doriath: { name: 'Doriath', collection: 'places' },
  lorien: { name: 'Lothlórien', collection: 'places' },
  lindon: { name: 'Lindon', collection: 'places' },
  beleriand: { name: 'Beleriand', collection: 'places' },
  dorthonion: { name: 'Dorthonion (Taur-nu-Fuin)', collection: 'places', path: '/xaritalar/?joy=dorthonion' },
  'tol-sirion': { name: 'Tol Sirion (Tol-in-Gaurhoth)', collection: 'places', path: '/xaritalar/?joy=tol-sirion' },
  angband: { name: 'Angband (Temir Zindon)', collection: 'places', path: '/xaritalar/?joy=angband' },
  brethil: { name: 'Brethil Oʻrmoni', collection: 'places', path: '/xaritalar/?joy=brethil' },
  'tol-galen': { name: 'Tol Galen (Yashil Orol)', collection: 'places', path: '/xaritalar/?joy=tol-galen' },
  thangorodrim: { name: 'Thangorodrim', collection: 'places', path: '/xaritalar/?joy=thangorodrim' },
  himring: { name: 'Himring', collection: 'places', path: '/xaritalar/?joy=himring' },
  vinyamar: { name: 'Vinyamar', collection: 'places', path: '/xaritalar/?joy=vinyamar' },
  belegost: { name: 'Belegost (Gabilgathol)', collection: 'places', path: '/xaritalar/?joy=belegost' },
  nogrod: { name: 'Nogrod (Tumunzahar)', collection: 'places', path: '/xaritalar/?joy=nogrod' },
  'havens-of-sirion': { name: 'Sirion Bandargohi', collection: 'places', path: '/xaritalar/?joy=havens-of-sirion' },
  falas: { name: 'Falas (Brithombar va Eglarest)', collection: 'places', path: '/xaritalar/?joy=falas' },
  fangorn: { name: 'Fangorn Oʻrmoni (Entwood)', collection: 'places' },
  mirkwood: { name: 'Qorongʻu Oʻrmon (Mirkwood)', collection: 'places' },
  'the-shire': { name: 'Shayr (The Shire)', collection: 'places' },
  eregion: { name: 'Eregion (Hollin)', collection: 'places' },
  moria: { name: 'Khazad-dûm (Moria)', collection: 'places', path: '/xaritalar/?joy=khazad-dum' },

  // --- Tarixiy Voqealar (events) ---
  'birinchi-qarindosh-qirgini': { name: 'Birinchi Qarindosh Qirgʻini', collection: 'events' },
  'nirnaeth-arnoediad': { name: 'Nirnaeth Arnoediad', collection: 'events' },
  'dagor-bragollach': { name: 'Dagor Bragollach', collection: 'events' },
  'dagor-nuin-giliath': { name: 'Dagor-nuin-Giliath', collection: 'events' },
  'valinor-nurlarining-somonishi': { name: 'Valinor Nurlarining Soʻnishi', collection: 'events' },
  'silmaril-safari': { name: 'Silmaril Safari (Beren va Lúthien)', collection: 'events' },
  'gondolinning-qulashi': { name: 'Gondolinning Qulashi', collection: 'events' },
  'gazab-urushi': { name: 'Gʻazab Urushi (Buyuk Jang)', collection: 'events' },
  'qudrat-uzuklarining-yasalishi': { name: 'Qudrat Uzuklarining Yasalishi', collection: 'events' },
  'numenorning-halokati': { name: 'Númenorning Halokati (Akallabêth)', collection: 'events' },
  'songgi-ittifoq-urushi': { name: 'Soʻnggi Ittifoq Urushi', collection: 'events' },
  'halqa-urushi': { name: 'Halqa Urushi', collection: 'events' },
  'khazad-dumning-qulashi': { name: 'Khazad-dûmning Qulashi', collection: 'events' },
  'besh-armiya-jangi': { name: 'Besh Armiya Jangi', collection: 'events' },
  'isengardning-vayron-qilinishi': { name: 'Isengardning Vayron Qilinishi', collection: 'events' },
  'hornburg-jangi': { name: 'Hornburg Jangi', collection: 'events' },
  'pelargir-jangi': { name: 'Pelargir Jangi', collection: 'events' },
  'pelennor-dalalari-jangi': { name: 'Pelennor Dalalari Jangi', collection: 'events' },
  'yagona-uzukning-yoq-qilinishi': { name: 'Yagona Uzukning Yoʻq Qilinishi', collection: 'events' },

  // --- Xalqlar va Madaniyatlar (peoples) ---
  noldor: { name: 'Noldor', collection: 'peoples' },
  sindar: { name: 'Sindar', collection: 'peoples' },
  vanyar: { name: 'Vanyar', collection: 'peoples' },
  teleri: { name: 'Teleri', collection: 'peoples' },
  edain: { name: 'Edain', collection: 'peoples' },
  dunedain: { name: 'Dúnedain (Gʻarb Insonlari)', collection: 'peoples' },
  'dúnedain': { name: 'Dúnedain (Gʻarb Insonlari)', collection: 'peoples' },
  rohirrim: { name: 'Rohirrim (Rohan Chavandozlari)', collection: 'peoples' },
  xobbitlar: { name: 'Xobbitlar (Shayr Xalqi)', collection: 'peoples' },
  istari: { name: 'Istari (Sehrgarlar Ordeni)', collection: 'peoples' },
  xazad: { name: 'Xazad (Mittilar)', collection: 'peoples' },
  'nandor-va-silvan': { name: 'Nandor va Oʻrmon Elflari', collection: 'peoples' },
  entlar: { name: 'Entlar (Onodrim)', collection: 'peoples' },
  numenorliklar: { name: 'Númenorliklar', collection: 'peoples' },
  daeron: { name: 'Daeron (Doriath baxshisi)', collection: 'characters' },
  'fëanor': { name: 'Fëanor', collection: 'characters' },

  // --- Tillar va Yozuvlar (languages) ---
  quenya: { name: 'Quenya', collection: 'languages' },
  sindarin: { name: 'Sindarin', collection: 'languages' },
  khuzdul: { name: 'Khuzdul', collection: 'languages' },
  adunaic: { name: 'Adûnaic (Númenor Tili)', collection: 'languages' },
  westron: { name: 'Westron (Umumiy Nutq)', collection: 'languages' },
  valarin: { name: 'Valarin (Ainur Tili)', collection: 'languages' },
  rohirric: { name: 'Rohirric (Rohan Tili)', collection: 'languages' },
  'qora-nutq': { name: 'Qora Nutq (Black Speech)', collection: 'languages' },
  tengwar: { name: 'Tengwar', collection: 'languages' },
  cirth: { name: 'Cirth (Angerthas Runalari)', collection: 'languages' },
  sarati: { name: 'Sarati (Rúmil Yozuvi)', collection: 'languages' },

  // --- Kitoblar va Nashrlar (books) ---
  silmarillion: { name: 'The Silmarillion', collection: 'books' },
  'the-silmarillion': { name: 'The Silmarillion', collection: 'books', path: '/kitoblar/silmarillion/' },
  'the-lord-of-the-rings': { name: 'The Lord of the Rings', collection: 'books' },
  lotr: { name: 'The Lord of the Rings', collection: 'books', path: '/kitoblar/the-lord-of-the-rings/' },
  'the-fellowship-of-the-ring': { name: 'The Fellowship of the Ring', collection: 'books' },
  'lotr-fellowship': { name: 'The Fellowship of the Ring', collection: 'books', path: '/kitoblar/the-fellowship-of-the-ring/' },
  'the-two-towers': { name: 'The Two Towers', collection: 'books' },
  'lotr-towers': { name: 'The Two Towers', collection: 'books', path: '/kitoblar/the-two-towers/' },
  'the-return-of-the-king': { name: 'The Return of the King', collection: 'books' },
  'lotr-return': { name: 'The Return of the King', collection: 'books', path: '/kitoblar/the-return-of-the-king/' },
  'the-hobbit': { name: 'The Hobbit', collection: 'books' },
  hobbit: { name: 'The Hobbit', collection: 'books', path: '/kitoblar/the-hobbit/' },
  'unfinished-tales': { name: 'Unfinished Tales', collection: 'books' },
  'letters-of-jrr-tolkien': { name: 'The Letters of J.R.R. Tolkien', collection: 'books' },
  'history-of-middle-earth': { name: 'The History of Middle-earth', collection: 'books' },
  'the-children-of-hurin': { name: 'The Children of Húrin', collection: 'books' },
  'children-of-hurin': { name: 'The Children of Húrin', collection: 'books', path: '/kitoblar/the-children-of-hurin/' },
  'beren-and-luthien': { name: 'Beren and Lúthien', collection: 'books' },
  'the-fall-of-gondolin': { name: 'The Fall of Gondolin', collection: 'books' },
  'fall-of-gondolin': { name: 'The Fall of Gondolin', collection: 'books', path: '/kitoblar/the-fall-of-gondolin/' },
  'tree-and-leaf': { name: 'Tree and Leaf (On Fairy-Stories)', collection: 'books' },
  'on-fairy-stories': { name: 'Tree and Leaf (On Fairy-Stories)', collection: 'books', path: '/kitoblar/tree-and-leaf/' },
  'the-adventures-of-tom-bombadil': { name: 'The Adventures of Tom Bombadil', collection: 'books' },
  'the-fall-of-numenor': { name: 'The Fall of Númenor', collection: 'books' },
  'fall-of-numenor': { name: 'The Fall of Númenor', collection: 'books', path: '/kitoblar/the-fall-of-numenor/' },
  'the-nature-of-middle-earth': { name: 'The Nature of Middle-earth', collection: 'books' },
  'nature-of-middle-earth': { name: 'The Nature of Middle-earth', collection: 'books', path: '/kitoblar/the-nature-of-middle-earth/' },
  'tales-from-the-perilous-realm': { name: 'Tales from the Perilous Realm', collection: 'books' },
  roverandom: { name: 'Roverandom', collection: 'books' },
  'farmer-giles-of-ham': { name: 'Farmer Giles of Ham', collection: 'books' },
  'leaf-by-niggle': { name: 'Leaf by Niggle', collection: 'books' },
  'smith-of-wootton-major': { name: 'Smith of Wootton Major', collection: 'books' },
  'the-story-of-kullervo': { name: 'The Story of Kullervo', collection: 'books' },
  'the-legend-of-sigurd-and-gudrun': { name: 'The Legend of Sigurd and Gudrún', collection: 'books' },
  'the-fall-of-arthur': { name: 'The Fall of Arthur', collection: 'books' },
  'beowulf-the-monsters-and-the-critics': { name: 'The Monsters and the Critics', collection: 'books' },
  'sir-gawain-and-the-green-knight': { name: 'Sir Gawain and the Green Knight', collection: 'books' },
  'finn-and-hengest': { name: 'Finn and Hengest', collection: 'books' },
  'the-book-of-lost-tales-1': { name: 'The Book of Lost Tales, Part One', collection: 'books' },
  'book-of-lost-tales-1': { name: 'The Book of Lost Tales, Part One', collection: 'books', path: '/kitoblar/the-book-of-lost-tales-1/' },
  'the-book-of-lost-tales-2': { name: 'The Book of Lost Tales, Part Two', collection: 'books' },
  'book-of-lost-tales-2': { name: 'The Book of Lost Tales, Part Two', collection: 'books', path: '/kitoblar/the-book-of-lost-tales-2/' },
  'morgoths-ring': { name: "Morgoth's Ring", collection: 'books' },
  'the-war-of-the-jewels': { name: 'The War of the Jewels', collection: 'books' },
  'the-peoples-of-middle-earth': { name: 'The Peoples of Middle-earth', collection: 'books' },
  'letters-from-father-christmas': { name: 'Letters from Father Christmas', collection: 'books' },
  'beowulf-a-translation-and-commentary': { name: 'Beowulf: A Translation and Commentary', collection: 'books' },
  'jrr-tolkien-a-biography': { name: 'J.R.R. Tolkien: A Biography', collection: 'books' },

  // --- Nasabnomalar (genealogies) ---
  'finwe-xonadoni': { name: 'Finwë Xonadoni', collection: 'genealogies' },
  'edain-va-yarim-elflar': { name: 'Edain va Yarim-Elflar (Peredhil)', collection: 'genealogies' },
  'elros-va-gondor-shohlari': { name: 'Elros va Gondor Shohlari', collection: 'genealogies' },
  'rohan-shohlari': { name: 'Rohan Shohlari (Eorl Xonadoni)', collection: 'genealogies' },
  'durin-avlodlari': { name: 'Durin Avlodlari', collection: 'genealogies' },
  'shayr-xonadonlari': { name: 'Shayr Xonadonlari (Baggins, Tuk va Brendibak)', collection: 'genealogies' },
  melian: { name: 'Melian Maia', collection: 'characters' },
  morwen: { name: 'Morwen Eledhwen', collection: 'characters' },
  nienor: { name: 'Nienor Níniel', collection: 'characters' },
  'meriadoc-brandybuck': { name: 'Meriadok Brendibak (Merry)', collection: 'characters' },
  'peregrin-took': { name: 'Peregrin Tuk (Pippin)', collection: 'characters' },

  // --- Kosmologiya (cosmology) ---
  'muqaddas-nur': { name: 'Muqaddas Nur', collection: 'cosmology' },
  ea: { name: 'Eä (Moddiy Olam)', collection: 'cosmology' },
  kuma: { name: 'Kúma (Tashqi Boʻshliq)', collection: 'cosmology' },
  'ikki-daraxt': { name: 'Ikki Daraxt (Telperion va Laurelin)', collection: 'cosmology' },
  ainulindale: { name: 'Ainulindalë va Oʻchmas Olov', collection: 'cosmology' },
  'anar-va-isil': { name: 'Anar va Isil (Quyosh, Oy va Eärendil Yulduzi)', collection: 'cosmology' },
  'togri-yol-va-aklallabeth': { name: 'Toʻgʻri Yoʻl va Dunyoning Dumaloqlashuvi', collection: 'cosmology' },
  'mandos-va-fea-hroa': { name: 'Fëa va Hröa: Ruh, Tana va Mandos Zallari', collection: 'cosmology' },

  // --- Maqolalar (articles) ---
  'olim-va-boqiylik-mavzusi': { name: 'Oʻlim va Boqiylik: Elflar Taqdiri hamda «Insonlar Inʼomi»', collection: 'articles' },
  'feanor-qasamyodi-tahlili': { name: 'Fëanor Qasamyodi Tahlili', collection: 'articles' },
  'sub-creation-nazariyasi': { name: 'Sub-creation (Quyi-yaratilish) Nazariyasi', collection: 'articles' },
  'hokimiyat-va-mashina-vasvasasi': { name: 'Hokimiyat, Sanʼat va «Mashina» Vasvasasi', collection: 'articles' },
  'legendarium-matn-tarixi': { name: 'Legendarium Matn Tarixi', collection: 'articles' },
  'kitob-va-ekran-qiyosiy-tahlil': { name: 'Matn va Ekran: «Uzuklar Hukmdori» Talqini', collection: 'articles' },
  'jrr-tolkien-tarjimai-hol': { name: 'J.R.R. Tolkien: Tarjimai Hol va Ilmiy Meros', collection: 'articles', path: '/tolkien/tarjimai-hol/' },
  'jrr-tolkien-filologiya-va-beowulf': { name: 'J.R.R. Tolkienning Filologik Metodi va «Beowulf»', collection: 'articles', path: '/tolkien/filologiya-va-beowulf/' },
  'filologiya-va-beowulf': { name: 'J.R.R. Tolkienning Filologik Metodi va «Beowulf»', collection: 'articles', path: '/tolkien/filologiya-va-beowulf/' },
};

/**
 * 2. Oksford iqtiboslari uchun kitoblar bibliografik registri
 */
export const BOOK_CITATION_REGISTRY: Record<string, BookCitationMeta> = {
  silmarillion: {
    id: 'silmarillion',
    title: 'The Silmarillion',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 1977,
    href: '/kitoblar/silmarillion/',
  },
  'the-silmarillion': {
    id: 'silmarillion',
    title: 'The Silmarillion',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 1977,
    href: '/kitoblar/silmarillion/',
  },
  'the-lord-of-the-rings': {
    id: 'the-lord-of-the-rings',
    title: 'The Lord of the Rings',
    author: 'Tolkien, J.R.R.',
    year: 1954,
    href: '/kitoblar/the-lord-of-the-rings/',
  },
  lotr: {
    id: 'the-lord-of-the-rings',
    title: 'The Lord of the Rings',
    author: 'Tolkien, J.R.R.',
    year: 1954,
    href: '/kitoblar/the-lord-of-the-rings/',
  },
  'lotr-fellowship': {
    id: 'the-lord-of-the-rings',
    title: 'The Fellowship of the Ring',
    author: 'Tolkien, J.R.R.',
    year: 1954,
    href: '/kitoblar/the-lord-of-the-rings/',
  },
  'the-fellowship-of-the-ring': {
    id: 'the-lord-of-the-rings',
    title: 'The Fellowship of the Ring',
    author: 'Tolkien, J.R.R.',
    year: 1954,
    href: '/kitoblar/the-lord-of-the-rings/',
  },
  'lotr-towers': {
    id: 'the-lord-of-the-rings',
    title: 'The Two Towers',
    author: 'Tolkien, J.R.R.',
    year: 1954,
    href: '/kitoblar/the-lord-of-the-rings/',
  },
  'the-two-towers': {
    id: 'the-lord-of-the-rings',
    title: 'The Two Towers',
    author: 'Tolkien, J.R.R.',
    year: 1954,
    href: '/kitoblar/the-lord-of-the-rings/',
  },
  'lotr-return': {
    id: 'the-lord-of-the-rings',
    title: 'The Return of the King',
    author: 'Tolkien, J.R.R.',
    year: 1955,
    href: '/kitoblar/the-lord-of-the-rings/',
  },
  'the-return-of-the-king': {
    id: 'the-lord-of-the-rings',
    title: 'The Return of the King',
    author: 'Tolkien, J.R.R.',
    year: 1955,
    href: '/kitoblar/the-lord-of-the-rings/',
  },
  'the-hobbit': {
    id: 'the-hobbit',
    title: 'The Hobbit',
    author: 'Tolkien, J.R.R.',
    year: 1937,
    href: '/kitoblar/the-hobbit/',
  },
  hobbit: {
    id: 'the-hobbit',
    title: 'The Hobbit',
    author: 'Tolkien, J.R.R.',
    year: 1937,
    href: '/kitoblar/the-hobbit/',
  },
  'unfinished-tales': {
    id: 'unfinished-tales',
    title: 'Unfinished Tales of Númenor and Middle-earth',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 1980,
    href: '/kitoblar/unfinished-tales/',
  },
  'letters-of-jrr-tolkien': {
    id: 'letters-of-jrr-tolkien',
    title: 'The Letters of J.R.R. Tolkien',
    author: 'Tolkien, J.R.R. (ed. Humphrey Carpenter)',
    year: 1981,
    href: '/kitoblar/letters-of-jrr-tolkien/',
  },
  'history-of-middle-earth': {
    id: 'history-of-middle-earth',
    title: 'The History of Middle-earth',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 1983,
    href: '/kitoblar/history-of-middle-earth/',
  },
  'the-children-of-hurin': {
    id: 'the-children-of-hurin',
    title: 'The Children of Húrin',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 2007,
    href: '/kitoblar/the-children-of-hurin/',
  },
  'children-of-hurin': {
    id: 'the-children-of-hurin',
    title: 'The Children of Húrin',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 2007,
    href: '/kitoblar/the-children-of-hurin/',
  },
  'beren-and-luthien': {
    id: 'beren-and-luthien',
    title: 'Beren and Lúthien',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 2017,
    href: '/kitoblar/beren-and-luthien/',
  },
  'the-fall-of-gondolin': {
    id: 'the-fall-of-gondolin',
    title: 'The Fall of Gondolin',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 2018,
    href: '/kitoblar/the-fall-of-gondolin/',
  },
  'fall-of-gondolin': {
    id: 'the-fall-of-gondolin',
    title: 'The Fall of Gondolin',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 2018,
    href: '/kitoblar/the-fall-of-gondolin/',
  },
  'tree-and-leaf': {
    id: 'tree-and-leaf',
    title: 'Tree and Leaf (including On Fairy-Stories)',
    author: 'Tolkien, J.R.R.',
    year: 1964,
    href: '/kitoblar/tree-and-leaf/',
  },
  'on-fairy-stories': {
    id: 'tree-and-leaf',
    title: 'Tree and Leaf (including On Fairy-Stories)',
    author: 'Tolkien, J.R.R.',
    year: 1964,
    href: '/kitoblar/tree-and-leaf/',
  },
  'the-adventures-of-tom-bombadil': {
    id: 'the-adventures-of-tom-bombadil',
    title: 'The Adventures of Tom Bombadil',
    author: 'Tolkien, J.R.R.',
    year: 1962,
    href: '/kitoblar/the-adventures-of-tom-bombadil/',
  },
  'the-fall-of-numenor': {
    id: 'the-fall-of-numenor',
    title: 'The Fall of Númenor',
    author: 'Tolkien, J.R.R. (ed. Brian Sibley)',
    year: 2022,
    href: '/kitoblar/the-fall-of-numenor/',
  },
  'fall-of-numenor': {
    id: 'the-fall-of-numenor',
    title: 'The Fall of Númenor',
    author: 'Tolkien, J.R.R. (ed. Brian Sibley)',
    year: 2022,
    href: '/kitoblar/the-fall-of-numenor/',
  },
  'the-nature-of-middle-earth': {
    id: 'the-nature-of-middle-earth',
    title: 'The Nature of Middle-earth',
    author: 'Tolkien, J.R.R. (ed. Carl F. Hostetter)',
    year: 2021,
    href: '/kitoblar/the-nature-of-middle-earth/',
  },
  'nature-of-middle-earth': {
    id: 'the-nature-of-middle-earth',
    title: 'The Nature of Middle-earth',
    author: 'Tolkien, J.R.R. (ed. Carl F. Hostetter)',
    year: 2021,
    href: '/kitoblar/the-nature-of-middle-earth/',
  },
  'tales-from-the-perilous-realm': {
    id: 'tales-from-the-perilous-realm',
    title: 'Tales from the Perilous Realm',
    author: 'Tolkien, J.R.R.',
    year: 1997,
    href: '/kitoblar/tales-from-the-perilous-realm/',
  },
  roverandom: {
    id: 'roverandom',
    title: 'Roverandom',
    author: 'Tolkien, J.R.R.',
    year: 1998,
    href: '/kitoblar/roverandom/',
  },
  'farmer-giles-of-ham': {
    id: 'farmer-giles-of-ham',
    title: 'Farmer Giles of Ham',
    author: 'Tolkien, J.R.R.',
    year: 1949,
    href: '/kitoblar/farmer-giles-of-ham/',
  },
  'leaf-by-niggle': {
    id: 'leaf-by-niggle',
    title: 'Leaf by Niggle',
    author: 'Tolkien, J.R.R.',
    year: 1945,
    href: '/kitoblar/leaf-by-niggle/',
  },
  'smith-of-wootton-major': {
    id: 'smith-of-wootton-major',
    title: 'Smith of Wootton Major',
    author: 'Tolkien, J.R.R.',
    year: 1967,
    href: '/kitoblar/smith-of-wootton-major/',
  },
  'the-story-of-kullervo': {
    id: 'the-story-of-kullervo',
    title: 'The Story of Kullervo',
    author: 'Tolkien, J.R.R. (ed. Verlyn Flieger)',
    year: 2015,
    href: '/kitoblar/the-story-of-kullervo/',
  },
  'the-legend-of-sigurd-and-gudrun': {
    id: 'the-legend-of-sigurd-and-gudrun',
    title: 'The Legend of Sigurd and Gudrún',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 2009,
    href: '/kitoblar/the-legend-of-sigurd-and-gudrun/',
  },
  'the-fall-of-arthur': {
    id: 'the-fall-of-arthur',
    title: 'The Fall of Arthur',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 2013,
    href: '/kitoblar/the-fall-of-arthur/',
  },
  'beowulf-the-monsters-and-the-critics': {
    id: 'beowulf-the-monsters-and-the-critics',
    title: 'The Monsters and the Critics, and Other Essays',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 1983,
    href: '/kitoblar/beowulf-the-monsters-and-the-critics/',
  },
  'sir-gawain-and-the-green-knight': {
    id: 'sir-gawain-and-the-green-knight',
    title: 'Sir Gawain and the Green Knight, Pearl, and Sir Orfeo',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 1975,
    href: '/kitoblar/sir-gawain-and-the-green-knight/',
  },
  'finn-and-hengest': {
    id: 'finn-and-hengest',
    title: 'Finn and Hengest: The Fragment and the Episode',
    author: 'Tolkien, J.R.R. (ed. Alan Bliss)',
    year: 1982,
    href: '/kitoblar/finn-and-hengest/',
  },
  'the-book-of-lost-tales-1': {
    id: 'the-book-of-lost-tales-1',
    title: 'The Book of Lost Tales, Part One',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 1983,
    href: '/kitoblar/the-book-of-lost-tales-1/',
  },
  'book-of-lost-tales-1': {
    id: 'the-book-of-lost-tales-1',
    title: 'The Book of Lost Tales, Part One',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 1983,
    href: '/kitoblar/the-book-of-lost-tales-1/',
  },
  'the-book-of-lost-tales-2': {
    id: 'the-book-of-lost-tales-2',
    title: 'The Book of Lost Tales, Part Two',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 1984,
    href: '/kitoblar/the-book-of-lost-tales-2/',
  },
  'book-of-lost-tales-2': {
    id: 'the-book-of-lost-tales-2',
    title: 'The Book of Lost Tales, Part Two',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 1984,
    href: '/kitoblar/the-book-of-lost-tales-2/',
  },
  'morgoths-ring': {
    id: 'morgoths-ring',
    title: "Morgoth's Ring: The Later Silmarillion, Part One",
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 1993,
    href: '/kitoblar/morgoths-ring/',
  },
  'the-war-of-the-jewels': {
    id: 'the-war-of-the-jewels',
    title: 'The War of the Jewels: The Later Silmarillion, Part Two',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 1994,
    href: '/kitoblar/the-war-of-the-jewels/',
  },
  'the-peoples-of-middle-earth': {
    id: 'the-peoples-of-middle-earth',
    title: 'The Peoples of Middle-earth',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 1996,
    href: '/kitoblar/the-peoples-of-middle-earth/',
  },
  'letters-from-father-christmas': {
    id: 'letters-from-father-christmas',
    title: 'The Father Christmas Letters',
    author: 'Tolkien, J.R.R. (ed. Baillie Tolkien)',
    year: 1976,
    href: '/kitoblar/letters-from-father-christmas/',
  },
  'beowulf-a-translation-and-commentary': {
    id: 'beowulf-a-translation-and-commentary',
    title: 'Beowulf: A Translation and Commentary',
    author: 'Tolkien, J.R.R. (ed. Christopher Tolkien)',
    year: 2014,
    href: '/kitoblar/beowulf-a-translation-and-commentary/',
  },
  'jrr-tolkien-a-biography': {
    id: 'jrr-tolkien-a-biography',
    title: 'J.R.R. Tolkien: A Biography',
    author: 'Carpenter, Humphrey',
    year: 1977,
    href: '/kitoblar/jrr-tolkien-a-biography/',
  },
};

/**
 * 3. Ensiklopediyada haqiqatda mavjud boʻlgan va generatsiya qilinadigan kanonik marshrutlar xaritasi.
 *
 * Faqat ushbu xaritada roʻyxatdan oʻtgan va saytda mavjud boʻlgan sahifalarga faol <a> havolasi (href) beriladi.
 * Roʻyxatda boʻlmagan yoki hali alohida sahifasi yozilmagan entitilar (masalan: Finarfin, Elrond, Tirion)
 * semantik va qulay statik tabletka/matn (span) sifatida chiqariladi.
 * Bu orqali 404 xatolarining 100% oldi olinadi.
 */
export const GENERATED_ENTITY_ROUTES: Record<string, string> = {
  // Qahramonlar (src/content/characters/*.json)
  aragorn: '/qahramonlar/aragorn/',
  arwen: '/qahramonlar/arwen/',
  beren: '/qahramonlar/beren/',
  'bilbo-baggins': '/qahramonlar/bilbo-baggins/',
  bilbo: '/qahramonlar/bilbo-baggins/',
  boromir: '/qahramonlar/boromir/',
  'durin-i': '/qahramonlar/durin-i/',
  durin: '/qahramonlar/durin-i/',
  elendil: '/qahramonlar/elendil/',
  elrond: '/qahramonlar/elrond/',
  eomer: '/qahramonlar/eomer/',
  eowyn: '/qahramonlar/eowyn/',
  faramir: '/qahramonlar/faramir/',
  feanor: '/qahramonlar/feanor/',
  fingolfin: '/qahramonlar/fingolfin/',
  finwe: '/qahramonlar/finwe/',
  'frodo-baggins': '/qahramonlar/frodo-baggins/',
  frodo: '/qahramonlar/frodo-baggins/',
  galadriel: '/qahramonlar/galadriel/',
  gandalf: '/qahramonlar/gandalf/',
  'gil-galad': '/qahramonlar/gil-galad/',
  gimli: '/qahramonlar/gimli/',
  gollum: '/qahramonlar/gollum/',
  smeagol: '/qahramonlar/gollum/',
  isildur: '/qahramonlar/isildur/',
  legolas: '/qahramonlar/legolas/',
  melkor: '/qahramonlar/melkor/',
  'samwise-gamgee': '/qahramonlar/samwise-gamgee/',
  samwise: '/qahramonlar/samwise-gamgee/',
  sam: '/qahramonlar/samwise-gamgee/',
  saruman: '/qahramonlar/saruman/',
  sauron: '/qahramonlar/sauron/',
  theoden: '/qahramonlar/theoden/',
  'thorin-oakenshield': '/qahramonlar/thorin-oakenshield/',
  thorin: '/qahramonlar/thorin-oakenshield/',
  turin: '/qahramonlar/turin/',
  shelob: '/qahramonlar/shelob/',
  'witch-king': '/qahramonlar/witch-king/',
  anarion: '/qahramonlar/anarion/',
  'ar-pharazon': '/qahramonlar/ar-pharazon/',
  celebrimbor: '/qahramonlar/celebrimbor/',
  cirdan: '/qahramonlar/cirdan/',
  earendil: '/qahramonlar/earendil/',
  elros: '/qahramonlar/elros/',
  elwing: '/qahramonlar/elwing/',
  fingon: '/qahramonlar/fingon/',
  finrod: '/qahramonlar/finrod/',
  glorfindel: '/qahramonlar/glorfindel/',
  hurin: '/qahramonlar/hurin/',
  idril: '/qahramonlar/idril/',
  luthien: '/qahramonlar/luthien/',
  maedhros: '/qahramonlar/maedhros/',
  maeglin: '/qahramonlar/maeglin/',
  thingol: '/qahramonlar/thingol/',
  tuor: '/qahramonlar/tuor/',
  manwe: '/qahramonlar/manwe/',
  ulmo: '/qahramonlar/ulmo/',
  aule: '/qahramonlar/aule/',
  varda: '/qahramonlar/varda/',
  yavanna: '/qahramonlar/yavanna/',
  mandos: '/qahramonlar/mandos/',
  radagast: '/qahramonlar/radagast/',
  balin: '/qahramonlar/balin/',
  'bard-the-bowman': '/qahramonlar/bard-the-bowman/',
  beleg: '/qahramonlar/beleg/',
  celeborn: '/qahramonlar/celeborn/',
  curufin: '/qahramonlar/curufin/',
  'dain-ironfoot': '/qahramonlar/dain-ironfoot/',
  'denethor-ii': '/qahramonlar/denethor-ii/',
  eorl: '/qahramonlar/eorl/',
  finarfin: '/qahramonlar/finarfin/',
  glaurung: '/qahramonlar/glaurung/',
  'helm-hammerhand': '/qahramonlar/helm-hammerhand/',
  indis: '/qahramonlar/indis/',
  maglor: '/qahramonlar/maglor/',
  miriel: '/qahramonlar/miriel/',
  nerdanel: '/qahramonlar/nerdanel/',
  smaug: '/qahramonlar/smaug/',
  'thrain-ii': '/qahramonlar/thrain-ii/',
  thranduil: '/qahramonlar/thranduil/',
  'tom-bombadil': '/qahramonlar/tom-bombadil/',
  treebeard: '/qahramonlar/treebeard/',
  turgon: '/qahramonlar/turgon/',

  // Xaritalar va Toponimlar (src/content/places/*.json)
  'amon-sul': '/xaritalar/?joy=amon-sul',
  'barad-dur': '/xaritalar/?joy=barad-dur',
  'brandywine-bridge': '/xaritalar/?joy=brandywine-bridge',
  bree: '/xaritalar/?joy=bree',
  buckland: '/xaritalar/?joy=buckland',
  bywater: '/xaritalar/?joy=bywater',
  edoras: '/xaritalar/?joy=edoras',
  erebor: '/xaritalar/?joy=erebor',
  'ered-luin': '/xaritalar/?joy=ered-luin',
  gondolin: '/xaritalar/?joy=gondolin',
  'helms-deep': '/xaritalar/?joy=helms-deep',
  hobbiton: '/xaritalar/?joy=hobbiton',
  isengard: '/xaritalar/?joy=isengard',
  'khazad-dum': '/xaritalar/?joy=khazad-dum',
  lothlorien: '/xaritalar/?joy=lothlorien',
  menegroth: '/xaritalar/?joy=menegroth',
  'michel-delving': '/xaritalar/?joy=michel-delving',
  'minas-tirith': '/xaritalar/?joy=minas-tirith',
  nargothrond: '/xaritalar/?joy=nargothrond',
  osgiliath: '/xaritalar/?joy=osgiliath',
  pelargir: '/xaritalar/?joy=pelargir',
  rivendell: '/xaritalar/?joy=rivendell',
  tuckborough: '/xaritalar/?joy=tuckborough',
  'amon-hen': '/xaritalar/?joy=amon-hen',
  dunharrow: '/xaritalar/?joy=dunharrow',
  'paths-of-the-dead': '/xaritalar/?joy=paths-of-the-dead',
  'dead-marshes': '/xaritalar/?joy=dead-marshes',
  morannon: '/xaritalar/?joy=morannon',
  'henneth-annun': '/xaritalar/?joy=henneth-annun',
  'cirith-ungol': '/xaritalar/?joy=cirith-ungol',
  'minas-morgul': '/xaritalar/?joy=cirith-ungol',
  orodruin: '/xaritalar/?joy=orodruin',
  'mount-doom': '/xaritalar/?joy=orodruin',
  mordor: '/xaritalar/?joy=barad-dur',
  dorthonion: '/xaritalar/?joy=dorthonion',
  'tol-sirion': '/xaritalar/?joy=tol-sirion',
  angband: '/xaritalar/?joy=angband',
  brethil: '/xaritalar/?joy=brethil',
  'tol-galen': '/xaritalar/?joy=tol-galen',
  thangorodrim: '/xaritalar/?joy=thangorodrim',
  himring: '/xaritalar/?joy=himring',
  vinyamar: '/xaritalar/?joy=vinyamar',
  belegost: '/xaritalar/?joy=belegost',
  nogrod: '/xaritalar/?joy=nogrod',
  'havens-of-sirion': '/xaritalar/?joy=havens-of-sirion',
  falas: '/xaritalar/?joy=falas',
  alqualonde: '/xaritalar/?joy=alqualonde',
  anfauglith: '/xaritalar/?joy=anfauglith',
  'ard-galen': '/xaritalar/?joy=anfauglith',

  // Tarixiy Voqealar (src/content/events/*.json)
  'birinchi-qarindosh-qirgini': '/tarix/birinchi-qarindosh-qirgini/',
  'dagor-bragollach': '/tarix/dagor-bragollach/',
  'halqa-urushi': '/tarix/halqa-urushi/',
  'nirnaeth-arnoediad': '/tarix/nirnaeth-arnoediad/',
  'silmaril-safari': '/tarix/silmaril-safari/',
  'gondolinning-qulashi': '/tarix/gondolinning-qulashi/',
  'gazab-urushi': '/tarix/gazab-urushi/',
  'qudrat-uzuklarining-yasalishi': '/tarix/qudrat-uzuklarining-yasalishi/',
  'numenorning-halokati': '/tarix/numenorning-halokati/',
  'songgi-ittifoq-urushi': '/tarix/songgi-ittifoq-urushi/',
  'khazad-dumning-qulashi': '/tarix/khazad-dumning-qulashi/',
  'besh-armiya-jangi': '/tarix/besh-armiya-jangi/',
  'isengardning-vayron-qilinishi': '/tarix/isengardning-vayron-qilinishi/',
  'hornburg-jangi': '/tarix/hornburg-jangi/',
  'pelargir-jangi': '/tarix/pelargir-jangi/',
  'pelennor-dalalari-jangi': '/tarix/pelennor-dalalari-jangi/',
  'yagona-uzukning-yoq-qilinishi': '/tarix/yagona-uzukning-yoq-qilinishi/',

  // Xalqlar (src/content/peoples/*.json)
  edain: '/xalqlar-va-tillar/edain/',
  dunedain: '/xalqlar-va-tillar/dunedain/',
  'dúnedain': '/xalqlar-va-tillar/dunedain/',
  rohirrim: '/xalqlar-va-tillar/rohirrim/',
  xobbitlar: '/xalqlar-va-tillar/xobbitlar/',
  istari: '/xalqlar-va-tillar/istari/',
  noldor: '/xalqlar-va-tillar/noldor/',
  sindar: '/xalqlar-va-tillar/sindar/',
  xazad: '/xalqlar-va-tillar/xazad/',
  'nandor-va-silvan': '/xalqlar-va-tillar/nandor-va-silvan/',
  entlar: '/xalqlar-va-tillar/entlar/',
  numenorliklar: '/xalqlar-va-tillar/numenorliklar/',
  'fëanor': '/qahramonlar/feanor/',

  // Tillar va Yozuvlar (src/content/languages/*.json)
  adunaic: '/xalqlar-va-tillar/adunaic/',
  westron: '/xalqlar-va-tillar/westron/',
  khuzdul: '/xalqlar-va-tillar/khuzdul/',
  quenya: '/xalqlar-va-tillar/quenya/',
  sindarin: '/xalqlar-va-tillar/sindarin/',
  valarin: '/xalqlar-va-tillar/valarin/',
  rohirric: '/xalqlar-va-tillar/rohirric/',
  'qora-nutq': '/xalqlar-va-tillar/qora-nutq/',
  tengwar: '/xalqlar-va-tillar/tengwar/',
  cirth: '/xalqlar-va-tillar/cirth/',

  // Kitoblar (src/content/books/*.json va ularning sinonimlari)
  silmarillion: '/kitoblar/silmarillion/',
  'the-silmarillion': '/kitoblar/silmarillion/',
  'the-lord-of-the-rings': '/kitoblar/the-lord-of-the-rings/',
  lotr: '/kitoblar/the-lord-of-the-rings/',
  'lotr-fellowship': '/kitoblar/the-fellowship-of-the-ring/',
  'the-fellowship-of-the-ring': '/kitoblar/the-fellowship-of-the-ring/',
  'lotr-towers': '/kitoblar/the-two-towers/',
  'the-two-towers': '/kitoblar/the-two-towers/',
  'lotr-return': '/kitoblar/the-return-of-the-king/',
  'the-return-of-the-king': '/kitoblar/the-return-of-the-king/',
  'the-hobbit': '/kitoblar/the-hobbit/',
  hobbit: '/kitoblar/the-hobbit/',
  'unfinished-tales': '/kitoblar/unfinished-tales/',
  'letters-of-jrr-tolkien': '/kitoblar/letters-of-jrr-tolkien/',
  'history-of-middle-earth': '/kitoblar/history-of-middle-earth/',
  'the-children-of-hurin': '/kitoblar/the-children-of-hurin/',
  'children-of-hurin': '/kitoblar/the-children-of-hurin/',
  'beren-and-luthien': '/kitoblar/beren-and-luthien/',
  'the-fall-of-gondolin': '/kitoblar/the-fall-of-gondolin/',
  'fall-of-gondolin': '/kitoblar/the-fall-of-gondolin/',
  'tree-and-leaf': '/kitoblar/tree-and-leaf/',
  'on-fairy-stories': '/kitoblar/tree-and-leaf/',
  'the-adventures-of-tom-bombadil': '/kitoblar/the-adventures-of-tom-bombadil/',
  'the-fall-of-numenor': '/kitoblar/the-fall-of-numenor/',
  'fall-of-numenor': '/kitoblar/the-fall-of-numenor/',
  'the-nature-of-middle-earth': '/kitoblar/the-nature-of-middle-earth/',
  'nature-of-middle-earth': '/kitoblar/the-nature-of-middle-earth/',
  'tales-from-the-perilous-realm': '/kitoblar/tales-from-the-perilous-realm/',
  roverandom: '/kitoblar/roverandom/',
  'farmer-giles-of-ham': '/kitoblar/farmer-giles-of-ham/',
  'leaf-by-niggle': '/kitoblar/leaf-by-niggle/',
  'smith-of-wootton-major': '/kitoblar/smith-of-wootton-major/',
  'the-story-of-kullervo': '/kitoblar/the-story-of-kullervo/',
  'the-legend-of-sigurd-and-gudrun': '/kitoblar/the-legend-of-sigurd-and-gudrun/',
  'the-fall-of-arthur': '/kitoblar/the-fall-of-arthur/',
  'beowulf-the-monsters-and-the-critics': '/kitoblar/beowulf-the-monsters-and-the-critics/',
  'sir-gawain-and-the-green-knight': '/kitoblar/sir-gawain-and-the-green-knight/',
  'finn-and-hengest': '/kitoblar/finn-and-hengest/',
  'the-book-of-lost-tales-1': '/kitoblar/the-book-of-lost-tales-1/',
  'book-of-lost-tales-1': '/kitoblar/the-book-of-lost-tales-1/',
  'the-book-of-lost-tales-2': '/kitoblar/the-book-of-lost-tales-2/',
  'book-of-lost-tales-2': '/kitoblar/the-book-of-lost-tales-2/',
  'morgoths-ring': '/kitoblar/morgoths-ring/',
  'the-war-of-the-jewels': '/kitoblar/the-war-of-the-jewels/',
  'the-peoples-of-middle-earth': '/kitoblar/the-peoples-of-middle-earth/',
  'letters-from-father-christmas': '/kitoblar/letters-from-father-christmas/',
  'beowulf-a-translation-and-commentary': '/kitoblar/beowulf-a-translation-and-commentary/',
  'jrr-tolkien-a-biography': '/kitoblar/jrr-tolkien-a-biography/',

  // Nasabnomalar (src/content/genealogies/*.json)
  'durin-avlodlari': '/nasabnomalar/durin-avlodlari/',
  'edain-va-yarim-elflar': '/nasabnomalar/edain-va-yarim-elflar/',
  'elros-va-gondor-shohlari': '/nasabnomalar/elros-va-gondor-shohlari/',
  'finwe-xonadoni': '/nasabnomalar/finwe-xonadoni/',
  'rohan-shohlari': '/nasabnomalar/rohan-shohlari/',
  'shayr-xonadonlari': '/nasabnomalar/shayr-xonadonlari/',
  melian: '/qahramonlar/melian/',
  morwen: '/qahramonlar/morwen/',
  nienor: '/qahramonlar/nienor/',
  'meriadoc-brandybuck': '/qahramonlar/meriadoc-brandybuck/',
  'peregrin-took': '/qahramonlar/peregrin-took/',

  // Kosmologiya (src/content/cosmology/*.json)
  ea: '/olam/ea/',
  'ikki-daraxt': '/olam/ikki-daraxt/',
  'muqaddas-nur': '/olam/muqaddas-nur/',
  ainulindale: '/olam/ainulindale/',
  kuma: '/olam/kuma/',
  'anar-va-isil': '/olam/anar-va-isil/',
  'togri-yol-va-aklallabeth': '/olam/togri-yol-va-aklallabeth/',
  'mandos-va-fea-hroa': '/olam/mandos-va-fea-hroa/',

  // Maqolalar (src/content/articles/*.md)
  'feanor-qasamyodi-tahlili': '/maqolalar/feanor-qasamyodi-tahlili/',
  'olim-va-boqiylik-mavzusi': '/maqolalar/olim-va-boqiylik-mavzusi/',
  'sub-creation-nazariyasi': '/maqolalar/sub-creation-nazariyasi/',
  'hokimiyat-va-mashina-vasvasasi': '/maqolalar/hokimiyat-va-mashina-vasvasasi/',
  'legendarium-matn-tarixi': '/maqolalar/legendarium-matn-tarixi/',
  'kitob-va-ekran-qiyosiy-tahlil': '/maqolalar/kitob-va-ekran-qiyosiy-tahlil/',
  'jrr-tolkien-tarjimai-hol': '/tolkien/tarjimai-hol/',
  'tarjimai-hol': '/tolkien/tarjimai-hol/',
  'jrr-tolkien-filologiya-va-beowulf': '/tolkien/filologiya-va-beowulf/',
  'filologiya-va-beowulf': '/tolkien/filologiya-va-beowulf/',
};

/**
 * 4. Asosiy entiti bogʻlovchi (Single Link Resolver)
 *
 * @param id Entiti identifikatori (slug)
 * @param collectionHint Agar toʻplam oldindan maʼlum boʻlsa (masalan, character ichidan)
 */
export function resolveEntityLink(
  id: string,
  collectionHint?: EntityCollection
): ResolvedEntityLink {
  const normalizedId = id.trim().toLowerCase();
  const known = CANONICAL_REGISTRY[normalizedId];
  const generatedHref = GENERATED_ENTITY_ROUTES[normalizedId];

  if (known) {
    const targetCollection = collectionHint || known.collection;
    return {
      id: normalizedId,
      name: known.name,
      href: generatedHref,
      collection: targetCollection,
      isKnown: true,
    };
  }

  // Nomaʼlum entiti boʻlsa, chiroyli nom berib, hrefni undefined qoldiramiz (singan havola boʻlmasligi uchun)
  const fallbackName = normalizedId
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    id: normalizedId,
    name: fallbackName,
    href: generatedHref,
    collection: collectionHint,
    isKnown: false,
  };
}

/**
 * 4. Bir nechta entitilarni massiv sifatida yechuvchi funksiya
 */
export function resolveEntityLinks(
  ids: string[],
  collectionHint?: EntityCollection
): ResolvedEntityLink[] {
  return ids.map((id) => resolveEntityLink(id, collectionHint));
}

/**
 * 5. Kitob iqtibosini yechuvchi funksiya
 */
export function resolveBookCitation(bookSlug: string): BookCitationMeta {
  const normalized = bookSlug.trim().toLowerCase();
  const meta = BOOK_CITATION_REGISTRY[normalized];

  if (meta) {
    return meta;
  }

  const fallbackTitle = normalized
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return {
    id: normalized,
    title: fallbackTitle,
    author: 'Tolkien, J.R.R.',
    href: undefined,
  };
}

/**
 * 6. Slug toʻqnashuvlarini aniqlovchi funksiya (Slug Collision Detector)
 *
 * Xususan, bitta URL ostida jamlangan `peoples` va `languages` toʻplamlarida
 * takrorlanuvchi identifikatorlar boʻlmasligini kafolatlaydi.
 */
export function checkSlugCollisions(
  entries: Array<{ id: string; collection: string }>
): { collisions: string[]; isValid: boolean } {
  const seen = new Map<string, string>();
  const collisions: string[] = [];

  for (const entry of entries) {
    const key = entry.id.toLowerCase();
    if (seen.has(key)) {
      collisions.push(`Toʻqnashuv: "${key}" ID si "${seen.get(key)}" va "${entry.collection}" da takrorlandi`);
    } else {
      seen.set(key, entry.collection);
    }
  }

  return {
    collisions,
    isValid: collisions.length === 0,
  };
}
