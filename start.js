
document.addEventListener('DOMContentLoaded', function() {
      const storesLink = document.getElementById('stores-link');
      const contentDiv = document.getElementById('content');

      storesLink.addEventListener('click', function (event) {
        event.preventDefault();

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

})