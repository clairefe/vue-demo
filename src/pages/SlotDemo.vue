<template>
  <div>
    <h2 class="title">编译作用域</h2>
    <slot-compiler-scope>
      {{user.name}}
    </slot-compiler-scope>
    <h2 class="title">具名slot</h2>
    <slot-default>
      <template v-slot:header>
        <h3>
          具名slot demo header
        </h3>
      </template>
      <p>这个是demo的具体内容</p>
      <template v-slot:footer>
        <small>
          具名slot demo footer
        </small>
      </template>
    </slot-default>
    <h2 class="title">slot作用域</h2>
    <slot-scope>
      <template v-slot="{ user }">
        {{ user.firstName }}
      </template>
      <template v-slot:other="slotProps">
        {{ slotProps.user.firstName }}
      </template>
    </slot-scope>
    <h2 class="title">其他示例</h2>
    <slot-other-instance :todos="todos">
      <template #todo="{todo}">
        {{todo.id}},{{todo.text}}
      </template>
    </slot-other-instance>
  </div>
</template>

<script>
import SlotCompilerScope from '@/components/slots/SlotCompilerScope'
import SlotDefault from '@/components/slots/SlotDefault'
import SlotScope from '@/components/slots/SlotScope'
import SlotOtherInstance from '@/components/slots/SlotOtherInstance'

const SlotDemo = {
  name: 'SlotDemo',
  props: {

  },
  data () {
    return {
      user: {
        name: 'page'
      },
      todos: [
        {
          id: 0,
          text: '0'
        },
        {
          id: 1,
          text: '1'
        },
        {
          id: 2,
          text: '2'
        },
        {
          id: 3,
          text: '3'
        }
      ]
    }
  },
  components: {
    SlotDefault,
    SlotCompilerScope,
    SlotScope,
    SlotOtherInstance
  },
  methods: {

  }
}
export default SlotDemo
</script>

<style>
  .title{
    text-align: left;
  }
</style>
