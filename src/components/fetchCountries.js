import template from "../template/listTemplate.hbs";
import {alert, info} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css'


export default function fetchCountries(searchQuery) {
   const input = document.querySelector('.input')
   const ul = document.querySelector('.containerList')
  const debounce = require("lodash.debounce");
  const minionss = document.querySelector('.minions')
  const thoughts = document.querySelector('.thoughts')
  const minions2 = document.querySelector('.minions2')
  
  
    const countries = function (e) {
      if ( e.target.value.length >= 1) {
                    fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
                .then((data) => data.json())
                .then((array) => {

                   if (array.length > 10) {
                     alert("      Too many matches found.Please \n enter a more specific query!!!!")
                  };

                  if (array.length >= 0) {
                    ul.innerHTML = ""
                  };
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
                         .then((array) => { ul.insertAdjacentHTML('beforeend', template(array))});
                        }
                            el.addEventListener('click',replacement)
                       })
                    
                        } else if (array.length === 1) {
                       ul.insertAdjacentHTML('beforeend', template(array));
                      //  localStorage.setItem('html', template(array));

                       
                     }
                    })
                })
                 .catch(a => {
                   input.value = ""
                   ul.innerHTML = ""
                    info('     Enter another name!')
                 })
        
        
        
      }else{ul.innerHTML = ""}

  };
 

  const minions = function () {
    minionss.classList.toggle('invisible')
    thoughts.classList.toggle('invisible')
    minions2.classList.toggle('invisible')
    input.removeEventListener("click", minions)
  }

   input.addEventListener("click", minions)
   document.querySelector('input').addEventListener(
  'input',
    debounce((e) => {
      countries(e)}, 500),
  );
    
}


                        