document.addEventListener('DOMContentLoaded', () => {
    const piece = document.getElementById('puzzle-piece');
    const dropZone = document.getElementById('drop-zone');
    const girlReveal = document.getElementById('girl-reveal');

    // كود اللاب توب - سيبه زي ما هو
    piece.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'piece');
    });

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault(); 
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.add('fade-out');
        piece.classList.add('fade-out');
        setTimeout(() => {
            girlReveal.classList.add('show-girl');
        }, 1000);
    });

    // كود الموبايل الجديد - بدل الـ touchend القديم بالكامل
    let isDragging = false;
    let startX, startY;

    piece.addEventListener('touchstart', (e) => {
        isDragging = true;
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        piece.style.transition = 'none';
        piece.style.zIndex = '1000';
    }, { passive: false });

    piece.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const touch = e.touches[0];
        const dx = touch.clientX - startX;
        const dy = touch.clientY - startY;
        piece.style.transform = `translate(${dx}px, ${dy}px)`;
    }, { passive: false });

    piece.addEventListener('touchend', (e) => {
        isDragging = false;
        piece.style.transition = 'transform 0.3s ease, opacity 0.5s ease';

        const touch = e.changedTouches[0];
        const dropZoneRect = dropZone.getBoundingClientRect();

        if (touch.clientX > dropZoneRect.left &&
            touch.clientX < dropZoneRect.right &&
            touch.clientY > dropZoneRect.top &&
            touch.clientY < dropZoneRect.bottom) {

            dropZone.classList.add('fade-out');
            piece.classList.add('fade-out');
            setTimeout(() => {
                girlReveal.classList.add('show-girl');
            }, 500);
        } else {
            piece.style.transform = 'translate(0, 0)';
        }
    }, { passive: false });
});
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
