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
//   b1 Nhập số nguyên tố
// while (true) {
//   let a = Number(prompt("Mời cụ nhập số NT a:"));
//   // b2 kiểm tra xem có phải số nguyên lớn hơn 1 ko đúng nhập lại
//   while (!Number.isInteger(a) || a <= 0) {
//     a = Number(prompt("Mời cụ nhập lại số NT a:"));
//   }
//   // alert(`Số ${a} là số hợp lệ`);
//   // b3 Kiểm tra xem số a có phải số nguyên tố hay ko
//   let soNguyento = true;
//   for (let i = 2; i < a; i++) {
//     if (a % i === 0) {
//       soNguyento = false;
//       break;
//     }
//   }

//   // b4 Hiện thị kết quả
//   if (soNguyento === true) {
//     alert(`${a} là số nguyên tố`);
//   } else {
//     alert(`${a} ko là số nguyên tố`);
//   }
//   // b5 hỏi người dùng có muốn tiếp tục hay ko
//   let answer = prompt(`
//   Bạn có muốn tiếp tục không
//   Nhập "0" để thoát
//   Nhập phím bất kỳ để tiếp tục`);
//   if (answer === "0") {
//     break;
//   }
// }

// 25.1 Function là gì JS
// 1. Cấu trúc hàm function
// Bước 1: khai báo hàm
// function tenFunction() {
//   // mã lệnh được thực hiện 1 nhiệm vụ nào đó
// }
// // Bước 2: Gọi hàm - khi cần sử dụng
// tenFunction();
// // 2. Ví dụ đơn giản
// // Khai báo
// function xinChao() {
//   console.log("Chào mừng đến với thế giới này");
// }
// // Gọi hàm ra để dùng
// xinChao();

// // Function với tham số
// // let inputName = prompt("Mời bạn nhập tên:");
// function xinchao1(tenthamso) {
//   console.log(`Chào mừng ${tenthamso} đến với thế giới này.`);
// }
// // Gọi hàm
// // xinchao1(inputName);
// xinchao1("Trần Như Nhộng");

// // 3. Ví dụ 2 tính tổng hai số
// function tinhTong(a, b) {
//   // let ketQua = a + b;
//   // return ketQua;
//   return a + b; // cách viết gọn hai dòng lệnh bên trên
// }
// // gọi hàm
// console.log(tinhTong(5, 7));
// // gán biến cho hàm (lưu giá trị trả về vào biến)
// let diemToan = 9;
// let diemVan = 8.5;
// let tongDiem = tinhTong(diemToan, diemVan);
// console.log("Tổng điểm là:" + tongDiem);
// console.log("DTB:" + tongDiem / 2);
// // 4. Truyền giá trị mặc định cho parameters
// console.log(tinhTong(10)); // truyền có 1 đối số a còn b ko truyền nên khi cộng tổng a và b bị lỗi NaN
// // truyền 1 giá trị mặc định cho a và b trước
// function tinhTong2(a = 0, b = 0) {
//   return a + b;
// }
// console.log(tinhTong2(10)); // vẫn truyền 1 tham số a nhưng b đã có mặc định bằng 0 nên tổng bằng 10

// 25.2 Các cách khai báo hàm function
// 1. Khai báo tường minh Function declaration
// 2. Khai báo expression
// cấu trúc hàm
// let ten_bien = function (doiso) {};
// thân hàm
// return something
// ví dụ Khai báo
// let tich = function (a = 1, b = 1) {
//   return a * b;
// };
// // Gọi hàm
// console.log(tich(3, 5));
// 3. Khai báo Arrow fucntion 9 (hàm mũi tên)
// cú pháp khai báo ngắn gọn hơn trong JS
// ví dụ
// khai báo của cách 2 expression
// let multiply = function (a, b) {
//   return a * b;
// };
// console.log(multiply(3, 4)); // Gọi hàm

// // Khai báo kiểu arrow
// let multiplyArrow = (a, b) => a * b;
// console.log(multiplyArrow(4, 4)); // Gọi hàm

