<template>
    <div class="container" id="root">

            <p class="h4 text-center mb-4">Sign up</p>
            <div class="grey-text">
                <mdb-input label="Your name" icon="user" type="text" v-model="name"/>
                <mdb-input label="Your email" icon="envelope" type="email" v-model="email"/>
                <mdb-input label="Your password" icon="lock" type="password" v-model="password"/>
            </div>
            <div class="text-center">
                <mdb-btn color="primary" v-on:click="register">Register</mdb-btn>
            </div>
        <mdb-btn v-on:click="idiDalje">Login</mdb-btn>

    </div>
</template>

<script>
    import { mdbInput, mdbBtn } from 'mdbvue';
    import korisnickiServis from "../axiosRoutes/korisnickiServis";
    export default {
        name: "Register",
        data(){
            return{
                name:'',
                email:'',
                password:'',
            }
        },
        methods:{
            register: function(){
                console.log("AAAAAAAA")
                    var promenjiva = (async () => {
                        var drugapromenjiva;
                        drugapromenjiva = await korisnickiServis.postKorisnik(this.name,this.email,this.password);
                        console.log(drugapromenjiva)
                        if(drugapromenjiva === -1) {
                            alert("Korisnik vec postoji ")
                            return 0;
                        }

                        if(drugapromenjiva === 0){
                            alert("Neka polja su prazna")
                            return 0;
                        }

                        this.$router.push({name:"login"})

                        return drugapromenjiva;
                    })();




            },

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