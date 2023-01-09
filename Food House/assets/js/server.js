let serv = document.getElementById("dad-of-services")

let originalContent = `
<div class="col-lg-12 menu-item">
<img src="source" class="menu-img img-fluid" alt="">
<h4 style="text-align:center; margin-top:10px;">name</h4>
<p class="ingredients" style="text-align:center; margin-top:10px;">
description
</p>
</div>`


fetch('http://localhost:3000/service')
    .then(response => response.json())
    .then(json => {
        json.services.forEach(element => {
            let content = originalContent
            content = content.replace("source", element.A)
            content = content.replace("name", element.B)
            content = content.replace("description", element.C)
            const service = document.createElement("div");
            service.innerHTML = content;
            service.className = "col-xl-4 col-md-6 d-flex"
            serv.appendChild(service)
        });
    })

