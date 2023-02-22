export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
    url: string;
   image: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'CHANEL Coco Mademoiselle парфюмерная вода EDP 50 мл',
      price: 64498,
      description: 'Тип:парфюмерная вода EDP, Объем:50 мл,  Пол:для женщин, Семейство:восточные, цветочные, Страна бренда:Франция',
      rating:5,
      url:'https://kaspi.kz/shop/p/chanel-coco-mademoiselle-parfjumernaja-voda-edp-50-ml-17302625/?c=750000000#!/item',
      image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbe/h87/31782067372062/chanel-coco-mademoiselle-edp-50-ml-17302625-1.jpg'
    },
    {
      id: 2,
      name: 'Versace Bright Crystal туалетная вода EDT 30 мл',
      price: 21495,
      description: 'Тип:парфюмерная вода EDP, Объем:30 мл,  Пол:для женщин, Семейство:цветочные, Страна бренда:Италия',
      rating:5,
      url:'https://kaspi.kz/shop/p/versace-bright-crystal-tualetnaja-voda-edt-30-ml-17300750/?c=750000000#!/item',
      image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd2/hbc/49808463265822/versace-bright-crystal-edt-30-ml-17300750-1-Container.jpg'
    } 
    ,
     {
      id: 3,
      name: 'Noor Alazawi кварцевый роллер',
      price: 1349,
      description: 'тип: кварцевый роллер, ,скребок гуаша , область применения: для лица, ,для шеи, ,для декольте, материал: кварц',
      rating:5,
      url:'https://kaspi.kz/shop/p/noor-alazawi-kvartsevyi-roller-skrebok-guasha-kvarts-zelenyi-101991780/?c=750000000#!/item',
      image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdc/h70/49954776285214/noor-alazawi-nefritovyj-guasa-i-roller-101991780-1-Container.jpg'
    },
    {
      id: 4,
      name: 'Estee Lauder Advanced Night Repair сыворотка для лица 50 мл',
      price: 50363,
      description: 'тип: сыворотка,действие: разглаживание, ,сияние, ,выравнивание, ,антивозрастной,область нанесения: для лица, тип кожи: для всех типов, страна производства: США',
      rating:5,
      url:'https://kaspi.kz/shop/p/estee-lauder-advanced-night-repair-syvorotka-dlja-litsa-50-ml-103071574/?c=750000000#!/item',
      image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc0/h55/49876070760478/estee-lauder-advanced-night-repair-syvorotka-dla-lica-50-ml-103071574-3.jpg'
    },
    {
      id: 5,
      name: 'Dior Sauvage парфюмерная вода EDP 60 мл',
      price: 44181,
      description: 'тип: парфюмерная вода EDP , объем: 60 мл , пол: для мужчин , семейство: восточные, ,фужерные , страна бренда: Франция',
      rating:5,
      url:'https://kaspi.kz/shop/p/dior-sauvage-parfjumernaja-voda-edp-60-ml-17302960/?c=750000000#!/item',
      image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha6/h83/31779708928030/dior-sauvage-parfyumernaya-voda-edp-60-ml-17302960-2.jpg'
    },
    {
      id: 6,
      name: 'Dior Backstage Face Body Foundation тональный крем 1.5N 50 мл',
      price: 30000,
      description: 'тип: тональный крем,тип кожи: для всех типов , оттенок: натуральный бежевый ,страна производства: Франция',
      rating:5,
      url:'https://kaspi.kz/shop/p/dior-backstage-face-body-foundation-tonal-nyi-krem-1-5n-50-ml-104108912/?c=750000000#!/item',
      image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfa/h92/52231715291166/dior-backstage-face-body-foundation-tonalnyj-krem-1-5n-50-ml-104108912-2.jpg'
    },
    {
      id: 7,
      name: 'KINDER Pingui бисквит молочный, шоколадный 30 г',
      price: 329,
      description: 'тип: бисквит, основа: молочная , особенности: глазированный , страна производства: Россия',
      rating:5,
      url:'https://kaspi.kz/shop/p/kinder-pingui-biskvit-molochnyi-shokoladnyi-30-g-100237369/?c=750000000#!/item',
      image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/h91/45303668310046/kinder-pingui-biskvit-s-sokoladom-30-g-100237369-1-Container.jpg'
    },
    {
      id: 8,
      name: 'Смартфон Apple iPhone 12 mini 128Gb белый',
      price: 394400,
      description: 'технология NFC: Да, цвет: белый , тип экрана: сенсорный, мультитач OLED Super Retina XDR , диагональ: 5.4 дюйм , размер оперативной памяти: 4 ГБ, процессор: 6-ядерный Apple A14 Bionic, объем встроенной памяти: 128 ГБ , емкость аккумулятора: 2227 мАч',
      rating:5,
      url:'https://kaspi.kz/shop/p/apple-iphone-12-mini-128gb-belyi-100657858/?c=750000000#!/item',
      image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8d/h62/33281796243486/apple-iphone-12-mini-128gb-belyj-100657858-1-Container.jpg'
    },
    {
      id: 9,
      name: 'Heimish All Clean Balm бальзам 120 мл',
      price: 5737,
      description: 'тип: бальзам, объем: 120 мл, тип кожи: для всех типов, страна производства: Корея',
      rating:5,
      url:'https://kaspi.kz/shop/p/heimish-all-clean-balm-bal-zam-120-ml-100341040/?c=750000000#!/item',
      image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb2/h4d/49837555646494/heimish-all-clean-balm-balzam-120-ml-100341040-3.jpg'
    },
    {
      id: 10,
      name: 'Dyson Airwrap HS01 фен-щетка 1300 W',
      price: 499990,
      description: 'тип: фен-щетка, мощность, Вт: 1300, в комплекте: насадка-щетка, ,насадка цилиндрическая ,конструкция: сменные насадки, цвет: серый, ,розовый, страна производитель: Малайзия',
      rating:5,
      url:'https://kaspi.kz/shop/p/dyson-airwrap-hs01-fen-schetka-1300-w-5301764/?c=750000000#!/item',
      image:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8c/hb0/50783429459998/dyson-airwrap-complete-dla-raznyh-tipov-volos-5301764-2-Container.jpg'
    },
  ]
  