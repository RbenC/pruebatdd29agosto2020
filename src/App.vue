<template>
<div id="app">

    <BarraNavegacionActivo></BarraNavegacionActivo>
    <router-view />
    <Footer></Footer>

</div>
</template>

<script>
import {
    APITDD
} from "./configuracion/conexionAPI.js";
import BarraNavegacionActivo from './components/BarraNavegacionActivo.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',
    components: {
        BarraNavegacionActivo,
        Footer
    },

    mounted() {
        APITDD('users/me').then(response => {
            this.$store.dispatch('llamandousersme', response);
        }).catch(error => console.error(error));

        APITDD('courses').then(response => {
            this.$store.dispatch('llamandocourses', response);
        }).catch(error => console.error(error));

        APITDD('courses').then(response => {
            this.$store.dispatch('llamandofundamentos', response);
        }).catch(error => console.error(error));

        APITDD('courses/css-avanzado').then(response => {
            this.$store.dispatch('llamandocssavanzado', response);
        }).catch(error => console.error(error));

        APITDD('courses/javascript').then(response => {
            this.$store.dispatch('llamandojavascript', response);
        }).catch(error => console.error(error));

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
