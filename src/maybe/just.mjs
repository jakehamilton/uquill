// Just :: a -> Just a
const Just = x => ({
    __type__: 'just',
    x,
    // ap :: Maybe a -> Maybe b
    ap: j => j.map(x),
    // map :: (a -> b) -> Just b
    map: f => Just(f(x))
})

// Just :: a -> Just a
Just.of = x => Just(x)

export default Just
