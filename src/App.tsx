import useRouteElements from './useRouteElements';

import './global.css';
import './styles/myStyle.css';
function App() {
  const routeElements = useRouteElements();
  return <>{routeElements}</>;
}

export default App;
