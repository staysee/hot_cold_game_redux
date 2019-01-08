import {createStore, compose} from 'redux';

import reducer from './reducers';

const reduxDevTools = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default createStore(reducer, reduxDevTools);