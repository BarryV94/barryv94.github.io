// Language Management
const translations = {
    en: {
        // Navigation
        'nav.features': 'Features',
        'nav.download': 'Download',
        
        // Hero Section
        'hero.title': 'Control Your <span class="gradient-text">Investments</span> Anytime',
        'hero.description': 'Advanced mobile application for tracking profits and losses of your products. Make smart business decisions thanks to detailed real-time analytics.',
        'hero.about': 'About ShelfNest',
        'hero.appDesc': 'ShelfNest is an application for comprehensive investment product management.',
        'hero.keyBenefits': 'Key benefits:',
        'hero.benefit1': 'Quickly add and edit products – full data fields and image support',
        'hero.benefit2': 'Tracking values in multiple currencies',
        'hero.benefit3': 'Extensive statistics and charts',
        'hero.benefit4': 'Data import/export',
        'hero.benefit5': 'Multi-select mode and bulk operations (delete, export)',
        'hero.interface': 'Interface and Usability:',
        'hero.interface1': 'Responsive interface',
        'hero.interface2': 'Light/Dark mode',
        'hero.interface3': 'Loading animations',
        'hero.interface4': 'Visual and audio notification system',
        'hero.interface5': 'Built-in instructions',
        
        // Features
        'features.title': 'Powerful Features',
        'feature1.title': 'Real-time Analysis',
        'feature1.desc': 'Track investment value changes with updates every 5 minutes',
        'feature2.title': 'Profit/Loss Reporting',
        'feature2.desc': 'Automatic calculation and categorization of all transactions',
        'feature3.title': 'Smart Notifications',
        'feature3.desc': 'Receive alerts for significant portfolio value changes',
        
        // Download
        'download.title': 'Download the App Today',
        'download.subtitle': 'Available on Android Platform',
        'download.button': 'Download on Google Play',
        
        // Footer
        'footer.desc': 'Advanced investment management tool',
        'footer.contact': 'Contact',
        'footer.info': 'Information',
        'footer.privacy': 'Privacy Policy (ShelfNest)',
        
        // Privacy Policy
        'privacy.title': 'Privacy Policy',
        'privacy.content': `
            <h2>Introduction</h2>
            <p>This Privacy Policy explains what data is collected and how it is used within the "Product Warehouse" mobile application (hereinafter: "Application"), published by Piotr Czechowski (contact: magazynproduktowapp@gmail.com). The Application is available for Android devices.</p>

            <h2>General Information</h2>
            <p><strong>Application Owner:</strong></p>
            <ul>
                <li>Application name: Product Warehouse</li>
                <li>Owner / Data Administrator: Piotr Czechowski</li>
                <li>Contact email: magazynproduktowapp@gmail.com</li>
                <li>Country: Poland</li>
            </ul>

            <h2>What Data We Collect and When</h2>
            
            <h3>1. Data voluntarily provided by the user:</h3>
            <ul>
                <li>Email address (only when the user decides to contact us or report a problem)</li>
                <li>Files uploaded to the Application (e.g., import/export of .zip archives) only upon explicit user choice</li>
                <li>Photos taken with the device camera only if the user grants the app permission and decides to take a photo within the Application's functions</li>
                <li>Language preferences (language selection in the app)</li>
            </ul>

            <h3>2. Technical and diagnostic data:</h3>
            <ul>
                <li>Device advertising identifier (Advertising ID) and information used by advertising networks to display ads (AdMob)</li>
                <li>Device and operating system information (e.g., model, Android version), usage statistics (anonymized or aggregated), error logs, and network connection information (online/offline status) collected to ensure Application operation and diagnose problems</li>
            </ul>

            <h3>3. Data collected by third parties (e.g., Google/AdMob):</h3>
            <p>The Application integrates advertising services (Google AdMob). These services may collect and process data to personalize ads, measure ad effectiveness, and prevent abuse. Details and rules of data processing by third parties are governed by their privacy policies (e.g., Google).</p>

            <h2>Purposes and Legal Bases for Processing</h2>
            <ul>
                <li><strong>Displaying ads:</strong> based on explicit user consent (where required) or legitimate interest (for some forms of advertising). Data transmitted to AdMob is used in accordance with Google AdMob policy.</li>
                <li><strong>Ensuring application functionality:</strong> processing files uploaded by the user, handling export/import based on performing actions at user's request.</li>
                <li><strong>Diagnostics and quality improvement:</strong> analysis of logs and technical data to fix errors and improve performance - legitimate interest of the administrator.</li>
                <li><strong>Contact with the user:</strong> based on consent or to perform a justified action (e.g., responding to an error report).</li>
                <li><strong>Language personalization:</strong> storing app language choice based on legitimate interest of the administrator.</li>
            </ul>

            <h2>Permissions and Consents</h2>
            <p>The Application requests access to selected device permissions (e.g., camera, file access). Granting permissions is voluntary; lack of consent may limit some Application functions.</p>
            <p>If your country requires consent for personalized ads, the Application may display a consent prompt. You can opt out of personalized ads at any time through system settings or Google tools (e.g., ad settings in Google context).</p>

            <h2>Data Storage</h2>
            <ul>
                <li>Data from files uploaded by the user is stored locally on the device or, if you save an export, stored in the "Download/ProductWarehouse" directory (or another indicated by the file system). The Application does not automatically transmit these files to external servers.</li>
                <li>Telemetry and diagnostic data may be stored for the period necessary to achieve the purpose (e.g., up to 90 days for diagnostic logs), unless the law requires a longer retention period.</li>
                <li>Data transmitted to external providers (e.g., Google AdMob) is stored and processed according to the policies of these providers.</li>
                <li>Language preferences are stored locally on the user's device.</li>
            </ul>

            <h2>Sharing Personal Data</h2>
            <ul>
                <li>We do not sell or rent personal data to third parties.</li>
                <li>Data necessary for displaying ads and ad measurement may be shared with advertising platforms (e.g., Google/AdMob) and their advertising and analytics partners.</li>
                <li>We may also disclose data if required by law (e.g., at the request of law enforcement) or to protect the rights of the application owner.</li>
            </ul>

            <h2>International Data Transfer</h2>
            <p>Advertising and analytics services (e.g., Google) may process and store data outside the European Union. Google applies appropriate legal mechanisms (e.g., contractual clauses) to secure data transfer - detailed information can be found in the provider's privacy policy.</p>

            <h2>User Rights</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Request access to your personal data</li>
                <li>Request correction or deletion of data</li>
                <li>Object to data processing for marketing purposes</li>
                <li>Data portability (regarding data in electronic formats)</li>
                <li>Withdraw consent at any time (if processing is based on consent)</li>
                <li>Lodge a complaint with a supervisory authority (in Poland: President of the Office for Personal Data Protection)</li>
            </ul>

            <h2>Security</h2>
            <p>We apply appropriate technical and organizational measures to protect data against unauthorized access, leakage, modification, and loss. Despite this, no solution guarantees 100% security - we recommend caution when sharing sensitive data.</p>

            <h2>Children's Data</h2>
            <p>The Application is not directed at children under 13 years of age. We do not knowingly collect personal data from children. If we learn that a child's data has been collected without required parental/guardian permission, we will take steps to delete such data.</p>

            <h2>Cookies and Similar Technologies</h2>
            <p>The Application may use cookie-like technologies (e.g., advertising identifiers) for ad personalization and analytics. Since the Application is a mobile app (not a website), the cookie management mechanism may differ from browser-based ones. In the future, we plan to implement extended consent management features.</p>

            <h2>Changes to Privacy Policy</h2>
            <p>We may update the Privacy Policy. We will inform users of any significant changes by updating the effective date and (if possible) in the app itself.</p>

            <h2>Contact</h2>
            <p>For questions regarding the privacy policy, please contact:</p>
            <p>Piotr Czechowski<br>Email: magazynproduktowapp@gmail.com</p>
        `
    },
    pl: {
        // Navigation
        'nav.features': 'Funkcje',
        'nav.download': 'Pobierz',
        
        // Hero Section
        'hero.title': 'Kontroluj swoje <span class="gradient-text">inwestycje</span> w każdej chwili',
        'hero.description': 'Zaawansowana aplikacja mobilna do śledzenia zysków i strat Twoich produktów. Podejmuj mądre decyzje biznesowe dzięki szczegółowym analitykom w czasie rzeczywistym.',
        'hero.about': 'O ShelfNest',
        'hero.appDesc': 'ShelfNest to aplikacja do kompleksowego zarządzania produktami inwestycyjnymi.',
        'hero.keyBenefits': 'Kluczowe korzyści:',
        'hero.benefit1': 'Szybkie dodawanie i edycja produktów – pełne pola danych i obsługa obrazów',
        'hero.benefit2': 'Śledzenie wartości w wielu walutach',
        'hero.benefit3': 'Rozbudowane statystyki i wykresy',
        'hero.benefit4': 'Import/eksport danych',
        'hero.benefit5': 'Tryb wielokrotnego wyboru i operacje zbiorcze (usuwanie, eksport)',
        'hero.interface': 'Interfejs i użyteczność:',
        'hero.interface1': 'Responsywny interfejs',
        'hero.interface2': 'Tryb jasny/ciemny',
        'hero.interface3': 'Animacje ładowania',
        'hero.interface4': 'System powiadomień wizualnych i dźwiękowych',
        'hero.interface5': 'Wbudowane instrukcje',
        
        // Features
        'features.title': 'Potężne funkcje',
        'feature1.title': 'Analiza w czasie rzeczywistym',
        'feature1.desc': 'Śledź zmiany wartości inwestycji z aktualizacjami co 5 minut',
        'feature2.title': 'Raportowanie zysków/strat',
        'feature2.desc': 'Automatyczne obliczanie i kategoryzacja wszystkich transakcji',
        'feature3.title': 'Inteligentne powiadomienia',
        'feature3.desc': 'Otrzymuj alerty przy znaczących zmianach wartości portfela',
        
        // Download
        'download.title': 'Pobierz aplikację już dziś',
        'download.subtitle': 'Dostępna na platformie Android',
        'download.button': 'Pobierz z Google Play',
        
        // Footer
        'footer.desc': 'Zaawansowane narzędzie do zarządzania inwestycjami',
        'footer.contact': 'Kontakt',
        'footer.info': 'Informacje',
        'footer.privacy': 'Polityka prywatności (ShelfNest)',
        
        // Privacy Policy
        'privacy.title': 'Polityka Prywatności',
        'privacy.content': `
            <h2>Wstęp</h2>
            <p>Niniejsza Polityka prywatności wyjaśnia, jakie dane są zbierane i w jaki sposób są wykorzystywane w ramach aplikacji mobilnej "Magazyn Produktów" (dalej: „Aplikacja”), której wydawcą jest Piotr Czechowski (kontakt: magazynproduktowapp@gmail.com). Aplikacja jest dostępna na urządzenia z systemem Android.</p>

            <h2>Informacje ogólne</h2>
            <p><strong>Właściciel aplikacji:</strong></p>
            <ul>
                <li>Nazwa aplikacji: Magazyn Produktów</li>
                <li>Właściciel / Administrator danych: Piotr Czechowski</li>
                <li>Adres e‑mail kontaktowy: magazynproduktowapp@gmail.com</li>
                <li>Kraj: Polska</li>
            </ul>

            <h2>Jakie dane zbieramy i kiedy</h2>
            
            <h3>1. Dane przekazywane dobrowolnie przez użytkownika:</h3>
            <ul>
                <li>Adres e‑mail (wyłącznie gdy użytkownik zdecyduje się kontaktować z nami lub zgłosić problem)</li>
                <li>Pliki przesyłane do Aplikacji (np. import/eksport archiwów .zip) tylko po wyraźnym wyborze użytkownika</li>
                <li>Zdjęcia wykonane aparatem urządzenia tylko jeśli użytkownik nada aplikacji pozwolenie i zdecyduje się zrobić zdjęcie w ramach funkcji Aplikacji</li>
                <li>Preferencje językowe (wybór języka w aplikacji)</li>
            </ul>

            <h3>2. Dane techniczne i diagnostyczne:</h3>
            <ul>
                <li>Identyfikator reklamowy urządzenia (Advertising ID) i informacje używane przez sieci reklamowe do wyświetlania reklam (AdMob)</li>
                <li>Informacje o urządzeniu i systemie operacyjnym (np. model, wersja Android), statystyki użycia (anonimizowane lub agregowane), logi błędów i informacje o połączeniu sieciowym (status online/offline) zbierane w celu zapewnienia działania Aplikacji i diagnostyki problemów</li>
            </ul>

            <h3>3. Dane zbierane przez podmioty zewnętrzne (np. Google/AdMob):</h3>
            <p>Aplikacja integruje usługi reklamowe (Google AdMob). Usługi te mogą zbierać i przetwarzać dane w celu personalizacji reklam, pomiaru skuteczności reklam oraz zapobiegania nadużyciom. Szczegóły i zasady przetwarzania danych przez podmioty zewnętrzne reguluje ich polityka prywatności (np. Google).</p>

            <h2>Cele i podstawy prawne przetwarzania</h2>
            <ul>
                <li><strong>Wyświetlanie reklam:</strong> na podstawie wyraźnej zgody użytkownika (gdzie wymagana) lub prawnie uzasadnionego interesu (dla niektórych form reklamy). Dane przekazywane do AdMob są wykorzystywane zgodnie z polityką Google AdMob</li>
                <li><strong>Zapewnienie funkcjonalności aplikacji:</strong> przetwarzanie plików przesłanych przez użytkownika, obsługa eksportu/importu na podstawie wykonania czynności na żądanie użytkownika</li>
                <li><strong>Diagnostyka i poprawa jakości:</strong> analiza logów i danych technicznych w celu usunięcia błędów i poprawy wydajności - prawnie uzasadniony interes administratora</li>
                <li><strong>Kontakt z użytkownikiem:</strong> na podstawie zgody lub w celu wykonania uzasadnionej czynności (np. odpowiedź na zgłoszenie błędu)</li>
                <li><strong>Personalizacja języka:</strong> przechowywanie wyboru języka aplikacji na podstawie prawnie uzasadnionego interesu administratora</li>
            </ul>

            <h2>Uprawnienia i zgody</h2>
            <p>Aplikacja prosi o dostęp do wybranych uprawnień urządzenia (np. aparat, dostęp do plików). Nadawanie uprawnień jest dobrowolne, brak zgody może ograniczyć niektóre funkcje Aplikacji.</p>
            <p>Jeśli w Twoim kraju wymagane jest uzyskanie zgody na spersonalizowane reklamy, Aplikacja może wyświetlać monit o zgodę. Możesz w każdej chwili zrezygnować z spersonalizowanych reklam poprzez ustawienia systemowe lub narzędzia Google (np. ustawienia reklam w kontekście Google).</p>

            <h2>Przechowywanie danych</h2>
            <ul>
                <li>Dane plików przesyłanych przez użytkownika są przechowywane lokalnie na urządzeniu lub jeśli zapisujesz eksport zapisywane w katalogu „Pobrane/MagazynProdukty" (lub innym wskazanym przez system plików). Aplikacja nie przesyła automatycznie tych plików na zewnętrzne serwery</li>
                <li>Dane telemetryczne i diagnostyczne mogą być przechowywane przez okres niezbędny do realizacji celu (np. do 90 dni dla logów diagnostycznych), chyba że prawo wymaga dłuższego okresu przechowywania</li>
                <li>Dane przekazywane do dostawców zewnętrznych (np. Google AdMob) są przechowywane i przetwarzane zgodnie z politykami tych dostawców</li>
                <li>Preferencje językowe są przechowywane lokalnie na urządzeniu użytkownika</li>
            </ul>

            <h2>Udostępnianie danych osobowych</h2>
            <ul>
                <li>Nie sprzedajemy ani nie wynajmujemy danych osobowych osób trzecich</li>
                <li>Dane niezbędne do wyświetlania reklam i pomiaru reklam mogą być udostępniane platformom reklamowym (np. Google/AdMob) oraz ich partnerom reklamowym i analitycznym</li>
                <li>Możemy też ujawnić dane, jeśli jest to wymagane prawnie (np. na żądanie organów ścigania) lub w celu ochrony praw właściciela aplikacji</li>
            </ul>

            <h2>Transfer danych międzynarodowy</h2>
            <p>Usługi reklamowe i analityczne (np. Google) mogą przetwarzać i przechowywać dane poza granicami Unii Europejskiej. Google stosuje odpowiednie mechanizmy prawne (np. klauzule umowne) w celu zabezpieczenia transferu danych - szczegółowe informacje znajdziesz w polityce prywatności dostawcy.</p>

            <h2>Prawa użytkownika</h2>
            <p>Masz prawo do:</p>
            <ul>
                <li>żądania dostępu do swoich danych osobowych</li>
                <li>żądania sprostowania lub usunięcia danych</li>
                <li>wniesienia sprzeciwu wobec przetwarzania danych w celach marketingowych</li>
                <li>przenoszenia danych (dot. danych w formatach elektronicznych)</li>
                <li>wycofania zgody w dowolnym momencie (jeśli przetwarzanie odbywa się na podstawie zgody)</li>
                <li>wniesienia skargi do organu nadzorczego (w Polsce: Prezes Urzędu Ochrony Danych Osobowych)</li>
            </ul>

            <h2>Bezpieczeństwo</h2>
            <p>Stosujemy odpowiednie środki techniczne i organizacyjne mające na celu ochronę danych przed nieautoryzowanym dostępem, wyciekiem, modyfikacją oraz utratą. Pomimo tego żadne rozwiązanie nie gwarantuje 100% bezpieczeństwa - zalecamy ostrożność przy udostępnianiu danych wrażliwych.</p>

            <h2>Dane dzieci</h2>
            <p>Aplikacja nie jest skierowana do dzieci poniżej 13 roku życia. Nie zbieramy świadomie danych osobowych dzieci. Jeśli dowiemy się, że zebrano dane dziecka bez wymaganego zezwolenia rodzica/opiekuna, podejmiemy działania mające na celu usunięcie takich danych.</p>

            <h2>Pliki cookies i podobne technologie</h2>
            <p>Aplikacja może korzystać z technologii podobnych do cookie (np. identyfikatorów reklamowych) w celu personalizacji reklam i analityki. Ponieważ Aplikacja jest aplikacją mobilną (nie stroną www), mechanizm zarządzania cookie może różnić się od przeglądarkowego. W przyszłości planujemy wdrożyć rozszerzone funkcje zarządzania zgodami (consent).</p>

            <h2>Zmiany w Polityce prywatności</h2>
            <p>Politykę prywatności możemy aktualizować. O wszelkich istotnych zmianach poinformujemy użytkowników poprzez aktualizację daty wejścia w życie i (jeśli to możliwe) w samej aplikacji.</p>

            <h2>Kontakt</h2>
            <p>W razie pytań dotyczących polityki prywatności prosimy o kontakt:</p>
            <p>Piotr Czechowski<br>e‑mail: magazynproduktowapp@gmail.com</p>
        `
    }
};

// Set language function
function setLanguage(lang) {
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Update page title
    document.title = lang === 'en' ? 'ShelfNest - Track Your Profits and Losses' : 'ShelfNest - Śledź swoje zyski i straty';

    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language
document.addEventListener('DOMContentLoaded', function() {
    // Set preferred language or default to English
    const preferredLang = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(preferredLang);

    // Add click events to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });

    // Hero image rotation
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        let currentImage = 1;
        const totalImages = 14;
        const interval = 2000;

        function changeImage() {
            heroImage.style.opacity = 0;
            setTimeout(() => {
                currentImage++;
                if (currentImage > totalImages) currentImage = 1;
                heroImage.src = `${currentImage}.jpg`;
                heroImage.style.opacity = 1;
            }, 400);
        }

        setInterval(changeImage, interval);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .download-content, .hero-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Page load transition
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});