// //  Tuy nhiên với trường hợp phức tạp, cần thêm khối {}
// // Cách 1 Expression
// let andAdd = function (a, b) {
//   let and = a + b;
//   let add = a * b;
//   return and + add;
// };
// console.log(andAdd(4, 5));

// //  Cách 2 Arrow
// let andaddArrow = (a, b) => {
//   let and = a + b;
//   let add = a * b;
//   return and + add;
// };
// console.log(andaddArrow(4, 5));

// 25.4 Gọi hàm trong hàm khác function calling other function
//  Hàm thực hiện phép cộng
// function cong(a, b) {
//   return a + b;
// }

// //  Hàm thực hiện nhân
// function nhan(x, y) {
//   return x * y;
// }

// // Goị hàm trong hàm khác để thực hiện cộng và nhân trong hàm đó
// function congNhan(so1, so2, so3) {
//   // gọi hàm cộng để tính tổng so1 + so2
//   let sum = cong(so1, so2);
//   // gọi hàm nhân để tính tích sum * so3
//   let product = nhan(sum, so3);
//   // trả về kết quả
//   return product;
// }

// //  sử dụng hàm congNhan
// let ketqua = congNhan(2, 3, 4);
// console.log(ketqua);

// Bài tập 22: Tính n! bằng cách sử dụng function
// let n = Number(prompt("Nhập vào số nguyên 0 âm:"));
// // kiểm tra tính hợp lệ của số nguyên, sai nhập lại
// while (!Number.isInteger(n) || n < 0) {
//   n = Number(prompt("Nhập sai mời cụ nhập lại:"));
// }
// //  sử dụng function tính giai thừa dùng for
// function tinhGtfor(n) {
//   let gt = 1;
//   for (let i = 1; i <= n; i++) {
//     gt *= i;
//   }
//   return gt;
// }

// //  dùng While
// function tinhGtwhile(n) {
//   let gt = 1;
//   let i = 1;
//   while (i <= n) {
//     gt *= i;
//     i++;
//   }
//   return gt;
// }
// let ketquaGt = tinhGtfor(n);
// console.log(`${n}! dùng For = ${ketquaGt}`);
// let ketquaGtwhile = tinhGtwhile(n);
// console.log(`${n}! dùng while = ${ketquaGtwhile}`);

//  Bài tập 23: Giải hệ phương trình bậc 2 bằng function
// Cách 1 Sử dụng Function Declaration (khai báo hàm tường minh)
// function ptb2_1(a, b, c) {
//   // tính Delta
//   let delta = b ** 2 - 4 * a * c;
//   if (delta > 0) {
//     let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//     console.log(`PT có 2 nghiệm x1 = ${x1} x2 = ${x2}`);
//   } else if (delta === 0) {
//     let x1 = -b / (2 * a);
//     console.log(`PT có nghiệm kép x1 = x2 = ${x1}`);
//   } else {
//     console.log("Phương trình vô nghiệm");
//   }
// }
// // gọi hàm
// ptb2_1(1, 2, -3);
// ptb2_1(1, 2, 1);
// ptb2_1(1, 1, 1);

// // Cách 2 sủ dụng Function Expression
// let ptb2_2 = function (a, b, c) {
//   // tính Delta
//   let delta = b ** 2 - 4 * a * c;
//   if (delta > 0) {
//     let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//     console.log(`PT có 2 nghiệm x1 = ${x1} x2 = ${x2}`);
//   } else if (delta === 0) {
//     let x1 = -b / (2 * a);
//     console.log(`PT có nghiệm kép x1 = x2 = ${x1}`);
//   } else {
//     console.log("Phương trình vô nghiệm");
//   }
// };
// // gọi hàm
// ptb2_2(1, 2, -3);
// ptb2_2(1, 2, 1);
// ptb2_2(1, 1, 1);

// // Cách 3 sủ dụng Function Arrow

