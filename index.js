const padlOrel = Math.random() < 0.5;

const vysledekElement = document.querySelector('.vysledek');

if (padlOrel) {
  vysledekElement.textContent = 'Padl orel';
} else {
  vysledekElement.textContent = 'Padla panna';
}

const minceElement = document.querySelector('.mince');

if (padlOrel) {
  minceElement.classList.add('mince--orel');
  minceElement.classList.remove('mince--panna');
} else {
  minceElement.classList.add('mince--panna');
  minceElement.classList.remove('mince--orel');}