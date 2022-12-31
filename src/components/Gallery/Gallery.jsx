import React from "react";

function Gallery() {

    return (
        <div className="mobile">
        <h2 className="mobile__title">Смартфон Apple iPhone 13, синий</h2> 
            <div className="mobile__image">
                <img className="mobiles__image" src="./images/image-1.webp" alt="телефон apple iphone" />
                <img className="mobiles__image" src="./images/image-2.webp" alt="apple iphone экран" />
                <img className="mobiles__image" src="./images/image-3.webp" alt="apple iphone вид сбоку" />
                <img className="mobiles__image" src="./images/image-4.webp" alt="apple iphone камера" />
                <img className="mobiles__image" src="./images/image-5.webp" alt="apple iphone задняя сторона" />
            </div> 
        </div> 
    )
}    

export default Gallery;