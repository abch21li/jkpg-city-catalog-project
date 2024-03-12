document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('/shopping')) {
    const contentDiv = document.getElementById('content');

      fetch('http://localhost:3000/stores/all')
      .then((response) => response.json())
      .then((stores) => {
          let storesHTML = '';
          stores.forEach((store) => {
              const storeName = store['name'];
              const storeClass = 'store-card';
              const storeUrl = store['url'];

              storesHTML += `<a href="${storeUrl}">
              <div class="${storeClass}">
                      <p>${storeName}</p>
              </div>
              </a>
          `;
          });
          contentDiv.innerHTML = storesHTML;
      });
    }
    });
