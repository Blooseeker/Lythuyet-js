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

// let toan = Number(prompt("Nhập điểm Toán: ")); // nếu không ép kiểu dữ liệu number thì phép tính + sẽ sai
// let van = Number(prompt("Nhập điểm Văn: "));
// let anh = Number(prompt("Nhập điểm Tiếng Anh: "));
// dtb = (toan + van + anh) / 3;
// console.log(toan);
// console.log(van);
// console.log(anh);
// console.log(dtb);
// console.log("Điểm trung bình 3 môn:", dtb.toFixed(2)); // Cách 1
// console.log(`Điểm trung bình 3 môn: ${dtb.toFixed(2)} `); // Cách 2
// console.log(`Điểm trung bình 3 môn: %s `, dtb.toFixed(2)); // Cách 3

// 12. Các phép so sánh
// let a = 3;
// let b = 3;
// let c = "3";

// console.log(typeof b);
// console.log(typeof c);
// // các phép so sánh thông thường giống toán học
// console.log(a > b);
// console.log(a < b);
// console.log(a <= b);
// console.log(a >= b);
// console.log(a != b);
// console.log(c != b); // lưu ý

// // so sánh bằng == ( không quan tâm đến kiểu biến )
// console.log(a == b);
// console.log(c == b);

// // so sánh tuyệt đối (===) so sánh giá trị và kiểu giữ liệu.
// console.log(a === b);
// console.log(c === b);

// console.log("phần 2");
// console.log(a != b);
// console.log(c != b); // lưu ý ( không quan tâm đến kiểu biến )

// console.log(a !== b);
// console.log(c !== b); // so sánh tuyệt đối (!==) so sánh giá trị và kiểu giữ liệu.

// 13. Hàm toán học cơ bản
//    1. Hàm "Math.sqrt()"
// let a = Math.sqrt(9);
// console.log(a);

// //   2. Hàm lũy thừa Math.pow(base, exponent)
// let b = Math.pow(2, 3);
// console.log(b);

// //   3. Hàm Math.abs() giá trị tuyệt đối cảu -10 là 10
// let c = Math.abs(-10);
// console.log(c);

// //   4. Hàm Math.ceil() và Math.floor() làm tròn lên xuống.
// let d = Math.ceil(5.004);
// console.log(d);

// //   5. Hàm Math.round() từ 0.5 làm tròn lên
// let e = Math.round(4.49);
// console.log(e);

// //   6. Hàm làm tròn X chữ số sau dấu phẩy
// let f = 3.14586;
// let fRounded = Number(f.toFixed(2)); // vì vậy nên phải ép thành kiểu số number
// console.log(fRounded);
// console.log(typeof fRounded); // Lại thành kiểu string "chuỗi" nếu ko ép kiểu number bên trên

// // Hàm Math.min()   và Math.max()  tìm giá trị lớn nhỏ
// let num1 = 8,
//   num2 = 12,
//   num3 = 5;
// let minValue = Math.min(num1, num2, num3);
// let maxValue = Math.max(num1, num2, num3);
// console.log(`Giá trị nhỏ nhất là: ${minValue}`);
// console.log(`Giá trị lớn nhất là: ${maxValue}`);
// // ví dụ
// let h = Math.max(1, 2, 45, 78, 100);
// console.log(h);

// // 15. Hàm Math.random()
// //   1. Random từ 0-1
// let randomValue = Math.random();
// console.log(`Số ngẫu nhiên từ 0 đến sát 1 là: ${randomValue} `);

// //   2. Random số lơn hơn 1
// let randomValue2 = Math.random() * 10;
// console.log(`Số ngẫu nhiên từ 0 đến sát 10 là: ${randomValue2} `);

// //   3. Random số nguyên

// let randomValue3 = parseInt(Math.random() * 10);
// console.log(`Số ngẫu nhiên từ 0 đến sát 10 là: ${randomValue3} `);

// 16. If else trong jS
//  Xuất thông báo cho người dùng
// let dtb = Number(prompt("Mời cụ nhập điểm:"));
// // kiểm tra điều kiện
// if (dtb >= 5.0) {
//   console.log("Bạn đã đỗ");
// } else {
//   console.log("Bạn đã oẳng");
// }

//  bài if- else if
/* Nhập vào điểm TB in ra xếp loại học sinh
     Giỏi: dtb <= 10 và >=8
     Khá : 8 >dtb>=6.5
     TB: 6.5>dtb>=5
     Yếu: 0<dtb<5
 */

// let dtb = Number(prompt("Mời cụ nhập điểm:"));

