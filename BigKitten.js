class BigKitten {
    constructor(tail, head, noise) {
        if (typeof tail == 'boolean') {
            this.tail = tail
        }
        this.head = head
        this.noise = noise
        this.legs = 4
    }
    makeNoise() {
     console.log(this.noise)
    }
    get getLegs() {
        return this.legs
    }
    set setLegs(numLeg) {
        this.legs = numLeg
    }
}

module.exports = BigKitten