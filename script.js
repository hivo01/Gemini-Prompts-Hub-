/* =========================================
   Data & Translations
   ========================================= */

const translations = {
    en: {
        heroTitle: "Unlock the power of Gemini Image Editing",
        heroSubtitle: "Curated, ready-to-use prompts for the Nano Banana model. Transform your photos instantly.",
        heroCta: "Browse Prompts",
        howToTitle: "How to use",
        step1: "Open the Gemini app (Nano Banana supported).",
        step2: "Upload your photo or select an existing one.",
        step3: "Copy a prompt from this website and paste it.",
        step4: "Adjust the result by refining the prompt.",
        libraryTitle: "Prompt Library",
        footerDisclaimer: "This site is not affiliated with Google. Use prompts creatively.",
        footerLink: "Open Gemini",
        btnCopy: "Copy",
        btnGemini: "Open Gemini",
        toastCopied: "Copied!",
        searchPlaceholder: "Search prompts...",
        categories: {
            all: "All",
            background: "Background",
            portrait: "Portrait",
            color: "Color & Mood",
            objects: "Objects",
            creative: "Creative"
        }
    },
    fr: {
        heroTitle: "Libérez la puissance de l'édition d'image Gemini",
        heroSubtitle: "Des prompts prêts à l'emploi pour le modèle Nano Banana. Transformez vos photos instantanément.",
        heroCta: "Voir les prompts",
        howToTitle: "Comment utiliser",
        step1: "Ouvrez l'application Gemini (compatible Nano Banana).",
        step2: "Téléchargez votre photo ou sélectionnez-en une.",
        step3: "Copiez un prompt ici et collez-le dans Gemini.",
        step4: "Ajustez le résultat en raffinant le prompt.",
        libraryTitle: "Bibliothèque de Prompts",
        footerDisclaimer: "Ce site n'est pas affilié à Google. Utilisez les prompts avec créativité.",
        footerLink: "Ouvrir Gemini",
        btnCopy: "Copier",
        btnGemini: "Ouvrir Gemini",
        toastCopied: "Copié !",
        searchPlaceholder: "Rechercher...",
        categories: {
            all: "Tout",
            background: "Arrière-plan",
            portrait: "Portrait",
            color: "Couleur & Ambiance",
            objects: "Objets",
            creative: "Créatif"
        }
    },
    ar: {
        heroTitle: "أطلق العنان لقوة تعديل الصور مع Gemini",
        heroSubtitle: "أوامر جاهزة للاستخدام لنموذج Nano Banana. حول صورك فوراً.",
        heroCta: "تصفح الأوامر",
        howToTitle: "كيفية الاستخدام",
        step1: "افتح تطبيق Gemini (الداعم لـ Nano Banana).",
        step2: "ارفع صورتك أو اختر واحدة موجودة.",
        step3: "انسخ الأمر من هذا الموقع وألصقه في Gemini.",
        step4: "عدل النتيجة عن طريق تحسين الأمر إذا لزم.",
        libraryTitle: "مكتبة الأوامر",
        footerDisclaimer: "هذا الموقع غير تابع لـ Google. استخدم الأوامر بإبداع.",
        footerLink: "فتح Gemini",
        btnCopy: "نسخ",
        btnGemini: "فتح Gemini",
        toastCopied: "تم النسخ!",
        searchPlaceholder: "بحث عن أوامر...",
        categories: {
            all: "الكل",
            background: "الخلفية",
            portrait: "بورتريه",
            color: "الألوان والمزاج",
            objects: "كائنات",
            creative: "إبداعي"
        }
    }
};

