import axios from 'axios';


export async function APITDD(parametro1){
    try {
        let url = `https://cors-anywhere.herokuapp.com/https://pruebafrontend.desafiolatam.com/api/v1`;
        let response =  await axios.get(`${url}/${parametro1}`);
        //console.log(response.data);
        return response.data;
       } catch(error) {
            console.log("Error found:  ", error); 
        }

}