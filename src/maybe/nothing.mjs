// Nothing :: _ -> Nothing
const Nothing = () => ({
    __type__: 'nothing',
    x: null,
    // ap :: Maybe a -> Nothing
    ap: n => Nothing(),
    // map :: (a -> b) -> Nothing
    map: f => Nothing()
})

// Nothing :: _ -> Nothing
Nothing.of = () => Nothing()

export default Nothing
