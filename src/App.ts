import { useEffect } from "react";
import Content from "./Content";
import Providers from "./Providers";

const useAppLoadingHide = () => {
	// Removing the app-loading element, this only runs once when the app starts
	useEffect(() => {
		const el = document.getElementById("app-loading");
		if (el) {
			el.classList.add("hide");
			setTimeout(() => el.remove(), 500);
		}
	}, []);
};

function App() {
	// Removing the app-loading element, this only runs once when the app starts
	useAppLoadingHide();
	return Providers(Content());
}

export default App;
