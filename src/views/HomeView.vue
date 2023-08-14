<script setup lang="ts"></script>

<template>
  <main>
    <book-filter @changeQuery="setFilters"></book-filter>
    <book-list></book-list>
  </main>
</template>

<script>
export default {
  methods: {
    async setFilters(query) {
      await this.$store.dispatch('books/loadBooks', { query })
    }
  }
}
</script>
