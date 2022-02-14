import { useEffect, useState } from 'react';

const LOCALSTORAGE_KEY = 'darkMode';

const useDark = () => {
	const [isDark, setIsDark] = useState(
		localStorage.getItem(LOCALSTORAGE_KEY) === 'true'
	);

	useEffect(() => {
		const dark = localStorage.getItem(LOCALSTORAGE_KEY) === 'true';
		const darkEnabled = document.body.classList.contains('dark');
		if (dark && !darkEnabled) {
			document.body.classList.add('dark');
			setIsDark(true);
		}
	}, []);

	const toggle = () => {
		setIsDark((s) => !s);
		localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(!isDark));
		document.body.classList.toggle('dark');
	};

	return { isDark, toggle };
};

export default useDark;
