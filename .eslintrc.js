module.exports = {
    root: true,
    env: {
        node: true,
        es6: true
    },
    extends: [
        'prettier'
    ],
    plugins: [
        'prettier'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'prettier/prettier': 'error'
    }
}
