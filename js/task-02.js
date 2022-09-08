const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayItems = [];
const listElement = document.querySelector('#ingredients');
for(let ingredient of ingredients){
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  arrayItems.push(li);
}
listElement.append(...arrayItems);

