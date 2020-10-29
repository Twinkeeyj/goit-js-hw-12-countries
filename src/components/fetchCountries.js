  import template from "../template/listTemplate.hbs";
export default function fetchCountries(searchQuery) {
  

    const input = document.querySelector('.input')
    const container = document.querySelector('.container')
    const ul = document.querySelector('.containerList')
  
       
    const countries = function (e) {

       
        e.target.value.length >= 3 ? fetch(`https://restcountries.eu/rest/v2/name/${e.target.value}`)
            .then((data) => data.json())
            .then((array) => {
                console.log(array.length);
                array.forEach((el) => {
                    if (array.length >= 2 && array.length < 10) { ul.innerHTML += `<li>${el.name}</li>` }
                    else if (array.length === 1) {
                        ul.insertAdjacentHTML('beforeend', template(array))
                    }
                })

            })
            : ul.innerHTML = "";
        
        // console.log(e.target.value);
        // <ul><li></li></ul>
      
    };




    input.addEventListener('input', countries)
}