let hello = document.querySelector(".helloTxt");
let $name = document.querySelector(".nameTxt");
let box = document.querySelector(".box");
let circleArea = document.querySelector(".circleArea");
let circle = document.querySelector(".circle");
let works = document.querySelector(".works");
let website = document.querySelector(".website");
let designList = document.querySelectorAll(".designList li");
let helloTxt = "안녕하세요";
let nameTxt = "유주현입니다";
let i = 0;
let j = 0;

let circleWidth = () => {
  circleArea.style.height = 120 + circleArea.offsetWidth + "px"
  circleArea.style.borderBottomRightRadius = circleArea.offsetWidth / 2 + "px"
  circleArea.style.borderBottomLeftRadius = circleArea.offsetWidth / 2 + "px"
  circle.style.height = circle.offsetWidth + "px"
}

let listHeight = () => {
  for(let k = 0; k < designList.length; k++){
    designList[k].style.height = designList[k].offsetWidth + "px"
  }
}

let worksHeight = () => {
  if (window.innerWidth >= 768) {
    works.style.paddingBottom = website.offsetHeight * 3 + 220 + "px";
  } else {
    works.style.paddingBottom = website.offsetHeight * 4 + 270 + "px";
  }
}

let wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let typingHello = async () => {  
  while (i < helloTxt.length) {
    await wait(100);
    hello.innerHTML += helloTxt[i];
    i++;
  }
}

let typingName = async () => {  
  $name.style.display = "block"
  await wait(1000);
  while (j < nameTxt.length) {
    await wait(100);
    $name.innerHTML += nameTxt[j];
    j++;
  }
}

let boxWidth = () => {
  let boxTxtWidth = document.querySelector(".boxTxtArea h1").offsetWidth;
  box.style.width = boxTxtWidth + "px"
}

circleWidth()
worksHeight()
listHeight()

window.addEventListener("resize",()=>{
  circleWidth()
  worksHeight()
  boxWidth()
  listHeight()
})



setTimeout(typingHello, 1000);
setTimeout(boxWidth, 2500);
setTimeout(typingName, 3000);

let swiper1 = new Swiper('.dreamSlide',{
  slidesPerView: 1,
  loop: true,
})
let swiper2 = new Swiper('.eduSlide',{
  slidesPerView: 1,
  loop: true,
})
let swiper3 = new Swiper('.smartSlide',{
  slidesPerView: 1,
  loop: true,
})
let swiper4 = new Swiper('.blueSlide',{
  slidesPerView: 1,
  loop: true,
})
let swiper5 = new Swiper('.bookSlide',{
  slidesPerView: 1,
  loop: true,
})
