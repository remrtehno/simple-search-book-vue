<template>
  <div class="table-container">
    <div class="table-border">
      <table v-if="booksState.length" cellpadding="10">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Authors</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.id">
            <td><img :src="book?.thumb" width="50" /></td>
            <td>
              <RouterLink :to="`book/${book.id}`">
                {{ book?.title }}
              </RouterLink>
            </td>
            <td>{{ book?.authors?.length && book.authors?.join(', ') }}</td>
          </tr>
        </tbody>
      </table>

      <h3 v-else>No books found.</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      booksState: []
    }
  },
  created() {
    this.loadBooks()
  },
  methods: {
    async loadBooks() {
      try {
        await this.$store.dispatch('books/loadBooks')
      } catch (error) {
        this.error = 'Something went wrong!'
      }
    }
  },
  computed: {
    books() {
      return this.$store.getters['books/books']
    }
  },
  watch: {
    books() {
      this.booksState = this.$store.getters['books/books']
    }
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
}

table tr:not(:last-child) td {
  border-bottom: 1px solid rgba(111, 111, 111, 0.3);
}

table td:last-child,
table th:last-child {
  text-align: right;
}

table th {
  font-size: 0.875rem;
  font-weight: bold;
}

.table-container {
  display: flex;
  justify-content: center;
}

.table-border {
  border: 1px solid rgba(111, 111, 111, 0.3);
  padding: 1rem;
  border-radius: 0.5rem;
}

@media (max-width: 992px) {
  table thead {
    display: none;
  }

  table tr {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  table td:last-child,
  table th:last-child {
    text-align: center;
  }

  table tr:not(:last-child) td {
    border: 0;
  }
  table tr:not(:last-child) td:last-child {
    border-bottom: 1px solid rgba(111, 111, 111, 0.3);
  }
}
</style>
