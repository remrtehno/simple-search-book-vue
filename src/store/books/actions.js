export default {
    async loadBooks(context, payload) {

      if(!payload?.query) {
        context.commit('setBooks', []);
        return;
      }

      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${payload?.query}`
      );
      const responseData = await response.json();
  
      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch!');
        throw error;
      }

      const books = [];
  
      for (const {volumeInfo, id}  of responseData?.items) {
        const book = {
          id,
          title: volumeInfo?.title,
          authors: volumeInfo?.authors,
          thumb: volumeInfo?.imageLinks?.smallThumbnail
        };
        books.push(book);
      }
  
      context.commit('setBooks', books);
    },

    async loadBook(context, payload) {
      if(!payload?.id) {
        context.commit('setBook', []);
        return;
      }

      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${payload?.id}`
      );
      const responseData = await response.json();
  
      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch!');
        throw error;
      }
  
      const {volumeInfo, id} = responseData;
      context.commit('setBook', {
        id,
        title: volumeInfo?.title,
        authors: volumeInfo?.authors,
        thumb: volumeInfo?.imageLinks?.smallThumbnail,
        description: volumeInfo?.description
      });
    }
  };
  