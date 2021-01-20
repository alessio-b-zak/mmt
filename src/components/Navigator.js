import React from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import BurgerMenu from './BurgerMenu';

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
}


const Navigator = props => {
  const { width } = useViewport();
  const breakpoint = 600;
  return width < breakpoint ? <BurgerMenu/>  : <Sidebar>{props.children}</Sidebar> ;

}

export default Navigator
