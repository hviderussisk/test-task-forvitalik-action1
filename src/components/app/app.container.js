import { connect } from "react-redux";
import { setProduct, changeProduct, deleteProduct } from './../../store/reducer'
import App from "./app.jsx";


const mapStateToProps = s => {
    const st = s.productTable
    return {
        products: st.products
    }
}
const containerApp = connect(mapStateToProps, { setProduct, changeProduct, deleteProduct })(App)

export default containerApp