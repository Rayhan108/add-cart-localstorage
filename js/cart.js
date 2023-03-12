const addCart=()=>{
    const productName = document.getElementById('product-value');
    const product = productName.value;
    const quantityName = document.getElementById('quantity-value').value;
    productName.value='';
    quantityName.value='';
    // console.log(product,quantityName);
    showProductsOnUi(product,quantityName);
    showLocalStorageCart(product,quantityName);
}
const showProductsOnUi=(product,quantityName)=>{
const cartContainer = document.getElementById('cart-container');
const li = document.createElement('li');
li.innerText=`
${product}:${quantityName}
`
cartContainer.appendChild(li);
}

const getSaveCartFromLocalStorage=()=>{
    let cart ={};
    const stroredCart = localStorage.getItem('cart');
    // stroredCart?cart=JSON.parse(stroredCart):'';
    if(stroredCart){
        cart=JSON.parse(stroredCart);
    }
    return cart;
}

const showLocalStorageCart =(product,quantityName)=>{
const cart = getSaveCartFromLocalStorage();
console.log(cart)
cart[product]=quantityName;
const strigified = JSON.stringify(cart);
console.log(strigified)
localStorage.setItem('cart',strigified)

}

const displaySaveCart =()=>{
    const saveCart=getSaveCartFromLocalStorage();
    // console.log(saveCart)
    for(const product in saveCart){
        const quantityName = saveCart[product]
        // console.log(product,quantityName)
        showProductsOnUi(product,quantityName)
    }
}
displaySaveCart()