const imageArray = [
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
];
let imageGalleryDiv = document.getElementsByClassName("image-gallery-div");

let poppupImage = document.getElementById('poppup-img');
let poppupDiv = document.getElementsByClassName('poppup-div');
let cancelPoppup = document.getElementById('cancel-poppup');
for (let i = 0;i < imageArray.length;i++){
    let image = document.createElement("img");
    image.className = 'image';
    image.src = imageArray[i]
    imageGalleryDiv[0].appendChild(image)
    image.addEventListener('click',function(){
        poppupDiv[0].style.display = 'block'
    })
    cancelPoppup.addEventListener('click',function (){
        poppupDiv[0].style.display = 'none'
    })
    image.addEventListener('click',function (){
        poppupImage.src = this.src
    })
}