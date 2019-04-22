<template>
  <div>
    <h1>编译作用域</h1>
    <slot-scope>
      {{user.firstName}},{{user.lastName}}
    </slot-scope>
    <h1>具名slot</h1>
    <slot-default>
      <template v-slot:header>
        <h2>
          具名slot demo header
        </h2>
      </template>
      <p>这个是demo的具体内容</p>
      <template v-slot:footer>
        <h2>
          具名slot demo footer
        </h2>
      </template>
    </slot-default>
  </div>
</template>

<script>
import SlotScope from '@/components/slots/SlotScope'
import SlotDefault from '@/components/slots/SlotDefault'

const SlotDemo = {
  name: 'SlotDemo',
  props: {

  },
  data () {
    return {
      user: {
        firstName: 'page',
        lastName: 'lily'
      }
    }
  },
  components: {
    SlotDefault,
    SlotScope
  },
  methods: {

  }
}
export default SlotDemo
</script>
