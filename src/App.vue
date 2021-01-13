<template>
  <div class="container">
    <global-header :user="currentUser" />
    <column-list :list="columnList" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "./components/ColumnList.vue";
import GlobalHeader from "./components/GlobalHeader.vue";
import {useStore} from 'vuex'

const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
  {
    id: 3,
    title: "test3的专栏",
    description: "这是的test3专栏，有一段非常有意思的简介，可以更新一下欧",
  },
  {
    id: 4,
    title: "test4的专栏",
    description: "这是的test4专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100",
  },
];

export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GlobalHeader,
  },
  setup() {
    const store = useStore()
    const currentUser = computed(() => store.state.user)
    return {
      columnList: testData,
      currentUser
    };
  },
});
</script>


