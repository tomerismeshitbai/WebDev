export interface Product {
  id: number;
  name: string;
  price: number;
  rating: string;
  description: string;
  url:string;
  img:string;
  category:string;
  like:number;
}

export const products : Product[]= [
  {
    id: 1,
    name: 'Смартфон apple iphone 13 128Gb ',
    price: 373700,
    rating: '10/10',
    description: 'цвет: синий; тип экрана: OLED, Super Retina XDR; диагональ: 6.1 дюйм',
    url:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h91/h1d/46392661737502/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg',
    category: 'Mobile_phones',
    like:0,
  },
  {
    id: 2,
    name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ',
    price: 128350,
    rating: '10/10',
    description: 'цвет: серый; тип экрана: цветной AMOLED, сенсорный; диагональ: 6.67 дюйм',
    url:'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    category: 'Mobile_phones',
    like:0,
  },
  {
    id: 3,
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ',
    price: 71637,
    rating: '7.5/10',
    description: 'цвет: серый; тип экрана: IPS, сенсорный, мультитач; диагональ: 6.71 дюйм',
    url:'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg',
    category:'Mobile_phones',
    like:0,
  },
  {
    id: 4,
    name: 'Смартфон Apple iPhone 14 Pro Max 256Gb',
    price: 691600,
    rating: '7/10',
    description: 'тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы; диагональ: 6.7 дюйm',
    url:'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h00/h18/62948780834846/apple-iphone-14-pro-max-128gb-fioletovyj-106363342-1.jpg',
    category:'Mobile_phones',
    like:0,
  },
  {
    id: 5,
    name: 'Смартфон Huawei nova 10 SE 8 ГБ/128 ГБ',
    price: 189890,
    rating: '7/10',
    description: 'цвет: зеленый; тип экрана: OLED FHD+; диагональ: 6.67 дюйм',
    url:'https://kaspi.kz/shop/p/huawei-nova-10-se-8-gb-128-gb-zelenyi-107221521/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/he9/64494466301982/huawei-nova-10-se-8-gb-128-gb-zelenyi-podarok-huawei-y5p-i-selfie-stick-pro-107221521-1.jpg',
    category:'Mobile_phones',
    like:0,
  },
  {
    id: 6,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 Gray',
    price: 480550,
    rating: '8/10',
    description: 'диагональ экрана: 13.3 дюйм; процессор: Apple M1; видеокарта: Apple M1 7 core; Memory: 256gb',
    url:'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/hbb/52177862557726/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-2-Container.jpg',
    category:'Laptop',
    like:0,
  },
  {
    id: 7,
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 389900,
    rating: '9/10',
    description: 'диагональ экрана: 15.6 дюйм; процессор: Intel Core i5 11400H; видеокарта: NVIDIA GeForce GTX 1650; общий объем накопителей: 512 ГБ',
    url:'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg',
    category:'Laptop',
    like:0,
  },
  {
    id: 8,
    name: 'Ноутбук ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый',
    price: 239990,
    rating: '8/10',
    description: 'общий объем накопителей: 512 ГБ; диагональ экрана: 15.6 дюйм; процессор: Intel Core i3 1115G4; видеокарта: Intel UHD Graphics',
    url:'https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbd/65953424277534/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg',
    category:'Laptop',
    like:0,
  },
  {
    id: 9,
    name: 'Ноутбук HP 15s-eq1387ur 4Z3A4EA серебристый',
    price: 179900,
    rating: '8/10',
    description: 'диагональ экрана: 15.6 дюйм; процессор: AMD Athlon 3150U; видеокарта: AMD Radeon Graphics;общий объем накопителей: 256 ГБ',
    url:'https://kaspi.kz/shop/p/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7e/h84/67253149728798/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227-2.jpg',
    category:'Laptop',
    like:0,
  },
  {
    id: 10,
    name: 'Ноутбук Apple MacBook Pro 13 MYD82 серый ',
    price: 674218,
    rating: '8.5/10',
    description: 'диагональ экрана: 13.3 дюйм; процессор: Apple M1; тип жесткого диска: SSD; общий объем накопителей: 256 ГБ',
    url:'https://kaspi.kz/shop/p/apple-macbook-pro-13-myd82-seryi-100797630/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/hd7/33090953773086/apple-macbook-pro-13-myd82-seryi-100797630-1.jpg',
    category:'Laptop',
    like:0,
  },
  {
    id:11,
    name:'Телевизор Samsung UE43T5300AUXCE 109 см черный',
    price: 198760,
    rating:'7.5/10',
    description:'тип: LED-телевизор; диагональ: 43 дюйм; технология Smart TV: Да; wi-Fi: Да;разрешение: 1920x1080',
    url:'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h18/49319748468766/samsung-ue43t5300au-chernyi-100182013-1.jpg',
    category:'Tv',
    like:0,
  },
  {
    id:12,
    name:'Телевизор Xiaomi TV P1 32 L32M6-6ARG 81 см черный',
    price:119990,
    rating:'8/10',
    description:'тип: LED-телевизор; диагональ: 32 дюйм; разрешение: 1366x768; поддержка HD: 720p HD; технология Smart TV: Да; wi-Fi: Да',
    url:'https://kaspi.kz/shop/p/xiaomi-tv-p1-32-l32m6-6arg-81-sm-chernyi-103039169/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/hd2/49320434008094/xiaomi-l32m6-6arg-81-sm-cernyj-103039169-1.jpg',
    category:'Tv',
    like:0,
  },
  {
    id:13,
    name:'Телевизор TCL 43P615 109 см черный',
    price:156959,
    rating:'8/10',
    description:'тип: LED-телевизор; диагональ: 43 дюйм; разрешение: 3840x2160; поддержка HD: 4K HDR; технология Smart TV: Да; wi-Fi: Да',
    url:'https://kaspi.kz/shop/p/tcl-43p615-109-sm-chernyi-102569498/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/h67/46526308188190/tcl-43p615-cernyj-102569498-1.jpg',
    category:'Tv',
    like:0,
  },
  {
    id:14,
    name:'Телевизор LG 50UQ76003LD 127 см черный',
    price:267690,
    rating:'8.5/10',
    description:'тип: LED-телевизор; диагональ: 50 дюйм; разрешение: 3840x2160; поддержка HD: 4K HDR; технология Smart TV: Да; wi-Fi: Да',
    url:'https://kaspi.kz/shop/p/lg-50uq76003ld-127-sm-chernyi-105054596/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5f/h35/51110128386078/lg-50uq76003ld-chernyi-105054596-1.jpg',
    category:'Tv',
    like:0,
  },
  {
    id:15,
    name:'Телевизор Samsung UE55BU8000UXCE 140 см черный',
    price:342945,
    rating:'8/10',
    description:'тип: LED-телевизор; диагональ: 55 дюйм; разрешение: 3840x2160; поддержка HD: 4K HDR; технология Smart TV: Да; wi-Fi: Да',
    url:'https://kaspi.kz/shop/p/samsung-ue55bu8000uxce-140-sm-chernyi-105986796/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/hbe/61591524343838/samsung-ue55bu8000uxce-cernyj-105986796-1.jpg',
    category:'Tv',
    like:0,
  },
  {
    id:16,
    name:'Холодильник Samsung RB37A5200SA серебристый',
    price:286999,
    rating:'8/10',
    description:'тип: холодильник с морозильником; количество камер: 2; класс энергопотребления: класс A+; габариты (ШxГxВ): 59.5x64.7x201 см; размораживание морозильной камеры: No Frost',
    url:'https://kaspi.kz/shop/p/samsung-rb37a5200sa-serebristyi-100727008/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/hde/32358565609502/samsung-rb37a5200sa-serebristyj-100727008-1-Container.jpg',
    category:'Appliances',
    like:0,
  },
  {
    id:17,
    name:'Кондиционер DAUSCHER DAC-09OA + монтажный комплект',
    price:109290,
    rating:'8/10',
    description:'способ установки: настенный; основные режимы: охлаждение / обогрев; режим приточной вентиляции: Нет; фильтры тонкой очистки воздуха: Нет; обслуживаемая площадь: 25 кв.м; монтажный комплект: Да',
    url:'https://kaspi.kz/shop/p/dauscher-dac-09oa-montazhnyi-komplekt-105201165/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/h04/51357062430750/dauscher-dac-09oa-montazhnyi-komplekt-105201165-1.jpg',
    category:'Appliances',
    like:0,
  },
  {
    id:18,
    name:'Швейная машина Janome HomeDecor 2077 белый',
    price:79990,
    rating:'8/10',
    description:'количество швейных операций: 15; тип управления: электромеханическое; конструкция: отсек для аксессуаров, ,рукавная платформа; подключение к компьютеру: Нет',
    url:'https://kaspi.kz/shop/p/janome-homedecor-2077-belyi-5000565/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7a/h8f/31542884466718/janome-homedecor-2077-white-5000565-1-Container.jpg',
    category:'Appliances',
    like:0,
  },
  {
    id:19,
    name:'Телевизор Samsung UE55BU8000UXCE 140 см черный',
    price:342945,
    rating:'8/10',
    description:'тип: LED-телевизор; диагональ: 55 дюйм; разрешение: 3840x2160; поддержка HD: 4K HDR; технология Smart TV: Да; wi-Fi: Да',
    url:'https://kaspi.kz/shop/p/samsung-ue55bu8000uxce-140-sm-chernyi-105986796/?c=750000000#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/hbe/61591524343838/samsung-ue55bu8000uxce-cernyj-105986796-1.jpg',
    category:'Appliances',
    like:0,
  },
  {
    id:20,
    name:'Пылесос Karcher VC 3 Premium белый',
    price:69250,
    rating:'8/10',
    description:'тип: традиционный; уборка: сухая; тип пылесборника: циклонный фильтр; потребляемая мощность: 700 Вт; источник питания: сеть',
    url:'https://kaspi.kz/shop/p/karcher-vc-3-premium-belyi-3700709/?c=750000000&ysclid=leps5i3swf963124786#!/item',
    img:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/h21/31633788436510/karcher-vc-3-premium-belyj-3700709-1-Container.jpg',
    category:'Appliances',
    like:0,
  }
];// export interface Product {
//     id: number;
//     name: string;
//     price: number;
//     description: string;
//     rating: number;
//     url: string;
//    image: string;
//   //  category:string;
//   }

  
//   export const products = [
//     {
//       id: 1,
//       name: 'CHANEL Coco Mademoiselle парфюмерная вода EDP 50 мл',
//       price: 64498,
//       description: 'Тип:парфюмерная вода EDP, Объем:50 мл,  Пол:для женщин, Семейство:восточные, цветочные, Страна бренда:Франция',
//       rating:5,
//       url:'https://kaspi.kz/shop/p/chanel-coco-mademoiselle-parfjumernaja-voda-edp-50-ml-17302625/?c=750000000#!/item',
//       image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbe/h87/31782067372062/chanel-coco-mademoiselle-edp-50-ml-17302625-1.jpg'
  
