<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "FlutterwavePayButton",
  props: {
    public_key: {
      type: String,
    },
    tx_ref: {
      type: [String, Number],
    },
    amount: {
      type: [String, Number],
      required: true,
    },
    currency: {
      type: String,
      default: "NGN",
    },
    country: {
      type: String,
      default: "NG",
    },
    payment_options: {
      type: String,
    },
    payment_plan: {
      type: [String, Number],
    },
    subaccounts: {
      type: Array,
    },
    integrity_hash: {
      type: [String, Number],
    },
    redirect_url: {
      type: String,
    },
    meta: {
      type: Object,
    },
    authorization: {
      type: String,
    },
    customer: {
      type: Object,
    },
    customizations: {
      type: Object,
    },
    callback: {
      type: Function,
    },

    onclose: {
      type: Function,
    },
  },

  methods: {
    showPaymentModal(): void {
      let paymentParams: any = {
        tx_ref: this.tx_ref,
        amount: this.amount,
        currency: this.currency,
        country: this.country,
        payment_options: this.payment_options,
        payment_plan: this.payment_plan,
        subaccounts: this.subaccounts,
        integrity_hash: this.integrity_hash,
        redirect_url: this.redirect_url,
        meta: this.meta,
        authorization: this.authorization,
        customer: this.customer,
        customizations: this.customizations,
        callback: (response: any) => this.callback(response),
        onclose: () => this.onclose(),
      };

      if (this.public_key) {
        paymentParams.public_key = this.public_key;
      }

      this.$payWithFlutterwave(paymentParams);
    },
  },
});
</script>

<template>
  <button @click="showPaymentModal">
    <slot></slot>
  </button>
</template>

