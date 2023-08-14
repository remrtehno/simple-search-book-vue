<template>
    <div>
      <h2>Find Your Book</h2>
      <label>
        <input :value="query" @input.trim="setQuery"  />
      </label>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: ''
      };
    },
    methods: {
     
      setQuery(event) {
        const value = event.target.value;
        this.value = value
        this.$emit('change-query', value);
      }
    }
  }
  </script>
  
  <style scoped>
  h2 {
    margin: 0.5rem 0;
    text-align: center;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  input {
    height: 2rem;
    padding: 0.375rem 0.75rem;
    font-weight: bold;
    border-radius: 0.25rem;
    width: 20rem;
    font-size: .9375rem
  }

  label {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }



  </style>