const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const newsletterForm = document.getElementById('newsletter-form');
const errorMsg = document.getElementById('error-msg');
const input = document.getElementById('input');
const errorMark = document.getElementById('error-mark');
let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

const onTabClick = (e) => {
	// Deactivate all tabs
	tabs.forEach((tab) => {
		tab.children[0].classList.remove('border-softRed', 'border-b-4', 'md:border-b-0');
	});

	// Hide all panels
	panels.forEach((panel) => panel.classList.add('hidden'));

	// Activate a new tab and panel based on the target
	e.target.classList.add('border-softRed', 'border-b-4');
	const classString = e.target.getAttribute('data-target');
	document.getElementById('panels').getElementsByClassName(classString)[0].classList.remove('hidden');
};

// Form Validation

const validateForm = (e) => {
	e.preventDefault();
	let emailInput = e.target.firstElementChild.firstElementChild.value;

	if (emailInput === '' || regex.test(emailInput) === false) {
		errorMsg.classList.remove('hidden');
		input.classList.remove('border-white');
		input.classList.add('border-2', 'border-softRed');
		errorMark.classList.remove('hidden');
	} else {
		errorMsg.classList.add('hidden');
		input.classList.remove('border-2', 'border-softRed');
		input.classList.remove('border-white');
		errorMark.classList.add('hidden');
	}
};

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));
newsletterForm.addEventListener('submit', validateForm);
