// Import vue components
import * as components from '@/lib-components/index';
import trackApi from "./api_tracker";


// install function executed by Vue.use()
const install = function installFlutterwaveVueV3(Vue, {publicKey = ''}) {
    if (install.installed) return;
    install.installed = true;
    Object.entries(components).forEach(([componentName, component]) => {
        Vue.component(componentName, component);
    });
    Vue.mixin({
        mounted() {
            const inlineSdk = "https://checkout.flutterwave.com/v3.js";
            const script = document.createElement('script')
            script.src = inlineSdk;
            if (!document.querySelector(`[src="${inlineSdk}"]`)) {
                document.body.appendChild(script)
            }
        },
        methods: {

            payWithFlutterwave(paymentParams) {

                let payData = {
                    ...paymentParams,
                    public_key: paymentParams.public_key || publicKey,
                    callback: (response) => {
                        trackApi(
                            {
                                paymentData: payData,
                                response: response,
                                responseTime: 1000
                            })
                        paymentParams.callback(response)
                    }
                }

                window.FlutterwaveCheckout(payData)
            },

            asyncPayWithFlutterwave(paymentData) {

                return new Promise(function (resolve, reject) {

                    let payData = {
                        ...paymentData,
                        public_key: paymentData.public_key || publicKey,
                        callback: ($event) => {

                            trackApi(
                                {
                                    paymentData: payData,
                                    response: $event,
                                    responseTime: 1000
                                })

                            resolve($event)
                        },
                        onclose: () => resolve('closed')
                    };

                    window.FlutterwaveCheckout(payData)

                })

            },

            closePaymentModal(waitDuration = 0) {
                setTimeout(() => {
                    document.getElementsByName('checkout')[0].setAttribute('style',
                        'position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;');
                    document.body.style.overflow = '';
                    // document.getElementsByName('checkout')[0].setAttribute('style', 'z-index: -1; opacity: 0')
                }, waitDuration * 1000)
            },

        }
    })
};

// Create module definition for Vue.use()
const Flutterwave = {
    install,
};

// To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare
/* global window, global */
if ('false' === process.env.ES_BUILD) {
    let GlobalVue = null;
    if (typeof window !== 'undefined') {
        GlobalVue = window.Vue;
    } else if (typeof global !== 'undefined') {
        GlobalVue = global.Vue;
    }
    if (GlobalVue) {
        GlobalVue.use(Flutterwave);
    }
}
// Default export is library as a whole, registered via Vue.use()
export default Flutterwave;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/lib-components/index';
