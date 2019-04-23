<template>
  <div>
    <slot v-bind:user="user">
      {{ user.lastName }}
    </slot>
    <br>
    <slot name="other" v-bind:user="otherUser">
      {{ otherUser.lastName }}
    </slot>
  </div>
</template>

<script>
export default {
  name: 'SlotScope',
  data () {
    return {
      user: {
        firstName: 'shi',
        lastName: 'ce'
      },
      otherUser: {
        firstName: 'other-shi',
        lastName: 'other-ce'
      }
    }
  }
}
</script>
