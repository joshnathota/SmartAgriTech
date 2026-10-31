// ========================================
// SMARTAGRITECH - MAIN JAVASCRIPT
// ========================================

// Get existing page elements
const languageCards = document.querySelectorAll(".language-card");
const continueBtn = document.getElementById("continueBtn");
const message = document.getElementById("message");

const languagePage = document.getElementById("languagePage");
const accountPage = document.getElementById("accountPage");
const dashboardPage = document.getElementById("dashboardPage");

const signupTab = document.getElementById("signupTab");
const loginTab = document.getElementById("loginTab");
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

const accountHeading = document.getElementById("accountHeading");
const accountMessage = document.getElementById("accountMessage");
const backBtn = document.getElementById("backBtn");

const featureMessage = document.getElementById("featureMessage");
const logoutBtn = document.getElementById("logoutBtn");
const profileBtn = document.getElementById("profileBtn");

// Restore previously selected language
let selectedLanguage = localStorage.getItem("farmerLanguage") || "en";

// ========================================
// TRANSLATIONS FOR SIX LANGUAGES
// ========================================

const translations = {
    en: {
        welcome: "Welcome, Farmer!",
        choose: "Choose your language to continue",
        select: "Please select your language",
        selected: "Selected: ",
        continue: "Continue →",
        createTitle: "Create your account",
        loginTitle: "Welcome back!",
        subtitle: "Your farming assistant is here to help.",
        signup: "Create Account",
        login: "Login",
        name: "Full name",
        namePlaceholder: "Enter your name",
        mobile: "Mobile number",
        mobilePlaceholder: "10-digit mobile number",
        village: "Village",
        villagePlaceholder: "Enter your village",
        loginMobilePlaceholder: "Enter registered mobile number",
        loginButton: "Continue to Login",
        back: "← Back to language selection",
        footer: "Made for farmers ❤️",
        signupMessage: "Demo registration successful!",
        loginMessage: "Demo login successful!",
        invalid: "Please enter a valid 10-digit Indian mobile number.",
        dashboardWelcome: "Welcome, Farmer!",
        dashboardSubtitle: "Your farming assistant is ready.",
        location: "Karnataka, India",
        featuresTitle: "What do you need today?",
        assistant: "AI Assistant",
        assistantDesc: "Ask farming questions",
        crops: "Crop Recommendation",
        cropsDesc: "Find suitable crops",
        disease: "Disease Detection",
        diseaseDesc: "Check crop health",
        prices: "Daily Market Price",
        pricesDesc: "Check crop market rates",
        schemes: "Government Schemes",
        schemesDesc: "Explore farmer benefits",
        expert: "Expert Help",
        expertDesc: "Get farming guidance",
        logout: "Log Out",
        profile: "Farmer Profile",
        featureMessages: {
            assistant: "AI Assistant: Ask questions about farming. Voice support will be connected next.",
            crops: "Crop Recommendation: We will help you find suitable crops based on your location, season and farm details.",
            disease: "Disease Detection: Upload a crop photo to check for possible diseases. Image analysis will be connected next.",
            prices: "Daily Market Price: We will connect real agricultural market prices for available Karnataka markets.",
            schemes: "Government Schemes: Find verified agricultural schemes, eligibility details and official application links.",
            expert: "Expert Help: We will provide verified agricultural expert and department contact details."
        }
    },

    te: {
        welcome: "రైతుకు స్వాగతం!",
        choose: "కొనసాగించడానికి మీ భాషను ఎంచుకోండి",
        select: "దయచేసి మీ భాషను ఎంచుకోండి",
        selected: "ఎంచుకున్న భాష: ",
        continue: "కొనసాగించండి →",
        createTitle: "మీ ఖాతాను సృష్టించండి",
        loginTitle: "తిరిగి స్వాగతం!",
        subtitle: "మీ వ్యవసాయ సహాయకుడు మీకు సహాయం చేస్తాడు.",
        signup: "ఖాతాను సృష్టించండి",
        login: "లాగిన్",
        name: "పూర్తి పేరు",
        namePlaceholder: "మీ పేరు నమోదు చేయండి",
        mobile: "మొబైల్ నంబర్",
        mobilePlaceholder: "10 అంకెల మొబైల్ నంబర్",
        village: "గ్రామం",
        villagePlaceholder: "మీ గ్రామం పేరు నమోదు చేయండి",
        loginMobilePlaceholder: "నమోదు చేసిన మొబైల్ నంబర్",
        loginButton: "లాగిన్ కొనసాగించండి",
        back: "← భాష ఎంపికకు తిరిగి వెళ్లండి",
        footer: "రైతుల కోసం ప్రేమతో ❤️",
        signupMessage: "డెమో నమోదు విజయవంతమైంది!",
        loginMessage: "డెమో లాగిన్ విజయవంతమైంది!",
        invalid: "దయచేసి సరైన 10 అంకెల భారతీయ మొబైల్ నంబర్ నమోదు చేయండి.",
        dashboardWelcome: "రైతుకు స్వాగతం!",
        dashboardSubtitle: "మీ వ్యవసాయ సహాయకుడు సిద్ధంగా ఉన్నాడు.",
        location: "కర్ణాటక, భారతదేశం",
        featuresTitle: "ఈరోజు మీకు ఏ సహాయం కావాలి?",
        assistant: "AI సహాయకుడు",
        assistantDesc: "వ్యవసాయ ప్రశ్నలు అడగండి",
        crops: "పంట సిఫార్సు",
        cropsDesc: "అనుకూలమైన పంటలను తెలుసుకోండి",
        disease: "వ్యాధి గుర్తింపు",
        diseaseDesc: "పంట ఆరోగ్యాన్ని పరిశీలించండి",
        prices: "రోజువారీ మార్కెట్ ధర",
        pricesDesc: "పంట మార్కెట్ ధరలను చూడండి",
        schemes: "ప్రభుత్వ పథకాలు",
        schemesDesc: "రైతుల ప్రయోజనాలను తెలుసుకోండి",
        expert: "నిపుణుల సహాయం",
        expertDesc: "వ్యవసాయ సలహా పొందండి",
        logout: "లాగ్అవుట్",
        profile: "రైతు ప్రొఫైల్",
        featureMessages: {
            assistant: "AI సహాయకుడు: వ్యవసాయం గురించి ప్రశ్నలు అడగవచ్చు. వాయిస్ సదుపాయాన్ని తరువాత కలుపుతాము.",
            crops: "పంట సిఫార్సు: మీ ప్రాంతం, కాలం, పొలం వివరాల ఆధారంగా పంటలను సూచిస్తాము.",
            disease: "వ్యాధి గుర్తింపు: పంట ఫోటోను అప్‌లోడ్ చేసి సంభావ్య వ్యాధులను పరిశీలించవచ్చు.",
            prices: "మార్కెట్ ధరలు: కర్ణాటక మార్కెట్ల వాస్తవ ధరల సమాచారాన్ని తరువాత అనుసంధానిస్తాము.",
            schemes: "ప్రభుత్వ పథకాలు: ధృవీకరించిన పథకాలు, అర్హతలు, అధికారిక దరఖాస్తు లింకులు అందిస్తాము.",
            expert: "నిపుణుల సహాయం: ధృవీకరించిన వ్యవసాయ నిపుణుల సంప్రదింపు వివరాలు అందిస్తాము."
        }
    },

    kn: {
        welcome: "ರೈತರಿಗೆ ಸ್ವಾಗತ!",
        choose: "ಮುಂದುವರಿಯಲು ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        select: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        selected: "ಆಯ್ಕೆ ಮಾಡಿದ ಭಾಷೆ: ",
        continue: "ಮುಂದುವರಿಸಿ →",
        createTitle: "ನಿಮ್ಮ ಖಾತೆಯನ್ನು ರಚಿಸಿ",
        loginTitle: "ಮತ್ತೆ ಸ್ವಾಗತ!",
        subtitle: "ನಿಮ್ಮ ಕೃಷಿ ಸಹಾಯಕ ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತಾನೆ.",
        signup: "ಖಾತೆ ರಚಿಸಿ",
        login: "ಲಾಗಿನ್",
        name: "ಪೂರ್ಣ ಹೆಸರು",
        namePlaceholder: "ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
        mobile: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
        mobilePlaceholder: "10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
        village: "ಗ್ರಾಮ",
        villagePlaceholder: "ನಿಮ್ಮ ಗ್ರಾಮದ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
        loginMobilePlaceholder: "ನೋಂದಾಯಿತ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ",
        loginButton: "ಲಾಗಿನ್ ಮುಂದುವರಿಸಿ",
        back: "← ಭಾಷೆ ಆಯ್ಕೆಗೆ ಹಿಂತಿರುಗಿ",
        footer: "ರೈತರಿಗಾಗಿ ❤️",
        signupMessage: "ಡೆಮೊ ನೋಂದಣಿ ಯಶಸ್ವಿಯಾಗಿದೆ!",
        loginMessage: "ಡೆಮೊ ಲಾಗಿನ್ ಯಶಸ್ವಿಯಾಗಿದೆ!",
        invalid: "ದಯವಿಟ್ಟು ಸರಿಯಾದ 10 ಅಂಕಿಯ ಭಾರತೀಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ.",
        dashboardWelcome: "ರೈತರಿಗೆ ಸ್ವಾಗತ!",
        dashboardSubtitle: "ನಿಮ್ಮ ಕೃಷಿ ಸಹಾಯಕ ಸಿದ್ಧವಾಗಿದೆ.",
        location: "ಕರ್ನಾಟಕ, ಭಾರತ",
        featuresTitle: "ಇಂದು ನಿಮಗೆ ಯಾವ ಸಹಾಯ ಬೇಕು?",
        assistant: "AI ಸಹಾಯಕ",
        assistantDesc: "ಕೃಷಿ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ",
        crops: "ಬೆಳೆ ಶಿಫಾರಸು",
        cropsDesc: "ಸೂಕ್ತ ಬೆಳೆಗಳನ್ನು ತಿಳಿಯಿರಿ",
        disease: "ರೋಗ ಪತ್ತೆ",
        diseaseDesc: "ಬೆಳೆಯ ಆರೋಗ್ಯ ಪರಿಶೀಲಿಸಿ",
        prices: "ದೈನಂದಿನ ಮಾರುಕಟ್ಟೆ ಬೆಲೆ",
        pricesDesc: "ಬೆಳೆ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ನೋಡಿ",
        schemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
        schemesDesc: "ರೈತರ ಪ್ರಯೋಜನಗಳನ್ನು ತಿಳಿಯಿರಿ",
        expert: "ತಜ್ಞರ ಸಹಾಯ",
        expertDesc: "ಕೃಷಿ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ",
        logout: "ಲಾಗ್ ಔಟ್",
        profile: "ರೈತರ ಪ್ರೊಫೈಲ್",
        featureMessages: {
            assistant: "AI ಸಹಾಯಕ: ಕೃಷಿ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಬಹುದು. ಧ್ವನಿ ಸೌಲಭ್ಯವನ್ನು ನಂತರ ಸೇರಿಸುತ್ತೇವೆ.",
            crops: "ಬೆಳೆ ಶಿಫಾರಸು: ನಿಮ್ಮ ಸ್ಥಳ, ಋತು ಮತ್ತು ಜಮೀನಿನ ವಿವರಗಳ ಆಧಾರದ ಮೇಲೆ ಬೆಳೆಗಳನ್ನು ಸೂಚಿಸುತ್ತೇವೆ.",
            disease: "ರೋಗ ಪತ್ತೆ: ಬೆಳೆಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ ಸಂಭವನೀಯ ರೋಗಗಳನ್ನು ಪರಿಶೀಲಿಸಬಹುದು.",
            prices: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ: ಕರ್ನಾಟಕದ ಲಭ್ಯ ಮಾರುಕಟ್ಟೆಗಳ ನೈಜ ಬೆಲೆಗಳನ್ನು ನಂತರ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
            schemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು: ಪರಿಶೀಲಿಸಿದ ಯೋಜನೆಗಳು, ಅರ್ಹತೆ ಮತ್ತು ಅಧಿಕೃತ ಅರ್ಜಿ ಲಿಂಕ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ.",
            expert: "ತಜ್ಞರ ಸಹಾಯ: ಪರಿಶೀಲಿಸಿದ ಕೃಷಿ ತಜ್ಞರ ಸಂಪರ್ಕ ವಿವರಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ."
        }
    },

    hi: {
        welcome: "किसान का स्वागत है!",
        choose: "आगे बढ़ने के लिए अपनी भाषा चुनें",
        select: "कृपया अपनी भाषा चुनें",
        selected: "चुनी गई भाषा: ",
        continue: "आगे बढ़ें →",
        createTitle: "अपना खाता बनाएं",
        loginTitle: "वापस स्वागत है!",
        subtitle: "आपका कृषि सहायक आपकी मदद के लिए है।",
        signup: "खाता बनाएं",
        login: "लॉगिन",
        name: "पूरा नाम",
        namePlaceholder: "अपना नाम लिखें",
        mobile: "मोबाइल नंबर",
        mobilePlaceholder: "10 अंकों का मोबाइल नंबर",
        village: "गाँव",
        villagePlaceholder: "अपने गाँव का नाम लिखें",
        loginMobilePlaceholder: "पंजीकृत मोबाइल नंबर लिखें",
        loginButton: "लॉगिन जारी रखें",
        back: "← भाषा चयन पर वापस जाएँ",
        footer: "किसानों के लिए ❤️",
        signupMessage: "डेमो पंजीकरण सफल हुआ!",
        loginMessage: "डेमो लॉगिन सफल हुआ!",
        invalid: "कृपया सही 10 अंकों का भारतीय मोबाइल नंबर दर्ज करें।",
        dashboardWelcome: "किसान का स्वागत है!",
        dashboardSubtitle: "आपका कृषि सहायक तैयार है।",
        location: "कर्नाटक, भारत",
        featuresTitle: "आज आपको किस सहायता की आवश्यकता है?",
        assistant: "AI सहायक",
        assistantDesc: "खेती के सवाल पूछें",
        crops: "फसल की सिफारिश",
        cropsDesc: "उपयुक्त फसलें जानें",
        disease: "रोग पहचान",
        diseaseDesc: "फसल का स्वास्थ्य जाँचें",
        prices: "दैनिक मंडी भाव",
        pricesDesc: "फसल के बाजार भाव देखें",
        schemes: "सरकारी योजनाएँ",
        schemesDesc: "किसानों के लाभ जानें",
        expert: "विशेषज्ञ सहायता",
        expertDesc: "खेती की सलाह पाएँ",
        logout: "लॉग आउट",
        profile: "किसान प्रोफ़ाइल",
        featureMessages: {
            assistant: "AI सहायक: खेती के सवाल पूछें। आवाज़ की सुविधा बाद में जोड़ी जाएगी।",
            crops: "फसल की सिफारिश: स्थान, मौसम और खेत की जानकारी के आधार पर फसलें सुझाई जाएँगी।",
            disease: "रोग पहचान: संभावित रोगों की जाँच के लिए फसल की तस्वीर अपलोड करें।",
            prices: "मंडी भाव: कर्नाटक के उपलब्ध बाजारों के वास्तविक भाव बाद में जोड़े जाएँगे।",
            schemes: "सरकारी योजनाएँ: सत्यापित योजनाएँ, पात्रता और आधिकारिक आवेदन लिंक उपलब्ध होंगे।",
            expert: "विशेषज्ञ सहायता: सत्यापित कृषि विशेषज्ञों के संपर्क विवरण उपलब्ध होंगे।"
        }
    },

    ta: {
        welcome: "விவசாயிக்கு வரவேற்கிறோம்!",
        choose: "தொடர உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
        select: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
        selected: "தேர்ந்தெடுத்த மொழி: ",
        continue: "தொடரவும் →",
        createTitle: "உங்கள் கணக்கை உருவாக்கவும்",
        loginTitle: "மீண்டும் வரவேற்கிறோம்!",
        subtitle: "உங்கள் விவசாய உதவியாளர் உங்களுக்கு உதவுவார்.",
        signup: "கணக்கை உருவாக்கவும்",
        login: "உள்நுழைவு",
        name: "முழுப் பெயர்",
        namePlaceholder: "உங்கள் பெயரை உள்ளிடவும்",
        mobile: "கைபேசி எண்",
        mobilePlaceholder: "10 இலக்க கைபேசி எண்",
        village: "கிராமம்",
        villagePlaceholder: "உங்கள் கிராமத்தின் பெயரை உள்ளிடவும்",
        loginMobilePlaceholder: "பதிவு செய்த கைபேசி எண்",
        loginButton: "உள்நுழைய தொடரவும்",
        back: "← மொழித் தேர்வுக்குத் திரும்பவும்",
        footer: "விவசாயிகளுக்காக ❤️",
        signupMessage: "டெமோ பதிவு வெற்றிகரமாக முடிந்தது!",
        loginMessage: "டெமோ உள்நுழைவு வெற்றிகரமாக முடிந்தது!",
        invalid: "சரியான 10 இலக்க இந்திய கைபேசி எண்ணை உள்ளிடவும்.",
        dashboardWelcome: "விவசாயிக்கு வரவேற்கிறோம்!",
        dashboardSubtitle: "உங்கள் விவசாய உதவியாளர் தயாராக உள்ளார்.",
        location: "கர்நாடகா, இந்தியா",
        featuresTitle: "இன்று உங்களுக்கு என்ன உதவி தேவை?",
        assistant: "AI உதவியாளர்",
        assistantDesc: "விவசாயக் கேள்விகளைக் கேளுங்கள்",
        crops: "பயிர் பரிந்துரை",
        cropsDesc: "பொருத்தமான பயிர்களைக் கண்டறியவும்",
        disease: "நோய் கண்டறிதல்",
        diseaseDesc: "பயிரின் ஆரோக்கியத்தைச் சரிபார்க்கவும்",
        prices: "தினசரி சந்தை விலை",
        pricesDesc: "பயிர் சந்தை விலைகளைப் பார்க்கவும்",
        schemes: "அரசுத் திட்டங்கள்",
        schemesDesc: "விவசாயிகளின் நன்மைகளை அறியவும்",
        expert: "நிபுணர் உதவி",
        expertDesc: "விவசாய வழிகாட்டுதலைப் பெறவும்",
        logout: "வெளியேறு",
        profile: "விவசாயி சுயவிவரம்",
        featureMessages: {
            assistant: "AI உதவியாளர்: விவசாயக் கேள்விகளைக் கேட்கலாம். குரல் வசதி பின்னர் இணைக்கப்படும்.",
            crops: "பயிர் பரிந்துரை: உங்கள் இடம், பருவம் மற்றும் நில விவரங்களின் அடிப்படையில் பயிர்களைப் பரிந்துரைப்போம்.",
            disease: "நோய் கண்டறிதல்: சாத்தியமான நோய்களைச் சரிபார்க்க பயிர் புகைப்படத்தைப் பதிவேற்றவும்.",
            prices: "சந்தை விலைகள்: கர்நாடகாவின் கிடைக்கும் சந்தைகளின் உண்மையான விலைகள் பின்னர் இணைக்கப்படும்.",
            schemes: "அரசுத் திட்டங்கள்: சரிபார்க்கப்பட்ட திட்டங்கள், தகுதி மற்றும் அதிகாரப்பூர்வ விண்ணப்ப இணைப்புகள் வழங்கப்படும்.",
            expert: "நிபுணர் உதவி: சரிபார்க்கப்பட்ட வேளாண் நிபுணர்களின் தொடர்பு விவரங்கள் வழங்கப்படும்."
        }
    },

    ml: {
        welcome: "കർഷകന് സ്വാഗതം!",
        choose: "തുടരാൻ നിങ്ങളുടെ ഭാഷ തിരഞ്ഞെടുക്കുക",
        select: "ദയവായി ഭാഷ തിരഞ്ഞെടുക്കുക",
        selected: "തിരഞ്ഞെടുത്ത ഭാഷ: ",
        continue: "തുടരുക →",
        createTitle: "നിങ്ങളുടെ അക്കൗണ്ട് സൃഷ്ടിക്കുക",
        loginTitle: "വീണ്ടും സ്വാഗതം!",
        subtitle: "നിങ്ങളുടെ കൃഷി സഹായി നിങ്ങളെ സഹായിക്കും.",
        signup: "അക്കൗണ്ട് സൃഷ്ടിക്കുക",
        login: "ലോഗിൻ",
        name: "പൂർണ്ണ പേര്",
        namePlaceholder: "നിങ്ങളുടെ പേര് നൽകുക",
        mobile: "മൊബൈൽ നമ്പർ",
        mobilePlaceholder: "10 അക്ക മൊബൈൽ നമ്പർ",
        village: "ഗ്രാമം",
        villagePlaceholder: "നിങ്ങളുടെ ഗ്രാമത്തിന്റെ പേര് നൽകുക",
        loginMobilePlaceholder: "രജിസ്റ്റർ ചെയ്ത മൊബൈൽ നമ്പർ നൽകുക",
        loginButton: "ലോഗിൻ തുടരുക",
        back: "← ഭാഷ തിരഞ്ഞെടുക്കാൻ മടങ്ങുക",
        footer: "കർഷകർക്കായി ❤️",
        signupMessage: "ഡെമോ രജിസ്ട്രേഷൻ വിജയകരമായി പൂർത്തിയായി!",
        loginMessage: "ഡെമോ ലോഗിൻ വിജയകരമായി പൂർത്തിയായി!",
        invalid: "ശരിയായ 10 അക്ക ഇന്ത്യൻ മൊബൈൽ നമ്പർ നൽകുക.",
        dashboardWelcome: "കർഷകന് സ്വാഗതം!",
        dashboardSubtitle: "നിങ്ങളുടെ കൃഷി സഹായി തയ്യാറാണ്.",
        location: "കർണാടക, ഇന്ത്യ",
        featuresTitle: "ഇന്ന് നിങ്ങൾക്ക് എന്ത് സഹായമാണ് വേണ്ടത്?",
        assistant: "AI സഹായി",
        assistantDesc: "കൃഷി ചോദ്യങ്ങൾ ചോദിക്കുക",
        crops: "വിള ശുപാർശ",
        cropsDesc: "അനുയോജ്യമായ വിളകൾ കണ്ടെത്തുക",
        disease: "രോഗ നിർണയം",
        diseaseDesc: "വിളയുടെ ആരോഗ്യം പരിശോധിക്കുക",
        prices: "ദൈനംദിന വിപണി വില",
        pricesDesc: "വിളകളുടെ വിപണി വില പരിശോധിക്കുക",
        schemes: "സർക്കാർ പദ്ധതികൾ",
        schemesDesc: "കർഷക ആനുകൂല്യങ്ങൾ അറിയുക",
        expert: "വിദഗ്ധ സഹായം",
        expertDesc: "കൃഷി മാർഗനിർദേശം നേടുക",
        logout: "ലോഗ് ഔട്ട്",
        profile: "കർഷക പ്രൊഫൈൽ",
        featureMessages: {
            assistant: "AI സഹായി: കൃഷിയെക്കുറിച്ചുള്ള ചോദ്യങ്ങൾ ചോദിക്കാം. ശബ്ദ സൗകര്യം പിന്നീട് ചേർക്കും.",
            crops: "വിള ശുപാർശ: നിങ്ങളുടെ സ്ഥലം, കാലം, കൃഷിയിട വിവരങ്ങൾ എന്നിവയുടെ അടിസ്ഥാനത്തിൽ വിളകൾ നിർദേശിക്കും.",
            disease: "രോഗ നിർണയം: സാധ്യതയുള്ള രോഗങ്ങൾ പരിശോധിക്കാൻ വിളയുടെ ചിത്രം അപ്‌ലോഡ് ചെയ്യുക.",
            prices: "വിപണി വില: കർണാടകയിലെ ലഭ്യമായ വിപണികളുടെ യഥാർത്ഥ വിലകൾ പിന്നീട് ബന്ധിപ്പിക്കും.",
            schemes: "സർക്കാർ പദ്ധതികൾ: പരിശോധിച്ച പദ്ധതികൾ, യോഗ്യത, ഔദ്യോഗിക അപേക്ഷാ ലിങ്കുകൾ എന്നിവ നൽകും.",
            expert: "വിദഗ്ധ സഹായം: സ്ഥിരീകരിച്ച കാർഷിക വിദഗ്ധരുടെ ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ നൽകും."
        }
    }
};

