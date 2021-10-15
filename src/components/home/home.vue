<template>
  <Slider />
  <AboutUs />
  <GreatIdeas />
  <Services />
  <ContactUs />
  <FunFacts />
</template>

<script>
import Slider from "./slider.vue";
import AboutUs from "./about-us.vue";
import GreatIdeas from "./great-ideas.vue";
import Services from "./services.vue";
import ContactUs from "./contact-us.vue";
import FunFacts from "./fun-facts.vue";

export default {
  name: "HomePage",
  components: {
    Slider,
    AboutUs,
    GreatIdeas,
    Services,
    ContactUs,
    FunFacts
  },
};
</script>

<style>

</style>
