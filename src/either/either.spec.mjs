import chai from 'chai'
import Either from './either'

const should = chai.should()

describe('Either ::', function () {
    it('Take one argument', function () {
        Either.length.should.equal(1)
    })

    describe('try ::', function () {
        it('Should return a Right or Left based on error', function () {
            const error = new Error('failure')

            function f (shouldError) {
                if (shouldError) throw error

                return 'success'
            }

            Either.try(() => f(true))
                .fold(x => x.should.equal(error))

            Either.try(() => f(false))
                .map(x => x.should.equal('success'))
        })
    })

    describe('of ::', function () {
        it('Should exist', function () {
            should.exist(Either.of)
        })

        it('Should return a Right', function () {
            const either = Either.of('a')

            either.map(x => {
                x.should.equal('a')

                return 'b'
            })
            .map(x => {
                x.should.equal('b')
            })
        })
    })
})
