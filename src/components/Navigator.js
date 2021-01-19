import React from 'react'
import Sidebar from './Sidebar'

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


const Navigator = () => {
  const { width } = useViewport();
  const breakpoint = 600;
  return width < breakpoint ? <div>hello</div>  : <Sidebar>hello</Sidebar> ;

}

export default Navigator
