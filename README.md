## 📝 Table of Contents

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

## 🏁 Getting Started

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

## 🔧 Usage

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

<a id="deployment"></a>
## 🚀 Deployment

- Switch to Live Mode on the Dashboard settings page
- Use the Live Public API key 

<a id="build-tools"></a>
## ⛏️ Built Using

- [Vue CLI](https://cli.vuejs.org/) 
- [Vue](https://vuejs.org/)   
- [Vue-sfc](https://www.npmjs.com/package/vue-sfc-rollup) 


<a id="references"></a>
## 🎉 Flutterwave API  References

- [Flutterwave API Doc](https://developer.flutterwave.com/docs)
- [Flutterwave Inline Payment Doc](https://developer.flutterwave.com/docs/flutterwave-inline)
- [Flutterwave Dashboard](https://dashboard.flutterwave.com/login)  
