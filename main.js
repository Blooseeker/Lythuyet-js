// // hàm hiển thị người dùng
// alert("xin chào nha");

// // hàm hiện thị hộp thoại cho người dùng

// prompt("Nhap vao day di");
// // khai báo biến
// var myName;

// bài tập nhập tên và hiện thị tên của bạn
// b1 khai báo biến
// let userName;
// // b2 hiện thị hộp nhập liệu gán giá trị nhập cho biến UserName
// let userName = prompt("mời cụ:");
// // b3 hiện thị bàng lệnh consol.log
// console.log("Tên của bạn là: " + userName);
// console.log("Chào mừng " + userName + "đến với chúng tôi");
// kiểu số
// let soNguyen = 10;
// let soThuc = 3.14;

// // kiểu boolean
// let check = true;
// //xuất giá trị
// console.log(soNguyen);
// console.log(soThuc);
// console.log(typeof soNguyen);
// console.log(typeof soThuc);
// console.log(typeof check);

// Khai báo
// let soA = 25;
// let soB = 5;
// // c1
// console.log("căn bậc 2 của " + soA + " là " + soB);
// // c2
// console.log("căn bậc 2 của", soA, "là", soB);
// // c3
// console.log(`căn bậc hai của ${soA} là: ${soB}`);
// // c4
// console.log(` căn bậc hai của %s là: %s`, soA, soB);
// bài tập
// let a = 4,
//   b = 3,
//   kq = a * b;
// //   hiện thị kết quả a*b bằng 4 cách
// // c1
// console.log("kết quả: " + a + " * " + b + " = " + kq);
// // c2
// console.log("kết quả:", a, "*", b, "=", kq);
// // c3
// console.log(`kết quả: ${a} * ${b} = ${kq}`);
// // c4
// console.log(`Kết quả: %s * %s = %s`, a, b, kq);

//các phép toán cơ bản lý thuyết
// let a = 7;
// let b = 2;

// let tong = a + b;
// let hieu = a - b;
// let tich = a * b;
// let thuong = a / b;
// let soDu = a % b;

// // xuất kết quả
// // cách theo hướng dẫn
// console.log("Tổng 2 số là: " + tong);
// console.log("Hiệu 2 số là: " + hieu);
// console.log("Tích 2 số là: " + tich);
// console.log("Thương 2 số là: " + thuong);
// console.log("Dư của phép chia 2 số là: " + soDu);

// // cách thường dùng
// console.log(` Tổng hai số ${a} cộng với ${b} là: ${tong}`);
// console.log(` Tổng hai số %s cộng với %s là: %s`, a, b, tong);
// console.log(` Hiệu hai số ${a} trừ ${b} là: ${hieu}`);
// console.log(` Hiệu hai số %s trừ %s là: %s`, a, b, hieu);
// console.log(` Tích hai số ${a} nhân ${b} là: ${tich}`);
// console.log(` Tích hai số %s nhân %s là: %s`, a, b, tich);
// console.log(` Thương hai số ${a} thương ${b} là: ${thuong}`);
// console.log(` Thương hai số %s thương %s là: %s`, a, b, thuong);

//  thứ tự ưu tiên ()

// let diemToan = 9.5;
// let diemVan = 8.75;

// let dtb = (diemToan + diemVan) / 2;
// console.log(dtb);

// 08.  Ép kiểu dữ liệu
//xuất thông báo cho người dùng nhập vào số a

// let numberA = prompt("mời cụ nhập vào numberA: ");
// // check thử kiểu loại biến numberA dùng hàm " typeof "
// console.log(typeof numberA);
// // thử tính toán ( nếu chưa ép kiểu dữ liệu )
// let numberB = 5;
// console.log(typeof numberB);
// 5;
// // cộng A vs B
// let kq = numberA + numberB;
// console.log(`kết quả A + B = ${kq}`);
// // kiểm tra kiểu loại của kq
// console.log(typeof kq);
// // vd a = 8, thì kết quả là 85 chứ k phải 13 như tính toán --> sai, vì js hiểu là cộng chuỗi
// //  các phép tính khác
// console.log(`A-B= %s`, numberA - numberB);
// console.log(`A*B= %s`, numberA * numberB);
// console.log(`A/B= %s`, numberA / numberB);
// console.log(`A%B= %s`, numberA % numberB);

// ép kiểu dữ liệu nhập vào prompt
// xuất thông báo cho người dùng nhập vào số C
// let numberC = parseFloat(prompt("Mời cụ nhập vào numberC: "));
// console.log(numberC);
// console.log(typeof numberC);
// // Hoặc đơn giản dùng hàm Number() để ép sang Kiểu dữ liệu number
// let numberD = Number(prompt("Mời cụ nhập vào numberD: "));
// console.log(numberD);
// console.log(typeof numberD);
// console.log(numberD + numberB);
// console.log(numberC + numberB);

