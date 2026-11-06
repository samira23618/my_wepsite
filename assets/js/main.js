// بيانات  للمشروع
const eventsData = [
    {
        id: 1,
        title: "اليوم الثقافي الخاص",
        category: "ثقافة",
        categoryClass: "bg-success",
        date: "31 أكتوبر 2026",
        time: "10:00 صباحاً",
        location: "دمشق - المزة",
        image: "assets/img/ثقافة.jpg",
        description: "تبادل مع أصدقائك المأكولات والفنون المختلفة والأنشطة الثقافية المميزة في جو ترفيهي وتعليمي."
    },
    {
        id: 2,
        title: "مسابقة كرة السلة",
        category: "رياضة",
        categoryClass: "bg-warning text-dark",
        date: "05 نوفمبر 2026",
        time: "04:00 مساءً",
        location: "الملعب الرياضي",
        image: "assets/img/sport.jpg",
        description: "بطولات رياضية في كرة السلة مفتوحة لكافة الطلاب والكادر التدريسي للمنافسة على كأس البطولة."
    },
    {
        id: 3,
        title: "مسابقات الهاكاثون والابتكار",
        category: "مهني",
        categoryClass: "bg-info text-dark",
        date: "12 نوفمبر 2026",
        time: "09:00 صباحاً",
        location: "القاعة الرئيسية - دمشق",
        image: "assets/img/hackathon.jpg",
        description: "استضافة شركات ومؤسسات لإتاحة فرص التدريب والعمل للطلاب والخريجين وتطوير حلول برمجة مبتكرة."
    },
    {
        id: 4,
        title: "ليالي السينما المفتوحة",
        category: "عائلي",
        categoryClass: "bg-primary",
        date: "18 نوفمبر 2026",
        time: "06:00 مساءً",
        location: "ساحة الجامعة",
        image: "https://picsum.photos/400/250?random=12",
        description: "عرض أفلام وثائقية وأفلام من إعداد الطلاب في ساحات الجامعة المفتوحة بحضور عائلات الطلاب."
    },
    {
        id: 5,
        title: "ورش عمل تخصصية",
        category: "ورش عمل",
        categoryClass: "bg-danger",
        date: "25 نوفمبر 2026",
        time: "11:00 صباحاً",
        location: "المختبر المركزي",
        image: "assets/img/jop.jpg",
        description: "دورات سريعة وتطبيقية لتعلم مهارات سوق العمل وتقنيات البرمجة والشبكات الحديثة."
    },
    {
        id: 6,
        title: "مؤتمرات TEDx",
        category: "مهني",
        categoryClass: "bg-info text-dark",
        date: "01 ديسمبر 2026",
        time: "10:00 صباحاً",
        location: "المسرح الكبير",
        image: "assets/img/tedx.jpg",
        description: "منصة لمشاركة الطلاب والأساتذة قصص نجاحهم والتجارب الملهمة في الحياة الأكاديمية والمهنية."
    },
    {
        id: 7,
        title: "الأمسيات الشعرية ونوادي القراءة",
        category: "ثقافة",
        categoryClass: "bg-success",
        date: "21 أكتوبر 2026",
        time: "05:00 مساءً",
        location: "المكتبة المركزية",
        image: "assets/img/read.jpg",
        description: "مسابقات للارتجال الشعري ومناقشة كتب وروايات بشكل دوري ومساحة مفتوحة للمبدعين."
    },
    {
        id: 8,
        title: "بطولة الشطرنج الجامعية",
        category: "رياضة",
        categoryClass: "bg-warning text-dark",
        date: "19 أكتوبر 2026",
        time: "11:00 صباحاً",
        location: "المركز الطلابي",
        image: "assets/img/شطرنج.jpg",
        description: "تنافس مع أفضل العقول في الجامعة واظفر باللقب في بطولة الشطرنج السنوية."
    }
];

document.addEventListener("DOMContentLoaded", function () {

    // 1. إدارة تفاصيل الفعالية (event.html)
    const titleHero = document.getElementById('titleHero');
    if (titleHero) {
        const urlParams = new URLSearchParams(window.location.search);
        const eventId = urlParams.get('id') || 1;
        
        const currentEvent = eventsData.find(e => e.id == eventId) || eventsData[0];

        if (document.getElementById('titleHero')) document.getElementById('titleHero').textContent = currentEvent.title;
        if (document.getElementById('detailTitle')) document.getElementById('detailTitle').textContent = currentEvent.title;
        if (document.getElementById('desc')) document.getElementById('desc').textContent = currentEvent.description;
        if (document.getElementById('detailDate')) document.getElementById('detailDate').textContent = currentEvent.date;
        if (document.getElementById('detailTime')) document.getElementById('detailTime').textContent = currentEvent.time;
        if (document.getElementById('detailLoc')) document.getElementById('detailLoc').textContent = currentEvent.location;
        if (document.getElementById('mapLoc')) document.getElementById('mapLoc').textContent = currentEvent.location;
        if (document.getElementById('detailImg')) document.getElementById('detailImg').src = currentEvent.image;
        
        const tagElem = document.getElementById('detailTag');
        if (tagElem) {
            tagElem.textContent = currentEvent.category;
            tagElem.className = 'badge ' + currentEvent.categoryClass;
        }
    }

    // 2. إدارة الفلترة والبحث (events.html)
    const filterBtn = document.getElementById('filterBtn');
    if (filterBtn) {
        filterBtn.addEventListener('click', function () {
            const searchValue = document.getElementById('searchInput').value.toLowerCase().trim();
            const categoryValue = document.getElementById('categoryFilter').value.trim();

            const cards = document.querySelectorAll('.col-md-4');

            cards.forEach(card => {
                const titleElem = card.querySelector('.card-title');
                const descElem = card.querySelector('.card-text');
                const badgeElem = card.querySelector('.badge');

                const titleText = titleElem ? titleElem.textContent.toLowerCase() : '';
                const descText = descElem ? descElem.textContent.toLowerCase() : '';
                const badgeText = badgeElem ? badgeElem.textContent.trim() : '';

                const matchSearch = titleText.includes(searchValue) || descText.includes(searchValue);
                const matchCategory = (categoryValue === '') || (badgeText.includes(categoryValue));

                if (matchSearch && matchCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

   // 3. أزرار صفحة التفاصيل (التقويم والمشاركة)
    const calendarBtn = document.getElementById('calendar');
    const shareBtn = document.getElementById('share');
    const actionMsg = document.getElementById('actionMsg');

    if (calendarBtn) {
        calendarBtn.addEventListener('click', function () {
            if (actionMsg) {
                actionMsg.textContent = "تمت إضافة الفعالية إلى تقويمك بنجاح!";
                actionMsg.style.color = "green";
            }
        });
    }

    if (shareBtn) {
        shareBtn.addEventListener('click', function () {
            if (actionMsg) {
                actionMsg.textContent = "تم نسخ رابط الفعالية بنجاح!";
                actionMsg.style.color = "blue";
            }
        });
    }

  // 4. نموذج اتصل بنا (contact.html)
    const contactForm = document.getElementById('contactForm');
    const contactMsg = document.getElementById('contactMsg');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (contactMsg) {
                contactMsg.textContent = "تم إرسال بيانات النموذج والتحقق منها بنجاح!";
                contactMsg.style.color = "green";
            }
        });
    }
});