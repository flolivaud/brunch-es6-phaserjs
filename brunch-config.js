exports.config = {
    paths: {
        watched: [
            'app'
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
        assets: /static[\\/]/,
        ignored: /components[\\/]/
    },
    modules: {
        wrapper: false,
        definition: false
    }
};