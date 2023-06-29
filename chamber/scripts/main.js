const lastUpdated = new Date(document.lastModified);
document.querySelector('#lastUpdated').textContent = `${lastUpdated.toLocaleDateString()} at ${lastUpdated.toLocaleTimeString()}`;
document.querySelector('#lastUpdated-1').textContent = `${lastUpdated.toLocaleDateString()} at ${lastUpdated.toLocaleTimeString()}`;
const currentDate = new Date();
document.querySelector('#currentyear').textContent = currentDate.getFullYear();
document.querySelector('#currentyear-1').textContent = currentDate.getFullYear();
const date = document.querySelector("#currentdate");

const option = {
	weekday: "long"
}
const options = {
	month: "long",
	day: "numeric",
	year: "numeric"
};
date.innerHTML = `${new Date().toLocaleDateString("en-UK", option)}, ${new Date().toLocaleDateString("en-UK", options)}</span>`;

const divi = document.querySelector('div');
if (currentDate.getDay() == 1 || currentDate.getDay() == 2) {
    const para = document.createElement('p');
    divi.appendChild(para);
    para.textContent = "🤝🏼 Come join us for the chamber meet & greet Wednesday at 7:00 p.m. 🤝🏼";
	divi.style.display = "block";
	const btn = document.createElement('button');
	para.appendChild(btn);
	btn.textContent = 'X';
	btn.addEventListener('click', () => {
		divi.style.display = "none";
	})
} else {divi.style.display = "none";}