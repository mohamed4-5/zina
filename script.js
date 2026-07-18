document.addEventListener('DOMContentLoaded', () => {
    const piece = document.getElementById('puzzle-piece');
    const dropZone = document.getElementById('drop-zone');
    const girlReveal = document.getElementById('girl-reveal');
    const container = document.querySelector('.game-container'); // ضفنا ده عشان نحسب المسافة منه

    // متغيرات عشان نحفظ مكان اللمسة
    let offsetX, offsetY;

    // 1. كود الكمبيوتر (Mouse)
    piece.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'piece');
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault(); 
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        performDropAction();
    });

    // 2. كود الموبايل (Touch) - ده التعديل الصح
    piece.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        const rect = piece.getBoundingClientRect();
        // بنحسب الفرق بين مكان صباعك وأول القطعة عشان متتنططش
        offsetX = touch.clientX - rect.left;
        offsetY = touch.clientY - rect.top;
    });

    piece.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const containerRect = container.getBoundingClientRect();

        // بنحسب المكان الجديد بالنسبة للصندوق (Container) مش بالنسبة للشاشة
        const left = touch.clientX - containerRect.left - offsetX;
        const top = touch.clientY - containerRect.top - offsetY;

        piece.style.position = 'absolute';
        piece.style.left = left + 'px';
        piece.style.top = top + 'px';
        piece.style.margin = '0';
    }, {passive: false});

    piece.addEventListener('touchend', (e) => {
        const touch = e.changedTouches[0];
        const dropZoneRect = dropZone.getBoundingClientRect();

        // هل صباعك في نفس مكان القمر؟
        if (touch.clientX > dropZoneRect.left && 
            touch.clientX < dropZoneRect.right && 
            touch.clientY > dropZoneRect.top && 
            touch.clientY < dropZoneRect.bottom) {
            
            performDropAction();
        }
    });

    function performDropAction() {
        dropZone.classList.add('fade-out');
        piece.classList.add('fade-out');
        setTimeout(() => {
            girlReveal.classList.add('show-girl');
        }, 500);
    }
});
        if (touch.clientX > dropZoneRect.left && 
            touch.clientX < dropZoneRect.right && 
            touch.clientY > dropZoneRect.top && 
            touch.clientY < dropZoneRect.bottom) {
            
            performDropAction();
        }
    });

    // دالة واحدة موحدة للأكشن عشان ما نكررش الكود
    function performDropAction() {
        dropZone.classList.add('fade-out');
        piece.classList.add('fade-out');
        setTimeout(() => {
            girlReveal.classList.add('show-girl');
        }, 500);
    }
});
