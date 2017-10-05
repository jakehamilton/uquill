import chai from 'chai'
import compose from './compose'

const should = chai.should()

describe('compose ::', function () {
    it('Should compose `n` functions', function () {
        const f = x => x + 1
        const g = x => x + 1

        const funcA = compose(f, g)
        const funcB = compose(f, g, f, g)

        funcA.should.be.a('function')
        funcB.should.be.a('function')
    })

    it('Should be associative', function () {
        const f = x => x / 2
        const g = x => x + 1
        const h = x => x + 2

        const funcA = compose(compose(f, g), h)
        const funcB = compose(f, compose(g, h))

        funcA(1).should.equal(2)
        funcB(1).should.equal(2)

        funcA(1).should.equal(funcB(1))
    })
})
