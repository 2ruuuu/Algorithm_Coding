const solution = (s) => {
    const result = [];
    const lastSeen = new Map(); // 글자의 마지막 위치를 저장할 저장소

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (lastSeen.has(char)) {
            // 이전에 나온 적이 있다면: 현재 위치(i) - 마지막 위치
            result.push(i - lastSeen.get(char));
        } else {
            // 처음 나온 글자라면
            result.push(-1);
        }

        // 현재 글자의 위치를 최신 정보로 업데이트
        lastSeen.set(char, i);
    }

    return result;
};