<template>Login Page</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import createMessage from '../components/createMessage'

export default defineComponent({
  name: "Login",
  setup() {
    const email =  ref('')
    const password =  ref('')
    const router = useRouter();
    const store = useStore();
    const onFormSubmit = (result: boolean) => {
      console.log("result", result);
      if (result) {
        //   router.push({name: 'column', params: {id: 1}})
        // router.push("/");
        // store.commit("login");
        const payload = {
          email: email.value,
          password: password.value
        }
        store.dispatch('loginAndFetch', payload).then(data => {
          createMessage('登录成功 2秒后跳转首页', 'success')
          setTimeout(() => {
            router.push("/");
          }, 2000)
        })
      }
    }
    return {
      onFormSubmit,
      email,
      password
    };
  },
});
</script>