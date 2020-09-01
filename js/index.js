const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let contZ = document.querySelector(".container");
contZ.getElementsByTagName("a")[0].textContent =siteContent["nav"]["nav-item-1"];
contZ.getElementsByTagName("a")[1].textContent=siteContent["nav"]["nav-item-2"];
contZ.getElementsByTagName("a")[2].textContent=siteContent["nav"]["nav-item-3"];
contZ.getElementsByTagName("a")[3].textContent=siteContent["nav"]["nav-item-4"];
contZ.getElementsByTagName("a")[4].textContent=siteContent["nav"]["nav-item-5"];
contZ.getElementsByTagName("a")[5].textContent=siteContent["nav"]["nav-item-6"];
console.log(contZ);

//cta
let logO = document.querySelector("#cta-img");
console.log(logO);
logO.setAttribute('src',siteContent["cta"]["img-src"])

let ctaH = document.querySelector(".cta-text");
console.log(ctaH);
ctaH.getElementsByTagName("h1")[0].textContent = siteContent["cta"]["h1"];
ctaH.getElementsByTagName("button")[0].textContent = siteContent["cta"]["button"];
console.log(ctaH)
//ctaH.setAttribute(h1,siteContent["cta"]["h1"])

//middle
let midI = document.querySelector(".main-content");
midI.getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["features-h4"];
midI.getElementsByTagName("p")[0].textContent = siteContent["main-content"]["features-content"];
midI.getElementsByTagName("h4")[1].textContent = siteContent["main-content"]["about-h4"];
midI.getElementsByTagName("p")[1].textContent = siteContent["main-content"]["about-content"];

//img
let midX = document.querySelector(".middle-img");
midX.setAttribute('src',siteContent["main-content"]["middle-img-src"])

//bottom
let midD = document.querySelector(".bottom-content")
midD.getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["services-h4"];
midD.getElementsByTagName("p")[0].textContent = siteContent["main-content"]["services-content"];
midD.getElementsByTagName("h4")[1].textContent = siteContent["main-content"]["product-h4"];
midD.getElementsByTagName("p")[1].textContent = siteContent["main-content"]["product-content"];
midD.getElementsByTagName("h4")[2].textContent = siteContent["main-content"]["vision-h4"];
midD.getElementsByTagName("p")[2].textContent = siteContent["main-content"]["vision-content"];


console.log(midI)

let contentT = document.querySelector(".contact")
console.log(contentT);
contentT.getElementsByTagName("h4")[0].textContent =  siteContent["contact"]["contact-h4"];
contentT.getElementsByTagName("p")[0].textContent =  siteContent["contact"]["address"];
contentT.getElementsByTagName("p")[1].textContent =  siteContent["contact"]["phone"];
contentT.getElementsByTagName("p")[2].textContent =  siteContent["contact"]["email"];



//footer
let footFoot = document.querySelector("footer")
footFoot.getElementsByTagName("p")[0].textContent =  siteContent["footer"]["copyright"];