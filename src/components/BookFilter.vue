<template>
    <div>
      <h2>Find Your Book</h2>
      <input :value="query" @change="setQuery" />
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
  }
  
  .filter-option {
    margin-right: 1rem;
  }
  
  .filter-option label,
  .filter-option input {
    vertical-align: middle;
  }
  
  .filter-option label {
    margin-left: 0.25rem;
  }
  
  .filter-option.active label {
    font-weight: bold;
  }
  </style>