// let ptb2_3 = (a, b, c) => {
//   // tính Delta
//   let delta = b ** 2 - 4 * a * c;
//   if (delta > 0) {
//     let x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     let x2 = (-b - Math.sqrt(delta)) / (2 * a);
//     console.log(`PT có 2 nghiệm x1 = ${x1} x2 = ${x2}`);
//   } else if (delta === 0) {
//     let x1 = -b / (2 * a);
//     console.log(`PT có nghiệm kép x1 = x2 = ${x1}`);
//   } else {
//     console.log("Phương trình vô nghiệm");
//   }
// };
// // gọi hàm
// ptb2_3(1, 2, -3);
// ptb2_3(1, 2, 1);
// ptb2_3(1, 1, 1);

// 26. Phạm vi sử dụng Scope phân biệt Global, function scope và block scope
// link bài nếu quên
// https://www.youtube.com/watch?v=uQc13t7mHbk

// 27.1 JS Hoiting ( nâng cao) So sánh var, let và const
// https://www.youtube.com/watch?v=4FPD4xDKxBI
// console.log("Giá trị của c = " + c);
// // Khởi tạo c
// var c = 9; //undefined
// let c = 9; //Cannot access 'c' before initialization
/* Cách JS hiểu
var c
console.log("Giá trị của c = " + c);
// Khởi tạo c
c = 9;
*/

// 27.2 Hoiting trong JS  Function
//https://www.youtube.com/watch?v=YGxNH18D1MU

// 28. Đệ quy với JS
// https://www.youtube.com/watch?v=cylaAl8P1FA
// Muốn giải bằng đệ quy cần biết 1 quy luật của bài và điểm dừng lại

// function giaiThua(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * giaiThua(n - 1); // cách dùng đệ quy như này
//   }
// }
// //  gọi hàm
// let ketqua = giaiThua(5);
// console.log(ketqua);

// // Ví dụ Dãy fibonacci f1=1, f2=1, fn=f(n-1) + f(-2)
// function f(n) {
//   if (n <= 2) {
//     return 1;
//   } else {
//     return f(n - 1) + f(n - 2);
//   }
// }
// let kq = f(15); // gọi hàm
// console.log(kq);

// 29.1 Xử lí chuỗi trong JS
// https://www.youtube.com/watch?v=2g6qL8kno8U
// index chuỗi bắt đầu từ 0
// let ten = "Linh";
// console.log(ten[0]);
// //  thuộc tính length chiều dài đếm từ 1 ko đếm từ 0 như index
// let s3 = "Chưa có bao giờ";
// // kiểm tra chiều dài của chuỗi s3
// console.log(s3.length);
// // Ví dụ vận dụng
// let mes = prompt("Mời nhập vào chuỗi");
// if (mes.length <= 140) {
//   alert(` Bạn đã nhập ${mes.length} kí tự`);
// } else {
//   alert(` Bạn đã nhập quá ${mes.length - 140} kí tự`);
// }

// 29.2 Cắt chuỗi
//https://www.youtube.com/watch?v=zddc-trDV-w
// let s4 = "0123456789";
// // cắt chuỗi dùng silce
// let s5 = s4.slice(2, 5); // cắt từ vị trí index 2 đến vị trí sát index 5 là 5-1 =4
// console.log(s5);
// // ví dụ: Chỉ cho phép tin nhắn dài tối đa 20 kí tự
// // nếu dài quá thì tự cắt chuỗi sau xử lý
// let s6 = prompt("Mời nhập vào chuỗi");
// console.log(`Ban đã nhập ${s6.length} ký tự`);
// if (s6.length >= 20) {
//   console.log(`Ban đã nhập quá ${s6.length - 20} kí tự`);
//   let s7 = s6.slice(0, 20);
//   // xuất chuỗi sau xử lý
//   console.log(`Chuỗi sau xử lý là: ${s7}`);
// }
// // cách viết 2 1 dòng
// console.log("Chuỗi sau xử lý:" + prompt("Mời nhập chuỗi 2:").slice(0, 20));

// // cắt chuỗi dùng substring
// let s8 = "0123456789";
// // cắt chuỗi dùng silce
// let s9 = s8.substring(2, 5); // cắt từ vị trí index 2 đến vị trí sát index 5 là 5-1 =4
// console.log(s9);

