import { useURLData } from './URLData'

const { utm_campaign, utm_content, utm_source } = useURLData()

export const simpleBotSubmit = async ({ data, title }) => {
   console.log(title)
   console.log(data)

   let sendingData = {
      ...data,
      source: "https://ikshacountryclub.com/",
      formType:
         additionalDataType === null
            ? title
            : additionalDataType,
      link: window.location.href,
      utm_source: utm_source,
      utm_campaign: utm_campaign,
      utm_content: utm_content,
   }

   if (additionalData !== null) {
      sendingData = { ...sendingData, ...additionalData }
   }

   try {
      const response = await fetch(
         "https://infinite-hamlet-38304-2023ba50b8de.herokuapp.com/submit-form",
         {
            method: "POST",
            headers: {
               "Content-Type": "application/x-www-form-urlencoded",
               "Access-Control-Allow-Origin": "*",
            },
            body: new URLSearchParams(sendingData).toString(),
         }
      )

      if (response.ok) {
         setTimeout(() => {
            window.location.href = 'https://ikshacountryclub.com/thanks'
         }, 1000)
      } else {
         alert("Произошла ошибка при отправке данных")
         return 'trouble with db'
      }
      return 'ok'
   } catch (error) {
      console.error(error)
      alert("Произошла ошибка при отправке данных")
      return 'error'
   }


}