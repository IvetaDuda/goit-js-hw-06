const listCategories = document.querySelector('#categories');
const list = listCategories.children.length;
console.log('Number of categories:', list);
const items = document.querySelectorAll('.item');
const result = items.forEach((item) => {
  console.log('Category:', item.querySelector('h2').textContent);
  console.log('Elements:', item.querySelectorAll('li').length);
});
