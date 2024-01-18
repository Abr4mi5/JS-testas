/* ------------------------------ TASK 7 -----------------------------------
Turimas "items" masyvas.

Parašykite funkciją "transformItems", kuri pakeis kiekvieno objekto struktūrą.
Funkcija turėtų grąžinti naują masyvą, kuriame kiekvienas objektas turės tik "id" ir "fullName" savybes.

Pvz., { id: '1', name: 'John', surname: 'Doe' } tampa { id: '1', fullName: 'John Doe' }.
-------------------------------------------------------------------------- */

const items = [
  { id: '1', name: 'John', surname: 'Doe' },
  { id: '2', name: 'Jane', surname: 'Doe' },
  { id: '3', name: 'James', surname: 'Smith' },
];

function transformItems(items) {
  const transformedItems = [];
  for (const item of items) {
    const transformedItem = {
      id: item.id,
      fullName: `${item.name} ${item.surname}`,
    };
    transformedItems.push(transformedItem);
  }
  return transformedItems;
}

const transformedArray = transformItems(items);
console.log(transformedArray);