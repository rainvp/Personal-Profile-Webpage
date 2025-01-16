const app = Vue.createApp({
    data() {
      return {
        name: '',
        message: '',
        submitted: false,
      };
    },
    methods: {
      submitForm() {
        this.submitted = true;
      }
    }
  });
  app.mount('#contact-form');