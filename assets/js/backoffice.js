const myForm = document.getElementById('myForm');
const name = document.getElementById('productname');
const brand = document.getElementById('productbrand');
const price = document.getElementById('productprice');
const image = document.getElementById('image');
const description = document.getElementById('description');
const btndelete = document.getElementById('delete');
const btnreset = document.getElementById('reset');
const btnsave = document.getElementById('save');
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzViZmVlY2QyMjA3MTAwMTVkZTJmNTEiLCJpYXQiOjE3MzQwODIyODgsImV4cCI6MTczNTI5MTg4OH0.cpnMbkkMKJpRdbVm-5rvnyh206R4uVoZw27uv1U6MBs'
const URL = "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/";

let myprodoct = [];

class prodoct {
    constructor(_name, _brand, _price, _image, _description) {
        this.name = _name;
        this.brand = _brand;
        this.price = _price;
        this.image = _image;
        this.description = _description;
    }
}

let prodoctMod;

function init() {
    btnsave.setAttribute('disabled', 'true');
    readlist();
}

async function readlist() {
    try {
        let response = await fetch(URL, {
            method: 'POST',
            headers: {
                Authorization: `bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(myproduct),
        });
        if (!response.ok) {
            throw new Error('Error: ' + response.status);
        }
        const data = await response.json();
        console.log('Prodotto aggiunto:', data);
    } catch (error) {
        console.log(error);
    }

    productForm.reset();
};