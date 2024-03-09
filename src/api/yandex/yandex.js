import FormData from 'form-data'
const counterId = 87405071;

export const addControlPoint = async (clientId, yandexAccess) => {
    const target = 325701607;
    const csvFilePath = 'offline-conversions.csv';

    const csvData = generateCSVData(clientId, target);
    const csvBlob = new Blob([csvData], { type: 'text/csv' });

    // URL для отправки запроса
    const url = `https://api-metrika.yandex.net/management/v1/counter/${counterId}/offline_conversions/upload?client_id_type=CLIENT_ID`;

    try {
        // Отправляем запрос
        const formData = new FormData();
        formData.append('file', csvBlob, 'offline-conversions.csv');

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Authorization": `OAuth ${yandexAccess}`,
                "Content-Type": "multipart/form-data",
            },
            body: formData
        });

        if (response.ok) {
            console.log('Оффлайн конверсии успешно отправлены в Яндекс.Метрику');
        } else {
            const errorText = await response.text();
            console.error('Ошибка при отправке оффлайн конверсий в Яндекс.Метрику:', errorText);
        }
    } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
    }
}

function generateCSVData(clientId, target) {
    const timestamp = Math.floor(Date.now() / 1000);
    return `ClientId,Target,DateTime\n${clientId},${target},${timestamp}\n`;
}


