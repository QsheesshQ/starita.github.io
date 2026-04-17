window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".intro-screen").style.display = "none";
        window.scrollTo(0, 0);
    }, 2500);
});


const film = document.querySelector(".film-transition");

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;

        film.classList.add("active");

        setTimeout(() => {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
            film.classList.remove("active");
        }, 600);
    });
});


const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});


const skillBars = document.querySelectorAll('.skill-fill');

window.addEventListener("scroll", () => {
    skillBars.forEach(bar => {
        const parent = bar.closest('.skills');

        if (parent && parent.getBoundingClientRect().top < window.innerHeight - 50) {
            bar.style.width = bar.getAttribute("data-width");
        } else {
            bar.style.width = "0%";
        }
    });
});


const light = document.querySelector(".cursor-light");

document.addEventListener("mousemove", (e) => {
    if (!light) return;
    light.style.left = e.clientX - 150 + "px";
    light.style.top = e.clientY - 150 + "px";
});


document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 200;
    const y = (window.innerHeight / 2 - e.pageY) / 200;

    document.querySelectorAll(".home-img img, .about-img img").forEach(el => {
        el.style.transform = `translate(${x}px, ${y}px)`;
    });
});


const modal = document.createElement('div');
modal.classList.add('modal');

modal.innerHTML = `
    <span class="close">&times;</span>
    <img class="modal-content">
    <div class="modal-caption"></div>
`;

document.body.appendChild(modal);

const modalImg = modal.querySelector('.modal-content');
const caption = modal.querySelector('.modal-caption');
const closeBtn = modal.querySelector('.close');

const portfolioItems = document.querySelectorAll('.portfolio-item img');

portfolioItems.forEach(img => {
    img.addEventListener('click', () => {
        modal.classList.add('active');
        modalImg.src = img.src;
        caption.textContent = img.dataset.caption || "";
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.onclick = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
};

modal.onclick = (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
};


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.style.background = 'rgba(0,0,0,0.7)';
    } else {
        header.style.background = 'transparent';
    }
});


document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("CurriculumVitaeModal");
    const closeBtn = document.querySelector(".CurriculumVitae-wrapper .close");

    window.openCurriculumVitae = function () {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    window.closeCurriculumVitae = function () {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    };

    if (closeBtn) {
        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            closeCurriculumVitae();
        });
    }

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeCurriculumVitae();
        }
    });

});

window.addEventListener("click", (e) => {
    const modal = document.getElementById("CurriculumVitaeModal");

    if (e.target === modal) {
        closeCurriculumVitae();
    }
});

function filterSelection(category, event) {
    const items = document.querySelectorAll('.portfolio-item');

    items.forEach(item => {
        if (category === 'all') {
            item.classList.add('show');
        } else {
            if (item.classList.contains(category)) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        }
    });

    const buttons = document.querySelectorAll('.portfolio-filter .btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (event) {
        event.currentTarget.classList.add('active');
    }
}

window.addEventListener("load", () => {
    filterSelection('all');
});
const skills = document.querySelectorAll(".skill");

window.addEventListener("scroll", () => {
    skills.forEach(skill => {
        const rect = skill.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {

            const fill = skill.querySelector(".skill-fill");
            const percent = skill.querySelector(".percent");
            const target = percent.getAttribute("data-target");

            fill.style.width = target + "%";

            let count = 0;
            let interval = setInterval(() => {
                if (count >= target) {
                    clearInterval(interval);
                } else {
                    count++;
                    percent.textContent = count + "%";
                }
            }, 15);
        }
    });
});
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    if (nav) {
        nav.classList.toggle("active");
    }
}
function openCert(img) {
    const modal = document.getElementById("certModal");
    const preview = document.getElementById("certPreview");

    preview.src = img.src;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeCert() {
    document.getElementById("certModal").classList.remove("active");
    document.body.style.overflow = "auto";
}
