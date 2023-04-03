import { useContext, useEffect, useRef } from 'react';
import { loadPosts } from '../../context/PostsProvider/actions';
import { PostsContext } from '../../context/PostsProvider/context';
import { CounterContext } from '../../context/CounterProvider/context';
import { decrementCounter, incrementCounter } from '../../context/CounterProvider/action';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });
    return () => {
      isMounted.current = false;
      console.log(isMounted.current);
    };
  }, [postsDispatch]);

  return (
    <div>
      <h1>Contador:{counterState.counter}</h1>
      <button onClick={() => incrementCounter(counterDispatch)}>+</button>
      <button onClick={() => decrementCounter(counterDispatch)}>-</button>
      <h1>POSTS</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando posts...</strong>
        </p>
      )}

      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
};
