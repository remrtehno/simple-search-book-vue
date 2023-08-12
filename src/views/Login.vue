<template>
  <div>
      <form>
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password"/>
        </div>
        <button>Login</button>
      </form>
      </div>
</template>



<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>