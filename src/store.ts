import { createStore } from 'vuex'
import { testData, testPosts, PostProps } from './mock/testData'
import axios from 'axios'


interface UserProps {
    isLogin: boolean;
    name?: string;
    id?: number;
}

interface ImageProps {
    _id?: string;
    url?: string;
    createdAt?: string;
}
 
export interface ColumnProps {
    _id: number;
    title: string;
    avatar: ImageProps;
    description: string;
}

export interface GlobalDataProps {
    columns: ColumnProps[];
    posts: PostProps[];
    user: UserProps;
}

const store = createStore<GlobalDataProps>({
    state: {
        columns: testData,
        posts: testPosts,
        user: {
            isLogin: false
        }
    },
    mutations: {
        login(state) {
            state.user = {...state.user, isLogin: true, name: 'terry'}
        },
        createPost(state, newPost) {
            state.posts.push(newPost)
        },
        fetchColumns(state, rawData) {
            state.columns = rawData.data.list
        }
    },
    actions: {
        fetchColumns(context) {
            axios.get('/columns').then(resp => {
                context.commit('fetchColumns', resp.data)
            })
        }
    }
})

export default store


