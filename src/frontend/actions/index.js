/**
 * selectBook is an action creator
 *
 * @param book
 * @return {{ type: *, payload: object }}
 */
export function selectBook(book) {
  console.log(book);
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}