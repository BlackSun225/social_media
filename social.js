const circle = document.getElementById('switch');
const toggle = document.getElementById('toggle');
var move = 0;
const r = document.querySelector(':root');
const rs = getComputedStyle(r);
const theme = localStorage.getItem("theme");

function setLight() {
  r.style.setProperty('--toggleColor',"hsl(230, 22%, 74%)");
  r.style.setProperty('--bgColor','hsl(0, 0%, 100%)');
  r.style.setProperty('--bgTopColor','hsl(225, 100%, 98%)');
  r.style.setProperty('--cardBg','hsl(227, 47%, 96%)');
  r.style.setProperty('--mainTxtColor','hsl(230, 17%, 14%)');
  r.style.setProperty('--txtColor','hsl(228, 12%, 44%)');
}

function setDark() {
  r.style.setProperty('--toggleColor',"linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))");
  r.style.setProperty('--bgColor','hsl(230, 17%, 14%)');
  r.style.setProperty('--bgTopColor','hsl(232, 19%, 15%)');
  r.style.setProperty('--cardBg','hsl(228, 28%, 20%)');
  r.style.setProperty('--mainTxtColor','hsl(0, 0%, 100%)');
  r.style.setProperty('--txtColor','hsl(228, 34%, 66%)');
}

if(theme === "dark") {
  move = 0;
  circle.style.right = "auto";
  circle.style.left = "3px";
  setDark();
}
if(theme === "light" ) {
  move = 1;
  circle.style.left = "auto";
  circle.style.right = "3px";
  setLight();
}

toggle.addEventListener('click', function(){
  if(move === 0) {
    circle.style.left = "auto";
    circle.style.right = "3px";
    setLight();
    localStorage.setItem("theme","light");
    move++;
  }else if(move === 1) {
    circle.style.right = "auto";
    circle.style.left = "3px";
    setDark();
    localStorage.setItem("theme","dark");
    move--;
  }
});

