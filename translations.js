const translations = {
    ru: {
        services: "Главная",
        useCases: "Создание AI клона",
        resources: "AI чат-боты",
        aboutUs: "О нас",
        contactSales: "Связаться с нами",
        enterprisePartner: "Автоматизация Бизнеса",
        professionalPartner: "Интеграция ИИ",
        heroTitle: "AI который работает за вас: чат-боты и аватары для бизнеса",
        heroText: "Создаём умных AI-аватаров и чат-ботов которые автоматизируют контент и общение с клиентами, чтобы вы зарабатывали больше, тратя меньше.",
        contactUs: "Связаться с нами",
        modalTitle: "Свяжитесь с нами",
        modalSubtitle: "Заполните форму, и мы свяжемся с вами для обсуждения вашего проекта",
        name: "Имя*",
        phone: "Номер телефона*",
        selectService: "Выберите услугу*",
        aboutBusiness: "О вашем бизнесе*",
        submit: "Отправить заявку",
        thankYou: "Спасибо! Мы свяжемся с вами в ближайшее время."
    },
    en: {
        services: "Home",
        useCases: "AI Clone Creation",
        resources: "AI Chatbots",
        aboutUs: "About Us",
        contactSales: "Contact Us",
        enterprisePartner: "Business Automation",
        professionalPartner: "AI Integration",
        heroTitle: "AI that works for you: chatbots and avatars for business",
        heroText: "We create smart AI avatars and chatbots that automate content and customer communication, so you earn more while spending less.",
        contactUs: "Contact Us",
        modalTitle: "Contact Us",
        modalSubtitle: "Fill out the form and we will contact you to discuss your project",
        name: "Name*",
        phone: "Phone Number*",
        selectService: "Select Service*",
        aboutBusiness: "About Your Business*",
        submit: "Submit Request",
        thankYou: "Thank you! We will contact you soon."
    },
    uz: {
        services: "Asosiy",
        useCases: "AI klon yaratish",
        resources: "AI chat-botlar",
        aboutUs: "Biz haqimizda",
        contactSales: "Biz bilan bog'laning",
        enterprisePartner: "Biznesni avtomatlashtirish",
        professionalPartner: "AI integratsiyasi",
        heroTitle: "Siz uchun ishlaydigan AI: biznes uchun chat-botlar va avatarlar",
        heroText: "Biz kontent va mijozlar bilan muloqotni avtomatlashtiruvchi aqlli AI avatarlari va chat-botlarini yaratamiz, shunda siz kamroq sarflab, ko'proq daromad olasiz.",
        contactUs: "Biz bilan bog'laning",
        modalTitle: "Biz bilan bog'laning",
        modalSubtitle: "Formani to'ldiring va biz loyihangizni muhokama qilish uchun siz bilan bog'lanamiz",
        name: "Ism*",
        phone: "Telefon raqami*",
        selectService: "Xizmatni tanlang*",
        aboutBusiness: "Biznesingiz haqida*",
        submit: "So'rov yuborish",
        thankYou: "Rahmat! Tez orada siz bilan bog'lanamiz."
    }
};

// Добавляем функцию для установки языка на странице
function setPageLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelector('.nav-item:nth-child(1)').textContent = translations[lang].services;
    document.querySelector('.nav-item:nth-child(2)').textContent = translations[lang].useCases;
    document.querySelector('.nav-item:nth-child(3)').textContent = translations[lang].resources;
    document.querySelector('.nav-item:nth-child(4)').textContent = translations[lang].aboutUs;
    document.querySelector('.contact-button').textContent = translations[lang].contactSales;
    document.querySelector('.badge.enterprise').textContent = translations[lang].enterprisePartner;
    document.querySelector('.badge.partner').textContent = translations[lang].professionalPartner;
    document.querySelector('.hero-title').textContent = translations[lang].heroTitle;
    document.querySelector('.hero-text').textContent = translations[lang].heroText;
    document.querySelector('.contact-link').textContent = translations[lang].contactUs;
}

