import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    'http://localhost:8000/blogs/' + id
  );

  return (
    <div className='blog-details'>
      {/* <h2>blog details - {id}</h2> */}
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