// Điểm khác biệt giữa slice và substring
/*
Đối số truyền vào :
substring( start, end): Nhận vào 2 tham số
ko phân biệt lớn nhỏ nó tự lấy số nhỏ là start còn lớn là end
ví vụ : (1, 4) or (4, 1) đều được nó sẽ tự đổi lại slice thì ko đổi lại
slice (start, emd) : bắt buộc phải là số nhỏ là start còn lớn là end
nếu ko truyền đúng thì ra chuỗi rỗng ví dụ:Đúng(1, 4), Sai(4, 1)
*/
// ví dụ
// let s10 = "0123456789";
// console.log("Sử dụng substring");
// console.log(s10.substring(1, 5)); // 12345
// console.log(s10.substring(5, 1)); // 12345
// // dùng slice
// console.log("Sử dụng slice");
// console.log(s10.slice(1, 5)); // 12345
// console.log(s10.slice(5, 1)); // chuỗi rỗng
// // truyền tham số âm
// // đối với sucstring tham số âm thì chuyển thành 0
// // ví dụ (-2,-1) nó hiểu là (0, 0) or (-2, 4) --> (0, 4)

// // đối với slice thì lại truyền được tham số âm
// // ví dụ
// let s11 = "0123456789";
// console.log("Sử dụng slice tham số âm");
// console.log(s11.slice(-3, -1)); // cắt từ -3 đến -2
// kết quả 78 lấy từ index -3 đến sát index -1 (tức là vị trí -2)
// truyền tham số âm với slice thì đếm ngược lại
// như vị dụ trên thì đếm từ 9 là 0, 8 là -1 ..... đến -9 là 0

// 29.3 Tối ưu hóa chuỗi
//https://www.youtube.com/watch?v=a8KtnjgbwJU
// xóa khoảng trắng trim, trimEnd, trimStart

// 29.4 JavaScript String Methods concat(), toUpperCase(), toLowerCase(), charAt()
//https://www.youtube.com/watch?v=Ph82gNolw_Q

// 29.5 JavaScript String Methods replace (oldValue, newValue) repeat (count) in JS
//https://www.youtube.com/watch?v=5EchW0uNjss

// 29.6 JavaScript String Methods indexOf , lastIndexOf, includes - Xử lý chuỗi trong JavaScript
//https://www.youtube.com/watch?v=ZlEVZGHPHE4

// 29.7 String Methods JavaScript startsWith() endsWith trong JS, xử lý chuỗi trong JavaScript
//https://www.youtube.com/watch?v=p9pCq5oXNVM

// 29.8 split() trong JavaScript
//https://www.youtube.com/watch?v=pz_bB_JnxH8
// let student = "Hoa,Lan, Huệ,Trung";
// let arr = student.split(",");
// console.log(arr);
// // giới hạn phần tử của mảng
// let arr1 = student.split(",", 3);
// console.log(arr1);

// 30.2 Giải bài tập JavaScript 24 _ Đếm ký tự in hoa, in thường, số, space
// Nhập chuỗi từ bàn phím
// const inputString = prompt("Nhập vào chuỗi:");

// // khởi tạo biến đếm
// let lowerCaseCount = 0;
// let upperCaseCount = 0;
// let digitCount = 0;
// let spaceCount = 0;

// // Lặp qua từng kí tự trong chuỗi
// for (let i = 0; i <= inputString.length; i++) {
//   console.log(inputString[i]);
//   let char = inputString[i];
//   // kiểm tra từng giá trị
//   if (char >= "a" && char <= "z") {
//     lowerCaseCount++;
//   } else if (char >= "A" && char <= "Z") {
//     upperCaseCount++;
//   } else if (char >= "0" && char <= "9") {
//     digitCount++;
//   } else if (char === " ") {
//     spaceCount++;
//   }
// }
// // in kết quả
// console.log("Số kí tự thường: " + lowerCaseCount);
// console.log("Số kí tự hoa: " + upperCaseCount);
// console.log("Số kí tự số: " + digitCount);
// console.log("Số khoảng trắng: " + spaceCount);

