import chai from 'chai'
import Just from './just'

const should = chai.should()

describe('Just ::', function () {
    it('Should support `of`', function () {
        should.exist(Just.of)
        Just.of.should.be.a('function')
    })

    it('Should hold its value', function () {
        should.exist(Just(2).x)
    })

    it('Should be mappable', function () {
        const just = Just(2)

        should.exist(just.map)
        just.map.should.be.a('function')

        just.map(x => {
            x.should.equal(2)
        })
    })

    it('Should be appable', function () {
        const a = Just(1)
        const b = Just(1)
        
        const add = x => y => x + y

        const c = Just.of(add)
            .ap(a)
            .ap(b)

        should.exist(c)
        should.exist(c.x)
        c.x.should.equal(2)
    })
})