// ========================================
// HELPER FUNCTIONS
// ========================================

function getText() {
    return translations[selectedLanguage] || translations.en;
}

function validIndianMobile(value) {
    return /^[6-9][0-9]{9}$/.test(value);
}

// ========================================
// APPLY THE SELECTED LANGUAGE
// ========================================

function applyLanguage() {
    const t = getText();

    // Language page
    document.querySelector("#languagePage h1").textContent = t.welcome;
    document.querySelector("#languagePage .subtitle").textContent = t.choose;
    continueBtn.textContent = t.continue;

    // Account page
    document.querySelector("#accountPage .subtitle").textContent = t.subtitle;
    signupTab.textContent = t.signup;
    loginTab.textContent = t.login;

    document.querySelector('label[for="farmerName"]').textContent = t.name;
    document.getElementById("farmerName").placeholder = t.namePlaceholder;

    document.querySelector('label[for="mobile"]').textContent = t.mobile;
    document.getElementById("mobile").placeholder = t.mobilePlaceholder;

    document.querySelector('label[for="village"]').textContent = t.village;
    document.getElementById("village").placeholder = t.villagePlaceholder;

    document.querySelector('label[for="loginMobile"]').textContent = t.mobile;
    document.getElementById("loginMobile").placeholder =
        t.loginMobilePlaceholder;

    loginForm.querySelector("button").textContent = t.loginButton;
    backBtn.textContent = t.back;

    // Dashboard
    document.getElementById("dashboardTitle").textContent =
        t.dashboardWelcome;

    document.getElementById("dashboardSubtitle").textContent =
        t.dashboardSubtitle;

    const farmerLocationElement = document.getElementById("farmerLocation");
if (farmerLocationElement) {
    farmerLocationElement.textContent = t.location;
}
        document.getElementById("featuresTitle").textContent = t.featuresTitle;
    logoutBtn.textContent = t.logout;
    profileBtn.setAttribute("aria-label", t.profile);
    profileBtn.title = t.profile;

    // Translate each dashboard feature
    document.querySelectorAll(".feature-card").forEach(function (card) {
        const feature = card.dataset.feature;

        const title = card.querySelector(".feature-title");
        const description = card.querySelector(".feature-description");

        if (title) {
            title.textContent = t[feature];
        }

        if (description) {
            description.textContent = t[feature + "Desc"];
        }
    });

    const mainFooter = document.querySelector("body > footer");
if (mainFooter) {
    mainFooter.textContent = t.footer;
}
    if (!selectedLanguage) {
        message.textContent = t.select;
    }

    accountHeading.textContent =
        loginForm.hidden ? t.createTitle : t.loginTitle;
}

