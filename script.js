function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open")
}

function openResume(){
    var resumepath="https://drive.google.com/file/d/1SjsDP5jFS9vAUVbnBD3tfktso-xO03eV/view?usp=drivesdk";
    window.open(resumepath,"blank");
}