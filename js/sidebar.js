const sidebarMenuButton = document.querySelector('.gnb-icon-button.is-menu');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.overlay');

function openSidevar(){
	sidebar.classList.add('is-active');
	sidebarOverlay.classList.add('is-active');
}

function closeSidebar() {
	sidebar.classList.remove('is-active');
	sidebarOverlay.classList.remove('is-active');
}

sidebarMenuButton.addEventListener('click', openSidevar);
sidebarOverlay.addEventListener('click', closeSidebar);