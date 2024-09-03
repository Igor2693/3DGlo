const menu = () => {
    const menuBtn = document.querySelector(".menu");
    const menu = document.querySelector("menu");
    const closeBtn = menu.querySelector(".close-btn");
    const menuItems = menu.querySelectorAll("ul>li>a");
    console.log(menuItems);
    const handleMenu = () => {
        menu.classList.toggle("active-menu");
    };
    menuBtn.addEventListener("click", handleMenu);
    closeBtn.addEventListener("click", handleMenu);
    menuItems.forEach((menuItem) =>
        menuItem.addEventListener("click", handleMenu)
    );
};
export default menu;



// const menu = () => {
//     const menuBtn = document.querySelector('.menu')
//     const menu = document.querySelector('menu')
//     const closeBtn = menu.querySelector('.close-btn')
//     const menuItems = menu.querySelector('ul>li>a')

//     console.log(menuBtn)
//     console.log(menu)
//     console.log(closeBtn)
//     console.log(menuItems)

//     const handleMenu = () => {
//       menu.classList.toggle('active-menu')
//     }

//     menuBtn.addEventListener('clock', handleMenu)
//     closeBtn.addEventListener('click', handleMenu)

//     menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))

// }

// export default menu


