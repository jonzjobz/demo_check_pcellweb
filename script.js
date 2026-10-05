/* ======================================================================
   PROJECT CELL — script.js  (all behaviour of the page). Sections, in order:
   1. helpers ($, $$, clamp, pad)        2. navbar links, marquee text, values list
   3. TEAM folders + member popup         4. PROJECTS horizontal slider
   5. EVENTS + gallery                    6. LOADING screen
   7. scroll reveal + intro text          8. ABOUT (stats, mission, keywords)
   9. CONTACT logo                       10. GAME CONSOLE: SNAKE
  11. SCROLL ENGINE (hero split, sliders, nav highlight)   12. nav menu + page shutter + custom cursor
   Images: see the file-name list at the top of index.html (img/logo.png, img/people/PC-CO01.jpg ...).
}} at line 25 write name like this ['Design Co-Lead','Riddhi']

to add events card add this code  
{
  day:'28',
  month:'OCT',
  category:'Workshop',
  name:'UI/UX Design Sprint',
  description:'A hands-on design session exploring interfaces, prototyping and user experience.',
  status:'Open'
}
   ====================================================================== */
const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)],cl=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),pad=(n,l=3)=>String(n).padStart(l,'0');
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const SEC=['home','about','team','projects','events','gallery','contact'];
// NAVBAR: build the menu links from the SEC list above
$('#ml').innerHTML=SEC.map((s,i)=>`<li><a href="#${s}" data-go data-s="${s}"><span class="n">${pad(i+1,2)}</span><span class="t">${s}</span></a></li>`).join('');
// scrolling text strips (.mq): fill them with repeated words
$$('.mq div').forEach(d=>d.innerHTML=Array(16).fill('<span>Project Cell</span><span>CRCE</span><span>Build</span>').join(''));
$('#ld').innerHTML='<i></i>'.repeat(5);const lds=$$('#ld i');
// ABOUT values list (#pr): edit the words here
$('#pr').innerHTML=['Innovation','Creativity','Experimentation','Technical excellence','Collaboration','Project building','Learning','Community impact'].map(t=>`<div data-r><span>${t}</span></div>`).join('');
// ===== TEAM (#team): edit the G list below to change teams / roles =====

const gh='<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7 0 0-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 015 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0012 2z"/></svg>';

const li='<svg viewBox="0 0 24 24"><path d="M4 9h4v12H4zM6 3a2 2 0 110 4 2 2 0 010-4zm5 6h4v2c.6-1.1 2-2.2 4-2.2 4 0 5 2.6 5 6V21h-4v-5.5c0-1.5 0-3.5-2.2-3.5S15 13.6 15 15.5V21h-4z"/></svg>';

const G=[
  ['Core team','CO',[
    ['President','Rishit','https://www.linkedin.com/in/rishitbaitule','https://github.com/RageCoder2006'],
    ['Vice President','Fabian','https://www.linkedin.com/in/fabian07fernandes','https://github.com/Fab0706'],
    ['Operational Lead','Joanna','#','https://www.linkedin.com/in/joanna-mathews-9aa17b279']
  ]],

  ['Creative team','CR',[
    ['Design Lead','Jonaly','https://www.linkedin.com/in/jonaly-joby','https://github.com/jonzjobz'],
    ['Design Co-Lead','Riddhi','#','https://github.com/Riiidhiiii'],
    ['Media Manager','Seanne','#','https://www.linkedin.com/in/seanne-d-souza-586064387'],
    ['Media Manager','Tanush','#','https://github.com/tanushcode'],
    ['Marketing Lead','Savio','https://www.linkedin.com/in/savio-linoj1/','https://github.com/saviolinoj'],
    ['Treasurer','Jovan','#','#'],
    ['Documentation Lead','Aarya','https://www.linkedin.com/in/aryamchavan','https://github.com/ryachavan']
  ]],

  ['Technical team','TE',[
    ['Tech Lead','Ayush','https://www.linkedin.com/in/ayush-ghara756','https://github.com/AyushGhara-756'],
    ['Tech Co-Lead','Joshua','https://www.linkedin.com/in/joshua-d-souza-6ba53a253','https://github.com/joshdoshboi'],

    ['IOT Lead','Ishaan',
      'https://www.linkedin.com/in/ishaan-ram-808373379',
      'https://github.com/Ishaan2008-op'
    ],

    ['Tech Associate','Nishita','#','#'],
    ['Tech Associate','Gauri','https://www.linkedin.com/in/gaurichile0507','https://github.com/gaurichilejee-droid'],
    ['Tech Associate','Luke','https://www.linkedin.com/in/lrgbkiu','https://github.com/RGBKIU123'],
    ['Tech Associate','Kabir','#','#'],
    ['Tech Associate','Daniel','http://www.linkedin.com/in/daniel-george-3a6111386','https://github.com/WECdannyLMH-03'],
    ['Tech Associate','Vinay','#','#'],
    ['Tech Associate','Nicandro','https://www.linkedin.com/in/nicandro-dsouza-274106386','https://github.com/Nicandro-nov']
  ]],

  ['Senior advisors','SA',[
    ['Senior advisor','David','https://www.linkedin.com/in/davidporathur','https://github.com/41vi4p'],
    ['Senior advisor','Hazel','https://www.linkedin.com/in/hazel-sequeira-57634634a/','https://github.com/thecamouflagedgeek'],
    ['Senior advisors','Aahana','https://www.linkedin.com/in/aahana-peter/','https://github.com/jarviss27'],
    ['Senior advisors','Mangalam','https://www.linkedin.com/in/manglam-jaiswal-0b2822290/','https://github.com/ManglamX']
  ]],

  ['Junior advisors','JA',[
    ['Junior advisors','Pranav','http://linkedin.com/in/pranavkoradiya','http://github.com/08pranav'],
    ['Junior advisors','Manvith','#','#'],
    ['Junior advisors','Nial','#','#'],
    ['Junior advisors','Yash','https://www.linkedin.com/in/yash-masaye-26729b331/','https://github.com/yashmasaye21'],
    ['Junior advisors','Sai','#','#'],
    ['Junior advisors','Swar','https://www.linkedin.com/in/swarchuri','#'],
    ['Junior advisors','Deon','#','#'],
    ['Junior advisors','Leroy','#','#']
  ]]
];

