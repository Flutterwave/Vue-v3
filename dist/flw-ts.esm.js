import Vue from 'vue';

var script = Vue.extend({
  name: "FlutterwavePayButton",
  props: {
    public_key: {
      type: String
    },
    tx_ref: {
      type: [String, Number]
    },
    amount: {
      type: [String, Number],
      required: true
    },
    currency: {
      type: String,
      default: "NGN"
    },
    country: {
      type: String,
      default: "NG"
    },
    payment_options: {
      type: String
    },
    payment_plan: {
      type: [String, Number]
    },
    subaccounts: {
      type: Array
    },
    integrity_hash: {
      type: [String, Number]
    },
    redirect_url: {
      type: String
    },
    meta: {
      type: Object
    },
    authorization: {
      type: String
    },
    customer: {
      type: Object
    },
    customizations: {
      type: Object
    },
    callback: {
      type: Function
    },
    onclose: {
      type: Function
    }
  },
  methods: {
    showPaymentModal() {
      let paymentParams = {
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
        callback: response => this.callback(response),
        onclose: () => this.onclose()
      };

      if (this.public_key) {
        paymentParams.public_key = this.public_key;
      }

      this.$payWithFlutterwave(paymentParams);
    }

  }
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    on: {
      "click": _vm.showPaymentModal
    }
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var __vue_component__$1 = __vue_component__;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  FlutterwavePayButton: __vue_component__$1
});

// Import vue components

const install = function installFlwTs(Vue, _ref) {
  let {
    publicKey = ""
  } = _ref;
  Object.entries(components).forEach(_ref2 => {
    let [componentName, component] = _ref2;
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
      payWithFlutterwave(paymentParams) {
        let payData = { ...paymentParams,
          public_key: paymentParams.public_key || publicKey,
          callback: response => {
            // trackApi({
            //   paymentData: payData,
            //   response: response,
            //   responseTime: 1000,
            // });
            paymentParams.callback(response);
          }
        };
        window.FlutterwaveCheckout(payData);
      },

      asyncPayWithFlutterwave(paymentData) {
        return new Promise(function (resolve) {
          let payData = { ...paymentData,
            public_key: paymentData.public_key || publicKey,
            callback: $event => {
              // trackApi({
              //   paymentData: payData,
              //   response: $event,
              //   responseTime: 1000,
              // });
              resolve($event);
            },
            onclose: () => resolve("closed")
          };
          window.FlutterwaveCheckout(payData);
        });
      },

      closePaymentModal() {
        let waitDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        setTimeout(() => {
          document.getElementsByName("checkout")[0].setAttribute("style", "position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;");
          document.body.style.overflow = ""; // document.getElementsByName('checkout')[0].setAttribute('style', 'z-index: -1; opacity: 0')
        }, waitDuration * 1000);
      }

    }
  });

  Vue.prototype.$payWithFlutterwave = function (paymentParams) {
    let payData = { ...paymentParams,
      public_key: paymentParams.public_key || publicKey,
      callback: response => {
        // trackApi({
        //   paymentData: payData,
        //   response: response,
        //   responseTime: 1000,
        // });
        paymentParams.callback(response);
      }
    };
    window.FlutterwaveCheckout(payData);
  };

  Vue.prototype.$asyncPayWithFlutterwave = function (paymentData) {
    return new Promise(function (resolve) {
      let payData = { ...paymentData,
        public_key: paymentData.public_key || publicKey,
        callback: $event => {
          // trackApi({
          //   paymentData: payData,
          //   response: $event,
          //   responseTime: 1000,
          // });
          resolve($event);
        },
        onclose: () => resolve("closed")
      };
      window.FlutterwaveCheckout(payData);
    });
  };

  Vue.prototype.$closePaymentModal = function () {
    let waitDuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    setTimeout(() => {
      document.getElementsByName("checkout")[0].setAttribute("style", "position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;");
      document.body.style.overflow = ""; // document.getElementsByName('checkout')[0].setAttribute('style', 'z-index: -1; opacity: 0')
    }, waitDuration * 1000);
  };
}; // Create module definition for Vue.use()

export { __vue_component__$1 as FlutterwavePayButton, install as default };
