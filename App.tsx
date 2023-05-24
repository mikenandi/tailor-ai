import React from "react";
import {LogBox} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {store} from "./src/Redux";
import {Provider} from "react-redux";
import Navigation from "./src/Navigation";

LogBox.ignoreAllLogs();

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Navigation />
			</NavigationContainer>
		</Provider>
	);
};

export default App;
