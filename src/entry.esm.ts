import _Vue, { PluginFunction } from 'vue';

// Import vue components
import * as components from '@/lib-components';

// Import onMount mixin
import scriptDownloadMixin from '../util/mixins';

export interface PaymentOptions {
  public_key?: string;
  tx_ref: string;
  amount: string | number;
  currency?: string;
  payment_options?: string;
  redirect_url?: string;
  meta?: {
    [key: string]: string;
  };
  customer: {
    email: string;
    name?: string;
    phone_number?: string;
  };
  customizations?: {
    title?: string;
    logo?: string;
    description?: string;
  };
  payment_plan?: string | number;
  subaccounts?: {
    id: string;
  }[];
  callback?: (response: {
    [key:string]: any
  }) => void;
  onclose?: () => void;
}
export interface PaymentSuccessResponse {
  amount?: number;
  currency?: string;
  customer?: object;
  flw_ref?: string;
  status?: string;
  transaction_id?: number;
  tx_ref?: string;
  payment_plan?: string | number;
  [key: string]: any;
}
declare global {
  function FlutterwaveCheckout(arg: any): any;
}

// install function executed by Vue.use()
const install: PluginFunction<any> = function installFlwTs(
  Vue: typeof _Vue,
  { publicKey = '' },
) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
  Vue.mixin(scriptDownloadMixin);

  /* eslint-disable func-names */
  /* eslint-disable no-param-reassign */
  Vue.prototype.$payWithFlutterwave = function (
    paymentParams: PaymentOptions,
  ): void {
    const payData = {
      ...paymentParams,
      public_key: paymentParams.public_key || publicKey,
      currency: paymentParams.currency || 'NGN',
    };

    window.FlutterwaveCheckout(payData);
  };

  Vue.prototype.$asyncPayWithFlutterwave = function (
    paymentData: PaymentOptions,
  ): Promise<any> {
    return new Promise((resolve) => {
      const payData = {
        ...paymentData,
        public_key: paymentData.public_key || publicKey,
        currency: paymentData.currency || 'NGN',
        callback: ($event: PaymentSuccessResponse | any) => {
          // trackApi({
          //   paymentData: payData,
          //   response: $event,
          //   responseTime: 1000,
          // });

          resolve($event);
        },
      };

      window.FlutterwaveCheckout(payData);
    });
  };

  Vue.prototype.$closePaymentModal = function (waitDuration = 0) {
    setTimeout(() => {
      document
        .getElementsByName('checkout')[0]
        .setAttribute(
          'style',
          'position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;',
        );
      document.body.style.overflow = '';
      // document.getElementsByName('checkout')[0].setAttribute('style', 'z-index: -1; opacity: 0')
    }, waitDuration * 1000);
  };
  /* eslint-enable func-names */
  /* eslint-enable no-param-reassign */
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/lib-components';
