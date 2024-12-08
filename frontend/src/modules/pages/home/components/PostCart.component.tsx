import { useEffect, useState } from 'react';
import { CartsContainerVertical } from '../home.style';
import CartComponent from './cart.component';
import PresentPost from './presentPost.component';
import postService, { IPosts } from '../../../services/posts.service';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTER_KEYS } from '../../../const/app-keys.const';

const PostCartContainer = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [post, setPost] = useState<IPosts>();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResponse = await postService.getPosts();
        setPosts(postsResponse);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };

    const fetchPost = async () => {
      try {
        const postsResponse = await postService.getPost(Number(id));
        setPost(postsResponse);
      } catch (err) {
        navigate(`/${ROUTER_KEYS.auth}`);
      }
    };
    fetchPost();
    fetchPosts();
  }, [id, navigate]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: '1.68rem',
      }}
    >
      <div>
        {post && (
          <PresentPost title={post.name} body={post.body} email={post.email} />
        )}
      </div>
      <CartsContainerVertical>
        {posts[0] &&
          posts.map((post) => (
            <CartComponent
              body={post.body}
              id={post.id}
              name={post.email}
              key={post.id}
            />
          ))}
      </CartsContainerVertical>
    </div>
  );
};

export default PostCartContainer;
