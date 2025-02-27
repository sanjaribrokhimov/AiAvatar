

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