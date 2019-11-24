let menu = document.querySelector('.hidden-menu');

document.querySelector('.open-menu').onclick = () => {
	menu.style.display = 'grid';
}

document.querySelector('.close-menu').onclick = () => {
	menu.style.display = 'none';
}