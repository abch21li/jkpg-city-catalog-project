// ----- Event listener loading venues after the page is loaded 
document.addEventListener('DOMContentLoaded', function() {
    // ------ checks if '/shopping' is included
    if (window.location.pathname.includes('/shopping')) {
    // ------ Grabs the content div by its id 
    const contentDiv = document.getElementById('shopping-content');

    // ------ Retrieves the data from the server
      fetch('http://localhost:3000/stores/all')
      .then((response) => response.json())
      .then((stores) => {
          let storesHTML = '';
          // ------ Goes through each store and creates html elements
          stores.forEach((store) => {
              const storeName = store['name'];
              const storeClass = 'store-card';
              const storeUrl = store['url'];
          // ------ Creates a card for each store that is clickable
              storesHTML += `<a href="${storeUrl}">
              <div class="${storeClass}">
                      <p>${storeName}</p>
              </div>
              </a>
          `;
          });
          // ----- Fills the content div with the html elements created 
          contentDiv.innerHTML = storesHTML;
      });
    }
    });
