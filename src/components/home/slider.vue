<template>
<!-- Slider Start -->
  <section class="slider">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="block">
            <h1 class="animated fadeInUp">Hi I'm Dariusz</h1>
            <p class="animated fadeInUp">We love the Web and the work we do.We work closely with our clients to deliver
              <br/> the best possible solutions for their needs</p>
              <router-link class="btn btn-main animated fadeInUp" to="/portfolio">Check my portfolio</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Slider",
  data(){
    return {
      text : '',
    }
  }
};
</script>

<style scoped>

</style>
