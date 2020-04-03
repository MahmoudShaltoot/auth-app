<template>
    <div class="container">
        <div class="col-md-6 offset-md-3">
            <div class="card mt-4">
                <div class="card-header">
                    <p class="mb-0">Register</p>
                </div>
                <div class="card-body">
                    <form @submit.prevent="register">
                        <div class="form-group">
                            <label for="">Name</label>
                            <input v-model="form.name" type="text" class="form-control" placeholder="Name">
                        </div>
                        <div class="form-group">
                            <label for="">Email</label>
                            <input v-model="form.email" type="text" class="form-control" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label for="">Password</label>
                            <input v-model="form.password" type="password" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <input type="submit" value="Register" class="btn btn-primary w-100">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash'

export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            },
        }
    },
    methods: {
        async register() {
            const response = await this.$axios.post('/users', this.form);

            const token = response.headers['x-auth-token']
            
            this.$axios.defaults.headers.common['x-auth-token'] = token;
            
            localStorage.setItem('x-auth-token', token)

            this.$auth.login({data: {email: this.form.email, password: this.form.password}})

            this.$router.push({name: 'index'})
        }
    }
}
</script>