const ids=G.reduce((s,g)=>s+g[2].length,0);

$('#tm').innerHTML=G.map(([n,k,r],g)=>`
  <div class="grp">
    <span class="tab m">PC-${k}</span>

    <div class="fd">
      <button class="hd" aria-expanded="false" aria-controls="ml${g}">
        <h3>${n}</h3>
        <span class="m rd">${pad(r.length,2)} members</span>
        <span class="m ck">Click me</span>
        <s aria-hidden="true"></s>
      </button>

      <div class="mlist" id="ml${g}">
        <div class="mi">

          ${r.map(([role,name,linkedin,github],i)=>`
            <article
              class="mem"
              tabindex="0"
              role="button"
              aria-haspopup="dialog"
              data-id="PC-${k}${pad(i+1,2)}"
            >

              <div class="ph" role="img" aria-label="Photograph of ${name}">
                <img
                  src="img/people/PC-${k}${pad(i+1,2)}.jpg"
                  alt=""
                  loading="lazy"
                  onerror="this.remove()"
                >
                <span>[PHOTO]</span>
              </div>

              <div>
                <h4>${name}</h4>
                <div class="role">${role||'[ROLE]'}</div>
              </div>

              <div class="soc">

                <a
                  href="${linkedin !== '#' ? linkedin : '#'}"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile of ${name}"
                  onclick="event.stopPropagation()"
                >
                  ${li}
                </a>

                <a
                  href="${github !== '#' ? github : '#'}"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile of ${name}"
                  onclick="event.stopPropagation()"
                >
                  ${gh}
                </a>

              </div>

            </article>
          `).join('')}

        </div>
      </div>
    </div>
  </div>
`).join('');

const fo=(g,o)=>{
  g.classList.toggle('open',o);
  $('.hd',g).setAttribute('aria-expanded',o);
};

$$('.hd').forEach(b=>b.onclick=()=>{
  const g=b.closest('.grp');
  const o=!g.classList.contains('open');

  $$('.grp.open').forEach(x=>fo(x,false));
  fo(g,o);
});

const gio=new IntersectionObserver(
  es=>es.forEach(e=>{
    if(e.isIntersecting){
      const i=$$('.grp').indexOf(e.target);
      setTimeout(
        ()=>e.target.classList.add('in'),
        RM?0:i*90
      );
      gio.unobserve(e.target);
    }
  }),
  {threshold:.1}
);

$$('.grp').forEach(g=>gio.observe(g));
// ===== MEMBER POPUP (#dz): opens when a member row is clicked =====
document.body.insertAdjacentHTML('beforeend',`
<div id="dz" hidden>
    <div class="dzb"></div>

    <div class="dzc" role="dialog" aria-modal="true" aria-labelledby="dzn">
        <div class="dztab m">
            <span id="dzi"></span>
            <button id="dzx">Close &#10005;</button>
        </div>

        <div class="dzg">
            <div class="dzp">
                <span class="m">[PHOTO]</span>
            </div>

            <div class="dzt">
                <div class="m">Name</div>
                <h3 id="dzn"></h3>

                <div class="m">Role</div>
                <p id="dzr"></p>

                <div class="soc" id="dzs"></div>
            </div>
        </div>
    </div>
</div>
`);

