export const getOutfit = (temp) => {
    if (temp >= 28) return '민소매, 반팔, 반바지'
    if (temp >= 23) return '반팔, 얇은 셔츠, 반바지'
    if (temp >= 20) return '긴팔, 얇은 가디건, 면바지'
    if (temp >= 17) return '니트, 맨투맨, 가디건'
    if (temp >= 12) return '자켓, 가디건, 청바지'
    if (temp >= 9) return '트렌치코트, 점퍼, 니트'
    if (temp >= 5) return '울 코트, 가죽 자켓, 기모 옷'

    return '패딩, 목도리, 따뜻한 니트'
}