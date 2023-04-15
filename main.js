

const menuBtn = document.querySelector("#menu-btn ");
const closeBtn = document.querySelector("#close-btn ");
const menu = document.querySelector("#nav_menu");

//show menu
menuBtn.addEventListener('click', () => {
  menu.style.display = "block" ;
  menuBtn.style.display = "none" ;
  closeBtn.style.display = "inline-block" ;
  document.querySelector("#overlay").style.visibility="visible";
  document.querySelector("#overlay").style.opacity="0.4";
  menu.style.zIndex="11";
 

  
  
})
  //hiden menu
  closeBtn.addEventListener('click', () => {
    menu.style.display = "none" ;
    menuBtn.style.display = "inline-block" ;
    closeBtn.style.display = "none" ;
    document.querySelector("#overlay").style.visibility="hidden";
    document.querySelector("#overlay").style.transition="1ms";
  }) 
  
  const navItems = menu.querySelectorAll("li.list1");

  const changeActiveItem = () => {
    navItems.forEach(item => {
     const link = item.querySelector("a");
        link.classList.remove('active');
    })
  }

  navItems.forEach(item => {
    const link = item.querySelector("a");
      link.addEventListener('click', () => {
        changeActiveItem();
        link.classList.add('active');
      })
  })  
