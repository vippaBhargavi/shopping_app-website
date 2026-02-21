const kurtas = [ {
        image: '../../pics/kurta1.jpg',
        brand:'Sangria',
        name: 'Embroidered straight kurta',
        price:600,
        mark:1200
    },{
        image:'../../pics/kurta2.jpg',
        brand:'Sangria',
        name:'Embroidered straight Kurta',
        price:600,
        mark:1200
    }, {
        image:'../../pics/kurta3.jpg',
        brand:'Sangria',
        name:'Embroidered straight Kurta',
        price:600,
        mark:1200
    }, {
        image:'../../pics/kurta4.jpg',
        brand:'Sangria',
        name:'Embroidered straight Kurta',
        price:600,
        mark:1200
    },{
        image:'../../pics/kurta5.jpg',
        brand:'Sangria',
        name:'Embroidered straight Kurta',
        price:600,
        mark:1200
    },{
        image:'../../pics/kurta6.jpg',
        brand:'Sangria',
        name:'Embroidered straight Kurta',
        price:600,
        mark:1200
    },{
        image:'../../pics/kurta7.jpg',
        brand:'Sangria',
        name:'Embroidered straight Kurta',
        price:600,
        mark:1200
    },{
        image:'../../pics/kurta8.jpg',
        brand:'Sangria',
        name:'Embroidered straight Kurta',
        price:600,
        mark:1200
    },{
        image:'../../pics/kurta9.jpg',
        brand:'Sangria',
        name:'Embroidered straight Kurta',
        price:600,
        mark:1200
    },{
        image:'../../pics/kurta10.jpg',
        brand:'Sangria',
        name:'Embroidered straight Kurta',
        price:600,
        mark:1200
    }
];

let itemHtml = '';
kurtas.forEach((item,idx)=>{
    itemHtml+= `
        <div>
            <div>
                <li><a href="Basket/kurtaBuy.html?id=${idx}"><img src="${item.image}"></a></li>
            </div>
        <h3>Sangria</h3>
        <p>${item.name}</p>
       <span class="rp">Rs: ${item.price} </span>
       <span class="mark">Rs:${item.mark}</span>
        </div>
`;
});
document.querySelector('.js-kurta').innerHTML = itemHtml;