// 30.3 Viết trương trình kiểm tra tính hợp lệ
/*
a. Viết chương trình kiểm tra tính hợp lệ của mật khẩu: 
   1.  mật khẩu hợp lệ khi có ít nhất 6 ký tự 
   2. chứa ít nhất 1 chữ cái viết hoa
   3. chứa ít nhất 1 chữ cái viết thường
   4. chứa ít nhất 1 chữ số 
 b.  Cho người dùng nhập vào mật khẩu để login / so sánh, nếu đúng mở của, sai quá  5 lần khóa đăng nhập, thoát chương trình    
 */
// Ví dụ mật khẩu hợp lệ : Abc123
// Nhập liệu mật khẩu
// Tạo hàm kiểm tra tính hợp lệ
// function isPassword(password) {
//   if (password.length < 6) {
//     return false;
//   }

//   let chuThuong = false;
//   let chuHoa = false;
//   let chuSo = false;

// for (let i = 0; i < password.length; i++);
//     let char = password[i];
//     if (char >= "a" && char <= "z") {
//       chuThuong = true;
//     } else if (char >= "A" && char <= "Z") {
//       chuHoa = true;
//     } else if (char >= "0" && char <= "9") {
//       chuSo = true;
//     }
//   }

//   return chuThuong && chuHoa && chuSo;
// }

// // Set mật khẩu
// function setPassword() {
//   let password = prompt("Mời nhập mật khẩu:");
//   if (isPassword(password)) {
//     alert("Đặt mật khẩu thành công! Mật khẩu là:" + password);
//     return password;
//   } else {
//     alert(`Mật khẩu không hợp lệ
//       1. Có ít nhất 6 kí tự
//       2. Có ít nhất 1 kí tự viết hoa
//       3. Có ít nhất 1 kí tự viết thường
//       4. có ít nhất 1 kí tự số`);
//     //  gọi lại hàm set mật khẩu
//     setPassword();
//   }
// }

// // Gọi hàm set pass và gán pass vào biến nếu thành công
// let passwordOK = setPassword();

// // Viết chương trính đăng nhập
// let countLogin = 0;
// while (true) {
//   let passwordLogin = prompt("Mời nhập mật khẩu đăng nhập:");
//   if (passwordLogin === passwordOK) {
//     alert("Đăng nhập thành công");
//     break;
//   } else {
//     countLogin++;
//     if (countLogin < 5) {
//       alert("Bạn đã nhập sai pass, số lần thử: " + countLogin + "/5");
//     } else {
//       alert("Bạn đã thử 5 lần, t block m rồi");
//       break;
//     }
//   }
// }

// 30.4 Giải bài tập 26 js
/*
 Viết chương trình chuyển tin nhắn sang mật mã theo bảng :  
 const a="abcdefghijklmnopqrstuvwxyz"   
 const b="zxcvbnmasdfghjklqwertyuiop" 
 */
// https://www.youtube.com/watch?v=4NKxJEnCSnE
// function encryptMessage(message) {
//   const a = "abcdefghijklmnopqrstuvwxyz";
//   const b = "zxcvbnmasdfghjklqwertyuiop";
//   let result = "";

//   for (let i = 0; i < message.length; i++) {
//     let char = message[i].toLowerCase(); // chuyển đổi sang chữ thường để phù hợp với bảng mã.

//     // kiểm tra ký tự có trong bảng mã không
//     if (a.includes(char)) {
//       // thực hiện chuyển đổi
//       // kiểm tra ví trí index kí tự trong a
//       let index = a.indexOf(char);
//       // lấy giá trị index và dóng sang chuỗi b tương ứng
//       result += b[index];
//     }
//     // nếu ko có trong bảng mã thì dồn vào biến result
//     else {
//       result += char;
//     }
//   }
//   return result;
// }
// //  cho người dùng nhập liệu
// let messageInput = prompt("Nhập tin nhắn:");
// let kq = encryptMessage(messageInput);

// alert(`Kết quả là: ${kq}`);

// 30.5 Giải bài tập JavaScript 27 _ Đếm từ tôi trong chuỗi
// const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
// Đếm từ tôi trong string a trên ?
//https://www.youtube.com/watch?v=3VCTflqPqdM

