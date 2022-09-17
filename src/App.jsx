import { Routes, Route } from 'react-router-dom';
import './App.scss';
import ItemPage from './pages/itemPage';
import ListPage from './pages/listPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<ListPage />} />
			<Route path='/item/:id' element={<ItemPage />} />
		</Routes>
	);
}

export default App;
