import { Posts } from '../../components/Posts/Posts';
import CounterProvider from '../../context/CounterProvider/CounterProvider';
import { PostsProvider } from '../../context/PostsProvider/Provider';
import './Styles.css';
function Home() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}
export default Home;
