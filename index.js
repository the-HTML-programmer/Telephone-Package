class Telephone {

    constructor (){
        this.phoneNumber = []
        this.observer =[]
    }
    AddPhoneNumber(number){
        this.phoneNumber.push(number)
    }

    RemovePhoneNumber(number){

        this.phoneNumber = this.phoneNumber.filter(item => item !== number)
      

    }

    DialPhoneNumber(number){
        if (this.phoneNumber.includes(number)) {
            console.log(`you are dailing ${number}`);
            this.NotifyObservers(number);        }
        else {
            console.log(` this number ${number} does not exists`)

        }
    }


    AddObserver(observer) {
      this.observer.push(observer);
    
    }

    RemoveObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    NotifyObservers(number) {
        this.observer.forEach(observer => observer(number));
    }
}


const tele = new Telephone();

//add observers
const observer1 = (number) => console.log(`Observer 1: Dialed ${number}`);
const observer2 = (number) => console.log(`Observer 2: Dialed ${number}`);
tele.AddObserver(observer1);
tele.AddObserver(observer2);

//add new numbers
tele.AddPhoneNumber(1234567890);
tele.AddPhoneNumber(987654321)
tele.AddPhoneNumber(5432167890)
tele.AddPhoneNumber(1122334455)
tele.AddPhoneNumber(6677889900)

//remove  numbers
tele.RemovePhoneNumber(6677889900)
tele.RemovePhoneNumber(987654321);

//dial a number
tele.DialPhoneNumber(1234567890);

// Removing a number and trying to dial it
tele.DialPhoneNumber(987654321);



