/* eslint-disable react/jsx-no-undef */
import Image from 'next/image';
import { useState } from 'react';
import cartIcon from "../../public/svg/cart-shopping-svgrepo-com.svg"

const Cart = () => {
    // State to store cart items
    const [cartItems, setCartItems] = useState([]);

    // Function to add item to cart
    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    // Function to remove item from cart
    const removeItemFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };

    return (
        <div className="flex justify-items-center mx-auto">
            {/* Cart icon */}
            <Image
                src={cartIcon}
                alt="Background"
                width="30"
                height="30"
            />

        </div>
    );
};

export default Cart;
