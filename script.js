// ══════════════════════════════════════════════════
// LOADER
// ══════════════════════════════════════════════════
window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  if (loader) { loader.classList.add('hidden'); setTimeout(function(){ loader.style.display='none'; }, 550); }
});


// ══════════════════════════════════════════════════
// HAMBURGER MENU
// ══════════════════════════════════════════════════
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('navHamburger').classList.toggle('open');
}
function closeNav() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('navHamburger').classList.remove('open');
}

// ══════════════════════════════════════════════════
// TYPEWRITER
// ══════════════════════════════════════════════════
(function() {
  var words = ['Full Stack Developer', 'Tourism Expert', 'Finance Specialist', 'Hospital Systems Builder'];
  var el = document.getElementById('typewriter');
  if (!el) return;
  var wi = 0, ci = 0, deleting = false;
  function tick() {
    var word = words[wi];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(tick, 1800); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; setTimeout(tick, 400); return; }
    }
    setTimeout(tick, deleting ? 55 : 90);
  }
  setTimeout(tick, 800);
})();

// ══════════════════════════════════════════════════
// LANGUAGE SYSTEM — FIXED & CLEAN
// ══════════════════════════════════════════════════
var LANG = 'en';
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('btnEN');
  if (btn) btn.classList.add('active');
});

function setLang(lang) {
  LANG = lang;
  var body = document.body;
  var html = document.getElementById('htmlRoot');

  // Freeze animations before changing direction to prevent page going empty
  body.classList.add('lang-switched');

  if (lang === 'ar') {
    body.classList.add('ar');
    html.setAttribute('lang', 'ar');
    document.getElementById('chatInp').placeholder = 'اكتب رسالة...';
  } else {
    body.classList.remove('ar');
    html.setAttribute('lang', 'en');
    document.getElementById('chatInp').placeholder = 'Type a message...';
  }

}


// ══════════════════════════════════════════════════
// SCROLL EVENTS (merged)
// ══════════════════════════════════════════════════
window.addEventListener('scroll', function() {
  var sy = window.scrollY;
  document.getElementById('navbar').classList.toggle('scrolled', sy > 50);
  var btn = document.getElementById('scrollTop');
  if (btn) btn.classList.toggle('visible', sy > 400);
  runCounters();
  runBars();
  runProjBars();
});

// ══════════════════════════════════════════════════
// COUNTERS
// ══════════════════════════════════════════════════
var cRun = false;
function runCounters() {
  if (cRun) return;
  var el = document.querySelector('.counter-strip');
  if (el && el.getBoundingClientRect().top < window.innerHeight - 50) {
    cRun = true;
    document.querySelectorAll('.counter-num').forEach(function(num) {
      var target = parseInt(num.getAttribute('data-target'));
      var step = Math.ceil(target / 40), curr = 0;
      var t = setInterval(function() {
        curr += step;
        if (curr >= target) { curr = target; clearInterval(t); }
        num.textContent = curr;
      }, 50);
    });
  }
}
runCounters();

// ══════════════════════════════════════════════════
// SKILL BARS
// ══════════════════════════════════════════════════
var bRun = false;
function runBars() {
  if (bRun) return;
  var el = document.getElementById('skillsBars');
  if (el && el.getBoundingClientRect().top < window.innerHeight - 80) {
    bRun = true;
    document.querySelectorAll('.skill-bar-fill').forEach(function(b) {
      setTimeout(function() { b.style.width = b.getAttribute('data-width') + '%'; }, 150);
    });
  }
}
runBars();

// ══════════════════════════════════════════════════
// PROJECT PROGRESS BARS
// ══════════════════════════════════════════════════
var pRun = false;
function runProjBars() {
  if (pRun) return;
  var el = document.querySelector('.projects-grid');
  if (el && el.getBoundingClientRect().top < window.innerHeight - 80) {
    pRun = true;
    document.querySelectorAll('.prog-fill').forEach(function(b) {
      setTimeout(function() { b.style.width = b.getAttribute('data-width') + '%'; }, 200);
    });
  }
}
runProjBars();

