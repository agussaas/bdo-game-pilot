(()=>{
  const p = s => [...s.matchAll(/(\d+)\s*([hm])/gi)].reduce((a, [, v, u]) => a + (u.toLowerCase() === "h" ? Number(v) * 60 : Number(v)), 0);
  
  const i = prompt("Total progress sebelumnya:", "360 H 51 M");
  if (!i) return;
  
  const x = prompt("Progress:", "8 H 30 M");
  if (!x) return;
  
  const totalMinutes = p(i) + p(x);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  
  const result = `Total Hours: ${hours} H ${minutes} M`;
  
  console.log(result);
  alert(result);
})();
