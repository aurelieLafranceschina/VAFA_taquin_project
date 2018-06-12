$(document).ready(function () {


// Déclaration du tableau de données à 2 dimmensions
let cases = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 0],
];

// $(".i2 .j2").html(cases[2][3]);


// Double boucle pour parcouri le tableau de données et remplir le html
for (let i=0; i <4; i++) {
	for (let j=0; j<4; j++) {
		$(".i"+i + " .j"+j).html(cases[i][j]);
	}
}



// function createTable(cases) {
//   var table = document.createElement('table');
//   var tableBody = document.createElement('tbody');

//   cases.forEach(function(rowData) {
//     var row = document.createElement('tr');

//     rowData.forEach(function(cellData) {
//       var cell = document.createElement('td');
//       cell.appendChild(document.createTextNode(cellData));

//       row.appendChild(cell);
//     });

//     tableBody.appendChild(row);
//   });

//   table.appendChild(tableBody);
//   document.body.appendChild(table);
// }

// createTable([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 0],
// ]);

})