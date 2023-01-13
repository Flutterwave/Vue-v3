<script lang="ts">
import Vue from "vue";
import { FlutterwavePayButton } from "@/lib-components";

export default Vue.extend({
  name: "ServeDev",
  components: {
    FlutterwavePayButton,
  },
  data() {
    return {
      paymentData: {
        tx_ref: (this as any).generateReference(),
        amount: '100',
        meta: {
          counsumer_id: "7898",
          consumer_mac: "kjs9s8ss7dd",
        },
        customer: {
          name: "Demo Customer  Name",
          email: "customer@mail.com",
          phoneNumber: "0818450***44",
        },
        customizations: {
          title: "Customization Title",
          description: "Customization Description",
          logo: "https://flutterwave.com/images/logo-colored.svg",
        },
        callback: (this as any).makePaymentCallback,
        onclose: (this as any).closeModalCallback,
      },
    };
  },
  methods: {
    makePaymentCallback(response: any) {
      console.log("Pay", response);
      this.$closePaymentModal(5);
    },
    asyncPay() {
      this.$asyncPayWithFlutterwave(this.paymentData).then((response: any) => {
        console.log(response);
        this.$closePaymentModal(5);
      });
    },
    closeModalCallback() {
      console.log("payment is closed");
    },
    generateReference() {
      let date = new Date();
      return date.getTime().toString();
    },
  },
});
</script>


<template>
  <div>
    <flutterwave-pay-button v-bind="paymentData">Pay With Flw Pay button</flutterwave-pay-button>

    <button @click="asyncPay()">Pay With Promise</button>
  </div>
</template>

<style>
button {
  display: block;
  margin: 5vh auto;
}
</style>