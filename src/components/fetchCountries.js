import template from "../template/listTemplate.hbs";

// import {
//   alert,
//     defaultModules,
//   info
// } from "../../node_modules/@pnotify/core/dist/PNotify.js";
// import * as PNotifyDesktop from "../../node_modules/@pnotify/desktop/dist/PNotifyDesktop.js";
// import "../../node_modules/@pnotify/core/dist/PNotify.css";
// import "../../node_modules/@pnotify/desktop/dist/PNotifyDesktop.css";
// import '../../node_modules/@pnotify/core/dist/BrightTheme.css'
// defaultModules.set(PNotifyDesktop, {});

// // import { alert, notice, info, success, error } from '@pnotify/core';
// // import '@pnotify/core/dist/PNotify.css';
import {alert, info} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
// import { info } from "autoprefixer";

export default function fetchCountries(searchQuery) {
    const input = document.querySelector('.input')
    const container = document.querySelector('.container')
    const ul = document.querySelector('.containerList')
    

  
  const debounce = require("lodash.debounce");
    
    const countries = function (e) {
    
            e.target.value.length >= 1 ? fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
                .then((data) => data.json())
                .then((array) => {

                            if (array.length > 10) {
                             alert("Too many matches found.Please \n enter a more specific query!!!!")
                            //  console.log('jopa');
                           
                                          
                    }


                    // console.log(array.length);
                    if (array.length >= 0) {
                        ul.innerHTML = ""
                    }
                    console.log(array);
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

                 .catch(a => {
                //  input.value = ' '
                      ul.innerHTML = ''
                    info('Enter another name!')
                   
                })

                : ul.innerHTML = "";
            };

          document.querySelector('input').addEventListener(
  'input',
    debounce((e) => {
      countries(e)}, 500),
  );
    
}




                    //     
          
                    // if (array.length >= 0) {
                    //     ul.innerHTML = ""
                    // } console.log(array.length);
                    //    if (array.length > 10) {
                    //          alert('Error')
                    //         }




                        