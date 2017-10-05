const Right = x => ({
    map: f => Right(f(x)),
    chain: f => f(x),
    fold: (f, g) => g(x)
})

Right.of = x => Right(x)

export default Right
