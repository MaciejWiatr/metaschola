import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from 'twin.macro';
import { LoginPage } from '$features/auth';
import { HomePage } from '$features/home';
import { AnnouncementsPage, MemawkaPage, SpottedPage } from '$features/school';
import { ClassSchedulePage } from '$features/class';

const App = () => (
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/school/memawka" element={<MemawkaPage />} />
				<Route path="/school/spotted" element={<SpottedPage />} />
				<Route
					path="/school/announcement"
					element={<AnnouncementsPage />}
				/>
				<Route path="/class/schedule" element={<ClassSchedulePage />} />
				<Route path="*" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
		<GlobalStyles />
	</React.StrictMode>
);

export default App;
