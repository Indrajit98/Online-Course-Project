import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const totalprice =cart.reduce( ( sum, detail) => sum + detail.price, 0);

    return (
        <div className="cart">
            <h2>Item Number:{cart.length}</h2>
            <h3>Total amount:$ {totalprice}</h3>
            <button>Confirm </button>
        </div>
    );
};

export default Cart;