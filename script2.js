document.getElementById('logoutButton').addEventListener('click', function () {
    localStorage.clear();
})
// ------------------------------------------------------
var storeData = localStorage.getItem("userData");
        
if (storeData) {
    var userData = JSON.parse(storeData);
    var userName = userData.Name; 
    document.getElementById('userName').textContent = userName;
} else {
    console.log("Not Founded");
}
//------------------------------------------------------- 
function createCard(product) {
  const card = document.createElement('div');
  card.classList.add('box1');
  card.innerHTML = `
      <div class="img-box1">
          <img src="${product.image}" alt="${product.title}">
      </div>
      <div class="detail-box1">
          <h5>${product.title}</h5>
          <div class="price_box">
              <h6 class="price_heading">
                  <span>$</span> ${product.price.toFixed(2)}
              </h6>
              <a href="#">
                  Buy Now
              </a>
          </div>
      </div>
  `;

  return card;
}

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
      const cardContainer = document.getElementById('card-container');
      for (let i = 0; i < 6; i++) {
          const product = data[i];
          const card = createCard(product);
          cardContainer.appendChild(card);
      }
  })
  .catch(error => {
      console.error('Error fetching data:', error);
  });
// ------------------------------------------------------------
const apiUrl = 'https://fakestoreapi.com/products';
  const imageContainer = document.getElementById('image-container');
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      data.slice(0, 6).forEach(product => {
        const imageUrl = product.image;
        const imageFrame = document.createElement('div');
        imageFrame.classList.add('image-frame');
        const image = document.createElement('img');
        image.src = imageUrl;
        imageFrame.appendChild(image);
        imageContainer.appendChild(imageFrame);
      });
    })
.catch(error => {
console.error('Error fetching data:', error);
});