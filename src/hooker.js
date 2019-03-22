import {useEffect} from 'react';

// updateDocumentTitle name is bad the custom hook name should start with "use"
export const useDocumentTittle = title => {
  useEffect(() => {
    document.title = `Selected - ${title}`;
  }, [title]);
};

export const useLogger = (...args) => {
  useEffect(() => {
    // eslint-disable-next-line
    console.log('logger', ...args);
  });
};
