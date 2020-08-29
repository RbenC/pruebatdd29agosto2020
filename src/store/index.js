import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    busqueda:'',
    Usersme:{},  //  'Users/Me' completo
    Usersme_Data:[],  //  'Users/Me' data
    Usersme_Included:[],  //  'Users/Me' data
    Courses:[],            // 'courses' todo
    
    Fundamentos:{}, // courses/fundamentos-de-desarrollo-web
    Fundamentos_Data:[],
    Fundamentos_Included:[],

    Cssavanzado:{}, // courses/Cssavanzado
    Cssavanzado_Data:[],
    Cssavanzado_Included:[],
    
    Javascript:{}, // courses/Javascript
    Javascript_Data:[],
    Javascript_Included:[]




  },
  //******************************************************************************** */
  getters:{
    enviarDataUsersme(state){
      return state.Usersme; 
    },
    enviarDataUsersme_Data(state){
      return state.Usersme_Data; 
    },
    enviarDataUsersme_Included(state){
      return state.Usersme_Included; 
    },
   
    enviarDataCourses(state){
      return state.Courses;
    },

    enviarDataFundamentos(state){
      return state.Fundamentos; 
    },
    enviarDataFundamentos_Data(state){
      return state.Fundamentos_Data; 
    },
    enviarDataFundamentos_Included(state){
      return state.Fundamentos_Included; 
    },

    enviarDataCssavanzado(state){
      return state.Cssavanzado; 
    },
    enviarDataCssavanzado_Data(state){
      return state.Cssavanzado_Data; 
    },
    enviarDataCssavanzado_Included(state){
      return state.Cssavanzado_Included; 
    },

    enviarDataJavascript(state){
      return state.Javascript; 
    },
    enviarDataJavascript_Data(state){
      return state.Javascript_Data; 
    },
    enviarDataJavascript_Included(state){
      return state.Javascript_Included; 
    }
  },
  //******************************************************************************** */
  mutations: {
    llamandousersme(state, informacionllamandousersme){
      state.Usersme = informacionllamandousersme;
      state.Usersme_Data.push(informacionllamandousersme.data);
      state.Usersme_Included = informacionllamandousersme.included;
    },
    llamandocourses(state, informacionllamandocourses){
      state.Courses = informacionllamandocourses; 
    },
    llamandofundamentos(state, informacionllamandofundamentos){
      state.Fundamentos= informacionllamandofundamentos;
      state.Fundamentos_Data.push(informacionllamandofundamentos.data);
      state.Fundamentos_Included=informacionllamandofundamentos.included;
    },

    llamandocssavanzado(state, informacionllamandocssavanzado){
      state.Cssavanzado = informacionllamandocssavanzado;
      state.Cssavanzado_Data.push(informacionllamandocssavanzado.data);
      state.Cssavanzado_Included=informacionllamandocssavanzado.included;
    },
    llamandojavascript(state, informacionllamandojavascript){
      state.Javascript= informacionllamandojavascript;
      state.Javascript_Data.push(informacionllamandojavascript.data);
      state.Javascript_Included=informacionllamandojavascript.included;
    }
  },
  //******************************************************************************** */
  actions: {
    llamandousersme(context,parametrosllamandousersme){
      context.commit('llamandousersme', parametrosllamandousersme);  
    },
    llamandocourses(context, parametrosllamandocourses){
      context.commit('llamandocourses',parametrosllamandocourses )
    },
    llamandofundamentos(context, parametrosllamandofundamentos){
      context.commit('llamandofundamentos',parametrosllamandofundamentos);
    },
    llamandocssavanzado(context, parametrosllamandocssavanzado){
      context.commit('llamandocssavanzado', parametrosllamandocssavanzado)
    },
    llamandojavascript(context, parametrosllamandojavascript){
      context.commit('llamandojavascript', parametrosllamandojavascript)
    }





  },
  //******************************************************************************** */
  modules: {

  }
})
