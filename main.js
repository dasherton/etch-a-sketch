let grid = document.getElementById('grid');
let cells = document.getElementsByClassName('cell');

function removeChildren(parent)
{
	while(parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function createGrid(numRows, numCols)
{
	removeChildren(grid);

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
	Array.from(cells).forEach(fn);
}

createGrid(16, 16);
