import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
// import { App } from './app-context';
import { Index } from './context/components/test-form';
import { configureFakeAPI } from './helpers';

configureFakeAPI();

render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('app')
);