//     },
//     {
//       id: 2,
//       name: 'Versace Bright Crystal туалетная вода EDT 30 мл',
//       price: 21495,
//       description: 'Тип:парфюмерная вода EDP, Объем:30 мл,  Пол:для женщин, Семейство:цветочные, Страна бренда:Италия',
//       rating:5,
//       url:'https://kaspi.kz/shop/p/versace-bright-crystal-tualetnaja-voda-edt-30-ml-17300750/?c=750000000#!/item',
//       image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/hbc/49808463265822/versace-bright-crystal-edt-30-ml-17300750-1-Container.jpg'
//     } 
//     ,
//      {
//       id: 3,
//       name: 'Noor Alazawi кварцевый роллер',
//       price: 1349,
//       description: 'тип: кварцевый роллер, ,скребок гуаша , область применения: для лица, ,для шеи, ,для декольте, материал: кварц',
//       rating:5,
//       url:'https://kaspi.kz/shop/p/noor-alazawi-kvartsevyi-roller-skrebok-guasha-kvarts-zelenyi-101991780/?c=750000000#!/item',
//       image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdc/h70/49954776285214/noor-alazawi-nefritovyj-guasa-i-roller-101991780-1-Container.jpg'
//     },
//     {
//       id: 4,
//       name: 'Estee Lauder Advanced Night Repair сыворотка для лица 50 мл',
//       price: 50363,
//       description: 'тип: сыворотка,действие: разглаживание, ,сияние, ,выравнивание, ,антивозрастной,область нанесения: для лица, тип кожи: для всех типов, страна производства: США',
//       rating:5,
//       url:'https://kaspi.kz/shop/p/estee-lauder-advanced-night-repair-syvorotka-dlja-litsa-50-ml-103071574/?c=750000000#!/item',
//       image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc0/h55/49876070760478/estee-lauder-advanced-night-repair-syvorotka-dla-lica-50-ml-103071574-3.jpg'
//     },
//     {
//       id: 5,
//       name: 'Dior Sauvage парфюмерная вода EDP 60 мл',
//       price: 44181,
//       description: 'тип: парфюмерная вода EDP , объем: 60 мл , пол: для мужчин , семейство: восточные, ,фужерные , страна бренда: Франция',
//       rating:5,
//       url:'https://kaspi.kz/shop/p/dior-sauvage-parfjumernaja-voda-edp-60-ml-17302960/?c=750000000#!/item',
//       image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha6/h83/31779708928030/dior-sauvage-parfyumernaya-voda-edp-60-ml-17302960-2.jpg'
//     },
//     {
//       id: 6,
//       name: 'Dior Backstage Face Body Foundation тональный крем 1.5N 50 мл',
//       price: 30000,
//       description: 'тип: тональный крем,тип кожи: для всех типов , оттенок: натуральный бежевый ,страна производства: Франция',
//       rating:5,
//       url:'https://kaspi.kz/shop/p/dior-backstage-face-body-foundation-tonal-nyi-krem-1-5n-50-ml-104108912/?c=750000000#!/item',
//       image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h92/52231715291166/dior-backstage-face-body-foundation-tonalnyj-krem-1-5n-50-ml-104108912-2.jpg'
//     },
//     {
//       id: 7,
//       name: 'KINDER Pingui бисквит молочный, шоколадный 30 г',
//       price: 329,
//       description: 'тип: бисквит, основа: молочная , особенности: глазированный , страна производства: Россия',
//       rating:5,
//       url:'https://kaspi.kz/shop/p/kinder-pingui-biskvit-molochnyi-shokoladnyi-30-g-100237369/?c=750000000#!/item',
//       image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h91/45303668310046/kinder-pingui-biskvit-s-sokoladom-30-g-100237369-1-Container.jpg'
//     },
//     {
//       id: 8,
//       name: 'Смартфон Apple iPhone 12 mini 128Gb белый',
//       price: 394400,
//       description: 'технология NFC: Да, цвет: белый , тип экрана: сенсорный, мультитач OLED Super Retina XDR , диагональ: 5.4 дюйм , размер оперативной памяти: 4 ГБ, процессор: 6-ядерный Apple A14 Bionic, объем встроенной памяти: 128 ГБ , емкость аккумулятора: 2227 мАч',
//       rating:5,
//       url:'https://kaspi.kz/shop/p/apple-iphone-12-mini-128gb-belyi-100657858/?c=750000000#!/item',
//       image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8d/h62/33281796243486/apple-iphone-12-mini-128gb-belyj-100657858-1-Container.jpg'
//     },
//     {
//       id: 9,
//       name: 'Heimish All Clean Balm бальзам 120 мл',
//       price: 5737,
//       description: 'тип: бальзам, объем: 120 мл, тип кожи: для всех типов, страна производства: Корея',
//       rating:5,
//       url:'https://kaspi.kz/shop/p/heimish-all-clean-balm-bal-zam-120-ml-100341040/?c=750000000#!/item',
//       image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/h4d/49837555646494/heimish-all-clean-balm-balzam-120-ml-100341040-3.jpg'
//     },
//     {
//       id: 10,
//       name: 'Dyson Airwrap HS01 фен-щетка 1300 W',
//       price: 499990,
//       description: 'тип: фен-щетка, мощность, Вт: 1300, в комплекте: насадка-щетка, ,насадка цилиндрическая ,конструкция: сменные насадки, цвет: серый, ,розовый, страна производитель: Малайзия',
//       rating:5,
//       url:'https://kaspi.kz/shop/p/dyson-airwrap-hs01-fen-schetka-1300-w-5301764/?c=750000000#!/item',
//       image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8c/hb0/50783429459998/dyson-airwrap-complete-dla-raznyh-tipov-volos-5301764-2-Container.jpg'
//     },
//   ]
  