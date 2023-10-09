export const URLData = {
    utm_source: '',
    utm_campaign: '',
    utm_content: ''
}


export const updateData = (source, campaign, content) => {
    URLData.utm_campaign = campaign;
    URLData.utm_content = content;
    URLData.utm_source = source;
}
