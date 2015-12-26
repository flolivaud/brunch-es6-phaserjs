exports.config = {
    path: {
        watched: [
            'src'
        ]
    },
    files: {
        javascripts: {
            joinTo: 'js/main.js',
            order: {
                before: [''],
                after: ['app/src/main.es6']
            }
        }
    },
    plugins: {
        babel: {
            pattern: /\.(es6|jsx)$/
        }
    },
    conventions: {
        assets: /static[\\/]/
    }
};