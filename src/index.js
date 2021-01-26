// var val1 = "変数";
// console.log(val1);

// val1 = "上書き";
// console.log(val1);

// var val1 = "変数の再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数は上書きできる";
// console.log(val2);

//エラー
// let val2 = "let変数を再宣言"

// const val3 = "const変数";
// console.log(val3);

//エラー
// val3 = "const変数を上書き";

//エラー
// const val3 = "再宣言";

//オブジェクト、配列は変更可能
// const val4 = {
//   name: "aaa",
//   age: 22
// };

// val4.name = "bbb";
// val4.addres = "osaka";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monky");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "あああ";
// const age = 22;

// //従来の方法
// const message1 = "名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func2_1 = (str) => {
//   return str;
// };
// console.log(func2_1("func2_1です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "たろう",
//   age: 22
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

// const myProfile = ["たろう", 22];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です`;
// console.log(message4);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("たろう");

/**
 * スプレッド構文
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100
// console.log(arr6);
// console.log(arr4);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr4[0] = 100;
// console.log(arr8);

/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["田中", "山田", "佐藤"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index+1}番目は${nameArr[index]}です`);
// }

//配列を新たに作る
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//関数内の処理を実行
// nameArr.map((name, index) => console.log(`${index+1}番目は${nameArr[index]}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name ==="佐藤"){
//     return name
//   } else {
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '範囲内です';
// }
// console.log(checkSum(20,100));

/**
 * 論理演算子の本当の意味を知ろう
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("１か２はtrueになります");
// }
// if (flag1 && flag2) {
//   console.log("１も２もtrueになります");
// }

// || は左がfalseなら右を返す
// const num = 100;
// const fee = num || "金額が未設定";
// console.log(fee);

// &&は左がtrueなら右を返す
// const num2 = null;
// const fee2 = num2 && "設定されました";
// console.log(fee2);
