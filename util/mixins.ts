const scriptDownloadMixin = {
  mounted() {
    const inlineSdk = 'https://checkout.flutterwave.com/v3.js';
    const script = document.createElement('script');
    script.src = inlineSdk;
    if (!document.querySelector(`[src="${inlineSdk}"]`)) {
      document.body.appendChild(script);
    }
  },
};

export default scriptDownloadMixin;
