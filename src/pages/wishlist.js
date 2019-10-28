import React from 'react';
import { connect } from 'react-redux';
import * as WishListActions from '../actions/wishlistActions';

const Wishlist = props => {

    let wishItems = Object.keys(props.wishlist).map((item, i) => {
        return (
            <li key={i}>
                {item} ({props.wishlist[item]})
                <button onClick={() => props.removeFromWishes(item)}>Remove</button>
            </li>
        )
    })

    return (
        <div>
            <h1>Wishlist</h1>
            <ul>
                {wishItems}
            </ul>
            <button onClick={props.clearWishes}>Clear Wishes</button>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        wishlist: state.wishlist
    }
}

export default connect(mapStateToProps, WishListActions)(Wishlist);