// ========================================
// LANGUAGE SELECTION
// ========================================

languageCards.forEach(function (card) {
    card.addEventListener("click", function () {
        languageCards.forEach(function (item) {
            item.classList.remove("selected");
        });

        card.classList.add("selected");

        selectedLanguage = card.dataset.lang;
        localStorage.setItem("farmerLanguage", selectedLanguage);

        continueBtn.disabled = false;

        message.textContent =
            getText().selected +
            card.querySelector(".language-english").textContent;

        applyLanguage();
        updateVoicePanelLanguage();
    });
});

// Restore selected language after refresh
if (translations[selectedLanguage]) {
    const savedCard = document.querySelector(
        `.language-card[data-lang="${selectedLanguage}"]`
    );

    if (savedCard) {
        savedCard.classList.add("selected");
        continueBtn.disabled = false;

        message.textContent =
            getText().selected +
            savedCard.querySelector(".language-english").textContent;
    }
}

// ========================================
// NAVIGATION BETWEEN PAGES
// ========================================

function showSignup() {
    signupForm.hidden = false;
    loginForm.hidden = true;

    signupTab.classList.add("active-tab");
    loginTab.classList.remove("active-tab");

    accountHeading.textContent = getText().createTitle;
    accountMessage.textContent = "";
}

function showLogin() {
    signupForm.hidden = true;
    loginForm.hidden = false;

    loginTab.classList.add("active-tab");
    signupTab.classList.remove("active-tab");

    accountHeading.textContent = getText().loginTitle;
    accountMessage.textContent = "";
}

