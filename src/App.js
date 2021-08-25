import './App.css';
import ROUTES, { RenderRoutes } from './routes';

function App() {
  return (
    <div>
        <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
