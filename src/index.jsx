import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import ContainerApp from './components/app/app.container.js'
import store from './store/store.js'
import './index.sass'

render(
    <Provider store={store}>
        <ContainerApp/>
    </Provider>,
    document.getElementById('root')
)