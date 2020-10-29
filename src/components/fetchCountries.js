import template from "../template/listTemplate.hbs";
export default function fetchCountries(searchQuery) {
    const input = document.querySelector('.input')
    const container = document.querySelector('.container')
    const ul = document.querySelector('.containerList')

  
    const debounce = require("lodash.debounce");
    
    const countries = function (e) {
    
            e.target.value.length >= 2 ? fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
                .then((data) => data.json())
                .then((array) => {
                    // console.log(array.length);
                    if (array.length >= 0) {
                        ul.innerHTML = ""
                    }
                          array.forEach((el) => {
                        if (array.length >= 2 && array.length < 10) {
                            ul.innerHTML += `<li class=listItem>${el.name}</li>`
                     
                            
                            const listItem = document.querySelectorAll('.listItem')
                       
                            listItem.forEach((el) => {
                              const replacement = function () {
                               input.value = el.textContent
                               ul.innerHTML = ''
                                
                                    fetch(`https://restcountries.eu/rest/v2/name/${el.textContent}`)
                                        .then((data) => data.json())
                                        .then((array) => {
                                            ul.insertAdjacentHTML('beforeend', template(array))
                                        });
                           }
                            el.addEventListener('click',replacement)
                           })
                    
                        }
                        else if (array.length === 1) {
                            ul.insertAdjacentHTML('beforeend', template(array))
                        }
                    })
                })
                : ul.innerHTML = "";
            };

          document.querySelector('input').addEventListener(
  'input',
    debounce((e) => {
      countries(e)}, 500),
  );
    
}
