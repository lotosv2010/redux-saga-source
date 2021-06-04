export function delayPromise (ms) {
  console.log("delayPromise", this);
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(1);
    }, ms)
  );
};

export const readFile = (filename, callback) =>
  setTimeout(() => {
    console.log("readFile", filename);
    callback(null, `${filename}的内容`);
  }, 1000);
