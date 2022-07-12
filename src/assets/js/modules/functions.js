// Check for browser to support WEBP, add class 'webp' if true, otherwise no
export function isWebp(){
    // check browser support
    function testWebp(callback){
        let webp = new Image();
        webp.onload = webp.onerror = () => {
            callback(webp.height == 2);
        };
        webp.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebp(function (support){
        if(support == true){
            document.querySelector('html').classList.add('webp');
        } else {
            document.querySelector('html').classList.add('no-webp');
        }
    })

}


