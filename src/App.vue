<template>
<div id="app">

    <BarraNavegacionActivo></BarraNavegacionActivo>
    <router-view />
    <!--<Footer></Footer>-->

</div>
</template>

<script>
import {
    APITDD
} from "./configuracion/conexionAPI.js";
import BarraNavegacionActivo from './components/BarraNavegacionActivo.vue';
//import Footer from './components/Footer.vue';

export default {    
    name: 'App',

    data(){
        return{
            estados: [{
                    "id": 1,
                    "name": "Ingresado"
                },
                {
                    "id": 2,
                    "name": "Preparacion"
                },
                {
                    "id": 3,
                    "name": "Entregado"
                },
                {
                    "id": 4,
                    "name": "Anulado"
                },
                {
                    "id": 5,
                    "name": "Devuelto"
                }
            ],
            oficinas: [{
                    "id": 10,
                    "name": "New York"
                },
                {
                    "id": 11,
                    "name": "Boston"
                },
                {
                    "id": 12,
                    "name": "San Francisco"
                },
                {
                    "id": 13,
                    "name": "Paris"
                },
                {
                    "id": 14,
                    "name": "Tokyo"
                },
                {
                    "id": 15,
                    "name": "Sydney"
                },
                {
                    "id": 16,
                    "name": "London"
                }
            ],
            ordenes: [{
                    "num_orden": 123445,
                    "cliente": "Multitiendas Sigma SA",
                    "monto": 1540000,
                    "cant_productos": 160,
                    "fecha_entrega": "2020-07-20T00:00:00.000Z",
                    "avance_preparacion": 0,
                    "estado": "Ingresado"
                },
                {
                    "num_orden": 123444,
                    "cliente": "Jugueteria Asimov SpA",
                    "monto": 980000,
                    "cant_productos": 45,
                    "fecha_entrega": "2020-07-20T00:00:00.000Z",
                    "avance_preparacion": 0.4,
                    "estado": "Preparacion"
                },
                {
                    "num_orden": 123443,
                    "cliente": "Bazar Don Lalo LDTA",
                    "monto": 2400000,
                    "cant_productos": 120,
                    "fecha_entrega": "2020-07-18T00:00:00.000Z",
                    "avance_preparacion": 0.6,
                    "estado": "Preparacion"
                },
                {
                    "num_orden": 123441,
                    "cliente": "Claudia Ingrid Romero",
                    "monto": 1740000,
                    "cant_productos": 70,
                    "fecha_entrega": "2020-07-14T00:00:00.000Z",
                    "avance_preparacion": 1,
                    "estado": "Entregado"
                }
            ],
            detalle_orden:[{
            orden: {
                "num_orden": 123456,
                "monto": 1540000,
                "cant_productos": 160,
                "fecha_entrega": "2020-07-20T00:00:00.000Z",
                "vendedor": "Luis Fuentes",
                "avance_preparacion": 0.6,
                "estado": "Preparacion"
            },
            cliente: {
                "nombre": "Sociedad Comercial AYSA SA",
                "rut_n": 82340250,
                "rut_dv": "2",
                "direccion_entrega": "Meiggs 123 Loc 1",
                "contacto": "Manuel Morales",
                "fono": "+56 22 234 4434",
                "email": "mmorales@aysa.cl"
            },
            productos: [
                {
                "cod_prod": "123",
                "descripcion": "1969 Harley Davidson Ultimate Chopper",
                "precio_unit": 1540,
                "cant_pedido": 160,
                "cant_pickeado": 0
                },
                {
                "cod_prod": "234",
                "descripcion": "1968 Ford Mustang",
                "precio_unit": 980,
                "cant_pedido": 45,
                "cant_pickeado": 10
                },
                {
                "cod_prod": "126",
                "descripcion": "1917 Grand Touring Sedan",
                "precio_unit": 2400,
                "cant_pedido": 120,
                "cant_pickeado": 80
                },
                {
                "cod_prod": "241",
                "descripcion": "1957 Corvette Convertible",
                "precio_unit": 1740,
                "cant_pedido": 70,
                "cant_pickeado": 70
                }
            ]
            }
        ]
            
        }
    },
    components: {
        BarraNavegacionActivo,
        //Footer
    },

    mounted() {
        APITDD().then(response => {
            this.$store.dispatch('llamandoInformacionApi', response);
            //console.log(response);
        }).catch(error => console.error(error));

        this.$store.state.Arreglooficinas = this.oficinas;
        this.$store.state.Arregloestados = this.estados;
        this.$store.state.Arregloordenes = this.ordenes;
        this.$store.state.ArregloDetalleorden = this.detalle_orden;
        


    }

}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

// Tabla hover
tbody {
    tr {
        &:hover {
            td {
                background-color: #6cb1f7;
            }
        }
    }
}

//Fonts
@import url('https://fonts.googleapis.com/css2?family=Rufina:wght@700&family=Solway:wght@800&display=swap');

.rufina {
    font-family: 'Rufina', serif;
}

.solway {
    font-family: 'Solway', serif;
}

//color de variable bootstrap
$primary: #6cb1f7;
@import '../node_modules/bootstrap/scss/bootstrap.scss'
</style>
