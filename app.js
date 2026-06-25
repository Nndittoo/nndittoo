 const projects = [
            {
                title: "Desain Admin Dashboard",
                category: "Web Design",
                desc: "Antarmuka dashboard analitik komprehensif untuk mengelola aktivitas donasi.",
                purpose: "Memudahkan pengguna untuk memantau metrik donasi secara real-time melalui grafik interaktif yang bersih dan tidak membingungkan.",
                fullDesc: "Projek ini berfokus pada visualisasi data yang kompleks menjadi antarmuka ramah pengguna. Saya menggunakan palet netral untuk dashboard utama dan menyoroti data penting seperti profit dengan Emerald. Integrasi API dirancang agar data dimuat instan tanpa refresh halaman.",
                image: "project/Dashboard.png",
                tags: ["UI/UX Design", "Web Design", "Figma"],
                figma: "https://www.figma.com/design/ioXvdT07Jq0H1L7rBbX0mM/Admin-Dashboard?node-id=0-1&t=G612wwl189lyNDOG-1"
            },
            {
                title: "Desain Aplikasi Food Bridge",
                category: "Mobile Design",
                desc: "Desain aplikasi untuk mengurangi kasus kelaparan di Indonesia.",
                purpose: "Untuk membantu penyebaran donasi seluruh Indonesia lebih cepat dan effisien secara transparant",
                fullDesc: "FoodBridge adalah sebuah inovasi terpadu yang menggabungkan aplikasi distribusi makanan dan platform donasi untuk mendorong partisipasi aktif komunitas dalam mengatasi masalah kelaparan secara berkelanjutan dan meningkatkan kesejahteraan di Indonesia. FoodBridge memiliki fokus utama menghubungkan antar komunitas yang memiliki visi untuk menyelesaikan masalah kelaparan di Indonesia. Aplikasi ini juga bertujuan untuk menciptakan lingkungan yang lebih baik melalui kesadaran, motivasi, edukasi dan pemberdayaan pengguna.",
                image: "project/foodBridge.png",
                tags: ["UI/UX Design", "Figma", "Prototyping"],
                youtube: "https://www.youtube.com/watch?v=za79JWoDUiY",
                figma: "https://www.figma.com/file/qMW6IQcoMQZCPcd1kvOgbU/Untitled"
            },
            {
                title: "Hydroponix Website",
                category: "Full Stack Web Development",
                desc: "Website penyedia cara memelihara tanaman hydro yang efisien untuk petani pemula.",
                purpose: "Memberikan bagaimana cara menanam sampai memanen tanaman hydroponix dari rumah untuk petani.",
                fullDesc: "Petani yang ada di area perkotaan sangatlah menyayangkan kemampuan mereka yang telah mereka dapatkan di area lahan tanaman. Dengan website ini, tanaman berupa tanaman hydroponix dapat menanam di area rumah. Web ini dibangun dengan adanya fitur gamifikasi untuk membuat pengguna lebih tertarik dan lebih paham menanam tanaman hydroponix. Tidak lupa juga, website ini memiliki fitur pedoman berupa dokumen tata cara menanam dengan baik.",
                image: "project/hydro.png",
                tags: ["Web Development", "Laravel", "MySql"],
                github: "https://github.com/Nndittoo/hydrophonix"
            },
            {
                title: "Desain Aplikasi Taniku",
                category: "Mobile Design",
                desc: "Desain aplikasi taniku untuk membantu para petani di Indonesia",
                purpose: "Meningkatkan Produktivitas petani Indonesia dalam menanam buah dan sayuran.",
                fullDesc: "Mengembangkan desain aplikasi yang nyaman dan friendly bagi para petani Indonesia, aplikasi ini menyidiakan harga buah dan sayuran secara realtime untuk membantu petani dalam memutuskan untuk menanam dan membawanya ke distributor.",
                image: "project/taniku.png",
                tags: ["Figma", "UI/UX Design", "Mobile Design"],
                figma: "https://www.figma.com/file/utfR1PfHNmQuYkyeoRwgsl/Design-Sistem"
            },
            {
                title: "Desain Aplikasi Tikdon",
                category: "Mobile Design",
                desc: "Desain aplikasi untuk donasi lewat tiket konser",
                purpose: "Aplikasi pemesanan tiket konser dengan donasi sebagai bentuk kepedulian sesama.",
                fullDesc: "Aplikasi ini merupakan solusi digital yang mengintegrasikan sistem ticketing hiburan dengan fitur crowdfunding sosial. Tujuan utamanya adalah memudahkan penikmat musik untuk berkontribusi pada kampanye amal saat bertransaksi. Dengan fitur donasi yang disematkan langsung pada proses pembayaran—baik melalui pembulatan harga, donasi opsional, maupun tiket khusus amal—platform ini mendefinisikan ulang cara kita menikmati hiburan sambil mempertahankan rasa kepedulian terhadap sesama.",
                image: "project/tikdon.png",
                tags: ["Figma", "Mobile Design", "UI?UX Design"],
                figma: "https://www.figma.com/file/4ggQakEAk6HKmG6rB94oxf/Projek-1"
            },
            {
                title: "Website Momatic",
                category: "Front End Web Dev",
                desc: "Sistem yang mampu mencatat hasil rapat serta menyimpannya untuk memudahkan pengguna dalam memantau keberlangsungan projek.",
                purpose: "Mencatat dan menyimpan hasil rapat sebuah perusahaan untuk memantau dan memudahkan dalam evaluasi kinerja perusahaan.",
                fullDesc: "Website ini dikembangkan untuk memudahkan pemantauan dan proses evaluasi PT Telkom Indonesia. Website ini dibangun dengan Laravel, Tailwind Css, dan Vue yang memiliki fitur pengingat otomatis ke google kalendar terkait tugas dan target yang sudah dekat denagn timeline. Dengan fitur tersebut, pegawai dan pekerja di PT Telkom dapat mengetahui job mereka sudah selesai, medekati deadline, atau juga sudah terlambat.",
                image: "project/mom.jpg",
                tags: ["Laravel", "Web Dev", "Taiilwind CSS"],
                github: "https://github.com/Nndittoo/MoM"
            },
            {
                title: "E-Learning Platform",
                category: "Web App",
                desc: "Platform kursus online dengan integrasi video streaming interaktif.",
                purpose: "Memberikan pengalaman belajar yang imersif bagi siswa dari berbagai daerah.",
                fullDesc: "Sistem E-Learning lengkap dengan fitur kuis interaktif, sertifikat otomatis, dan analitik kemajuan belajar siswa. Sistem ini dikembangkan dalam bentuk website yang responsive, sehingga pengguna seperti siswa mampu menggunakan sistem ini dengan efisien dan efektif.",
                image: "project/flora.png",
                tags: ["Full Stack Web Dev", "Laravel", "Filament"],
                github: "https://github.com/Nndittoo/Rumbel-Mis-Flora",
            },
            {
                title: "Chatbot With Gimini API",
                category: "AI",
                desc: "Memanfaatkan API dari Gemini untuk membangun sebuah chatbot yang mampu menjawab semua pertanyaan pengguna",
                purpose: "Chatbot ini mampu mengambil pengetahuan tambahan dari file yang disimpan dalam database, dengan pengetahuan tersebut, pengguna mampu bertanya terkait file tersebut tanpa harus membacanya.",
                fullDesc: "Untuk mengatasi masalah waktu dalam membaca semua dokumen dalam perusahaan, chatbot ini dikembangkan dengan memanfaatkan API dari Gemini untuk membantu manusia terhubung dengan komputer. Dengan chatbot ini, pengguna dapat mengunggah file yang ingin ditanya atau dibaca ke database, lalu mengisi perintah ke chatbot untuk melakukan analisis terhadap file tersebut.",
                image: "https://placehold.co/1000x600/000000/10b981?text=CHATBOT+GEMINI+API",
                tags: ["Full Stack Web Dev", "Laravel", "Filament"],
                github: "https://github.com/Nndittoo/Chatbot-GeminiAPI-MySQL",
            },
            {
                title: "Simple Portofolio Website",
                category: "Web Dev",
                desc: "Portofolio sederhana dengan tampilan one page untuk mempelajari html dan css dasar.",
                purpose: "Untuk menguji pemahaman dalam pengembangan website sederhana menggunakan html dan css.",
                fullDesc: "Website ini dikembangkan untuk menguji pengetahuan saya dalam pengembangan website. Projek ini saya kembangkan dengan html dan css yang sederhana dengan tema mini portofolio",
                image: "project/staticPorto.png",
                tags: ["html", "css", "static website"],
                github: "https://github.com/Nndittoo/staticPortofolio",
            },
            {
                title: "Aplikasi Interaktif Widget",
                category: "Mobile Dev",
                desc: "Aplikasi yang menyediakan widget yang interaktif. Dengan aplikasi ini ",
                purpose: "Untuk menguji pemahaman saya terkait dengan flutter, saya mengimplementasikannya ke sebuah aplikasi dengan widget yang interaktif.",
                fullDesc: "Aplikasi ini dibangun dengan framework Flutter yang berisi widget interaktif yang dapat membuat pengguna tertarik dalam menggunakan aplikasi ini. Aplikasi ini menyediakan widget interaktif seperti drag and drop, dragable content, animation section, dan sebagainya.",
                image: "https://placehold.co/1000x600/000000/10b981?text=INTERACTIVE+APP",
                tags: ["Flutter", "Mobile App Dev"],
                github: "https://github.com/Nndittoo/interactive_app",
            }
        ];

        // Inisialisasi Lenis (Smooth Scroll)
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
        });

        function raf(time) { 
            lenis.raf(time); 
            requestAnimationFrame(raf); 
        }
        requestAnimationFrame(raf);

        // Integrasi GSAP ScrollTrigger & Lenis
        gsap.registerPlugin(ScrollTrigger);
        
        // Logika Logo Putar Realtime dengan Scroll
        const centerLogo = document.getElementById('center-logo');
        lenis.on('scroll', (e) => {
            ScrollTrigger.update();
            if(centerLogo) {
                // Berputar halus mengikuti pergerakan scroll
                centerLogo.style.transform = `rotate(${e.animatedScroll * 0.15}deg)`;
            }
        });
        
        gsap.ticker.add((time) => { lenis.raf(time * 1000); });
        gsap.ticker.lagSmoothing(0, 0);

        // Inisialisasi Three.js untuk Background
        const canvas = document.getElementById('bg-3d-canvas');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 25;

        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Geometri Abstrak Emerald
        const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
        const material = new THREE.MeshBasicMaterial({ 
            color: 0x10b981, 
            wireframe: true, 
            transparent: true,
            opacity: 0.15 
        });
        const abstractShape = new THREE.Mesh(geometry, material);
        scene.add(abstractShape);

        let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);
        });

        function animate3D() {
            requestAnimationFrame(animate3D);
            abstractShape.rotation.x += 0.001; 
            abstractShape.rotation.y += 0.002;
            
            targetX = mouseX * 0.001;
            targetY = mouseY * 0.001;
            abstractShape.rotation.y += 0.05 * (targetX - abstractShape.rotation.y);
            abstractShape.rotation.x += 0.05 * (targetY - abstractShape.rotation.x);
            
            renderer.render(scene, camera);
        }
        animate3D();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Inisialisasi Custom Cursor & Magnetic Button
        const cursorDot = document.getElementById('cursor-dot');
        const cursorOutline = document.getElementById('cursor-outline');
        let cursorX = 0, cursorY = 0, outlineX = 0, outlineY = 0;

        if(window.matchMedia("(hover: hover)").matches) {
            window.addEventListener('mousemove', (e) => {
                cursorX = e.clientX; cursorY = e.clientY;
                cursorDot.style.left = `${cursorX}px`; cursorDot.style.top = `${cursorY}px`;
            });

            const renderCursor = () => {
                outlineX += (cursorX - outlineX) * 0.2;
                outlineY += (cursorY - outlineY) * 0.2;
                cursorOutline.style.left = `${outlineX}px`; cursorOutline.style.top = `${outlineY}px`;
                requestAnimationFrame(renderCursor);
            };
            requestAnimationFrame(renderCursor);

            // Efek membesar saat hover link/tombol
            const hoverTargets = document.querySelectorAll('.hover-target, a, button');
            hoverTargets.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursorOutline.style.transform = `translate(-50%, -50%) scale(1.5)`;
                    cursorOutline.style.backgroundColor = 'transparent';
                });
                el.addEventListener('mouseleave', () => {
                    cursorOutline.style.transform = `translate(-50%, -50%) scale(1)`;
                });
            });

            // Tombol Magnetic
            document.querySelectorAll('.magnetic-btn').forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
                    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
                    gsap.to(btn, { x: x, y: y, duration: 0.5, ease: "power2.out" });
                });
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.3)" });
                });
            });

            // Efek 3D Tilt Reusable
            window.applyTiltEffect = function(el) {
                const target = el.querySelector('.tilt-content') || el.children[1] || el.children[0];
                if (!target) return;
                el.addEventListener('mousemove', (e) => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left; 
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -15; 
                    const rotateY = ((x - centerX) / centerX) * 15;
                    gsap.to(target, { rotationX: rotateX, rotationY: rotateY, transformPerspective: 1000, ease: "power2.out", duration: 0.5 });
                });
                el.addEventListener('mouseleave', () => {
                    gsap.to(target, { rotationX: 0, rotationY: 0, ease: "power3.out", duration: 0.8 });
                });
            };

            // Terapkan pada elemen statis yang sudah ada (Hero, About)
            document.querySelectorAll('.tilt-element').forEach(el => {
                if(!el.closest('#projects-container')) {
                    window.applyTiltEffect(el);
                }
            });
        }

        // --- SISTEM PAGINATION DAN RENDER KARTU PROJEK ---
        const projectContainer = document.getElementById('projects-container');
        const paginationContainer = document.getElementById('pagination-controls');
        
        const itemsPerPage = 6;
        let currentPage = 1;
        let isFirstRender = true;

        function renderProjects(page) {
            if (!projectContainer) return;
            
            // Bersihkan kontainer
            projectContainer.innerHTML = '';
            
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const paginatedProjects = projects.slice(startIndex, endIndex);

            paginatedProjects.forEach((project, index) => {
                const originalIndex = startIndex + index;
                const card = document.createElement('div');
                card.className = "tilt-element group cursor-pointer flex flex-col bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl hover:border-brand-100 transition-all duration-500 hover:-translate-y-2 pb-6";
                card.onclick = () => openModal(originalIndex);
                
                card.innerHTML = `
                    <div class="relative overflow-hidden rounded-t-3xl aspect-[4/3] mb-6 w-full transform-style-preserve-3d tilt-content">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110">
                        <div class="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/10 transition-colors duration-500"></div>
                    </div>
                    <div class="flex flex-col flex-grow px-6">
                        <div class="flex flex-wrap gap-2 mb-3">
                            <span class="px-3 py-1 bg-brand-50 text-brand-600 border border-brand-100 text-[10px] font-bold rounded-full uppercase tracking-wider">${project.category}</span>
                        </div>
                        <h3 class="font-display text-2xl font-bold text-brand-900 group-hover:text-brand-500 transition-colors mb-2">${project.title}</h3>
                        <p class="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">${project.desc}</p>
                        <div class="flex items-center gap-2 text-sm font-bold text-brand-500 mt-auto group-hover:text-brand-600 transition-colors">
                            Lihat Detail <span class="transform transition-transform group-hover:translate-x-2">&rarr;</span>
                        </div>
                    </div>
                `;
                projectContainer.appendChild(card);
                
                // Terapkan efek 3D tilt pada kartu yang baru dibuat jika mendukung hover
                if(window.matchMedia("(hover: hover)").matches && window.applyTiltEffect) {
                    window.applyTiltEffect(card);
                }
            });

            renderPaginationControls();

            // Animasi kemunculan kartu
            if (isFirstRender) {
                // Untuk pertama kali load, gunakan ScrollTrigger agar muncul saat di-scroll ke area ini
                gsap.fromTo(projectContainer.children, 
                    { y: 50, opacity: 0 },
                    { scrollTrigger: { trigger: "#projects", start: "top 75%" }, y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.2)" }
                );
                isFirstRender = false;
            } else {
                // Untuk perpindahan halaman, gunakan animasi langsung tanpa ScrollTrigger
                gsap.fromTo(projectContainer.children, 
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
                );
            }
        }

        function renderPaginationControls() {
            if (!paginationContainer) return;
            paginationContainer.innerHTML = '';
            
            const totalPages = Math.ceil(projects.length / itemsPerPage);
            if (totalPages <= 1) return; // Sembunyikan pagination jika hanya 1 halaman

            // Tombol Prev
            const prevBtn = document.createElement('button');
            prevBtn.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>';
            prevBtn.className = `w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${currentPage === 1 ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-brand-900 hover:bg-brand-500 hover:text-white hover:border-brand-500'}`;
            prevBtn.disabled = currentPage === 1;
            prevBtn.onclick = () => {
                if (currentPage > 1) {
                    currentPage--;
                    renderProjects(currentPage);
                    lenis.scrollTo('#projects', { offset: -50, duration: 1 });
                }
            };
            paginationContainer.appendChild(prevBtn);

            // Tombol Angka Halaman
            for (let i = 1; i <= totalPages; i++) {
                const pageBtn = document.createElement('button');
                pageBtn.innerText = i;
                if (i === currentPage) {
                    pageBtn.className = 'w-10 h-10 rounded-full flex items-center justify-center bg-brand-500 text-white font-bold shadow-md shadow-brand-500/30 transform scale-110 transition-transform';
                } else {
                    pageBtn.className = 'w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 text-brand-900 hover:border-brand-500 hover:text-white hover:border-brand-500 transition-colors font-medium';
                }
                pageBtn.onclick = () => {
                    currentPage = i;
                    renderProjects(currentPage);
                    lenis.scrollTo('#projects', { offset: -50, duration: 1 });
                };
                paginationContainer.appendChild(pageBtn);
            }

            // Tombol Next
            const nextBtn = document.createElement('button');
            nextBtn.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>';
            nextBtn.className = `w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${currentPage === totalPages ? 'border-gray-200 text-gray-300 cursor-not-allowed' : 'border-gray-300 text-brand-900 hover:bg-brand-500 hover:text-white hover:border-brand-500'}`;
            nextBtn.disabled = currentPage === totalPages;
            nextBtn.onclick = () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    renderProjects(currentPage);
                    lenis.scrollTo('#projects', { offset: -50, duration: 1 });
                }
            };
            paginationContainer.appendChild(nextBtn);
        }

        // Render proyek saat pertama kali dimuat
        renderProjects(currentPage);

        // Animasi GSAP
        const tl = gsap.timeline();
        tl.to(".hero-title span", { y: 0, duration: 1, stagger: 0.1, ease: "back.out(1.2)", delay: 0.2 })
          .fromTo(".hero-anim", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.6");

        gsap.fromTo(".gsap-about", 
            { y: 50, opacity: 0 },
            { scrollTrigger: { trigger: "#about", start: "top 75%" }, y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
        gsap.fromTo(".gsap-project-header", 
            { y: 30, opacity: 0 },
            { scrollTrigger: { trigger: "#projects", start: "top 80%" }, y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
        gsap.fromTo(".gsap-contact", 
            { scale: 0.9, opacity: 0 },
            { scrollTrigger: { trigger: "#contact", start: "top 75%" }, scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
        );

        // Animasi Widget Metrik
        gsap.fromTo(".gsap-metric", 
            { y: 30, opacity: 0 },
            { scrollTrigger: { trigger: ".gsap-metric", start: "top 85%" }, y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "back.out(1.2)" }
        );

        // Navbar Scrollspy & Background Transparency
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".nav-link");
        const navbar = document.getElementById("navbar");

        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute("id");
                    navLinks.forEach(link => {
                        const underline = link.querySelector('span');
                        if (link.getAttribute("href") === `#${currentId}`) {
                            link.classList.add("text-brand-900", "font-semibold");
                            link.classList.remove("text-gray-500", "font-medium");
                            if(underline) underline.classList.replace('scale-x-0', 'scale-x-100');
                        } else {
                            link.classList.add("text-gray-500", "font-medium");
                            link.classList.remove("text-brand-900", "font-semibold");
                            if(underline) underline.classList.replace('scale-x-100', 'scale-x-0');
                        }
                    });
                }
            });
        }, { rootMargin: "-40% 0px -60% 0px", threshold: 0 });
        
        sections.forEach(section => navObserver.observe(section));

        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.remove("bg-transparent", "border-transparent");
                navbar.classList.add("bg-white/80", "backdrop-blur-md", "border-gray-100");
            } else {
                navbar.classList.add("bg-transparent", "border-transparent");
                navbar.classList.remove("bg-white/80", "backdrop-blur-md", "border-gray-100");
            }
        });

        // Logika Modal Pop-up
        const modalOverlay = document.getElementById('modal-overlay');
        const modalContent = document.getElementById('modal-content');
        const modalBody = document.getElementById('modal-body');

        function openModal(index) {
            const project = projects[index];
            
            let linksHtml = '';
            if(project.github) {
                linksHtml += `<a href="${project.github}" target="_blank" class="px-5 py-3 bg-brand-900 text-white font-bold rounded-xl hover:bg-brand-800 transition-colors flex items-center justify-center gap-2 text-sm flex-1 sm:flex-none"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> Source Code GitHub</a>`;
            }
            if(project.youtube) {
                linksHtml += `<a href="${project.youtube}" target="_blank" class="px-5 py-3 bg-[#FF0000]/10 text-[#FF0000] font-bold rounded-xl hover:bg-[#FF0000]/20 transition-colors flex items-center justify-center gap-2 text-sm flex-1 sm:flex-none"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg> Tonton Video</a>`;
            }
            if(project.figma) {
                linksHtml += `<a href="${project.figma}" target="_blank" class="px-5 py-3 bg-[#A259FF]/10 text-[#A259FF] font-bold rounded-xl hover:bg-[#A259FF]/20 transition-colors flex items-center justify-center gap-2 text-sm flex-1 sm:flex-none"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M15.334 11.332A3.333 3.333 0 0 0 12 8H8.667v6.666h3.333a3.333 3.333 0 0 0 3.334-3.334z"/><path d="M15.334 4.667A3.333 3.333 0 0 0 12 1.334H8.667v6.666H12a3.333 3.333 0 0 0 3.334-3.333z"/><path d="M12 14.666H8.667v4A3.334 3.334 0 0 0 12 22a3.333 3.333 0 0 0 0-6.667zm0 0a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666z"/><path d="M8.667 1.334H5.334a3.333 3.333 0 0 0 0 6.666h3.333V1.334z"/><path d="M8.667 8H5.334a3.333 3.333 0 0 0 0 6.666h3.333V8z"/></svg> Lihat di Figma</a>`;
            }

            modalBody.innerHTML = `
                <div class="w-full bg-brand-50 relative rounded-t-[2rem] overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="w-full max-h-[50vh] object-cover object-center">
                </div>
                <div class="p-8 md:p-12">
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.tags.map(tag => `<span class="px-3 py-1.5 bg-brand-50 text-brand-600 border border-brand-100 text-[11px] font-bold rounded-full uppercase tracking-wide">${tag}</span>`).join('')}
                    </div>
                    
                    <h2 class="font-display text-3xl md:text-5xl font-extrabold mb-8 text-brand-900">${project.title}</h2>
                    
                    <div class="mb-8">
                        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <svg class="w-4 h-4 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> Tujuan Utama
                        </h4>
                        <p class="text-gray-700 leading-relaxed text-base font-medium bg-brand-50 p-5 rounded-2xl border border-brand-100">${project.purpose}</p>
                    </div>

                    <div class="mb-10">
                        <h4 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg> Keterangan Teknis
                        </h4>
                        <p class="text-gray-600 leading-relaxed text-base text-justify">${project.fullDesc}</p>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4 border-t border-gray-100 pt-8 mt-4">
                        ${linksHtml}
                    </div>
                </div>
            `;
            
            modalOverlay.classList.remove('hidden');
            modalOverlay.classList.add('modal-enter-active');
            modalContent.classList.add('modal-content-enter');
            lenis.stop(); // Hentikan background scroll
            if(cursorOutline) cursorOutline.style.display = 'none';
        }

        function closeModal() {
            modalOverlay.classList.remove('modal-enter-active');
            modalContent.classList.remove('modal-content-enter');
            modalOverlay.classList.add('modal-exit-active');
            setTimeout(() => {
                modalOverlay.classList.add('hidden');
                modalOverlay.classList.remove('modal-exit-active');
                lenis.start(); // Jalankan background scroll lagi
                if(cursorOutline) cursorOutline.style.display = 'block';
            }, 300);
        }
        
        modalOverlay.addEventListener('click', (e) => { 
            if (e.target === modalOverlay || e.target.parentElement === modalOverlay && e.target.id !== 'modal-content') {
                closeModal();
            } 
        });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modalOverlay.classList.contains('hidden')) closeModal(); });

        // Menu Mobile Drawer
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileOverlay = document.getElementById('mobile-overlay');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileOverlay.classList.remove('hidden');
                setTimeout(() => mobileOverlay.classList.remove('opacity-0'), 10);
                mobileMenu.classList.remove('translate-x-full');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                lenis.stop();
            } else {
                mobileOverlay.classList.add('opacity-0');
                mobileMenu.classList.add('translate-x-full');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                setTimeout(() => mobileOverlay.classList.add('hidden'), 500);
                lenis.start();
            }
        }
        mobileMenuBtn.addEventListener('click', toggleMenu);
        mobileOverlay.addEventListener('click', toggleMenu);
        mobileNavLinks.forEach(link => link.addEventListener('click', () => { if (isMenuOpen) toggleMenu(); }));

        // Smooth Scroll Interception untuk semua Navigasi
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#' || !document.querySelector(targetId)) return;
                
                // Mencegah lompatan instan bawaan browser
                e.preventDefault();
                
                // Menggunakan Lenis untuk scroll super mulus ke section tujuan
                lenis.scrollTo(targetId, { 
                    offset: 0, 
                    duration: 1.5, // Waktu tempuh scroll (1.5 detik)
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Efek pelambatan fisika
                });
            });
        });