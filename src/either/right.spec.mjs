import chai from 'chai'
import Right from './right'

const should = chai.should()

describe('Right ::', function () {
    it('Should take one argument', function () {
        Right.length.should.equal(1)
    })

    it('Should return a new Right when mapped', function () {
        const a = Right('a')
        const b = a.map(x => x)

        b.should.be.an('object')
    })

    it('Should be mappable', function () {
        const a = Right('a')
        const b = a.map(() => 'b')

        b.map(x => {
            x.should.equal('b')

            return 'c'
        })
        .map(x => {
            x.should.equal('c')

            return 'd'
        })
    })

    it('Should be chainable', function () {
        const a = Right('a')

        should.exist(a.chain)
        a.chain.should.be.a('function')

        const b = a.chain(x => Right(x))

        b.should.be.an('object')
    })

    it('Should be foldable', function () {
        const a = Right('a')

        a.fold(() => {},
               x => {
                  x.should.equal('a')
              })
    })
})