function showDashboard() {
    languagePage.hidden = true;
    accountPage.hidden = true;
    dashboardPage.hidden = false;

    featureMessage.hidden = true;
    featureMessage.textContent = "";

    applyLanguage();
    window.scrollTo(0, 0);
}

function showAccountLogin() {
    dashboardPage.hidden = true;
    languagePage.hidden = true;
    accountPage.hidden = false;

    showLogin();
    applyLanguage();
    window.scrollTo(0, 0);
}

continueBtn.addEventListener("click", function () {
    if (!selectedLanguage) {
        message.textContent = getText().select;
        return;
    }

    languagePage.hidden = true;
    accountPage.hidden = false;

    showSignup();
    applyLanguage();
    window.scrollTo(0, 0);
});

signupTab.addEventListener("click", showSignup);
loginTab.addEventListener("click", showLogin);

backBtn.addEventListener("click", function () {
    accountPage.hidden = true;
    languagePage.hidden = false;

    applyLanguage();
    window.scrollTo(0, 0);
});

// ========================================
// DEMO ACCOUNT FORMS
// ========================================

// Demo only: this does not save an account to the backend.
// Farmer registration connected to backend
signupForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const t = getText();
    const farmerName = document.getElementById("farmerName").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const village = document.getElementById("village").value.trim();

    if (!validIndianMobile(mobile)) {
        accountMessage.textContent = t.invalid;
        return;
    }

    if (!farmerName || !village) {
        accountMessage.textContent = "Please enter your name and village.";
        return;
    }

    accountMessage.textContent = "Registering farmer...";

    try {
        const response = await fetch(
            "http://localhost:8082/api/farmers/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    fullName: farmerName,
                    mobileNumber: mobile,
                    village: village,
                    state: "Karnataka",
                    preferredLanguage: selectedLanguage
                })
            }
        );

        if (response.status === 409) {
            accountMessage.textContent =
                "This mobile number is already registered. Please log in.";
            return;
        }

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Registration failed.");
        }

        const farmer = await response.json();

        localStorage.setItem("demoFarmerName", farmer.fullName);
        localStorage.setItem("demoFarmerVillage", farmer.village);
        localStorage.setItem("demoFarmerMobile", farmer.mobileNumber);

        accountMessage.textContent =
    "Account created successfully! Please log in with your mobile number.";
showLogin();

    } catch (error) {
        console.error("Registration error:", error);
        accountMessage.textContent =
            "Could not connect to the backend. Check that the backend is running.";
    }
});

// Demo only: this does not verify a registered account.
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const t = getText();
    const mobile = document.getElementById("loginMobile").value.trim();

    if (!validIndianMobile(mobile)) {
        accountMessage.textContent = t.invalid;
        return;
    }

    // Demo mode: accept a valid-format number to preview the dashboard.
    localStorage.setItem("demoFarmerMobile", mobile);
    showDashboard();
});

// ========================================
// DASHBOARD FEATURE CARDS
// ========================================

document.querySelectorAll(".feature-card").forEach(function (card) {
    card.addEventListener("click", function () {
        const feature = card.dataset.feature;
        const t = getText();

        featureMessage.textContent = t.featureMessages[feature];
        featureMessage.hidden = false;

        featureMessage.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });
    });
});

// Profile button
profileBtn.addEventListener("click", function () {
    const t = getText();
    const farmerName = localStorage.getItem("demoFarmerName") || "";
    const village = localStorage.getItem("demoFarmerVillage") || "";

    if (selectedLanguage === "te") {
        featureMessage.textContent =
            t.profile + ": " + (farmerName || "రైతు") +
            (village ? " | గ్రామం: " + village : "");
    } else if (selectedLanguage === "kn") {
        featureMessage.textContent =
            t.profile + ": " + (farmerName || "ರೈತರು") +
            (village ? " | ಗ್ರಾಮ: " + village : "");
    } else {
        featureMessage.textContent =
            t.profile + ": " + (farmerName || "Farmer") +
            (village ? " | Village: " + village : "");
    }

    featureMessage.hidden = false;
    featureMessage.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});

// ========================================
// LOGOUT
// ========================================

logoutBtn.addEventListener("click", function () {
    // Remove demo session information, but keep language preference
    localStorage.removeItem("demoFarmerName");
    localStorage.removeItem("demoFarmerVillage");
    localStorage.removeItem("demoFarmerMobile");

    featureMessage.hidden = true;
    featureMessage.textContent = "";

    showAccountLogin();
});

// ========================================
// INITIAL PAGE SETUP
// ========================================

applyLanguage();

languagePage.hidden = false;
accountPage.hidden = true;
dashboardPage.hidden = true;

/* SmartAgriTech voice guidance */
const speakButton = document.getElementById("speakInstructionsBtn");
console.log("Listen button found:", speakButton);
const stopButton = document.getElementById("stopSpeechBtn");
const voiceMessage = document.getElementById("voiceMessage");

