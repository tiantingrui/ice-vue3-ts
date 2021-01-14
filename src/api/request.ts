import store from '@/store'
import axios from 'axios'


axios.defaults.baseURL = ""


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