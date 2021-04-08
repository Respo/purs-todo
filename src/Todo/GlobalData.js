var onceData = {};

// tell webpack to handle this piece of data during reloading
// if (module.hot) {
//   module.hot.dispose((data) => {
//     data.onceData = onceData;
//     console.log("disposing", data);
//   });

//   if (module.hot.data) {
//     console.log("interal:", module.hot.data.onceData);
//     let previousData = module.hot.data.onceData;
//     if (previousData != null) {
//       onceData = previousData;
//     }
//   }
// }

exports.globalOnceImpl = (name) => (a) => {
  console.log("calling with:", a, onceData[name]);
  if (onceData[name] == null) {
    onceData[name] = a;
  }

  return onceData[name];
};
