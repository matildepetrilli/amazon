const myForm = document.getElementById('myForm');
const Name = document.getElementById('productname');
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

class Prodoct {
    constructor(_Name, _brand, _price, _image, _description) {
        this.Name = _Name;
        this.brand = _brand;
        this.price = _price;
        this.image = _image;
        this.description = _description;
    }
}

const addItem = async () => {
    let newProducts =new Products(
        Name.value,
        brand.value,
        image.value,
        price.value,
        description.value
    );
    try {
        let response = await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(newProducts),
            headers: {
                Authorization: ` ${apiKey}`,
                'Content-Type': 'application/json',
            },
            
        });
        if (!response.ok) {
            throw new Error('Errore nella risposta: ' + response.status);
        }

        const data = await response.json();
        console.log('Prodotto aggiunto:', data);
    } catch (error) {
        console.log("Errore durante l'invio del prodotto:", error);
    }
    productForm.reset();
};