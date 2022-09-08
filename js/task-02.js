const listElement = document.querySelector('#ingredients');
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayItems = [];
for(let ingredient of ingredients){
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  arrayItems.push(li);
}
listElement.append(...arrayItems);

