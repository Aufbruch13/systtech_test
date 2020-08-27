'use strict';


const receiptsArray = [{
    "date": "2017-10-16 12:07:07",
    "name": "Творог 9% с курагой",
    "id": 564564867361367,
    "image": "http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg",
    "price": 121,
    "quantity": 45,
    "removed": 0
}, {
    "date": "2017-10-16 12:07:07",
    "name": "Молочный Яблоко 100",
    "id": 564564867361367,
    "image": "https://www.utkonos.ru/images/photo/3265/3265004H.jpg",
    "price": 25.1,
    "quantity": 44,
    "removed": 0
}, {
    "date": "2017-10-16 12:07:07",
    "name": "Молочный Традиция 100",
    "id": 564564867361367,
    "image": "http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG",
    "price": 115,
    "quantity": 62,
    "removed": 0
}, {
    "date": "2017-10-16 12:07:07",
    "name": "Виноград 0,3л",
    "id": 564564867361367,
    "image": null,
    "price": 65,
    "quantity": 87,
    "removed": 0
}, {
    "date": "2017-10-16 12:07:07",
    "name": "Русская картошка чедар 50",
    "id": 564564867361367,
    "image": "https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg",
    "price": 46.3,
    "quantity": 86,
    "removed": 0
}, {
    "date": "2017-10-16 12:07:07",
    "name": "Молочный Груша 200",
    "id": 564564867361367,
    "image": "https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg",
    "price": 180,
    "quantity": 80,
    "removed": 0
}, {
    "date": "2017-10-16 12:07:07",
    "name": "Аленка карамель 100г Акционный товар Большая скидка",
    "id": 564564867361367,
    "image": "https://www.utkonos.ru/images/photo/3054/3054289H.jpg",
    "price": 73.9,
    "quantity": 94,
    "removed": 0
}, {
    "date": "2017-10-16 12:07:07",
    "name": "Сыр 125г",
    "id": 564564867361367,
    "image": "https://www.utkonos.ru/images/photo/3176/3176192H.jpg",
    "price": 131,
    "quantity": 83,
    "removed": 0
}, {
    "date": "2017-10-16 15:09:08",
    "name": "Яблоко-Виноград 0,5л",
    "id": 564564867361368,
    "image": "http://карапузик.com.images.1c-bitrix-cdn.ru/upload/iblock/b28/b28f089d41db757b74cfebfe21609228.jpg",
    "price": 44,
    "quantity": 20,
    "removed": 0
}, {
    "date": "2017-10-16 15:09:08",
    "name": "Молочный Груша 200",
    "id": 564564867361368,
    "image": "https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg",
    "price": 180,
    "quantity": 65,
    "removed": 0
}, {
    "date": "2017-10-16 15:09:08",
    "name": "Творог 9% с курагой",
    "id": 564564867361368,
    "image": "http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg",
    "price": 121,
    "quantity": 41,
    "removed": 0
}, {
    "date": "2017-10-16 15:09:08",
    "name": "Молочный Изюм 100",
    "id": 564564867361368,
    "image": "https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg",
    "price": 102,
    "quantity": 72,
    "removed": 0
}, {
    "date": "2017-10-16 15:09:08",
    "name": "Виноград 0,3л",
    "id": 564564867361368,
    "image": null,
    "price": 65,
    "quantity": 39,
    "removed": 0
}, {
    "date": "2017-10-16 18:11:09",
    "name": "Молочный Традиция 100",
    "id": 564564867361369,
    "image": "http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG",
    "price": 115,
    "quantity": 60,
    "removed": 0
}, {
    "date": "2017-10-16 18:11:09",
    "name": "Аленка карамель 100г Акционный товар Большая скидка",
    "id": 564564867361369,
    "image": "https://www.utkonos.ru/images/photo/3054/3054289H.jpg",
    "price": 73.9,
    "quantity": 99,
    "removed": 0
}, {
    "date": "2017-10-16 18:11:09",
    "name": "Русская картошка чедар 50",
    "id": 564564867361369,
    "image": "https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg",
    "price": 46.3,
    "quantity": 51,
    "removed": 0
}, {
    "date": "2017-10-16 18:11:09",
    "name": "Русская картошка икра 50",
    "id": 564564867361369,
    "image": "https://www.utkonos.ru/images/photo/3117/3117496H.jpg",
    "price": 33.1,
    "quantity": 15,
    "removed": 0
}, {
    "date": "2017-11-01 12:09:03",
    "name": "Молочный Груша 200",
    "id": 564564867361360,
    "image": "https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg",
    "price": 180,
    "quantity": 96,
    "removed": 0
}, {
    "date": "2017-11-01 12:09:03",
    "name": "Молочный Яблоко 100",
    "id": 564564867361360,
    "image": "https://www.utkonos.ru/images/photo/3265/3265004H.jpg",
    "price": 25.1,
    "quantity": 9,
    "removed": 0
}, {
    "date": "2017-11-03 13:11:06",
    "name": "Русская картошка чедар 50",
    "id": 564564867361361,
    "image": "https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg",
    "price": 46.3,
    "quantity": 62,
    "removed": 0
}, {
    "date": "2017-11-03 13:11:06",
    "name": "Молочный Сказка 100",
    "id": 564564867361361,
    "image": "http://produkty-online.ru/wa-data/public/shop/products/31/83/18331/images/1359/1359.970.jpg",
    "price": 39,
    "quantity": 67,
    "removed": 0
}, {
    "date": "2017-11-03 13:11:06",
    "name": "Тоник 0,5л",
    "id": 564564867361361,
    "image": "https://www.utkonos.ru/images/photo/3139/3139296H.jpg",
    "price": 63,
    "quantity": 51,
    "removed": 0
}, {
    "date": "2017-11-03 13:11:06",
    "name": "Молочный Изюм 100",
    "id": 564564867361361,
    "image": "https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg",
    "price": 102,
    "quantity": 4,
    "removed": 0
}, {
    "date": "2017-11-03 13:11:06",
    "name": "Творог 9% с курагой",
    "id": 564564867361361,
    "image": "http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg",
    "price": 121,
    "quantity": 60,
    "removed": 0
}, {
    "date": "2017-11-03 13:11:06",
    "name": "Виноград 0,3л",
    "id": 564564867361361,
    "image": null,
    "price": 65,
    "quantity": 61,
    "removed": 0
}, {
    "date": "2017-11-03 13:11:06",
    "name": "Беседа. 50гр",
    "id": 564564867361361,
    "image": "http://xn--4-8sbu.xn--p1ai/thumb/4KQdJOhw0Uu5AnP0PPIrMQ/200r200/761268/3152.png",
    "price": 36.5,
    "quantity": 41,
    "removed": 0
}, {
    "date": "2017-11-03 13:11:06",
    "name": "Молочный Изюм 100",
    "id": 564564867361362,
    "image": "https://www.komus.ru/medias/sys_master/root/hd3/h93/9286922043422.jpg",
    "price": 102,
    "quantity": 3,
    "removed": 0
}, {
    "date": "2017-11-03 13:11:06",
    "name": "Сыр 125г",
    "id": 564564867361362,
    "image": "https://www.utkonos.ru/images/photo/3176/3176192H.jpg",
    "price": 131,
    "quantity": 96,
    "removed": 0
}, {
    "date": "2017-11-03 13:11:06",
    "name": "Тоник 0,5л",
    "id": 564564867361362,
    "image": "https://www.utkonos.ru/images/photo/3139/3139296H.jpg",
    "price": 63,
    "quantity": 31,
    "removed": 0
}, {
    "date": "2017-11-03 13:11:06",
    "name": "Капля росы негаз 1.5л",
    "id": 564564867361362,
    "image": "http://www.svoda.ru/site/userfiles/images/%D0%9A%D0%90%D0%9F%D0%9B%D0%AF%20%D0%A0%D0%9E%D0%A1%D0%AB%201.5%D0%9B%20%D0%93%D0%90%D0%97%D0%98%D0%A0%D0%9E%D0%92%D0%90%D0%9D%D0%9D%D0%90%D0%AF.jpg",
    "price": 16.9,
    "quantity": 16,
    "removed": 0
}, {
    "date": "2017-11-03 13:11:06",
    "name": "Нежирный творог",
    "id": 564564867361362,
    "image": "http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-prostokvashino-1.jpg",
    "price": 52.41,
    "quantity": 81,
    "removed": 0
}, {
    "date": "2017-11-03 13:11:06",
    "name": "Творог 9% с курагой",
    "id": 564564867361362,
    "image": "http://ecosned.ru/image/cache/catalog/categories/iz_fermerskogo_moloka/tvorog/7/ge-catalog-categories-iz_fermerskogo_moloka-tvorog-tvorozhnaya_massa_s_kuragoy-800x800.jpg",
    "price": 121,
    "quantity": 23,
    "removed": 0
}, {
    "date": "2017-11-03 13:11:06",
    "name": "Горький коньяк 100",
    "id": 564564867361362,
    "image": "https://tashkentcena.com/files/products/893eebe7b69146290886dc504a3328ef.jpeg",
    "price": 336,
    "quantity": 52,
    "removed": 0
}, {
    "date": "2017-11-03 13:11:06",
    "name": "Аленка карамель 100г Акционный товар Большая скидка",
    "id": 564564867361362,
    "image": "https://www.utkonos.ru/images/photo/3054/3054289H.jpg",
    "price": 73.9,
    "quantity": 12,
    "removed": 0
}, {
    "date": "2017-11-29 17:26:57",
    "name": "Русская картошка чедар 50",
    "id": 564564867361365,
    "image": "https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg",
    "price": 46.3,
    "quantity": 3,
    "removed": 0
}, {
    "date": "2017-11-29 17:26:57",
    "name": "Виноград 0,3л",
    "id": 564564867361365,
    "image": null,
    "price": 65,
    "quantity": 88,
    "removed": 0
}, {
    "date": "2017-11-29 17:26:57",
    "name": "Нежирный творог",
    "id": 564564867361365,
    "image": "http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/tvorog-prostokvashino-1.jpg",
    "price": 52.41,
    "quantity": 20,
    "removed": 0
}, {
    "date": "2017-11-29 17:26:57",
    "name": "Тоник 0,5л",
    "id": 564564867361365,
    "image": "https://www.utkonos.ru/images/photo/3139/3139296H.jpg",
    "price": 63,
    "quantity": 64,
    "removed": 0
}, {
    "date": "2017-11-29 17:26:57",
    "name": "Молочный Сказка 100",
    "id": 564564867361365,
    "image": "http://produkty-online.ru/wa-data/public/shop/products/31/83/18331/images/1359/1359.970.jpg",
    "price": 39,
    "quantity": 54,
    "removed": 0
}, {
    "date": "2017-11-29 17:26:57",
    "name": "Сметана и лук 25г",
    "id": 564564867361365,
    "image": "https://teremok.sm.ua/wa-data/public/shop/products/82/25/82582/images/35179/35179.750@2x.jpg",
    "price": 30,
    "quantity": 33,
    "removed": 0
}, {
    "date": "2017-11-29 17:26:57",
    "name": "Беседа. 50гр",
    "id": 564564867361365,
    "image": "http://xn--4-8sbu.xn--p1ai/thumb/4KQdJOhw0Uu5AnP0PPIrMQ/200r200/761268/3152.png",
    "price": 36.5,
    "quantity": 6,
    "removed": 0
}, {
    "date": "2017-11-29 18:29:00",
    "name": "Молочный Традиция 100",
    "id": 564564867361364,
    "image": "http://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/299388/Ydfgl76IXe0nEM2gO6Ww.JPG",
    "price": 115,
    "quantity": 64,
    "removed": 0
}, {
    "date": "2017-11-29 19:31:03",
    "name": "Русская картошка чедар 50",
    "id": 564564867361363,
    "image": "https://mariupolcena.com/files/products/9ff44136e6ccb0afb404ad26f727e67d.jpeg",
    "price": 46.3,
    "quantity": 6,
    "removed": 0
}, {
    "date": "2017-11-29 19:31:03",
    "name": "Сметана и лук 25г",
    "id": 564564867361363,
    "image": "https://teremok.sm.ua/wa-data/public/shop/products/82/25/82582/images/35179/35179.750@2x.jpg",
    "price": 30,
    "quantity": 18,
    "removed": 0
}, {
    "date": "2017-11-29 19:31:03",
    "name": "Беседа. 50гр",
    "id": 564564867361363,
    "image": "http://xn--4-8sbu.xn--p1ai/thumb/4KQdJOhw0Uu5AnP0PPIrMQ/200r200/761268/3152.png",
    "price": 36.5,
    "quantity": 99,
    "removed": 0
}, {
    "date": "2017-11-29 19:31:03",
    "name": "Горький коньяк 100",
    "id": 564564867361363,
    "image": "https://tashkentcena.com/files/products/893eebe7b69146290886dc504a3328ef.jpeg",
    "price": 336,
    "quantity": 94,
    "removed": 0
}, {
    "date": "2017-11-29 19:31:03",
    "name": "Сыр 125г",
    "id": 564564867361363,
    "image": "https://www.utkonos.ru/images/photo/3176/3176192H.jpg",
    "price": 131,
    "quantity": 64,
    "removed": 0
}, {
    "date": "2017-11-29 19:31:03",
    "name": "Молочный Яблоко 100",
    "id": 564564867361363,
    "image": "https://www.utkonos.ru/images/photo/3265/3265004H.jpg",
    "price": 25.1,
    "quantity": 52,
    "removed": 0
}];



