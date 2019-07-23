import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import path from 'path';
import App from './App';

import { LocaleDataProvider } from 'react-ilib';

ReactDOM.render(
    <LocaleDataProvider
        locale="en-US"
        translationsDir={path.join(__dirname, "res")}
        bundleName="resources"
        app={App}
    />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
