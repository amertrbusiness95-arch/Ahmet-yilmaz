/* ==========================================================================
   i18n.js — English / Arabic switch.
   Arabic flips the page to RTL and swaps the narrative text. Names, project
   titles, software, the timeline, dates and contact details stay in English.
   ========================================================================== */
(() => {
  const DICT = {
    /* nav + header */
    'Work': 'أعمالي', 'About': 'نبذة عني', 'Capabilities': 'تخصصاتي', 'Experience': 'خبراتي', 'Contact': 'تواصل معي',
    'Live · Istanbul': 'مباشر · إسطنبول',
    'Breaking': 'عاجل',
    'Editorial · Cover': 'تحرير · غلاف',
    'Reach · 2024 · M views': 'الوصول · 2024 · مليون مشاهدة',
    'Scroll · Continue': 'مرر للأسفل',
    'When the': 'حين تتكلم', 'map': 'الخريطة', 'tells the story before the words do.': 'قبل أن تتكلم الكلمات.',

    /* hero */
    'See Selected Work': 'استعرض أعمالي',
    'Book an Intro Call': 'لنتحدث عن مشروعك',
    'Senior Graphic Designer · Istanbul ·': 'Senior Graphic Designer · إسطنبول ·',
    '10+ years': 'خبرة تتجاوز 10 سنوات',
    'in visual communication — editorial design, news graphics, infographics and digital storytelling.':
      'أعمل في مجال التصميم البصري، وأتخصص في التصميم الإخباري، والإنفوجرافيك، والهويات البصرية، والسرد القصصي الرقمي.',

    /* marquee */
    'Editorial Design': 'التصميم التحريري',
    'Visual Journalism': 'الصحافة البصرية',
    'Infographics': 'الإنفوجرافيك',
    'Cinematic Posters': 'البوسترات السينمائية',
    'AI Direction': 'التوجيه الإبداعي بالذكاء الاصطناعي',
    'Brand Systems': 'الهوية البصرية',
    'Motion Graphics': 'الموشن جرافيك',

    /* about */
    'About / 01': 'نبذة عني / 01',
    'A': '',
    'creative designer': 'الإبداع يبدأ',
    'with a passion for creativity.': 'من الفكرة.',
    'I tell the story': 'الصورة تحكي',
    'before': 'أولًا،',
    'you read the headline.': 'والكلمات بعدها.',
    'Senior Graphic Designer with': 'Senior Graphic Designer، أمتلك',
    'in visual communication, specialising in editorial design, news graphics and digital storytelling.':
      'في مجال الاتصال البصري، مع تخصص في التصميم الإخباري والإنفوجرافيك والسرد القصصي الرقمي.',
    'Since 2018 I’ve worked with leading media organisations — including': 'منذ عام 2018، عملت مع مؤسسات إعلامية بارزة، من بينها',
    'Al Jazeera Network': 'شبكة الجزيرة',
    ',': '،',
    'Arabi 21': 'عربي21',
    'and': 'و',
    'Channel 9': 'قناة 9',
    '— creating visual content for broadcast and digital platforms. My work spans visual direction, editorial campaigns, infographics and brand identity, always focused on clarity, creativity and audience engagement.':
      'على إنتاج محتوى بصري مخصص للشاشات والمنصات الرقمية. تشمل خبراتي الإشراف البصري، وتصميم الحملات الإعلامية، والإنفوجرافيك، وتطوير الهويات البصرية، مع التركيز على وضوح الفكرة، وجودة التنفيذ، وقدرة التصميم على إيصال الرسالة للجمهور.',
    'Years In Practice': 'سنوات خبرة',
    'Studio Clients': 'عملاء ومؤسسات',

    /* work */
    'Selected Work / 02': 'أعمال مختارة / 02',
    'Six stories.': 'مشاريع مختلفة،',
    'Different': 'ولكل مشروع',
    'visual languages': 'هويته البصرية',
    'Full archive on Behance —': 'استعرض ملف أعمالي على Behance —',
    'From the archive · behance.net/ahmedamer14': 'من الأرشيف · behance.net/ahmedamer14',
    'View all projects ↗': 'عرض جميع الأعمال ↗',
    'View full archive on Behance': 'استعرض ملف أعمالي على Behance',
    'Editorial · Campaign · 2024': 'تحرير · حملة · 2024',
    'Infographic · Al Jazeera · 2025': 'إنفوجرافيك · الجزيرة · 2025',
    'News Visual · Al Jazeera · 2025': 'بصري إخباري · الجزيرة · 2025',
    'Identity · Branding': 'هوية · علامة تجارية',
    'Illustration · Series': 'إلاستريشن · سلسلة',
    'Editorial · Al Jazeera · 2024': 'تحرير · الجزيرة · 2024',

    /* capabilities */
    'Capabilities / 03': 'تخصصاتي / 03',
    'What lands on': 'من الفكرة إلى',
    'the desk': 'التنفيذ',
    'Direction, design and production. Solo or with an in-house team.':
      'أقدم حلولًا بصرية متكاملة، من تطوير الفكرة والتوجيه الفني إلى التصميم والإنتاج، سواء بشكل مستقل أو بالتعاون مع فرق العمل.',
    'Editorial &': 'التصميم الإخباري',
    'Newsroom Design': 'والتحريري',
    'Cover systems, weekly templates, long-form layouts, breaking-news frameworks.':
      'تصميم الأغلفة الإخبارية، والقوالب الدورية، والمحتوى التحريري المطوّل، والمعالجات البصرية للأخبار العاجلة.',
    'Cover Systems': 'أغلفة إخبارية',
    'Long-form': 'تصميمات مطولة',
    'Templates': 'قوالب تحريرية',
    'Infographics &': 'الإنفوجرافيك',
    'Data Visualisation': 'وتصور البيانات',
    'Politics, conflict, economy, culture. Feed, print and TV — Arabic and English.':
      'تحويل المعلومات والبيانات المعقدة إلى محتوى بصري واضح وجذاب، في مجالات السياسة والاقتصاد والثقافة والشؤون الدولية.',
    'Charts': 'رسوم بيانية',
    'Maps': 'خرائط',
    'Explainers': 'شروحات بصرية',
    'Cinematic Posters &': 'البوسترات السينمائية',
    'Key Art': 'والهوية البصرية للأعمال',
    'Title treatments, campaign key art and poster systems for TV and documentary.':
      'تصميم البوسترات والمعالجات البصرية للأفلام والبرامج التلفزيونية والوثائقية، إلى جانب تطوير العناصر الرئيسية للحملات الإعلامية.',
    'Title Treatment': 'تصميم العناوين',
    'Print': 'البوسترات',
    'OOH': 'الحملات البصرية',
    'Visual Storytelling': 'السرد البصري',
    'Powered by AI': 'بالذكاء الاصطناعي',
    'Prompt systems, model-led editorial illustration, hybrid pipelines for newsrooms.':
      'توظيف أدوات الذكاء الاصطناعي في إنتاج المحتوى البصري، وتطوير أنظمة البرومبتات، ودمج التقنيات الحديثة ضمن مراحل التصميم والإنتاج الإعلامي.',
    'Pipelines': 'أنظمة الإنتاج',
    'Brand & Identity': 'الهوية البصرية',
    'for Media': 'للمؤسسات الإعلامية',
    'Wordmarks': 'الشعارات',
    'Bilingual': 'الهويات البصرية',
    'Guidelines': 'أدلة الاستخدام',
    'Wordmarks, programme identities and bilingual systems — Arabic + Latin as siblings.':
      'تصميم الشعارات وهويات البرامج والمشاريع الإعلامية، وتطوير أنظمة بصرية متكاملة تحافظ على اتساق العلامة التجارية عبر مختلف المنصات.',
    'Motion &': 'الموشن جرافيك',
    'On-Air Graphics': 'وجرافيك البث',
    'Title sequences, lower-thirds, on-air packages and short-form social motion.':
      'تصميم مقدمات البرامج والهويات المتحركة والعناصر البصرية للشاشات، إلى جانب إنتاج الموشن جرافيك للمحتوى الإخباري والمنصات الرقمية.',
    'Title Design': 'تصميم العناوين',
    'Tools & proficiency': 'الأدوات والبرامج التي أستخدمها',

    /* experience (timeline itself stays English) */
    'Experience / 04': 'خبراتي / 04',
    'Ten years of': 'أكثر من عقد من',
    'creativity': 'الخبرة والإبداع',
    'Since 2018, working with leading media organizations — Al Jazeera Network and Arabi 21 — creating visual content for broadcast and digital platforms.':
      'مسيرة مهنية في التصميم الإعلامي، بالتعاون مع مؤسسات إخبارية وشركات إبداعية، لإنتاج محتوى بصري يجمع بين قوة الفكرة وجودة التنفيذ.',

    /* clients */
    'Clients & Partners / 05': 'العملاء والشركاء / 05',
    'Clients': 'شراكات متنوعة،',
    '& partners, one visual desk.': 'ورؤية بصرية واحدة.',

    /* contact */
    'Contact / 06': 'التواصل / 06',
    'Currently booking · Q3 — Q4 2026': 'متاح حاليًا لمناقشة مشاريع جديدة.',
    "Let's": 'لنبدأ',
    'work': 'مشروعًا جديدًا',
    'together.': 'معًا.',
    'Email': 'البريد',
    'Istanbul': 'إسطنبول',
    'Studio': 'الموقع',
    'Istanbul, Türkiye': 'إسطنبول، تركيا',
    'Available remote · GMT+3 · willing to travel for in-newsroom residencies.':
      'متاح للعمل عن بُعد، مع إمكانية السفر والمشاركة في المشاريع التي تتطلب الحضور ضمن فرق التحرير والإنتاج الإعلامي.',
    'Direct': 'التواصل المباشر',
    'Reply within 24h, weekdays.': 'عادةً ما أرد على الرسائل خلال 24 ساعة في أيام العمل.',

    /* footer */
    'Designed in Istanbul · Set in Instrument Serif & Space Grotesk': 'صُمم في إسطنبول.',
    '↑ Top': '↑ العودة إلى الأعلى'
  };

  const ATTRS = {
    'Primary': 'القائمة الرئيسية',
    'Contact channels': 'قنوات التواصل',
    'WhatsApp chat': 'محادثة واتساب',
    'Instagram direct message': 'رسالة إنستغرام',
    'Behance portfolio': 'ملف بيهانس',
    'Email': 'البريد',
    'Location: Istanbul': 'الموقع: إسطنبول',
    'Switch language': 'تغيير اللغة'
  };

  /* Kept in English in both languages: timeline, project titles, software and skill names, live clock, stats numbers, the name and the tweaks panel */
  const SKIP = 'script,style,svg,#tweaksPanel,#liveTime,.cursor-dot,.cursor-ring,.stat .num,.skill__top,.tl-item,.bh-card__title,.lang-toggle';
  const norm = (s) => s.replace(/\s+/g, ' ').trim();
  const orig = new WeakMap();
  const texts = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    if (!norm(n.nodeValue)) continue;
    if (n.parentElement && n.parentElement.closest(SKIP)) continue;
    texts.push(n);
  }
  const attrEls = Array.from(document.querySelectorAll('[aria-label]')).filter(el => !el.closest('#tweaksPanel'));
  const attrOrig = new WeakMap();
  const toggle = document.getElementById('langToggle');

  /* Kashida comes from the font itself (ss08 stretches the kaf); no extra tatweel is inserted */
  const stretchKaf = (s) => s;

  function apply(lang) {
    const ar = lang === 'ar';
    document.documentElement.lang = ar ? 'ar' : 'en';
    document.documentElement.dir = ar ? 'rtl' : 'ltr';
    for (const t of texts) {
      if (!orig.has(t)) orig.set(t, t.nodeValue);
      const src = orig.get(t);
      if (!ar) { t.nodeValue = src; continue; }
      const k = norm(src);
      if (Object.prototype.hasOwnProperty.call(DICT, k)) {
        const lead = (src.match(/^\s*/) || [''])[0];
        const trail = (src.match(/\s*$/) || [''])[0];
        t.nodeValue = DICT[k] === '' ? '' : lead + stretchKaf(DICT[k]) + trail;
      }
    }
    for (const el of attrEls) {
      if (!attrOrig.has(el)) attrOrig.set(el, el.getAttribute('aria-label'));
      const src = attrOrig.get(el);
      el.setAttribute('aria-label', ar && ATTRS[src] ? ATTRS[src] : src);
    }
    if (toggle) {
      toggle.querySelectorAll('[data-k]').forEach(s => s.classList.toggle('is-on', s.dataset.k === lang));
    }
    try { localStorage.setItem('site-lang', lang); } catch (e) {}
  }

  let start = 'en';
  try { if (localStorage.getItem('site-lang') === 'ar') start = 'ar'; } catch (e) {}
  if (toggle) toggle.addEventListener('click', () => apply(document.documentElement.lang === 'ar' ? 'en' : 'ar'));
  apply(start);
})();
