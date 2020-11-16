export class ApiTracker {

   static  trackingEndPoint = 'https://kgelfdz7mf.execute-api.us-east-1.amazonaws.com/staging/sendevent';

    static  packageVersion = '1.0.2';
    static  language = 'Vue V3'

  /*  static  trackingFeatures = {

        'initiateCardCharge': 'Initiate-Card-charge',
        'initiateCardChargeError': 'Initiate-Card-charge-error',
        'validateCardCharge': 'Validate-Card-charge',
        'validateCardChargeError': 'Validate-Card-charge-error',
        'verifyCardCharge': 'Verify-Card-charge',
        'verifyCardChargeError': 'Verify-Card-charge-error',
        'initiateAccountCharge': 'Initiate-Account-charge',
        'initiateAccountChargeError': 'Initiate-Account-charge-error',
        'accountChargeValidate': 'Account-charge-validate',
        'accountChargeValidateError': 'Account-charge-validate-error',
        'accountChargeVerify': 'Account-charge-verify',
        'accountChargeVerifyError': 'Account-charge-verify-error',

    }*/


    constructor() {
    }
/* {
    paymentData: object | any
,
    response: object | any
    responseTime: string
}*/

  static  track(data) {

        const trackingData = {
            publicKey: data.paymentData.public_key,
            language: this.language,
            version: this.packageVersion,
            title: '',
            message: '0' // data.responseTime

        }

      const paymentOptions = data.paymentData.payment_options || ''
      const paymentOptionsArray = paymentOptions ?  paymentOptions.split(',') : []

      let title = ''

      if (paymentOptionsArray.length === 0) {
          title = 'Initiate-Charge-Dashboard'
      } else if (paymentOptionsArray.length === 1) {
          title = 'Initiate-Charge-' + paymentOptions

      } else {
          title = 'Initiate-Charge-Multiple'

      }

      trackingData.title = data.response.status === 'successful' ? title : title + '-error'


        this.submitTracking(trackingData)

    }

    static submitTracking(trackingData) {
        fetch(this.trackingEndPoint, {
            method: 'POST',
            body: JSON.stringify(trackingData)
        }).then((res) => {
        })
    }
}
