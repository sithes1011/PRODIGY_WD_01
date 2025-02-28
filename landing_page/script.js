
// const element = document.getElementById('myDiv');

//   element.addEventListener('mouseover', function() {
//     element.classList.add('hovered');
//   });

//   element.addEventListener('mouseout', function() {
//     element.classList.remove('hovered');
//   });
function show(){
    const sho = document.querySelector('.sidebar');
    sho.style.display = 'flex';
    console.log("inside show")
    
}

function closee(){
    const sho = document.querySelector('.sidebar');
    sho.style.display = 'none';
    console.log("inside close")
}
