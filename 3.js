let dog_names = [];
for (let i = 0; i < 6; i++) {
    dog_names[i] = prompt('Name of a dog: ')
}
dog_names.sort()
dog_names.reverse()
let html = '<ul>';
for (let i = 0; i < dog_names.length; i++) {
    html += '<li>';
    html += dog_names[i];
    html += '</li>'
}
html+= '</ul>'

let kohde = document.querySelector('#kohde');
kohde.innerHTML = html