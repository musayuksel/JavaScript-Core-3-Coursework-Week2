const image = document.getElementById('image');
function newImage (){
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data =>{
      image.src = data.message;
      console.log(data.message);
      image.alt = 'cute animal';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}