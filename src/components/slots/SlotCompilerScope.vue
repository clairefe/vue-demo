// TODO
/* 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。 */
<template>
  <div>
    <slot>{{user.name}}</slot>
  </div>
</template>

<script>
export default {
  name: 'SlotCompilerScope',
  data () {
    return {
      user: {
        name: 'component'
      }
    }
  }
}
</script>
