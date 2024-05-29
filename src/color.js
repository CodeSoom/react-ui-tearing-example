let listeners = [];

export const subscribe = (listener) => {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter(l => l !== listener);
  };
}

export const getSnapshot = () => {
  return window.localStorage.getItem('color');
}

const emit = () => {
  for (let listener of listeners) {
    listener();
  }
}

export const changeColor = () => {
  if (window.localStorage.getItem('color') === 'blue') {
    window.localStorage.setItem('color', 'orange');
  } else {
    window.localStorage.setItem('color', 'blue');
  }

  emit();
}
