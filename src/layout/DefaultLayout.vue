<template>
  <div>
    <navbar></navbar>
    <slot></slot>
    <rodape></rodape>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Rodape from './Rodape'
export default {
  name: 'DefaultLayout',
  components: {
    Rodape,
    Navbar
  }
  
}
</script>