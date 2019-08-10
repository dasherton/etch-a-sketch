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
		cell.addEventListener('mouseover', shade);
	})
}

function shade()
{
	this.style.backgroundColor = "white";

	if(this.style.filter == '')
	{
		this.style.filter = 'brightness(90%)';
	}
	else if(this.style.filter != 'brightness(0%)')
	{
		let current = this.style.filter.slice(-4, -2);
		current -= 10;
		this.style.filter = `brightness(${current}%)`;
	}
}

function forEachCell(fn)
{
	Array.from(document.getElementsByClassName('cell')).forEach(fn);
}

function requestDimension(minDimension)
{
	const str = prompt("Enter an integer for the new grid dimensions." +
			`Must be an integer greater or equal to ${minDimension}`);

	let n = parseInt(str);

	while( isNaN(n) || n < minDimension )
	{
		const s = prompt("Choice invalid. Enter an integer for the new grid dimensions." +
			`Must be an integer greater or equal to ${minDimension}`);

		n = parseInt(s);
	}

	return n;
}

function requestNewGrid()
{
	const dim = requestDimension(MIN_GRID_DIMENSION);
	createGrid(dim, dim);
}

let reset = document.getElementById('reset-button');
reset.addEventListener('click', requestNewGrid);

createGrid(MIN_GRID_DIMENSION, MIN_GRID_DIMENSION);