const dz=$('#dz');
let dzo=null;

const dzClose=()=>{
    dz.hidden=true;
    document.body.style.overflow='';
    dzo && dzo.focus();
};

const dzOpen=m=>{
    dzo=m;
    $('#dzi').textContent='FILE / '+m.dataset.id;
    $('#dzn').textContent=$('h4',m).textContent;
    $('#dzr').textContent=$('.role',m).textContent;
    $('#dzs').innerHTML=$('.soc',m).innerHTML;
    const im=$('.ph img',m);$('.dzp').innerHTML=im?`<img src="${im.getAttribute('src')}" alt="">`:'<span class="m">[PHOTO]</span>'; // big photo in popup
    dz.hidden=false;
    document.body.style.overflow='hidden';
    $('#dzx').focus();
};

$('#tm').addEventListener('click',e=>{
    const m=e.target.closest('.mem');
    if(m && !e.target.closest('.soc a')) dzOpen(m);
});

$('#tm').addEventListener('keydown',e=>{
    const m=e.target.closest('.mem');
    if(m && e.target===m && (e.key==='Enter' || e.key===' ')){
        e.preventDefault();
        dzOpen(m);
    }
});

$('.dzb',dz).onclick=$('#dzx').onclick=dzClose;

addEventListener('keydown',e=>{
    if(e.key==='Escape' && !dz.hidden) dzClose();
});
// ===== PROJECTS (#projects, #trk): edit the PJ list =====
const NP=5;if(!RM)$('#projects').style.height=(NP*100+40)+'svh';// Edit this list: one entry per project. Put an image path in img (e.g. 'img/robot.jpg').
const PJ=[
  {
    t:'SecureED',
    d:'Enhances online data privacy by splitting and encrypting data packets across multiple network paths using multi-layer encryption',
    c:'Hardware Security Device',
    tech:'AES-256, AES-128, Blowfish, Fernet, ChaCha20, Multi-path Routing,',
    y:'2025',
    s:'Completed',
    img:'img/projects/project-1.jpg'
  },
  {
    t:'EZEeco IoT',
    d:'An open-source, modular IoT platform combining a mobile app with custom PCB hardware (ESP32) for real-time smart home control',
    c:'Modular IoT Platform',
    tech:'ESP32, Flutter, Firebase, Voice Recognition, IoT Hardware',
    y:'2025',
    s:'Completed',
    img:'img/projects/project-2.jpg'
  },
  {
    t:'RoboSumo Bots',
    d:'Autonomous sumo robots using sensors, strategy, and powerful motors to push opponents out of the ring.',
    c:'Autonomous Robotics',
    tech:'ESP32, BTS7960 Drivers, IR Sensors, Remote Control',
    y:'2024',
    s:'Completed',
    img:'img/projects/project-3.jpg'
  },
  {
    t:'LIMS',
    d:'QR-based lab equipment tracking for quick borrowing, returns, specs, status, and usage history.',    c:'QR-Based Inventory Tracker',
    tech:'Node.js, TypeScript, Firebase, QR Scanning, Web Dashboard',
    y:'2024',
    s:'Completed',
    img:'img/projects/project-4.jpg'
  },
  {
    t:'Mini AC',
    d:'A compact DIY Peltier-based AC unit for localized cooling in small spaces, electronics enclosures, and desks',    c:'Thermoelectric Cooling System',
    tech:'ESP32, Peltier Elements, Thermal Management, Fan Control',
    y:'2024',
    s:'Completed',
    img:'img/projects/project-5.jpg'
  }
];
$('#trk').innerHTML=PJ.map((p,i)=>`<article class="dos"><div class="no"><small>Project</small>${pad(i+1)}</div><div class="img" role="img" aria-label="Image of ${p.t}"><img src="${p.img}" alt="" loading="lazy" onerror="this.remove()"><span class="m">[IMAGE]</span></div><div class="inf"><div><h3>${p.t}</h3><p style="margin-top:.8rem">${p.d}</p></div><dl><dt>Category</dt><dd>${p.c}</dd><dt>Components</dt><dd>${p.tech}</dd><dt>Year</dt><dd>${p.y}</dd><dt>Status</dt><dd>${p.s}</dd></dl></div></article>`).join('');
$('#hs').insertAdjacentHTML('beforeend','<div class="pdots" role="group" aria-label="Jump to project">'+PJ.map((_,i)=>`<button aria-label="Project ${i+1}"></button>`).join('')+'</div>');
$$('.pdots button').forEach((b,i)=>b.onclick=()=>{const z=$('#projects');scrollTo({top:z.offsetTop+i/(NP-1)*(z.offsetHeight-innerHeight)+4,behavior:RM?'auto':'smooth'})});
// ===== EVENTS (#up upcoming, #ps archive) =====
$('#up').innerHTML=
'<div class="m sub">Upcoming events &amp; workshops</div>'+
[
  {
    day:'29-30',
    month:' OCT',
    category:'Event',
    name:'Crescendo- Hack in to Pcell',
    description:'kuch toh descrp',
    status:'Upcoming'
  },
   {
    day:'',
    month:'',
    category:'Event',
    name:'PRAKALP 2027',
    description:'kuch toh descrp',
    status:'Upcoming'
  }

].map(e=>`
  <article class="up" data-r>
    <div class="d">
      <small>Upcoming</small>
      <span>${e.day}<br>${e.month}</span>
    </div>

    <div class="bd">
      <span class="m">${e.category}</span>
      <h3>${e.name}</h3>
      <p>${e.description}</p>
    </div>

    <div class="st">
      <span class="m">${e.status}</span>
      <a class="btn" href="#">Register</a>
    </div>
  </article>
`).join('');
// ===== GALLERY (#wl): the wall of prints =====
const AR=['4/3','3/4','1/1','3/4','16/9','1/1','4/3'],
      RO=[-2,3,-1.5,2,-1,2.5,-2.5],
      CAP=[
        '[PRAKALP 2026]',
        '[DECOR]',
        '[PRAKALP 2026]',
        '[SESSIONS]',
        '[TEAM MEETINGS]',
        '[SAY CHEEZ]',
        '[CRESENDO 2025]'
      ];

