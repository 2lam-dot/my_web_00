// 오늘 날짜 표시
function setDate() {
    const dateElem = document.getElementById('date');
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    dateElem.textContent = today.toLocaleDateString('ko-KR', options);
}

// 랜덤 한마디 리스트
const quotes = [
    '할 수 있다!',
    '오늘도 화이팅!',
    '작은 성공이 큰 변화를 만든다.',
    '포기하지 마세요.',
    '매일 조금씩 성장하세요.',
    '웃으며 시작하세요.',
    '도전은 언제나 가치 있다.',
    '실패는 성공의 어머니.',
    '당신은 충분히 멋져요.',
    '행복은 마음에서 시작된다.'
];

function showRandomQuote() {
    const quoteElem = document.getElementById('quote');
    const idx = Math.floor(Math.random() * quotes.length);
    quoteElem.textContent = quotes[idx];
}

// 다크/라이트 모드 토글
function toggleMode() {
    const body = document.body;
    const btn = document.getElementById('modeToggle');
    body.classList.toggle('dark');
    btn.textContent = body.classList.contains('dark') ? '라이트모드' : '다크모드';
}

// 서울 날씨 정보 가져오기 (OpenWeatherMap API 사용)
async function setWeather() {
    const apiKey = 'b6907d289e10d714a6e88b30761fae22'; // OpenWeatherMap 샘플 키 (실제 서비스는 본인 키 필요)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}&units=metric&lang=kr`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        const desc = data.weather[0].description;
        const temp = Math.round(data.main.temp);
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
        document.getElementById('weather-desc').textContent = `서울 ${desc}, ${temp}°C`;
        document.getElementById('weather-icon').innerHTML = `<img src='${iconUrl}' alt='날씨' style='vertical-align:middle;width:32px;height:32px;'>`;
    } catch (e) {
        document.getElementById('weather-desc').textContent = '날씨 정보를 불러올 수 없습니다.';
        document.getElementById('weather-icon').textContent = '❓';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setDate();
    setWeather();
    document.getElementById('randomBtn').addEventListener('click', showRandomQuote);
    document.getElementById('modeToggle').addEventListener('click', toggleMode);
});
