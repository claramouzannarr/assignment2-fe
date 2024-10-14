<template>
  <div>
    <h1>Welcome to the Bank App</h1>
    <p>This is the home page. Use the navigation to explore the app.</p>
    <router-link to="/new-account">Create a New Account</router-link>  <!-- Link to create a new account -->
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