const dateConversion = (item) => { // конвертация даты в формат 'число месяц' (кириллица)
    const date = item.date.split(' ')[0];

    const options = {
        month: 'long',
        day: 'numeric',
        timezone: 'UTC'
    };
    item.date = new Date(date).toLocaleString("ru", options);

    return item;
}


const sortArr = receiptsArray.map(dateConversion) //сортировка 
    .sort((item1, item2) => item1.date - item2.date);



const result = [];
let prevDate = ''; //предыдущая дата
let prevId = ''; //предыдущый id (ghb[jl])
let dateKey = 0; // ключ массива свойства date. При каждом новом id (приходе) создается объект вида 
//{ id: [], idValue: id(приход)}, где date - это ключ массива в свойстве id.


for (const item of sortArr) { //создание многомерного массива
    if (item.date !== prevDate) { // добавления в массив структуры с новой датой
        result.push({
            date: [{
                id: [item],
                idValue: item.id,
            }],
            dateValue: item.date
        })
        dateKey = 0;
    } else {
        if (prevId !== item.id) { //добавление в массив структуры с новым id
            result[result.length - 1].date.push({

                id: [item],
                idValue: item.id,

            });
            dateKey++;
        } else {

            result[result.length - 1].date[dateKey].id.push(item); //добавление данных в уже созданную структуру 
        }
    }

    prevDate = item.date;
    prevId = item.id;
}

for (const iterator of object) {





}