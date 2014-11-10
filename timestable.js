//run by readNumbers, runs list through read nums, returns readable list
var transform = function(f, list){
	var newList = []; 
	for(i in list){
		newList[i] = f(list[i]);
	}
	return newList;
};
//takes scores and runs them through transform
var readNumbers = function(){
	
	var inputBox = document.getElementById('scores');
	var inputStr = inputBox.value; 
	var inputArr = inputStr.split(" ");
	return transform(parseInt , inputArr);
};
//base function
var products = [];
var makeTimesTable = function(n){
        for(var i = 0; i <= 10; i++){
                var input = (n * i);
                products.push(input);
        }
        return products;
};
// I will now attempt to make a times table
var tableTime = function (n){
	var table = document.body.createElement('table');
	var tableRow = document.body.table.createElement('tr');
	var tableData = document.body.table.tableRow.createElement('td');
	var textNode = lookup
	for(var i = 0; i<=10; i++){
			document.appendChild(tableRow)
			docuent.appendChild(tableData)
	};
	return table;
};




//function to format and display
var printTimesTable = function (n){
        //console.log('Multiplication Tables Calculator');
        //console.log('--------------------------------');
        //console.log('to quit enter \'q\' at the prompt');
        //var n =  prompt('Enter a whole number from 1 to 7 ');
        var table = makeTimesTable(n);
        for(var i = 0; i <= 10; i++){
			console.log( n +' * '+ i +' = '+ products[i]);
			lookup.innerHTML = lookup.innerHTML + (n +' * '+ i +' = '+ products[i] + "<br/>");
			//lookup.innerHTML = n +' * '+ i +' = '+ products[i] + "<br/>";
			// <br/> is supposed to make a line break
			// online it says inner.html is overriding for loop
			
		};
        return n
};
//defining button.onclick run
var lookup = document.getElementById('result');
var run = function() {
	var scores = readNumbers();
 	var timTa = printTimesTable(scores);
	tableTime;
	//var lookup = document.getElementById('result');
	//lookup.innerHTML = timTa;
	//document.lookup.appendChild(timTa)	
};
// the button
var button = document.getElementById('runner');
button.onclick = run;

/*
var cleaningShop = function (n){
        while(n != 'q'){
                printTimesTable ();
        }
        if(n = 'q'){
                console.log('thankyou for using my program. Goodbye!')
        }
};
*/


