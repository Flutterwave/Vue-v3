import Vue from "vue";
declare const _default: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    showPaymentModal(): void;
}, unknown, {
    public_key: string;
    tx_ref: string | number;
    amount: string | number;
    currency: string;
    country: string;
    payment_options: string;
    payment_plan: string | number;
    subaccounts: unknown[];
    integrity_hash: string | number;
    redirect_url: string;
    meta: any;
    authorization: string;
    customer: any;
    customizations: any;
    callback: Function;
    onclose: Function;
}>;
export default _default;