const farmingInstructions = {
    en: "Welcome to SmartAgriTech. Please choose the feature you need. Select AI Assistant to ask farming questions. Select Crop Recommendation to find suitable crops. Select Disease Detection to check your plants. Select Market Prices to learn about crop prices. Select Government Schemes to learn about government support. Select Expert Help to get help from an agriculture expert.",
    kn: "ಸ್ಮಾರ್ಟ್ ಅಗ್ರಿಟೆಕ್‌ಗೆ ಸ್ವಾಗತ. ನಿಮಗೆ ಬೇಕಾದ ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ. ಕೃಷಿ ಪ್ರಶ್ನೆಗಳಿಗೆ ಎಐ ಸಹಾಯಕವನ್ನು ಆಯ್ಕೆಮಾಡಿ. ಸೂಕ್ತ ಬೆಳೆಗಳನ್ನು ತಿಳಿಯಲು ಬೆಳೆ ಶಿಫಾರಸನ್ನು ಆಯ್ಕೆಮಾಡಿ. ಸಸ್ಯಗಳ ಆರೋಗ್ಯ ಪರಿಶೀಲಿಸಲು ರೋಗ ಪತ್ತೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ. ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ತಿಳಿಯಲು ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ. ಸರ್ಕಾರಿ ಸಹಾಯಕ್ಕಾಗಿ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ. ಕೃಷಿ ತಜ್ಞರ ಸಹಾಯಕ್ಕಾಗಿ ತಜ್ಞರ ಸಹಾಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
    te: "స్మార్ట్ అగ్రిటెక్‌కు స్వాగతం. మీకు అవసరమైన ఎంపికను ఎంచుకోండి. వ్యవసాయ ప్రశ్నల కోసం ఏఐ అసిస్టెంట్‌ను ఎంచుకోండి. సరైన పంటలను తెలుసుకోవడానికి పంట సిఫార్సును ఎంచుకోండి. మొక్కల ఆరోగ్యాన్ని తనిఖీ చేయడానికి వ్యాధి గుర్తింపును ఎంచుకోండి. పంట ధరల కోసం మార్కెట్ ధరలను ఎంచుకోండి. ప్రభుత్వ సహాయం కోసం ప్రభుత్వ పథకాలను ఎంచుకోండి. వ్యవసాయ నిపుణుల సహాయం కోసం నిపుణుల సహాయాన్ని ఎంచుకోండి.",
    hi: "स्मार्ट एग्रीटेक में आपका स्वागत है। कृपया अपनी ज़रूरत का विकल्प चुनें। खेती से जुड़े सवालों के लिए एआई सहायक चुनें। सही फसल जानने के लिए फसल सुझाव चुनें। पौधों की बीमारी जाँचने के लिए रोग पहचान चुनें। फसलों के भाव जानने के लिए बाज़ार भाव चुनें। सरकारी सहायता के लिए सरकारी योजनाएँ चुनें। कृषि विशेषज्ञ की मदद के लिए विशेषज्ञ सहायता चुनें।",
    ta: "ஸ்மார்ட் அக்ரிடெக்கிற்கு வரவேற்கிறோம். உங்களுக்குத் தேவையான விருப்பத்தைத் தேர்ந்தெடுக்கவும். விவசாயக் கேள்விகளுக்கு ஏஐ உதவியாளரைத் தேர்ந்தெடுக்கவும். ஏற்ற பயிர்களை அறிய பயிர் பரிந்துரையைத் தேர்ந்தெடுக்கவும். தாவர நோய்களைச் சரிபார்க்க நோய் கண்டறிதலைத் தேர்ந்தெடுக்கவும். பயிர் விலைகளை அறிய சந்தை விலைகளைத் தேர்ந்தெடுக்கவும். அரசாங்க உதவிக்கு அரசு திட்டங்களைத் தேர்ந்தெடுக்கவும். வேளாண் நிபுணரின் உதவிக்கு நிபுணர் உதவியைத் தேர்ந்தெடுக்கவும்.",
    ml: "സ്മാർട്ട് അഗ്രിടെക്കിലേക്ക് സ്വാഗതം. നിങ്ങൾക്ക് ആവശ്യമുള്ള ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക. കൃഷി ചോദ്യങ്ങൾക്ക് എഐ അസിസ്റ്റന്റ് തിരഞ്ഞെടുക്കുക. അനുയോജ്യമായ വിളകൾ അറിയാൻ വിള ശുപാർശ തിരഞ്ഞെടുക്കുക. ചെടികളുടെ രോഗങ്ങൾ പരിശോധിക്കാൻ രോഗനിർണയം തിരഞ്ഞെടുക്കുക. വിളവിലകൾ അറിയാൻ വിപണി വിലകൾ തിരഞ്ഞെടുക്കുക. സർക്കാർ സഹായത്തിന് സർക്കാർ പദ്ധതികൾ തിരഞ്ഞെടുക്കുക. കാർഷിക വിദഗ്ധന്റെ സഹായത്തിന് വിദഗ്ധ സഹായം തിരഞ്ഞെടുക്കുക."
};



/* Voice panel translations */
const voicePanelTranslations = {
    en: {
        heading: "Listen to instructions",
        message: "Listen to the instructions to learn which feature to select.",
        listen: "🔊 Listen",
        stop: "⏹ Stop"
    },
    kn: {
        heading: "ಸೂಚನೆಗಳನ್ನು ಆಲಿಸಿ",
        message: "ಯಾವ ಆಯ್ಕೆಯನ್ನು ಬಳಸಬೇಕು ಎಂದು ತಿಳಿಯಲು ಸೂಚನೆಗಳನ್ನು ಆಲಿಸಿ.",
        listen: "🔊 ಆಲಿಸಿ",
        stop: "⏹ ನಿಲ್ಲಿಸಿ"
    },
    te: {
        heading: "సూచనలను వినండి",
        message: "ఏ ఎంపికను ఎంచుకోవాలో తెలుసుకోవడానికి సూచనలను వినండి.",
        listen: "🔊 వినండి",
        stop: "⏹ ఆపండి"
    },
    hi: {
        heading: "निर्देश सुनें",
        message: "कौन-सा विकल्प चुनना है, यह जानने के लिए निर्देश सुनें।",
        listen: "🔊 सुनें",
        stop: "⏹ रोकें"
    },
    ta: {
        heading: "வழிமுறைகளைக் கேளுங்கள்",
        message: "எந்த விருப்பத்தைத் தேர்ந்தெடுக்க வேண்டும் என்பதை அறிய வழிமுறைகளைக் கேளுங்கள்.",
        listen: "🔊 கேளுங்கள்",
        stop: "⏹ நிறுத்து"
    },
    ml: {
        heading: "നിർദ്ദേശങ്ങൾ കേൾക്കുക",
        message: "ഏത് ഓപ്ഷൻ തിരഞ്ഞെടുക്കണമെന്ന് അറിയാൻ നിർദ്ദേശങ്ങൾ കേൾക്കുക.",
        listen: "🔊 കേൾക്കുക",
        stop: "⏹ നിർത്തുക"
    }
};


function updateVoicePanelLanguage() {
    const lang = localStorage.getItem("farmerLanguage") || "en";

    const text = voicePanelTranslations[lang] ||
                 voicePanelTranslations.en;

    const heading = document.getElementById("voiceHeading");
    const message = document.getElementById("voiceMessage");
    const listen = document.getElementById("speakInstructionsBtn");
    const stop = document.getElementById("stopSpeechBtn");

    if (heading) heading.textContent = text.heading;
    if (message) message.textContent = text.message;
    if (listen) listen.textContent = text.listen;
    if (stop) stop.textContent = text.stop;
}

updateVoicePanelLanguage();

function getSelectedVoiceLanguage() {
    return localStorage.getItem("farmerLanguage") || "en";
}

if (speakButton && stopButton && voiceMessage) {
    speakButton.addEventListener("click", function () {
        if (!("speechSynthesis" in window)) {
            voiceMessage.textContent =
                "Speech is not supported by this browser. Please try Chrome or Edge.";
            return;
        }

        window.speechSynthesis.cancel();

        const lang = getSelectedVoiceLanguage();
        const utterance = new SpeechSynthesisUtterance(
            farmingInstructions[lang] || farmingInstructions.en
        );

        const languageCodes = {
            en: "en-IN",
            kn: "kn-IN",
            te: "te-IN",
            hi: "hi-IN",
            ta: "ta-IN",
            ml: "ml-IN"
        };

        utterance.lang = languageCodes[lang] || "en-IN";
        utterance.rate = 0.75;
        utterance.pitch = 1;
        utterance.volume = 1;

        const voices = window.speechSynthesis.getVoices();
        const matchingVoice = voices.find(voice =>
            voice.lang.toLowerCase() === utterance.lang.toLowerCase()
        );

        if (matchingVoice) {
            utterance.voice = matchingVoice;
        }

        utterance.onstart = function () {
            voiceMessage.textContent = "Speaking slowly. Please listen...";
        };

        utterance.onend = function () {
            voiceMessage.textContent =
                "Instructions finished. Choose the feature you need.";
        };

        utterance.onerror = function (event) {
            voiceMessage.textContent =
                "Voice could not start (" + event.error +
                "). Check your device's speech and language settings.";
        };

        window.speechSynthesis.speak(utterance);
    });

    stopButton.addEventListener("click", function () {
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }

        voiceMessage.textContent = "Voice guidance stopped.";
    });
}

