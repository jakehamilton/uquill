import compose from '../compose/compose'

// Task :: (a -> b) -> Task (a -> b)
const Task = (f, transformations = []) => ({
    // chain :: (b -> c) -> c
    chain: g => g(f()),
    // map :: (b -> c) -> Task (a -> b -> c)
    map: g => Task(f, [g, ...transformations]),
    // fork :: (Error -> State) -> (a -> b) -> Task b
    fork: (failure, success) =>
        // @TODO: Improve this
        Task.of(
            f(failure, compose.all(success, ...transformations))
        )
})

// Task.of :: a -> Task a
Task.of = x => Task(() => x)

export default Task
