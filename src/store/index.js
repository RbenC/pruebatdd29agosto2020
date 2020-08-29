import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    busqueda:'',
    Kpis:[],
    UltimasDevoluciones:[],
    UltimasOrdenes:[],
    Arreglooficinas:[],
    Arregloestados:[],
    Arregloordenes:[],
    ArregloDetalleorden:[],
  },
  //******************************************************************************** */
  getters:{
    enviarDataKpis(state){
      return state.Kpis; 
    },
    enviarDataUltimasDevoluciones(state){
      return state.UltimasDevoluciones; 
    },
    enviarDataUltimasOrdenes(state){
      return state.UltimasOrdenes; 
    },
    enviarDataOficinas(state){
      return state.Arreglooficinas;      
    },
    enviarDataEstados(state){
      return state.Arregloestados;      
    },
    enviarDataOrdenes(state){
      return state.Arregloordenes;      
    },
    enviarDataDetalleOrden(state){
      return state.ArregloDetalleorden; 
    }
  },
  //******************************************************************************** */
  mutations: {
    llamandoInformacionApi(state, informacionllamandoInformacionApi){
      state.Kpis.push(informacionllamandoInformacionApi.kpis);      
      state.UltimasDevoluciones = informacionllamandoInformacionApi.ultimas_devoluciones+':';
      state.UltimasOrdenes = informacionllamandoInformacionApi.utimas_ordenes;
    }
  },
  //******************************************************************************** */
  actions: {
    llamandoInformacionApi(context,parametrosllamandoInformacionApi){
      context.commit('llamandoInformacionApi', parametrosllamandoInformacionApi)
    }




  },
  //******************************************************************************** */
  modules: {

  }
})
