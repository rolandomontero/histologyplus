<?php

$body_nav_h = <<< EOT
<nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0
shadow">
<a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
    <img src="../img/logo.png" alt="" height="48" width="48">
    Club Wampus</a>
<button class="navbar-toggler position-absolute d-md-none collapsed"
    type="button" data-toggle="collapse" data-target="#sidebarMenu"
    aria-controls="sidebarMenu" aria-expanded="false"
    aria-label="Toggle navigation">
    <span data-feather="menu"></span>
</button>
<h1 class="w-100 text-center" style="color:white"> $1 </h1>
<ul class="navbar-nav px-3">
    <li class="nav-item text-nowrap">
        <a class="nav-link" href="../">Salir</a>
    </li>
</ul>
</nav>
EOT;

$body_nav_v = <<< EOT
<nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block
bg-light sidebar collapse">
<div class="sidebar-sticky pt-5">
    <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link $1" href="./" id="home">
                <span data-feather="home"></span> Dashboard
                <span class="sr-only">(current)</span>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link $2" href="carta" id="carta">
                <span data-feather="file-text"></span>
                La carta
            </a>
        </li>
        <li class="nav-item">
        <a class="nav-link $8" href="premios" id="premios">
            <span data-feather="gift"></span>
            Premios            
        </a>
    </li>
    </ul>
    <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
    <span>Clientes</span>
    <a class="d-flex align-items-center text-muted" href="#" aria-label="Acciones de Clientes">
      <span data-feather="users"></span>
    </a>
  </h6>
  <ul class="nav flex-column mb-2">
          <li class="nav-item"><a id="nvcliente" class="nav-link $3"
                    href="nuevo">
                  <span data-feather="user-plus"></span>
                  Nuevo Cliente</a></li>
          <li class="nav-item"><a id="accliente" class="nav-link $6"
                  href="actualiza">
                <span data-feather="user-check"></span>
                Actualiza Cliente</a></li>
          <li class="nav-item"><a id="elcliente" class="nav-link $7"
                href="elimina">
              <span data-feather="user-x"></span>
              Elimina Cliente</a></li>
                <li class="nav-item"><a id="mensajes" class="nav-link $4"
                  href="mensaje">
                <span data-feather="message-square"></span>
                Enviar mensaje</a></li>
  </ul>

  <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
  <span>Ajustes</span>
  <a class="d-flex align-items-center text-muted" href="#" aria-label="Ajustes al sistema">
  <span data-feather="settings"></span>
  </a>
</h6>
<ul class="nav flex-column mb-2">
<li class="nav-item"><a id="nvcliente" class="nav-link $9"
          href="reglas_premiacion">
        <span data-feather="edit"></span>
        Reglas de Premiación</a></li>
<li class="nav-item"><a id="accliente" class="nav-link $10"
        href="actualiza">
      <span data-feather="user-check"></span>
      Actualiza Cliente</a></li>
<li class="nav-item"><a id="elcliente" class="nav-link $11"
      href="elimina">
    <span data-feather="user-x"></span>
    Elimina Cliente</a></li>
      <li class="nav-item"><a id="mensajes" class="nav-link $12"
        href="mensaje">
      <span data-feather="message-square"></span>
      Enviar mensaje</a></li>
</ul>
</div>
</nav>
EOT;

function menu_vertical($item, $text)
{
    echo str_replace($item, 'active', $text);
}

function nav_horizontal($titulo, $text)
{
    echo str_replace('$1', $titulo, $text);
}
/***  
<ul class="nav flex-column mb-2">
        <li class="nav-item"><a id="nvcliente" class="nav-link $3"
                  href="nuevo">
                <span data-feather="bar-chart-2"></span>
                Cliente</a></li>
        <li class="nav-item"><a id="accliente" class="nav-link $6"
                href="actualiza">
              <span data-feather="user-check"></span>
              Actualiza Cliente</a></li>
        <li class="nav-item"><a id="elcliente" class="nav-link $7"
              href="elimina">
            <span data-feather="user-x"></span>
            Elimina Cliente</a></li>
              <li class="nav-item"><a id="mensajes" class="nav-link $4"
                href="mensaje">
              <span data-feather="message-circle"></span>
              Enviar mensaje</a></li>

</ul>
***/

$body_footer = <<< EOT
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.9.0/feather.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>
<script src="../js/dashboard.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="../js/form-validation.js"></script>
EOT;