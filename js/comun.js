/* =========================================================
   Cabecera (menú) y pie comunes a todas las páginas.
   Si quieres cambiar el menú o el pie, cámbialo SOLO aquí
   y se actualizará en todas las páginas a la vez.
   ========================================================= */

var EMAIL_AMPTA = "info@amptaestudianteslastablas.es";

var CABECERA = `
<a class="cabecera__logo" href="index.html" aria-label="AMPTA Colegio Estudiantes - Inicio">
  <img src="img/logo-cabecera.png" alt="AMPTA Familias - Colegio Estudiantes" width="99" height="65">
</a>
<button class="menu-boton" aria-expanded="false" aria-controls="menu">☰ Menú</button>
<ul class="menu" id="menu">
  <li><a href="index.html">Inicio</a></li>
  <li><a href="el-ampta.html">El AMPTA</a>
    <ul class="submenu">
      <li><a href="el-ampta.html#objetivos">Objetivos</a></li>
      <li><a href="estatutos.html">Estatutos</a></li>
      <li><a href="el-ampta.html#junta">Junta Directiva</a></li>
      <li><a href="el-ampta.html#cuotas">Cuotas</a></li>
    </ul>
  </li>
  <li><a href="noticias.html">Noticias</a>
    <ul class="submenu">
      <li><a href="noticias.html">Noticias AMPTA</a></li>
      <li><a href="https://www.colegioestudiantes.es/noticias/" target="_blank" rel="noopener">Noticias Estudiantes</a></li>
    </ul>
  </li>
  <li><a href="comercios.html">Comercios Colaboradores</a></li>
  <li><a href="contacto.html">Contacto</a></li>
  <li class="menu__destacado"><a href="alta-socios.html">Asóciate</a></li>
</ul>`;

var PIE = `
<div class="contenedor">
  <div class="rejilla">
    <div>
      <h4>Nosotros</h4>
      <p>Somos la asociación de madres y padres del Colegio Estudiantes en Las Tablas, Madrid. Aquí puedes obtener todo tipo de información sobre nuestras actividades.</p>
    </div>
    <div>
      <h4>Menú</h4>
      <ul>
        <li><a href="el-ampta.html">El AMPTA</a></li>
        <li><a href="alta-socios.html">Asóciate</a></li>
        <li><a href="comercios.html">Comercios Colaboradores</a></li>
        <li><a href="contacto.html">Contacto</a></li>
        <li><a href="noticias.html">Noticias</a></li>
      </ul>
    </div>
    <div>
      <h4>Contáctanos</h4>
      <p><a href="mailto:${EMAIL_AMPTA}">${EMAIL_AMPTA}</a></p>
    </div>
    <div>
      <img class="pie__logo" src="img/logo.png" alt="AMPTA Familias" width="130" height="130" loading="lazy">
    </div>
  </div>
  <div class="pie__legal">
    <span>© ${new Date().getFullYear()} AMPTA Colegio Estudiantes · El contenido de este sitio se publica bajo una Licencia Creative Commons.</span>
    <span><a href="aviso-legal.html">Aviso legal</a> · <a href="politica-privacidad.html">Política de privacidad</a> · <a href="politica-cookies.html">Política de cookies</a></span>
  </div>
</div>`;

(function () {
  var cab = document.getElementById("cabecera");
  var pie = document.getElementById("pie");
  if (cab) cab.innerHTML = '<div class="contenedor">' + CABECERA + "</div>";
  if (pie) pie.innerHTML = PIE;

  // Marca en el menú la página actual
  var actual = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".menu > li > a").forEach(function (a) {
    if (a.getAttribute("href") === actual) a.setAttribute("aria-current", "page");
  });

  // Botón de menú en móvil
  var boton = document.querySelector(".menu-boton");
  var menu = document.getElementById("menu");
  if (boton && menu) {
    boton.addEventListener("click", function () {
      var abierto = menu.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", abierto);
    });
  }
})();