const promptsData = [
    // === Background Changes ===
    {
        id: "bg-1",
        category: "background",
        content: {
            en: { title: "Luxury Minimalist Studio", desc: "Infinite white backdrop with soft shadows.", prompt: "Replace the background with a seamless, high-end white studio backdrop. Add soft, diffused lighting and gentle shadow falloff for a commercial look." },
            fr: { title: "Studio Minimaliste de Luxe", desc: "Fond blanc infini avec ombres douces.", prompt: "Remplace l'arrière-plan par un fond de studio blanc haut de gamme et sans couture. Ajoute un éclairage diffus et doux avec des ombres légères pour un look commercial." },
            ar: { title: "استوديو فاخر ومبسط", desc: "خلفية بيضاء لا متناهية مع ظلال ناعمة.", prompt: "استبدل الخلفية بخلفية استوديو بيضاء راقية وسلسة. أضف إضاءة ناعمة ومنتشرة مع ظلال خفيفة لمظهر تجاري." }
        }
    },
    {
        id: "bg-2",
        category: "background",
        content: {
            en: { title: "Moody Pine Forest", desc: "Misty dawn atmosphere.", prompt: "Transport the subject to a misty pine forest at dawn. Include soft rays of cool light filtering through the trees and a slight fog on the ground." },
            fr: { title: "Forêt de Pins Mélancolique", desc: "Atmosphère d'aube brumeuse.", prompt: "Transporte le sujet dans une forêt de pins brumeuse à l'aube. Inclus de doux rayons de lumière froide filtrant à travers les arbres et un léger brouillard au sol." },
            ar: { title: "غابة الصنوبر الضبابية", desc: "أجواء الفجر الغامضة.", prompt: "انقل الشخص إلى غابة صنوبر ضبابية عند الفجر. قم بتضمين أشعة ناعمة من الضوء البارد تتسلل عبر الأشجار وضباب خفيف على الأرض." }
        }
    },
    {
        id: "bg-3",
        category: "background",
        content: {
            en: { title: "Tokyo Night Street", desc: "Bokeh neon city lights.", prompt: "Change background to a busy Tokyo street at night with vibrant neon signs, wet pavement reflections, and a shallow depth of field (bokeh)." },
            fr: { title: "Rue de Tokyo la Nuit", desc: "Lumières néons bokeh.", prompt: "Change l'arrière-plan pour une rue animée de Tokyo la nuit avec des enseignes au néon vibrantes, des reflets sur le trottoir mouillé et une faible profondeur de champ (bokeh)." },
            ar: { title: "شارع طوكيو ليلاً", desc: "أضواء نيون وضبابية المدينة.", prompt: "غير الخلفية إلى شارع طوكيو المزدحم ليلاً مع لافتات نيون نابضة بالحياة، وانعكاسات الرصيف الرطب، وعمق مجال ضحل (بوكيه)." }
        }
    },
    {
        id: "bg-4",
        category: "background",
        content: {
            en: { title: "Modern Concrete Wall", desc: "Industrial chic texture.", prompt: "Place the subject in front of a textured, architectural raw concrete wall with dramatic side lighting emphasizing the texture." },
            fr: { title: "Mur en Béton Moderne", desc: "Texture chic industrielle.", prompt: "Place le sujet devant un mur en béton brut architectural texturé avec un éclairage latéral dramatique soulignant la texture." },
            ar: { title: "جدار خرساني حديث", desc: "ملمس صناعي أنيق.", prompt: "ضع الشخص أمام جدار خرساني معماري خام ذو ملمس، مع إضاءة جانبية درامية تبرز الملمس." }
        }
    },
    // === Portrait ===
    {
        id: "port-1",
        category: "portrait",
        content: {
            en: { title: "High-End Beauty Retouch", desc: "Magazine quality skin.", prompt: "Apply a high-end beauty retouch: smooth the skin texture while keeping pores visible, remove blemishes, and add a subtle healthy glow to the highlights." },
            fr: { title: "Retouche Beauté Haute Gamme", desc: "Peau qualité magazine.", prompt: "Applique une retouche beauté haut de gamme : lisse la texture de la peau en gardant les pores visibles, enlève les imperfections et ajoute un éclat sain subtil aux zones lumineuses." },
            ar: { title: "تنميق تجميلي راقٍ", desc: "بشرة بجودة المجلات.", prompt: "قم بتطبيق تنميق تجميلي راقٍ: نعم ملمس البشرة مع الحفاظ على المسام مرئية، أزل العيوب، وأضف توهجاً صحياً خفياً للمناطق المضيئة." }
        }
    },
    {
        id: "port-2",
        category: "portrait",
        content: {
            en: { title: "Professional Corporate", desc: "Navy suit and confidence.", prompt: "Change the outfit to a tailored navy blue business suit with a crisp white shirt. Ensure the lighting is professional and soft." },
            fr: { title: "Professionnel d'Entreprise", desc: "Costume bleu marine et confiance.", prompt: "Change la tenue pour un costume d'affaires bleu marine sur mesure avec une chemise blanche impeccable. Assure-toi que l'éclairage est professionnel et doux." },
            ar: { title: "مظهر مؤسسي محترف", desc: "بدلة كحلية وثقة.", prompt: "غير الزي إلى بدلة عمل زرقاء داكنة مفصلة مع قميص أبيض ناصع. تأكد من أن الإضاءة احترافية وناعمة." }
        }
    },
    // === Color ===
    {
        id: "col-1",
        category: "color",
        content: {
            en: { title: "Kodak Portra 400", desc: "Classic film aesthetics.", prompt: "Color grade the image to emulate Kodak Portra 400 film: warm skin tones, fine grain, soft highlights, and slightly desaturated greens." },
            fr: { title: "Kodak Portra 400", desc: "Esthétique film classique.", prompt: "Étalonne l'image pour imiter le film Kodak Portra 400 : tons de peau chauds, grain fin, hautes lumières douces et verts légèrement désaturés." },
            ar: { title: "كوداك بورترا 400", desc: "جماليات الفيلم الكلاسيكي.", prompt: "لون الصورة لمحاكاة فيلم كوداك بورترا 400: درجات بشرة دافئة، حبوب ناعمة، إضاءة ناعمة، وأخضر قليل التشبع." }
        }
    },
    {
        id: "col-2",
        category: "color",
        content: {
            en: { title: "Cyberpunk Neon", desc: "Futuristic pinks and teals.", prompt: "Apply a cyberpunk color palette with neon teals and magentas. Increase contrast and add a subtle glow to light sources." },
            fr: { title: "Néon Cyberpunk", desc: "Roses et turquoises futuristes.", prompt: "Applique une palette de couleurs cyberpunk avec des turquoises et magentas néon. Augmente le contraste et ajoute une lueur subtile aux sources lumineuses." },
            ar: { title: "نيون سايبر بانك", desc: "ألوان وردية وتركوازية مستقبلية.", prompt: "طبق لوحة ألوان سايبر بانك مع التركواز والماجينتا النيون. زد التباين وأضف توهجاً خفياً لمصادر الضوء." }
        }
    },
    // === Objects ===
    {
        id: "obj-1",
        category: "objects",
        content: {
            en: { title: "Remove Clutter", desc: "Clean up the background.", prompt: "Remove all distracting objects from the background such as trash cans, power lines, and random bystanders. Fill the space naturally." },
            fr: { title: "Enlever le Désordre", desc: "Nettoyer l'arrière-plan.", prompt: "Enlève tous les objets distrayants de l'arrière-plan tels que les poubelles, les lignes électriques et les passants. Remplis l'espace naturellement." },
            ar: { title: "إزالة الفوضى", desc: "تنظيف الخلفية.", prompt: "أزل جميع الكائنات المشتتة من الخلفية مثل صناديق القمامة، وخطوط الكهرباء، والمارة العشوائيين. املأ المساحة بشكل طبيعي." }
        }
    },
    {
        id: "obj-2",
        category: "objects",
        content: {
            en: { title: "Hold Vintage Camera", desc: "Classic photography prop.", prompt: "Place a vintage silver Leica-style camera in the subject's hands. Ensure the fingers wrap around it realistically." },
            fr: { title: "Tenir Appareil Vintage", desc: "Accessoire photo classique.", prompt: "Place un appareil photo argentique style Leica vintage dans les mains du sujet. Assure-toi que les doigts l'enveloppent de manière réaliste." },
            ar: { title: "حمل كاميرا كلاسيكية", desc: "إكسسوار تصوير كلاسيكي.", prompt: "ضع كاميرا فضية كلاسيكية طراز لايكا في يدي الشخص. تأكد من أن الأصابع تلتف حولها بواقعية." }
        }
    },
    // === Creative ===
    {
        id: "art-1",
        category: "creative",
        content: {
            en: { title: "Renaissance Oil Painting", desc: "Classic art style.", prompt: "Transform the photo into a classic Renaissance oil painting style with visible brushstrokes, rich deep colors, and cracked varnish texture." },
            fr: { title: "Peinture Huile Renaissance", desc: "Style art classique.", prompt: "Transforme la photo en style peinture à l'huile classique de la Renaissance avec des coups de pinceau visibles, des couleurs riches et une texture de vernis craquelé." },
            ar: { title: "لوحة زيتية من النهضة", desc: "أسلوب فني كلاسيكي.", prompt: "حول الصورة إلى نمط لوحة زيتية كلاسيكية من عصر النهضة مع ضربات فرشاة مرئية، وألوان عميقة غنية، وملمس ورنيش متشقق." }
        }
    },
    {
        id: "art-2",
        category: "creative",
        content: {
            en: { title: "3D Pixar Character", desc: "Animated movie look.", prompt: "Convert the subject into a high-quality 3D animated character in the style of a modern Pixar movie. Big expressive eyes, soft lighting, and cartoonish proportions." },
            fr: { title: "Personnage 3D Pixar", desc: "Look film d'animation.", prompt: "Convertis le sujet en personnage d'animation 3D de haute qualité dans le style d'un film Pixar moderne. Grands yeux expressifs, éclairage doux et proportions cartoon." },
            ar: { title: "شخصية بيكسار ثلاثية الأبعاد", desc: "مظهر فيلم رسوم متحركة.", prompt: "حول الشخص إلى شخصية كرتونية ثلاثية الأبعاد عالية الجودة بأسلوب أفلام بيكسار الحديثة. عيون كبيرة معبرة، إضاءة ناعمة، ونسب كرتونية." }
        }
    }
];

