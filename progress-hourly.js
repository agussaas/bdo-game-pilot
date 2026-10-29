(()=>{
  const t = Number(prompt("Total TL:", "55000"));
  const p = Number(prompt("TL per jam:", "19000"));
  
  if (!t || !p || t < 0 || p <= 0) {
    alert("Invalid input.");
    return;
  }
  
  const totalSeconds = Math.floor((t / p) * 3600);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  const result = `Progress: ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
  
  alert(result);
  console.log(result);
})();
