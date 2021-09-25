const submitlocal = () => {
  const idInput = document.getElementById("storage-id")
  const id = idInput.value;
  const valueinput = document.getElementById('storage-data')
  const value = valueinput.value
if(id && value){
  //locals
localStorage.setItem(id,value)
}
idInput.value=''
valueinput.value=''
};
