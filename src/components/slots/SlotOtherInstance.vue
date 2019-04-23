<template>
  <ul>
    <li v-for="todo in todos"
      v-bind:key="todo.id"
    >
      <slot name="todo" :todo="todo">
        <!-- 后备内容 -->
        {{ todo.text }}
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SlotOtherInstance',
  props: [ 'todos' ],
  data () {
    return {
    }
  }
}
</script>
