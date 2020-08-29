<template>
  <div class="Detalle de la Orden">  
    <h2>Detalle de la Orden</h2>
    
    {{this.$route.params.id}}


        

    <div >        
        <b-tabs pills content-class="mt-3" >
            <b-tab title="General" active><p>
            <div>
                   <table class="text-left">
                        <tr>
                            <td>Número Orden</td>
                            <td v-text="num_orden"></td>
                        </tr>
                        <tr>
                            <td>Monto Orden</td>
                            <td>{{monto | formato}} </td>
                        </tr>
                        <tr>
                            <td>Cantidad Productos</td>
                            <td>{{cant_productos | formato}}</td>
                        </tr>
                        <tr>
                            <td>Fecha Entrega</td>
                            <td v-text="fecha_entrega"></td>
                        </tr>
                        <tr>
                            <td>Vendedor</td>
                            <td v-text="vendedor"></td>
                        </tr>
                        <tr>
                            <td>Estado</td>
                            <td v-text="estado"></td>
                        </tr>
                        <tr>
                            <td>Avance Preparación</td>
                            <td>
                                <b-progress :value="avance_preparacion*100" :max="100" show-progress animated></b-progress>
                            </td>
                            
                        </tr>

                   </table> 
                    
            </div>
            
            
            </b-tab>

            <b-tab title="Datos Cliente">
                    <table class="text-left">
                        <tr>
                            <td>Nombre : </td>
                            <td v-text="cliente"></td>
                        </tr>
                        <tr>
                            <td>Rut : </td>
                            <td v-text="rut"></td>
                        </tr>
                        <tr>
                            <td>Dirección Entrega : </td>
                            <td v-text="direccion"></td>
                        </tr>
                        <tr>
                            <td>Contacto : </td>
                            <td v-text="contacto"></td>
                        </tr>
                        <tr>
                            <td>Fono : </td>
                            <td v-text="fono"></td>
                        </tr>
                        <tr>
                            <td>Email : </td>
                            <td v-text="email"></td>
                        </tr>



                   </table>             
            </b-tab>

            <b-tab title="Productos">
                <ul>
                <li v-for="(producto, index) in productos" :key="index"> 
                {{producto}}

                </li>
                </ul>
            
            </b-tab>
        </b-tabs>
    </div>
    </div>
  
</template>

<script>
export default {
    name:'DetalleOrden',
    data(){
        return{            
            cliente: this.$store.getters.enviarDataDetalleOrden[0].cliente.nombre,
            rut: this.$store.getters.enviarDataDetalleOrden[0].cliente.rut_n+'-'+this.$store.getters.enviarDataDetalleOrden[0].cliente.rut_dv,
            direccion: this.$store.getters.enviarDataDetalleOrden[0].cliente.direccion_entrega,
            contacto: this.$store.getters.enviarDataDetalleOrden[0].cliente.contacto,
            fono: this.$store.getters.enviarDataDetalleOrden[0].cliente.fono,
            email: this.$store.getters.enviarDataDetalleOrden[0].cliente.email,
            //orden
            num_orden: this.$store.getters.enviarDataDetalleOrden[0].orden.num_orden,
            monto: this.$store.getters.enviarDataDetalleOrden[0].orden.monto,
            cant_productos: this.$store.getters.enviarDataDetalleOrden[0].orden.cant_productos,
            fecha_entrega: this.$store.getters.enviarDataDetalleOrden[0].orden.fecha_entrega,
            vendedor: this.$store.getters.enviarDataDetalleOrden[0].orden.vendedor,
            estado: this.$store.getters.enviarDataDetalleOrden[0].orden.estado,
            avance_preparacion: this.$store.getters.enviarDataDetalleOrden[0].orden.avance_preparacion,
            productos:[]

            



        }
    },
    computed:{
        traerDataDetalleOrden(){
            return this.$store.getters.enviarDataDetalleOrden;
        }
    },
    mounted(){
        this.productos = this.$store.getters.enviarDataDetalleOrden.productos;
        console.log(this.productos);
    }

}
</script>

<style>

</style>