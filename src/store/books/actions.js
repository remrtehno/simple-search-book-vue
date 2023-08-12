export default {
    async loadBooks(context, payload) {

      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${payload.query}`
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
    }
  };
  