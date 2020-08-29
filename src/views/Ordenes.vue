<template>
<div class="container">
    <h2>Monitor de Órdenes</h2>
    <div class="container">
        <div class="row">
            <div class="col">Oficinas</div>
            <div class="col">Estado</div>
            <div class="col">Fecha Entrega</div>
            <div class="col"></div>
            <div class="col"></div>

            <div class="w-100"></div>
            <div class="col">
                <b-form-select v-model="oficinaseleccionada" :options="traerDataOficinas" class="mb-3" value-field="id" text-field="name" disabled-field="notEnabled"></b-form-select>
            </div>
            <div class="col">
                <b-form-select v-model="estadoseleccionado" :options="traerDataEstados" class="mb-3" value-field="id" text-field="name" disabled-field="notEnabled"></b-form-select>
            </div>
            <div class="col"><input type="date" v-model="fechadesde"></div>
            <div class="col"><input type="date" v-model="fechahasta"></div>
            <div class="col"><button class="btn btn-primary">Buscar</button></div>
        </div>

        <table class="table table-sm table-hover">
            <thead>
                <tr>
                    <th>N° Orden</th>
                    <th>cliente</th>
                    <th>Monto Orden</th>
                    <th>Cant.Productos</th>
                    <th>Fecha Entrega</th>
                    <th>Avance Preparación</th>
                    <th>Estado</th>
                    <th></th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in traerDataOrdenes" :key="index">
                    <td class="text-left">{{item.num_orden}}</td>
                    <td class="text-left">{{item.cliente}}</td>
                    <td class="text-right">{{item.monto |formato}}</td>
                    <td class="text-right">{{item.cant_productos | formato}}</td>
                    <td class="text-left">{{item.fecha_entrega}}</td>
                    <td>    
                        <b-progress :value="item.avance_preparacion*100" :max="100" show-progress animated></b-progress>
                    </td>
                    <td class="text-left">{{item.estado}}</td>
                    <td><b-button variant="info" size='sm' @click.prevent="VerDetalleOrden(index)" >Ver detalles</b-button></td>
                </tr>
            </tbody>
        </table>

    </div>

</div>
</template>

<script>
export default {
    name: 'MonitordeOrdenes',

    data() {
        return {
            estadoseleccionado: '',
            oficinaseleccionada: '',
            fechadesde: '',
            fechahasta: '',
        }
    },
    computed:{
        traerDataOficinas(){
            return this.$store.getters.enviarDataOficinas;
        },
        traerDataEstados(){
            return this.$store.getters.enviarDataEstados;
        },
        traerDataOrdenes(){
            return this.$store.getters.enviarDataOrdenes;
        }

    },
    methods:{
        VerDetalleOrden(index) {            
            this.$router.push(`detalleorden/${index}`)
        }
    }
}
</script>

<style>

</style>
