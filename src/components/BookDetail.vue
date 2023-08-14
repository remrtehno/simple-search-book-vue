<template>
    <div>
        <h2 class="book-title">{{ book?.title }}</h2>
        <img class="book-image" :src="book?.thumb">
        <p class="book-author">{{ book?.authors?.join(', ') }}</p>
        <div class="book-desc">{{ book?.description }}</div>
    </div>
</template>
  
<script>
export default {
    props: ['id'],
    data() {
        return {
            book: {},
        };
    },
    async created() {
        await this.$store.dispatch('books/loadBook', { id: this.id });
        this.book = this.$store.getters['books/book'];

    },
};
</script>