const presets = [];

if (process.env["NODE_ENV"] === "test") {
	presets.push(['@babel/preset-env', {targets: {node: 'current'}}]);
}
presets.push('@babel/preset-react');

module.exports = { presets };
