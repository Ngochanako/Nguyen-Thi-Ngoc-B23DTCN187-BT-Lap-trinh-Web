// Hàm thêm số hoặc ký tự vào màn hình
function insert(value) {
    document.getElementById("result").value += value;
}

// Hàm xóa toàn bộ màn hình
function clearScreen() {
    document.getElementById("result").value = "";
}

// Hàm tính toán kết quả
function calculate() {
    let expression = document.getElementById("result").value;
    try {
        document.getElementById("result").value = eval(expression);
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}

// Hàm xóa ký tự cuối cùng
function backspace() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.substring(0, result.length - 1);
}

// Hàm thay đổi dấu âm/dương
function toggleSign() {
    let current = document.getElementById("result").value;
    if (current.charAt(0) === '-') {
        document.getElementById("result").value = current.substring(1);
    } else {
        document.getElementById("result").value = '-' + current;
    }
}

// Hàm tính căn bậc hai
function sqrt() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = Math.sqrt(current);
}

// Hàm tính bình phương
function square() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = Math.pow(current, 2);
}

// Hàm tính nghịch đảo
function reciprocal() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = 1 / current;
}
