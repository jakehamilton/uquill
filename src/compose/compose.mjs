const compose = (f, g) => (...args) => f(g(...args))

compose.all = (...fns) =>
    fns.reduce(compose)


export default compose
