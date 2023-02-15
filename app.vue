<template>
  <div class="container">
   <button @click="store.increment()">+</button>
    <div >{{store.count}}</div>
  </div>
</template>

<script lang="ts">
import {useCounter} from "~/stores/test";

export default defineComponent({
  name: 'App',
  setup(){
    const store = useCounter()

    return { store }
  }
})
</script>
