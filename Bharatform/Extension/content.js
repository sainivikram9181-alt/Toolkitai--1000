// BharatForm Universal Agentic - 105+ Govt Jobs AutoFill v3.0
console.log('🇮🇳 BharatForm UNIVERSAL Agentic ON - All Govt Jobs');

const UNIVERSAL_MAP = {
  // Personal
  name: ['full name','candidate name','applicant name','name as per','your name'],
  father: ['father name','father\'s name','pita','s/o'],
  mother: ['mother name','mother\'s name','mata'],
  dob: ['date of birth','dob','birth date','d.o.b'],
  gender: ['gender','sex','ling'],
  mobile: ['mobile','phone','contact no','mobile no'],
  email: ['email','e-mail','mail id'],
  aadhaar: ['aadhar','aadhaar','adhar','uid'],
  pan: ['pan','pan no'],

  // Address - Har govt form me hota hai
  address: ['permanent address','present address','address','pata'],
  state: ['state','rajya'],
  district: ['district','jila','zila'],
  pincode: ['pincode','pin code','pin','zip'],

  // Category - Govt job ka main field
  category: ['category','caste category','community','varg'],
  religion: ['religion','dharma'],
  nationality: ['nationality','rashtriyata'],

  // Education - UPSC,SSC,Railway sab me same
  qualification: ['qualification','educational qualification','education','yogyata'],
  board: ['board','university'],
  passing_year: ['year of passing','passing year','yop'],
  percentage: ['percentage','marks %','cgpa'],

  // Exam Specific - Ye sab govt jobs ke liye
  post: ['post applied','post name','applying for','exam name'],
  exam_center: ['exam centre','exam center','centre choice','center choice','preference'],
  photo: ['photograph','photo'],
  signature: ['signature']
};

function getUser(){
  try{ return JSON.parse(localStorage.getItem('bharatform_user')||'{}'); }catch(e){ return {}; }
}

function getSearchType(){
  return (localStorage.getItem('bf_search_query')||'').toLowerCase() + ' ' + (localStorage.getItem('bf_pending_form')||'').toLowerCase();
}

function universalAutoFill(){
  const user = getUser();
  if(!user.name){ show('setup'); return; }

  let filled = 0;
  let jobType = getSearchType();
  console.log('Detected Job Type:', jobType);

  document.querySelectorAll('input, select, textarea').forEach(inp=>{
    if(inp.value || inp.type==='hidden' || inp.type==='file') return;

    let label = (inp.name+' '+(inp.placeholder||'')+' '+inp.id+' '+(inp.getAttribute('aria-label')||'')+' '+(inp.closest('label')?.innerText||'')+' '+(inp.closest('div')?.innerText?.substring(0,50)||'')).toLowerCase();

    for(let field in UNIVERSAL_MAP){
      if(UNIVERSAL_MAP[field].some(k=>label.includes(k)) && user[field]){
        // Select ke liye alag logic
        if(inp.tagName==='SELECT'){
          let opts = Array.from(inp.options);
          let match = opts.find(o=>o.text.toLowerCase().includes(user[field].toLowerCase()));
          if(match) inp.value = match.value;
        } else {
          inp.value = user[field];
        }
        inp.dispatchEvent(new Event('input',{bubbles:true}));
        inp.dispatchEvent(new Event('change',{bubbles:true}));
        inp.style.border = '2px solid #25D366';
        inp.style.background = '#e8ffe8';
        inp.style.boxShadow = '0 0 8px #25D36655';
        filled++;
        break;
      }
    }
  });

  if(filled>0){
    show('filled', filled, jobType);
    let stats = JSON.parse(localStorage.getItem('bf_stats')||'{"sent":0}');
    stats.sent = (stats.sent||0)+1;
    localStorage.setItem('bf_stats', JSON.stringify(stats));
  } else {
    show('ready', 0, jobType);
  }
}

function show(mode,count=0,job=''){
  if(document.getElementById('bf-universal')) document.getElementById('bf-universal').remove();
  let d=document.createElement('div');
  d.id='bf-universal';
  d.style='position:fixed;bottom:0;left:0;right:0;z-index:999999999;background:#0a0a0a;border-top:3px solid #25D366;padding:14px;color:#fff;font-family:sans-serif;';
  if(mode==='setup'){
    d.innerHTML=`<b>🇮🇳 BharatForm Universal</b><div style="font-size:11px;color:#aaa;margin:4px 0">Ek baar profile save karo, 105+ Govt Jobs auto bharenge</div><a href="https://sainivikram9181-alt.github.io/Toolkitai--1000/Bharatform/" target="_blank" style="display:block;background:#25D366;color:#000;text-align:center;padding:12px;border-radius:12px;text-decoration:none;font-weight:900">Setup Profile</a>`;
  } else if(mode==='filled'){
    d.innerHTML=`<b>🤖 Universal Agent ne ${count} fields bhare! [${job.toUpperCase()}]</b><div style="font-size:11px;color:#8f8;margin-top:3px">SSC | UPSC | Railway | Banking | Police | Defence - Sab ready</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px"><a href="https://wa.me/918952830448?text=Form AutoFilled:${job} - ${location.href}" style="background:#25D366;color:#000;text-align:center;padding:10px;border-radius:10px;text-decoration:none;font-weight:800">WhatsApp</a><button onclick="this.closest('#bf-universal').remove()" style="background:#222;color:#fff;border:1px solid #444;padding:10px;border-radius:10px">Close</button></div>`;
  } else {
    d.innerHTML=`<b>🇮🇳 Universal Govt Job Agent LIVE</b><span style="background:#25D366;color:#000;padding:2px 8px;border-radius:10px;font-size:10px;margin-left:8px">${job||'ALL JOBS'}</span><div style="font-size:11px;color:#aaa">SSC | UPSC | IBPS | RRB | Police | All 105+ Forms</div>`;
  }
  document.body.appendChild(d);
  document.body.style.paddingBottom='130px';
}

setTimeout(universalAutoFill, 1200);
setInterval(universalAutoFill, 4000); // Har form pe try karta rahega

// SPA aur gov.in sites ke liye
let last=location.href;
new MutationObserver(()=>{ if(location.href!==last){ last=location.href; setTimeout(universalAutoFill,2000); } }).observe(document,{subtree:true,childList:true});
