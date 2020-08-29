import axios from 'axios';


export async function APITDD(){
    try {
        let BASE_URL = 'http://157.230.190.251/';
        let response =  await axios.get(`https://cors-anywhere.herokuapp.com/${BASE_URL}/api/v1/cmodels/secure/dashboard`);
        console.log(response.data);
        return response.data;
       } catch(error) {
            console.log("Error Encontrado....:  ", error); 
        }

}