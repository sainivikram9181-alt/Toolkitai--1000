// BharatForm Agentic - Auto Mode
console.log('🇮🇳 BharatForm Agentic ON');

const MAP = {
  name: ['name','candidate','applicant'],
  father: ['father','pita'],
  dob: ['dob','birth'],
  mobile: ['mobile','phone'],
  email: ['email'],
  aadhaar: ['aadhar','aadhaar']
};

function getUser(){
  try{return JSON.parse(localStorage.getItem('bharatform_user')||'{}')}catch(e){return{}}
}

function autoFill(){
  const user = getUser();
  if(!user.name){ show('setup'); return; }
  let c=0;
  document.querySelectorAll('input,select,textarea').forEach(i=>{
    if(i.value) return;
    let t=(i.name+' '+(i.placeholder||'')+' '+i.id).toLowerCase();
    for(let k in MAP){
      if(MAP[k].some(s=>t.includes(s)) && user[k]){
        i.value=user[k]; i.dispatchEvent(new Event('input',{bubbles:true}));
        i.style.border='2px solid #25D366'; i.style.background='#e8ffe8'; c++;
        break;
      }
    }
  });
  if(c>0) show('filled',c); else show('ready');
}

function show(mode,count){
  if(document.getElementById('bf-ag')) return;
  let d=document.createElement('div'); d.id='bf-ag';
  d.style='position:fixed;bottom:0;left:0;right:0;z-index:9999999;background:#0a0a0a;border-top:3px solid #25D366;padding:14px;color:#fff;font-family:sans-serif';
  if(mode==='setup'){
    d.innerHTML=`<b>🇮🇳 SETUP Karo</b><div style="font-size:12px;color:#aaa">Pehli baar profile save karo</div><button onclick="window.open('https://toolkitai.in','_blank')" style="width:100%;margin-top:8px;background:#25D366;padding:10px;border-radius:10px;font-weight:900">Setup</button>`;
  } else if(mode==='filled'){
    d.innerHTML=`<b>🤖 Agentic ne ${count} field bhare!</b><div style="margin-top:8px;display:grid;grid-template-columns:1fr 1fr;gap:8px"><a href="https://wa.me/918952830448?text=FormFilled:${location.href}" style="background:#25D366;color:#000;text-align:center;padding:10px;border-radius:10px;text-decoration:none;font-weight:800">WhatsApp Verify</a><button onclick="this.closest('#bf-ag').remove()" style="background:#222;color:#fff;border:1px solid #444;padding:10px;border-radius:10px">Close</button></div>`;
  } else {
    d.innerHTML=`<b>🇮🇳 BharatForm Agentic LIVE - AutoMode ON</b>`;
  }
  document.body.appendChild(d);
}
setTimeout(autoFill,1500);
