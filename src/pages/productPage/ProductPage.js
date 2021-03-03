import React, { useState, useEffect } from 'react';
import ContactIcon from '../../assets/message.svg';
import { useParams } from 'react-router';
import { MapContainer, TileLayer, Circle, useMap } from 'react-leaflet';
import Modal from "../../components/modal/Modal"
import SignupForm from "../../components/forms/SignupForm"
import LoginForm from "../../components/forms/LoginForm"

// Styles for the page and the map
import './ProductPage.css'
import Leaflet from 'leaflet/dist/leaflet.css'

const ProductPage = () => {

    /* Product fetch */
    const params = useParams();
    const productId = params.id;
    const [productInfo, setProductInfo] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/api/products/' + productId, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setProductInfo(json);
            });
    }, []);

    // Position after geocoding process
    const productPosition = [40.42, -3.70]


    /* User recognition */
    const [knownUser, setKnownUser] = useState(false);
    const [loggedUser, setLoggedUser] = useState('User not logged in');


    console.log(knownUser)

    const checkUserLoggedIn = () => {
        const userLoggedIn = localStorage.getItem('user');
        if (userLoggedIn) {
            setKnownUser(true);
            const userId = JSON.parse(userLoggedIn).id;
            fetch("http://localhost:5000/api/users/" + userId)
                .then((response) => response.json())
                .then((json) => setLoggedUser(json));
            handleChatModal();
        } else {
            setKnownUser(false);
            handleLoginModal();
        }
    };


    /* Modal control */
    const [imageModalVisibility, setImageModalVisibility] = useState(false);
    const [chatModalVisibility, setChatModalVisibility] = useState(false);
    const [signupVisibility, setSignupVisibility] = useState(false);
    const [loginVisibility, setLoginVisibility] = useState(false);

    const handleImageModal = () => {
        setImageModalVisibility(!imageModalVisibility)
    }

    const handleChatModal = () => {
        setChatModalVisibility(!chatModalVisibility)
    }

    const handleLoginModal = () => {
        setLoginVisibility(!loginVisibility)
    }

    const handleSignupModal = () => {
        setSignupVisibility(!signupVisibility)
    }

    const changeModal = () => {
        handleLoginModal();
        handleSignupModal();
    }


    return (
        <>
            {productInfo &&
                <div className="productPage__container">
                    <div className="productPage_images__container">
                        <div className="productPage_images_firstImage">
                            <img
                                src={productInfo.urlImage}
                                alt="product display"
                                onClick={handleImageModal}
                            />
                        </div>
                        <div className="productPage_images_otherImages_up">
                            <img
                                src={productInfo.urlImage}
                                alt="product display"
                                onClick={handleImageModal}
                            />
                        </div>
                        <div className="productPage_images_otherImages_down">
                            <img
                                src={productInfo.urlImage}
                                alt="product display"
                                onClick={handleImageModal}
                            />
                        </div>
                        <div className="productPage_images_otherImages_up">
                            <img
                                src={productInfo.urlImage}
                                alt="product display"
                                onClick={handleImageModal}
                            />
                        </div>
                        <div className="productPage_images_otherImages_down">
                            <img
                                src={productInfo.urlImage}
                                alt="product display"
                                onClick={handleImageModal}
                            />
                        </div>
                    </div>
                    <div className="productPage_info__container">
                        <div className="productPage_info_area">
                            <div className="productPage_info_productName">
                                <h2 className="productPage_info_productTitle">{productInfo.name}</h2>
                                <p className="productPage_info_breadcrumbs">Home {'>'} Category</p>
                                <div className="productPage_info_divider" />
                            </div>
                            <div className="productPage_info_productDescription">
                                <h2 className="productPage_info_subtitle">Description</h2>
                                <p className="productPage_info_text">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one
                                    of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
                                    the cites of the word in classical literature, discovered the undoubtable source.
                                </p>
                                <h2 className="productPage_info_subtitle">Precio y condiciones</h2>
                                <p className="productPage_info_price">{productInfo.price}€</p>
                            </div>
                        </div>
                        <div className="productPage_contact_area">
                            <div className="productPage_contact_block">
                                <h2>Start a conversation with the seller!</h2>
                                <div className="productPage_contact_button"
                                    onClick={checkUserLoggedIn}>
                                    <img src={ContactIcon} />
                                    <span>Send a message</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="productPage_location__container">
                        <h2 className="productPage_info_subtitle">Location</h2>
                        <MapContainer
                            center={productPosition}
                            zoom={16}
                            scrollWheelZoom={false}
                            zoomControl={false}
                            dragging={false}
                        >
                            <TileLayer
                                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                            />
                            <Circle
                                center={productPosition}
                                radius={250}
                                weight={2}
                                color={'#E89F71'}
                                fillColor={'#F9F1E7'}
                                fillOpacity={0.25} >
                            </Circle>
                            {/* 
                            <DinamicBounds
                                position={productPosition}
                                distance={100}
                                zoom={5} 
                            /> 
                            */}
                        </MapContainer>
                    </div>
                    {/* Modals */}
                    <Modal
                        visibility={imageModalVisibility}
                        setVisibility={setImageModalVisibility}
                        content={
                            <div className="productPage_images_modalImage">
                                <img
                                    src={productInfo.urlImage}
                                    alt="product display"
                                    onClick={handleImageModal}
                                />
                            </div>
                        }
                    />
                    <Modal
                        visibility={chatModalVisibility}
                        setVisibility={setChatModalVisibility}
                        content="Here goes the chat"
                    />
                    <Modal
                        visibility={signupVisibility}
                        setVisibility={setSignupVisibility}
                        content={
                            <SignupForm changeModal={changeModal} action={checkUserLoggedIn} />
                        }
                    />
                    <Modal
                        visibility={loginVisibility}
                        setVisibility={setLoginVisibility}
                        content={
                            <LoginForm changeModal={changeModal} action={checkUserLoggedIn} />
                        }
                    />
                </div>
            }
        </>
    )

};

export default ProductPage