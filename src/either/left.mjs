// Left :: a -> Left a
const Left = x => ({
    __type__: 'left',
    x,
    // map :: _ -> Left a
    map: () => Left(x),
    // chain :: _ -> Left a
    chain: () => Left(x),
    // fold :: (a -> b) -> (a -> c) -> b
    fold: (f, g) => f(x)
})

// Left.of :: a -> Left a
Left.of = x => Left(x)

export default Left
