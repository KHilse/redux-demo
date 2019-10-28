const initialState = ['bananas', 'watermelon', 'cheesy poofs', 'bacon', 'donuts', 'purple drank'];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'STOCK_ITEM':
            return [...state, action.item];
        default:
            return state;
    }
} 