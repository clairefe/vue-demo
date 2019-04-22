<template>
  <div>
    {{user.firstName}}, {{user.lastName}}
  </div>
</template>

<script>
export default {
  name: 'SlotScope',
  data () {
    return {
      user: {
        firstName: 'component',
        lastName: 'lily'
      }
    }
  }
}
</script>
