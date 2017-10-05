const compose = (...fns) => (...xs) =>
    fns.reverse()
        .reduce((x, f) => f(...[].concat(x)), xs)

export default compose
