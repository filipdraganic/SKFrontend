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




    async getKorisnik(email,password){
        try{
            let name = "ime"
            console.log("u get korisnik")

            const res = await axios.post(url+'login',{
                name,email,password
            })

            console.log("vraca iz get korisnik");
            ;
            return res.data;

        }catch (err) {
            console.log('error u getKorisnik za login')

        }

    }


    async patchKorisnik(email, imeServisa){ //Ovo patchuje da li je subscribovan na neki mikroservis ili ne

        try{
            const res = await axios.patch(url+'subscribe', {
                email, imeServisa
            });

            console.log("Vraca iz patch korisnik")
            return res.data;

        }catch (e) {
            console.log('error u patchKorisnik');
        }
    }

    async patchKorisnikSubscriptions(email, imeServisa, podesavanje){ // Ovo patchuje na koje je podesavanje mikroservisa subscribovan

        try{
            const res = await axios.patch(url+'subscribeSettings', {
                email, imeServisa, podesavanje
            });

            console.log("Vraca iz patch korisnikSubscriptions")
            return res.data;

        }catch (e) {
            console.log('error u patchKorisnikSubscriptions');
        }
    }


    async getSubscription(email){
        try{
            const res = await axios.get(url+'getSubscriptions?id='+email, {

            })
            return res.data;
        }catch (e) {
            console.log("Error u get Subscriptions")
        }
    }



    async postKorisnik(name, email, password){

        try{
            const res = await axios.post(url, {
                name,email,password
            })

            return res.data


        }catch(err){
            return err;
        }

    }


}

export default new korisckiServis();
