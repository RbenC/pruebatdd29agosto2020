<template>
<div class="my-5 py-1 text-left">
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
        <!--        <b-navbar-brand :to="{name:'Home'}" class="Oleo" exact>
            <img class="logo" :src="imagenlogo" alt="logo" width="10%">
        </b-navbar-brand>-->

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" class="Solway" is-nav>
            <!-- Right aligned nav items -->

            <b-navbar-nav class="mr-auto Solway">
                <b-nav-item :to="{name:'Opiniones'}" exact>Company</b-nav-item>
                <b-nav-item :to="{name:'Home'}">Home</b-nav-item>
                <b-nav-item :to="{name:'Ordenes'}">Ordenes</b-nav-item>
                <b-nav-item :to="{name:'MisCursos'}">Inventario</b-nav-item>
                <b-nav-item :to="{name:'Administracion'}">Administracion</b-nav-item>
            </b-navbar-nav>
            <!--<b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" type="search" placeholder="Buscar" v-model="busqueda"></b-form-input>
            </b-nav-form>-->

            <b-navbar-nav class="ml-auto Solway">
                <b-nav-item>Profile</b-nav-item>
                <b-nav-item>Log Out</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
import imagenlogo from '../assets/logo.png'

export default {
    name: 'BarraNavegacionActivo',
    data() {
        return {
            busqueda: '',
            imagenlogo: imagenlogo,
        }
    },
    watch: {
        busqueda() {
            this.$store.state.busqueda = this.busqueda;
        }
    }
}
</script>

<style lang="scss" scoped>
.logo {
    border-radius: 50%;
}
</style>
