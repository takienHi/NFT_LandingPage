import useRouteElements from './useRouteElements';

import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

function App() {
  const routeElements = useRouteElements();
  return <div>{routeElements}</div>;
}

export default App;