// const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
// const targetWord = "tôi";
// let count = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a.slice(i, i + targetWord.length) === targetWord) {
//     count++;
//   }
// }
// alert(`Số lần xuất hiện của từ ${targetWord} là: ${count}`);

//30.6 Giải bài tập JavaScript 28 _ Tách số và chữ từ chuỗi cho trước
/*
Viết chương trình tách số và chữ từ chuỗi nhập vào thành 2 chuỗi :  
ví dụ nhập vào : abc123 sẽ tách và in ra thành 2 chuỗi abc và 123
*/
//https://www.youtube.com/watch?v=CxF_g_V3mwE

// function separate(inputString) {
//   let letters = "";
//   let numbers = "";

//   for (i = 0; i < inputString.length; i++) {
//     let char = inputString[i];

//     if (isNaN(char)) {
//       // nếu kí tự char ko phải là số thêm vào lestters
//       letters += char;
//     } else {
//       // nối kí tự số vào numbers
//       numbers += char;
//     }
//   }
//   return { letters, numbers };
// }
// // nhập liệu chuỗi
// let inputString = prompt("Mời nhập chuỗi:");
// let result = separate(inputString);

// alert(`
// Chuỗi chữ: ${result.letters}
// Chuỗi số: ${result.numbers}`);

// 31.1 Date and Time trong JavaScript
//https://www.youtube.com/watch?v=YJkuoPMVYwg

// let currentDate = new Date();
// console.log(typeof currentDate);
// console.log(currentDate);

// // Các phương thức lấy thông tin thời gian
// // lấy năm tháng ngày giwof phút giây
// let year = currentDate.getFullYear();
// let month = currentDate.getMonth() + 1;
// let day = currentDate.getDay();
// let hours = currentDate.getHours();
// let minute = currentDate.getMinutes();
// let second = currentDate.getSeconds();

// console.log("Năm hiện tại: " + year);
// console.log("Tháng hiện tại: " + month);
// console.log("Ngày hiện tại: " + day);
// console.log("Giờ hiện tại: " + hours);
// console.log("Phút hiện tại: " + minute);
// console.log("Giây hiện tại: " + second);

// timestamp là gì
// xuất thời gian tại mốc 0
// let timestamp1 = new Date(0);
// console.log(timestamp1);

//31.2 Xử lý ngày tháng trong JavaScript, Date Set Methods , định dạng và hiển thị ngày tháng trong JS
//https://www.youtube.com/watch?v=SD7hh_G7ERI
// let myDate1 = new Date(2024, 10, 8);
// console.log(myDate1);
// console.log(myDate1.toLocaleDateString());

// // cách 2 dùng datestring (chuỗi ngày tháng)
// let myDate2 = new Date("2024-02-11T12:35:45");
// console.log(myDate2);
// console.log(myDate2.toLocaleDateString()); // xuất định dạng ngày tháng năm

// // Cách 3
// let myDate3 = new Date();
// myDate3.setFullYear(2024);
// myDate3.setMonth(9);
// myDate3.setDate(8);
// console.log(myDate3);
// console.log(myDate3.toLocaleDateString());
// //  Xuất ngày thoe tự code
// console.log(`
// Ngày ${myDate3.getDate()} - Tháng ${
//   myDate3.getMonth() + 1
// } - Năm ${myDate3.getFullYear()}
//   `);
// // xuất thêm số 0 đằng trước (01 , 02 ..) tháng or ngày sử dụng toán tử 3 ngôi
// let prefixDate = myDate3.getDate() < 10 ? "0" : "";
// let prefixMonth = myDate3.getMonth() < 9 ? "0" : "";
// console.log(`
// Ngày ${prefixDate}${myDate3.getDate()} - Tháng ${prefixMonth}${
//   myDate3.getMonth() + 1
// } - Năm ${myDate3.getFullYear()}
//     `);

// 31.3 setTimeout trong JavaScript
// https://www.youtube.com/watch?v=IW3DOeOXPhg
// 1. Ôn lại 3 cách khai báo hàm
// a. Với hàm Arrow function
// let helloArrow = () => {
//   console.log("Hello");
// };
// // helloArrow();
// setTimeout(helloArrow, 2000); // sau 2s mới hiện thị Hello

// // b. với function declaration
// function xinChao() {
//   console.log("Hello xin chào declaration");
// }
// // setTimeout(xinChao, 3000);

// // c. với function expresstion
// let helloExpresstion = function () {
//   console.log("Hello xin chào function expresstion");
// };
// setTimeout(helloExpresstion, 3000);

// 2. truyền trực tiếp function vào trong

// function declaration
// setTimeout(function xinchao2() {
//   console.log("Xin chào nha");
// }, 2000);

// // function arrow
// setTimeout(() => {
//   console.log("Hello bạn nha");
// }, 3000);

// // function expresstion
// setTimeout(function () {
//   console.log("Chao xìn bạn");
// }, 4000);

// trường hợp có tham số truyền vào
// ví dụ với Arrow function
// let helloArrow2 = (yourname) => {
//   console.log("Hello " + yourname);
// };
// // setTimeout(helloArrow2, 3000, "Đức Anh");

// // 4. Khi muốn hủy quá trình thực hiện hàm
// // step 1: Gán settimeout vào 1 biến để lưu giá trị
// let timeOut = setTimeout(helloArrow2, 3000, "Đức");
// //  step 2: Hủy lệnh
// clearTimeout(timeOut);

// 31.4 Javascript setInterval Explained
// https://www.youtube.com/watch?v=zRP0FXcJfm8
// lặp đi lặp lại sau 1 khoảng thời gian
// ví dụ với function declaration
// function showNoti() {
//   console.log("bạn có xxxx tin nhắn chưa đọc");
// }
// in ra hàm sau 2s (2000ms) hàm lặp lại
// setInterval(showNoti, 2000);
// ví dụ 2
// function updateTime() {
//   let curentTime = new Date();
//   console.log(curentTime);
// }
// setInterval(updateTime, 2000);

// let counter = 0;
// 1. Function declaration
// function count() {
//   console.log(counter++);
// }

// 2. function expresstion
// let count = function () {
//   console.log(counter++);
// };

// 3. Function Arrow
// let count = () => {
//   console.log(counter++);
// };
// setInterval(count, 1000);

// 4.hủy lặp
// let count = () => {
//   console.log(counter++);
//   if (counter === 5) {
//     // b2 Dừng lặp clearInterval
//     clearInterval(stopInterval);
//   }
// };
// // b1 Gán biến để nhận giá trị trả về
// let stopInterval = setInterval(count, 1000);

// Bai
// let input = Number(prompt("Nhập thời gian làm bài"));
// alert("Thời gian làm bài của bạn là: " + input + " phút");
// let setsecond = 60;
// function show() {
//   setsecond--;
//   console.log(input - 1 + ":" + setsecond);
//   if (setsecond === 0) {
//     setsecond = 60;
//     input--;
//     if (input < 1) {
//       clearInterval(set);
//     }
//   }
// }
// let set = setInterval(show, 1000);

// Bài tập 29: Viết chương trình nhập vào năm sinh và in ra số tuổi
// kiểm tra điều kiện dữ liệu phải là năm sinh và lớn hơn 0

// function calculateAge(inputYear) {
//   // ép kiểu dữ liệu sang kiểu số
//   let yearOfBirth = Number(inputYear);
//   console.log(yearOfBirth);
//   // kiểm tra  xem năm sinh có là số nguyên và lớn hơn 0
//   if (!Number.isInteger(yearOfBirth) || yearOfBirth <= 0) {
//     alert("Năm sinh ko hợp lệ");
//     return;
//   }
//   // lấy năm hiện tại
//   let currentYear = new Date().getFullYear();
//   // tính tuổi
//   let age = currentYear - yearOfBirth;
//   alert(`Tuổi của bạn là:${age}`);
// }
// // Nhập năm sinh từ người dùng
// let inputYear = prompt("Nhập năm sinh của bạn:");
// // gọi hàm tính tuổi
// calculateAge(inputYear);

