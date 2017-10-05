import Left from './left'
import Right from './right'

// Either :: a -> Right a
const Either = x => Right(x)

// Either.try :: (a -> b) -> Either (Left Error) (Right b)
Either.try = f => {
    try {
        return Right(f())
    } catch (error) {
        return Left(error)
    }
}

// Either.of :: a -> Right a
Either.of = x => Right(x)

export default Either
