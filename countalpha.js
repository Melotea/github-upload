var $ = function (id) 
{
    return document.getElementById(id);
};

function main (){    

var currentChamp= " ";
var currentstr= " ";

for ( ; ; ){
        currentstr = prompt("enter a word or *** to quit");
        if (currentstr == "***")
                break;
        if(countAlpha(currentstr) > countAlpha(currentChamp));
        currentChamp = currentstr;
}//for
    alert("The string with the max number of unique characters is; " + currentChamp + "\n The number of unique chars is: " + countAlpha(currentChamp));
}

function countAlpha(str2bCounted) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var numUnique = 0;
    str2bCounted = str2bCounted.toLowerCase();
for(var i=0; i< alphabet.length; i++){
    if(str2bCounted.includes(alphabet.charAt(i)))
    numUnique++; 
    
}//for
    return numUnique;
}//function countalpha 
window.onload = function() {
        $("runcountAlpha").onclick = main;
};