// c 2 tự làm
// function demTuoi(nhapNamtuoi) {
//   let tuoiphuHop = Number(nhapNamtuoi);
//   // Kiểm tra xem năm sinh có là số nguyên lớn hơn 0
//   if (Number.isInteger(nhapNamtuoi) || tuoiphuHop >= 0) {
//     // gọi năm hiện tại
//     let namHientai = new Date().getFullYear();
//     let tuoi = namHientai - tuoiphuHop;
//     alert(`Tuổi của bạn là: ${tuoi}`);
//     return;
//   } else {
//     alert("Năm sinh không hợp lệ");
//   }
// }
// // Nhập năm sinh từ người dùng
// let nhapNamtuoi = prompt("Nhập năm sinh của bạn:");
// // gọi hàm tính tuổi
// demTuoi(nhapNamtuoi);

// c3 của 1 bạn trên mạng
// let inputYear = prompt("Mời nhập vào năm sinh");
// if (inputYear <= 0 || isNaN(inputYear)) {
//   alert("Năm sinh không hợp lệ vui lòng nhập lại năm sinh:");
//   inputYear = prompt("Mời nhập vào năm sinh");
// }
// function outPutOld(namSinh) {
//   let timeNow = new Date();
//   let Old = timeNow.getFullYear() - namSinh;
//   return Old;
// }
// let check = outPutOld(inputYear);
// if (check >= 130) {
//   alert(
//     `Tuổi của bạn là: ${check} có vẻ bạn khai báo năm sinh không đúng sự thật khó có ai sống lâu như vậy`
//   );
// } else {
//   alert(`Tuổi của bạn là ${check}`);
// }

// Bài tập 30: Đếm ngược thời gian
// https://www.youtube.com/watch?v=XtZMuCAyQto
// ví dụ thời gian làm bài là 45p chạy về 0 thì báo hết giờ

// let inputTimework = Number(prompt("Mời bạn nhập thời gian:"));

// function demGio(soPhut) {
//   alert(`Thời gian làm bài của bạn là: ${soPhut} phút`);
//   let soGiay = soPhut * 60;

//   let demGioInterval = setInterval(function () {
//     // thân hàm
//     let soPhutLeft = Math.floor(soGiay / 60); //làm tròn lên phút
//     let soGiayLeft = soGiay % 60; //chia lấy phần dư 65%60=5
//     // định dạng lại khi số giây nhỏ hơn 10 dùng toán tử 3 ngôi
//     let dinhDanggiay = soGiayLeft < 10 ? "0" : "";
//     console.log(
//       `Thời gian còn lại: ${soPhutLeft}:${dinhDanggiay}${soGiayLeft}`
//     );

//     if (soGiay <= 0) {
//       clearInterval(demGioInterval); //dừng đếm
//       alert("HẾT GIỜ RỒI CON GIỜI");
//     } else {
//       soGiay--;
//     }
//   }, 1000);
// }
// // gọi hàm
// demGio(inputTimework);

// Bài tập 31:Xây dựng chức năng hiển thị thời gian offline
// https://www.youtube.com/watch?v=M0uj-m8ntvE

// function timeSince(timestamp) {
//   let now = new Date();
//   console.log(`timestamp là: ${now.getTime()}`);
//   // khai báo
//   let timeDifferrence = now - timestamp;
//   // quy đổi sang ms vì timestamp tính bằng ms
//   let seconds = Math.floor(timeDifferrence / 1000);
//   let minutes = Math.floor(seconds / 60);
//   let hours = Math.floor(minutes / 60);
//   let days = Math.floor(hours / 24);
//   let months = Math.floor(days / 30);
//   let years = Math.floor(months / 12); //làm tròn xuống số nguyên

//   if (years > 0) {
//     return `Online ${years} năm trước`;
//   } else if (months > 0) {
//     return `Online ${months} tháng trước`;
//   } else if (days > 0) {
//     return `Online ${days} ngày trước`;
//   } else if (hours > 0) {
//     return `Online ${hours} giờ trước`;
//   } else if (minutes > 0) {
//     return `Online ${minutes} phút trước`;
//   } else {
//     return `Online ${seconds} giây trước`;
//   }
// }
// // ví dụ sử dụng
// let timeOffline = 1635272386209; // thời gian offline
// console.log(timeSince(timeOffline));