$('#wl').innerHTML=AR.map((a,i)=>`
<figure class="pin" tabindex="0" style="--a:${a};--r:${RO[i]}deg"
data-speed="${[.04,-.05,.03,-.03,.05,-.04,.03][i]}"
data-f="FIG.${pad(i+1,2)}">

<div class="im">
<img src="img/gallery/gallery-${pad(i+1,2)}.jpg" alt="" loading="lazy" onerror="this.remove()">
<span>[IMAGE]</span>
</div>

<figcaption>
<b>FIG.${pad(i+1,2)}</b>
<span>${CAP[i]}</span>
</figcaption>

</figure>
`).join('');

$$('.pin').forEach(p=>{
  const s=()=>$('#gl').textContent=p.dataset.f+' / '+p.querySelector('figcaption span').textContent,
        r=()=>$('#gl').textContent='04 / Hover a print';
  p.onmouseenter=p.onfocus=s;
  p.onmouseleave=p.onblur=r;
});
// ===== LOADING SCREEN (#boot): progress bar then slides away =====
const L=['Display','Core','Projects','Team','Events','Interface'];
$('#bl').innerHTML=L.map(l=>`<div class="ln"><b style="font-weight:400">${l}</b><i></i><em>READY</em></div>`).join('');
$('#sg').innerHTML='<b></b>'.repeat(20);
const lns=$$('.ln'),sg=$$('#sg b');
function done(){document.body.classList.add('go');setTimeout(()=>{$('#boot').remove();document.body.classList.remove('boot')},950)}
if(!RM){const t0=performance.now(),D=1700;(function f(t){const p=cl((t-t0)/D);const v=Math.floor(p*100);$('#pc').textContent=`[ ${pad(v)}% ]`;lns.forEach((l,i)=>l.classList.toggle('on',p>(i+.5)/7));sg.forEach((s,i)=>s.classList.toggle('f',v>=(i+1)*5));p<1?requestAnimationFrame(f):setTimeout(done,260)})(t0)}else{document.body.classList.remove('boot');document.body.classList.add('go')}
// ===== SCROLL REVEAL: any element with data-r fades in =====
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
$$('[data-r]').forEach(e=>io.observe(e));
// ===== INTRO TEXT (#it): words light up on scroll =====
const T="A student-led community driven by innovation, experimentation, creativity, and the desire to create something meaningful. We bring together passionate students who are curious about technology and eager to go beyond classrooms and theory.";
const K=/^(student-led|innovation|experimentation|creativity|meaningful|technology|classrooms)/i;
const it=$('#it');it.setAttribute('aria-label',T);it.innerHTML=T.split(' ').map(w=>`<span aria-hidden="true"${K.test(w)?' class="k"':''}>${w}</span>`).join(' ');
const iw=$$('span',it);let rc=[];
it.addEventListener('pointermove',e=>{if(RM)return;iw.forEach(w=>{w.style.translate='';const r=w.getBoundingClientRect(),dx=r.left+r.width/2-e.clientX,dy=r.top+r.height/2-e.clientY,d=Math.hypot(dx,dy);if(d<130){const f=(130-d)/130;w.style.translate=`${dx/d*f*34}px ${dy/d*f*34}px`;w.style.rotate=(dx>0?1:-1)*f*8+'deg'}else w.style.rotate=''})});
it.addEventListener('pointerleave',()=>iw.forEach(w=>{w.style.translate='';w.style.rotate=''}));
// ===== ABOUT stats counters (#stt) =====
$('#pr').insertAdjacentHTML('afterend','<div class="stats" data-r id="stt">'+[['Members',ids],['Projects',NP],['Events',2],['Workshops',2]].map(([l,n])=>`<div><b data-n="${n}">0</b><span class="m">${l}</span></div>`).join('')+'</div>');
new IntersectionObserver((es,o)=>{if(!es[0].isIntersecting)return;o.disconnect();$$('#stt b').forEach(b=>{const n=+b.dataset.n;if(RM){b.textContent=pad(n,2);return}const t0=performance.now();(function f(t){const p=cl((t-t0)/1200);b.textContent=pad(Math.round(n*(1-(1-p)**3)),2);p<1&&requestAnimationFrame(f)})(t0)})},{threshold:.5}).observe($('#stt'));
// ===== ABOUT mission box (.con, #ms) + keyword box (.kw, #kr) =====
let ty=0;const MS=["To create a collaborative environment where students can learn, experiment, and push the boundaries of technology.","We believe in learning by doing, building real projects, and making a positive impact on our community."];
function typ(i){clearInterval(ty);const el=$('#ms');let n=0;if(RM){el.textContent=MS[i];return}ty=setInterval(()=>{el.textContent=MS[i].slice(0,++n)+(n<MS[i].length?'\u2588':'');if(n>=MS[i].length)clearInterval(ty)},16)}
$$('.kk button').forEach(b=>b.onclick=()=>{$$('.kk button').forEach(x=>x.setAttribute('aria-pressed',x===b));typ(+b.dataset.m)});
new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){typ(0);o.disconnect()}},{threshold:.4}).observe($('.con'));
const KD={innovation:'Fresh ideas, prototyped fast.',creativity:'Design and tech, side by side.','technical excellence':'Clean builds, tested properly.','solutions that matter':'Projects that help real people.'};let kt=0;
$$('.kw').forEach(k=>{const go=()=>{$$('.kw').forEach(x=>x.classList.toggle('on',x===k));const s='> '+k.textContent.toUpperCase()+': '+KD[k.textContent.toLowerCase()],el=$('#kr');clearInterval(kt);let n=0;if(RM){el.textContent=s;return}kt=setInterval(()=>{el.textContent=s.slice(0,++n)+'_';if(n>=s.length)clearInterval(kt)},14)};k.onclick=go;k.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}}});
// ===== CONTACT logo block (#b3): tilts with pointer, spins on click =====
const b3=$('#b3');if(b3&&!RM){$('#contact').addEventListener('pointermove',e=>{const r=b3.getBoundingClientRect();b3.style.setProperty('--rx',cl((e.clientY-r.top-r.height/2)/-20,-14,14)+'deg');b3.style.setProperty('--ry',cl((e.clientX-r.left-r.width/2)/20,-14,14)+'deg')})}
if(b3)b3.onclick=()=>{b3.classList.remove('sp');void b3.offsetWidth;b3.classList.add('sp')};
// ===== GAME CONSOLE (#hw): SNAKE — the snake eats apples and grows =====
// Elements: #cv screen (canvas) · #sd score · #bs best · #sw2 power switch · #l1 power lamp · #l2 "apple eaten" lamp
//           #gs status line · #ba START/PAUSE button · #bb RESET button · .dp D-pad · #kb decorative knob
const hw=$('#hw'),cv=$('#cv'),cx=cv.getContext('2d'),kb=$('#kb'),sd=$('#sd'),bs=$('#bs'),sw2=$('#sw2'),L1=$('#l1'),L2=$('#l2'),gs=$('#gs'),ba=$('#ba'),bb=$('#bb'),bz=$('.bz2');
const N=20,CS=cv.width/N;                      // board is N x N squares, CS pixels each
const C={bg:'#101114',chk:'rgba(198,240,74,.07)',head:'#C6F04A',body:'#2547E8',apple:'#EEF0F2',eye:'#101114'}; // all colours come from the site palette
let on=false,seen=false,vis=false,off=0,dr=0,la=0;   // on = power, vis = console on screen, off/dr/la = knob dragging
let sn,dir,nx,ap,score,st,tm,best=0;                // sn = snake squares (head first), dir = moving direction, nx = next direction, ap = apple, st = idle|run|pause|over
try{best=+localStorage.getItem('pc-snake')||0}catch(e){}
const say=t=>gs.textContent=t, hud=()=>{sd.textContent=pad(score);bs.textContent=pad(best)};
const speed=()=>Math.max(70,140-Math.floor(score/10)*4);   // ms per move: gets faster with every apple
// put the apple on a free square
function spawn(){do{ap={x:Math.floor(Math.random()*N),y:Math.floor(Math.random()*N)}}while(sn.some(s=>s.x===ap.x&&s.y===ap.y))}
// RESET: new snake in the middle, score back to 0
function reset(){clearTimeout(tm);sn=[{x:10,y:10},{x:9,y:10},{x:8,y:10}];dir=nx={x:1,y:0};score=0;st='idle';spawn();hud();ba.textContent='START';cv.classList.remove('live');say(on?'Press START or a direction':'Switch power on');draw()}
const run=()=>{st='run';ba.textContent='PAUSE';cv.classList.add('live');say('Eat the apples!');clearTimeout(tm);tm=setTimeout(step,speed())};
const pause=()=>{st='pause';ba.textContent='PLAY';cv.classList.remove('live');clearTimeout(tm);say('Paused');draw()};
function over(){st='over';clearTimeout(tm);ba.textContent='START';cv.classList.remove('live');say(`Game over: ${score} pts. Press START`);draw()}
// one move: walls and own body end the game, apples grow the snake
function step(){dir=nx;const h={x:sn[0].x+dir.x,y:sn[0].y+dir.y},eat=h.x===ap.x&&h.y===ap.y,body=eat?sn:sn.slice(0,-1);
 if(h.x<0||h.y<0||h.x>=N||h.y>=N||body.some(s=>s.x===h.x&&s.y===h.y))return over();
 sn.unshift(h);
 if(eat){score+=10;if(score>best){best=score;try{localStorage.setItem('pc-snake',best)}catch(e){}}
  L2.classList.add('lit');setTimeout(()=>L2.classList.remove('lit'),160);say('Apple! '+score+' pts');
  if(sn.length>=N*N){hud();return over()}spawn()}else sn.pop();
 hud();draw();tm=setTimeout(step,speed())}
