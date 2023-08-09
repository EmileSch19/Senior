// Popup de connexion
const connectBtn = document.querySelector('.btn1');
const connectBtnl= document.querySelector('.logo');
const exitConnect = document.querySelector('.close-btn');
const popupConnect = document.querySelector('.popup');

connectBtn.addEventListener("click", () => {
  popupConnect.classList.add("active");
});

connectBtnl.addEventListener("click", () => {
    popupConnect.classList.add("active");
  });

exitConnect.addEventListener("click", () => {
  popupConnect.classList.remove("active");
});

// Popup d'inscription
const signinBtn = document.querySelector('.btn2');
const signinBtni = document.querySelector('.btn-i');
const exitSignin = document.querySelector('.close-btn2');
const popupSignin = document.querySelector('.popup2');

signinBtn.addEventListener("click", () => {
  popupSignin.classList.add("active");
});

signinBtni.addEventListener("click", () => {
    popupSignin.classList.add("active");
  });

exitSignin.addEventListener("click", () => {
  popupSignin.classList.remove("active");
});
