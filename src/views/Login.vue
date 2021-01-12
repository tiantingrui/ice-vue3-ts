<template>Login Page</template>


<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Login",
  setup() {
      const router = useRouter()
      const onFormSubmit = (result: boolean) => {
          console.log('result', result)
          if (result) {
              router.push({name: 'column', params: {id: 1}})
          }
      }
      return {
          onFormSubmit
      }
  }
});
</script>