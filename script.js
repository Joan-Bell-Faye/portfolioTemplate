document.querySelectorAll('.img_div').forEach(div => {
    const defaultImg = div.querySelector('.img-default');
    const hoverImg = div.querySelector('.img-hover');

    div.addEventListener('mouseenter', () => {
      defaultImg.style.opacity = '0';
      hoverImg.style.opacity = '1';
    });

    div.addEventListener('mouseleave', () => {
      defaultImg.style.opacity = '1';
      hoverImg.style.opacity = '0';
    });
  });


  //Nav menu
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to black */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "black";
}