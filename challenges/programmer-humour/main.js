const imgTag = document.getElementById('mainImg');
function fetchData(){
  const url ='https://xkcd.now.sh/?comic=latest';
  fetch(url)
  .then(response => response.json())
  .then(data =>{
    imgTag.src = data.img;
    imgTag.alt = data.alt;
    console.log(data)})
  .then((err) => {console.log("Opps :", err)})

}
fetchData();