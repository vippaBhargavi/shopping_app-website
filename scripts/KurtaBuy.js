const buyProducts = [
    {
        image:'../../../pics/kurta1.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200
    },
    {
        image:'../../../pics/kurta2.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200
    },
    {
        image:'../../../pics/kurta3.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200
    },
    {
        image:'../../../pics/kurta4.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200
    },
    {
        image:'../../../pics/kurta5.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200
    },
    {
        image:'../../../pics/kurta6.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200
    },
    {
        image:'../../../pics/kurta7.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200
    },
    {
        image:'../../../pics/kurta8.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200
    },
    {
        image:'../../../pics/kurta9.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200
    },
    {
        image:'../../../pics/kurta10.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200
    }

];
const urlParams = new URLSearchParams(window.location.search);
const idx = Number(urlParams.get('id'));
const obj = buyProducts[idx];
let buyHtml =  `<img src="${obj.image}">`;
document.querySelector('.buy').innerHTML = buyHtml;