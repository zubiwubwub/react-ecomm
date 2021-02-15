import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // tells Apollo we will take care of the sort
    read(existing = [], { args, cache }) {
      const { skip, first } = args;

      // Read the number of items on the page from the cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // Check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x);
      // if there are items
      // and there arent enough items to satifsy how many we requested
      // and we are on the last page
      // THEN JUST SEND IT
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      if (items.length !== first) {
        // We dont have any items, we must go to netweork to fetch them
        return false;
      }

      // If there are items, return them from cache

      if (items.length) {
        return items;
      }

      return false;
      // Asks the read function for the items
      // Return items because they are already in cache
      // OR/AND return FALSE to cause a network request
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      // this will run when Apollo comes back with our products from network
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      return merged;
    },
  };
}
