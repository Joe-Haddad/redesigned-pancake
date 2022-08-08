function plus() {
				var value1 = document.getElementById("t1input").value;
				while (value1 == 'null') {
						document.getElementById("plusTxt").innerHTML = "ENTERRRRRR!";
					 if (value1 != 'null') {
					 				document.getElementById("plusTxt").innerHTML = "you entered " + value1;
					 };
				}
}
