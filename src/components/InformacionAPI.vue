<template>
<div class="container text-center">
    <h2>Opciones para llamar informacion de la APITDD</h2>

    <div>
        <b-button variant="primary" class="mx-2" @click.prevent="usersme">Users Me</b-button>
        <b-button variant="primary" class="mx-2" @click.prevent="cursos">Cursos</b-button>
        <b-button variant="primary" class="mx-2" @click.prevent="fundamentos">Fundamentos</b-button>
    </div>
    <div v-show="traerDataUsersMe">
        <ul>
            <li v-for="(item, index) in traerDataUsersMe" :key="index">
                {{item.attributes }}
            </li>
        </ul>
    </div>
    <div v-show="traerDataCursos">
        <ul>
            <li v-for="(item, index) in traerDataCursos" :key="index">
                {{item.name }}
            </li>
        </ul>
    </div>
    <div v-show="traerDataFundamentos">
        <ul>
            <li v-for="(item, index) in traerDataFundamentos" :key="index">
                <table>
                    <tr>
                        <td v-html="item.description"></td>
                    </tr>

                </table>

            </li>
        </ul>
    </div>

</div>
</template>

<script>
import {
    APITDD
} from "../configuracion/conexionAPI.js";

export default {
    name: 'InformacionAPI',
    data() {
        return {

        }
    },
    computed: {
        traerDataUsersMe() {
            return this.$store.getters.enviarDataUsersMe.included;
        },
        traerDataCursos() {
            return this.$store.getters.enviarDataCursos;
        },
        traerDataFundamentos() {
            return this.$store.getters.enviarDataFundamentos.data;
        }

    },

    methods: {
        usersme() {
            APITDD('users/me').then(response => {
                //console.log(response.data);
                this.$store.dispatch('llamandousersme', response);
            }).catch(error => console.error(error));
        },
        cursos() {
            APITDD('courses').then(response => {
                //console.log(response.data);
                this.$store.dispatch('llamandocursos', response);
            }).catch(error => console.error(error));
        },
        fundamentos() {
            APITDD('courses/fundamentos-de-desarrollo-web').then(response => {
                console.log(response.data);
                this.$store.dispatch('llamandofundamentos', response);
            }).catch(error => console.error(error));
        }
    }
}
</script>

<style>

</style>
