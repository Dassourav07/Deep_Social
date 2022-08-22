module.exports = {
    resolve:{
        fallback:{"progress ": require.resolve("process/browser")},
    },
}