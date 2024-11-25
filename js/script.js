let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Función para marcar el enlace seleccionado y ocultar el menú una vez que se selecciona una opción
function seleccionar() {
    // Elimina la clase 'activo' de todos los enlaces
    document.querySelectorAll('#nav ul li a').forEach(link => {
        link.classList.remove('activo');
    });

    // Agrega la clase 'activo' al enlace seleccionado
    event.currentTarget.classList.add('activo');

    // Oculta el menú
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

// Efecto botón de desplazamiento hacia arriba
const btn_scrolltop = document.getElementById("btn_scrolltop");
btn_scrolltop.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

window.onscroll = () => {
    add_btn_scrolltop();
    efectoHabilidades();
    myFunction();
}

// Añade o quita la clase al botón de desplazamiento según la posición de scroll
const add_btn_scrolltop = () => {
    if (window.scrollY < 300) {
        btn_scrolltop.classList.remove("btn-scrolltop-on");
    } else {
        btn_scrolltop.classList.add("btn-scrolltop-on");
    }
}

// Efecto de remover la clase hover al mover el cursor
$(".hover").mouseleave(function () {
    $(this).removeClass("hover");
});

// Barra de progreso en scroll
function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// Configuración del swiper
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'slide',  // Cambiado de 'fade' a 'slide'
    loop: false,  // Cambiado a false para evitar el ciclo infinito
    mousewheel: {
        invert: false,
    },
    pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
    }
});

// Detener la propagación del clic en los botones "Visitar"
const visitButtons = document.querySelectorAll('.visit-btn');
visitButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation();  // Detener el clic para evitar el cambio de slide
        const url = this.getAttribute('data-url');  // Obtener URL del botón
        window.location.href = url;  // Redirigir a la URL
    });
});

// Cargar el script ofuscado
fetch('js/script.obf.js')  // Ruta de tu script ofuscado o minificado
  .then(response => response.text())
  .then(scriptContent => {
      var scriptTag = document.createElement('script');
      scriptTag.text = scriptContent;
      document.body.appendChild(scriptTag);
  })
  .catch(error => {
      console.error('Error cargando el script:', error);
  });

