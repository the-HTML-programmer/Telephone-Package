class Telephone {
    constructor() {
        this.phonenumbers = []
        this.observers = []



    }


    addPhoneNumber(number) {
        this.phonenumbers.push(number)
    }

    // removePhoneNumber(number) {
    //     this.phonenumbers = this.phonenumbers.filter(number => {
    //         if (number !== this.phonenumbers) {
    //             console.log(`Phone number ${number} not found.`);
    //         } else {
    //             this.phonenumbers = this.phonenumbers.filter(item => item !== number);

    //             console.log(`${number} removed successfully.`);
    //         }
    //     }
    //     )


    // }

    dialPhoneNumber(number) {
        if (this.phonenumbers.includes(number)) {
            console.log(`you are dailing ${number}`);
            this.notify(number);
        }
        else {
            console.log(`${number} this number does not exists`)

        }
    }



    subscribe(observer) {
        this.observers.push(observer);

    }
    unsubscribe(observer) {
        this.observers = this.observers.filter((obs => obs !== observer));

    }
    notify(number) {
        this.observers.forEach((observer) => observer.getNotification(number));
    }

}


class Observer {
    constructor(notificationFunction) {
        this.notificationFunction = notificationFunction;

    }
    getNotification(number) {
         this.notificationFunction(number);
    }
}



const myPhone = new Telephone();


const observer1 = new Observer(number => console.log(`Dialed Number: ${number}`));


const observer2 = new Observer(() => console.log("Now Dialling 2347023232"));


myPhone.subscribe(observer1);
myPhone.subscribe(observer2);


myPhone.addPhoneNumber("2347023232");
myPhone.dialPhoneNumber("2347023232");

// Output:
// 2347023232 added successfully.
// You are dialing 2347023232
// Dialed Number: 2347023232
// Now Dialling 2347023232