class Key {
    private signature: number
    constructor() {
        this.signature = Math.floor(Math.random() * 10000) + Date.now()
    }

    public getSignature(): number {
        return this.signature
    }
}

class Person {
    private key: Key
    constructor(key: Key) {
        this.key = key
    }
    public getKey(): Key {
        return this.key
    }
}

abstract class House {
    protected door: boolean = false
    protected key: Key
    protected tenants: Person[] = []

    public comeIn(person: Person):void {
        if(this.door) this.tenants.push(person)
    }
    
    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    constructor(key: Key) {
        super()
        this.key = key
    }

    public openDoor(key: Key) {
        if(key.getSignature() === this.key.getSignature()) this.door = true
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};