// Ex 1 + 2: Show time
setInterval(() => {
	let date = new Date();
	// show Date and Hour in EX1
	let strDateAndHour = "Bây giờ là "
	+ date.getHours() + " giờ ngày " + date.getDate();
	document.getElementById("dataDateAndHour").innerText = strDateAndHour;
	// get day, month, year now
	day = date.getDate()
	month = date.getMonth();
	let strMonth =  (month < 9) ? ("0" + (month + 1)) : String(month + 1);
	let strDay =  (day < 10) ? ("0" + day) : String(day);
	let strYear = String(date.getFullYear());
	// show time EX2
	document.getElementById("mm-dd-yyyy").innerText = "Tháng - Ngày - Năm: "
	+ strMonth + "-" + strDay + "-" + strYear;
	document.getElementById("mm/dd/yyyy").innerText = "Tháng / Ngày / Năm: "
	+ strMonth + "/" + strDay + "/" + strYear;
	document.getElementById("dd-mm-yyyy").innerText = "Ngày - Tháng - Năm: "
	+ strDay + "-" + strMonth + "-" + strYear;
	document.getElementById("dd/mm/yyyy").innerText = "Ngày / Tháng / Năm: "
	+ strDay + "/" + strMonth + "/" + strYear;
},1000);
// Ex 3: check if inc digit
function Ex3Action(){
	//get Number need checked
	let numberEx3 = document.getElementById("numberEx3").value;
	let isNotFill = (numberEx3.length == 0);
	if (isNotFill){
		alert("Vui lòng không để trống");
		return;
	}
	if (checkIncDigit(numberEx3)){
		alert("Chuẩn ui! " + numberEx3 + " có các chữ số tăng dần ấy")
	} else {
		alert("Bậy ui! " + numberEx3 + " không có các chữ số tăng dần nha")
	}
	
}
// Ex 4: replace all char by char after it
function Ex4Action(){
	let strInit = document.getElementById("textEx4").value;
	let strAns = "";
	let l = strInit.length;
	for (var i = 0;i < l;i++){
		if (strInit[i] == "z" || strInit[i] == "Z"){
			alert(strInit[i] + " không có kí tự liền sau");
			return;
		}
		if (strInit[i] >= "0" && strInit[i] <= "9"){
			alert("Chuỗi không được chứa kí tự số");
			return;
		}
		strAns += String.fromCharCode(strInit.charCodeAt(i) + 1);
	}
	document.getElementById("textEx4").value = strAns;

}
function Ex5Action(){
	let strInit = document.getElementById("textEx5").value;
	let strAns = "";
	let l = strInit.length;
	if ((l < 3) || (l % 2 == 0)){
		alert("Nhập không hợp lệ");
		return;
	}
	let center = (l - l % 2)/2;
	strAns = strInit.slice(center - 1,center + 2);
	alert("Ba kí tự giữa: " + strAns);

}
function Ex6Action(){
	let strInit = document.getElementById("textEx6").value;
	if (strInit.length == 0){
		alert("Dử liệu rỗng");
		return;
	}
	let arr = strInit.split(" ");
	let max = 1;
	let numberMax = arr[0];
	let size = arr.length;
	for (var i = 0;i < size-max;i++){
		if (arr[i] == "") continue;
		let tem = 1;
		for (var j = i+1;j < size;j++){
			if (arr[i] == arr[j]){
				tem++;
				arr[j] = "";
			}
		}
		if (tem > max){
			max = tem;
			numberMax = arr[i];
		}
	}
	alert("Số xuất hiện nhiều nhất: " + numberMax + " số lần: " + max);

}
function Ex7Action(){
	let str = document.getElementById("textEx7").value;
	let hasJava = str.indexOf("java") != -1;
	let ans = 'Chuỗi "' + str + '" ' + (hasJava ? "có" : "không") + ' chứa chuỗi java';
	alert(ans);	
}
function Ex8Action(){
	let numberOfMonth = document.getElementById("numberEx8").value;
	alert(getNameOfMonth(Number(numberOfMonth)));
}
function Ex9Action(){
	let str = document.getElementById("textEx9").value;
	if (str.length == 0){
		alert("Chuỗi rỗng");
		return;
	}
	let arr = str.split(" ");
	let word = "";
	arr.forEach((item) => {
		word = (item.length > word.length) ? item : word;
	})
	alert(`Từ "${word}" dài nhất`)
}
function Ex10Action(){
	let numA = Number(document.getElementById("numberAEx10").value);
	let numB = Number(document.getElementById("numberBEx10").value);
	if (numA > numB){
		alert("Dử liệu không hợp lệ");
		return;
	}
	arrPrime = [];
	for (var i = numA;i <= numB;i++){
		if (checkIsPrime(i)) arrPrime.push(i);
	}
	if (arrPrime == 0){
		alert("Không có số nguyên tố nào cả")
	} else {
		alert("Các số nguyên tố a => b là: " + arrPrime.join(", "));
	}

	
}
//Super function
function checkIsPrime(n){
	if (n <=1 || n == 4) return false;
	if (n == 2 || n == 3) return true;
	for (var j = 2;j*j <= n;j++){
		if (n % j == 0) return false;
	}
	return true;

}
function checkIncDigit(n){
	if (Number(n) <= 11) return false;
	let l = n.length;
	for (var i = 0;i < l-1;i++){
		if (n[i] >= n[i+1]) return false;
	}
	return true;
}

function getNameOfMonth(n){
	switch (n){
		case 1: return "Tháng một";
		case 2: return "Tháng hai";
		case 3: return "Tháng ba";
		case 4: return "Tháng bốn";
		case 5: return "Tháng năm";
		case 6: return "Tháng sáu";
		case 7: return "Tháng bảy";
		case 8: return "Tháng tám";
		case 9: return "Tháng chín";
		case 10: return "Tháng mười";
		case 11: return "Tháng mười một";
		case 12: return "Tháng mười hai";
		default: return "Không hợp lệ"
	}
}

