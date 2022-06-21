let dividirCookie = document.cookie.split("=");

if (dividirCookie[0] == "acceptcookie" && dividirCookie[1] == "true") {

 
  document.getElementById("cookie-advisor").style.display = "none";
} else {
  document.getElementById("cookie-advisor").style.display = "block";
}

function saveCookie() {
  var inFifteenMinutes = new Date(new Date().getTime() + 1 * 60 * 1000);

  console.log(inFifteenMinutes)
  let cookies = `acceptcookie=true;expires=${inFifteenMinutes} UTC;  path=/`;

  document.cookie = cookies;

 
}
