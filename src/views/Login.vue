<template>
  <div>
    <div v-if="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </div>
    <div class="loader" v-if="isLoading" title="Authenticating...">
      <img width="100" src="https://i.gifer.com/ZKZg.gif" alt="">
    </div>

    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async submitForm() {
      this.isLoading = true;

      const actionPayload = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch('login', actionPayload);

        this.$router.replace('/');
      } catch (err) {
        this.error = 'Failed to authenticate, try later.';
      }

      this.isLoading = false;
    },

  },
};
</script>

<style scoped>
.loader {
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
}

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