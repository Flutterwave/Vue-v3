# Flutterwave Vue.JS v3 Library
![Publish Vue.js Package](https://github.com/Flutterwave/Flutterwave-Vue-v3/workflows/Publish%20Vue.js%20Package/badge.svg)
![npm](https://img.shields.io/npm/v/flutterwave-vue-v3)
![npm](https://img.shields.io/npm/dt/flutterwave-vue-v3)
![NPM](https://img.shields.io/npm/l/flutterwave-vue-v3)

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Running tests](#test)
- [Deployment](#deployment)
- [Built Using](#build-tools)
- [References](#references)

<a id="about"></a>
## About

Flutterwave official Vue library to accept payment via Card, USSD, QrCode etc.

<a id="getting-started"></a>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.
See [references](#references) for links to dashboard and API documentation.


### Prerequisites

```
Vue version >= 2
Flutterwave version 3 API Public keys
```

### Installing


Install the SDK 

```bash
$ npm install flutterwave-vue-v3
# or
$ yarn  add  flutterwave-vue-v3
```


<a id="usage"></a>

## Usage

* Import the Flutterwave Library in the  'main.js' file.  

* Add the Flutterwave plugin to your app passing in your Flutterwave Public Key (optional)

* NB: If Public key is not added you will have to pass in the public_key parameter to the provided payment component button  and payment function

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

Use as component. Method 1 

```html
<!--
Method 1: Pass  in payment parameters individually as component attributes
-->

<template>

  <div>
    <flutterwave-pay-button
        :tx_ref="generateReference()"
        :amount=20
        currency='NGN'
        payment_options="card,ussd"
        redirect_url=""
        class="class-name"
        style=""
        :meta="{counsumer_id: '7898' ,consumer_mac: 'kjs9s8ss7dd' }"
        :customer="{ name: 'Demo Customer  Name',
        email: 'customer@mail.com', 
        phone_number: '0818450****' }"
        :customizations="{  title: 'Customization Title' ,
        description: 'Customization Description'  ,
        logo : 'https://flutterwave.com/images/logo-colored.svg' }"
        :callback="makePaymentCallback"
        :onclose="closedPaymentModal"
    >   Click To Pay </flutterwave-pay-button>
  </div>

</template>

<script>

export default {
  name: 'App',
  methods: {
    makePaymentCallback(response) {
      console.log("Payment callback", response)
    },
    closedPaymentModal() {
      console.log('payment modal is closed');
    },
    generateReference(){
      let date = new Date()
      return date.getTime().toString();
    }
  }
}

</script>
```


Use as component. Method 2
```html
<!--
Method 2: Pass  in payment parameters as object to v-bind
-->

<template>
  <div>
    <flutterwave-pay-button   v-bind="paymentData" > Click To Pay </flutterwave-pay-button>
 </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      paymentData: {
        tx_ref: this.generateReference(),
        amount: 10,
        currency: 'NGN',
        payment_options: 'card,ussd',
        redirect_url: '',
        meta: {
          'counsumer_id': '7898',
          'consumer_mac': 'kjs9s8ss7dd'
        },
        customer: {
          name: 'Demo Customer  Name',
          email: 'customer@mail.com',
          phone_number: '0818450***44'
        } ,
        customizations: {
          title: 'Customization Title',
          description: 'Customization Description',
          logo: 'https://flutterwave.com/images/logo-colored.svg'
        },
        callback: this.makePaymentCallback,
        onclose: this.closedPaymentModal
      }
    }
  } ,
  methods: {
    makePaymentCallback(response) {
      console.log("Pay", response)
    },
    closedPaymentModal() {
      console.log('payment is closed');
    },
    generateReference(){
      let date = new Date()
      return date.getTime().toString();
    }
  }
}
</script>

```

Use in code, using the 'payWithFlutterwave()' method

```html

<template>
  <div>
    <button @click="payViaService">Pay Using Code</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      paymentData: {
        tx_ref: this.generateReference(),
        amount: 10,
        currency: 'NGN',
        payment_options: 'card,ussd',
        redirect_url: '',
        meta: {
          'counsumer_id': '7898',
          'consumer_mac': 'kjs9s8ss7dd'
        },
        customer: {
          name: 'Demo Customer  Name',
          email: 'customer@mail.com',
          phone_number: '081845***044'
        } ,
        customizations: {
          title: 'Customization Title',
          description: 'Customization Description',
          logo: 'https://flutterwave.com/images/logo-colored.svg'
        },
        callback: this.makePaymentCallback,
        onclose: this.closedPaymentModal
      }
    }
  } ,
  methods: {
    payViaService() {
      this.payWithFlutterwave(this.paymentData) 
    } ,
    makePaymentCallback(response) {
      console.log("Pay", response)
    },
    closedPaymentModal() {
      console.log('payment is closed');
    },
    generateReference(){
      let date = new Date()
      return date.getTime().toString();
    }

  }
}
</script>

```

Use in code, using the 'asyncPayWithFlutterwave()' method

```html

<template>
  <div>
    <button @click="asyncPay">Pay Using Async method</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      paymentData: {
        tx_ref: this.generateReference(),
        amount: 10,
        currency: 'NGN',
        payment_options: 'card,ussd',
        redirect_url: '',
        meta: {
          'counsumer_id': '7898',
          'consumer_mac': 'kjs9s8ss7dd'
        },
        customer: {
          name: 'Demo Customer  Name',
          email: 'customer@mail.com',
          phone_number: '081845***044'
        } ,
        customizations: {
          title: 'Customization Title',
          description: 'Customization Description',
          logo: 'https://flutterwave.com/images/logo-colored.svg'
        },
        onclose: this.closedPaymentModal
      }
    }
  } ,
  methods: {
    asyncPay() {
    
        this.asyncPayWithFlutterwave(this.paymentData).then(
                (response) => {
                    console.log(response)
                }
        )
        
    } ,
   
    closedPaymentModal() {
      console.log('payment is closed');
    },
    generateReference(){
      let date = new Date()
      return date.getTime().toString();
    }

  }
}
</script>

```

Programmatically Close Payment Modal, using the "closePaymentModal()" method

```html

<template>

  <div>
    <flutterwave-pay-button
        :tx_ref="generateReference()"
        :amount=20
        currency='NGN'
        payment_options="card,ussd"
        redirect_url=""
        class="class-name"
        style=""
        :meta="{counsumer_id: '7898' ,consumer_mac: 'kjs9s8ss7dd' }"
        :customer="{ name: 'Demo Customer  Name',
        email: 'customer@mail.com', 
        phone_number: '0818450****' }"
        :customizations="{  title: 'Customization Title' ,
        description: 'Customization Description'  ,
        logo : 'https://flutterwave.com/images/logo-colored.svg' }"
        :callback="makePaymentCallback"
        :onclose="closePaymentCallback"
    >   Click To Pay </flutterwave-pay-button>
  </div>

</template>

<script>

export default {
  name: 'App',
  methods: {
    makePaymentCallback(response) {
      console.log("Payment callback", response)
      // Close modal in payment callback
        this.closePaymentModal()
    },
      closePaymentCallback() {
      console.log('payment modal is closed');
    },
    generateReference(){
      let date = new Date()
      return date.getTime().toString();
    }
  }
}

</script>
```

Payment option parameters and descriptions:

| Parameter  | Always Required ? | Description |
| ------------- | ------------- | ------------- |
| public_key  | True  | Your API public key |
| tx_ref  | True  | Your transaction reference. This MUST be unique for every transaction |
| amount  | True  | Amount to charge the customer. |
| currency  | False  | currency to charge in. Defaults to NGN|
| integrity_hash  | False  | This is a sha256 hash of your FlutterwaveCheckout values, it is used for passing secured values to the payment gateway. |
| payment_options  | True  | This specifies the payment options to be displayed e.g - card, mobilemoney, ussd and so on.  |
| payment_plan  | False  | This is the payment plan ID used for Recurring billing|
| redirect_url  | False  | URL to redirect to when a transaction is completed. This is useful for 3DSecure payments so we can redirect your customer back to a custom page you want to show them.  |
| customer  | True  | This is an object that can contains your customer details: e.g - 'customer': {'email': 'example@example.com','phonenumber': '08012345678','name': 'Takeshi Kovacs' } |
| subaccounts  | False  | This is an array of objects containing the subaccount IDs to split the payment into. Check our Split Payment page for more info |
| meta  | False  | This is an object that helps you include additional payment information to your request e.g {'consumer_id': 23,'consumer_mac': '92a3-912ba-1192a' } |
|  customizations | True  | This is an object that contains title, logo, and description you want to display on the modal e.g{'title': 'Pied Piper Payments','description': 'Middleout isn't free. Pay the price','logo': 'https://assets.piedpiper.com/logo.png'  } |
| callback (function)  | False  | This is the function that runs after payment is completed  |
| close (function)  | False  | This is the function that runs after payment modal is closed  |

Methods provided by Flutterwave plugin and descriptions:

| Method Name  | Parameters  | Returns |Description |
| ------------- | ------------- | ------------- | ------------- |
| payWithFlutterwave()  |  InlinePaymentOptions : Object  | Null | This methods allows you to setup and open the payment modal via code |
| asyncPayWithFlutterwave()  |  AsyncPaymentOptions : Object  | Promise | This methods allows you to setup and open the payment modal via code and returns a promise containing the payment response |
| closePaymentModal()  |  waitDuration : number (Optional, default = 0)  | Null | This methods allows you to close the payment modal via code. You can setup the wait time before modal close |

<a id="deployment"></a>

## Deployment

- Switch to Live Mode on the Dashboard settings page
- Use the Live Public API key

<a id="build-tools"></a>

## ⛏️ Built Using

- [Vue CLI](https://cli.vuejs.org/) 
- [Vue](https://vuejs.org/)   
- [Vue-sfc](https://www.npmjs.com/package/vue-sfc-rollup) 


<a id="references"></a>
## Flutterwave API  References

- [Flutterwave API Doc](https://developer.flutterwave.com/docs)
- [Flutterwave Inline Payment Doc](https://developer.flutterwave.com/docs/flutterwave-inline)
- [Flutterwave Dashboard](https://dashboard.flutterwave.com/login)  
