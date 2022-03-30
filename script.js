
//for animation of copied
var copied_anim = document.getElementById("copied_anim");
copied_anim.style.display = "none";

//copying text
function copy() {
  var copyText = output_cont;
  // copyText.select();
  // copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  // alert("Copied the text: " + copyText.value);

  //for animation of copied text
  copied_anim.style.display = "block";
	setTimeout(close_anim, 500);
  function close_anim(){
		copied_anim.style.display = "none";
	}
}

//error
var error = document.getElementById("error");
error.style.display = "none";
function error_show(){
	error.style.display = "block";
	setTimeout(close_error, 600);
	function close_error(){
		error.style.display = "none";
	}
}


//toggle theme
function bg_dark() {
	var light = document.getElementById("light");
	var dark = document.getElementById("dark");

	var root = document.querySelector(":root");
	var rs = getComputedStyle(root);
	var l_accent = rs.getPropertyValue("--l-accent");

	//setting color values
	var l_primary = "#fff";
	var l_secondary = "#f2f2f2";
	var d_primary = "rgb(28,28,30)";
	var l_color = "black";

	//toggle button theme
	dark.style.background = l_primary;
	dark.style.color = l_accent;
	light.style.backgroundColor = l_accent;
	light.style.color = l_primary;

	//theme
	root.style.setProperty("--d-primary", l_primary);
	root.style.setProperty("--d-secondary", l_secondary);
	root.style.setProperty("--d-color", l_color);
}

function bg_light() {
	var light = document.getElementById("light");
	var dark = document.getElementById("dark");

	var root = document.querySelector(":root");
	var rs = getComputedStyle(root);
	var l_accent = rs.getPropertyValue("--l-accent");

	//setting color values
	var l_primary = "#fff";
	var d_primary = "rgb(28,28,30)";
	var d_secondary = "rgb(44,44,46)";
	var d_color = "#a1a1a6";

	// toogle button theme
	light.style.backgroundColor = d_primary;
	light.style.color = l_accent;
	dark.style.background = l_accent;
	dark.style.color = l_primary;

	//theme
	root.style.setProperty("--d-primary", d_primary);
	root.style.setProperty("--d-secondary", d_secondary);
	root.style.setProperty("--d-color", d_color);
}

//vibrations
function vibrate() {
  navigator.vibrate(100);
  console.log("triggered");
};