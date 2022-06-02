import _Vue, { PluginFunction } from "vue";
//@ts-ignore
import Vue from "vue";

// Import vue components
import * as components from "@/lib-components/index";

export interface InlinePaymentOptions {
  public_key?: string | undefined;
  tx_ref: string;
  amount: number;
  currency?: string;
  country?: string;
  authorization?: object | string;
  payment_options?: string;
  payment_plan?: string | number;
  subaccounts?: any;
  integrity_hash?: any;
  redirect_url?: string;
  meta?: any;
  customer?: object;
  customizations?: object;
  callback?: (response: object) => void;
  onclose?: () => void;
}
export interface AsyncPaymentOptions {
  public_key?: string;
  tx_ref: string;
  amount: number;
  currency?: string;
  country?: string;
  authorization?: object | string;
  payment_options?: string;
  meta?: any;
  customer?: object;
  customizations?: object;
  payment_plan?: string | number;
  subaccounts?: any;
  integrity_hash?: any;
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
  function FlutterwaveCheckout({}: any): any;
}

declare module "vue/types/vue" {
  //  Declare augmentation for Vue
  interface Vue {
    $payWithFlutterwave: (paymentParams: InlinePaymentOptions) => void;
    $asyncPayWithFlutterwave: (
      paymentData: AsyncPaymentOptions
    ) => Promise<PaymentSuccessResponse>;
    $closePaymentModal: (waitDuration: number) => void;
  }
}

// install function executed by Vue.use()
const install: PluginFunction<any> = function installFlwTs(
  Vue: typeof _Vue,
  { publicKey = "" }
) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
  Vue.mixin({
    mounted() {
      const inlineSdk = "https://checkout.flutterwave.com/v3.js";
      const script = document.createElement("script");
      script.src = inlineSdk;
      if (!document.querySelector(`[src="${inlineSdk}"]`)) {
        document.body.appendChild(script);
      }
    },
    methods: {
      payWithFlutterwave(paymentParams: InlinePaymentOptions): void {
        let payData = {
          ...paymentParams,
          public_key: paymentParams.public_key || publicKey,
          callback: (response: PaymentSuccessResponse | any) => {
            // trackApi({
            //   paymentData: payData,
            //   response: response,
            //   responseTime: 1000,
            // });
            paymentParams.callback!(response);
          },
        };

        window.FlutterwaveCheckout(payData);
      },

      asyncPayWithFlutterwave(paymentData: AsyncPaymentOptions) {
        return new Promise(function (resolve) {
          let payData = {
            ...paymentData,
            public_key: paymentData.public_key || publicKey,
            callback: ($event: PaymentSuccessResponse | any) => {
              // trackApi({
              //   paymentData: payData,
              //   response: $event,
              //   responseTime: 1000,
              // });

              resolve($event);
            },
            onclose: () => resolve("closed"),
          };

          window.FlutterwaveCheckout(payData);
        });
      },

      closePaymentModal(waitDuration: number = 0) {
        setTimeout(() => {
          document
            .getElementsByName("checkout")[0]
            .setAttribute(
              "style",
              "position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;"
            );
          document.body.style.overflow = "";
          // document.getElementsByName('checkout')[0].setAttribute('style', 'z-index: -1; opacity: 0')
        }, waitDuration * 1000);
      },
    },
  });

  Vue.prototype.$payWithFlutterwave = function (
    paymentParams: InlinePaymentOptions
  ): void {
    let payData = {
      ...paymentParams,
      public_key: paymentParams.public_key || publicKey,
      callback: (response: PaymentSuccessResponse | any) => {
        // trackApi({
        //   paymentData: payData,
        //   response: response,
        //   responseTime: 1000,
        // });
        paymentParams.callback!(response);
      },
    };

    window.FlutterwaveCheckout(payData);
  };

  Vue.prototype.$asyncPayWithFlutterwave = function (
    paymentData: AsyncPaymentOptions
  ): Promise<any> {
    return new Promise(function (resolve) {
      let payData = {
        ...paymentData,
        public_key: paymentData.public_key || publicKey,
        callback: ($event: PaymentSuccessResponse | any) => {
          // trackApi({
          //   paymentData: payData,
          //   response: $event,
          //   responseTime: 1000,
          // });

          resolve($event);
        },
        onclose: () => resolve("closed"),
      };

      window.FlutterwaveCheckout(payData);
    });
  };

  Vue.prototype.$closePaymentModal = function (waitDuration: number = 0) {
    setTimeout(() => {
      document
        .getElementsByName("checkout")[0]
        .setAttribute(
          "style",
          "position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;"
        );
      document.body.style.overflow = "";
      // document.getElementsByName('checkout')[0].setAttribute('style', 'z-index: -1; opacity: 0')
    }, waitDuration * 1000);
  };
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from "@/lib-components/index";
