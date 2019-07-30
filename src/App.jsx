/*
 * App.jsx - main application logic for the react-ilib demo application
 *
 * Copyright © 2019, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import React from 'react';
import logo from './logo.svg';
import './App.css';

import { AddressFmt, Translate, DateFmt } from 'react-ilib';
import { Address } from 'ilib-es6';

var addresses = {
 US: new Address({
     streetAddress: "900 Jefferson Ave.",
     postalCode: "94063",
     locality: "Redwood City",
     region: "California",
     country: "United States of America",
     locale: "en-US"
 }),
 DE: new Address({
     streetAddress: "Erlenweg 7",
     postalCode: "69181",
     locality: "Leimen",
     region: "Swabenland",
     country: "Germany",
     locale: "de-DE"
 }),
 JP: new Address({
     streetAddress: "大手町１丁目７−２",
     postalCode: "100-8077",
     locality: "千代田区",
     region: "東京都",
     country: "日本",
     locale: "ja-JP"
 })
};

function App() {
    let addressesFormatted = [];
    for (let a in addresses) {
        addressesFormatted.push(<li key={addresses[a].locale}>{a}: <AddressFmt locale={addresses[a].locale} address={addresses[a]}/></li>);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">React-ilib Test App</h1>
            </header>
            <p className="App-intro">
                <Translate id="test.id" description="this is a test">
                    This app <i>tests</i> the <b>components</b> in react-ilib at this date/time: <DateFmt type="datetime" length="long" date={new Date()}/><p/>
                </Translate>
            </p>
            <div className="App-body">
                <p>
                        <h1><Translate>Addresses</Translate></h1>
                        <ul>{addressesFormatted}</ul>
                </p>
                <p>
                    <Translate comment="translator's comment">This is an address in the US formatted using AddressFmt:</Translate>
                </p>
                <p>
                    <AddressFmt address={addresses.US}/>
                </p>
            </div>
        </div>
    );
}

export default App;
