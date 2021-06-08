import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useEffect, useState } from 'react';

import { InlineLinks, Layout, PostsList } from '../components';

function resolvePaginationText (page) {
  if (page === 10) {
    return 'Previous page';
  }

  if (page === 1) {
    return 'Next page';
  }

  return 'Previous page / Next Page';
}

export default function About () {
  const [posts, updatePosts] = useState([]);
  const [page, updatePage] = useState(1);

  useEffect(() => {
    function fetchPosts () {
      fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
        .then((response) => response.json())
        .then((response) => updatePosts(response));
    }

    fetchPosts();
  }, [page]);

  function handleClickNextPage () {
    updatePage(page + 1);
    window.scrollTo(0, 0);
  }

  function handleClickPreviousPage () {
    updatePage(page - 1);
    window.scrollTo(0, 0);
  }

  return (
    <Layout>
      <section style={{ marginBottom: '32px', marginTop: 20 }}>
        <h1 style={{ fontSize: '40px', marginBottom: '24px' }}>
          This is not a boring blog 🔖
        </h1>

        <p style={{ fontSize: '24px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non
          lorem placerat, pellentesque nunc quis, malesuada odio. Cras vel nisi
          tincidunt, interdum ipsum eget, molestie tortor.
        </p>
      </section>

      <PostsList posts={posts} />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <InlineLinks
          links={[
            { text: 'Home ', to: '/home' },
            { text: 'About', to: '/about' },
          ]}
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {page > 1 && (
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              type='button'
              onClick={handleClickPreviousPage}
            >
              <ArrowBackIcon />
            </button>
          )}
          <p style={{ margin: '0 8px' }}>{resolvePaginationText(page)}</p>
          {page !== 10 && (
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              type='button'
              onClick={handleClickNextPage}
            >
              <ArrowForwardIcon />
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
}
