import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

import { Layout } from '../components';
import { useEffect, useState } from 'react';

export default function About (props) {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    function fetchPosts () {
      fetch(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
        .then((response) => response.json())
        .then((response) => setPostData(response));
    }

    fetchPosts();
  });

  return (
    <Layout>
      <section style={{ marginBottom: '32px', position: 'relative' }}>
        <div style={{
          height: '400px',
          width: 'calc(100% + 100px)',
          backgroundSize: 'cover',
          background: `no-repeat center/100% url(https://picsum.photos/id/${postData.id}/800/600)`,
          marginBottom: 15,
          position: 'absolute',
          top: 0,
          left: -50,
        }} />
        <h1 style={{
          fontSize: '40px',
          marginBottom: '24px',
          paddingTop: 420,
          boxSizing: 'content-box',
        }}>
          {postData.title}
        </h1>
        <hr style={{
          marginBottom: 15,
          borderTop: '1px solid #DDDDDD',
          borderBottom: 0,
          borderRight: 0,
          borderLeft: 0,
        }} />
        <p style={{ fontSize: '24px' }}>{postData.body}</p>
      </section>
      <Link
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          cursor: 'pointer',
          color: 'black',
        }}
        to='/blog'
      >
        <ArrowBackIcon />
        <p style={{ marginLeft: '4px' }}>Back to blog</p>
      </Link>
    </Layout>
  );
}
