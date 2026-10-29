(()=>{
  const totalTL = Number(prompt("Total TL:", "55000"));
  const agrisRate = Number(prompt("TL/hr dengan Agris:", "19000"));
  const agrisCostPerHour = Number(prompt("Agris yang digunakan per jam:", "32000"));
  const normalRate = Number(prompt("TL/hr tanpa Agris:", "11000"));
  const currentAgris = Number(prompt("Agris yang digunakan:", "32000"));
  
  if (!totalTL || !agrisRate || !agrisCostPerHour || !normalRate || totalTL < 0 || agrisRate <= 0 || agrisCostPerHour <= 0 || normalRate <= 0) {
    alert("Invalid input.");
    return;
  }

  const maxAgrisHours = currentAgris / agrisCostPerHour;
  const maxAgrisTL = maxAgrisHours * agrisRate;

  let agrisTL = 0;
  let normalTL = 0;
  let hoursWithAgris = 0;
  let hoursWithoutAgris = 0;

  if (totalTL <= maxAgrisTL) {
    agrisTL = totalTL;
    hoursWithAgris = agrisTL / agrisRate;
  } else {
    agrisTL = maxAgrisTL;
    normalTL = totalTL - maxAgrisTL;
    hoursWithAgris = maxAgrisHours;
    hoursWithoutAgris = normalTL / normalRate;
  }

  const formatHours = (h) => {
    const totalSecs = Math.floor(h * 3600);
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    return `${hrs} Hours ${mins} Minutes ${secs} Seconds`;
  };

  const totalSeconds = Math.floor((hoursWithAgris + hoursWithoutAgris) * 3600);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const result = 
    `Total Time: ${hours} Hours ${minutes} Minutes ${seconds} Seconds\n` +
    `Time with Agris: ${formatHours(hoursWithAgris)}\n` +
    `Time without Agris: ${formatHours(hoursWithoutAgris)}`;

  alert(result);
  console.log(result);
})();
