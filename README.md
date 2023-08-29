<p align="center">
    <img title="Flutterwave" height="200" src="https://flutterwave.com/images/logo/full.svg" width="50%"/>
</p>

# Flutterwave Vue.JS (Vue2) Library
![Publish Vue.js Package](https://github.com/Flutterwave/Flutterwave-Vue-v3/workflows/Publish%20Vue.js%20Package/badge.svg)
![npm](https://img.shields.io/npm/v/flutterwave-vue-v3)
![npm](https://img.shields.io/npm/dt/flutterwave-vue-v3)
![NPM](https://img.shields.io/npm/l/flutterwave-vue-v3)

The Vue SDK helps you create seamless payment experiences in your Vue(2.X) mobile/web app. By connecting to our modal, you can start collecting payment in no time.

Available features include:

- Collections: Card, Account, Mobile money, Bank Transfers, USSD, Barter, NQR.
- Recurring payments: Tokenization and Subscriptions.
- Split payments


## Table of Contents
1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Initialization](#initialization)
4. [Usage](#usage)
5. [Payment option parameters and descriptions](#payment-option-parameters-and-descriptions)
6. [Debugging errors](#debugging-errors)
7. [Support](#support)
8. [Contribution](#contribution)
9. [License](#license)


## Requirements
1. Flutterwave for business V3 [API keys](https://developer.flutterwave.com/docs/integration-guides/authentication)
2. Vue version = 2.x.x


## Installation
Install the SDK 

```bash
$ npm install flutterwave-vue-v3

# OR

$ yarn  add  flutterwave-vue-v3
```


## Initialization
1. Import the Flutterwave Library in the  'main.js' file.  

2. Add the Flutterwave plugin to your app passing in your Flutterwave Public Key (optional)

> Note 💡: For a Typescript project sample, please see the project in the example directory of the project repository.

If Public key is not added you will have to pass in the public_key parameter to the provided payment component button  and payment function

```javascript
//main.js
import Vue from 'vue'
import App from './App.vue'
import Flutterwave from  'flutterwave-vue-v3'


Vue.use(Flutterwave, { publicKey: 'FLWPUBK_TESTXXXXXXXXXX' } )

new Vue({
  render: h => h(App),
}).$mount('#app')

```


## Usage
1. [Collections](https://github.com/Flutterwave/Vue-v3/wiki/Collections)
2. [Recurring Payments](https://github.com/Flutterwave/Vue-v3/wiki/Recurring-Payments)
3. [Split payments](https://github.com/Flutterwave/Vue-v3/wiki/Split-Payments)

## Payment option parameters and descriptions
| Parameter  | Always Required ? | Description |
| ------------- | ------------- | ------------- |
| public_key  | True  | Your API public key |
| tx_ref  | True  | Your transaction reference. This MUST be unique for every transaction |
| amount  | True  | Amount to charge the customer. |
| currency  | False  | currency to charge in. Defaults to NGN|
| payment_options  | True  | This specifies the payment options to be displayed e.g - card, mobilemoney, ussd and so on.  |
| payment_plan  | False  | This is the payment plan ID used for Recurring billing|
| redirect_url  | False  | URL to redirect to when a transaction is completed. This is useful for 3DSecure payments so we can redirect your customer back to a custom page you want to show them.  |
| customer  | True  | This is an object that can contain your customer details: e.g - 'customer': {'email': 'example@example.com','phonenumber': '08012345678','name': 'Takeshi Kovacs' } |
| subaccounts  | False  | This is an array of objects containing the subaccount IDs to split the payment into. Check our Split Payment page for more info |
| meta  | False  | This is an object that helps you include additional payment information to your request e.g {'consumer_id': 23,'consumer_mac': '92a3-912ba-1192a' } |
|  customizations | True  | This is an object that contains title, logo, and description you want to display on the modal e.g{'title': 'Pied Piper Payments','description': 'Middleout isn't free. Pay the price','logo': 'https://assets.piedpiper.com/logo.png'  } |
| callback (function)  | False  | This is the function that runs after payment is completed  |
| onclose (function)  | False  | This is the function that runs after payment modal is closed  |


Methods provided by Flutterwave plugin and descriptions:

| Method Name  | Parameters  | Returns |Description |
| ------------- | ------------- | ------------- | ------------- |
| payWithFlutterwave()  |  InlinePaymentOptions : Object  | Null | This method allows you to setup and open the payment modal via code |
| asyncPayWithFlutterwave()  |  AsyncPaymentOptions : Object  | Promise | This method allows you to setup and open the payment modal via code and returns a promise containing the payment response |
| closePaymentModal()  |  waitDuration : number (Optional, default = 0)  | Null | This method allows you to close the payment modal via code. You can setup the wait time before the modal closes |


## Debugging Errors
We understand that you may run into some errors while integrating our library. You can read more about our error messages here.

For authorization and validation error responses, double-check your API keys and request. If you get a server error, kindly engage the team for support.


## Support
For additional assistance using this library, please create an issue on the Github repo or contact the developer experience (DX) team via [email](mailto:developers@flutterwavego.com) or on [Slack](https://bit.ly/34Vkzcg).

You can also follow us [@FlutterwaveEng](https://twitter.com/FlutterwaveEng) and let us know what you think 😊.


## Contribution
We welcome contributions from the community. Please see the [community guide](/CONTRIBUTION.md) for contributions guidelines.


## License
By contributing to this library, you agree that your contributions will be licensed under its MIT license.

Copyright (c) Flutterwave Inc.
