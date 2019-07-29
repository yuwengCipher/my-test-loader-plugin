class consolePlugin {
    constructor () {
    }
    apply (compiler) {
        compiler.plugin('emit', (compilation, callback) => {
            console.log(compilation);
            callback()
        })
    }
}
