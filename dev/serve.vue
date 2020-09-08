<script>
import Vue from 'vue';
import { FlutterwavePayButton } from '@/entry';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    FlutterwavePayButton,
  }
});
</script>

<template>
  <div id="app">
    <flutterwave-pay-button> Test </flutterwave-pay-button>
  </div>
</template>