// START/PAUSE button (also Space / P): start, pause, resume or restart after game over
function toggle(){if(!on)return;if(st==='over')reset();st==='run'?pause():run()}
// steer: ignores 180° turns; pressing a direction while idle/paused also starts the game
function turn(x,y){if(!on||st==='over')return;if(x+nx.x===0&&y+nx.y===0)return;nx={x,y};if(st!=='run')run()}
// draw the whole screen: checker board, apple, snake, then a message banner if not running
function draw(){cx.fillStyle=C.bg;cx.fillRect(0,0,cv.width,cv.height);
 cx.fillStyle=C.chk;for(let i=0;i<N;i++)for(let j=0;j<N;j++)if((i+j)%2)cx.fillRect(i*CS,j*CS,CS,CS);
 const ax=ap.x*CS+CS/2,ay=ap.y*CS+CS/2+1;               // apple = two lobes + stem + leaf
 cx.fillStyle=C.apple;cx.beginPath();cx.arc(ax-3,ay+1,CS*.3,0,7);cx.arc(ax+3,ay+1,CS*.3,0,7);cx.fill();
 cx.fillStyle=C.head;cx.fillRect(ax-1,ay-CS*.46,2.5,CS*.26);cx.beginPath();cx.ellipse(ax+4,ay-CS*.32,4,2,-.5,0,7);cx.fill();
 for(let i=sn.length-1;i>=0;i--){const s=sn[i],x=s.x*CS,y=s.y*CS;           // snake, tail to head
  cx.fillStyle=i?C.body:C.head;cx.fillRect(x+1,y+1,CS-2,CS-2);
  if(i){cx.strokeStyle=C.head;cx.lineWidth=1.5;cx.strokeRect(x+1.75,y+1.75,CS-3.5,CS-3.5)}}
 {const h=sn[0],c=[h.x*CS+CS/2,h.y*CS+CS/2];cx.fillStyle=C.eye;                // eyes look where the snake is going
  [-1,1].forEach(k=>cx.fillRect(c[0]+dir.x*4-dir.y*4*k-1.5,c[1]+dir.y*4+dir.x*4*k-1.5,3,3))}
 const msg=!on?'':st==='idle'?'PRESS START':st==='pause'?'PAUSED':st==='over'?'GAME OVER':'';
 if(msg){cx.fillStyle='rgba(16,17,20,.7)';cx.fillRect(0,cv.height/2-34,cv.width,68);cx.fillStyle='#EEF0F2';cx.font='44px VT323,monospace';cx.textAlign='center';cx.textBaseline='middle';cx.fillText(msg,cv.width/2,cv.height/2)}}
