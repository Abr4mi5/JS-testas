/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    fetch("./cars.json")
      .then((response) => response.json())
      .then((data) => {
        const outputContainer = document.getElementById("output");
        data.forEach((car) => {
          const card = document.createElement("div");
          card.classList.add("car-card"); // You can define a class for styling
          const heading = document.createElement("h2");
          heading.textContent = car.brand;
          card.appendChild(heading);
          const modelList = document.createElement("ul");
          car.models.forEach((model) => {
            const listItem = document.createElement("li");
            listItem.textContent = model;
            modelList.appendChild(listItem);
          });
          card.appendChild(modelList);
          outputContainer.appendChild(card);
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  });
  