// // Kiểm tra điều kiện
// if (dtb <= 10 && dtb >= 8) {
//   console.log("Học sinh giỏi");
// } else if (dtb < 8 && dtb >= 6.5) {
//   console.log("Học sinh khá");
// } else if (dtb < 6.5 && dtb >= 5) {
//   console.log("Học sinh TB");
// } else if (dtb < 5 && dtb >= 0) {
//   console.log("Học sinh yếu");
// } else {
//   console.log("Nhập điểm tào lao");
// }

// Bài tập về if else if
// Bài 07 tìm x y
// Nhập liệu từ bàn phím
// let tong = Number(prompt("Nhập tổng:"));
// let hieu = Number(prompt("Nhập hiệu:"));

// // tính giá trị của x
// let x = (tong + hieu) / 2;

// // tính giá trị của y
// let y = x - hieu;

// // xuất kết quả ra màn hình

// console.log(`Kết quả x là ${x}`);
// console.log(`Kết quả y là ${y}`);

// Bài 08: Viết chương trình nhập vào chiều cao, cân nặng tính BMI
// Nhập dữ liệu từ bàn phím
// let chieuCao = Number(prompt("Nhập chiều cao (m):"));
// let canNang = Number(prompt("Nhập cân nặng (kg):"));

// // Tính toán giá trị BMI
// // let BMI = canNang / (chieuCao * chieuCao);
// // let BMI = canNang / chieuCao ** 2;
// let BMI = canNang / Math.pow(chieuCao, 2);
// console.log(`Chỉ số BMI của bạn là : ${BMI.toFixed(2)}`);
// // điều kiện xuất ra màn hình
// if (BMI < 15) {
//   console.log("Thân hình quá gầy");
// } else if (BMI >= 15 && BMI < 16) {
//   console.log("Thân hình gầy");
// } else if (BMI >= 16 && BMI < 18.5) {
//   console.log("Thân hình hơi gầy");
// } else if (BMI >= 18.5 && BMI < 25) {
//   console.log("Thân hình bình thường");
// } else if (BMI >= 25 && BMI < 30) {
//   console.log("Thân hình hơi béo");
// } else if (BMI >= 30 && BMI < 35) {
//   console.log("Thân hình béo");
// } else if (BMI >= 35) {
//   console.log("Thân hình quá béo");
// } else {
//   console.log("Nhập cân nặng or chiều cao linh tinh");
// }

// Bài 09: Viết chương trình nhập vào năm dương lịch.
/* kiểm tra xem có phải năm nhuận hay ko */
// nhập năm từ bàn phím
// let nam = Number(prompt("Mời cụ nhập năm:"));
// console.log("Bạn nhập năm:" + nam);
// // kiểm tra xem nhuận hay ko nhuận
// if (nam % 4 === 0 && nam % 100 !== 0) {
//   console.log(nam, "Năm nhuận");
// } else if (nam % 400 === 0) {
//   console.log(nam, "Năm nhuận");
// } else {
//   console.log(nam, "Năm không nhuận");
// }

// Bài 10. Kiểm tra xem tháng đấy có bao nhiêu ngày
// Nhập số liệu năm và tháng

// let thang = parseInt(prompt("Mời cụ nhập tháng:"));
// // kiểm tra tính hợp lệ của tháng

// if (!isNaN(thang) && thang >= 1 && thang <= 12) {
//   // kiểm tra xem tháng có bao nhiêu ngày.
//   if (
//     thang === 1 ||
//     thang === 3 ||
//     thang === 5 ||
//     thang === 7 ||
//     thang === 8 ||
//     thang === 10 ||
//     thang === 12
//   ) {
//     console.log(`Tháng ${thang} có 31 ngày `);
//   } else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
//     console.log(`Tháng ${thang} có 30 ngày `);
//   } else if (thang === 2) {
//     let nam = Number(prompt("Mời cụ nhập năm:"));

//     if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
//       console.log(`${nam} là năm nhuận Tháng ${thang} có 29 ngày `);
//     } else {
//       console.log(`${nam} là năm ko nhuận Tháng ${thang} có 28 ngày `);
//     }
//   }
// } else {
//   console.log("Tháng không hợp lệ vui lòng nhập lại");
// }

//  17. Toán tử 3 ngôi
// let number = 10;
// let mes = number >= 0 ? "số dương" : "số âm";
// console.log(mes);

// //  Kiểm tra chẵn lẻ của 1 số
// let number1 = 9;
// let soKiemtra = number1 % 2 === 0 ? " số chẵn " : " số lẻ ";
// console.log(soKiemtra);

