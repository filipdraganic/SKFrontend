<template>
    <div id="root" class="container">
        <form>
            <p class="h4 text-center mb-4">Sign in</p>
            <div class="grey-text">
                <mdb-input label="Your email" icon="envelope" type="email" v-model="username"/>
                <mdb-input label="Your password" icon="lock" type="password"/>
            </div>
            <div class="text-center">
                <mdb-btn v-on:click="idiDalje">Login</mdb-btn>
            </div>
        </form>
        <mdb-btn v-on:click="idiNaRegister">Register</mdb-btn>


    </div>
</template>

<script>
    import { mdbInput, mdbBtn } from 'mdbvue';
    export default {
        name: "Login",
        data(){
            return{
                username:""
            }
        },
        components:{
            mdbInput,
            mdbBtn
        },
        methods:{
            idiNaRegister(){
                console.log("Ushe?")
                this.$router.push({name:'register'})
            },
            idiDalje(){

                this.$store.commit('updatedComp', this.username)
                this.$router.push({name:'userpage'})
                console.log(this.$store.getters.trenutniuser)
            }

        }
    }
</script>

<style scoped>



</style>