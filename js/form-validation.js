document.addEventListener("DOMContentLoaded", () => {
  // --- VALIDACIÓN FORMULARIO ---
  const formulario = document.getElementById("formValidado");
  const erroresDiv = document.getElementById("errores");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se envíe si hay errores
    erroresDiv.innerHTML = "";
    let errores = [];

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validación nombre
    if (nombre === "") {
      errores.push("El nombre es obligatorio.");
    } else if (nombre.length < 3) {
      errores.push("El nombre debe tener al menos 3 caracteres.");
    }

    // Validación correo
    if (correo === "") {
      errores.push("El correo electrónico es obligatorio.");
    } else if (!/^\S+@\S+\.\S+$/.test(correo)) {
      errores.push("El correo electrónico no es válido.");
    }

    // Validación mensaje
    if (mensaje === "") {
      errores.push("El mensaje no puede estar vacío.");
    } else if (mensaje.length < 10) {
      errores.push("El mensaje debe tener al menos 10 caracteres.");
    }

    if (errores.length > 0) {
      erroresDiv.innerHTML = errores.map(error => `<p>⚠ ${error}</p>`).join("");
    } else {
      alert("Formulario enviado con éxito ✅");
      formulario.reset();
    }
  });

  // --- MENÚ HAMBURGUESA ---
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.classList.remove('open');
    });
  });
});

// --- STICKY HEADER (afuera del DOMContentLoaded para que funcione bien al hacer scroll) ---
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});