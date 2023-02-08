class CarService {
  static DefaultWorkingHours = {
    from: '9:00',
    till: '20:00',
    }
    
  constructor(name, workingHours) {
    this.name = name
    this.workingHours = workingHours || CarService.DefaultWorkingHours
  }

  repairCar(carName) {
    if (!carName) { //? почему ! не могу заменить на === false ?
      console.log('Вам необходимо указать название машины, чтобы ее отремонтировать')
      return
    }

    // const clientFrom = this.workingHours.from.split(':')[0]
    // const clientTill = this.workingHours.till.split(':')[0]
    const serviceFrom = CarService.DefaultWorkingHours.from.split(':')[0]
    const serviceTill = CarService.DefaultWorkingHours.till.split(':')[0]
    const now = new Date().getHours()
    console.log(now)
    console.log({serviceFrom, serviceTill})


    if (now < +serviceFrom) {
      console.log('К сожалению мы сейчас закрыты')
    } else if (now >= +serviceTill) {
      console.log('К сожалению мы сейчас закрыты')
    } else {
      console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`)
    }
  }
}

const carService = new CarService('RepairCarNow', { from: '8:00',
till: '20:00' });

carService.repairCar('BMW');


//
