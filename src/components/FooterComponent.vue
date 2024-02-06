<script setup>
</script>
<template>
  <footer
    class=" text-center text-lg-start w-100 footer  "
  >
    <section class="">
      <div class="container text-center text-md-start">
        <div class="row ">
          <div class="col-md-2 col-lg-4 col-xl-4">
            <h6 class="text-uppercase">
              <img
                alt="Uniempresarial logo"
                class="logo img-fluid d-inline-block"
                src="../assets/LogoSinFondo.png"
                width="400"
                height="150"
              />
            </h6>
          </div>

          <div class="col-md-4 col-lg-3 col-xl-4 mx-auto mt-3">
            <h6 class="text-uppercase fw-bold">{{ $t('footer.contact') }}</h6>

            <p class="text-reset">{{ $t('footer.phone') }}</p>

          </div>

          <div class="col-md-6 col-lg-5 col-xl-4 mx-auto mt-3">
            <p class="text-reset">{{ $t('footer.adress') }} </p>
            <p>
              <a href="mailto:notificacionesjudiciales@uniempresarial.edu.co" class="text-reset">notificacionesjudiciales@uniempresarial.edu.co</a
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Copyright -->
    <div class="text-center p-3 Copyright">
      © 2021 Copyright: Todos los derechos reservados © 2020 -2023 Fundación Universitaria
      Empresarial de la Cámara de Comercio de Bogotá-Uniempresarial
      <a class="text-reset" href="https://www.uniempresarial.edu.co/" target="_blank"
        >Uniempresarial.edu.co</a
      >
    </div>
    <!-- Copyright -->
  </footer>
</template>
<style>
.footer {
  background-color: var(--slate--Gray--color);


}

.Copyright {
  background-color:var(--dark--slate--gray--color);
}


</style>
