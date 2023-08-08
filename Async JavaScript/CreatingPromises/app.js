const fakeRequest = (url) => {
  new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("Your fake data here");
      } else {
        reject("Request Error!");
      }
    }, 1000);
  });
};

fakeRequest("/dogs/1")
  .then((data) => {
    console.log("Done With Request!");
    console.log("data is", data);
    return fakeRequest();
  })
  .catch((err) => {
    console.log("Oh no! ", err);
  });

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = newColor;
//       doNext && doNext();
//     }, delay);
//   };
//   delayedColorChange("red", 1000, () => {
//     delayedColorChange("orange", 1000, () => {
//       delayedColorChange("yellow", 1000, () => {
//         delayedColorChange("green", 1000, () => {
//           delayedColorChange("blue", 1000, () => {});
//         });
//       });
//     });
//   });

const delayedColorChange = (newColor, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      resolve();
    }, delay);
  });
};

delayedColorChange("red", 1000)
  .then((data) =>  delayedColorChange("orange", 1000))
  .then(() =>  delayedColorChange("yellow", 1000))
  .then(() => delayedColorChange("green", 1000))
  .then(() =>  delayedColorChange("blue", 1000))
  .then(() =>  delayedColorChange("indigo", 1000))
  .then(() =>  delayedColorChange("violet", 1000))
  .catch(() => {});
