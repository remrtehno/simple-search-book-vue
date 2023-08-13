<template>
    <div>
        <h2>{{ book?.title }}</h2>
        <img :src="book?.thumb">
        <p>{{ book?.authors?.join(', ') }}</p>
        <div>{{ book?.description }}</div>
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