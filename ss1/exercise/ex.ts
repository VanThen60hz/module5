// const arr = [1, 7, 3, 9, 2, 6];

// // 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu.

// const kq1 = arr.filter((item) => item > 5);
// console.log("kq1: ", kq1);

// // 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.

// const kq2 = arr.reduce((acc, cur) => acc + cur, 0);
// console.log("kq2: ", kq2);

// // 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy".

// const kq3 = (arr: number[], V: number) =>
//   arr.includes(V) ? V : "Không tìm thấy";
// console.log("kq3: ", kq3(arr, 77));

// // 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không?.

// const kq4 = (arr: number[]) => arr.every((item) => item > 0);
// console.log("kq4: ", kq4(arr));

// // 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.

// const kq5 = (arr: number[]) => arr.find((item) => item > 3);
// console.log("kq5: ", kq5(arr));

// // 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".

// const [first, ...rest] = arr;
// console.log("kq6: biến đầu tiên: " + first + " ,biến thứ 2: " + rest);

// // 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".

// const people: { name: string; age: number }[] = [
//   { name: "John", age: 17 },
//   { name: "Anna", age: 18 },
//   { name: "Julie", age: 19 },
// ];

// const [{ name: personName, age: personAge }] = people;
// console.log("kq7: ", personName, personAge);

// // 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.

// const kq8 = (...num: number[]) =>
//   num.reduce((acc: number, current: number) => acc + current, 0);
// console.log("kq8: ", kq8(1, 2, 3, 4, 5, 6, 7, 8));

// // 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.

// const kq9 = (...names: string[]) => `Welcome, ${names.join(", ")}`;
// console.log("kq9: ", kq9("Phương", "Hải", "Chánh", "Quốc"));

// // 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals.

// // Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.

// const book = {
//   title: "Nó không phải bug mà là tính năng",
//   author: "nguyễn Văn Thắng",
//   pages: 256,
//   displayInfo(): void {
//     console.log(`Title: ${this.title}, Author: ${this.author}, `);
//   },
// };

// book.displayInfo();

let x = 0;
async function r5() {
  x += 1;
  console.log(x);
  return 5;
}
(async () => {
  x += await r5();
  console.log(x);
})();
