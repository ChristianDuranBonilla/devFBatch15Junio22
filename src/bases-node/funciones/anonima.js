//estructura de una de primer orden
function () {
    console.log('holi')
}

//estructura de una arrow
() => {
    console.log('Hola')
}

//========================================================
//funciones anònimas autoejecutables/IIFE. Siempre llevan ;
(function () {
    console.log('holi')
})();

//estructura de una arrow
(() => {
    console.log('Hola')
})();

//========================================================
//Trabajar paràmetros
(function (a, b) {
    return console.log(a + b)
})(23, 17);
