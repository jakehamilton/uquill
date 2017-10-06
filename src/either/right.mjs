// Right :: a -> Right a
const Right = x => ({
    __type__: 'right',
    x,
    // map :: (a -> b) -> Right b
    map: f => Right(f(x)),
    // map :: (a -> b) -> b
    chain: f => f(x),
    // fold :: (a -> b) -> (c -> d) -> d
    fold: (f, g) => g(x)
})

// Right.of :: a -> Right a
Right.of = x => Right(x)

export default Right
