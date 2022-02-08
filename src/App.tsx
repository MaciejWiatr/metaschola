import * as React from "react";
import { LoginPage } from "$features/auth";
import { HomePage } from "$features/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "twin.macro";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</BrowserRouter>
			<GlobalStyles />
		</>
	);
}

export default App;
