document.addEventListener('DOMContentLoaded', () => {
    const piece = document.getElementById('puzzle-piece');
    const dropZone = document.getElementById('drop-zone');
    const girlReveal = document.getElementById('girl-reveal');

    piece.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'piece');
    });

    // دي أهم حتة! لازم نمنع الحدث الافتراضي عشان يسمح بالرمي
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault(); 
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        
        // 1. اخفاء القمر والقطعة بأنيميشن
        dropZone.classList.add('fade-out');
        piece.classList.add('fade-out');
        
        // 2. إظهار البنت بعد ثانية (بعد ما القمر يختفي)
        setTimeout(() => {
            girlReveal.classList.add('show-girl');
        }, 1000);
    });

        // هنضيف ده جنب الـ event listener العادي بتاعك
    piece.addEventListener('touchend', (e) => {
        // نجيب مكان الإصبع على الشاشة
        const touch = e.changedTouches[0];
        const dropZoneRect = dropZone.getBoundingClientRect();

        // نتحقق: هل مكان الإصبع جوه الـ drop-zone؟
        if (touch.clientX > dropZoneRect.left && 
            touch.clientX < dropZoneRect.right && 
            touch.clientY > dropZoneRect.top && 
            touch.clientY < dropZoneRect.bottom) {
            
            // لو جوه، نشغل نفس كود الـ drop اللي أنت كاتبه
            dropZone.classList.add('fade-out');
            piece.classList.add('fade-out');
            setTimeout(() => {
                girlReveal.classList.add('show-girl');
            }, 500);
        }
    });
});