// Bài 13: Viết chương trình nhập vào điểm trung bình xuất ra kết quả.
// nhập điểm trung bình
// let dtb = parseFloat(prompt("Mời cụ nhập điểm:"));
// // xét điểm theo toán tử 3 ngôi
// let diemTb =
//   dtb >= 8 ? "Giỏi" : dtb >= 6.5 ? "Khá" : dtb >= 5 ? "Trung Bình" : "Yếu";
// console.log("Bạn xếp hạng: ", diemTb);

// 18. Truthy anh Falsy values
// let a = 123;
// console.log(typeof a);
// let b = String(a);
// console.log(typeof b);
// console.log("Giá trị cảu b là:", b);

// 19. Switch case cơ bản và ví dụ minh họa.
// let number = "abc";
// switch (number % 2) {
//   case 0:
//     console.log("Số chẵn");
//     break;
//   case 1:
//     console.log("Số lẻ");
//     break;
//   default:
//     console.log("Không phải số");
// }

// //  cách xuất chuổi xuống dòng
// console.log("Sông cầu nước chảy lơ thơ\nCó đôi trai gái ngồi hơ quần đùi");
// console.log(`Sông cầu nước chảy lơ thơ
// Có đôi trai gái ngồi hơ quần đùi`);

// Bài tập 14. Viết xuất ra màn hình thông báo
// let choice = Number(
//   prompt(`
// 1. Tìm theo tên
// 2. Tìm theo tác giả
// 3. Tìm theo nhà xuất bản
// 4. Tìm theo tiêu đề
// Thoát nếu ko hợp lệ`)
// );
// switch (choice) {
//   case 1:
//     alert("Tìm theo tên");
//     break;
//   case 2:
//     alert("Tìm theo tác giả");
//     break;
//   case 3:
//     alert("Tìm theo nhà xuất bản");
//     break;
//   case 4:
//     alert("Tìm theo tiêu đề");
//     break;
//   default:
//     alert("Lựa chọn ko hợp lệ");
//     break;
// }

// 20. Vòng lặp while trong JavaScript
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++; // i = i + 1
// }

// ví dụ viết ct nhập số n từ bàn phím là số nguyên sai nhập lại
// let n = prompt("Mời cụ nhập số nguyên n (từ 1 đến 99):");
// console.log(n);
// while (isNaN(n) || n < 1 || n > 99 || n % 1 !== 0) {
//   n = Number(prompt("Số bạn nhập không hợp lệ mời nhập lại:"));
// }
// alert("Bạn đã nhập số: " + n);

// 21.Vòng lặp Do while
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);

// 22. while ( true )
//  Tăng n cho đến khi n=10
// let n = 0;
// while (true) {
//   n++;
//   alert(n);
//   if (n === 10) {
//     break;
//   }
// }

// 23. Vòng lặp For
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// 24.1 Continue và Break để kiểm soát vòng lặp
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue; // dùng continue là bỏ qua ko hiện thị nếu lệnh trong if đúng trường hợp này là bỏ qua số lẻ
//   } else {
//     console.log(i);
//   }
// }

//  Bài tập 15 JS
//  Nhập liệu số nguyên n
// let n = Number(prompt("Mời cụ nhập số nguyên 0 âm n:"));
// // kiểm tra tính hợp lệ của n
// while (n < 0 || !Number.isInteger(n)) {
//   n = Number(prompt("Số bạn nhập ko phải là số nguyên mời nhập lại:"));
// }
// console.log(n);
// // Dùng vòng lặp for
// // let gt = 1;
// // for (let i = 1; i <= n; i++) {
// //   gt *= i; // gt = gt * i
// // }
// // console.log(n + "! =" + gt);

// // Dùng vòng lặp while
// let gt = 1;
// let i = 1;
// while (i <= n) {
//   gt *= i;
//   console.log(i);
//   i++;
// }
// console.log(n + "! =" + gt);

// Bài tập 16: Tính tổng số chẵn nếu lẻ thoát chương trình
// let a = Number(prompt("Mời cụ nhập số chẵn a:"));
// while (!Number.isInteger(a)) {
//   a = Number(prompt("Số bạn nhập không đúng mời nhập lại:"));
// }
// console.log(a);

// // dùng while
// if (a % 2 === 0) {
//   let tong = 0;
//   let i = 0;
//   while (i <= a) {
//     tong += i; // tong = tong + i
//     console.log(i);
//     i += 2;
//   }
//   console.log("Tổng các số chẵn từ 0 tới " + a + " là: " + tong);
//   alert(`Tổng các số chẵn từ 0 đến ${a} là: ${tong}`);
// } else {
//   // nếu a lẻ
//   alert("Tôi ko tính tổng lẻ, bye bye");
// }

