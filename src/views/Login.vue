<template>
  <div class="login-form-container">
    <div class="error" v-if="!!error" title="An error occurred">
      <p>{{ error }}</p>
    </div>
    <div class="loader" v-if="isLoading" title="Authenticating...">
      <img width="100" src="https://i.gifer.com/ZKZg.gif" alt="">
    </div>

    <form @submit.prevent="submitForm" v-if="!isAuthenticated">
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

    <div class="success" v-else>You're already authenticated <button class="logout" @click="logout">Log out?</button>
    </div>

    <p class="warning" v-if="!formIsValid">Please enter a valid email and password (must be at least 16 characters long).
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";


export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
      error: null,
      formIsValid: true,
    };
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      this.error = null;

      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.password.length < 16 ||
        !/[A-Za-z]/.test(this.password)
      ) {
        this.formIsValid = false;
        return;
      }

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
    logout() {
      this.$store.dispatch('logout');

      this.$router.replace('/');
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
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
  width: 20rem;
  text-align: center;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  text-align: left;
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

.login-form-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.form-control {
  margin-bottom: 1rem;

}

button[type="submit"] {
  padding: 0.5rem 1.5rem;
  background: #28a1d5;
  border-radius: 0.25rem;
  border: 0;
}

.warning {
  padding: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  color: #664d03;
  background-color: #ffe69c;
  border-radius: 0.5rem;

}

.error {
  padding: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  color: #ffffff;
  background-color: #ed3535;
  border-radius: 0.5rem;
}

.success {
  padding: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  color: #ffffff;
  background-color: #268c3e;
  border-radius: 0.5rem;
}

.logout {
  border: 0;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  border-radius: 0.5rem;
  font-weight: 900;
  color: white;
  background: #1e552b;
}
</style>