// ══════════════════════════════════════════════════
// HIRE MODAL
// ══════════════════════════════════════════════════
function openHire() {
  document.getElementById('hireModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeHire() {
  document.getElementById('hireModal').classList.remove('active');
  document.body.style.overflow = '';
}
function closeHireOutside(e) {
  if (e.target.id === 'hireModal') closeHire();
}
function submitHire() {
  var name = document.getElementById('hfName').value.trim();
  var email = document.getElementById('hfEmail').value.trim();
  var type = document.getElementById('hfType').value;
  if (!name || !email || !type) {
    alert(LANG === 'ar' ? 'يرجى ملء الحقول المطلوبة' : 'Please fill in required fields');
    return;
  }
  var msg = 'Hello Osman! New Project Request:\n\nName: ' + name + '\nEmail: ' + email + '\nType: ' + type + '\nBudget: ' + document.getElementById('hfBudget').value + '\nMessage: ' + document.getElementById('hfMsg').value;
  document.getElementById('hireForm').style.display = 'none';
  document.getElementById('hireSuccess').classList.add('show');
  setTimeout(function() {
    window.open('https://wa.me/97455189022?text=' + encodeURIComponent(msg), '_blank');
  }, 1200);
}

// ══════════════════════════════════════════════════
// CONTACT FORM
// ══════════════════════════════════════════════════
function submitContact() {
  var name = document.getElementById('cfName').value.trim();
  var email = document.getElementById('cfEmail').value.trim();
  var msg = document.getElementById('cfMsg').value.trim();
  if (!name || !email || !msg) {
    alert(LANG === 'ar' ? 'يرجى ملء جميع الحقول' : 'Please fill in all fields');
    return;
  }
  var waMsg = 'Hello Osman!\n\nName: ' + name + '\nEmail: ' + email + '\nSubject: ' + document.getElementById('cfSubject').value + '\nMessage: ' + msg;
  document.getElementById('cfSuccess').classList.add('show');
  ['cfName','cfEmail','cfSubject','cfMsg'].forEach(function(id) { document.getElementById(id).value = ''; });
  setTimeout(function() {
    window.open('https://wa.me/97455189022?text=' + encodeURIComponent(waMsg), '_blank');
  }, 1000);
}

// ══════════════════════════════════════════════════
// LIVE CHAT — FIXED
// ══════════════════════════════════════════════════
var chatOpen = false;

function toggleChat() {
  chatOpen = !chatOpen;
  var widget = document.getElementById('chatWidget');
  if (chatOpen) {
    widget.style.display = 'flex';
    widget.classList.add('open');
  } else {
    widget.style.display = 'none';
    widget.classList.remove('open');
  }
}

// Chat replies — both EN and AR
var replies = {
  en: {
    'hi':      'Hi there! 👋 Great to hear from you! How can I help?',
    'hello':   'Hello! Welcome to my portfolio. What can I do for you?',
    'ahms':    'AHMS is the Afgoi Hospital Management System — a full hospital platform I\'m building using my MBA in Hospital Management. Covers patient records, appointments, pharmacy, billing and more! 🏥',
    'hospital':'The AHMS system I\'m building for Afgoi Hospital covers everything from patient admissions to pharmacy management. My MBA makes this project unique! 🏥',
    'travel':  'I have 15 years in travel, certified in Amadeus, Galileo, and Sabre GDS. My TravelExperts15 platform is live! ✈️',
    'payroll': 'My Payroll System is built on 10 years of real payroll experience in Qatar. Supports GCC compliance and WPS. 💰',
    'somali':  'Cilmiga Xiddigaha is the first Somali-language astrology app — combining traditional star knowledge with modern tech! ⭐ Unique project!',
    'price':   'Rates depend on the project scope. WhatsApp me for a free quote: +974 5518 9022 💬',
    'rate':    'Rates depend on the project scope. WhatsApp me for a free quote: +974 5518 9022 💬',
    'cost':    'Rates depend on project scope. Contact me on WhatsApp for a free estimate! 💬',
    'contact': 'Best way to reach me: WhatsApp +974 5518 9022 or osman@osmanahmedomar.com 📞',
    'qatar':   'Yes, I\'m based in Doha, Qatar! Available for local and international projects. 📍',
    'website': 'I can build you a professional website! Let\'s discuss your requirements. WhatsApp: +974 5518 9022 🌐',
    'default': [
      'Great question! For details, reach out via WhatsApp: +974 5518 9022 💬',
      'Thanks for asking! Let\'s connect on WhatsApp for a faster response 🚀',
      'I\'d love to help! Send me a message on WhatsApp: wa.me/97455189022'
    ]
  },
  ar: {
    'مرحبا':   'مرحباً بك! 👋 كيف يمكنني مساعدتك اليوم؟',
    'مرحب':    'مرحباً! أنا عثمان. ماذا يمكنني أن أفعل لك؟',
    'ahms':    'نظام AHMS هو نظام إدارة مستشفى أفغوي — منصة مستشفى متكاملة أبنيها باستخدام ماجستيري في إدارة المستشفيات. يشمل سجلات المرضى والمواعيد والصيدلية والفواتير! 🏥',
    'سعر':     'الأسعار تعتمد على نطاق المشروع. تواصل معي عبر واتساب للحصول على عرض مجاني: +974 5518 9022 💬',
    'سياحة':  'لدي 15 عاماً في السياحة، معتمد في Amadeus وGalileo وSabre. منصة TravelExperts15 مباشرة الآن! ✈️',
    'رواتب':  'نظام الرواتب مبني على 10 سنوات من الخبرة الحقيقية في قطر. يدعم امتثال دول الخليج وWPS. 💰',
    'موقع':   'يمكنني بناء موقع احترافي لك! دعنا نناقش متطلباتك. واتساب: +974 5518 9022 🌐',
    'تواصل':  'أفضل طريقة للتواصل: واتساب +974 5518 9022 أو osman@osmanahmedomar.com 📞',
    'default': [
      'سؤال رائع! للتفاصيل، تواصل عبر واتساب: +974 5518 9022 💬',
      'يسعدني المساعدة! أرسل لي رسالة على واتساب للرد السريع 🚀',
      'شكراً لاهتمامك! دعنا نتواصل على واتساب: wa.me/97455189022'
    ]
  }
};

function getReply(msg) {
  var lower = msg.toLowerCase();
  var set = LANG === 'ar' ? replies.ar : replies.en;
  for (var key in set) {
    if (key !== 'default' && lower.indexOf(key) >= 0) return set[key];
  }
  var def = set['default'];
  return def[Math.floor(Math.random() * def.length)];
}

function addChatMsg(text, type) {
  var msgs = document.getElementById('chatMsgs');
  var div = document.createElement('div');
  div.className = 'chat-msg ' + type;
  div.textContent = text;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function sendChat() {
  var inp = document.getElementById('chatInp');
  var text = inp.value.trim();
  if (!text) return;
  addChatMsg(text, 'usr');
  inp.value = '';
  var typing = addChatMsg(LANG === 'ar' ? 'يكتب...' : 'Typing...', 'typing');
  setTimeout(function() {
    typing.remove();
    addChatMsg(getReply(text), 'bot');
  }, 800 + Math.random() * 500);
}

function quickSend(text) {
  document.getElementById('chatInp').value = text;
  sendChat();
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closeHire(); }
});
