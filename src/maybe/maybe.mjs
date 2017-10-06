import Just from './just'
import Nothing from './nothing'

// Maybe :: a -> Maybe a
const Maybe = x =>
    x == null
        ? Nothing
        : Just(x)

// Maybe.of :: a -> Just a
Maybe.of = x => Just(x)

export default Maybe
