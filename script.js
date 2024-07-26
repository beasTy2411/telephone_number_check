const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");

const checkNum = () =>{
  const regex = /([^0-9()-])/g;
  let outputMSG="";
}

function checkFunc(){
  if (input.value === ""){
    window.alert("Please provide a phone number");
  }else{
    updateUI();
  }
}

const clearFunc=()=>{
  resultDiv.innerText = "";
  input.value = "";
}

const updateUI=()=>{
  resultDiv.innerText = outputMSG;
  resultDiv.classList.remove("hidden");
}

clearBtn.addEventListener("click",clearFunc)
checkBtn.addEventListener("click",checkFunc)