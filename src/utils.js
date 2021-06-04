export function delayPromise (ms) {
  console.log("delayPromise", this);
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve({code: 200, data: {name: 'test'}, success: true, message: null})
        : reject({code: 0, data: null, success: false, message: 'error'});
    }, ms)
  );
};

export const readFile = (filename, callback) =>
  setTimeout(() => {
    console.log("readFile", filename);
    callback(null, `${filename}的内容`);
  }, 1000);
