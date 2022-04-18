let realUrl = '';

export const HTTP = () => {
  let url;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    //   development
    return (url = 'http://localhost:5000');
  } else {
    // production code
    return (url = realUrl);
  }
};



