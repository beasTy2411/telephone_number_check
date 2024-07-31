const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultDiv = document.getElementById("results-div");
let outputMSG = "";


function validator(){
const inputVal = input.value;
const regex1 = /(^(1\s?)?)((\([0-9]{3}\)|[0-9]{3}))([\s\-]?)([0-9]{3})([\s\-]?)([0-9]{4}$)/g;

if(!regex1.test(inputVal)){
  outputMSG =`Invalid US number: ${inputVal}`;
}else{
  const regmain = /[\s\(\)-]/g;
  let modInput = inputVal.replace(regmain,"");
  console.log(modInput);

  if(modInput.length == 11){
    if(modInput[0]==="1"){
      input.value = ""
      outputMSG = `Valid US number: ${inputVal}`;
    }else{
      input.value = ""
      outputMSG = `Invalid US number: ${inputVal}`;
    }
  }else if(modInput.length==10){
    input.value = ""
    outputMSG = `Valid US number: ${inputVal}`;
  }else{
    input.value = ""
    outputMSG = `Invalid US number: ${inputVal}`;
  }
}
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
  validator();
  resultDiv.innerText = outputMSG;
  resultDiv.classList.remove("hidden");
}

clearBtn.addEventListener("click",clearFunc)
checkBtn.addEventListener("click",checkFunc)