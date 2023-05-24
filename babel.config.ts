module.exports = function (api: any) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: ["react-native-reanimated/plugin"], // .> reanimated should be liisted last
	};
};