// 09. Toán tử gán
// 1. toán tử gán " = "dùng để gán giá trị cho biến.

// let x = 10; //  Biến x được gán giá trị bằng 10
// let y = 5; //  Biến y được gán giá trị bằng 5
// let z = x + y; //  Biến z được gán là tổng x và y
// console.log(x);
// console.log(y);
// console.log(z);
// // Các toán tử còn lại +=, -=, *=, /=, %=

// console.log("Kết quả gán +=, -=, *=, /=, %= ");
// let m = 10;
// m += 5; // tương đương với việc viết m = m + 5;
// console.log(m);

// let n = 8;
// n -= 3; // tương đương với việc viết n = n-3;
// console.log(n);

// let p = 6;
// p *= 2; // tương đương với việc p = p*2;
// console.log(p);

// let q = 9;
// q /= 3; // tương đương với việc viết q = q / 3;
// console.log(q);

// let r = 4;
// r %= 3; // tương đương với việc r chia cho 3 lấy phần dư là 1
// console.log(r);

// bài tập js

// let a = 7;
// a += 3;
// console.log("a = ", a);

// let b = 15;
// b -= 6;
// console.log("b = ", b);

// let c = 5;
// c *= 4;
// console.log("c = ", c);

// let d = 12;
// d /= 2;
// console.log("d = ", d);

// let e = 5;
// let f = 2;
// e -= f + 1;
// console.log("e = ", e);

// 10. Toán tử Tăng/Giảm: Toán tử tiền tố hậu tố ( ++ , --)
// - Dùng để tăng hoặc giảm giá trị của 1 đơn vị.

// let a = 99;
// let b = 10;
// let c = 77;
// let d = 88;
// a++; // Tăng giá trị của a lên 1 đơn vị
// b--; // Giảm giá trị của b xuống 1 đơn vị
// ++c; // Tăng giá trị của c lên 1 đơn vị
// --d; // Giảm giá trị của d xuống 1 đơn vị
// // xuất kết quả
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// // 2. Trường hợp biểu thức phức tạp tính toán theo thứ tự
// /*  b1: tính biến có dấu ++ or -- được tính trước ( Prefix )
//     ở ví dụ dưới là --y đấy
//     b2: các phép tính còn lại
//     b3: gán các giá trị cho biến ở bên trái dấu =
//     ở ví dụ là biến z bên trái dấu =
//     b4: tính nốt có dấu ++ or -- ở đắng sau ( Postfix)
//     ở ví dụ là x++ đấy
// */
// let x = 1;
// let y = 2;
// let z = x++ - ++y + 1;
// console.log(x);5
// console.log(y);
// console.log(z);

// 11. Toán tử logic
// let i = 11;

// console.log(i > 0);
// console.log(i < 10);
// //  kiểm tra điều kiện i>0 và i<10 không ? toán tử &&
// console.log(i > 0 && i < 10);
// //  kiểm tra điều kiện i>0 và i<10 không ? toán tử ||
// console.log(i > 0 || i < 10);
// //  kiểm tra điều kiện i>0 và i<10 không ? toán tử Not ! đảo ngược giá trị
// console.log(!(i < 10));

//  bài tập thực hành
// Bài tập 4
// let r = Number(prompt("Nhập bán kính R: "));  //ép kiểu dữ liệu
// let Pi = Math.PI;
// let chuVi = 2 * Pi * r;
// let dienTich = Pi * r * r;
// console.log(Pi);
// console.log("Chu vi là:", chuVi);
// console.log(`Diện tích là: ${dienTich} `);

// Bài tập 5 Tính chu vi diện tích hình chữ nhật
// let a = Number(prompt("Nhập số a: "));
// let b = Number(prompt("Nhập số b: "));
// let s = a * b;
// let p = (a + b) * 2;
// console.log(a);
// console.log(b);
// console.log(`Diện tích là: ${s} `);
// console.log("Chu vi là:", p);

//  Bài tập 6 Nhạp điểm 3 môn Toán, Văn, Anh.

let toan = Number(prompt("Nhập điểm Toán: ")); // nếu không ép kiểu dữ liệu number thì phép tính + sẽ sai
let van = Number(prompt("Nhập điểm Văn: "));
let anh = Number(prompt("Nhập điểm Tiếng Anh: "));
dtb = (toan + van + anh) / 3;
console.log(toan);
console.log(van);
console.log(anh);
console.log(dtb);
console.log("Điểm trung bình 3 môn:", dtb.toFixed(2)); // Cách 1
console.log(`Điểm trung bình 3 môn: ${dtb.toFixed(2)} `); // Cách 2
console.log(`Điểm trung bình 3 môn: %s `, dtb.toFixed(2)); // Cách 3
