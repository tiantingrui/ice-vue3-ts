<template>
    Home Page
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import {useStore} from 'vuex'
import {GlobalDataProps} from '../store'

export default defineComponent({
    name: "Home",
    setup() {
        const store = useStore<GlobalDataProps>()
        const list = computed(() => store.state.columns)
        return {
            list
        }
        
    }
})
</script>