<template>Login Page</template>


<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "Login",
  setup() {
    const router = useRouter();
    const store = useStore();
    const onFormSubmit = (result: boolean) => {
      console.log("result", result);
      if (result) {
        //   router.push({name: 'column', params: {id: 1}})
        router.push("/");
        store.commit("login");
      }
    };
    return {
      onFormSubmit,
    };
  },
});
</script>