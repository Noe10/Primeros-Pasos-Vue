const app = new Vue({
    el:'#app',
    data:{
        titulo:'Frutas',
        frutas:[
            {id:1, nombre:'Pera',cantidad:10},
            {id:2, nombre:'Manzana',cantidad:0},
            {id:3, nombre:'Mandarinas',cantidad:89},
            {id:4, nombre:'Mangos',cantidad:459},
            {id:5, nombre:'Naranjas',cantidad:59}
        ],
        nuevaFruta:'',
    },
     methods:{
            agregarFruta(){
                this.frutas.push({
                    nombre:this.nuevaFruta,
                    cantidad:0
                })               
            }
        }
    
})