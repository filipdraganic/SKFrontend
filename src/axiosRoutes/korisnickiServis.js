import axios from 'axios';


const url = "http://localhost:9000/korisnici/";

class korisckiServis {

    constructor() {




    }


    async getKorisnici() {

        try {
            const res = await axios.get(url);

            return res.data
        } catch (err) {


            return err;
        }
    }

    async getKorisnik(email){
        try{
            const res = await axios.get(url,{
                email
            })


            return res.data;

        }catch (err) {
            console.log('error u getKorisnik')

        }

    }

    async authenticateKorisnik(username,password){

        try{

            const res = await  axios.post(url+'authenticate',{
                username,password
            })
            console.log(res);
            console.log("Vraca iz authenticate korisnik")
            return res.data
        }catch (e) {
            console.log("Neuspesno dohvatanje tokena")
            alert("Neuspesno  dohvatanje tokena")

        }
    }



    async loginKorisnik(email,password, token){
        try{
            let name = "ime"
            const ceotoken = "Bearer " + token

            console.log("u login korisnik, token je = " + ceotoken)
            // const res = await axios.post(url+'login', {
            //     withCredentials: true,
            //     crossorigin: true,
            //     headers:{
            //         'Content-Type': 'multipart/form-data',
            //         "Access-Control-Allow-Origin": "*",
            //         "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwZXRhckBnbWFpbC5jb20iLCJleHAiOjE1Nzc1MTcwOTcsImlhdCI6MTU3NzQ5OTA5N30.W6bv3z3HpMGM76VDu_5yn-NQSa2WJYW8nkMgE26J2Uqv6sC0NKMQCQPrO1RCj7yLGbEzWiPgaSHoC8kOpyO9eA"
            //     }
            // },{
            //     name,email,password
            // })
            //
            const res = await axios({
                method:'post',
                url:url+"login",
                headers: {'Authorization': ceotoken},
                data:{name,email,password}
                });


            console.log("vraca iz login korisnik");

            return res.data;

        }catch (err) {
            console.log('error u getKorisnik za login')

        }

    }


    async patchKorisnik(email, imeServisa, token){

        try{
            const ceotoken = "Bearer " + token

            let username = email;
            const res = await axios({
                method:'patch',
                url:url+"subscribe",
                headers: {'Authorization': ceotoken},
                data:{email, username, imeServisa}

            });

            // const res = await axios({
            //     method:'patch',
            //     url:url+"getSubscriptions",
            //     headers: {'Authorization': ceotoken},
            //     params:{id:email},
            //     data:{email,username}
            // });

            console.log("Vraca iz patch korisnik")
            return res.data;

        }catch (e) {
            console.log('error u patchKorisnik');
        }
    }

    async patchKorisnikSubscriptions(email, imeServisa, podesavanje, token){
        try{
            const ceotoken = "Bearer " + token


            const res = await axios({
                method:'patch',
                url:url+"subscribeSettings",
                headers: {'Authorization': ceotoken},
                data:{email, imeServisa, podesavanje}
            });


            console.log("Vraca iz patch korisnik")
            return res.data;

        }catch (e) {
            console.log('error u patchKorisnik');
        }


    }


    async getSubscription(email, token){
        try{
            const ceotoken = "Bearer " + token

            let username = email;
            const res = await axios({
                method:'get',
                url:url+"getSubscriptions",
                headers: {'Authorization': ceotoken},
                params:{id:email},
                data:{email,username}
            });


            return res.data;
        }catch (e) {
            console.log("Error u get Subscriptions")
        }
    }



    async postKorisnik(name, email, password){

        try{
            const res = await axios.post(url+"/register", {
                name,email,password
            })

            return res.data


        }catch(err){
            return err;
        }

    }


}

export default new korisckiServis();
