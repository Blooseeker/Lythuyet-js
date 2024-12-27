// 32.1 JavaScript Array Tutorial -Mảng trong JavaScript
// https://www.youtube.com/watch?v=ZE0ivUkwybg
// Khai báo mảng rỗng
// let arr1 = [];
// console.log(arr1);
// // tạo mảng có sẵn các phần tử
// let arr2 = [1, 2, 3, 4, 5, "sdfds", true, [1, 2, 3]];
// console.log(arr2);
// // khai báo mảng rỗng sử dụng Array constructor
// let arr3 = new Array();
// console.log(arr3);
// // tạo có sẵn phần tử bên trong
// let arr4 = new Array(1, 2, 3, 4, "nam");
// console.log(arr4);
// // tạo mảng với độ dài xác định các phần tử có giá trị underfined
// let arrWithLength = new Array(5);
// console.log(arrWithLength);
// console.log(arrWithLength[0]); // vị trí index 0
// console.log(arrWithLength[1]); // vị trí index 1
// console.log(arrWithLength[2]); // vị trí index 2
// console.log(arrWithLength[3]); // vị trí index 3
// console.log(arrWithLength[4]); // vị trí index 4

// truy xuất vị trí của phần tử mảng
// let arr5 = [4, 6, 7, 9, 11, 15];
// console.log(arr5[2]); // vị trí index 2 là 7
// console.log(arr5[3]); // vị trí index 3 là 9

// // 5. Thuộc tính lenght
// console.log(arr4.length);
// console.log(arr5.length);

// // 6.Gán giá trị Thay đổi qua indexx
// let arr6 = [2, 3, 5];
// console.log(arr6);
// arr6[1] = 10; // gán giá trị vị trí index 1 thành 10 (3=10)
// console.log(arr6);

// 7. Duyệt mảng
// Cách 1: Dùng vòng lặp for
// (có thể xem và sửa giá trị của mảng)

let arr7 = [2, 3, 4, 5, 6, 8, 9];
console.log(arr7);
for (let i = 0; i <= arr7.length; i++) {
  console.log(arr7[i]);
  arr7[i] = arr7[i] * 2;
}
//  Sau khi thay đổi, xuất thử arr7
console.log(arr7);
