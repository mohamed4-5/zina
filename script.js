document.addEventListener('DOMContentLoaded', () => {
    const piece = document.getElementById('puzzle-piece');
    const dropZone = document.getElementById('drop-zone');
    const girlReveal = document.getElementById('girl-reveal');

    // 1. كود الكمبيوتر (Mouse Drag & Drop)
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

    // 2. كود الموبايل (Touch Events)
    piece.addEventListener('touchmove', (e) => {
        e.preventDefault(); // منع الصفحة من السكرول أثناء التحريك
        const touch = e.touches[0];
        
        // تحريك القطعة مع صباعك
        piece.style.position = 'absolute';
        piece.style.left = (touch.clientX - 75) + 'px';
        piece.style.top = (touch.clientY - 75) + 'px';
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

    // دالة واحدة موحدة للأكشن عشان ما نكررش الكود
    function performDropAction() {
        dropZone.classList.add('fade-out');
        piece.classList.add('fade-out');
        setTimeout(() => {
            girlReveal.classList.add('show-girl');
        }, 500);
    }
});
