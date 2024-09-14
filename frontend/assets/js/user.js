/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('ri-menu-line')
            // add padding to body
            bodypd.classList.toggle('body-user')
            // add padding to header
            headerpd.classList.toggle('body-user')
        })
    }
}

showNavbar('header-toggle-user','nav-bar','body-user','header-user')


/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav-link-user')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))