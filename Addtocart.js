const products = [
  {
    id: 0,
    image: 's22ultra.jpg',
    title: 'S 22 Ultra',
    price: 120,
  },
  {
    id: 1,
    image: 'note10plus.jpg',
    title: 'Note 10 Plus',
    price: 150,
  },
  {
    id: 2,
    image: 'a30s.jpg',
    title: 'A30s',
    price: 200,
  },
  {
    id: 3,
    image: 'a145g.webp',
    title: 'A14 5G',
    price: 250,
  },
  {
    id: 4,
    image: 'watch.jpg',
    title: 'Galaxy Smart Watch',
    price: 150,
  },
  {
    id: 5,
    image: 'earbuds.jpg',
    title: 'EarBuds Pro',
    price: 100,
  },
  {
    id: 6,
    image: 'flip.jpg',
    title: 'Z Flip',
    price:300,
  },
  {
    id: 7,
    image: 'handfree.jpg',
    title: 'Bluetooth Handfree',
    price: 60,
  },
  {
    id: 8,
    image: 'headphones.jpg',
    title: 'Headphones Pro',
    price: 90,
  },
  {
    id: 9,
  image: 'cover1.jpg',
  title: 'Mobile Cover',
  price: 15,
  },
];
 const categories = [...new Set(products.map((item)=>
   {return item}))] 
   let i=0;
   document.getElementById('root').innerHTML = categories.map((item)=>
   {
    var {image, title, price} = item;
    return(
        `<div class='box'>
        <div class='img-box'>
            <img class='images' src=${image}></img>
            </div>
         <div class='bottom'> 
         <p>${title}</p>
         <h2>$ ${price}.00</h2>`+
         "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
         `</div>
         </div>` 
           
    )
   }).join('')
   var cart =[];

   function addtocart(a){
    cart.push({...categories[a]});
    displaycart();

   }


   function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
      document.getElementByIdI('cartitem').innerHTML = "your cart is empty"
    document.getElementById("total").innerHTML = "$ "+0+".00";
    }

    else{
      document.getElementById("cartitem").innerHTML = cart.map((items)=>
      {
        var {image, title, price} = items;
        total=total+price;
        document.getElementById("total").innerHTML = "$ "+total+".00";
        return(
          `<div class ='cart-item'>
          <div class='row-img'>
          <img class='rowimg' src=${image}>
          </div>
          <p style='font-size:12px;'>${title}</p>
          <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
          "<i class='fa-solid fa-trash' onclinc='delElement("+ (j++) +")'></i></div>"
        )
      }).join('')
    }

   }