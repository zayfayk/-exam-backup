const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list');
arrows.forEach((arrow, i )=> {
    arrow.addEventListener('click', function() {
       movieLists[i].style.transform ="translateX(-300px)";
       
    });
    
})
  