// power switch: dims the screen and pauses the game when switched off
const setOn=v=>{on=v;sw2.setAttribute('aria-pressed',v);L1.classList.toggle('lit',v);bz.classList.toggle('off',!v);
 if(!v){clearTimeout(tm);if(st==='run'){st='pause';ba.textContent='PLAY';cv.classList.remove('live')}say('Switch power on')}
 else say(st==='pause'?'Paused: press PLAY':st==='over'?'Game over: press START':'Press START or a direction');draw()};
sw2.onclick=()=>setOn(!on);ba.onclick=toggle;bb.onclick=reset;
// controls: D-pad buttons, keyboard (only while a game is running), swipe on the screen
const DIR={u:[0,-1],d:[0,1],l:[-1,0],r:[1,0]},KM={arrowup:DIR.u,w:DIR.u,arrowdown:DIR.d,s:DIR.d,arrowleft:DIR.l,a:DIR.l,arrowright:DIR.r,d:DIR.r};
$$('.dp button').forEach(b=>{const go=e=>{e.preventDefault();turn(...DIR[b.dataset.d])};b.addEventListener('pointerdown',go);b.addEventListener('keydown',e=>e.key==='Enter'&&go(e))});
addEventListener('keydown',e=>{if(!on||!vis||e.ctrlKey||e.metaKey||e.altKey)return;const k=KM[e.key.toLowerCase()];
 if(k&&st==='run'){e.preventDefault();turn(...k)}
 else if((e.key===' '||e.key.toLowerCase()==='p')&&(st==='run'||st==='pause')&&e.target.tagName!=='BUTTON'){e.preventDefault();toggle()}});
