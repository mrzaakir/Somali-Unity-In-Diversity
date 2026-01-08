// Qeybta_mobile_menu.js
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });



        // Qeybta_Gallery_Data
        const galleryItems = [
            {
                id: 1,
                category: "traditional",
                title: "Somali Traditional Art",
                description: "Dharka dirac iyo guntiinooyinku waa dharka dhaqanka Soomaalida ee ay xirtaan dumarku, badanaa leh qaabab adag iyo midabyo dhalaalaya.",
                image: "/img/dirac-guntiino.jpeg"
            },
            {
                id: 2,
                category: "cuisine",
                title: "Somali breakfast",
                description: "Canjeero (Somali pancake) oo lagu daray suqaar (diced meat) iyo muus oo lagu daray koob shaah ah, quraac dhaqameed.",
                image: "/img/canjeero-Suqar.jpeg"
            },
            {
                id: 3,
                category: "arts",
                title: "Somali Gabayga & Heesaha",
                description: "Gabaygu wuxuu meel gaar ah ka leeyahay dhaqanka Soomaalida, badanaa waxaa la socda aaladaha dhaqanka sida oud-ka iyo durbaanka.",
                image: "/img/som-music.jpg"
            },
            {
                id: 4,
                category: "traditional",
                title: "Dhaxalka Reer Guuraaga",
                description: "Qarniyo badan, Soomaali badan ayaa ku noolaa qaab nololeed reer guuraa ah, iyagoo geel, riyo, iyo ido ku dhaqayay Geeska Afrika.",
                image: "/img/safar.jpg"
            },
            {
                id: 5,
                category: "modern",
                title: "Modern Mogadishu",
                description: "Magaalada caasimadda ah ee Muqdisho waxay la kulmaysaa dib-u-soo-nooleyn iyadoo la horumarinayo horumarro cusub iyadoo la ilaalinayo goobaha taariikhiga ah.",
                image: "/img/Dahab-Tawar.jpg"
            },
            {
                id: 6,
                category: "arts",
                title: "Beerta Xamar",
                description: "Naqshadaha beerta Xamar ee adag waa qayb muhiim ah oo ka mid ah dabaaldegyada Soomaalida, gaar ahaan aroosyada iyo dabaaldegyada Ciidda.",
                image: "/img/Beerta-Xamar.jpg"
            },
            {
                id: 7,
                category: "cuisine",
                title: "Somali Tea Ceremony",
                description: "Shaah (Shaah Soomaali ah) waa shaah kulul oo la cubo maalinta oo dhan, badanaa waxaa la socda heel, qorfe, iyo sinjibiil.",
                image: "/img/Tea.jpg"
            },
            {
                id: 8,
                category: "modern",
                title: "Somali Entrepreneurship",
                description: "Soomaalida waxaa lagu yaqaanaa ruuxooda ganacsi, iyagoo leh ganacsiyo kobcaya oo ku saabsan ganacsiga, tignoolajiyada, iyo adeegyada.",
                image: "/img/Ganacsi.jpg"
            }
        ];





    // Qeybta_History_Timeline_Data
        const timelineItems = [
            {
                year: "1st Century AD: Ancient Times",
                title: "Ancient Civilizations",
                description: "Geeska Afrika wuxuu hoy u ahaa ilbaxnimooyin qadiimi ah oo soo jiray kumanaan sano, iyadoo Soomaaliya ay door muhiim ah ka ciyaartay shabakadaha ganacsiga ee hore.Dhulkii Punt (<Strong>Dhulki Fooxa iyo Dahabka</Strong>), oo lagu xusay qoraalladii Masar ee qadiimiga ah, ayaa la aaminsan yahay inuu ku yaalo ama uu hadda dhaco Dalka kuyaala Geeska Africa Soomaaliya."
            },
            {
                year: "7th-16th Century",
                title: "Arrival of Islam: Islamic Influence",
                description: "Imaatinkii Islaamka ee qarnigii 7aad wuxuu si qoto dheer u qaabeeyey dhaqanka, luqadda, iyo nidaamyada maamulka Soomaalida.Aasaaskii saldanada awoodda badan iyo dowlad-goboleedyada magaalooyinka xeebta dhaca ayaa fududeeyay ganacsiga iyo is-weydaarsiga dhaqanka.Islaamku wuxuu soo gaaray xeebta Soomaaliya iyagoo la ganacsanaya ganacsatada Carabta, ugu dambeyntiina wuxuu noqday diinta ugu faafida badan geeska Africa."
            },


            {
                year: "13th-17th Century",
                title: "Ajuran Sultanate",
                description: "Saldanadii Ajuran waxay ka mid noqotay boqortooyooyinka ugu awoodda badan Geeska Afrika iyadoo leh horumar(<Strong>hydraulic engineering</Strong>), Nidaamyo canshuur oo horumarsan, iyo difaac adag oo ka dhan ah duulaannada dibadda."
            },


            {
                year: "19th Century",
                title: "Colonial Period",
                description: "Dhammaadkii qarnigii 19aad wuxuu arkay awoodihii gumeysiga Yurub oo kala qaybiyay dhulalka Soomaalida, iyagoo abuuraya xuduudo macmal ah oo markii dambe saameyn ku yeelan doona Soomaaliyada casriga ah.In kasta oo xukunkii gumeysiga uu jiray, haddana aqoonsiga dhaqanka Soomaaliyeed wuxuu ahaa mid xooggan iyada oo loo marayo dhaqanka afka ah iyo shabakadaha bulshada.Kala boobki dhulkii Somaliyeed, Somaliland waxay noqotay maxmiyad Hoos imada Ingiriis ka, halka inta kale ee Soomaaliya ay noqotay Somali Talyaani, taasoo abuurtay kala qaybsanaan. Dhaqdhaqaaqa Derawish-ta, oo uu hoggaaminayay Sayid Maxamed Cabdullahi Xasan, ayaa ka soo horjeeda xukunkii gumeysiga."
            },
            



            {
                year: "1960",
                title: "Independence & Unity",
                description: "Luulyo 1, 1960, Jamhuuriyadda Soomaaliya waxaa la aasaasay iyada oo loo marayo midowgii (<strong>British Somaliland iyo Talyaani Somaliland</strong>), iyagoo midoobay si ay u sameeyaan Jamhuuriyadda Soomaaliya ee madaxa-bannaan. Qaranka cusub wuxuu qaatay nidaam dimuqraadi ah wuxuuna bilaabay geeddi-socodka dhismaha qaranka."
            },



            {
                year: "1991-Present",
                title: "Resilience & Rebuilding",
                description: "Burburkii dowladdii dhexe ee 1991-kii wuxuu horseeday xilli colaad iyo kala qaybsanaan ah. Iyadoo ay jiraan caqabado, Soomaalidu waxay muujinayaan adkeysi cajiib ah waxayna ka shaqeeyaan dib u dhiska iyo mideynta.Maanta, Soomaaliya waxay dib u dhiseysaa iyadoo diiradda saareysa federaalnimada, dib u heshiisiinta, iyo horumarinta dhaqaalaha iyadoo ilaalineysa dhaxalkeeda dhaqameed."
            }
        ];






        // Initialize Gallery
        const galleryGrid = document.getElementById('galleryGrid');
        
        function renderGallery(filter = 'all') {
            galleryGrid.innerHTML = '';
            
            const filteredItems = filter === 'all' 
                ? galleryItems 
                : galleryItems.filter(item => item.category === filter);
            
            filteredItems.forEach(item => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.setAttribute('data-category', item.category);
                galleryItem.innerHTML = `
                    <img src="${item.image}" alt="${item.title}" class="gallery-img">
                    <div class="gallery-content">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <button class="cta-button view-btn" data-id="${item.id}" style="padding: 10px 20px; font-size: 0.9rem;">View Details</button>
                    </div>
                `;
                galleryGrid.appendChild(galleryItem);
            });
            




            // Add event listeners to view buttons
            document.querySelectorAll('.view-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    const item = galleryItems.find(item => item.id === id);
                    openModal(item);
                });
            });
        }
        
        // Initialize Timeline
        const historyTimeline = document.querySelector('.history-timeline');
        
        function renderTimeline() {
            historyTimeline.innerHTML = '';
            
            timelineItems.forEach((item, index) => {
                const timelineItem = document.createElement('div');
                timelineItem.className = `timeline-item ${index % 2 === 0 ? 'even' : 'odd'}`;
                timelineItem.innerHTML = `
                    <div class="timeline-content">
                        <div class="timeline-year">${item.year}</div>
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                `;
                historyTimeline.appendChild(timelineItem);
            });
        }




        
        // Qeybta_Filter ka Gallery Items
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                // Filter gallery
                const filter = this.getAttribute('data-filter');
                renderGallery(filter);
            });
        });
        





    
        // Modal Functions
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const modalCaption = document.getElementById('modalCaption');
        const modalClose = document.getElementById('modalClose');
        
        function openModal(item) {
            modalImage.src = item.image;
            modalImage.alt = item.title;
            modalCaption.textContent = `${item.title}: ${item.description}`;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
        



        modalClose.addEventListener('click', closeModal);
        
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        




    
        // Qeybta_Sawirida_Somali_Map
        function drawSomaliMap() {
            const canvas = document.getElementById('somaliMap');
            const ctx = canvas.getContext('2d');
            
            // Set canvas dimensions
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            
            // Read CSS variable values
            const rootStyles = getComputedStyle(document.documentElement);
            const somaliBlue = rootStyles.getPropertyValue('--somali-blue').trim() || '#4189DD';
            
            // Draw simple outline of Somalia
            ctx.fillStyle = 'rgba(65, 137, 221, 0.2)';
            ctx.strokeStyle = somaliBlue;
            ctx.lineWidth = 2;
            
            // Draw a simplified Somalia shape
            ctx.beginPath();
            ctx.moveTo(100, 100);
            ctx.lineTo(300, 80);
            ctx.lineTo(500, 120);
            ctx.lineTo(700, 100);
            ctx.lineTo(800, 200);
            ctx.lineTo(700, 400);
            ctx.lineTo(500, 380);
            ctx.lineTo(300, 350);
            ctx.lineTo(100, 300);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            


            // Add label
            ctx.fillStyle = somaliBlue;
            ctx.font = 'bold 24px Arial';
            ctx.fillText('SOMALIA', 350, 250);
            


            // Draw coastline
            ctx.beginPath();
            ctx.moveTo(100, 100);
            ctx.bezierCurveTo(150, 50, 250, 60, 300, 80);
            ctx.bezierCurveTo(400, 100, 500, 120, 600, 110);
            ctx.bezierCurveTo(700, 100, 750, 150, 800, 200);
            ctx.strokeStyle = 'rgba(65, 137, 221, 0.8)';
            ctx.lineWidth = 3;
            ctx.stroke();
            


            // Draw capital marker
            ctx.fillStyle = '#D4AF37';
            ctx.beginPath();
            ctx.arc(450, 200, 10, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#333';
            ctx.font = 'bold 16px Arial';
            ctx.fillText('Mogadishu', 470, 205);
        }
        
        // Initialize everything when page loads
        window.addEventListener('DOMContentLoaded', () => {
            renderGallery();
            renderTimeline();
            drawSomaliMap();
            
            // Redraw map on window resize
            window.addEventListener('resize', drawSomaliMap);
        });




        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });




        // Animate stats counters
        function animateStats() {
            const statCards = document.querySelectorAll('.stat-card h3');
            
            statCards.forEach(stat => {
                const target = parseInt(stat.textContent);
                let current = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
                }, 20);
            });
        }


        // Qurxinta_Trigger stats animation when stats section is in view
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }

