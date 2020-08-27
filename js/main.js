// Упаковки
const packages = document.querySelectorAll('.package-cat');

// 1.
// Устанавливаем пользовательский атрибут наличие упаковок (true / false)
// Вешаем обработчик на каждую упаковку
for(package of packages) {
	package.setAttribute('data-stock', true);
	package.addEventListener('click', select);
}
// Присваиваем последней упаковке false
package.setAttribute('data-stock', false);


// Выводим обновлённую версию об упаковках
// packages = document.querySelectorAll('.package-cat');

for(package of packages) {
	console.log(package.getAttribute('data-stock'));
}
 

// Функция выбора
function select(e) {
	if(e.currentTarget.getAttribute('data-stock') === 'true') {
		if(e.currentTarget.getAttribute('data-state') === 'selected') {
			e.currentTarget.style.border="";
			e.currentTarget.style.backgroundColor="";
			e.currentTarget.setAttribute('data-state', 'not selected');
		} else {
			e.currentTarget.style.border="solid 4px green";
			e.currentTarget.style.backgroundColor="#b3d4fc";
			e.currentTarget.setAttribute('data-state', 'selected');
		}
	} else {
		console.log('Эти упаковки закнчились');
	}
}