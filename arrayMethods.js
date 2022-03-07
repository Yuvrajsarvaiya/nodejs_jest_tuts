function forEach(array, callback) {
  if (!Array.isArray(array)) {
    throw new Error("Only arrays are allowed");
  }

  for (let index = 0; index < array.length; index++) {
    callback(array[index]);
  }
}

function map(array, callback) {
  if (typeof array !== "object" || !Array.isArray(array)) {
    throw new Error("only arrays are allowed");
  }

  if (typeof callback !== "function") {
    throw new Error("callback must be function");
  }

  const output = [];
  for (let index = 0; index < array.length; index++) {
    output.push(callback(array[index], index, array));
  }
  return output;
}

module.exports = { forEach, map };
