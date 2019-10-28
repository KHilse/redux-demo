import React from 'react';
import { connect } from 'react-redux';
import * as CartActions from '../actions/cartActions';

const Cart = props => {

    let cartItems = Object.keys(props.cart).map((item, i) => {
        return (
            <li key={i}>
                {item} ({props.cart[item]})
                <button onClick={() => props.removeFromCart(item)}>Remove</button>
            </li>
        )
    })

    return (
        <div>
            <h1>Cart</h1>
            <ul>
                {cartItems}
            </ul>
            <button onCLick={props.clearCart}>Clear Cart</button>
        </div>

    )
}

// Take the state from Store and map it to the props for this component
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}


export default connect(mapStateToProps, {
    clearCart: CartActions.clearCart,
    removeFromCart: CartActions.removeFromCart
})(Cart);