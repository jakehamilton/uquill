const curry = f => (...args) =>
    args.length >= f.length
        ? f(...args)
        : curry(f.bind(f, ...args))

export default curry
