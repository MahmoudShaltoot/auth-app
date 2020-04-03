import axios from '@nuxtjs/axios';

export default async function getUser() {
    const token = localStorage.getItem("x-auth-token");
    if(!token) return '';

    this.$axios.defaults.headers.common['x-auth-token'] = token;
            
    return await axios.get('/me');
} 