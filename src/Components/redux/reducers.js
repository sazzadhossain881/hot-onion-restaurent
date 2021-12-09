import Data from "../Data/Data";


const INITIAL_STATE = {
    menus: Data,
    menu: {}

}



export const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'MENU':
            return {
                ...state,
                menu: state.menus.find(item => item.key === action.itemKey)
            }



        default:
            return state;
    }
}