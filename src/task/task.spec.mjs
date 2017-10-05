import chai from 'chai'
import Task from './task'

const should = chai.should()

describe('Task ::', function () {
    it('Should work', function () {
        const taskOfFour = Task((reject, result) => result(4))
        const taskOfError = Task((reject, result) => reject(1))

        taskOfFour.fork(
            () => {},
            four => four.should.equal(4)
        )

        taskOfError.fork(
            one => one.should.equal(1),
            () => {}
        )
    })

    it('Should be mappable', function () {
        const taskOfFour = Task((reject, result) => result(4))

        const taskOfSix = taskOfFour.map(x => x + 2)

        taskOfSix.should.be.an('object')

        taskOfSix.fork(
            () => {},
            six => six.should.equal(6)
        )
    })
})
