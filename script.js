fetch('./data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let product of products) {
            out += `
        <tr>
            <td class="text-center"> <input type="checkbox" disabled /> </td>
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.webReference}</td>
        </tr>
        `;
        }

        placeholder.innerHTML = out;
});