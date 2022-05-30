'use strict';


document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    // ---------------------------------------------------------
    const adv = document.querySelectorAll('.promo__adv img'),
          dramma = document.querySelector('.promo__genre'),
          moviesList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
    //  bg = document.querySelector('.promo__bg');


     addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if(favorite) {
                console.log('добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, moviesList);
        }

         event.target.reset();
 });
    const deleteAdv = (arr) => {
        arr.forEach (item =>  {
            item.remove();
        });
};
  // ------------------------------------------------------------
const makeChanges = () => {
    dramma.innerHTML = 'Dramma';
    // bg.backgroundImage.backgroundImage = 'url(" img/bg.jpg")';
};
 // --------------------------------------------------------
    const sortArr = (arr) => {
        arr.sort();
    };
    // --------------------------------------------------------
     function createMovieList (films, parent) {
        parent.innerHTML = '';

        sortArr(films); 
    
        films.forEach(function (item, index) {
            parent.innerHTML += `
            <li class="promo__interactive-item"> ${index +1} ${item}
                    <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    
    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, moviesList);
});


