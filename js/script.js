console.log("hello netflix");
let trendingArea = document.getElementById("trending-area");

let trendingItems = [
  { Image: "images/slider1.webp" },
  { Image: "images/slider2.webp" },
  { Image: "images/slider3.webp" },
  { Image: "images/slider4.webp" },
  { Image: "images/slider5.webp" },
  { Image: "images/slider6.webp" },
  { Image: "images/slider7.webp" },
  { Image: "images/slider8.webp" },
  { Image: "images/slider9.webp" },
  { Image: "images/slier10.webp" } 
];

// Display items only once
function displayItems() {
  trendingItems.forEach((item, index) => {
    let imgWrapper = document.createElement("div");
    imgWrapper.style.minWidth = "180px";
    imgWrapper.style.marginLeft = "40px";
    imgWrapper.style.position = "relative";

    let img = document.createElement("img");
    img.src = item.Image;
    img.style.width = "100%";
    img.style.height = "auto";
    img.style.borderRadius = "10px";



    // Create number badge
    let numberBadge = document.createElement("span");
    numberBadge.textContent = index + 1;
    numberBadge.style.position = "absolute";
    numberBadge.style.left = "-30px";
    numberBadge.style.bottom = "0";
    numberBadge.style.webkitTextStroke = "2px #fff";
    numberBadge.style.color = "#000";
    numberBadge.style.fontWeight = "800";
    numberBadge.style.fontSize = "6rem";

    imgWrapper.appendChild(img);
    imgWrapper.appendChild(numberBadge);
    trendingArea.appendChild(imgWrapper);
  });
}

displayItems();

// Scroll buttons
let leftbtn = document.getElementById("leftbtn");
let rightbtn = document.getElementById("rightbtn");
leftbtn.style.position="absolute";
leftbtn.style.top="50%";
rightbtn.style.position="absolute";
rightbtn.style.top="50%";
rightbtn.style.right="5%"

leftbtn.addEventListener("click", () => {
  trendingArea.scrollBy({ left: -600, behavior: "smooth" });
});

rightbtn.addEventListener("click", () => {
  trendingArea.scrollBy({ left: 600, behavior: "smooth" });
});


