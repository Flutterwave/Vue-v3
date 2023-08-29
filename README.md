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
5. [Debugging errors](#debugging-errors)
6. [Support](#support)
7. [Contribution](#contribution)
8. [License](#license)


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
