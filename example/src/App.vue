<template>
  <div id="app">
   <flutterwave-pay-button   v-bind="paymentData"   >Pay
   </flutterwave-pay-button>

    <br>

    <flutterwave-pay-button
        :tx_ref="generateReference()"
        :amount=20.33
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
    >
      Click To Pay

    </flutterwave-pay-button>
    <br>
    <button @click="payViaService">Pay Using Code</button>
    <br>

  </div>


</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      paymentData: {

    //  public_key: "FLWPUBK_TEST-0b*****b4-X", //use if default is not set
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
          phone_number: '08184500044'
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

    }
,

    closedPaymentModal() {
      console.log('payment is closed');
    }

,
    generateReference(){

      let date = new Date()
      return date.getTime().toString();

    }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
