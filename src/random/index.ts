export function genRandomId(len: number) {
  const letters = `abcdefghijklmnopqrstuvwxyz`;

  let result = "";
  for (let i = 0; i < len; i++) {
    let n = Math.floor(Math.random() * 26) % 26;
    result += letters[n];
  }

  return result;
}

export function isCrazyThursday() {
  const date: Date = new Date();
  if (date.getDay() === 4) {
    return "crazy";
  } else {
    return "sad";
  }
}

export class User {
  constructor(public id: string) {}

  fetchData(cb: (data: string) => void, delay: number) {
    setTimeout(() => {
      const data = `Data for user with id: ${this.id}`;
      cb(data);
    }, delay);
  }

  fetchDataV2(cb: (data: string) => void) {
    setTimeout(() => {
      const data = `Data for user with id: ${this.id}`;
      cb(data);
    }, 1000);
  }

  repeatCallId() {
    setInterval(() => {
      console.log(this.id);
    }, 1000);
  }

  resolveData() {
    return new Promise((resolve) => {
      resolve(this.id);
    });
  }

  resolveDataWithTimer() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.id);
      }, 1000);
    });
  }

  resoloveDataRepeat() {
    Promise.resolve()
      .then(() => {
        this.id = "2";
      })
      .then(() => {
        this.id = "3";
      });
  }
}
