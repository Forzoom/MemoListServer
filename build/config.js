const typescript = require('rollup-typescript');

module.exports = exports = [
    // {
    //     input: './src/index.ts',
    //     output: {
    //         file: './dist/models.esm.js',
    //         format: 'es',
    //     },
    //     plugins: [
    //         typescript(),
    //     ],
    // },
    {
        input: './src/index.ts',
        output: {
            file: './dist/models.cjs.js',
            format: 'cjs',
        },
        plugins: [
            typescript(),
        ],
    },
    // {
    //     input: './src/index.ts',
    //     output: {
    //         file: './dist/models.js',
    //         name: 'Schema',
    //         format: 'umd',
    //     },
    //     plugins: [
    //         typescript(),
    //     ],
    // },
];