<template>
  <div class="container p-5">
    <!-- Modal -->
    <div class="modal fade border-primary" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog ">
        <div class="modal-content border-primary shadow-lg">
          <div class="modal-header">
            <h5 class="modal-title text-danger" id="exampleModalLabel">Registro de personas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="exampleInputName1" class="form-label">Nombre</label>
                  <input type="text" class="form-control" id="exampleInputName1" aria-describedby="NameHelp" />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="exampleInputLastName" class="form-label">Apellido</label>
                  <input type="text" class="form-control" id="exampleInputLastName" aria-describedby="LastNameHelp" />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="exampleInputDocumentType" class="form-label">Tipo de Documento</label>
                  <select class="form-select" id="exampleInputDocumentType" aria-describedby="DocumentTypeHelp">
                    <option value="cc">Cédula de Ciudadanía (CC)</option>
                    <option value="ti">Tarjeta de Identidad (TI)</option>
                  </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="exampleInputDocument" class="form-label">Documento</label>
                  <input type="text" class="form-control" id="exampleInputDocument" aria-describedby="DocumentHelp" />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="exampleInputExpedition" class="form-label">Lugar de Expedición</label>
                  <input type="text" class="form-control" id="exampleInputExpedition" aria-describedby="ExpeditionHelp" />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="exampleInputBirthdate" class="form-label">Fecha de Nacimiento</label>
                  <input type="date" class="form-control" id="exampleInputBirthdate" aria-describedby="BirthdateHelp" />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="exampleInputCivil" class="form-label">Estado Civil</label>
                  <input type="text" class="form-control" id="exampleInputCivil" aria-describedby="CivilHelp" />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="exampleInputDirection" class="form-label">Dirección</label>
                  <input type="text" class="form-control" id="exampleInputDirection" aria-describedby="DirectionHelp" />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="exampleInputGender" class="form-label">Género</label>
                  <select class="form-select" id="exampleInputGender" aria-describedby="GenderHelp">
                    <option value="femenino">Femenino</option>
                    <option value="masculino">Masculino</option>
                  </select>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="exampleInputEps" class="form-label">EPS</label>
                  <select class="form-select" id="exampleInputEps" aria-describedby="EpsHelp">
                    <option value="compensar">Compensar</option>
                    <option value="sanitas">Sanitas</option>
                  </select>
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-12">
                  <label for="exampleInputMulticulturalism" class="form-label">Multiculturalismo</label>
                  <input type="text" class="form-control" id="exampleInputMulticulturalism"
                    aria-describedby="MulticulturalismHelp" />
                </div>
              </div>
             
              <div class="row">
                <div class="col-md-12 d-flex justify-content-center"> 
                  <button type="submit" class="btn btn-custom">Enviar <i class="ri-send-plane-fill"></i></button>
                </div>
              </div>

            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.btn-custom {
  background-color: var(--blue-color);
  color: #ffffff;
  padding: 1rem 4rem;
  font-size: 1.25rem;
}

.btn-custom:hover {
  background-color: var(----color-background);
  color: var(--blue-color);
  border: 2px solid var(--blue-color);
}
</style>