let sx=null,sy;cv.addEventListener('pointerdown',e=>{sx=e.clientX;sy=e.clientY});
cv.addEventListener('pointerup',e=>{if(sx===null)return;const dx=e.clientX-sx,dy=e.clientY-sy;sx=null;if(Math.max(Math.abs(dx),Math.abs(dy))<24)return;Math.abs(dx)>Math.abs(dy)?turn(Math.sign(dx),0):turn(0,Math.sign(dy))});
// decorative knob (#kb): turns with scroll, can also be dragged
const ang=e=>{const r=kb.getBoundingClientRect();return Math.atan2(e.clientY-r.top-r.height/2,e.clientX-r.left-r.width/2)*180/Math.PI};
kb.onpointerdown=e=>{dr=1;la=ang(e);kb.setPointerCapture(e.pointerId)};
kb.onpointermove=e=>{if(!dr)return;const a=ang(e);let d=a-la;if(d>180)d-=360;if(d<-180)d+=360;off+=d;la=a;knob(scrollY)};
kb.onpointerup=()=>dr=0;
function knob(y){kb.style.rotate=((RM?0:y*.12)+off)+'deg'}
// powers on the first time the console scrolls into view; auto-pauses when it scrolls away
new IntersectionObserver(es=>{vis=es[0].isIntersecting;if(vis&&!seen){seen=true;setTimeout(()=>setOn(true),500)}if(!vis&&st==='run')pause()},{threshold:.3}).observe(hw);
document.addEventListener('visibilitychange',()=>{if(document.hidden&&st==='run')pause()});
reset();
// ===== SCROLL ENGINE: hero split, project slider, marquees, nav highlight =====
const hero=$('#home'),wa=$('#wa'),wb=$('#wb'),wp=$('#wp'),gg=$('#gg'),nd=$('#nd'),tg=$('#tg'),hz=$('#projects'),trk=$('#trk'),pb=$('#pb'),nav=$('#nav');
let tk=0,act='';
function frame(){tk=0;const vh=innerHeight,y=scrollY;
if(!RM){const r=hero.getBoundingClientRect(),p=cl(-r.top/(r.height-vh)),q=cl((p-.35)/.65);
wa.style.transform=`translate3d(${-p*75}vw,0,0)`;wb.style.transform=`translate3d(${p*75}vw,0,0)`;
gg.style.translate=`0 ${-p*300}px`;tg.style.translate=`0 ${p*160}px`;
wp.style.clipPath=`inset(${100-q*100}% 0 0 0)`;
nd.style.transform=`rotate(${-120+p*240}deg)`;lds.forEach((l,i)=>l.classList.toggle('lit',p>(i+.2)/5));
const h=hz.getBoundingClientRect(),s=cl(-h.top/(h.height-vh));trk.style.transform=`translate3d(${-s*(NP-1)*100}vw,0,0)`;pb.style.scale=s+' 1';$$('.pdots button').forEach((b,i)=>b.classList.toggle('on',i===Math.round(s*(NP-1))));
$('#rg').style.transform=`rotate(${y*.08}deg)`;
$$('.mq').forEach(m=>{const d=m.firstChild,w=d.scrollWidth/2;const x=(y*.9)%w;d.style.transform=`translate3d(${m.dataset.dir>0?-x:x-w}px,0,0)`});$('#rl').style.backgroundPositionY=-y*.5+'px';$$('[data-rot]').forEach(e=>e.style.rotate=y*e.dataset.rot+'deg');
$$('[data-speed]').forEach(e=>{const b=e.getBoundingClientRect();e.style.translate=`0 ${(b.top+b.height/2-vh/2)*e.dataset.speed}px`})}
{const r=it.getBoundingClientRect(),p=cl((vh*.9-r.top)/(r.height+vh*.35));iw.forEach((w,i)=>w.classList.toggle('lit',RM||i/iw.length<p*1.05))}
{const a=$('#about').getBoundingClientRect();$('#rl2').style.transform=`translateY(-${Math.floor(cl(-a.top/(a.height-vh)+.05)*3.99)}em)`}
knob(y);
let cur=SEC[0];SEC.forEach(s=>{if($('#'+s).getBoundingClientRect().top<vh*.5)cur=s});
if(cur!==act){act=cur;$$('#ml a').forEach(a=>a.classList.toggle('act',a.dataset.s===cur))}
nav.classList.toggle('min',y>vh*.8)}
const req=()=>{if(!tk)tk=requestAnimationFrame(frame)};
addEventListener('scroll',req,{passive:true});addEventListener('resize',req);frame();
// ===== NAV menu button (.sw) + page-change shutter (#sh) =====
const sw=$('.sw'),ml=$('#ml'),sh=$('#sh');
sw.onclick=()=>{const o=ml.classList.toggle('o');sw.setAttribute('aria-expanded',o);sw.firstChild.textContent=o?'CLOSE ':'MENU '};
$$('[data-go]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const t=$(a.getAttribute('href'));ml.classList.remove('o');sw.setAttribute('aria-expanded',false);sw.firstChild.textContent='MENU ';
if(RM){t.scrollIntoView();return}
sh.animate([{transform:'translateY(100%)'},{transform:'translateY(0)'}],{duration:300,fill:'forwards',easing:'cubic-bezier(.8,0,.2,1)'}).finished.then(()=>{const top=t.id==='projects'?t.offsetTop+10:t.offsetTop;scrollTo({top:t.id==='home'?0:top,behavior:'instant'});return sh.animate([{transform:'translateY(0)'},{transform:'translateY(-100%)'}],{duration:340,fill:'forwards',easing:'cubic-bezier(.8,0,.2,1)'}).finished}).then(()=>sh.getAnimations().forEach(x=>x.cancel()))}));
// ===== CUSTOM CURSOR (#cur, desktop only) =====
if(matchMedia('(pointer:fine)').matches&&!RM){const c=$('#cur');
addEventListener('pointermove',e=>{c.style.transform=`translate(${e.clientX-9}px,${e.clientY-9}px)`},{passive:true});
document.addEventListener('pointerover',e=>{const h=e.target.closest('a,button,.mem,.pin,.hd,.kw,#b3');c.style.scale=h?'2':'1';c.style.background=h?'rgba(46,89,191,.35)':'transparent'})}

