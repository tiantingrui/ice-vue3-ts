import { Commit, createStore } from 'vuex'
import { testData, testPosts } from './mock/testData'
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

export interface PostProps {
    _id: string;
    title: string;
    excerpt?: string;
    content?: string;
    image?: string;
    createdAt: string;
    columnId: number;
}

export interface GlobalDataProps {
    columns: ColumnProps[];
    posts: PostProps[];
    user: UserProps;
}

const getAndCommit = async (url: string, mutationName: string, commit: Commit) => {
    const {data} = await axios.get(url)
    commit(mutationName, data)
}

const store = createStore<GlobalDataProps>({
    state: {
        columns: [],
        posts: testPosts,
        user: {
            isLogin: false
        }
    },
    mutations: {
        login(state) {
            state.user = { ...state.user, isLogin: true, name: 'terry' }
        },
        createPost(state, newPost) {
            state.posts.push(newPost)
        },
        fetchColumns(state, rawData) {
            state.columns = rawData.data.list
        },
        fetchColumn(state, rawData) {
            state.columns = [rawData.data]
        },
        fetchPosts(state, rawData) {
            state.columns = rawData.data.list
        },
    },
    actions: {
        async fetchColumns(context) {
            const {data} = await axios.get('/columns')
            context.commit('fetchColumns', data)
        },
        fetchColumn({ commit }, cid) {
            getAndCommit(`/columns/${cid}`, 'fetchColumn', commit)
        },
        fetchPosts({ commit }, cid) {
            axios.get(`/columns/${cid}/posts`).then(resp => {
                commit('fetchPosts', resp.data)
            })
        }
    },
    getters: {
        getColumnById: (state) => (id: string) => {
            return state.columns.find(c => c._id === id)
        },
        getPostsByCid: (state) => (cid: string) => {
            return state.posts.filter(post => post.columnId === cid)
        }
    }
})

export default store


