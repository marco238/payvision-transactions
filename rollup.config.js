import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';

export default {
	input: ['index.js'],
	output: {
		file: 'build/index.js',
    format: 'es',
		sourcemap: true
	},
	plugins: [
		resolve(),
		babel(),
		serve({
      open: true,
			contentBase: `build`,
			historyApiFallback: true
    }),
		livereload(`build`),
		copy({
      targets: [
        { src: 'assets/images/*', dest: 'build/assets/images' }
      ]
    })
	]
};