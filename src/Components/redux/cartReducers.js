const INITIAL_STATE = {
    menus: [],
    totalPrice: 0,
    totalQuantities: 0
}

export const cartReducers = (state = INITIAL_STATE, action) => {
    let findItem;
    let index;
    switch (action.type) {

        case 'ADD_TO_CART':
            const { menu, quantity } = action.payload;
            const check = state.menus.find(mn => mn.key === menu.key);
            if (check) {
                return state;
            } else {
                const tPrice = state.totalPrice + menu.price * quantity;
                const tQuantities = state.totalQuantities + quantity;
                menu.quantity = quantity;
                return {
                    ...state,
                    menus: [...state.menus, menu],
                    totalPrice: tPrice,
                    totalQuantities: tQuantities
                }
            }

        case 'INC':

            findItem = state.menus.find(item => item.key === action.payload);
            index = state.menus.findIndex(item => item.key === action.payload);
            findItem.quantity += 1;
            state.menus[index] = findItem;
            return {
                ...state,
                totalPrice: state.totalPrice + findItem.price,
                totalQuantities: state.totalQuantities + 1
            }
        case 'DEC':
            findItem = state.menus.find(item => item.key === action.payload);
            index = state.menus.findIndex(item => item.key === action.payload);
            if (findItem.quantity > 1) {
                findItem.quantity -= 1;
                state.menus[index] = findItem;
                return {
                    ...state,
                    totalPrice: state.totalPrice - findItem.price,
                    totalQuantities: state.totalQuantities - 1

                }
            } else {
                return state;
            }

        case 'REMOVE':
            findItem = state.menus.find(item => item.key === action.payload);
            const filtered = state.menus.filter(item => item.key !== action.payload);
            return {
                ...state,
                menus: filtered,
                totalPrice: state.totalPrice - findItem.price * findItem.quantity,
                totalQuantities: state.totalQuantities - findItem.quantity
            }

        default:
            return state;
    }
}