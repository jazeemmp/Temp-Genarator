const tempFiled = document.getElementById("tempFiled");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");
let temp;
function convert() {
  if (toFahrenheit.checked) {
    temp = Number(tempFiled.value);
    temp = (temp * 9) / 5 + 32;
    result.textContent = temp.toFixed(2) + "°F";
  } else if (toCelsius.checked) {
    temp = Number(tempFiled.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "error",
      title: "Select a unit",
    });
  }
}
