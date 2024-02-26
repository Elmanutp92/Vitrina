const productos = 
[
  {
    "nombre": "Camiseta de algodón",
    "descripcion": "Camiseta de manga corta, material suave y cómodo",
    "precio": "$15.990",
    "stock": 50,
    "imagen": "img1.png"
  },
  {
    "nombre": "Pantalón vaquero",
    "descripcion": "Pantalón de mezclilla azul oscuro, corte ajustado",
    "precio": "$29.990",
    "stock": 30,
    "imagen": "img1.png"
  },
  {
    "nombre": "Zapatillas deportivas",
    "descripcion": "Zapatillas blancas con suela de goma, ideales para correr",
    "precio": "$49.990",
    "stock": 20,
    "imagen": "img1.png"
  },
  {
    "nombre": "Reloj de pulsera",
    "descripcion": "Reloj analógico plateado con correa de cuero marrón",
    "precio": "$79.990",
    "stock": 10,
    "imagen": "img1.png"
  },
  {
    "nombre": "Bolso de mano",
    "descripcion": "Bolso de mano de color negro con detalles dorados",
    "precio": "$39.990",
    "stock": 15,
    "imagen": "img1.png"
  },
  {
    "nombre": "Blazer de lana",
    "descripcion": "Blazer azul marino de lana, ideal para ocasiones formales",
    "precio": "$89.990",
    "stock": 5,
    "imagen": "img1.png"
  },
  {
    "nombre": "Bufanda de punto",
    "descripcion": "Bufanda larga y gruesa de color gris oscuro",
    "precio": "$19.990",
    "stock": 25,
    "imagen": "img1.png"
  },
  {
    "nombre": "Botas de cuero",
    "descripcion": "Botas altas de cuero negro con hebilla lateral",
    "precio": "$69.990",
    "stock": 8,
    "imagen": "img1.png"
  },
  {
    "nombre": "Pendientes de plata",
    "descripcion": "Pendientes pequeños de plata con forma de estrella",
    "precio": "$9.990",
    "stock": 40,
    "imagen": "img1.png"
  },
  {
    "nombre": "Gafas de sol",
    "descripcion": "Gafas de sol de montura negra y cristales oscuros",
    "precio": "$29.990",
    "stock": 12,
    "imagen": "img1.png"
  },
  {
    "nombre": "Vestido estampado",
    "descripcion": "Vestido corto con estampado floral y cinturón ajustable",
    "precio": "$59.990",
    "stock": 18,
    "imagen": "img1.png"
  },
  {
    "nombre": "Sudadera con capucha",
    "descripcion": "Sudadera gris con capucha y bolsillo canguro",
    "precio": "$39.990",
    "stock": 22,
    "imagen": "img1.png"
  },
  {
    "nombre": "Maletín de cuero",
    "descripcion": "Maletín de cuero marrón con asa de transporte y correa ajustable",
    "precio": "$99.990",
    "stock": 7,
    "imagen": "img1.png"
  },
  {
    "nombre": "Cinturón de piel",
    "descripcion": "Cinturón de piel marrón con hebilla plateada",
    "precio": "$24.990",
    "stock": 35,
    "imagen": "img1.png"
  },
  {
    "nombre": "Chaqueta acolchada",
    "descripcion": "Chaqueta acolchada negra con cierre de cremallera",
    "precio": "$79.990",
    "stock": 4,
    "imagen": "img1.png"
  },
  {
    "nombre": "Jersey de lana",
    "descripcion": "Jersey de lana de color beige con cuello alto",
    "precio": "$49.990",
    "stock": 28,
    "imagen": "img1.png"
  },
  {
    "nombre": "Collar de perlas",
    "descripcion": "Collar de perlas blancas con cierre de plata",
    "precio": "$14.990",
    "stock": 45,
    "imagen": "img1.png"
  },
  {
    "nombre": "Gorra de béisbol",
    "descripcion": "Gorra de béisbol roja con logo bordado en la parte delantera",
    "precio": "$19.990",
    "stock": 16,
    "imagen": "img1.png"
  },
  {
    "nombre": "Bañador de una pieza",
    "descripcion": "Bañador negro de una pieza con escote pronunciado",
    "precio": "$34.990",
    "stock": 9,
    "imagen": "img1.png"
  },
  {
    "nombre": "Bolso bandolera",
    "descripcion": "Bolso bandolera de tela a rayas, correas ajustables",
    "precio": "$29.990",
    "stock": 14,
    "imagen": "img1.png"
  }
]




// modelo del producto 
class Producto {
    constructor(nombre, descripcion, precio, stock, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

function createCardProduct(name, image, description, price){

    const main = document.getElementById("main");
    // creo la card
    const productCard = document.createElement("div");
    productCard.id = "card";
    
    // nombre del producto
    const productName = document.createElement("h3");
    productName.id = "name";
    productName.textContent = name;
    productCard.appendChild(productName);
    // creo la imagen
    const productImage = document.createElement("img");
    productImage.id = "image";
    productImage.src = image;
    productCard.appendChild(productImage);
    // descripcion del producto
    const productDescription = document.createElement("p");
    productDescription.id = "description";
    productDescription.textContent = description;
    productCard.appendChild(productDescription);
    // precio del producto
    const productPrice = document.createElement("p");
    productPrice.id = "price";
    productPrice.textContent = price;
    productCard.appendChild(productPrice);
    // agrego todo a la card
    main.appendChild(productCard);
    
    
    

}

function getProducts(){
    for ( const producto of productos){
        createCardProduct(producto.nombre, producto.imagen, producto.descripcion, producto.precio);
    }
}
getProducts();



