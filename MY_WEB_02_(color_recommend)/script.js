// 오늘 날짜 표시
function setDate() {
    const dateElem = document.getElementById('date');
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    dateElem.textContent = today.toLocaleDateString('ko-KR', options);
}

// 상의/하의 색상 추천 리스트
const topColorList = [
    { color: '#FFB6C1', name: '연분홍', desc: '연분홍 셔츠로 러블리 무드 완성! 데님이나 화이트 팬츠와 찰떡.' },
    { color: '#87CEEB', name: '스카이 블루', desc: '스카이블루 티셔츠는 청량감 UP! 밝은 컬러 하의와 매치해 산뜻하게.' },
    { color: '#FFD700', name: '골드', desc: '골드 포인트 상의로 트렌디하게! 액세서리와 믹스매치 추천.' },
    { color: '#98FB98', name: '민트', desc: '민트 컬러 니트로 상큼한 분위기! 베이지/화이트 하의와 잘 어울려요.' },
    { color: '#6A5ACD', name: '퍼플', desc: '퍼플 셔츠로 감성적인 룩 완성! 블랙진과 매치하면 시크함 UP.' }
];
const bottomColorList = [
    { color: '#FF8C00', name: '오렌지', desc: '오렌지 팬츠로 비비드하게! 심플한 상의와 매치하면 포인트룩 완성.' },
    { color: '#00CED1', name: '터콰이즈', desc: '터콰이즈 슬랙스로 개성 뿜뿜! 화이트 셔츠와 매치 추천.' },
    { color: '#F08080', name: '라이트 코랄', desc: '라이트코랄 스커트로 러블리하게! 연한 상의와 매치해 부드러운 느낌.' },
    { color: '#B0E0E6', name: '파우더 블루', desc: '파우더블루 데님으로 세련된 무드! 네이비/그레이 상의와 찰떡.' },
    { color: '#DC143C', name: '크림슨', desc: '크림슨 팬츠로 강렬한 포인트! 심플한 블랙/화이트 상의와 매치.' }
];

function showColor(color, sampleId, descId) {
    const sample = document.getElementById(sampleId);
    const desc = document.getElementById(descId);
    sample.style.background = color.color;
    // 띄어쓰기 기준으로 줄바꿈 처리
    const nameWords = color.name.split(' ');
    sample.innerHTML = nameWords.join('<br>');
    // 동그라미 크기 고정
    const fixedSize = 148;
    sample.style.width = fixedSize + 'px';
    sample.style.height = fixedSize + 'px';
    // 글자 수에 따라 폰트 크기 조정
    const charCount = color.name.replace(/ /g, '').length;
    let fontSize = 2.2;
    if (charCount > 4) fontSize = 1.6;
    else if (charCount > 2) fontSize = 1.9;
    sample.style.fontSize = fontSize + 'rem';
    // 쉼표, 느낌표 뒤에 줄바꿈 추가
    const formattedDesc = color.desc.replace(/([,!])\s*/g, '$1<br>');
    desc.innerHTML = formattedDesc;
}

function showRandomColor() {
    const topIdx = Math.floor(Math.random() * topColorList.length);
    const bottomIdx = Math.floor(Math.random() * bottomColorList.length);
    showColor(topColorList[topIdx], 'top-color-sample', 'top-color-desc');
    showColor(bottomColorList[bottomIdx], 'bottom-color-sample', 'bottom-color-desc');
}

// 다크/라이트 모드 토글
function toggleMode() {
    console.log('toggleMode 함수 시작');
    const body = document.body;
    console.log('body 객체:', body);
    const btn = document.getElementById('modeToggle');
    console.log('modeToggle 버튼:', btn);
    body.classList.toggle('dark');
    console.log('다크모드 토글됨. 현재 상태:', body.classList.contains('dark'));
    btn.textContent = body.classList.contains('dark') ? '라이트모드' : '다크모드';
    console.log('버튼 텍스트 변경:', btn.textContent);
    console.log('toggleMode 함수 끝');
}

document.addEventListener('DOMContentLoaded', () => {
    setDate();
    showRandomColor();
    document.getElementById('randomColorBtn').addEventListener('click', showRandomColor);
    document.getElementById('modeToggle').addEventListener('click', toggleMode);
});
