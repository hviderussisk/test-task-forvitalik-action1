import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import s from './form.module.sass'

export const valid = Yup.object().shape({
    name: Yup.string().min(2, 'Слишком короткое!').max(20, 'Придумайте название короче!').required('Обязательное поле'),
    count: Yup.string().matches(/^(?:[\d]*)$/, 'Только цифры').max(4, 'Займёт весь склад!').required('Обязательное поле'),
    price: Yup.string().required('Обязательное поле').matches(/^(?:[\d]*)$/, 'Только цифры'),
})

const FormAddProduct = props => { 
     return <Formik initialValues={{ name: '', count: '', price: '' }}
                    validationSchema={valid} enableReinitialize={true}
                    onSubmit={ (values, {resetForm}) =>  {
                        props.setProduct({ ...values, id: props.uuidv4() })
                        resetForm({})
                    }}>
                    {({ errors, touched, isValid }) => {
                        console.log(errors)
                       return (
                        <Form>
                            <div className={s.textInput}>
                                <Field name='name' placeholder='Наименование'/>
                                { errors.name && touched.name ? <div className={s.error}>{errors.name}</div> : null }
                            </div>
                            <div className={s.textInput}>
                                <Field name='count' placeholder='Количество'/>
                                { errors.count && touched.count ? <div className={s.error}>{errors.count}</div> : null }
                            </div>
                            <div className={s.textInput}>
                                <Field name='price' placeholder='Цена'/>
                                { errors.price && touched.price ? <div className={s.error}>{errors.price}</div> : null } 
                            </div>
                            <button type="submit" disabled={!isValid}>Добавить</button>
                        </Form>
                    )}}
             </Formik>
 }
 
 export default FormAddProduct