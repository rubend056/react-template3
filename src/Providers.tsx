import Notifications from "@common/atoms/Notifications";
import ThemeProvider from "@common/atoms/Theme";
import { HashRouter as Router } from "react-router-dom";

function Providers(children) {
	return (
		<ThemeProvider>
			<Notifications>
				<Router>{children}</Router>
			</Notifications>
		</ThemeProvider>
	);
}
export default Providers;