/* SmartAgriTech AI Assistant - separate page */

const aiAssistantCard = document.querySelector(
    '.feature-card[data-feature="assistant"]'
);

const aiAssistantPanel = document.getElementById("aiAssistantPanel");
const closeAiAssistantButton = document.getElementById(
    "closeAiAssistantButton"
);


if (aiAssistantCard && aiAssistantPanel) {
    aiAssistantCard.addEventListener("click", function () {
        dashboardPage.hidden = true;

        aiAssistantPanel.hidden = false;
        aiAssistantPanel.classList.add("ai-full-page");

        const questionInput = document.getElementById("farmerQuestion");
        if (questionInput) {
            questionInput.value = "";
        }

        const oldResponse = document.getElementById("aiAssistantResponse");
        if (oldResponse) {
            oldResponse.hidden = true;
        }

        updateAiAssistantLanguage();
        window.scrollTo(0, 0);
    });
}


if (closeAiAssistantButton && aiAssistantPanel) {
    closeAiAssistantButton.addEventListener("click", function () {
        aiAssistantPanel.hidden = true;
        aiAssistantPanel.classList.remove("ai-full-page");
        dashboardPage.hidden = false;

        window.scrollTo(0, 0);
    });
}

/* AI Assistant language translations */
const aiAssistantTranslations = {
    en: {
        title: "🌱 AI Farming Assistant",
        description: "Ask your farming questions in your own language.",
        label: "Your farming question",
        placeholder: "Example: Why are my plant leaves turning yellow?",
        ask: "Ask Question",
        speak: "🎤 Speak Question",
        back: "← Back to Dashboard"
    },
    kn: {
        title: "🌱 AI ಕೃಷಿ ಸಹಾಯಕ",
        description: "ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಕೃಷಿ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ.",
        label: "ನಿಮ್ಮ ಕೃಷಿ ಪ್ರಶ್ನೆ",
        placeholder: "ಉದಾಹರಣೆ: ನನ್ನ ಸಸ್ಯಗಳ ಎಲೆಗಳು ಏಕೆ ಹಳದಿಯಾಗುತ್ತಿವೆ?",
        ask: "ಪ್ರಶ್ನೆ ಕೇಳಿ",
        speak: "🎤 ಪ್ರಶ್ನೆಯನ್ನು ಮಾತನಾಡಿ",
        back: "← ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗೆ ಹಿಂತಿರುಗಿ"
    },
    te: {
        title: "🌱 AI వ్యవసాయ సహాయకుడు",
        description: "మీ భాషలో వ్యవసాయ ప్రశ్నలు అడగండి.",
        label: "మీ వ్యవసాయ ప్రశ్న",
        placeholder: "ఉదాహరణ: నా మొక్కల ఆకులు ఎందుకు పసుపు రంగులోకి మారుతున్నాయి?",
        ask: "ప్రశ్న అడగండి",
        speak: "🎤 ప్రశ్న చెప్పండి",
        back: "← డ్యాష్‌బోర్డ్‌కు తిరిగి వెళ్లండి"
    },
    hi: {
        title: "🌱 AI कृषि सहायक",
        description: "अपनी भाषा में खेती से जुड़े सवाल पूछें।",
        label: "आपका खेती से जुड़ा सवाल",
        placeholder: "उदाहरण: मेरे पौधों की पत्तियाँ पीली क्यों हो रही हैं?",
        ask: "सवाल पूछें",
        speak: "🎤 सवाल बोलें",
        back: "← डैशबोर्ड पर वापस जाएँ"
    },
    ta: {
        title: "🌱 AI விவசாய உதவியாளர்",
        description: "உங்கள் மொழியில் விவசாயக் கேள்விகளைக் கேளுங்கள்.",
        label: "உங்கள் விவசாயக் கேள்வி",
        placeholder: "உதாரணம்: என் செடிகளின் இலைகள் ஏன் மஞ்சளாகின்றன?",
        ask: "கேள்வி கேளுங்கள்",
        speak: "🎤 கேள்வியைப் பேசுங்கள்",
        back: "← முகப்புக்குத் திரும்பு"
    },
    ml: {
        title: "🌱 AI കാർഷിക സഹായി",
        description: "നിങ്ങളുടെ ഭാഷയിൽ കൃഷി ചോദ്യങ്ങൾ ചോദിക്കൂ.",
        label: "നിങ്ങളുടെ കൃഷി ചോദ്യം",
        placeholder: "ഉദാഹരണം: എന്റെ ചെടികളുടെ ഇലകൾ മഞ്ഞനിറമാകുന്നത് എന്തുകൊണ്ട്?",
        ask: "ചോദ്യം ചോദിക്കുക",
        speak: "🎤 ചോദ്യം പറയുക",
        back: "← ഡാഷ്ബോർഡിലേക്ക് മടങ്ങുക"
    }
};


function updateAiAssistantLanguage() {
    // Use the translations for the new ChatGPT-style interface.
    if (typeof updateChatLanguage === "function") {
        updateChatLanguage();
    }

    const questionInput = document.getElementById("farmerQuestion");
    const sendButton = document.getElementById("askAiButton");
    const voiceButton = document.getElementById("voiceQuestionButton");
    const backButton = document.getElementById("closeAiAssistantButton");

    if (questionInput) {
        if (questionInput) {
    const lang = localStorage.getItem("farmerLanguage") || "en";

    const placeholders = {
        en: "Ask anything about farming...",
        te: "వ్యవసాయం గురించి ఏదైనా అడగండి...",
        kn: "ಕೃಷಿಯ ಬಗ್ಗೆ ಏನಾದರೂ ಕೇಳಿ...",
        hi: "खेती के बारे में कुछ भी पूछें...",
        ta: "விவசாயம் பற்றி எதையும் கேளுங்கள்...",
        ml: "കൃഷിയെക്കുറിച്ച് എന്തും ചോദിക്കൂ..."
    };

    questionInput.placeholder = placeholders[lang] || placeholders.en;
}
    }

    if (sendButton) {
        sendButton.textContent = "↑";
        sendButton.title = "Send question";
    }

    if (voiceButton) {
        voiceButton.textContent = "🎤";
        voiceButton.title = "Speak your question";
    }

    if (backButton) {
        backButton.textContent = getChatText().backButton;
    }
}

/* SmartAgriTech AI Assistant - Voice Input */

const voiceQuestionButton = document.getElementById("voiceQuestionButton");
const farmerQuestionInput = document.getElementById("farmerQuestion");


let activeRecognition = null;
let isListening = false;

if (voiceQuestionButton && farmerQuestionInput) {
    voiceQuestionButton.addEventListener("click", function () {

        // Stop listening when clicked again
        if (isListening && activeRecognition) {
            activeRecognition.stop();
            return;
        }

        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert("Voice input is not supported. Please use Chrome.");
            return;
        }

        const lang = localStorage.getItem("farmerLanguage") || "en";

        const languageCodes = {
            en: "en-IN",
            kn: "kn-IN",
            te: "te-IN",
            hi: "hi-IN",
            ta: "ta-IN",
            ml: "ml-IN"
        };

        const recognition = new SpeechRecognition();
        activeRecognition = recognition;

        recognition.lang = languageCodes[lang] || "en-IN";
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = function () {
            isListening = true;
            voiceQuestionButton.textContent = "⏹ Stop";
            voiceQuestionButton.title = "Click to stop listening";
        };

        recognition.onresult = function (event) {
            farmerQuestionInput.value =
                event.results[0][0].transcript;
        };

        recognition.onerror = function (event) {
            console.error("Voice input failed:", event.error);
        };

        recognition.onend = function () {
            isListening = false;
            activeRecognition = null;
            voiceQuestionButton.textContent = "🎤";
            voiceQuestionButton.title = "Start voice input";
        };

        try {
            recognition.start();
        } catch (error) {
            console.error("Could not start voice input:", error);
            isListening = false;
            activeRecognition = null;
            voiceQuestionButton.textContent = "🎤";
        }
    });
}



