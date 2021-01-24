import ProductCard from "../productCard/productCard";
import "./productSelection.css";

const listOfProducts = [

    {
    "name": "Office chair",
    "urlImage": "https://images.unsplash.com/photo-1551459456-12c91f20a130?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
    "description": "Silla blanca de oficina",
    "price": "150€",
    },
    {
    "name": "Shoes",
    "urlImage": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfFM0TUtMQXNCQjc0fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "description": "Zapatillas en piel Vans",
    "price": "80€",
    },
    {
    "name": "Joystick",
    "urlImage": "https://images.unsplash.com/photo-1610505220710-32ebd59dce2c?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Sjl5clBhSFhSUVl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "description": "Mando inalambrico PS5",
    "price": "55€",
    },
    {
    "name": "Smart watch",
    "urlImage": "https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=638&q=80",
    "description": "Smartwatch Apple color negro",
    "price": "120€",
    },
    {
    "name": "Camera",
    "urlImage": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfGJEbzQ4Y1Vod25ZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "description": "Camara de fotos vintage",
    "price": "250€",
    },
    {
    "name": "Lampara",
    "urlImage": "https://images.unsplash.com/photo-1589647312696-ec8237db05f9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG9iamVjdHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "description": "Lampara digital",
    "price": "140€",
    },
    {
    "name": "Harley",
    "urlImage": "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "description": "",
    "price": "25000€"
    },
    {
     "name": "Bicycle",
    "urlImage": "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmljeWNsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "description": "",
    "price": "800€",
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
                price={product.price} />
             ))}
        </div>
    );
};

export default ProductSelection;