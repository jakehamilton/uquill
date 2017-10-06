import chai from 'chai'
import Nothing from './nothing'

const should = chai.should()

describe('Nothing ::', function () {
    it('Should have a map method', function () {
        const nothing = Nothing()

        should.exist(nothing.map)
        nothing.map.should.be.a('function')
    })

    it('Should have an `of` method', function () {
        should.exist(Nothing.of)
        Nothing.of.should.be.a('function')
    })
})
