<template>
    <div>
            <table v-if="booksState.length" cellpadding="15">
                <tr v-for="book in books" :key="book.id">
                    <td><img :src="book?.thumb" width="50" /></td>
                    <td>{{ book?.title }}</td>
                    <td>{{ book?.authors?.length && book.authors?.join(', ') }}</td>
                </tr>
            </table>
        <h3 v-else>No books found.</h3>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            booksState: [],
        }
    },
    created() {
        this.loadBooks();

    },
    methods: {
        async loadBooks() {
            try {
                await this.$store.dispatch('books/loadBooks');
            } catch (error) {
                this.error = 'Something went wrong!';
            }
        },
    },
    computed: {
        books() {
            return this.$store.getters['books/books'];

        }
    },
    watch: {
        books() {
            this.booksState = this.$store.getters['books/books'];
        }
    }
}
</script>
  
<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>