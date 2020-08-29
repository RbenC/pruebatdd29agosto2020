<template>
<div class="container mt-5">

    <div class="row row-cols-6" v-for="(item, index ) in traerDataKpis" :key="index">
        <!--<p class="text-capitalize">{{item[0].nombre}}</p>
        <p class="text-capitalize">{{item[1].nombre}}</p>-->
        <div class="col">

            <p class="text-danger"><a href="">Ver detalles</a> </p>
        </div>

        <div class="col">
            <p class="tamano"><strong> {{item[0].entregadas | formato}}</strong></p>
            <p>Órdentes <br /> Entregadas</p>
        </div>
        <div class="col">
            <p class="tamano"><strong> {{item[0].pendientes | formato}}</strong></p>
            <p>Órdentes <br /> Pendientes</p>
        </div>

        <div class="col">
            <p class="text-danger"><a href="">Ver detalles</a> </p>
        </div>
        <div class="col">
            <p class="tamano"><strong> {{item[1].totales | formato}}</strong></p>
            <p>Órdentes <br /> Totales</p>
        </div>
        <div class="col">
            <p class="tamano"><strong> {{item[1].atrasadas | formato}}</strong></p>
            <p>Órdentes <br /> Atrasadas</p>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'IndicadoresdeCumplimiento',

    computed: {
        traerDataKpis() {
            return this.$store.getters.enviarDataKpis;
        }
    }
}
</script>

<style>
.tamano {
    font-size: 40px;
    font-weight: bold;
}
</style>
