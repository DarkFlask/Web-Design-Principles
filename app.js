let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Intel Core i5 13600k',
        image: 'i5 13600k.png',
        price: 15000
    },
    {
        id: 2,
        name: 'Intel Core i7 14700k',
        image: 'i7 14700k.png',
        price: 20000
    },
    {
        id: 3,
        name: 'Intel Core i9 14900k',
        image: 'i9 14900k.png',
        price: 36000
    },
    {
        id: 4,
        name: 'AMD Ryzen 5 5600x',
        image: 'Ryzen 5 5600x.png',
        price: 10000
    },
    {
        id: 5,
        name: 'AMD Ryzen 7 5700x3D',
        image: 'Ryzen 7 5700x3D.png',
        price: 18000
    },
    {
        id: 6,
        name: 'AMD Ryzen 7 7800x3D',
        image: 'Ryzen 7 7800x3D.png',
        price: 22000
    },
    {
        id: 7,
        name: 'Kingston FURY Beast DDR4 2x16GB',
        image: 'Kingston FURY Beast DDR4 2x16GB.jpg',
        price: 9000
    },
    {
        id: 8,
        name: 'Gskills Trident Z DDR4 2x8GB',
        image: 'Gskills Trident Z DDR4 2x8GB.jpg',
        price: 5000
    },
    {
        id: 9,
        name: 'Gskills Trident Z5 DDR5 2x16GB',
        image: 'Gskills Trident Z5 DDR5 2x16GB.jpg',
        price: 9000
    },
    {
        id: 10,
        name: 'AM4 Gigabyte B550M',
        image: 'AM4 Gigabyte B550M.png',
        price: 4500
    },
    {
        id: 11,
        name: 'AM5 Gigabyte B650M',
        image: 'AM5 Gigabyte B650M.png',
        price: 9000
    },
    {
        id: 12,
        name: 'LGA Gigabyte B660M DDR4',
        image: 'LGA Gigabyte B660M DDR4.png',
        price: 6000
    },
    {
        id: 13,
        name: 'LGA Gigabyte Z790 DDR5',
        image: 'LGA Gigabyte Z790 DDR5.png',
        price: 14000
    },
    {
        id: 14,
        name: 'Asrock Intel Arc 770',
        image: 'Asrock Intel Arc 770.png',
        price: 21000
    },
    {
        id: 15,
        name: 'ASUS TUF Gaming RTX 4070',
        image: 'ASUS TUF Gaming RTX 4070.png',
        price: 39000
    },
    {
        id: 16,
        name: 'MSI RTX 4080',
        image: 'MSI RTX 4080.png',
        price: 64000
    },
    {
        id: 17,
        name: 'PowerColor Radeon RX 7600 XT',
        image: 'PowerColor Radeon RX 7600 XT.png',
        price: 22000
    },
    {
        id: 18,
        name: 'RTX4060Ti',
        image: 'RTX4060Ti.png',
        price: 23000
    },
    {
        id: 19,
        name: 'Intel Arc A750',
        image: 'Intel Arc A750.png',
        price: 14000
    },
    {
        id: 20,
        name: 'Gigabyte Radeon RX 6800 XT',
        image: 'Gigabyte Radeon RX 6800 XT.png',
        price: 33000
    },
    {
        id: 21,
        name: 'Be quiet! Power 10 600w',
        image: 'Be quiet! Power 10 600w.png',
        price: 6500
    },
    {
        id: 22,
        name: 'FSP Hydro 850w',
        image: 'FSP Hydro 850w.png',
        price: 7000
    },
    {
        id: 23,
        name: 'Seasonic Prime 1300w',
        image: 'Seasonic Prime 1300w.png',
        price: 30000
    },
    {
        id: 24,
        name: 'Cooler Master MWE 700w',
        image: 'Cooler Master MWE 700w.png',
        price: 4000
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice += value.price * value.quantity; // Calculate price based on quantity
        count += value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${(value.price * value.quantity).toLocaleString()}</div> <!-- Display price * quantity -->
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = "Total Price: ₱" + totalPrice.toLocaleString(); // Display the total price
    quantity.innerText = count;
}


function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
document.getElementById('auth-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted!'); 

    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    console.log('Email:', email);
    console.log('Password:', password);

    
    setTimeout(function() {
        console.log('Redirecting...'); 
        window.location.href = 'index.html'; 
    }, 1000);
});

