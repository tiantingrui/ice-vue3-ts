<template>
  <pre>{{ route }}</pre>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { testData, testPosts } from "../mock/testData";

export default defineComponent({
  name: "ColumnDetail",
  setup() {
    const route = useRoute();
    // 注意params 的 id 是 string ; 用 一个 `+` 转换为字符串
    const currentId = +route.params.id;
    const column = testData.find(c => c.id === currentId)
    const list = testPosts.filter(post => post.columnId === currentId)

    return {
      route,
      column,
      list
    };
  },
});
</script>