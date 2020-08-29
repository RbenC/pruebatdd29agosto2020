<template>
<div class="container">
    <b-breadcrumb>
        <b-breadcrumb-item href="#home">
            <b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
            Home
        </b-breadcrumb-item>
    </b-breadcrumb>
    <div>
        <!--Jumbotrom-->
        <b-jumbotron header="Vitrina" lead="">
        </b-jumbotron>

        <h2 class="text-left">Bienvenido</h2>
        <h6 class="text-left">Bienvenido al sistema de òrdenes e inventario de ClassicModels</h6>
    </div>
    <!--Jumbotrom-->

    <IndicadoresdeCumplimiento></IndicadoresdeCumplimiento>
    <PantallaOrdenes></PantallaOrdenes>

</div>
</template>

<script>
import IndicadoresdeCumplimiento from '../components/IndicadoresdeCumplimiento.vue';
import PantallaOrdenes from '../components/PantallaOrdenes.vue';

export default {
    name: 'Home',
    components: {
        IndicadoresdeCumplimiento,
        PantallaOrdenes
    }
}
</script>