// dùng if for
// let a = Number(prompt("Mời cụ nhập số chẵn a:"));
// while (!Number.isInteger(a)) {
//   a = Number(prompt("Số bạn nhập không đúng mời nhập lại:"));
// }
// console.log(a);
// if (a % 2 === 0) {
//   let tong = 0;
//   for (let i = 0; i <= a; i += 2) {
//     tong += i;
//   }
//   console.log("Tổng các số chẵn từ 0 tới " + a + " là: " + tong); // hiện thị ở của sổ console trong mục kiểm tra
//   alert(`Tổng các số chẵn từ 0 đến ${a} là: ${tong}`); // hiện thị lên màn hình
// } else {
//   // nếu a lẻ
//   alert("Tôi ko tính tổng lẻ, bye bye");
// }

// Bài tập 17 Tính tổng các số lẻ từ 1 đến n ko cộng với số 3

// let n = Number(prompt("Mời nhập số nguyên lẻ n:"));
// // kiểm tra n có phải sô nguyên
// while (!Number.isInteger(n)) {
//   n = Number(prompt("Số bạn nhập chưa đúng mời mời nhập lại:"));
// }
// console.log(n);
// if (n % 2 !== 0) {
//   tongLe = 0;
//   for (let i = 1; i <= n; i += 2) {
//     console.log(i);
//     if (i === 3) {
//       // câu lệnh bỏ qua giá trị 3
//       continue;
//     }
//     tongLe += i;
//   }
//   console.log(`Tổng các số lẻ từ 1 đến ${n} là: ${tongLe}`);
//   alert(`Tổng các số lẻ từ 1 đến ${n} là: ${tongLe}`);
// } else {
//   alert("Tôi ko tính tổng chẵn, bye bye");
// }

//  Bài tập 18: Tìm số chia hết cho 3 từ 10 đến 50

// for (let i = 10; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }
// // Nâng cao đếm xem có bao nhiêu giá trị chia hết cho 3 ở trên
// let dem = 0;
// for (let i = 10; i <= 50; i++) {
//   if (i % 3 === 0) {
//     dem++;
//   }
// }
// console.log(`Có tổng cộng ${dem} số chia hết cho 3`);

//  Bài tập 19: Tính tổng các giai thừa

// let n = 5;
// let gt = 1;
// for (let i = 1; i <= n; i++) {
//   gt *= i;
// }
// console.log(`${n}! = ${gt}`);

// let sum = 0;
// for (let n = 0; n <= 10; n++) {
//   let gt = 1;
//   for (let i = 1; i <= n; i++) {
//     gt *= i;
//   }
//   console.log(`${n}! = ${gt}`);
//   sum += gt;
// }
// console.log(`Tổng giai thừa S = ${sum}`);

// Bài tập 20: Tìm số hoàn hảo từ 1-1000
//  kiêm tra xem 1 số có phải số hoàn hảo không
/*
tong = 0;
let n = 6;
for (let i = 1; i < n; i++) {
  if (n % i === 0) {
    console.log(i);
    tong += i;
  }
}
console.log(tong);
// kiểm tra số hoàn hảo
if (tong === n) {
  console.log(`Số ${n} là số hoàn hảo`);
} else {
  console.log(`Số ${n} ko phải số hoàn hảo`);
}
*/

// for (let n = 1; n < 1000; n++) {
//   tong = 0;
//   // kiểm tra xem tổng ước thực = bao nhiêu
//   for (let i = 1; i < n; i++) {
//     if (n % i === 0) {
//       tong += i;
//     }
//   }
//   //  so sánh tổng ước thực có = n hay ko
//   if (tong === n) {
//     console.log(`Số ${n} là số hoàn hảo`);
//   }
// }

// Bài tập 21: Kiểm tra số nguyên tố
// Nhập số nguyên tố
while (true) {
  let a = Number(prompt("Mời cụ nhập số NT a:"));
  // kiểm tra xem có phải số nguyên lớn hơn 1 ko đúng nhập lại
  while (!Number.isInteger(a) || a <= 0) {
    a = Number(prompt("Mời cụ nhập lại số NT a:"));
  }
  // alert(`Số ${a} là số hợp lệ`);
  // Kiểm tra xem số a có phải số nguyên tố hay ko
  let soNguyento = true;
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      soNguyento = false;
      break;
    }
  }

  // Hiện thị kết quả
  if (soNguyento === true) {
    alert(`${a} là số nguyên tố`);
  } else {
    alert(`${a} ko là số nguyên tố`);
  }
  // hỏi người dùng có muốn tiếp tục hay ko
  let answer = prompt(`
  Bạn có muốn tiếp tục không
  Nhập "0" để thoát
  Nhập phím bất kỳ để tiếp tục`);
  if (answer === "0") {
    break;
  }
}
