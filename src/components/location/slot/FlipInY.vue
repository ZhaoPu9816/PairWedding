<template>
  <transition
  enter-active-class="animated flipInY"
  leave-active-class="animated"
  >
    <slot name="flipInY"></slot>
  </transition>
</template>
<script>
export default {
  name: 'flipInY'
}
</script>

<style>

</style>
