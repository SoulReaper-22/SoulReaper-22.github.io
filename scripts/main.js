const myImage= document.querySelector("img");

myImage.onclick = ()=>{
    const mysrc= myImage.getAttribute("src");
    if(mysrc==="images/image1.png"){
        myImage.setAttribute("src", "images/image2.png");
    }
    else{
        myImage.setAttribute("src", "images/image1.png");
    }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Google is fast, ${storedName}`;
  }
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Google is fast, ${myName}`;
    }
}
  myButton.onclick = () => {
    setUserName();
  };