/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';

const $ = require('jquery');
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything
require('bootstrap');

// or you can include specific pieces
// require('bootstrap/js/dist/tooltip');
// require('bootstrap/js/dist/popover');

/*$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});*/

/*const searchInput = document.getElementById('registration_form_address');
const autocompleteUrl = "https://api-adresse.data.gouv.fr/search/"

searchInput.addEventListener('input', function() {
    fetch(autocompleteUrl + '?q=' + encodeURIComponent(searchInput.value), {
        mode: 'no-cors'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const suggestions = data.map(item => ({value: item.value, text: item.text}));

            searchInput.autocomplete.update(suggestions);
        });
});*/