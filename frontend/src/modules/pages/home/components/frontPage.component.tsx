import { useEffect, useState } from 'react';
import { CartsContainer, HomeLogoContainer } from '../home.style';
import CartComponent from './cart.component';
import PresentPost from './presentPost.component';
import postService, { IPosts } from '../../../services/posts.service';
import StarIcon from '../../../../assets/icons/empty-star.icon.svg';

const FrontPageComponent = () => {
  const [posts, setPosts] = useState<IPosts[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResponse = await postService.getPosts();
        setPosts(postsResponse);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <HomeLogoContainer>
          <img src={StarIcon} alt="star" />
          <h1>Featured</h1>
        </HomeLogoContainer>

        {posts[0] && (
          <PresentPost
            title={'Global Climate Summit<br/> Urges Immediate Action'}
            body={
              'Leaders from around the world gathered for a global climate summit, emphasizing the urgent need for coordinated action to address climate change.'
            }
            email={'John Doe'}
          />
        )}
      </div>
      <CartsContainer>
        {posts[0] &&
          posts.map((post) => (
            <CartComponent
              body={post.body}
              id={post.id}
              name={post.email}
              key={post.id}
            />
          ))}
      </CartsContainer>
    </div>
  );
};

export default FrontPageComponent;
