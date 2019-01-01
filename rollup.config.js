import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';
import run from 'rollup-plugin-run';
import serve from 'rollup-plugin-serve';
import scss from 'rollup-plugin-scss'


const production = !process.env.ROLLUP_WATCH;
const devServer = process.env.DEV_SERVER;

const devServerOptions = {
	headers: {
    'Access-Control-Allow-Origin': '*',
	},
	contentBase: ['public', 'dist'],
}

const scssOptions = {
	output: './dist/assets/figma-plugin-boilerplate.css',
};

export default [
	// browser-friendly UMD build
	{
		input: 'src/index.js',
		output: {
			name: 'figma-plugin-boilterplate',
			file: 'dist/figma-plugin-boilerplate.js',
			format: 'umd'
		},
		plugins: [
			resolve(),
      babel({runtimeHelpers: true,}),
      cjs(),
			production && uglify(), // minify, but only in production,
			!production && !devServer && run(), // when in dev mode, run the js bundle to see output
			devServer && serve(devServerOptions), // when in dev mode, run the js bundle to see output
			scss(scssOptions)
    ],
	},
];