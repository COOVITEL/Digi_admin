import axios from 'axios'

const turnApi = axios.create({
    baseURL: 'http://192.168.1.16:8004/turns/api/v1/turns'
})
export const getAllTurns = () => turnApi.get('/')

