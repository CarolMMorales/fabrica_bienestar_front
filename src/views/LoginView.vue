<template>
  <div class="container-flex ">
    <div class="row w-100">
      <div class="col-md-6 col-ms-6 p-5 text-center">
        <carousel></carousel>
      </div>
      <div class="col-md-6 col-ms-6 p-5 text center">
          <div class="card shadow p-3 bg-body-tertiary rounded ms-5 me-5">
          <form @submit.prevent="handleSubmit">
            <strong><h3 class="text-center mb-4 red-color-text">{{ $t('login.title') }}</h3>
            </strong>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label text-start ps-3">{{
                $t('login.email')
              }}</label>
              <div class="input-group flex-nowrap">
                <span class="input-group-text">
                  <i class="bi bi-envelope-at-fill"></i>
                </span>
                <input
                  type="email"
                  v-model="use_mail"
                  class="form-control ps-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  :placeholder="$t('login.email')"
                  required
                />
              </div>
              <span class="error" v-if="!validateEmail(use_mail)">Formato de correo incorrecto</span>
            </div>
            <div class="mb-3">
              <label for="txtPassword" class="form-label ps-3">{{
                $t('login.password')
              }}</label>
              <div class="input-group flex-nowrap">
                <span class="input-group-text">
                  <i class="bi bi-lock-fill"></i>
                </span>
                <input
                  type="password"
                  class="form-control ps-3"
                  aria-describedby="password"
                  v-model="use_password"
                  id="txtPassword"
                  :placeholder="$t('login.password')"
                  required
                />
                <div class="input-group-append">
            <button v-on:click="mostrarPassword" id="show_password" class="btn btn-outline-dark" type="button" > <span class="fa fa-eye-slash icon"></span> </button>
          </div>
              </div>

              <span class="error" v-if="!validatePassword(use_password)">
                La contraseña debe tener al menos 8 caracteres, una mayuscula, un digito y un caracter especial.
              </span>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-inputps-3" id="exampleCheck1" required/>
              <label class="ps-2 form-check-label" for="exampleCheck1">{{
                $t('login.Terms')
              }}</label>
            </div>
            <div class="text-center mt-3">
              <button
                type="submit"
                class="btn btn-danger p-2 align-content-center"
                style="width: 40%"
              >
                {{ $t('login.Login') }}
              </button>
            </div>

            <div class="text-center">
              <router-link class="btn btn-link fs-6 text-center" to="/register">{{
                $t('login.Forget')
              }}</router-link
              ><br />
              <router-link class="btn btn-link fs-6" to="/register">{{
                $t('login.Register')
              }}</router-link
              ><br />
            </div>
         
          </form>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
import Carousel from '../components/Carousel.vue'
import { useAuthStore } from '../stores/authStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2';

const authStore = useAuthStore()
const router = useRouter()

const use_mail = ref('')
const use_password = ref('')

const handleSubmit = async () => {
  try {
    console.log('paso las validaciones')
    await authStore.access(use_mail.value, use_password.value)
    router.push('/protected')
  } catch (error) {
    console.log('error', error)
    Swal.fire(error.message);
  }
}

//validaciones login
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@uniempresarial\.edu\.co$/
  return emailRegex.test(email)
}

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/
  return passwordRegex.test(password)
}

const mostrarPassword = () => {
    const cambio = document.getElementById("txtPassword");
    if (cambio.type === "password") {
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    } else {
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
};


</script>
