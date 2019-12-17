<template>
    <div class="container" id="root">
        <form>
            <p class="h4 text-center mb-4">Sign up</p>
            <div class="grey-text">
                <mdb-input label="Your name" icon="user" type="text"/>
                <mdb-input label="Your email" icon="envelope" type="email"/>
                <mdb-input label="Confirm your email" icon="exclamation-triangle" type="text"/>
                <mdb-input label="Your password" icon="lock" type="password"/>
            </div>
            <div class="text-center">
                <mdb-btn color="primary">Register</mdb-btn>
            </div>
        </form>
        <mdb-btn v-on:click="idiDalje">Login</mdb-btn>

    </div>
</template>

<script>
    import { mdbInput, mdbBtn } from 'mdbvue';
    export default {
        name: "Register",
        methods:{
            idiDalje(){
                this.$router.push({name:"login"})
            }
        },
        components: {
            mdbInput,
            mdbBtn
        }
    }
</script>

<style scoped>

</style>