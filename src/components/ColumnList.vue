<template>
    <div class="row">
        <div class="col-4 mb-4" v-for="column in columnsList" :key="column.id">
            <div class="card h-100 shadow-sm" style="width: 18rem;">
                <div class="card-body text-center">
                    <img :src="column.avatar" alt="column.title" class="rounded-circle border border-light w-25 my-3">
                    <h5 class="card-title">{{ column.title }}</h5>
                    <p class="card-text text-left">{{ column.description }}</p>
                    <!-- <router-link :to="{name: 'column', params: {id:column.id}}" class="btn btn-outline-primary"> 进入专栏 </router-link> -->
                    <router-link :to="`/column/${column.id}`" class="btn btn-outline-primary"> 进入专栏 </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";

export interface ColumnProps {
    id: number;
    title: string;
    avatar?: string;
    description: string;
}

export default defineComponent({
    name: 'ColumnList',
    props: {
        list: {
            type: Array as PropType<ColumnProps[]>,
            required: true
        }
    },
    setup(props) {
        const columnsList = computed(() => {
            return props.list.map(item => {
                if (!item.avatar) {
                    item.avatar = require('@/assets/logo.png')
                }
                return item
            })
        })
        return {
            columnsList
        }
    }
})

</script>