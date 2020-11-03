class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (!id) {
            throw new Error ('Параметр id не передан');
        }
        const inCollection = this.alarmCollection.find(item => item.id === id);
        if (inCollection) {
            return console.error('Такой звонок уже существует');
        }
        this.alarmCollection.push({id: id, time: time, callback: callback});
    }
    removeClock(id) {
        const inCollection = this.alarmCollection.find(item => item.id === id);
        if (inCollection) {
            this.alarmCollection = this.alarmCollection.filter(item => item.id != id);
            return true;
        }
        return false;
    }
    getCurrentFormattedTime() {
        const date = new Date();
        const checkTime = (t) => {return t < 10 ? '0' + t : t};
        const hours = checkTime(date.getHours());
        const minutes = checkTime(date.getMinutes());
        return `${hours}:${minutes}`;
    }
    start() {
        const checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback();
            }
        }
        if (!this.timerId) {
            const checkTimer = () => this.alarmCollection.forEach(item => checkClock(item));
            this.timerId = setInterval(checkTimer, 500);
        }

    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(item => console.log(`Идентификатор звонка: ${item.id} \nВремя:${item.time}`))
    }
    clearAlarms() {
        clearInterval(this.timerId);
        this.alarmCollection = [];
    }
}

function testCase() {
    let phoneAlarm = new AlarmClock();
    phoneAlarm.addClock("20:50", () => console.log('Пора вставать'), 1);
    phoneAlarm.addClock("20:51", () => {console.log('Давно пора вставать!'); phoneAlarm.removeClock(2)}, 2);
    phoneAlarm.addClock("20:51", () => console.log('Иди умываться!'));
    phoneAlarm.addClock("20:52", () => {
        console.log('Вставай, а то проспишь!');
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);
    phoneAlarm.addClock("20:53", () => console.log('Пора вставать'), 1);
    phoneAlarm.printAlarms();
    phoneAlarm.start();
}
testCase();