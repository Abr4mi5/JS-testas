/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const outputDiv = document.getElementById('output');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const weightInKg = parseFloat(document.getElementById('search').value);
  
      if (isNaN(weightInKg)) {
        alert('Please enter a valid number for weight.');
        return;
      }
  
      const weightInPounds = weightInKg * 2.2046;
      const weightInGrams = weightInKg / 0.0010000;
      const weightInOz = weightInKg * 35.274;

      outputDiv.innerHTML = `
        <p>Weight in pounds: ${weightInPounds.toFixed(2)} lb</p>
        <p>Weight in grams: ${weightInGrams.toFixed(2)} g</p>
        <p>Weight in ounces: ${weightInOz.toFixed(2)} oz</p>
      `;
    });
  });