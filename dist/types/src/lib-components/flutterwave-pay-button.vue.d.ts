import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    showPaymentModal(): void;
}, unknown, {
    public_key: string;
    tx_ref: string;
    amount: string | number;
    currency: string;
    payment_options: string;
    redirect_url: string;
    meta: any;
    customer: any;
    customizations: any;
    payment_plan: string | number;
    subaccounts: unknown[];
    callback: Function;
    onclose: Function;
}>;
export default _default;
