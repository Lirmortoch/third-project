function transliterate(word){
    let answer = ""
      , a = {};

   a["Ё"]="YO";a["Й"]="I";a["Ц"]="TS";a["У"]="U";a["К"]="K";a["Е"]="E";a["Н"]="N";a["Г"]="G";a["Ш"]="SH";a["Щ"]="SCH";a["З"]="Z";a["Х"]="H";a["Ъ"]="'";
   a["ё"]="yo";a["й"]="i";a["ц"]="ts";a["у"]="u";a["к"]="k";a["е"]="e";a["н"]="n";a["г"]="g";a["ш"]="sh";a["щ"]="sch";a["з"]="z";a["х"]="h";a["ъ"]="'";
   a["Ф"]="F";a["Ы"]="I";a["В"]="V";a["А"]="A";a["П"]="P";a["Р"]="R";a["О"]="O";a["Л"]="L";a["Д"]="D";a["Ж"]="ZH";a["Э"]="E";
   a["ф"]="f";a["ы"]="i";a["в"]="v";a["а"]="a";a["п"]="p";a["р"]="r";a["о"]="o";a["л"]="l";a["д"]="d";a["ж"]="zh";a["э"]="e";
   a["Я"]="Ya";a["Ч"]="CH";a["С"]="S";a["М"]="M";a["И"]="I";a["Т"]="T";a["Ь"]="'";a["Б"]="B";a["Ю"]="YU";
   a["я"]="ya";a["ч"]="ch";a["с"]="s";a["м"]="m";a["и"]="i";a["т"]="t";a["ь"]="'";a["б"]="b";a["ю"]="yu";
   a["1"]="";a["2"]="";a["3"]="";a["4"]="";a["5"]="";
   a["6"]="";a["7"]="";a["8"]="";a["9"]="";a["0"]="";

   for (i in word) {
        if (word.hasOwnProperty(i)) {
            if (a[word[i]] === undefined){
            answer += word[i];
            } 
            else {
            answer += a[word[i]];
            }
        }
   }
   return answer;
}

let button = document.querySelector(".form__button");
let input = document.getElementById("text_tr1");
let grid = document.querySelector(".grid");
let count = 1;

function inputLength() {
	return input.value.length;
}

function typeOfCount() {
    return typeof count;
}

function createGridElement() {  
    let gridElement = document.createElement("div");  
    let gridTransElement = document.createElement("div");

    let text = document.createElement("p");
    let transText = document.createElement("p");

    text.appendChild(document.createTextNode(input.value));
    transText.appendChild(document.createTextNode(transliterate(input.value)));

    transText.classList.add("grid__element_text");
    
    gridElement.appendChild(text);
    gridTransElement.appendChild(transText);

    if (count > 1 && typeOfCount() === "number") {
        gridElement.classList.add("grid__element","grid__element_border");
        gridTransElement.classList.add("grid__element","grid__element_border");
    }
    else {
        gridElement.classList.add("grid__element");
        gridTransElement.classList.add("grid__element");
    }

    grid.appendChild(gridElement);
    grid.appendChild(gridTransElement);

    input.value = "";

    count+=1;
}

function addElementAfterClick() {
	if (inputLength() > 0 ) {
		createGridElement();
    }
}

function addElementAfterPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createGridElement();
	}
}

button.addEventListener("click", addElementAfterClick )

input.addEventListener("keypress", addElementAfterPress)