<template>
    <div id="root" class="container">

            <p class="h4 text-center mb-4">Sign in</p>
            <div class="grey-text">
                <mdb-input label="Your email" icon="envelope" type="email" v-model="email"/>
                <mdb-input label="Your password" icon="lock" type="password" v-model="password"/>
            </div>
            <div class="text-center">
                <mdb-btn v-on:click="idiDalje">Login</mdb-btn>
            </div>

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
                email:"petar@gmail.com",
                password:"petar"

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
                    let tokenpromenjiva = await korisnickiServis.authenticateKorisnik(this.email,this.password);

                    let token = tokenpromenjiva["token"];
                    //console.log("token je = " + token);
                    this.$store.commit('setToken', token);
                    console.log("token iz store je je =  " + this.$store.getters.token);

                    let drugapromenjiva;
                    drugapromenjiva = await korisnickiServis.loginKorisnik(this.email,this.password,token);

                    console.log("Druga promenjiva =  " + drugapromenjiva);
                    if(drugapromenjiva===1){
                        this.$store.commit('updatedComp', this.email)
                        console.log("Username = "+this.$store.getters.trenutniuser)

                        await this.$router.push({name: 'userpage'})

                    }else alert("Logovanje nije uspesno , netacan username ili password")
                    return drugapromenjiva;
                })();
                //  korisnickiServis.getKorisnik().then(result =>{
                //      console.log("result = " + result);
                //  })
                 console.log("fetching");


                console.log("promenjiva = " + promenjiva);


            }

        }
    }
</script>

<style scoped>



</style>