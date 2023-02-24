import { PluginFunction } from "vue";
export interface InlinePaymentOptions {
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
    callback?: (response: object) => void;
    onclose?: () => void;
}
export interface AsyncPaymentOptions {
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
declare const install: PluginFunction<any>;
export default install;
export * from "./lib-components";
