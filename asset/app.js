// JS pour la page d'accueil

// Pour que le menu se ferme après que l'on ait cliqué dessus
// création d'une variable pour sélectionner tous les éléments du menu
const allNavItems = document.querySelectorAll('.nav-item');
// et la navbar qui se collapse
const navbar = document.querySelector('.navbar-collapse');

allNavItems.forEach(item => item.addEventListener('click', () => {
    // la classe show avec boostrap c'est ce qui montre ou pas le menu
    navbar.classList.toggle('show');
}));

// Modal 

// Pour l'affichage de ma modal
// On remarque que lorsque l'on clique pour fermer la modale avant le chargement complet de la page, la modal réapparaît

$(document).ready(function(){

    // La manoeuvre à consister premièrement à appeller la modal au démarrage, sans l'aide de bouton puis de la faire disparaître après un certain laps de temps
    let stopAutohide;

    // Je fais apparaître ma modal
    function showWindow(){
        $('#box').show();

        // après l'affichage complet de ma modal le scroll s'intérompt
        $('html body').css('overflow', 'hidden')
        // j'arrête la disparition programée après 4s 
        stopAutohide(hideWindow,5000);
    }
    // showWindow()

    function hideWindow(){
        $('#box').hide();
        // Une fois ma modal disparut le scroll est réactivé
        $('html body').css('overflow','auto');
    }
    // hideWindow()

    // J'appelle l'apparition de ma modal après un certain temps lorsque la page est chargée
    // laps de 2s
    setTimeout(showWindow,2000);


    // Je rends la disparition de ma modal manuel via le click
    $('.close-btn').click(function(){
        hideWindow();
        clearTimeout(stopAutohide);
    })

})

// Fin modal 

// Je synchronise mon event et le chargement de ma page
// Lorsque l'on clique sur le bouton sans que la page soit complètement charger on remarque une distortion de l'image 
document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        themeStylesheet.href = storedTheme;
    }
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // Si c'est le thème light -> devient dark
        if (themeStylesheet.href.includes('light')) {
            themeStylesheet.href = 'src/dark-theme.css';
            themeToggle.innerText = '🌙/☀️';
        } else {
            // Si c'est le thème dark -> devient light
            themeStylesheet.href = 'src/light-theme.css';
            themeToggle.innerText = '🌙/☀️';
        }
        // Garde en mémoire la préference de l'utilisateur avec localStorage
        localStorage.setItem('theme', themeStylesheet.href)
    })
})


// Mon bouton scroll up 

// Je fais une fonction qui va m'aider à appeller un bouton qui ramenera l'utilisateur vers le haut de la page grâce à une ancre sans besoin de scroller 
// On remarque que le bouton n'apparaît pas lorsqu'on est dans le header 
jQuery(function(){
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200 ) { 
                $('#scrollUp').css('right','10px');
            } else { 
                $('#scrollUp').removeAttr( 'style' );
            }

        });
    });
});