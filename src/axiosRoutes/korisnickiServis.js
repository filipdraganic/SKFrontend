import axios from 'axios';


const url = "http://localhost:8080/api/korisnik/";

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

    async getKorisnik(email,password){
        try{
            const res = await axios.get(url+'login',{
                email,password
            })


            return res.data;

        }catch (err) {
            console.log('error u getKorisnik')

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
