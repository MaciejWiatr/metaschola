import { HomePage } from "$features/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useDarkMode from "use-dark-mode";

function App() {
	const darkMode = useDarkMode(false);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
