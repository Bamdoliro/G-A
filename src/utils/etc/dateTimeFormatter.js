export const dateFormatter = (d) => {
    let month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

export const dateKoreanFormatter = (params) => {
    const date = new Date(params)
    let diff = (new Date().getTime() - date.getTime()) / 1000,
        day_diff = Math.floor(diff / 86400);
    if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
        return `${date.getFullYear()}년 ${
            date.getMonth() + 1
        }월 ${date.getDate()}일`;

    return (
        (day_diff === 0 &&
            ((diff < 60 && "방금") ||
                (diff < 120 && "1분 전") ||
                (diff < 3600 && Math.floor(diff / 60) + "분 전") ||
                (diff < 7200 && "1시간 전") ||
                (diff < 86400 && Math.floor(diff / 3600) + "시간 전"))) ||
        (day_diff === 1 && "어제") ||
        (day_diff < 7 && day_diff + "일 전") ||
        (day_diff < 31 && Math.ceil(day_diff / 7) + "주 전")
    );
}
