<template>
  <div class="jumbotron vertical-center bg-light">
    <img src="@/assets/iebank.png" alt="IE Bank Corp Logo" class="logo" />
    <h1 class="display-4">Welcome to IE Bank Corp</h1>
    <p class="lead">Your trusted partner in finance.</p>
    <a class="btn btn-primary btn-lg" href="/accounts" role="button"
      >View Accounts</a
    >
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
/* Import Bootstrap CSS */
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");

/*stylesheet*/
.vertical-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.logo {
  width: 150px;
  margin-bottom: 20px; 
}
</style>
