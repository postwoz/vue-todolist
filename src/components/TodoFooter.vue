<template>

  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">
      Clear All
    </span>
  </div>  

</template>


<script>

import { mapMutations } from 'vuex'

export default {  
  methods: {      
    ...mapMutations({
      clearTodo: 'clearAll'
    })
  }
}

</script>


<style scoped>

.clearAllContainer {
  width: 4.5 rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
  width: 50%;
}

.clearAllBtn {
  color: red;
  display: block;
  cursor: pointer;
}

</style>