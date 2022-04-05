/* const PrecioOriginal = 100;
const Descuento = 15;
 */
function CalcularPrecioConDescuento(PrecioOriginal,Descuento){
    const porcentajePrecioConDescuento = 100 - Descuento;
    const precioConDescuento = (PrecioOriginal * porcentajePrecioConDescuento)/100;
    
    return precioConDescuento;
}
/* console.log("El precio original es " +PrecioOriginal);
console.log({
    PrecioOriginal,
    Descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}) */

function onClickButtonPriceDiscount(){
    const inputPrice =document.getElementById("InputPrice")
    const priceValue = inputPrice.value;

    const inputDiscoun =document.getElementById("InputDiscount")
    const discountValue = inputDiscoun.value;

    const precioConDescuento =  CalcularPrecioConDescuento(priceValue,discountValue);

    const ResultP = document.getElementById("ResultP");
    ResultP.innerText = precioConDescuento;

}
function onClickButtonPriceDiscountCupon(){
    const inputPrice =document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscoun =document.getElementById("InputDiscount");
    const discountValue = Number(inputDiscoun.value);

    const ResultPC = document.getElementById("InputCupon");
    const couponValue = ResultPC.value;
    const coupons = [
        {
            name: "Sam",
            discount: 15,
        },
        {
            name: "Sam2",
            discount: 30,
        },
        {
            name: "Sam3",
            discount: 25,
        },
    ];
    coupons.find(Object => {
        console.log(Object)
    }) 
    coupons.forEach(object =>{
        console.log(object.name);
        if(object.name == couponValue){
            console.log("El cupon es valido ")
            const descuentosSumados=object.discount+discountValue;
            console.log(descuentosSumados); 
            const precioConDescuentoYCupon =  CalcularPrecioConDescuento(priceValue,descuentosSumados);
            const ResultPYC = document.getElementById("ResultPYC");
            ResultPYC.innerText = precioConDescuentoYCupon;
        }
    });
    
}