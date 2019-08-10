const MIN_GRID_DIMENSION = 16;

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

function invalid(n)
{
	return isNaN(n) || n < MIN_GRID_DIMENSION;
}

function requestDimension(minDimension)
{
	const str = prompt("Enter an integer for the new grid dimensions." +
			`Must be an integer greater or equal to ${minDimension}`);

	let n = parseInt(str);

	while(invalid(n))
	{
		const s = prompt("Choice invalid. Enter an integer for the new grid dimensions." +
			`Must be an integer greater or equal to ${minDimension}`);

		n = parseInt(s);
	}

	return n;
}

let reset = document.getElementById('reset-button');

reset.addEventListener('click', () => {
	let dim = requestDimension(MIN_GRID_DIMENSION);
	console.log(dim);
	createGrid(dim, dim);
});

createGrid(MIN_GRID_DIMENSION, MIN_GRID_DIMENSION);
