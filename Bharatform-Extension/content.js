// BharatForm Super Banner - Har job site pe chalega
(function(){
  const url = window.location.href.toLowerCase();
  const title = document.title.toLowerCase();
  
  // Check kar - kya ye job wali site hai?
  const isJobSite = url.includes('gov.in') || url.includes('sarkari') || url.includes('freejobalert') || url.includes('sarkariresult') || url.includes('rojgar') || url.includes('ssc') || url.includes('upsc') || url.includes('railway') || url.includes('ibps') || url.includes('bank') || url.includes('police') || url.includes('teacher') || url.includes('reet') || title.includes('sarkari') || title.includes('government job') || title.includes('vacancy') || title.includes('bharti') || title.includes('result') || title.includes('admit card');

  if(!isJobSite) return; // Job site nahi hai to banner mat dikha
  if(document.getElementById('bharatform-super-banner')) return;

  let banner = document.createElement('div');
  banner.id = 'bharatform-super-banner';
  banner.style.cssText = 'position:fixed;bottom:15px;left:50%;transform:translateX(-50%);z-index:2147483647;background:#0a0a0a;border:2px solid #25D366;border-radius:16px;padding:14px 18px;color:#fff;font-family:sans-serif;width:92%;max-width:380px;box-shadow:0 8px 30px rgba(37,211,102,0.3);';
  
  banner.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
      <div style="display:flex;align-items:center;gap:8px">
        <span style="background:#25D366;border-radius:8px;padding:4px 6px;font-size:14px">🇮🇳</span>
        <b style="color:#fff;font-size:14px">BharatForm <span style="background:#25D366;color:#000;padding:1px 6px;border-radius:6px;font-size:9px">100+ FORMS</span></b>
      </div>
      <span id="bf-close" style="cursor:pointer;background:#1a1a1a;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:12px">✖</span>
    </div>
    <div style="font-size:12px;color:#aaa;line-height:1.3;margin-bottom:10px">👋 Is form ko <b style="color:#fff">1 click me bharwana hai?</b> Agent tera form bhar dega!</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      <a href="https://wa.me/918952830448?text=Hi BharatForm Agent, Mujhe ${encodeURIComponent(document.title)} ka form bharna hai. Site: ${encodeURIComponent(url)}" target="_blank" style="background:#25D366;color:#000;text-align:center;padding:12px 6px;border-radius:12px;font-weight:900;text-decoration:none;font-size:13px">💬 WhatsApp Agent</a>
      <a href="https://sainivikram9181-alt.github.io/Toolkitai--1000/Bharatform/" target="_blank" style="background:#fff;color:#000;text-align:center;padding:12px 6px;border-radius:12px;font-weight:900;text-decoration:none;font-size:13px">⬇️ App Install Karo</a>
    </div>
    <div style="text-align:center;color:#666;font-size:9px;margin-top:8px">SSC • UPSC • Railway • Police • REET • Bank • 100+ Forms</div>
  `;
  
  document.body.appendChild(banner);
  
  document.getElementById('bf-close').onclick = () => {
    banner.style.display='none';
    localStorage.setItem('bf_banner_closed', Date.now());
  };

  // 5 sec baad halka sa hilao attention ke liye
  setTimeout(()=>{ banner.style.transform='translateX(-50%) scale(1.03)'; setTimeout(()=>{banner.style.transform='translateX(-50%) scale(1)'},200) }, 2000);
})();
