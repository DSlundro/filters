
let storeImage = () =>{
    const image_input = document.querySelector("#image-input");
    image_input.addEventListener("change", function() {
        let reader = new FileReader()
        reader = new FileReader()
        reader.addEventListener("load", () => {
            const uploaded_image = reader.result;
            document.querySelector("#display-image").innerHTML = 
            `<img id="new-img" src="${uploaded_image}" style="width: 100%;">`;
        });
    reader.readAsDataURL(this.files[0]);
    });
};storeImage()

/* ========== Start FILTER GROUPS ========== */
function filter1(){
    let img = document.getElementById('new-img')
    img.style.filter = `grayscale(${grayscale.value}%) saturate(${saturate.value}) sepia(${sepia.value}) invert(${invert.value})`
}

function filter2(){
    let img = document.getElementById('new-img')
    img.style.filter = 
    `
    contrast(${contrast.value})
    brightness(${brightness.value})
    opacity(${opacity.value})
    hue-rotate(${hue_rotate.value}deg)
    `
}
/* ========== End FILTER GROUPS ========== */

// DATA
let query = (e) => document.querySelector(e)
let queryAll = (e) => document.querySelectorAll(e)
let toggleDisplayNone = (e) => document.getElementById(e).classList.toggle('d-none')
let toggleAll = ()=>{
    toggleDisplayNone('display-image')
    toggleDisplayNone('remove-image')
    toggleDisplayNone('upload-text')
    toggleDisplayNone('reset-button')
    toggleDisplayNone('remove-button')
}

function updateImage(){
    let newImage = document.getElementById('new-img')
    if (!newImage){
        toggleAll()
        query('.all').classList.toggle('d-none')
    }else{
        storeImage()
    }
}

function removeImage(){
    toggleAll()
    query('.all').classList.toggle('d-none')
    query('#new-img').remove()
}

/* ========== Start ADD FILTER'S INPUT DISPLAY BLOCK ========== */
for (let i = 0; i < 8; i++) {
    queryAll('label')[i+1].addEventListener('click', () => {
        queryAll('input')[i+1].classList.toggle('d-block')
        
    })
    
}
/* ========== End ADD FILTER'S INPUT DISPLAY BLOCK ========== */

function removeChanges(){
    for (let i = 0; i < 8; i++) {
        queryAll('input')[i+1].classList.remove('d-block')
        queryAll('input')[i+1].value = 0
        queryAll('input')[i+1].style.filter = null
    }
    document.getElementById('new-img').style.filter = null
    queryAll('input')[5].value = 1
    queryAll('input')[6].value = 1
    queryAll('input')[7].value = 1
}
