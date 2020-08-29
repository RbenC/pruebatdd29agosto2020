import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    busqueda:'',
    usersme:[],  //  'Users/Me'
    cursos:[],   //  'courses
    fundamentos:[], // courses/fundamentos-de-desarrollo-web
    fundamentosData:[],
    fundamentosInclude:[]


  },
  //******************************************************************************** */
  getters:{
    enviarDataUsersMe(state){
      return state.usersme; 
    },
    enviarDataCursos(state){
      return state.cursos;
    },
    enviarDataFundamentos(state){
      return state.fundamentos; 
    }
  },
  //******************************************************************************** */
  mutations: {
    llamandousersme(state, informacionllamandousersme){
      state.usersme = informacionllamandousersme;   
    },
    llamandocursos(state, informacionllamandocursos){
      state.cursos = informacionllamandocursos
    },
    llamandofundamentos(state, informacionllamandofundamentos){
      state.fundamentos = informacionllamandofundamentos;
      state.fundamentosData.push(informacionllamandofundamentos.data);
      state.fundamentosInclude = informacionllamandofundamentos.included;

    }
  },
  //******************************************************************************** */
  actions: {
    llamandousersme(context,parametrosllamandousersme){
      context.commit('llamandousersme', parametrosllamandousersme);  
    },
    llamandocursos(context, parametrosllamandocursos){
      context.commit('llamandocursos', parametrosllamandocursos)
    },
    llamandofundamentos(context, parametrosllamandofundamentos){
      context.commit('llamandofundamentos',parametrosllamandofundamentos);
    }
  },
  //******************************************************************************** */
  modules: {

  }
})
