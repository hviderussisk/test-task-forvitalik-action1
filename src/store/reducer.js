const SET_PRODUCT = 'table/SET_PRODUCT',
CHANGE_PRODUCT = 'table/CHANGE_PRODUCT',
DELETE_PRODUCT = 'table/DELETE_PRODUCT'

const iState = {
    products: [
        {
            id: 2,
            name: 'car',
            count: 2,
            price: 532
        }
    ]
}

export default function reducer (s = iState, a)  {
    switch (a.type) {
        case SET_PRODUCT:
            return {...s, products: [...s.products, a.data]}
        case CHANGE_PRODUCT:
            return {...s, products: s.products.map( el => el.id === a.data.id ? a.data : el )}
        case DELETE_PRODUCT:
            return {...s, products: s.products.filter( el => el.id !== a.data )}
        default:
            return s 
    }
}

export const setProduct = data => { return { type: SET_PRODUCT, data}}
export const changeProduct = data => { return { type: CHANGE_PRODUCT, data}}
export const deleteProduct = data => { return { type: DELETE_PRODUCT, data}}