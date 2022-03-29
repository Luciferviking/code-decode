//element to show the coded text
var y = document.getElementById("#");



const input_cont = document.getElementById("code_text_box");
const output_cont = document.getElementById("coded_text_box");

const message = input_cont;
console.log(message.value);
message.value = "";
message.value += "";
message.addEventListener("input", function handleChange(event) {

	// constants
	const alph_array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",".", "?", "!","#"];
	const new_alph_array = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26",".", "?", "!","#"];

	const split_by_ltr = "";
	const split_by_no = ",";

	const join_mth_ltr = "";
	const join_mth_no = ",";

	// message values
	var message_1 = event.target.value;
	var user_input = message_1.toLowerCase();
	console.log(message_1);

	var string_split_sentence = user_input.split(" "); //hello hi

	var word_split_var_array = [];
	//for every index of word_split_var_array there another array containing letters of words [[h,e,l,l,o],[h,i]]0
	for (let i = 0; i < string_split_sentence.length; i++) {
		word_split_var_array[i] = string_split_sentence[i].split(split_by_ltr);
	}

	//searching the index of particular letter in alp_array
	var words_letters_index = [];
	//creating nested list inside words_letters_index array to store letters of the same word in the same index
	for (let i = 0; i < string_split_sentence.length; i++) {
		words_letters_index[i] = [];
	}

	// var index_word = [words_letters_index];
	for (let i = 0; i < word_split_var_array.length; i++) {
		for (let j = 0; j < word_split_var_array[i].length; j++) {
			words_letters_index[i][j] = alph_array.indexOf(
				word_split_var_array[i][j]
			);
		}
	}

	console.log(words_letters_index);

	//encryting starting from here
	var new_word_letters_array = [];
	for (let i = 0; i < string_split_sentence.length; i++) {
		new_word_letters_array[i] = [];
	}
	//changing the value
	for (let i = 0; i < string_split_sentence.length; i++) {
		for (let j = 0; j < word_split_var_array[i].length; j++) {
			new_word_letters_array[i][j] = new_alph_array[words_letters_index[i][j]];
		}
	}
	//change words
	var change_words_array = [];
	for (let i = 0; i < string_split_sentence.length; i++) {
		change_words_array[i] = new_word_letters_array[i].join(join_mth_no);
	}
	//change sentence
	var change_sentence = change_words_array.join(" ");

	console.log(new_word_letters_array);
	console.log(change_words_array);
	console.log(change_sentence);

	output_cont.innerText = change_sentence;
});

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
	dark.style.background = l_secondary;
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
	light.style.backgroundColor = d_secondary;
	light.style.color = l_accent;
	dark.style.background = l_accent;
	dark.style.color = l_primary;

	//theme
	root.style.setProperty("--d-primary", d_primary);
	root.style.setProperty("--d-secondary", d_secondary);
	root.style.setProperty("--d-color", d_color);
}
