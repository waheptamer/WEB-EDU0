// ننتظر تحميل الصفحة بالكامل قبل ما نطبق الوضع الليلي
document.addEventListener("DOMContentLoaded", function() {
  // شوف لو الداكن متفعل قبل كده في localStorage
  if(localStorage.getItem('dark-mode') === 'enabled'){
    document.body.classList.add('dark');
  }
});

// دالة تبديل الوضع الداكن
function toggleDark() {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')){
    localStorage.setItem('dark-mode','enabled');
  } else {
    localStorage.setItem('dark-mode','disabled');
  }
}