// ===== LOADING SCREEN keyboard keys (.kbd) =====
{const kbd=$('.kbd');if(kbd){kbd.innerHTML='<i></i>'.repeat(30);const kk=setInterval(()=>{if(!$('#boot')){clearInterval(kk);return}$$('i',kbd).forEach(k=>k.classList.toggle('on',Math.random()<.18))},110)}}
// ===== LOADING SCREEN waves (#boot .mg) =====
{const c=$('#boot .c');if(c){const mk='<svg viewBox="0 0 100 100" aria-hidden="true"><use href="#mk"/></svg>',row=mk.repeat(36);
const sw=k=>`<div class="bm-s ${k}"><svg viewBox="0 0 100 100"><path class="sk" d="M100 0V70C70 30 40 14 0 12C40 0 70 0 100 0Z"/><g transform="translate(62 38)"><path class="st" d="M0 -20C2 -7 7 -2 20 0C7 2 2 7 0 20C-2 7 -7 2 -20 0C-7 -2 -2 -7 0 -20Z"/></g></svg></div>`;
const wv=(f,o,r)=>`<svg viewBox="0 0 1200 200" preserveAspectRatio="none" style="opacity:${o}${r?';animation-direction:reverse;animation-duration:10s':''}"><path fill="${f}" d="M0 100C100 0 200 0 300 100S500 200 600 100S800 0 900 100S1100 200 1200 100V200H0Z"/></svg>`;
c.insertAdjacentHTML('afterbegin',`
  <div class="mg" aria-hidden="true">
    <div class="bm-w">${wv('#ded9d2',.18,1)}${wv('#2e59bf',.35,0)}</div>
  </div>
`)}}