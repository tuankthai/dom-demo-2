
const pCont = document.querySelector("#paragraph-container")

console.log({ pCont })

const para = document.createElement("p")
console.log({para})
para.textContent = "this is a test again"
// pCont.innerHTML = "<p></p>"

pCont.append(para)
console.log({ pCont })

const foodlist = ["avocado", "orange", "wine"]
const foodCont = document.getElementById("food-container")
console.log({ foodCont })

const ul = document.createElement("ul")
for (i of foodlist) {
    let li = document.createElement("li")
    li.textContent = i
    ul.append(li)
}

foodCont.append(ul)

console.log({ foodCont })


const imgCont = document.getElementById("image-container")
const url1 = "./cat2.jpeg"
const url2 = "./cat3.jpeg"
const url3 = "./cat4.jpeg"
const imageUrls = [url1, url2, url3]

imageUrls.forEach(url => {
    const img = document.createElement("img")
    
    img.setAttribute("src", url)
    console.log({ img })
    img.style.width = "10rem"
    imgCont.append(img)
})


