<template>
  <div class="homepage">
    <!-- Welcome Text -->
    <h1>Welcome to IE Bank</h1>
    <p>The most goated bank in the world</p>
    
    <!-- View Accounts Button -->
    <!-- <button @click="viewAccounts">View Accounts</button> -->
    <div class="links">
      <router-link to="/accounts" class="link-button">Accounts<br></router-link>
      <router-link to="/skull" class="link-button">Skull</router-link>
    </div>
  </div>

  
</template>

<script>

export default {
  name: 'Homepage',
  methods: {
    async viewAccounts() {
      try {
        const response = await api.getAccounts();
        console.log(response.data);
        // Handle the response data, e.g., navigate to accounts page
        this.$router.push('/accounts');
      } catch (error) {
        console.error('Error fetching accounts:', error);
        alert('Failed to fetch accounts.');
      }
    }
  }
};
</script>

<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f2f2f2;
}
</style>