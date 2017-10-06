import chai from 'chai'

import uquill from './index'

import {
    compose,

    Either,
    Left,
    Right,

    Task,

    Just,
    Nothing,
    Maybe
} from './index'

const should = chai.should()

describe('uquill ::', function () {
    it('Should export all modules', function () {
        // as named exports
        should.exist(compose)

        should.exist(Either)
        should.exist(Left)
        should.exist(Right)

        should.exist(Task)

        should.exist(Just)
        should.exist(Nothing)
        should.exist(Maybe)

        // as default export
        should.exist(uquill)

        should.exist(uquill.compose)

        should.exist(uquill.Either)
        should.exist(uquill.Left)
        should.exist(uquill.Right)

        should.exist(uquill.Task)

        should.exist(uquill.Just)
        should.exist(uquill.Nothing)
        should.exist(uquill.Maybe)
    })
})
