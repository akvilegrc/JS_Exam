/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const response = fetch(ENDPOINT);
const output = document.getElementById("output");

response
    .then((response) => response.json())
    .then((data) => {
        data.forEach((car) => {
            const carBrand = car.brand;
            const carModels = car.models;

            const card = document.createElement("div");
            card.setAttribute("id","wrapper-card");
            const brandName = document.createElement("h2");
            const brandModels = document.createElement("p");

            brandName.textContent = carBrand;
            brandModels.textContent = carModels;

            output.appendChild(card);
            card.appendChild(brandName);
            card.appendChild(brandModels);

        })
    })
