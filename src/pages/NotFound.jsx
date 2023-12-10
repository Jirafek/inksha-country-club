import { useEffect } from 'react'
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"

// contain, #bdc7ed

const NotFound = () => {
  useEffect(() => {

    let time = setTimeout(() => {
      window.location.href = 'https://mobile.ikshacountryclub.com'
      clearTimeout(time)
    }, 2000)
  }, [])
  return (
    <>
      <Helmet>
        <title>Отдых в Подмосковье на берегу Икшинского водохранилища - Это Икша Кантри Клаб</title>
        <meta
          name="description"
          content="Отдых в Подмосковье с Икша Кантри Клаб -Красивые места а также Рыбалка, Баня и СПА, водные виды спорта. Приезжайте 
            отдохнуть на берегу Икшинского водохранилища.
     Уютные домики, Шашлыки, красивые закаты. Проведите свои лучшие выходные на природе, недалеко от Москвы"
        />
        <meta
          name="title"
          content="Отдых в Подмосковье на берегу Икшинского водохранилища - Это только Икша Кантри Клаб."
        />
        <meta
          name="keywords"
          content="Отдых в Подмосковье, Икша Кантри Клаб, Икша, заказать, забронировать, вопрос, ответ, загородный клуб, подмосковье, баня, шашлык, караоке,
корпоратив, тимбилдинг, цена, на природе, у воды, водные развлечения, на выходные, спа, рыбалка, недалеко от москвы, рядом с москвой, компания, катание, домик, беседки"
        />
      </Helmet>
      <section style={{ backgroundImage: 'url(/image/404.webp)', backgroundSize: 'contain' }} className="relative h-[851px] back_settings bg-[#bdc7ed]">
        <Link to="/#book" className="back_settings absolute top-[18rem] left-1/2 w-[302px] h-[63px] flex justify-center items-center monterey text-white text-[18px]" style={{ backgroundImage: 'url(/image/404_btn.webp)', transform: 'translateX(-50%)' }}>
          Вернуться на главную
        </Link>
      </section>
    </>
  )
}

export default NotFound
