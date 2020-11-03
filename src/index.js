
import "./styles.css"
import fetchCountries from "./components/fetchCountries.js"

import template from "./template/listTemplate.hbs";
import {alert, info} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css'

 const input = document.querySelector('.input')
   const ul = document.querySelector('.containerList')
  const debounce = require("lodash.debounce");
  const minionss = document.querySelector('.minions')
  const thoughts = document.querySelector('.thoughts')
  const minions2 = document.querySelector('.minions2')


   const countries = function (e) {
      if ( e.target.value.length >= 1) {
                 fetchCountries(e.target.value)
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
                     
                        
                  }else    if (array.length === 1) {
                    
                       ul.insertAdjacentHTML('beforeend', template(array));
                   
                     }
                   })
                })
                   .catch(err => {
                   console.log(1);
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

  