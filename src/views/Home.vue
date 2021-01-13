<template>
    Home Page
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue'
import {useStore} from 'vuex'
import {GlobalDataProps} from '../store'

export default defineComponent({
    name: "Home",
    setup() {
        const store = useStore<GlobalDataProps>()
        const list = computed(() => store.state.columns)
        onMounted(() => {
            store.dispatch('fetchColumns')
        })
        return {
            list
        }
        
    }
})
</script>