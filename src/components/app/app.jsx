import React from 'react'
import Row from '../row/row.jsx'
import s from './app.module.sass'
import { v4 as uuidv4 } from 'uuid'
import FormAddProduct from '../formAddProduct/form.jsx'

function App(props) {
    const { products, setProduct, changeProduct, deleteProduct } = props
    return (
        <div className={s.container}>
            <div className={s.header__table}>
                <div className={`${s.column} ${s.name}`}>Наименование</div>
                <div className={`${s.column} ${s.count}`}>Кол-во</div>
                <div className={`${s.column} ${s.price}`}>Цена</div>
            </div>
            <div className={s.body}>
                {products.map( (el, i) => <Row changeProduct={changeProduct} deleteProduct={deleteProduct} key={el.id} {...el} /> )}
            </div>
            <div className={`${s.header__table} ${s.result_table}`}>
                <div className={`${s.column} ${s.name}`}></div>
                <div className={`${s.column} ${s.count}`}>{products.reduce( (sum, el) => sum+Number(el.count), 0)}</div>
                <div className={`${s.column} ${s.price}`}>{products.reduce( (sum, el) => sum+Number(el.price), 0)}</div>
            </div>
            <div className={s.controll_button}>
                <FormAddProduct setProduct={setProduct} uuidv4={uuidv4} />
            </div>
        </div>
    )
}

export default App


