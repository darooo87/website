<template>
  <div class="main-window">
    <pre>
    .___            .__                          .___         _____               __                     
  __| _/____ _______|__| ____     ____  ____   __| _/____   _/ ____\____    _____/  |_  ___________ ___.__.    
 / __ |\__  \\_  __ \  |/  _ \  _/ ___\/  _ \ / __ |/ __ \  \   __\\__  \ _/ ___\   __\/  _ \_  __ &lt;   |  |  
/ /_/ | / __ \|  | \/  (  &lt;_> ) \  \__(  &lt;_> ) /_/ \  ___/   |  |   / __ \\  \___|  | (  &lt;_> )  | \/\___  |   
\____ |(____  /__|  |__|\____/   \___  >____/\____ |\___  >  |__|  (____  /\___  >__|  \____/|__|   / ____|  
     \/     \/                       \/           \/    \/              \/     \/                   \/     
     </pre> 
     <div>guest@website-server:~$ _</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
