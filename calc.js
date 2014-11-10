var transformTri = function(f, list){
	var newList = []; 
	for(i in list){
		newList[i] = f(list[i]);
	}
	return newList;
};

var transformFib = function(f, list){
	var newList = []; 
	for(i in list){
		newList[i] = f(list[i]);
	}
	return newList;
};
	
var readNumbersTri = function(){
	
	var inputBox = document.getElementById('scoresTri');
	var inputStr = inputBox.value; 
	var inputArr = inputStr.split(" ");
	return transformTri(parseInt , inputArr);
};

var readNumbersFib = function(){
	
	var inputBox = document.getElementById('scoresFib');
	var inputStr = inputBox.value; 
	var inputArr = inputStr.split(" ");
	return transformFib(parseInt , inputArr);
};

var triangular = function(n){
        var result = 0;
        for(var i = 0; i <= n; i++){
                result = result + i;
        }
        return result;
};

var fibonacci = function (n){
        var a;
        var b = 1;
        var c = 0;
        for (var i = 0; i < n; i++){
                a = b + c;
                c = b;
                b = a;
        }
        return a
};     					   	

var runTri = function() {
	var scores = readNumbersTri();
	var Tri = triangular(scores);
	var lookup = document.getElementById('resultTri');
	lookup.innerHTML = 'Your triangular numnner is ' + Tri;
};

var runFib = function() {
	var scores = readNumbersFib();
	var Fib = fibonacci(scores);
	var lookup = document.getElementById('resultFib');
	lookup.innerHTML = 'Your fibonacci number is ' + Fib;
};

var button = document.getElementById('runnerFib');
button.onclick = runFib;

var button = document.getElementById('runnerTri');
button.onclick = runTri;