// Инициализация языка при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Получаем сохраненный язык или используем русский по умолчанию
    const savedLanguage = localStorage.getItem('selectedLanguage') || DEFAULT_LANGUAGE;
    
    // Устанавливаем значение select
    const languageSelect = document.getElementById('languageSelect');
    languageSelect.value = savedLanguage;
    
    // Устанавливаем язык на странице
    setPageLanguage(savedLanguage);
    
    // Обработчик изменения языка
    languageSelect.addEventListener('change', function() {
        const selectedLang = this.value;
        localStorage.setItem('selectedLanguage', selectedLang);
        setPageLanguage(selectedLang);
    });
    
    // Проверяем видимость видео при загрузке
    handleVideoScroll();

    // Обновленная логика управления видео
    const videoContainer = document.querySelector('.video-container');
    const iframe = document.getElementById('youtubeVideo');
    let isPlaying = false;

    // Функция для создания URL видео
    function createVideoUrl(autoplay) {
        const baseUrl = 'https://www.youtube.com/embed/IuQkztVAz0E';
        const params = new URLSearchParams({
            si: 'Ybolklgc6bd2iAj0',
            rel: '0',
            enablejsapi: '1',
            controls: '1',
            autoplay: autoplay ? '1' : '0'
        });
        return `${baseUrl}?${params.toString()}`;
    }

    // Обработчик клика по видео
    videoContainer.addEventListener('click', function() {
        if (!isPlaying) {
            // Запускаем видео
            iframe.src = createVideoUrl(true);
            isPlaying = true;
        } else {
            // Останавливаем видео
            iframe.src = createVideoUrl(false);
            isPlaying = false;
        }
    });

    handleServicesScroll();
});

// Функция для анимации видео при скролле
function handleVideoScroll() {
    const videoContainer = document.querySelector('.video-container');
    const videoPosition = videoContainer.getBoundingClientRect();
    
    // Проверяем, видно ли видео на экране
    if (videoPosition.top < window.innerHeight * 0.75) {
        videoContainer.classList.add('visible');
    } else {
        videoContainer.classList.remove('visible');
    }
}

// Добавляем обработчик скролла
window.addEventListener('scroll', handleVideoScroll);

// Обновляем функцию для анимации всех секций
function handleServicesScroll() {
    const servicesSections = document.querySelectorAll('.services-section');
    
    servicesSections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect();
        
        if (sectionPosition.top < window.innerHeight * 0.75) {
            section.classList.add('visible');
        }
    });

    const tailoredSection = document.querySelector('.tailored-section');
    if (tailoredSection) {
        const tailoredPosition = tailoredSection.getBoundingClientRect();
        if (tailoredPosition.top < window.innerHeight * 0.75) {
            tailoredSection.classList.add('visible');
        }
    }

    const resultsSection = document.querySelector('.results-section');
    if (resultsSection) {
        const resultsPosition = resultsSection.getBoundingClientRect();
        if (resultsPosition.top < window.innerHeight * 0.75) {
            resultsSection.classList.add('visible');
        }
    }

    const testimonialsSection = document.querySelector('.testimonials-section');
    if (testimonialsSection) {
        const testimonialsPosition = testimonialsSection.getBoundingClientRect();
        if (testimonialsPosition.top < window.innerHeight * 0.75) {
            testimonialsSection.classList.add('visible');
        }
    }

    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
        const contactPosition = contactSection.getBoundingClientRect();
        if (contactPosition.top < window.innerHeight * 0.75) {
            contactSection.classList.add('visible');
        }
    }

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const statsPosition = statsSection.getBoundingClientRect();
        if (statsPosition.top < window.innerHeight * 0.75) {
            statsSection.classList.add('visible');
        }
    }

    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
        const projectsPosition = projectsSection.getBoundingClientRect();
        if (projectsPosition.top < window.innerHeight * 0.75) {
            projectsSection.classList.add('visible');
        }
    }
}

// Добавляем обработчик скролла
window.addEventListener('scroll', handleServicesScroll); 