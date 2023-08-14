<template>
    <div>
        <h2 class="book-title">{{ book?.title }}</h2>
        <div class="book-authors">
            <i class="book-author">{{ book?.authors?.join(', ') }}</i>
        </div>
        <div class="book-description">
            <img class="book-image" :src="book?.thumb">
            <div class="book-desc">{{ book?.description }}</div>
        </div>
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

<style lang="scss">
h2 {
    text-align: center;
    margin-bottom: 1rem;
    font-weight: bold;
}

.book-authors {
    text-align: right;
    font-size: 0.8rem;
    margin-bottom: 1rem;
}

.book-description {
    .book-image {
        float: left;
        margin: 0 1.5rem 1rem 0;
    }

    .book-desc {
        font-size: 0.9375rem;
    }
}


@media (max-width: 992px) {
    .book-description {
        display: flex;
        flex-direction: column;
        align-items: center;
        .book-image {
            float: unset;
        }
    }
    .book-authors {
        text-align: center;
    }
}
</style>