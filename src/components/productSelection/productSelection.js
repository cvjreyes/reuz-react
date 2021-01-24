import ProductCard from "../productCard/productCard";
import "./productSelection.css";

const listOfProducts = [

    {
    "name": "Office chair",
    "urlImage": "https://images.unsplash.com/photo-1551459456-12c91f20a130?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
    "description": "Silla blanca de oficina",
    "startingPrice": "250€",
    "lastPrice": "125€",
    },
    {
    "name": "Shoes",
    "urlImage": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfFM0TUtMQXNCQjc0fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "description": "Zapatillas en piel Vans",
    "startingPrice": "180€",
    "lastPrice": "90€",
    },
    {
    "name": "Joystick",
    "urlImage": "https://images.unsplash.com/photo-1610505220710-32ebd59dce2c?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Sjl5clBhSFhSUVl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "description": "Mando inalambrico PS5",
    "startingPrice": "85€",
    "lastPrice": "",
    },
    {
    "name": "Smart watch",
    "urlImage": "https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=638&q=80",
    "description": "Smartwatch Apple color negro",
    "startingPrice": "120€",
    " lastPrice": "",
    },
    {
    "name": "Camera",
    "urlImage": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtZXJhfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "description": "Camara de fotos vintage",
    "startingPrice": "250€",
    "lastPrice": "125€",
    },
    {
    "name": "Lampara",
    "urlImage": "https://images.unsplash.com/photo-1589647312696-ec8237db05f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG9iamVjdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "description": "Lampara digital",
    "startingPrice": "140€",
    "lastPrice": "70€",
    },
    {
    "name": "Harley",
    "urlImage": "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "description": "Moto modelo",
    "startingPrice": "25000€",
    "lastPrice": "",
    },
    {
     "name": "Bicycle",
    "urlImage": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmljeWNsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "description": "Bicicleta nueva",
    "startingPrice": "800€",
    "lastPrice": "",
    },
];

const ProductSelection = () => {

    return (
        <div className="productSelection_container">
            {listOfProducts.map(product => (
                <ProductCard  
                urlImage={product.urlImage} 
                name={product.name} 
                description={product.description}
                startingPrice={product.startingPrice} 
                lastPrice={product.lastPrice}/>
             ))}
        </div>
    );
};

export default ProductSelection;