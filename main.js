function removeChildren(parent)
{
	while(parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function populateGrid(grid, numRows, numCols)
{
	for(let i = 0; i < numRows; ++i)
	{
		let row = document.createElement('div');
		grid.appendChild(row).className = "row";

		for(let j = 0; j < numCols; ++j)
		{
			let col = document.createElement('div');
			row.appendChild(col).className = "cell";
		}
	}
}

function createGrid(numRows, numCols)
{
	let grid = document.getElementById('grid');

	removeChildren(grid);
	populateGrid(grid, numRows, numCols);

	forEachCell((cell) => {
		cell.addEventListener('mouseover', paintBlack);
	})
}

function paintBlack()
{
	this.style.backgroundColor = "black";
	this.style.opacity = 1;
}

function forEachCell(fn)
{
	Array.from(document.getElementsByClassName('cell')).forEach(fn);
}

function requestDimension()
{
	let n = prompt("How big do you want the grid?");
	return parseInt(n);
}

createGrid(16, 16);

let reset = document.getElementById('reset-button');

reset.addEventListener('click', () => {
	let dim = requestDimension();
	createGrid(dim, dim);
});