/* SmartAgriTech AI Assistant - Real Gemini Answers */

const askAiButton = document.getElementById("askAiButton");
const aiQuestionInput = document.getElementById("farmerQuestion");
const aiResponseBox = document.getElementById("aiAssistantResponse");

const aiChatMessages = document.getElementById("aiChatMessages");
const chatWelcome = document.getElementById("chatWelcome");
const newAiChatButton = document.getElementById("newAiChatButton");

const viewAiHistoryButton = document.getElementById("viewAiHistoryButton");
const aiHistorySection = document.getElementById("aiHistorySection");
const aiHistoryList = document.getElementById("aiHistoryList");
const closeAiHistoryButton = document.getElementById("closeAiHistoryButton");
let currentConversationId = null;
const selectedLanguageLabel =
    document.getElementById("selectedLanguageLabel");

const chatWelcomeTitle = document.getElementById("chatWelcomeTitle");
const chatWelcomeText = document.getElementById("chatWelcomeText");

const chatTranslations = {
    en: {
        language: "🌐 English selected",
        welcome: "How can I help your farm today?",
        description: "Ask about crops, diseases, weather, or farming schemes.",
        placeholder: "Ask anything about farming...",
        send: "Send question",
        history: "📜 History",
        historyTitle: "📜 Previous Conversations",
        close: "Close",
        newChat: "+ New Chat",
        user: "You",
        assistant: "SmartAgri AI",
        loading: "Thinking...",
        empty: "No previous conversations found.",
        error: "Sorry, I couldn't get an answer. Please try again.",
        question: "Question",
        answer: "Answer",
        date: "Date",
        footerNote: "SmartAgriTech AI can make mistakes. Please verify important farming advice.",
        backButton: "← Back to Home"

    },
    kn: {
        language: "🌐 ಕನ್ನಡ ಆಯ್ಕೆಮಾಡಲಾಗಿದೆ",
        welcome: "ಇಂದು ನಿಮ್ಮ ಕೃಷಿಗೆ ನಾನು ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?",
        description: "ಬೆಳೆಗಳು, ರೋಗಗಳು, ಹವಾಮಾನ ಮತ್ತು ಕೃಷಿ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ.",
        placeholder: "ಕೃಷಿಯ ಬಗ್ಗೆ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ...",
        send: "ಪ್ರಶ್ನೆ ಕಳುಹಿಸಿ",
        history: "📜 ಹಿಂದಿನ ಚಾಟ್",
        historyTitle: "📜 ಹಿಂದಿನ ಸಂಭಾಷಣೆಗಳು",
        close: "ಮುಚ್ಚಿ",
        newChat: "+ ಹೊಸ ಚಾಟ್",
        user: "ನೀವು",
        assistant: "ಸ್ಮಾರ್ಟ್ ಅಗ್ರಿ AI",
        loading: "ಯೋಚಿಸುತ್ತಿದೆ...",
        empty: "ಹಿಂದಿನ ಸಂಭಾಷಣೆಗಳಿಲ್ಲ.",
        error: "ಕ್ಷಮಿಸಿ, ಉತ್ತರ ಪಡೆಯಲಾಗಲಿಲ್ಲ. ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
        question: "ಪ್ರಶ್ನೆ",
        answer: "ಉತ್ತರ",
        date: "ದಿನಾಂಕ",
        footerNote: "ಸ್ಮಾರ್ಟ್ ಅಗ್ರಿಟೆಕ್ AI ತಪ್ಪುಗಳನ್ನು ಮಾಡಬಹುದು. ಪ್ರಮುಖ ಕೃಷಿ ಸಲಹೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
        backButton: "← ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ"
    },
    te: {
        language: "🌐 తెలుగు ఎంచుకున్నారు",
        welcome: "ఈ రోజు మీ వ్యవసాయానికి నేను ఎలా సహాయం చేయగలను?",
        description: "పంటలు, తెగుళ్లు, వాతావరణం, ప్రభుత్వ పథకాల గురించి అడగండి.",
        placeholder: "వ్యవసాయం గురించి మీ ప్రశ్న అడగండి...",
        send: "ప్రశ్న పంపండి",
        history: "📜 చాట్ చరిత్ర",
        historyTitle: "📜 గత సంభాషణలు",
        close: "మూసివేయి",
        newChat: "+ కొత్త చాట్",
        user: "మీరు",
        assistant: "స్మార్ట్ అగ్రి AI",
        loading: "ఆలోచిస్తోంది...",
        empty: "గత సంభాషణలు లేవు.",
        error: "క్షమించండి, సమాధానం పొందలేకపోయాను. మళ్లీ ప్రయత్నించండి.",
        question: "ప్రశ్న",
        answer: "సమాధానం",
        date: "తేదీ",
        footerNote: "స్మార్ట్ అగ్రిటెక్ AI తప్పులు చేయవచ్చు. ముఖ్యమైన వ్యవసాయ సలహాలను ధృవీకరించండి.",
        backButton: "← హోమ్‌కు తిరిగి వెళ్ళండి"
    },
    hi: {
        language: "🌐 हिंदी चुनी गई",
        welcome: "आज मैं आपके खेत में कैसे मदद कर सकता हूँ?",
        description: "फसल, बीमारी, मौसम और सरकारी योजनाओं के बारे में पूछें।",
        placeholder: "खेती के बारे में अपना सवाल पूछें...",
        send: "सवाल भेजें",
        history: "📜 चैट इतिहास",
        historyTitle: "📜 पिछली बातचीत",
        close: "बंद करें",
        newChat: "+ नई चैट",
        user: "आप",
        assistant: "स्मार्ट एग्री AI",
        loading: "सोच रहा है...",
        empty: "कोई पुरानी बातचीत नहीं मिली।",
        error: "माफ़ कीजिए, जवाब नहीं मिल सका। फिर कोशिश करें।",
        question: "सवाल",
        answer: "जवाब",
        date: "तारीख",
        footerNote: "स्मार्टएग्रीटेक AI गलतियाँ कर सकता है। खेती की ज़रूरी सलाह की जाँच करें।",
        backButton: "← होम पर वापस जाएँ"
    },
    ta: {
        language: "🌐 தமிழ் தேர்ந்தெடுக்கப்பட்டது",
        welcome: "இன்று உங்கள் விவசாயத்திற்கு நான் எப்படி உதவலாம்?",
        description: "பயிர்கள், நோய்கள், வானிலை மற்றும் அரசு திட்டங்களைப் பற்றி கேளுங்கள்.",
        placeholder: "விவசாயம் பற்றிய உங்கள் கேள்வியைக் கேளுங்கள்...",
        send: "கேள்வியை அனுப்பு",
        history: "📜 உரையாடல் வரலாறு",
        historyTitle: "📜 முந்தைய உரையாடல்கள்",
        close: "மூடு",
        newChat: "+ புதிய உரையாடல்",
        user: "நீங்கள்",
        assistant: "ஸ்மார்ட் அக்ரி AI",
        loading: "சிந்திக்கிறது...",
        empty: "முந்தைய உரையாடல்கள் இல்லை.",
        error: "மன்னிக்கவும், பதிலைப் பெற முடியவில்லை. மீண்டும் முயற்சிக்கவும்.",
        question: "கேள்வி",
        answer: "பதில்",
        date: "தேதி",
        footerNote: "ஸ்மார்ட் அக்ரிடெக் AI தவறுகளைச் செய்யலாம். முக்கியமான விவசாய ஆலோசனைகளைச் சரிபார்க்கவும்.",
        backButton: "← முகப்புக்குத் திரும்பு"
    },
    ml: {
        language: "🌐 മലയാളം തിരഞ്ഞെടുത്തു",
        welcome: "ഇന്ന് നിങ്ങളുടെ കൃഷിയിൽ എങ്ങനെ സഹായിക്കാം?",
        description: "വിളകൾ, രോഗങ്ങൾ, കാലാവസ്ഥ, സർക്കാർ പദ്ധതികൾ എന്നിവ ചോദിക്കൂ.",
        placeholder: "കൃഷിയെക്കുറിച്ചുള്ള ചോദ്യം ചോദിക്കൂ...",
        send: "ചോദ്യം അയയ്ക്കുക",
        history: "📜 സംഭാഷണ ചരിത്രം",
        historyTitle: "📜 മുൻ സംഭാഷണങ്ങൾ",
        close: "അടയ്ക്കുക",
        newChat: "+ പുതിയ ചാറ്റ്",
        user: "നിങ്ങൾ",
        assistant: "സ്മാർട്ട് അഗ്രി AI",
        loading: "ചിന്തിക്കുന്നു...",
        empty: "മുൻ സംഭാഷണങ്ങൾ കണ്ടെത്തിയില്ല.",
        error: "ക്ഷമിക്കണം, മറുപടി ലഭിച്ചില്ല. വീണ്ടും ശ്രമിക്കുക.",
        question: "ചോദ്യം",
        answer: "ഉത്തരം",
        date: "തീയതി",
        footerNote: "സ്മാർട്ട് അഗ്രിടെക് AI തെറ്റുകൾ വരുത്താം. പ്രധാനപ്പെട്ട കൃഷി നിർദ്ദേശങ്ങൾ പരിശോധിക്കുക.",
        backButton: "← ഹോമിലേക്ക് മടങ്ങുക"
    }
};

