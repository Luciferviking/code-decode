const input_cont = document.getElementById("code_text_box");
const output_cont = document.getElementById("coded_text_box");

const message = input_cont;
// console.log(message.value);
message.value = "";
message.value += "";
message.addEventListener("input", function handleChange(event) {

	// constants
	const alph_array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",".", "?", "!","#","_","1","2","3","4","5","6","7","8","9","0",","];
	const new_alph_array = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26",".", "?", "!","#","_","a0","b0","c0","d0","e0","f0","g0","h0","0i","0j",","];

	const split_by_ltr = "";
	const split_by_no = "*,";

	const join_mth_ltr = "";
	const join_mth_no = "*,";

	// message values
	var message_1 = event.target.value;
	var user_input = message_1.toLowerCase();
	// console.log(message_1);

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

	// console.log(words_letters_index);

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

	// console.log(new_word_letters_array);
	// console.log(change_words_array);
	// console.log(change_sentence);

	output_cont.innerText = change_sentence;
});
