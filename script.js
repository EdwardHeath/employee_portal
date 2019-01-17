document.querySelector(".community").addEventListener('click', openCommunity);
document.querySelector(".employee").addEventListener('click', openEmployee);

function openCommunity() {
    document.querySelector(".display").innerHTML = '<iframe src="community.html"></iframe>'
}

function openEmployee() {
    document.querySelector(".display").innerHTML = '<iframe src="employee.html"></iframe>'
}