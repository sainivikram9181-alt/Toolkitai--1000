const TOOLS = [];
const names = ["ChatGPT","Claude","Gemini","Midjourney","Leonardo","Runway","Pika","Suno","ElevenLabs","Canva AI","Notion AI","Copy AI","Jasper","Quillbot","Grammarly","Synthesia","HeyGen","Descript","CapCut AI","RemoveBG"];
for(let i=1;i<=5000;i++){
  let n = names[i % names.length];
  TOOLS.push({slug:`${n.toLowerCase().replace(/ /g,'-')}-${i}`, name:`${n} ${i}`, cat:["Writing","Image","Video","Voice","Design"][i%5], price:i%3==0?"Free":`$${10+i%20}/mo`, rating:(4.5+i%5/10).toFixed(1), desc:`${n} ${i} 2026 ka best AI tool hai, ${5000-i} log roz use karte hain. Ye ${["bloggers","designers","youtubers","students"][i%5]} ke liye banaya gaya hai.`});
}
