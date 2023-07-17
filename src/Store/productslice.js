import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    total: 0,
};

export const Productslice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        addproduct: (state, action) => {
            let isProductExist = state.products.find(
                (item) => item.id === action.payload.id
            );
            let productIndex = state.products.findIndex(
                (item) => item.id === action.payload.id
            );

            if (isProductExist) {
                state.products[productIndex].quantity += 1;
                state.total += action.payload.price ;
                return;
            } else {
                state.products.push(action.payload);
                state.total = state.total + action.payload.price;
            }
        },
        removeproduct: (state, action) => {
            let productIndex = state.products.findIndex(
                (item) => item.id === action.payload.id
            );
            state.products.splice(productIndex, 1);
            state.total = state.total - action.payload.price * action.payload.quantity;
        },
        removeitem: (state, action) => {
            let productIndex = state.products.findIndex(
                (item) => item.id === action.payload.id
            );
            state.products[productIndex].quantity -= 1;
            state.total = state.total - action.payload.price;
        },
        emptyproduct: (state) => {
            state.products = [];
            state.total = 0;
        }
    },
});

export const addproductaction = (product) => async (dispatch) => {
    try {
        if (product.quantity === 0) return;

        dispatch(addproduct(product));
    } catch (error) {
        console.log(error);
    }
};

export const removeitemaction = (product) => async (dispatch) => {
    try {
        if (product.quantity < 1){
            dispatch(removeproduct(product));
            return;
        }
        dispatch(removeitem(product));
    } catch (error) {
        console.log(error);
    }
};


export const removeproductaction = (product) => async (dispatch) => {
    try {
        dispatch(removeproduct(product));
    } catch (error) {
        console.log(error);
    }
};

export const emptyproductaction = () => async (dispatch) => {
    try {
        dispatch(emptyproduct());
    } catch (error) {
        console.log(error);
    }
};

export const { addproduct,removeproduct,removeitem, emptyproduct } = Productslice.actions;
export default Productslice.reducer;
