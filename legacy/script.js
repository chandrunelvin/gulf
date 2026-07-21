const header = document.querySelector('header');
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const dropdown = document.querySelector('.dropdown');

function syncHeaderState() {
    if (!header) return;
    header.classList.toggle('header-scrolled', window.scrollY > 40);
}

syncHeaderState();
window.addEventListener('scroll', syncHeaderState, { passive: true });

burger?.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    navLinks?.classList.toggle('nav-active');
});

dropdown?.querySelector('a')?.addEventListener('click', (event) => {
    if (window.innerWidth <= 768) {
        event.preventDefault();
        dropdown.classList.toggle('active');
    }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const target = document.querySelector(targetId);
        if (!target) return;
        event.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 84;
        window.scrollTo({ top, behavior: 'smooth' });
        navLinks?.classList.remove('nav-active');
        burger?.classList.remove('toggle');
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .about-text, .about-image, .contact-info, .contact-form-container, .value-card, .team-header, .team-member, .partner-card, .collection-item, .brochure-card, .profile-doc-card, .intro-text').forEach((element) => {
    element.classList.add('reveal');
    observer.observe(element);
});

const galleryItems = [...document.querySelectorAll('.collection-item')];

if (galleryItems.length > 0) {
    const lightbox = document.createElement('div');
    lightbox.className = 'gallery-lightbox';
    lightbox.innerHTML = `
        <div class="gallery-lightbox-dialog">
            <button class="gallery-lightbox-close" type="button" aria-label="Close gallery">
                <i class="fas fa-times"></i>
            </button>
            <button class="gallery-lightbox-nav gallery-lightbox-prev" type="button" aria-label="Previous image">
                <i class="fas fa-chevron-left"></i>
            </button>
            <div class="gallery-lightbox-image-wrap">
                <img class="gallery-lightbox-image" src="" alt="Selected gallery image preview">
            </div>
            <button class="gallery-lightbox-nav gallery-lightbox-next" type="button" aria-label="Next image">
                <i class="fas fa-chevron-right"></i>
            </button>
            <div class="gallery-lightbox-caption">
                <span class="gallery-lightbox-title"></span>
                <span class="gallery-lightbox-counter"></span>
            </div>
        </div>
    `;

    document.body.appendChild(lightbox);

    const image = lightbox.querySelector('.gallery-lightbox-image');
    const title = lightbox.querySelector('.gallery-lightbox-title');
    const counter = lightbox.querySelector('.gallery-lightbox-counter');
    const closeButton = lightbox.querySelector('.gallery-lightbox-close');
    const prevButton = lightbox.querySelector('.gallery-lightbox-prev');
    const nextButton = lightbox.querySelector('.gallery-lightbox-next');
    let currentIndex = 0;

    function updateLightbox(index) {
        const item = galleryItems[index];
        const source = item.querySelector('img');
        const caption = item.querySelector('.overlay span')?.textContent || source?.alt || 'Gallery image';
        image.src = source?.src || '';
        image.alt = source?.alt || caption;
        title.textContent = caption;
        counter.textContent = `${index + 1} / ${galleryItems.length}`;
    }

    function openLightbox(index) {
        currentIndex = index;
        updateLightbox(currentIndex);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        updateLightbox(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        updateLightbox(currentIndex);
    }

    galleryItems.forEach((item, index) => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', 'Open gallery image');
        item.addEventListener('click', () => openLightbox(index));
        item.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openLightbox(index);
            }
        });
    });

    closeButton?.addEventListener('click', closeLightbox);
    nextButton?.addEventListener('click', showNext);
    prevButton?.addEventListener('click', showPrev);

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (event) => {
        if (!lightbox.classList.contains('active')) return;
        if (event.key === 'Escape') closeLightbox();
        if (event.key === 'ArrowRight') showNext();
        if (event.key === 'ArrowLeft') showPrev();
    });
}

const teamMembers = [...document.querySelectorAll('.team-member')];

if (teamMembers.length > 0) {
    const teamModal = document.createElement('div');
    teamModal.className = 'team-modal';
    teamModal.innerHTML = `
        <div class="team-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="teamModalName">
            <button class="team-modal-close" type="button" aria-label="Close team profile">
                <i class="fas fa-times"></i>
            </button>
            <div class="team-modal-image">
                <img class="team-modal-photo" src="" alt="Selected team member portrait">
            </div>
            <div class="team-modal-copy">
                <div class="team-modal-role"></div>
                <h3 class="team-modal-name" id="teamModalName"></h3>
                <p class="team-modal-bio"></p>
                <div class="team-modal-linkedin">
                    <i class="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(teamModal);

    const teamModalPhoto = teamModal.querySelector('.team-modal-photo');
    const teamModalRole = teamModal.querySelector('.team-modal-role');
    const teamModalName = teamModal.querySelector('.team-modal-name');
    const teamModalBio = teamModal.querySelector('.team-modal-bio');
    const teamModalClose = teamModal.querySelector('.team-modal-close');

    function openTeamModal(member) {
        const img = member.querySelector('img');
        teamModalPhoto.src = img?.src || '';
        teamModalPhoto.alt = img?.alt || member.dataset.teamName || 'Team member';
        teamModalRole.textContent = member.dataset.teamRole || '';
        teamModalName.textContent = member.dataset.teamName || img?.alt || '';
        teamModalBio.textContent = member.dataset.teamBio || '';
        teamModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeTeamModal() {
        teamModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    teamMembers.forEach((member) => {
        member.setAttribute('tabindex', '0');
        member.setAttribute('role', 'button');
        member.setAttribute('aria-label', `Open profile for ${member.dataset.teamName || 'team member'}`);

        member.addEventListener('click', () => openTeamModal(member));
        member.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openTeamModal(member);
            }
        });
    });

    teamModalClose?.addEventListener('click', closeTeamModal);

    teamModal.addEventListener('click', (event) => {
        if (event.target === teamModal) closeTeamModal();
    });

    document.addEventListener('keydown', (event) => {
        if (!teamModal.classList.contains('active')) return;
        if (event.key === 'Escape') closeTeamModal();
    });
}
