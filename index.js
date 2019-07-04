
const comeco = new Date("Jan 1, 2019").getTime();
const formatura = new Date("Dec 31, 2024").getTime();



function update_percentage() {
	const now = new Date().getTime();

	const duracao = formatura - comeco;
	const percorrido = now - comeco;

	const percentagem = (percorrido / duracao) * 100

	console.log(percentagem);

	const progress_bar = document.getElementById("progress"); 

	if (progress_bar) {
		progress_bar.style.width = percentagem + "%";
		progress_bar.innerHTML = (Math.round(percentagem * 1000) / 1000) + "%";
	}
}



function update_countdown() {
	const now = new Date().getTime();

	var distance = formatura - now;

	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	document.getElementById("countdown").innerHTML = days + " dias " + hours + " horas "
	+ minutes + " minutos e " + seconds + " segundos";
}


var update_bar = setInterval(update_percentage, 100);
var update_interval = setInterval(update_countdown, 100);
