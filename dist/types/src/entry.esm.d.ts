import { PluginFunction } from "vue";
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
    interface Vue {
        $payWithFlutterwave: (paymentParams: InlinePaymentOptions) => void;
        $asyncPayWithFlutterwave: (paymentData: AsyncPaymentOptions) => Promise<PaymentSuccessResponse>;
        $closePaymentModal: (waitDuration: number) => void;
    }
}
declare const install: PluginFunction<any>;
export default install;
export * from "./lib-components/index";
