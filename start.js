fetch("http://localhost:3000/stores/all")
.then((response) => {
    return response.json();
})

.then((stores) => {
    stores.forEach((d) => {
        const para = document.createElement("p");
        const node = document.createTextNode(d["name"]);
        para.appendChild(node);
        document.body.appendChild(para);
    });
});