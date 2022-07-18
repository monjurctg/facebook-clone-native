import { Provider } from "react-redux";
import RootNavigator from "./RootNavigator";
// import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
	return (
		<Provider store={store()}>
			<RootNavigator />
		</Provider>
	);
}
