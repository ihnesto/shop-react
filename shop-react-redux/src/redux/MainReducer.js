const initialState = {
    // Хранилище приложения
   
        isCart: false,
        brands: [],
        products: [],
        cart: [],
        numCartItems: 0
   
};

function MainReducer(state = initialState, action) {
    
    if ( action.type === 'SET_BRANDS') {
        
        return {
            ...state, 
            brands: action.payload
        }
    }
    if ( action.type === 'SET_PRODUCTS') {
        return  {
            ...state, 
            products: action.payload
        }
    }
    if ( action.type === 'GO_TO_CART') {
        return {
            ...state, 
            isCart: action.payload
        }
    }
    if (action.type === 'ADD_PRODUCT_TO_CART') {
        let prodId = action.payload;
        let all = state.cart.filter(e => e.productId !== prodId);
        let addQnty = state.cart.filter(e => e.productId === prodId);
            if (addQnty.length == 0) {
                return {
                    ...state, 
                    cart: [ ...all, { productId: prodId, qnty: 1 } ],
                    numCartItems: state.numCartItems + 1
                }
            } else {
                addQnty[0].qnty++;
                return {
                    ...state, 
                    cart: [ ...all, addQnty[0]]
                }
            }
       
    }

    if (action.type === 'REMOVE_PRODUCT_FROM_CART') {
        let cId = action.payload;
        let all = state.cart.filter((e,i) => i !== cId);
        let addQnty = state.cart.filter((e,i) => i === cId);
        if (addQnty[0].qnty > 1) {
            return {
                ...state, 
                cart: [ ...all, { productId: addQnty[0].productId, qnty:  addQnty[0].qnty - 1 }  ]
            }
        } else {
            return {
                ...state,
                cart: [ ...all ],
                numCartItems: state.numCartItems - 1
            }
        }
    }
       
    return state;
    
}


export default MainReducer;
