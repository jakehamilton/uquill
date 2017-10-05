import chai from 'chai'

import uquill from './index'

import {
    compose,

    Either,
    Left,
    Right,

    Task
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

        // as default export
        should.exist(uquill)

        should.exist(uquill.compose)

        should.exist(uquill.Either)
        should.exist(uquill.Left)
        should.exist(uquill.Right)

        should.exist(uquill.Task)
    })
})
