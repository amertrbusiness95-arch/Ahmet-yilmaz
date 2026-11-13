/* ==========================================================================
   i18n.js — English / Arabic switch. Arabic switches the page to RTL and
   swaps each visible string for its translation. English restores originals.
   ========================================================================== */
(() => {
  const DICT = {
    'AHMET YILMAZ · CREATIVE DIRECTION': 'أحمد يلماز · الإدارة الإبداعية',
    'Work': 'أعمالي', 'About': 'نبذة', 'Capabilities': 'المهارات', 'Experience': 'الخبرة', 'Contact': 'التواصل',
    'Available': 'متاح',
    'Live · Istanbul': 'مباشر · إسطنبول',
    'SENIOR GRAPHIC DESIGNER · 10+ YEARS': 'مصمم جرافيك أول · 10+ سنوات',
    'EDITORIAL × NEWS × AI': 'تحرير × أخبار × ذكاء اصطناعي',
    'Designing visual narratives for Al Jazeera Network, Arabi 21 & Channel 9.': 'أصمم سرديات بصرية لشبكة الجزيرة وعربي 21 وقناة 9.',
    'Senior Graphic Designer · Istanbul ·': 'مصمم جرافيك أول · إسطنبول ·',
    '10+ years': '10+ سنوات',
    'in visual communication — editorial design, news graphics, infographics and digital storytelling.': 'في الاتصال البصري — تصميم تحريري وجرافيك إخباري وإنفوجرافيك وسرد رقمي.',
    'See Selected Work': 'شاهد الأعمال المختارة',
    'Book an Intro Call': 'احجز مكالمة تعارف',
    'Breaking': 'عاجل',
    'When the': 'حين تتكلم', 'map': 'الخريطة', 'tells the story before the words do.': 'تروي القصة قبل أن تنطق الكلمات.',
    'Editorial · Cover': 'تحرير · غلاف',
    'Reach · 2024 · M views': 'الوصول · 2024 · مليون مشاهدة',
    'Scroll · Continue': 'مرر للأسفل',
    'Editorial Design': 'تصميم تحريري', 'Visual Journalism': 'الصحافة البصرية', 'Infographics': 'إنفوجرافيك',
    'Cinematic Posters': 'بوسترات سينمائية', 'AI Direction': 'إخراج بالذكاء الاصطناعي', 'Brand Systems': 'أنظمة الهوية', 'Motion Graphics': 'جرافيك متحرك',
    'About / 01': 'نبذة / 01',
    'A': '',
    'creative designer': 'مصمم مبدع',
    'with a passion for creativity.': 'شغوف بالإبداع.',
    'I tell the story': 'أروي القصة', 'before': 'قبل', 'you read the headline.': 'أن تقرأ العنوان.',
    'Senior Graphic Designer with': 'مصمم جرافيك أول بخبرة',
    'in visual communication, specialising in editorial design, news graphics and digital storytelling.': 'في الاتصال البصري، متخصص في التصميم التحريري والجرافيك الإخباري والسرد الرقمي.',
    'Since 2018 I’ve worked with leading media organisations — including': 'منذ 2018 عملت مع مؤسسات إعلامية رائدة، من بينها',
    'Al Jazeera Network': 'شبكة الجزيرة', ',': '،', 'Arabi 21': 'عربي 21', 'and': 'و', 'Channel 9': 'قناة 9',
    '— creating visual content for broadcast and digital platforms. My work spans visual direction, editorial campaigns, infographics and brand identity, always focused on clarity, creativity and audience engagement.': '— أنتج محتوى بصرياً للبث والمنصات الرقمية. يمتد عملي إلى الإخراج البصري والحملات التحريرية والإنفوجرافيك وهوية العلامات، مع تركيز دائم على الوضوح والإبداع والتفاعل مع الجمهور.',
    'Years In Practice': 'سنوات من الممارسة', 'Studio Clients': 'عملاء الاستوديو',
    'Selected Work / 02': 'أعمال مختارة / 02',
    'Six stories.': 'ست قصص.', 'Different': 'ولغات', 'visual languages': 'بصرية مختلفة',
    'Full archive on Behance —': 'الأرشيف الكامل على بيهانس —',
    'From the archive · behance.net/ahmedamer14': 'من الأرشيف · behance.net/ahmedamer14',
    'View all projects ↗': 'كل المشاريع ↗',
    'Editorial · Campaign · 2024': 'تحرير · حملة · 2024',
    'Ramadan Rassd N': 'رصد رمضان',
    'Infographic · Al Jazeera · 2025': 'إنفوجرافيك · الجزيرة · 2025',
    'Infographics — Al Jazeera': 'إنفوجرافيك — شبكة الجزيرة',
    'News Visual · Al Jazeera · 2025': 'بصري إخباري · الجزيرة · 2025',
    'Aviation Incidents': 'حوادث الطيران', 'Identity · Branding': 'هوية · علامة تجارية',
    'Marrikh Podcast': 'بودكاست مريخ', 'Illustration · Series': 'إلاستريشن · سلسلة',
    'Islamic Characters': 'شخصيات إسلامية', 'Editorial · Al Jazeera · 2024': 'تحرير · الجزيرة · 2024',
    'View full archive on Behance': 'الأرشيف الكامل على بيهانس',
    'Capabilities / 03': 'المهارات / 03',
    'What lands on': 'ما ينجز على', 'the desk': 'طور التصميم',
    'Direction, design and production. Solo or with an in-house team.': 'إخراج وتصميم وإنتاج. منفرداً أو مع فريق داخلي.',
    'Editorial &': 'تحرير و', 'Newsroom Design': 'تصميم غرف الأخبار',
    'Cover systems, weekly templates, long-form layouts, breaking-news frameworks.': 'أنظمة الأغلفة، القوالب الأسبوعية، التخطيطات الطويلة، أطر الأخبار العاجلة.',
    'Cover Systems': 'أنظمة الأغلفة', 'Long-form': 'محتوى طويل', 'Templates': 'قوالب',
    'Infographics &': 'إنفوجرافيك و', 'Data Visualisation': 'تصور البيانات',
    'Politics, conflict, economy, culture. Feed, print and TV — Arabic and English.': 'سياسة، نزاعات، اقتصاد، ثقافة. للمنصات الرقمية والمطبوعات والتلفزيون — بالعربية والإنجليزية.',
    'Charts': 'مخططات', 'Maps': 'خرائط', 'Explainers': 'شروحات',
    'Cinematic Posters &': 'بوسترات سينمائية و', 'Key Art': 'الفن الرئيسي',
    'Title treatments, campaign key art and poster systems for TV and documentary.': 'معالجات العناوين وفن الحملات وأنظمة البوسترات للتلفزيون والوثائقيات.',
    'Title Treatment': 'معالجة العناوين', 'Print': 'مطبوعات', 'OOH': 'إعلانات خارجية',
    'Powered by AI': 'بالذكاء الاصطناعي', 'Visual Storytelling': 'السرد البصري',
    'Prompt systems, model-led editorial illustration, hybrid pipelines for newsrooms.': 'أنظمة الأوامر، رسوم تحريرية بالنماذج، وخطوط إنتاج هجينة لغرف الأخبار.',
    'Pipelines': 'خطوط الإنتاج',
    'Brand & Identity': 'الهوية والعلامة', 'for Media': 'للإعلام',
    'Wordmarks': 'شعارات نصية', 'Bilingual': 'ثنائي اللغة', 'Guidelines': 'أدلة الهوية',
    'Wordmarks, programme identities and bilingual systems — Arabic + Latin as siblings.': 'شعارات نصية وهويات برامج وأنظمة ثنائية اللغة — العربية واللاتينية كأخوين.',
    'Motion &': 'الحركة و', 'On-Air Graphics': 'جرافيك البث',
    'Title sequences, lower-thirds, on-air packages and short-form social motion.': 'تتابعات العناوين، شرائط الأسماء، حزم البث، والحركة القصيرة للسوشيال.',
    'After Effects': 'أفتر إفكتس', 'Premiere': 'بريمير', 'Title Design': 'تصميم العناوين',
    'Tools & proficiency': 'الأدوات والإتقان',
    'Photoshop': 'فوتوشوب', 'Illustrator': 'إليستريتور', 'AI Tools': 'أدوات الذكاء الاصطناعي', 'Premiere Pro': 'بريمير برو',
    'Experience / 04': 'الخبرة / 04',
    'Ten years of': 'عشر سنوات من', 'creativity': 'السرد البصري',
    'Since 2018, working with leading media organizations — Al Jazeera Network and Arabi 21 — creating visual content for broadcast and digital platforms.': 'منذ 2018، أعمل مع مؤسسات إعلامية رائدة — شبكة الجزيرة وعربي 21 — أنتج محتوى بصرياً للبث والمنصات الرقمية.',
    '2023 — Present': '2023 — الآن',
    'Senior Graphic Designer · Al Jazeera Network': 'مصمم جرافيك أول · شبكة الجزيرة',
    'Istanbul, Türkiye': 'إسطنبول، تركيا',
    '· international media network': '· شبكة إعلامية دولية',
    'Designing visual identities for films, video productions and news content; motion graphics, on-screen graphics and visual treatments across broadcast and digital platforms.': 'تصميم هويات بصرية للأفلام والإنتاجات المرئية والمحتوى الإخباري؛ جرافيك متحرك وعناصر على الشاشة ومعالجات بصرية عبر البث والمنصات الرقمية.',
    'Now': 'الآن',
    '2022 — 2025': '2022 — 2025',
    'Senior Graphic Designer · Arabi 21': 'مصمم جرافيك أول · عربي 21',
    '· digital news platform': '· منصة أخبار رقمية',
    'Visual content for digital news, features and social media. Data-driven infographics for Arabic-speaking audiences.': 'محتوى بصري للأخبار الرقمية والتقارير ومواقع التواصل. إنفوجرافيك قائم على البيانات للجمهور الناطق بالعربية.',
    '2019 — 2024': '2019 — 2024',
    'Senior Graphic Designer · Attractant Marketing Agency': 'مصمم جرافيك أول · وكالة Attractant للتسويق',
    '· studio commissions': '· أعمال استوديو',
    'Al Jazeera Mubasher · Ma’a Al-Hakeem, Montada Al Tarbia, Nosos Academy, Fikr & Rawasekh, Dr. Al-Awadhi, Dr. Khalid Al-Jaber, The German Arabic Home, Global Campaign · Prophet Muhammad (PBUH).': 'الجزيرة مباشر · معاً الحكيم، منتدى التربية، أكاديمية نسوس، فكر وروافد، د. العوضي، د. خالد الجابر، البيت الألماني العربي، الحملة العالمية · نصرة النبي محمد ﷺ.',
    'Junior Graphic Designer · Channel 9 (TV)': 'مصمم جرافيك مبتدئ · قناة 9 (تلفزيون)',
    '· broadcast television': '· تلفزيون بث',
    'On-screen graphics, lower-thirds and content videos for TV programmes.': 'جرافيك على الشاشة وشرائط الأسماء وفيديوهات المحتوى لبرامج تلفزيونية.',
    '2016 — 2018': '2016 — 2018',
    'Freelance Graphic Designer': 'مصمم جرافيك حر', '· independent': '· مستقل',
    'Freelance design for real estate companies, a food brand and aesthetic clinics.': 'تصميم حر لشركات عقارية وعلامة أغذية وعيادات تجميل.',
    'Clients & Partners / 05': 'العملاء والشركاء / 05',
    'Clients': 'العملاء', '& partners, one visual desk.': 'والشركاء، طاولة بصرية واحدة.',
    'Contact / 06': 'التواصل / 06',
    'Currently booking · Q3 — Q4 2026': 'الحجز متاح · الربع الثالث — الرابع 2026',
    "Let's": 'يلا', 'work': 'نشتغل', 'together.': 'مع بعض.',
    'Email': 'البريد', 'Istanbul': 'إسطنبول', 'Studio': 'الاستوديو',
    'Available remote · GMT+3 · willing to travel for in-newsroom residencies.': 'متاح عن بُعد · GMT+3 · مستعد للسفر للإقامة داخل غرف الأخبار.',
    'Direct': 'مباشر',
    'Reply within 24h, weekdays.': 'الرد خلال 24 ساعة، أيام الأسبوع.',
    '· Ahmet Yilmaz · Senior Graphic Designer': '· أحمد يلماز · مصمم جرافيك أول',
    'Designed in Istanbul · Set in Instrument Serif & Space Grotesk': 'صُمم في إسطنبول · بخطوط Instrument Serif و Space Grotesk',
    '↑ Top': '↑ للأعلى'
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
  const SKIP = 'script,style,svg,#tweaksPanel,#liveTime,.cursor-dot,.cursor-ring,.stat .num,.skill__num,.lang-toggle';
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
        t.nodeValue = DICT[k] === '' ? '' : lead + DICT[k] + trail;
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
