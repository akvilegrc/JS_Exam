/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const output = document.getElementById("output");
const form = document.querySelector("form");
const kilogramsInput = document.getElementById("search");

form.addEventListener("submit", converterFunction);

function converterFunction(event){
    event.preventDefault();
    const kgs = Number(kilogramsInput.value);
    const lbs = kgs * 2.2046;
    const grams = kgs / 0.0010000;
    const oz = kgs * 35.274;

    const lbsConversion = document.createElement("p");
    const gramsConversion = document.createElement("p");
    const ozConversion = document.createElement("p");

    lbsConversion.textContent = `${kgs}kg = ${lbs}lbs`;
    gramsConversion.textContent = `${kgs}kg = ${grams}g`;
    ozConversion.textContent = `${kgs}kg = ${oz}oz`;

    output.appendChild(lbsConversion);
    output.appendChild(gramsConversion);
    output.appendChild(ozConversion);

}