<template>
  <div>
    <button @click="payViaCode">Pay Using Code</button>
    <button @click="payViaAsyncMethod">Pay Using Async code</button>

    <flutterwave-pay-button
      :tx_ref="generateReference()"
      amount="20"
      currency="NGN"
      payment_options="card,ussd"
      redirect_url=""
      class="class-name"
      style=""
      :meta="{
        counsumer_id: '7898',
        consumer_mac: 'kjs9s8ss7dd'
      }"
      :customer="{
        name: 'Demo Customer  Name',
        email: 'customer@mail.com',
        phone_number: '0818450****',
      }"
      :customizations="{
        title: 'Customization Title v2 ts',
        description: 'Customization Description',
        logo: 'https://flutterwave.com/images/logo-colored.svg',
      }"
      :callback="makePaymentCallback"
      :onclose="closedPaymentModal"
    >
      Pay using flutterwave-pay-button component
    </flutterwave-pay-button>
  </div>
</template>

<script lang="ts">
import { PaymentSuccessResponse } from '@/entry.esm';
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data() {
    return {
      paymentData: {
        tx_ref: (this as any).generateReference(),
        amount: 10,
        currency: 'NGN',
        payment_options: 'card,ussd',
        redirect_url: '',
        meta: {
          counsumer_id: '7898',
          consumer_mac: 'kjs9s8ss7dd',
        },
        customer: {
          name: 'Demo Customer  Name',
          email: 'customer@mail.com',
          phone_number: '081845***044',
        },
        customizations: {
          title: 'Customization Title',
          description: 'Customization Description',
          logo: 'https://flutterwave.com/images/logo-colored.svg',
        },
        callback: (this as any).makePaymentCallback,
        onclose: (this as any).closedPaymentModal,
      },
    };
  },
  methods: {
    payViaAsyncMethod() {
      this.$asyncPayWithFlutterwave(this.paymentData).then(
        (res: PaymentSuccessResponse) => {
          console.log('Async', res);
          this.$closePaymentModal(5);
        },
      );
    },
    payViaCode() {
      this.$payWithFlutterwave(this.paymentData);
    },
    makePaymentCallback(response: any) {
      console.log('Pay', response);
    },
    closedPaymentModal() {
      console.log('payment is closed');
    },
    generateReference(): string {
      const date = new Date();

      return date.getTime().toString();
    },
  },
});
</script>
