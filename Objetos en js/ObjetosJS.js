let JugadorBaloncesto = {
    Nombre: "Michael Jordan",
    Edad: 32,
    PuntosPartidos: 30,

    PresentarInfo: function() {
        console.log(`Este jugador es ${this.Nombre}, tiene ${this.Edad} años y su promedio de puntos por partido es ${this.PuntosPartidos}.`);
    },

    ActualizarPuntos: function(nuevosPuntos) {
        this.PuntosPartidos = nuevosPuntos;
        console.log(`Los puntos por partido se han actualizado a ${this.PuntosPartidos}.`);
    }
};