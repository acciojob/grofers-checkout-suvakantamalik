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
	let tbl = document.getElementById("table");
	let row = tbl.insertRow();
	let col1 = row.insertCell();
	col1.textContent("Total: ");
	let col2 = row.insertCell();
	col1.textContent("Total: ");
};

getSumBtn.addEventListener("click", getSum);

