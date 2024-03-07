document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('/shopping')) {
    const contentDiv = document.getElementById('content');

      fetch('http://localhost:3000/stores/all')
      .then((response) => response.json())
      .then((stores) => {
          let storesHTML = '';
          stores.forEach((store) => {
              const storeName = store['name'];
              // let backgroundImagePath = store['imagePath'];
              const storeClass = 'store-card';

              storesHTML += `
              <div class="${storeClass}">
                <p>${storeName}</p>
              </div>
              `;
          });
          contentDiv.innerHTML = storesHTML;
      });
    }
    });
