import { useSyncExternalStore } from 'react';
import { subscribe, getSnapshot } from './color';

const Node = ({ number }) => {
  let startTime = performance.now();
  
  while (performance.now() - startTime < 250) {
    // Do nothing
  }
  
  
  // const color = useSyncExternalStore(subscribe, getSnapshot);
  const color = window.localStorage.getItem('color');
  console.log('rendering number: ', number, 'color: ', color);
  
  return (
    <div style={{ color }}>
      노드 #{number}
    </div>
  )
}

export default Node;