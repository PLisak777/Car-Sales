// import { ADD_FEATURE, TOGGLE_FEATURE, CLEAR_FEATURES } from '../actions';

export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
          'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
}

export const carReducer = (state = initialState, action) => {
    switch(action.type) {
        // case ADD_FEATURE: {
        //     return {}
        // }

        // case TOGGLE_FEATURE: {
        //     return {}
        // }

        // case CLEAR_FEATURES: {
        //     return {}
        // }

        default:
            return state
    }
}