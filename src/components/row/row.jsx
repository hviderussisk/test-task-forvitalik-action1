import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import s from './row.module.sass'
import { valid } from './../formAddProduct/form.jsx'

function Row(props) {
    const { changeProduct, deleteProduct } = props
    const [flagChange, setFlagChange] = useState(false)
    
    return (
        <div className={s.row__Container} tabIndex={0}>
            { flagChange ? 
            <ChangeProduct {...props} setFlagChange={setFlagChange} changeProduct={changeProduct}/> : 
            <ReadyProduct deleteProduct={deleteProduct} setFlagChange={setFlagChange} {...props}/>}
        </div>
    ) 
}

export default Row



const ChangeProduct = props => {
    return (
        <Formik initialValues={{ name: props.name, count:  props.count, price: props.price }}
                    validationSchema={valid}
                    onSubmit={ val =>  {
                        props.changeProduct({ ...val, id: props.id})
                        props.setFlagChange(false)
                    }}>
                    {({ errors, touched, isValid }) => {
                        console.log(errors)
                       return (
                        <Form>
                            <div className={s.textInput}>
                                <Field name='name' placeholder={`${props.name}`}/>
                                { errors.name && touched.name ? <div className={s.error}>{errors.name}</div> : null }
                            </div>
                            <div className={s.textInput}>
                                <Field name='count' placeholder={`${props.count}`}/>
                                { errors.count && touched.count ? <div className={s.error}>{errors.count}</div> : null }
                            </div>
                            <div className={s.textInput}>
                                <Field name='price' placeholder={`${props.price}`}/>
                                { errors.price && touched.price ? <div className={s.error}>{errors.price}</div> : null } 
                            </div>
                            <button className={s.ready} type='submit'>
                                <svg  version="1.1" x="0px" y="0px" viewBox="0 0 45.701 45.7">
                                    <path d="M20.687,38.332c-2.072,2.072-5.434,2.072-7.505,0L1.554,26.704c-2.072-2.071-2.072-5.433,0-7.504
                                        c2.071-2.072,5.433-2.072,7.505,0l6.928,6.927c0.523,0.522,1.372,0.522,1.896,0L36.642,7.368c2.071-2.072,5.433-2.072,7.505,0
                                        c0.995,0.995,1.554,2.345,1.554,3.752c0,1.407-0.559,2.757-1.554,3.752L20.687,38.332z"/>
                                </svg>
                            </button>
                            <div className={s.back} onClick={() => props.setFlagChange(false)}>
                                <svg x="0px" y="0px" viewBox="0 0 174.239 174.239" >
                                    <path d="M146.537,1.047c-1.396-1.396-3.681-1.396-5.077,0L89.658,52.849c-1.396,1.396-3.681,1.396-5.077,0L32.78,1.047
                                        c-1.396-1.396-3.681-1.396-5.077,0L1.047,27.702c-1.396,1.396-1.396,3.681,0,5.077l51.802,51.802c1.396,1.396,1.396,3.681,0,5.077
                                        L1.047,141.46c-1.396,1.396-1.396,3.681,0,5.077l26.655,26.655c1.396,1.396,3.681,1.396,5.077,0l51.802-51.802
                                        c1.396-1.396,3.681-1.396,5.077,0l51.801,51.801c1.396,1.396,3.681,1.396,5.077,0l26.655-26.655c1.396-1.396,1.396-3.681,0-5.077
                                        l-51.801-51.801c-1.396-1.396-1.396-3.681,0-5.077l51.801-51.801c1.396-1.396,1.396-3.681,0-5.077L146.537,1.047z"/>
                                </svg>
                            </div>
                        </Form>
                    )}}
             </Formik>
    )
}

const ReadyProduct = props => {
    const change = () => props.setFlagChange(true)
    return (
        <>
            <div className={s.name_row}>{props.name}</div>
            <div className={s.count_row}>{props.count}</div>
            <div className={s.price_row}>{props.price}</div>
            <PanelCnange change={change} deleteProduct={props.deleteProduct} id={props.id}/>
        </>
    )
}
 

const PanelCnange = props => {
    return (
        <div className={s.panel_button} >
            <div className={s.change} onClick={props.change}>
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 446.536 446.536">
                    <path d="M282.488,68.589L351.077,0l95.458,95.458l-68.589,68.589L282.488,68.589z"/>
                    <polygon points="0.001,446.536 117.523,412.737 33.8,329.014"/>
                    <path d="M144.604,397.393l-95.458-95.458l212.13-212.13l95.458,95.458L144.604,397.393z"/>
                </svg>
            </div>
            <div className={s.delete} onClick={() => props.deleteProduct(props.id)}>
                <svg viewBox="0 0 512 512">
                    <path d="m424 64h-88v-16c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16h-88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zm-216-16c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96z"/>
                    <path d="m78.364 184c-2.855 0-5.13 2.386-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042c.136-2.852-2.139-5.238-4.994-5.238zm241.636 40c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z"/>
                </svg>
            </div>
        </div>
    )
}
 