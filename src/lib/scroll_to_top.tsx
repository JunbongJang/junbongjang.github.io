import React from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const location = useLocation()

  React.useEffect(() => {
    // runs on location, i.e. route, change

    window.scrollTo(0, 0);
    console.log('handle route change here', location)
  }, [location])

  return <React.Fragment></React.Fragment>;
}
