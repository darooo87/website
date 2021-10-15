<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="footer-manu">
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">How it works</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
          <p class="copyright">Copyright 2018 &copy; Design & Developed by <a
              href="http://www.themefisher.com">themefisher.com</a>. All rights reserved.
            <br>
            Get More <a href="https://themefisher.com/free-bootstrap-templates/" target="_blank">Free Bootstrap
              Templates</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return {
      text : '',
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-window {
  width: 100%;
  height: 100%;
  color: lightgray;
  background-color: black;
  padding: 10px;
  white-space: pre;
}
</style>
