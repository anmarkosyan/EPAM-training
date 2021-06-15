'use strict';
//======================== 🔴 Lecture part ===========================

//======================= 🔴 Coding challenges ======================
//1️⃣
/*
* Create Device class, which following properties should be initialized via constructor:
ramSize: number
storageSize: number
brightness: number
power: boolean
volume: number
isWaterProof: boolean
* 
turnOff method, which sets power to false
turnOn method, which sets power to false
volumeUp method
volumeDown method
*
Create child Smartphone class which extends from Device. It has the following properties
callHistory: by default empty array
call method, which accepts number parameter, and adds to callHistory following
 object: { number, callTime }
*
Create child Laptop class which extends from Device. It has the following properties
os: string, should be initialized via constructor
hasTouchScreen: boolean, should be initialized via constructor
litClose method, which should set power to 0, and brightness to 0 as well, in case of os is 'MAC'
* */
class Device {
  constructor(ramSize, storageSize, brightness, power, volume, isWaterProof) {
    this.ramSize = ramSize;
    this.storageSize = storageSize;
    this.brightness = brightness;
    this.power = power;
    this.volume = volume;
    this.isWaterProof = !!isWaterProof;
  }

  turnOff() {
    this.power = false;
  }

  turnOn() {
    this.power = false;
  }

  volumeUp() {}

  volumeDown() {}
}

class SmartPhone extends Device {
  constructor(ramSize, storageSize, brightness, power, volume, isWaterProof, callHistory = []) {
    super(ramSize, storageSize, brightness, power, volume, isWaterProof);
    this.callHistory = callHistory;
  }

  call(num) {
    const numStr = num.toString();
    const currTime = new Date();
    const hour = `${currTime.getHours()}`.padStart(2, '0');
    const minute = `${currTime.getMinutes()}`.padStart(2, '0');
    return this.callHistory.push({ number: `(+${numStr.slice(0, 3)}) ${numStr.slice(3)}`, callTime: `${hour}:${minute}` });
  }
}

class Laptop extends Device {
  constructor(ramSize, storageSize, brightness, power, volume, isWaterProof, os, hasTouchScreen) {
    super(ramSize, storageSize, brightness, power, volume, isWaterProof);
    this.os = os;
    this.hasTouchScreen = hasTouchScreen;
  }

  litClose() {
    if (this.os === 'MAC') {
      this.power = 0;
      this.brightness = 0;
    } else {
      this.turnOff();
    }
  }
}

const macBook = new Laptop(2, 8, 10, true, 10.13, true, 'MAC', true);
const huawei = new SmartPhone(3, 6, 12, true, 3, false);
macBook.litClose();
console.log(macBook.power);

huawei.call(37455000000);
huawei.call(37499887766);
console.log(huawei.callHistory);
