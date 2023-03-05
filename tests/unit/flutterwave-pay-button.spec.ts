/* eslint-disable no-unused-expressions */
import { createLocalVue, shallowMount } from '@vue/test-utils';
import { expect } from 'chai';
import FlutterwavePayButton from '@/lib-components/flutterwave-pay-button.vue';
import scriptDownloadMixin from '../../util/mixins';

const localVue = createLocalVue();

localVue.mixin(scriptDownloadMixin);

describe('flutterwave-pay-button.vue', () => {
  it('when component mounts, document should contain valid script element to download FlutterwaveCheckout function', () => {
    const wrapper = shallowMount(FlutterwavePayButton, {
      propsData: {
        tx_ref: Date.now().toString(),
        amount: '100',
        customer: {
          email: 'user@example.com',
        },
      },
      localVue,
    });

    const script = Array.from(document.querySelectorAll('script')).map((element) => element.getAttribute('src'));

    expect(wrapper.find('button').exists()).to.be.true;
    expect(script).to.include('https://checkout.flutterwave.com/v3.js');
  });
});
