//计算日期
function countdown() {
  // 获取当前日期
  var currentDate = new Date();

  // 设置目标日期
  var targetDate1 = new Date("2026-6-1");
  var targetDate2 = new Date("2084-4-5");

  // 计算剩余天数
  var timeDiff1 = targetDate1 - currentDate;
  var timeDiff2 = targetDate2 - currentDate;

  var remainingDays1 = Math.floor(timeDiff1 / (1000 * 60 * 60 * 24));
  var remainingDays2 = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24));

  // 更新页面上的倒计时文本
  document.getElementById("countdown1").innerHTML =
    "距离大学毕业还有 " + remainingDays1 + " 天";
  var countdownElement = document.getElementById("countdown1");
  countdownElement.style.color = "red";
//   countdownElement.style.fontWeight = "bold";

  document.getElementById("countdown2").innerHTML =
    "距离挂掉还有 " + remainingDays2 + " 天";
}

// 在页面加载完成后开始倒计时
window.onload = function () {
  countdown();
};

//要事实现
let youShi = false;

function change() {
  let anNiu = document.getElementById("anNiu");
  let shuRuKuang = document.getElementById("shuRuKuang");

  if (youShi) {
    youShi = false;
    anNiu.innerText = "✔";
    shuRuKuang.style.borderBottomColor = "#fff";
    shuRuKuang.value = "";
    shuRuKuang.readOnly = false;
    window.localStorage.removeItem("shi");
  } else {
    youShi = true;
    anNiu.innerText = "✘";
    shuRuKuang.style.borderBottomColor = "transparent";
    shuRuKuang.readOnly = true;
    window.localStorage.setItem("shi", shuRuKuang.value);
  }
}
let data = window.localStorage.getItem("shi");
if (data) {
  document.getElementById("shuRuKuang").value = data;
  change();
}
