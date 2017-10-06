import chai from 'chai'
import curry from './curry'

const should = chai.should()

describe('curry ::', function () {
    it('Should work', function () {
        const f = (x, y) => x + y
        const g = curry(f)

        g(1)(1).should.equal(g(1, 1))
        g(1, 1).should.equal(2)
    })
})
