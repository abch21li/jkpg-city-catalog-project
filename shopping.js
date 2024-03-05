document.addEventListener('DOMContentLoaded', function() {

    if (window.location.pathname.includes('/shopping')) {
        
    const contentDiv = document.getElementById('content');

      fetch('http://localhost:3000/stores/all')
      .then((response) => response.json())
      .then((stores) => {
          let storesHTML = '';
          stores.forEach((d) => {
              storesHTML += `<div class="store-card"><p>${d['name']}</p></div>`
          });
          contentDiv.innerHTML = storesHTML;
      });
    }
    });
