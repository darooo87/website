<template>
  <header class="navigation">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <nav class="navbar">
            <div class="container-fluid">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand" to="/">{WebDeck}</router-link>
                <!-- <a href="index.html">
                   <img src="images/logo.png" alt="Logo">
                </a> -->
              </div>
              <div
                class="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul class="nav navbar-nav navbar-right">
                  <li><router-link to="/">Home</router-link></li>
                  <li><router-link to="/portfolio">Portfolio</router-link></li>
                  <li><router-link to="/services">Service</router-link></li>
                  <li><router-link to="/contact">Contact</router-link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style scoped>
.navbar-brand {
  font-size: 30px;
  padding-bottom: 5px;
  padding-top: 10px;
}
</style> 
