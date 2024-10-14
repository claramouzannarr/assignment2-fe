<template>
  <b-container>
    <h2>Create a New Bank Account</h2>
    <b-form @submit.prevent="submitForm">
      <b-form-group label="Account Name:" label-for="accountName">
        <b-form-input
          id="accountName"
          v-model="accountName"
          required
          placeholder="Enter account name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Account Number:" label-for="accountNumber">
        <b-form-input
          id="accountNumber"
          v-model="accountNumber"
          required
          placeholder="Enter account number"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Country:" label-for="country">
        <b-form-input
          id="country"
          v-model="country"
          required
          placeholder="Enter country"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Create Account</b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      accountName: '',
      accountNumber: '',
      country: ''  // New field for country
    };
  },
  methods: {
    submitForm() {
      // Form validation and submission logic
      const accountData = {
        accountName: this.accountName,
        accountNumber: this.accountNumber,
        country: this.country
      };

      // Submit to backend
      this.$http.post('/api/accounts', accountData)
        .then(response => {
          alert('Account created successfully');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
