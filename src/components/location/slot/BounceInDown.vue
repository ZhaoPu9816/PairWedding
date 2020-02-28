<template>
    <transition
    enter-active-class="animated bounceInDown"
    leave-active-class="animated"
    >
      <slot name="bounceInDown"></slot>
    </transition>
</template>
<script>
export default {
  name: 'lefttoright'
}
</script>

<style>

</style>
