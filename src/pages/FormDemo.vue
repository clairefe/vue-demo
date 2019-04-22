<template>
  <div style="display:flex; justify-content: center;">
    <div>
      <h2>registry form</h2>
      <br>
      <label for="">user name</label>
      <input v-model="userName" placeholder="please input user name">
      <br>
      <label for="">password</label>
      <input type="password" v-model="password" placeholder="please input your password">
      <br>
      <label for="">repassword</label>
      <input type="password" v-model="rePassword" placeholder="please reinput your password">
      <br>
      <label for="">sex</label>
      <input type="radio" id="male" value="male" v-model="sex">
      <label for="male">male</label>
      <input type="radio" id="female" value="female" v-model="sex">
      <label for="female">male</label>
      <br>
      <label for="">hobbies</label>
      <input type="checkbox" name="" id="basketball" value="basketball" v-model="hobbies">
      <label for="basketball">basketball</label>
      <input type="checkbox" name="" id="badmington" value="badmington" v-model="hobbies">
      <label for="badmington">badmington</label>
      <input type="checkbox" name="" id="pingpong" value="pingpong" v-model="hobbies">
      <label for="pingpong">pingpong</label>
      <br>
      <label for="">job</label>
      <select name=" " id="" v-model="job">
        <option disabled>please select</option>
        <option value="lawyer">lawyer</option>
        <option value="teacher">teacher</option>
        <option value="programmer">programmer</option>
      </select>
      <button @click="submit">submit</button>
      <p>
        {{user.name}}, {{user.tel}}
      </p>
      <v-model-identify v-model="checkboxValue"></v-model-identify>
      <p>{{checkboxValue}}</p>
      <base-input v-on:focus="onFocus" :label="label" v-model="value"></base-input>
       <p>{{value}}</p>
      <page-layout-slot-demo>
        <template v-slot:head>
          <h1>slot demo</h1>
        </template>
        <div>
          main
        </div>
        <template v-slot:foot>
          <p>this is the slot foot</p>
        </template>
      </page-layout-slot-demo>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// Vue.component('')
const User = {
  name: 'FormDemo',
  props: {
    id: {
      required: true,
      type: String
    },
    user: {
      type: Object,
      default: function () {
        return {
          name: 'test',
          tel: '13061785046'
        }
      }
    }
  },
  data () {
    return {
      userName: '',
      password: '',
      rePassword: '',
      sex: '',
      hobbies: [],
      job: '',
      checkboxValue: true,
      label: '原生事件demo',
      value: 'demo'
    }
  },
  methods: {
    submit () {
      console.log(this)
    },
    onFocus () {
    }
  }
}
export default User
</script>
