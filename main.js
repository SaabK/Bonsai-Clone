const checkbox = document.querySelector('#checkbox');
const monthly = document.querySelector('#monthly');
const yearly = document.querySelector('#yearly');
const items = document.querySelectorAll('.accordion button');

const monthlyCards = document.querySelector('.monthly-cards');
const yearlyCards = document.querySelector('.yearly-cards');

checkbox.addEventListener('click', () => {
	if (checkbox.checked) {
		// Show Yearly Cards and Toggle Yearly
		yearly.classList.add('active');
		monthly.classList.remove('active');

		monthlyCards.style.display = 'none';
		yearlyCards.style.display = 'flex';
	} else {
		// Show again monthly cards and toggle monthly
		monthly.classList.add('active');
		yearly.classList.remove('active');

		monthlyCards.style.display = 'flex';
		yearlyCards.style.display = 'none';
	}
});

function toggleAccordion() {
	const itemToggle = this.getAttribute('aria-expanded');

	for (i = 0; i < items.length; i++) {
		items[i].setAttribute('aria-expanded', 'false');
	}

	if (itemToggle == 'false') {
		this.setAttribute('aria-expanded', 'true');
	}
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
