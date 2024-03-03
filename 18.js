const offer= document.querySelector(".offers");
const inoffer= document.querySelectorAll(".inoffers");
const width = inoffer[0].offsetWidth + 20;
const arrbut= document.querySelectorAll(".shiftarrow");
arrbut.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        offer.scrollLeft+=btn.id === "left"? -width: width;
    })
})

const latestcardcont=document.querySelector(".latestcardcont");
const latestcard=document.querySelectorAll(".latestcard");
const width2= latestcard[0].offsetWidth + 35;
const arrbut2= document.querySelectorAll(".shiftarrow2");
arrbut2.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        latestcardcont.scrollLeft+=btn.id === "left1"? -width2: width2;
    })
})