  import template from "../template/listTemplate.hbs";
export default function fetchCountries(searchQuery) {
  

    const input = document.querySelector('.input')
    const container = document.querySelector('.container')
    const ul = document.querySelector('.containerList')

  
       
    const countries = function (e) {
    
            e.target.value.length >= 3 ? fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
                .then((data) => data.json())
                .then((array) => {
                    // console.log(array.length);
                    if (array.length >= 0) {
                        ul.innerHTML = ""
                    }
                    console.log(array);
                          array.forEach((el) => {
                        if (array.length >= 2 && array.length < 10) {
                            ul.innerHTML += `<li class=listItem>${el.name}</li>`
                            


                         const listItem=document.querySelectorAll('.listItem')
                       
                            listItem.forEach((el) => {

                                const replacement = function () {
                               input.value = el.textContent
                               ul.innerHTML = ''
                                
                                     fetch(`https://restcountries.eu/rest/v2/name/${el.textContent}`)
                                        .then((data) => data.json())
                                         .then((array) => {
                                              ul.insertAdjacentHTML('beforeend', template(array))
                                         })
                                    
                                    console.log(el.textContent);
                                    console.log(array);
                                    console.log(e.target.value);

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

  
        input.addEventListener('input', countries)
    
}

// if (array.length > 1) {
//                                           ul.innerHTML += `<li>${el.name}</li>`
//                     // 