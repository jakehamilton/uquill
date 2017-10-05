import chai from 'chai'
import Left from './left'

const should = chai.should()

describe('Left ::', function () {
    it('Should take one argument', function () {
        Left.length.should.equal(1)
    })

    it('Should return a new Left when mapped', function () {
        const a = Left('a')
        const b = a.map(x => x)

        b.should.be.an('object')
    })

    it('Should hold the same value when mapped', function () {
        const a = Left('a')
        const b = a.map(() => 'b')

        b.map(x => {
            x.should.equal('a')

            return x
        })
    })

    it('Should be chainable', function () {
        const a = Left('a')

        should.exist(a.chain)
        a.chain.should.be.a('function')

        const b = a.chain(x => Left(x))

        b.should.be.an('object')
    })

    it('Should be foldable', function () {
        const a = Left('a')

        a.fold(x => {
            x.should.equal('a')
        })
    })
})
