const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
  let prc = document.getElementsByClassName("price");
	let sum = 0;
	for(let ele of prc){
		sum += parseFloat(ele.textContent);
	}
	console.log(sum);
	
	let newRow = document.createElement("tr");
	let newColCel = document.createElement("td");
	newColCel.setAttribute("id", "ans");
	newColCel.textContent = `${sum}`;

	newRow.appendChild(newColCel);
	const tblNode = document.querySelector("table");
	tblNode.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