/* =========================================
   Application State
   ========================================= */

let currentLang = 'en';
let currentCategory = 'all';
let currentSearch = '';
let likedPrompts = new Set();

// Load likes
try {
    const saved = localStorage.getItem('nanoFavorites');
    if (saved) likedPrompts = new Set(JSON.parse(saved));
} catch(e) {}

/* =========================================
   Core Functions
   ========================================= */

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // 1. Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // 2. Update Active Button State
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // 3. Translate Static Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // 4. Update Placeholder
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = translations[lang].searchPlaceholder;

    // 5. Re-render dynamic content
    renderCategories();
    renderPrompts();
}

function scrollToLibrary() {
    const section = document.getElementById('library');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function setCategory(catKey) {
    currentCategory = catKey;
    renderCategories();
    renderPrompts();
}

function handleSearch(value) {
    currentSearch = (value || '').toLowerCase().trim();
    renderPrompts();
}

function toggleLike(id) {
    if (likedPrompts.has(id)) {
        likedPrompts.delete(id);
    } else {
        likedPrompts.add(id);
    }
    
    localStorage.setItem('nanoFavorites', JSON.stringify(Array.from(likedPrompts)));
    renderPrompts();
}

function copyToClipboard(text) {
    if (!navigator.clipboard) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showToast();
        } catch (err) {}
        document.body.removeChild(textArea);
        return;
    }

    navigator.clipboard.writeText(text).then(() => {
        showToast();
    });
}

function copyAndOpen(text) {
    copyToClipboard(text);
    setTimeout(() => {
        window.open('https://gemini.google.com/', '_blank');
    }, 800);
}

/* =========================================
   Rendering Functions
   ========================================= */

function renderCategories() {
    const container = document.getElementById('categoryContainer');
    if (!container) return;
    
    container.innerHTML = '';
    const cats = ['all', 'background', 'portrait', 'color', 'objects', 'creative'];
    
    cats.forEach(catKey => {
        const btn = document.createElement('button');
        btn.className = `cat-btn ${currentCategory === catKey ? 'active' : ''}`;
        btn.textContent = translations[currentLang].categories[catKey];
        btn.addEventListener('click', () => setCategory(catKey));
        container.appendChild(btn);
    });
}

function renderPrompts() {
    const grid = document.getElementById('promptsGrid');
    const noResults = document.getElementById('noResults');
    if (!grid) return;
    
    grid.innerHTML = '';

    const filtered = promptsData.filter(p => {
        const content = p.content[currentLang];
        if (!content) return false;

        // Category filter
        if (currentCategory !== 'all' && p.category !== currentCategory) return false;
        
        // Search filter
        if (currentSearch) {
            const searchStr = (content.title + ' ' + content.desc + ' ' + content.prompt).toLowerCase();
            if (!searchStr.includes(currentSearch)) return false;
        }
        return true;
    });

    if (filtered.length === 0) {
        if (noResults) noResults.classList.remove('hidden');
    } else {
        if (noResults) noResults.classList.add('hidden');
    }

    filtered.forEach((p, index) => {
        const content = p.content[currentLang];
        const isLiked = likedPrompts.has(p.id);
        const card = document.createElement('div');
        card.className = 'prompt-card';
        card.style.animationDelay = `${Math.min(index * 0.05, 0.5)}s`;
        
        // Icons
        const heartIcon = isLiked 
            ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`
            : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;

        const copyIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
        const linkIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;

        // Construct HTML structure
        card.innerHTML = `
            <div class="card-header">
                <span class="card-badge">${translations[currentLang].categories[p.category]}</span>
                <h3 class="card-title">${content.title}</h3>
            </div>
            <p class="card-desc">${content.desc}</p>
            <div class="prompt-box">${content.prompt}</div>
        `;

        // Create Actions Container
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'card-actions';

        // Like Button
        const likeBtn = document.createElement('button');
        likeBtn.className = `action-btn icon-only ${isLiked ? 'liked' : ''}`;
        likeBtn.innerHTML = heartIcon;
        likeBtn.addEventListener('click', () => toggleLike(p.id));
        actionsDiv.appendChild(likeBtn);

        // Copy Button
        const copyBtn = document.createElement('button');
        copyBtn.className = 'action-btn primary';
        copyBtn.innerHTML = `${copyIcon} ${translations[currentLang].btnCopy}`;
        copyBtn.addEventListener('click', () => copyToClipboard(content.prompt));
        actionsDiv.appendChild(copyBtn);

        // Link Button
        const linkBtn = document.createElement('button');
        linkBtn.className = 'action-btn icon-only';
        linkBtn.title = translations[currentLang].btnGemini;
        linkBtn.innerHTML = linkIcon;
        linkBtn.addEventListener('click', () => copyAndOpen(content.prompt));
        actionsDiv.appendChild(linkBtn);

        card.appendChild(actionsDiv);
        grid.appendChild(card);
    });
}

function showToast() {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toast-msg');
    if (!toast) return;

    if (msg) msg.textContent = translations[currentLang].toastCopied;
    toast.classList.remove('hidden');
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.classList.add('hidden'), 300);
    }, 2000);
}

/* =========================================
   Initialization
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Attach Event Listeners
    
    // Lang Buttons
    document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('btn-fr').addEventListener('click', () => setLanguage('fr'));
    document.getElementById('btn-ar').addEventListener('click', () => setLanguage('ar'));
    
    // Logo
    document.getElementById('logo-btn').addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // Hero Browse Button
    const browseBtn = document.getElementById('hero-browse-btn');
    if (browseBtn) {
        browseBtn.addEventListener('click', scrollToLibrary);
    }

    // Search Input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
        // Sync initial state if browser cached a value
        if (searchInput.value) {
            handleSearch(searchInput.value);
        }
    }

    // Initial Load
    setLanguage('en');
});