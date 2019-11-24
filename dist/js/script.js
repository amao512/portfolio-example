document.addEventListener('DOMContentLoaded', () => {
	
	let popUp 		= document.querySelector('.pop-up__section'); // Pop Up
	let openPopUp 	= document.querySelector('.pop-up');      // Open Pop Up
	let closePopUp 	= document.querySelector('.close__pop-up'); // Close Pop Up
	let overlay 	= document.querySelector('.overlay'); // Размытие

	let inputForm 	= document.querySelector('.form__input');
	let input 		= document.querySelector('.input');
	let btn 		= document.querySelector('.form__button');

	openPopUp.addEventListener('click', () => {
		popUp.style.display = 'block';
		overlay.style.display = 'block';
	})

	closePopUp.addEventListener('click', () => {
		popUp.style.display = 'none';
		overlay.style.display = 'none';
	})

	btn.addEventListener('click', () => {
		if(input.value == ''){
			inputForm.style.border = '1px solid red';
		} else {
			inputForm.style.border = '1px solid #DBDBDB';
		}
	})
})