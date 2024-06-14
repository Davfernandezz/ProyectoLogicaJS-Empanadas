export const fn = (a, b, c) => {
   // Cuerpo de la función: Completa la lógica de la función aquí.
   
   if(a + b + c > 40) {
      throw Error("El número de empanadas no puede pasar de 40.")
   }

   if((a + b + c) % 3 !== 0) {
      throw Error("El número de empanadas tiene que ser divisible entre 3.")
   }

   if(a < 0 || b < 0 || c < 0) {
      throw Error("El numero de empanadas tiene que ser un numero entero.")
   }

   let preciosEmpanadas = [];
   for (let i = 0; i < a; i++) {
      preciosEmpanadas(12);
   }
   for (let i = 0; i < b; i++) {
      preciosEmpanadas(14);
   }
   for (let i = 0; i < c; i++) {
      preciosEmpanadas(16);
   }

   console.log(preciosEmpanadas);
};