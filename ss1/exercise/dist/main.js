let money = 10000;
const buyCar = (car) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 1000) {
                resolve("can buy " + car);
            }
            else {
                reject("Do not enough money");
            }
        }, 2000);
    });
};
money = 1000001;
const promise = buyCar("VinFast")
    .then((value) => {
    console.log(value);
})
    .catch((err) => {
    console.log(err);
});
//# sourceMappingURL=main.js.map