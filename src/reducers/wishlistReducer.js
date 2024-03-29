export default (state = {}, action) => {
    let newState = {...state};
    switch(action.type) {
        case 'ADD_WISH_ITEM':
            if (newState[action.item]) {
                newState[action.item] += 1;
            } else {
                newState[action.item] = 1;
            }
            return newState;
        case 'REMOVE_WISH_ITEM':
                delete newState[action.item];
                return newState;
        case 'CLEAR_WISHLIST':
            return {};
        default:
            return state;
        
    }
}