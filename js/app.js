document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        ko: {
            'hero-title': '이미지 병합하기',
            'hero-desc': '업로드 한도 절약을 위해 여러 이미지를 하나로 합칩니다.',
            'upload-btn': '파일 선택 (File Upload)',
            'merge-btn': '합치기 (Merge)',
            'about-title': '사이트 소개',
            'about-desc': 'LimitSaver는 AI 서비스 이용 시 발생하는 이미지 업로드 횟수 제한 문제를 해결하기 위해 제작되었습니다.<br>단순 병합을 넘어 고해상도 리사이징 기술을 통해 저화질 이미지도 선명하게 보정하여 효율적인 서비스 이용을 돕습니다.',
            'usage-title': '사용 방법',
            'usage-step1': '1. <span class="highlight">파일 선택</span> 버튼을 눌러 병합할 이미지를 추가합니다.',
            'usage-step2': '2. 필요한 이미지를 모두 수집한 후 <span class="highlight">합치기</span> 버튼을 누릅니다.',
            'usage-step3': '3. 스마트 스케일링이 적용된 결과물을 <span class="highlight">다운로드</span>하여 AI 서비스에 업로드합니다.',
            'usage-step4': '4. 다운로드가 안 될 경우, <span class="highlight">팝업 차단</span>을 해제하고 다시 시도해 주세요.',
            'features-title': '주요 기능',
            'features-1': '1. 고해상도 리사이징 알고리즘으로 화질 손실 최소화 및 선명도 개선',
            'features-2': '2. 이미지 개수에 따른 최적화된 격자 레이아웃 자동 생성',
            'features-3': '3. 브라우저 내 로컬 처리를 통한 완벽한 이미지 보안 유지',
            'guide-step1': '1. 파일 선택',
            'guide-step2': '2. 업로드',
            'guide-step3': '3. 합치기',
            'guide-step4': '4. 다운로드',
            'faq-title': '자주 묻는 질문',
            'faq-q1': '1. 이미지 화질이 개선되나요?',
            'faq-a1': '네, 자체적인 고해상도 업스케일링 필터를 적용하여 작은 이미지나 깨진 이미지도 어느 정도 선명하게 보정하여 병합합니다.',
            'faq-q2': '2. 이미지 개수에 제한이 있나요?',
            'faq-a2': '시스템적인 제한은 없으나, AI 분석 효율을 위해 4장 단위 병합을 권장합니다.',
            'tips-title': '관련 팁',
            'tips-desc': '1. 이미지 다운로드가 작동하지 않는다면 팝업 차단 설정을 확인해 보세요. 모바일 브라우저(Safari, Chrome 등)에서는 보안을 위해 팝업이 기본으로 차단되어 있을 수 있습니다.<br>2. 일반 사진(풍경, 인물 등)은 문서류에 비해 업스케일링 및 최적화 처리에 시간이 조금 더 걸릴 수 있으니 잠시만 기다려 주세요.<br>3. 병합된 이미지는 고해상도로 처리되므로 AI 모델이 텍스트를 더 잘 인식할 수 있습니다.<br>4. 4장 이상의 이미지를 합칠 때는 2x2 격자 형태로 자동 구성되어 가장 효율적인 가로세로비를 유지합니다.',
            'privacy-title': '개인정보 처리방침',
            'privacy-desc': '1. 본 서비스는 정적 웹 서비스로, 사용자가  업로드하는 이미지는 어떠한 서버로도 전송되거나 저장되지 않으며 사용자의 브라우저 내에서만 처리됩니다.<br>2. 구글 애드센스 등 제3자 광고주는 사용자의 브라우저에 쿠키를 설치하여 맞춤형 광고를 제공할 수 있습니다.<br>3. 본 사이트는 별도의 개인 식별 정보를 수집하지 않습니다. 쿠키 사용을 원치 않으실 경우 브라우저 설정에서 쿠키 수집을 거부할 수 있습니다.',
            'contact-title': '문의 및 지원',
            'contact-desc': '서비스 이용 중 제안 사항이나 버그 제보는 아래 고객지원 폼을 이용해 주시기 바랍니다. 모든 문의는 관리자가 직접 확인 하여 신속하게 답변드립니다.',
            'contact-btn': '고객지원 폼 작성하기'
            },
            en: {
            'hero-title': 'Merge Images',
            'hero-desc': 'Combine multiple images into one to save your AI upload limits.',
            'upload-btn': 'File Upload',
            'merge-btn': 'Merge',
            'about-title': 'About Site',
            'about-desc': 'LimitSaver is designed to solve the image upload limit issue when using AI services.<br>Beyond simple merging, it uses high-resolution resizing technology to sharpen low-res images for better AI analysis.',
            'usage-title': 'How to Use',
            'usage-step1': '1. Click the <span class="highlight">File Upload</span> button to add images.',
            'usage-step2': '2. After collecting all needed images, click the <span class="highlight">Merge</span> button.',
            'usage-step3': '3. <span class="highlight">Download</span> the smart-scaled result and upload it to your AI service.',
            'usage-step4': '4. If download fails, please <span class="highlight">disable popup blockers</span>.',
            'features-title': 'Key Features',
            'features-1': '1. High-resolution resizing algorithm minimizes quality loss and improves clarity',
            'features-2': '2. Automatically creates optimized grid layouts based on image count',
            'features-3': '3. Perfect image security through 100% local browser-side processing',
            'guide-step1': '1. Select File',
            'guide-step2': '2. Upload',
            'guide-step3': '3. Merge',
            'guide-step4': '4. Download',
            'faq-title': 'FAQ',
            'faq-q1': '1. Does it improve image quality?',
            'faq-a1': 'Yes, we apply high-resolution upscaling filters to sharpen small or blurry images during the merging process.',
            'faq-q2': '2. Is there a limit on the number of images?',
            'faq-a2': 'There is no system limit, but we recommend merging 4 images at a time for optimal AI analysis.',
            'tips-title': 'Related Tips',
            'tips-desc': '1. If image download doesn\'t work, check your popup blocker settings. Mobile browsers often block popups by default.<br>2. For non-document photos (landscapes, portraits, etc.), upscaling and optimization may take a bit longer. Please be patient.<br>3. Merged images are processed in high resolution, helping AI models recognize text better.<br>4. When merging 4+ images, they are auto-arranged in a 2x2 grid to maintain the most efficient aspect ratio.',
            'privacy-title': 'Privacy Policy',
            'privacy-desc': '1. This is a static web service; images are never sent to or stored on any server and are processed only within your browser.<br>2. Third-party advertisers like Google AdSense may place cookies on your browser to provide personalized ads.<br>3. This site does not collect personally identifiable information. You can opt-out of cookies through your browser settings.',
            'contact-title': 'Contact & Support',
            'contact-desc': 'For suggestions or bug reports, please use the contact form below. All inquiries are reviewed by the administrator for prompt feedback.',
            'contact-btn': 'Open Contact Form'
        }
    };

    const langKo = document.getElementById('langKo');
    const langEn = document.getElementById('langEn');
    const uploadBtn = document.getElementById('uploadBtn');
    const mergeBtn = document.getElementById('mergeBtn');
    const imageInput = document.getElementById('imageInput');
    const selectedFilesInfo = document.getElementById('selectedFilesInfo');
    const previewContainer = document.getElementById('previewContainer');
    const statusMessage = document.getElementById('statusMessage');

    let currentLang = 'ko';

    function setLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        langKo.classList.toggle('active', lang === 'ko');
        langEn.classList.toggle('active', lang === 'en');
        document.documentElement.lang = lang;
        
        updateButtonStates();
    }

    langKo.addEventListener('click', () => setLanguage('ko'));
    langEn.addEventListener('click', () => setLanguage('en'));

    function updateButtonStates() {
        if (selectedFiles.length > 0) {
            uploadBtn.className = 'btn-gray';
            mergeBtn.className = 'btn-blue';
            mergeBtn.disabled = selectedFiles.length < 2;
        } else {
            uploadBtn.className = 'btn-blue';
            mergeBtn.className = 'btn-gray';
            mergeBtn.disabled = true;
        }
    }

    let selectedFiles = [];

    uploadBtn.addEventListener('click', () => {
        imageInput.click();
    });

    imageInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        selectedFiles = [...selectedFiles, ...files];
        updateFileList();
    });

    function updateFileList() {
        selectedFilesInfo.innerHTML = "";
        selectedFiles.forEach((file, index) => {
            const chip = document.createElement('div');
            chip.className = 'file-chip';
            chip.innerHTML = `
                <span>${file.name}</span>
                <span class="remove-file" data-index="${index}">×</span>
            `;
            selectedFilesInfo.appendChild(chip);
        });

        if (selectedFiles.length > 0) {
            uploadBtn.className = 'btn-gray';
            mergeBtn.className = 'btn-blue';
            mergeBtn.disabled = selectedFiles.length < 2;
        } else {
            uploadBtn.className = 'btn-blue';
            mergeBtn.className = 'btn-gray';
            mergeBtn.disabled = true;
        }

        document.querySelectorAll('.remove-file').forEach(btn => {
            btn.onclick = (e) => {
                const index = parseInt(e.target.dataset.index);
                selectedFiles.splice(index, 1);
                updateFileList();
            };
        });
    }

    mergeBtn.addEventListener('click', async () => {
        statusMessage.textContent = "";
        const mergingText = currentLang === 'ko' ? '이미지 병합 중' : 'Merging Images';
        previewContainer.innerHTML = `<p>${mergingText}<span class="dot-ani">.</span><span class="dot-ani">.</span><span class="dot-ani">.</span></p>`;
        mergeBtn.disabled = true;

        const processedImages = await processFiles(selectedFiles);
        renderPreviews(processedImages);
        
        mergeBtn.disabled = false;
        mergeBtn.className = 'btn-gray';
        uploadBtn.className = 'btn-gray';
    });

    async function processFiles(files) {
        const results = [];
        const batchSize = 4;
        
        const images = await Promise.all(files.map(file => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.src = URL.createObjectURL(file);
            });
        }));

        for (let i = 0; i < images.length; i += batchSize) {
            const batch = images.slice(i, i + batchSize);
            const canvas = await createGrid(batch);
            results.push({
                canvas: canvas,
                filename: `LimitSaver_merged_${Math.floor(i/batchSize) + 1}.png`
            });
        }

        return results;
    }

    async function createGrid(batch) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const maxWidth = Math.max(...batch.map(img => img.width));
        const maxHeight = Math.max(...batch.map(img => img.height));

        let canvasWidth, canvasHeight;
        let positions = [];

        if (batch.length === 1) {
             canvasWidth = maxWidth;
             canvasHeight = maxHeight;
             positions = [{ x: 0, y: 0 }];
        } else if (batch.length === 2) {
            canvasWidth = maxWidth * 2;
            canvasHeight = maxHeight;
            positions = [{ x: 0, y: 0 }, { x: maxWidth, y: 0 }];
        } else {
            canvasWidth = maxWidth * 2;
            canvasHeight = maxHeight * 2;
            positions = [
                { x: 0, y: 0 }, { x: maxWidth, y: 0 },
                { x: 0, y: maxHeight }, { x: maxWidth, y: maxHeight }
            ];
        }

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        batch.forEach((img, index) => {
            const pos = positions[index];
            const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
            const centerShiftX = (maxWidth - img.width * ratio) / 2;
            const centerShiftY = (maxHeight - img.height * ratio) / 2;
            
            ctx.drawImage(img, 
                pos.x + centerShiftX, pos.y + centerShiftY, 
                img.width * ratio, img.height * ratio
            );
        });

        return canvas;
    }

    function renderPreviews(processedImages) {
        previewContainer.innerHTML = "";
        processedImages.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'preview-item';
            
            const dataUrl = item.canvas.toDataURL('image/png');
            const img = document.createElement('img');
            img.src = dataUrl;
            img.style.maxWidth = "100%";
            
            const downloadBtn = document.createElement('a');
            downloadBtn.href = dataUrl;
            downloadBtn.download = item.filename;
            downloadBtn.className = 'download-link btn-blue';
            downloadBtn.textContent = 'Download';
            
            div.appendChild(img);
            div.appendChild(document.createElement('br'));
            div.appendChild(downloadBtn);
            previewContainer.appendChild(div);
        });
    }

    // Initialize language on load
    setLanguage('ko');
});
