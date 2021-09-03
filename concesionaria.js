const  autos = require("./autos" )

let concesionaria = {
   autos:autos,
 
 
   buscarAuto:function(patente){

        let encontrado = autos.find(auto =>auto.patente === patente)
        if (encontrado === undefined) {
            return null
        }else{
            return encontrado
        };
       
    
    },

    venderAuto: function (patente) {
        let auto = this.buscarAuto(patente);
           auto.vendido = true;
},
    autosParaLaVenta:function(){

        let autosDisponibles = autos.filter(auto => auto.vendido === false)
        return autosDisponibles
},  
   autosNuevos:function(){
       let autos = this.autosParaLaVenta();
     let autosNuevos = autos.filter(auto => auto.km < 100)      
        return autosNuevos;  
    },
      listaDeVentas: function(patente) {
        let vendidos = autos.filter(auto => auto.vendido === true)
    let recorrer = vendidos.map(function(valor){
        return valor.precio;
    });
    return recorrer;
    },



     totalDeVentas:function () {
         let ganancias = this.listaDeVentas();
         let sumaTotal = ganancias.reduce((total, ganancia) => {
             suma = total + ganancia;
            return suma
          },0);
         return sumaTotal;
},

   
puedeComprar:function(auto,persona){
    let precioCuota = (auto.precio / auto.cuotas);
    let condicionUno = auto.precio <= persona.capacidadDePagoTotal;
    let condicionDos = persona.capacidadDePagoEnCuotas > precioCuota;
    
    if (condicionUno && condicionDos){
        return true
    } else return false

},
        autosQuePuedeComprar:function(persona){
        let autosParaLaVenta = this.autosParaLaVenta();
        resultado = [];
        for(let i = 0 ; i<autosParaLaVenta.length ; i++){
          if ((this.puedeComprar(autosParaLaVenta[i],persona)) === true){
              resultado.push(autosParaLaVenta[i]) 
          }
        }
        return resultado
     
}
}
// console.log(concesionaria.autosQuePuedeComprar())


// console.log(concesionaria.buscarAuto('JJK116'))
console.log(concesionaria.venderAuto('JJK116'));
// console.log(concesionaria.buscarAuto('JJK116'))
console.log(concesionaria.listaDeVentas())
