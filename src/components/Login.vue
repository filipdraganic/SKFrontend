<template>
    <div id="root" class="container">
        <form>
            <p class="h4 text-center mb-4">Sign in</p>
            <div class="grey-text">
                <mdb-input label="Your email" icon="envelope" type="email" v-model="email"/>
                <mdb-input label="Your password" icon="lock" type="password" v-model="password"/>
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
    import korisnickiServis from "../axiosRoutes/korisnickiServis";
    export default {
        name: "Login",
        data(){
            return{
                email:"",
                password:""

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
             idiDalje: function(){

                var promenjiva = (async () => {
                    var drugapromenjiva;
                    drugapromenjiva = await korisnickiServis.getKorisnici();

                    console.log(drugapromenjiva);
                    return drugapromenjiva;
                })();
                //  korisnickiServis.getKorisnik().then(result =>{
                //      console.log("result = " + result);
                //  })
                 console.log("fetching");


                console.log("promenjiva = " + promenjiva);

                this.$store.commit('updatedComp', this.username)
                this.$router.push({name: 'userpage'})
                console.log(this.$store.getters.trenutniuser)
            }

        }
    }
</script>

<style scoped>



</style>