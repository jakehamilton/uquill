import chai from 'chai'
import Maybe from './maybe'

const should = chai.should()

describe('Maybe ::', function () {
    it('Should exist', function () {
        should.exist(Maybe)
        Maybe.of.should.be.a('function')
    })

    it('Should have an `of` method', function () {
        should.exist(Maybe.of)
        Maybe.of.should.be.a('function')
    })
})
