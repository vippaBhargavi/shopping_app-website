const buyProducts = [
    {
        image:'../../../pics/kurta1.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200,
        rating:4.5 ,
        rating2: " 165 Rating"
    },
    {
        image:'../../../pics/kurta2.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200,
        rating:4.5,
        rating2: " 165 Rating"
    },
    {
        image:'../../../pics/kurta3.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200,
        rating:4.5,
        rating2: " 165 Rating"
    },
    {
        image:'../../../pics/kurta4.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200,
        rating:4.5,
        rating2: " 165 Rating"
    },
    {
        image:'../../../pics/kurta5.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200,
        rating:4.5,
        rating2: " 165 Rating"
    },
    {
        image:'../../../pics/kurta6.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200,
        rating:4.5,
        rating2: " 165 Rating"
    },
    {
        image:'../../../pics/kurta7.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200,
        rating:4.5,
        rating2: " 165 Rating"
    },
    {
        image:'../../../pics/kurta8.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200,
        rating:4.5,
        rating2: " 165 Rating"
    },
    {
        image:'../../../pics/kurta9.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200,
        rating:4.5,
        rating2: " 165 Rating"
    },
    {
        image:'../../../pics/kurta10.jpg',
        brand:'Sangria',
        name:'Embroidered Straight Kurta',
        price:600,
        mark:1200,
        rating:4.5,
        rating2: " 165 Rating"
    }

];
const urlParams = new URLSearchParams(window.location.search);
const idx = Number(urlParams.get('id'));
const obj = buyProducts[idx];
let buyHtml = `
    <div class="product-container">
        <div class="left">
            <img class="pic" src="${obj.image}">
        </div>

        <div class="right">
            <h2 class="brand">${obj.brand}</h2>
            <p class="name">${obj.name}</p>
            <div class="rate">
            <p>${obj.rating}${obj.rating2}</p>
            </div>
            <hr>
            <div class="price-section">
                <span class="price">₹${obj.price}</span>
                <span class="mark">₹${obj.mark}</span>
            </div>

            <button class="cart-btn">ADD TO CART</button>
        </div>
    </div>
`;
document.querySelector('.buy').innerHTML = buyHtml;