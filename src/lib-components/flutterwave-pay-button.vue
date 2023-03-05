<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'FlutterwavePayButton',
  props: {
    public_key: {
      type: String,
    },
    tx_ref: {
      type: String,
      required: true,
    },
    amount: {
      type: [String, Number],
      required: true,
    },
    currency: {
      type: String,
    },
    payment_options: {
      type: String,
    },
    redirect_url: {
      type: String,
    },
    meta: {
      type: Object,
    },
    customer: {
      type: Object,
      required: true,
    },
    customizations: {
      type: Object,
    },
    payment_plan: {
      type: [String, Number],
    },
    subaccounts: {
      type: Array,
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
      const paymentParams: {
        [key:string]: unknown
      } = {
        tx_ref: this.tx_ref,
        amount: this.amount,
        currency: this.currency,
        payment_options: this.payment_options,
        redirect_url: this.redirect_url,
        meta: this.meta,
        customer: this.customer,
        customizations: this.customizations,
        payment_plan: this.payment_plan,
        subaccounts: this.subaccounts,
        callback: (response: unknown) => this.callback(response),
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