function getChatLanguage() {
    return localStorage.getItem("farmerLanguage") || "en";
}

function getChatText() {
    return chatTranslations[getChatLanguage()] || chatTranslations.en;
}

function updateChatLanguage() {
    const t = getChatText();

    if (selectedLanguageLabel) selectedLanguageLabel.textContent = t.language;
    if (chatWelcomeTitle) chatWelcomeTitle.textContent = t.welcome;
    if (chatWelcomeText) chatWelcomeText.textContent = t.description;
    if (aiQuestionInput) aiQuestionInput.placeholder = t.placeholder;
    if (askAiButton) askAiButton.title = t.send;
    if (viewAiHistoryButton) viewAiHistoryButton.textContent = t.history;
    if (newAiChatButton) newAiChatButton.textContent = t.newChat;

    const historyHeading = document.getElementById("historyHeading");
    if (historyHeading) historyHeading.textContent = t.historyTitle;
 
   if (closeAiHistoryButton) closeAiHistoryButton.textContent = t.close;
     // Translate the bottom safety message
    const footerNote = document.getElementById("chatFooterNote");
    if (footerNote) footerNote.textContent = t.footerNote;
    // Translate the back button
    const backButton = document.getElementById("closeAiAssistantButton");
    if (backButton) {
        backButton.textContent = t.backButton;
        backButton.title = t.backButton;
        backButton.setAttribute("aria-label", t.backButton);
    }

}

function addChatMessage(text, sender) {
    if (!aiChatMessages) return;

    if (chatWelcome) chatWelcome.hidden = true;

    const message = document.createElement("div");
    message.className = "chat-message " +
        (sender === "user" ? "user-message" : "ai-message");

    const label = document.createElement("span");
    label.className = "message-label";
    label.textContent = sender === "user"
        ? getChatText().user
        : getChatText().assistant;

    const content = document.createElement("div");
    content.textContent = text;

    message.append(label, content);
    aiChatMessages.appendChild(message);
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;

    return message;
}

async function sendFarmingQuestion() {
    const question = aiQuestionInput?.value.trim();

    if (!question || !askAiButton) return;

    const lang = getChatLanguage();
    const languageNames = {
        en: "English",
        kn: "Kannada",
        te: "Telugu",
        hi: "Hindi",
        ta: "Tamil",
        ml: "Malayalam"
    };

    const answerLanguages = {
        en: "en-IN",
        kn: "kn-IN",
        te: "te-IN",
        hi: "hi-IN",
        ta: "ta-IN",
        ml: "ml-IN"
    };

    addChatMessage(question, "user");
    aiQuestionInput.value = "";
    askAiButton.disabled = true;

    const loadingMessage = addChatMessage(getChatText().loading, "assistant");

    try {
        const response = await fetch("http://localhost:8082/api/ai/ask", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
    question: question,
    language: languageNames[lang] || "English",
    conversationId: currentConversationId
})
        });

        const data = await response.json();
const answer = data.answer;

if (data.conversationId) {
    currentConversationId = data.conversationId;
}
        currentConversationId = data.conversationId;

        if (!response.ok || !answer) {
            throw new Error("The AI server could not provide an answer.");
        }

        const content = loadingMessage?.querySelector("div:last-child");
        if (content) content.textContent = answer;

        // Speak the answer in the selected language.
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();

            const spokenAnswer = new SpeechSynthesisUtterance(answer);
            spokenAnswer.lang = answerLanguages[lang] || "en-IN";
            spokenAnswer.rate = 0.85;
            window.speechSynthesis.speak(spokenAnswer);
        }
    } catch (error) {
        console.error("SmartAgri AI error:", error);

        const content = loadingMessage?.querySelector("div:last-child");
        if (content) content.textContent = getChatText().error;
    } finally {
        askAiButton.disabled = false;
        aiQuestionInput?.focus();
    }
}

if (askAiButton && aiQuestionInput && aiChatMessages) {
    askAiButton.addEventListener("click", sendFarmingQuestion);

    aiQuestionInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendFarmingQuestion();
        }
    });
}

if (newAiChatButton) {
    newAiChatButton.addEventListener("click", function () {
        currentConversationId = null;
        aiChatMessages?.replaceChildren();

        if (chatWelcome) {
            chatWelcome.hidden = false;
            aiChatMessages?.appendChild(chatWelcome);
        }

        if (aiHistorySection) aiHistorySection.hidden = true;
        if (aiQuestionInput) aiQuestionInput.value = "";

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }

        updateChatLanguage();
    });
}


async function loadAiHistory() {
    if (!aiHistoryList) return;

    aiHistoryList.textContent = getChatText().loading;

    try {
        const response = await fetch(
            "http://localhost:8082/api/ai/history"
        );

        if (!response.ok) {
            throw new Error("History request failed");
        }

        const history = await response.json();
        aiHistoryList.replaceChildren();

        if (history.length === 0) {
            aiHistoryList.textContent = getChatText().empty;
            return;
        }

        const groups = new Map();

        history.forEach(function (chat) {
            const key = chat.conversationId
                ? chat.conversationId
                : "old-" + chat.id;

            if (!groups.has(key)) {
                groups.set(key, []);
            }

            groups.get(key).push(chat);
        });

        groups.forEach(function (messages) {
            messages.sort(function (a, b) {
                return new Date(a.createdAt) -
                    new Date(b.createdAt);
            });

            const firstMessage = messages[0];
            const card = document.createElement("button");

            card.type = "button";
            card.className = "history-card";
            card.textContent = firstMessage.question;
            card.title = firstMessage.question;

            card.addEventListener("click", async function () {
                try {
                    let conversation = messages;

                    if (firstMessage.conversationId) {
                        const chatResponse = await fetch(
                            "http://localhost:8082/api/ai/history/" +
                            encodeURIComponent(firstMessage.conversationId)
                        );

                        if (!chatResponse.ok) {
                            throw new Error("Could not open conversation");
                        }

                        conversation = await chatResponse.json();
                    }

                    currentConversationId =
                        firstMessage.conversationId || null;

                    aiChatMessages.replaceChildren();

                    conversation.forEach(function (chat) {
                        addChatMessage(chat.question, "user");
                        addChatMessage(chat.answer, "assistant");
                    });

                    if (chatWelcome) {
                        chatWelcome.hidden = true;
                    }

                    if (aiQuestionInput) {
                        aiQuestionInput.value = "";
                        aiQuestionInput.focus();
                    }

                    aiHistorySection.hidden = true;

                } catch (error) {
                    console.error("Opening chat failed:", error);
                    alert("Could not open this conversation. Check the backend.");
                }
            });

            aiHistoryList.appendChild(card);
        });

    } catch (error) {
        console.error("History loading error:", error);
        aiHistoryList.textContent =
            "Could not load history. Check the backend.";
    }
}

if (viewAiHistoryButton && aiHistorySection && aiHistoryList) {
    viewAiHistoryButton.addEventListener("click", async function () {
        aiHistorySection.hidden = false;
        await loadAiHistory();
    });
}

if (closeAiHistoryButton) {
    closeAiHistoryButton.addEventListener("click", function () {
        aiHistorySection.hidden = true;
    });
}

updateChatLanguage();


        


/* Stop SmartAgriTech AI voice response */

const stopSpeakingButton =
    document.getElementById("stopSpeakingButton");

if (stopSpeakingButton) {
    stopSpeakingButton.addEventListener("click", function () {
        window.speechSynthesis.cancel();
    });
}

const sidebarProfileBtn = document.getElementById("sidebarProfileBtn");
const existingProfileBtn = document.getElementById("profileBtn");

if (sidebarProfileBtn && existingProfileBtn) {
    sidebarProfileBtn.addEventListener("click", function () {
        existingProfileBtn.click();
    });
}
