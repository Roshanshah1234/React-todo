import React from 'react';
import ReactDOM from 'react-dom';
import TodoManager from './TodoManager';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <TodoManager />
    </Provider>,
    document.getElementById('root')
);



