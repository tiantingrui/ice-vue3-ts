import store from '@/store'
import axios from 'axios'


axios.defaults.baseURL = ""

axios.interceptors.request.use(config => {
    store.commit('setLoading', true)
    // 记得每次发请求，重置error , 防止 message 组件失效
    store.commit('setError', {status: false, message: ''})
    return config
})


axios.interceptors.response.use(config => {
    setTimeout(() => {
        store.commit('setLoading', false)
    }, 1000)
    return config
}, e => {
    console.log(e.response)
    const {error} = e.response.data
    store.commit('setError', {status: true, message: error})
    store.commit('setLoading', false)
    return Promise.reject(error)
})