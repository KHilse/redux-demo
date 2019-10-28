import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as CartActions from '../actions/cartActions';
import * as ShelfActions from '../actions/shelfActions';
import { addToWishes } from '../actions/wishlistActions';

const Shelf = props => {

    const [newStockItem, setNewStockItem] = useState('');

    let shelfItems = props.shelf.map((item, i) => {
        return (
            <li key={i}>
                <button onClick={() => props.addToCart(item)}>🛒</button>
                <button onClick={() => props.addToWishes(item)}>♥</button>
                {item}
            </li>
            )
    });

    const handleSubmit = e => {
        e.preventDefault();
        setNewStockItem(e.target.stock.value);
        props.addToShelf(e.target.stock.value);
        setNewStockItem('')
    }

    return (
        <div>
            <h1>Shelf</h1>
            <ul>
                {shelfItems}
            </ul>
            <hr />
            <h2>Add Stock</h2>
            <form onSubmit={handleSubmit}>
                <input name="stock" type="text" />
                <input type="submit" value="Add New Stock" />
            </form>
        </div>
    )
}

// Take the state from Store and map it to the props for this component
const mapStateToProps = state => {
    return {
        shelf: state.shelf
    }
}

export default connect(mapStateToProps, {
    addToShelf: ShelfActions.addToShelf,
    addToCart: CartActions.addToCart,
    addToWishes
})(Shelf);