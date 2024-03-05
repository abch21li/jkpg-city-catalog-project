document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');

      fetch('http://localhost:3000/stores/all')
      .then((response) => response.json())
      .then((stores) => {
          let storesHTML = '<h2>Stores in Jönköping</h2';
          stores.forEach((d) => {
              storesHTML += `<p>${d['name']}</p>`
          });
          contentDiv.innerHTML = storesHTML;
      });
    });
