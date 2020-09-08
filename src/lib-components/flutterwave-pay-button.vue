<script>
export default {
  name: "FlutterwavePayButton" ,
  props: {
    public_key: {
      type: String,
    },
    tx_ref: {
      type: [String, Number]
    },
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      default: 'NGN'
    },
    payment_options: {
      type: String
    },
    redirect_url: {
      type: String
    },
    meta: {
      type: Object
    },
    customer: {
      type: Object
    },
    customizations: {
      type: Object
    }
    ,
    callback: {
      type: Function
    } ,

    onclose: {
      type: Function
    }


  },
  methods: {

    showPaymentModal(){

      let paymentParams =  {

        public_key: this.public_key ,
        tx_ref: this.tx_ref,
        amount: this.amount,
        currency: this.currency ,
        payment_options: this.payment_options,
        redirect_url: this.redirect_url,
        meta: this.meta,
        customer: this.customer,
        customizations: this.customizations,
        callback: (response) => this.callback(response),
        onclose: () => this.onclose()

      }

      this.payWithFlutterwave(paymentParams)

    }

  }
}
</script>

<template>

  <button @click="showPaymentModal">
    <slot></slot>
  </button>

</template>
