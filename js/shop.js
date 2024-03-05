// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
let products = [
    {
        id: 1,
        name: 'Minipizzas Coliflor',
        price: 4.99,
        type: 'vegano',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Gratinado vegano de pasta',
        price: 6.25,
        type: 'vegano'
    },
    {
        id: 3,
        name: 'Ensalada de Brócoli',
        price: 5,
        type: 'vegano',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'Hummus Batata',
        price: 7.86,
        type: 'Legumbre'
    },
    {
        id: 5,
        name: 'Edammame',
        price: 4.32,
        type: 'Legumbre'
    },
    {
        id: 6,
        name: 'Hamburgues Lentejas',
        price: 9.99,
        type: 'Legumbre'
    },
    {
        id: 7,
        name: 'Zarzuela de Mariscos',
        price: 15,
        type: 'pescados'
    },
    {
        id: 8,
        name: 'Tabla de Mariscos',
        price: 19.99,
        type: 'pescados'
    },
    {
        id: 9,
        name: 'Gunkan-Maki de Salmon',
        price: 9.99,
        type: 'pescados'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];

let total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

// Busca el producto en el array de productos usando el id 
const product = products.find(item => item.id === id);

// Si el producto existe
if (product) {
    // Verifica si el producto ya está en el carrito
    const idProduct = cart.some(item => item.id === id);

    // Si el producto no está en el carrito
    if(!idProduct) {
        // Agrega el producto al carrito con una cantidad de 1
        cart = [...cart, {
            id: id , 
            name: product.name ,
            price: product.price, 
            quantity: 1,
        }];
    }
    // Si el producto ya está en el carrito
    else {
        // Incrementa la cantidad del producto en el carrito
        cart = cart.map(item => {
            if (item.id === id) {
                return {...item, quantity: item.quantity + 1};
            } else {
                return item;
            }
        });
    }


}
calculateTotal();
printCart(cart);
applyPromotionsCart();
let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
document.getElementById('count_product').textContent = `${totalQuantity}`;
}

// Exercise 2
function cleanCart() {

    if (confirm('¿Estas Seguro que deseas borrar el carrito?')) {
    // Clean the cart array
    cart = [];
    // Clean the shopping cart modal
    printCart(cart);
    // Clean the total price
    total = 0;
    let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('count_product').textContent = `${totalQuantity}`;


}

let totalPriceElement = document.getElementById('total_price'); 
totalPriceElement.textContent = `${ total.toFixed(2)}`;
}

// Exercise 3
function calculateTotal() {
    
    const total = cart.reduce((accumulator, item) => {
        return accumulator + (item.price * item.quantity);
    }, 0);

    document.getElementById('total_price').textContent = total.toFixed(2);
    console.log(total);
    console.log(cart);
}




// Exercise 4
function applyPromotionsCart() {

    cart.forEach(item => {
        // Verificar primero si el descuento ya fue aplicado al ítem
        if (item.discountApplied) {
            return; // Este return hace que el ciclo continúe con el próximo ítem, "saltándose" el código restante para este ítem
        }
    
        const product = products.find(product => product.id === item.id);
        if (product.offer && product.offer.number && product.offer.percent) {
            if (item.quantity >= product.offer.number) {
                // Solo entra aquí si el ítem no ha tenido descuento aplicado,
                // hay una oferta válida, y la cantidad es suficiente
                
                // Calcular el descuento
                const discount = (item.price * product.offer.percent) / 100;
                // Aplicar el descuento al precio del ítem
                item.price -= discount;
                // Marcar el ítem con el descuento aplicado
                item.discountApplied = true;
            }
        }
    });
    
    
    

    
    calculateTotal();
    printCart(cart);
    let totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('count_product').textContent = `${totalQuantity}`;

}


// Exercise 5
function printCart(cart) {
    // Fill the shopping cart modal manipulating the shopping cart dom
        // Obtén el elemento del cuerpo de la tabla
        let tbody = document.getElementById('cart_list');

        // Inicializa una variable para el nuevo contenido HTML
        let html = '';
    
        // Recorre los elementos del carrito
        cart.forEach(item => {
            // Crea una nueva fila y celdas
            html += `
                <tr>
                    <th scope="row">${item.name}</th>
                    <td>$${item.price}</td>
                    <td>${item.quantity}</td>
                    <td>$${(item.price * item.quantity).toFixed(2)}</td>
                    <td><button onclick="removeFromCart(${item.id})" class="btn btn-danger">-</button></td>
                </tr>
            `;
        });
    
        // Reemplaza el contenido actual del cuerpo de la tabla con el nuevo HTML
        tbody.innerHTML = html;
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
  // Find the item in the cart using the ID
  const itemIndex = cart.findIndex(item => item.id === id);

  // Handle cases where the item isn't found:
  if (itemIndex === -1) {
    console.warn(`Item with ID ${id} not found in cart.`);
    return; // Exit the function if item not found
  }

  // If the item is found:
  cart[itemIndex].quantity--;
  if (cart[itemIndex].quantity <= 0) {
  cart.splice(itemIndex, 1);
  }
  printCart(cart)
  applyPromotionsCart();
  calculateTotal();
}
  



function open_modal() {
    printCart(cart);
}










