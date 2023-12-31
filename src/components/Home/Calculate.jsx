import React, { useState, useEffect } from "react"

import { useForm } from "react-hook-form"

import { v4 as uuidv4 } from "uuid"

import { Link } from "react-router-dom"

import MainPopup from "./../../common/MainPopup"
const extraServiceData = [
   {
      title: "Растопка бани",
      cost: "5000",
      point: "р",
   },
   {
      title: "Веники",
      cost: "500",
      point: "р",
   },
   {
      title: "Подогрев купели",
      cost: "5000",
      point: "р",
   },
   {
      title: "Банщик",
      cost: "15000",
      point: "р",
   },
   {
      title: "Караоке с ведущим",
      cost: "10000",
      point: "р",
   },
   {
      title: "Караоке без ведущего",
      cost: "5000",
      point: "р",
   },
   {
      title: "Фотограф",
      cost: "10000",
      point: "р/час",
   },
   {
      title: "Диджей, ведущий",
      cost: "10000",
      point: "р/час",
   },
   {
      title: "Проектор (фильмы)",
      cost: "1000",
      point: "р",
   },
   {
      title: "Глинтвейн / травяной чай",
      cost: "5000",
      point: "р",
   },
   {
      title: "Кальянщик",
      cost: "11000",
      point: "р/день",
   },
   {
      title: "Глинтвейн / травяной чай",
      cost: "5000",
      point: "р",
   },
   {
      title: "Повар на день",
      cost: "5000",
      point: "р/блюдо",
   },
   {
      title: "Повар без продуктов",
      cost: "10000",
      point: "р",
   },
   {
      title: "Фэтбайки",
      cost: "1000",
      point: "р/шт",
   },
   {
      title: "Настольные игры, мячи",
      cost: "1000",
      point: "р",
   },
   {
      title: "Волейбольная площадка",
      cost: "1000",
      point: "р/час",
   },
   {
      title: "SUP board",
      cost: "3000",
      point: "р/день",
   },
   {
      title: "Надувная лодка",
      cost: "5000",
      point: "р/день",
   },
]

const Calculate = () => {
   const [isPopupOpen, setIsPopupOpen] = useState(false)
   const togglePopup = () => {
      setIsPopupOpen((prev) => !prev)
   }
   const [guesses, setGuesses] = useState(1)
   const [days, setDays] = useState(1)
   const [selectedLocation, setSelectedLocation] = useState("1")
   const [allDops, setAllDops] = useState("")
   const [additional, setAdditional] = useState(null)

   const [maxDays, setMaxDays] = useState(
      selectedLocation === "1"
         ? 30
         : selectedLocation === "2"
            ? 15
            : selectedLocation === "3"
               ? 10
               : 30
   )

   const handleLocationChange = (event) => {
      setSelectedLocation(event.target.value)
      const currentDays =
         event.target.value === "1"
            ? 30
            : event.target.value === "2"
               ? 15
               : event.target.value === "3"
                  ? 10
                  : 30
      if (guesses > currentDays) {
         setGuesses(currentDays)
      }
      setMaxDays(currentDays)
      countTotal()
   }

   const [selectedWeek, setSelectedWeek] = useState("пн-чт")

   const handleWeekChange = (event) => {
      setSelectedWeek(event.target.value)
      countTotal("", event.target.value)
   }

   const [checkedStates, setCheckedStates] = useState(
      extraServiceData.map((el) => ({ cost: +el.cost, isChecked: false }))
   )

   const handleCheckboxChange = (index) => (event) => {
      const updatedStates = checkedStates.map((el, i) =>
         i === index ? { ...el, isChecked: event.target.checked } : el
      )
      setCheckedStates(updatedStates)
      countTotal(updatedStates)
   }

   const handleSliderChange = (event) => {
      setGuesses(event.target.value)
      countTotal()
   }

   const handleDaySliderChange = (event) => {
      setDays(event.target.value)
      countTotal()
   }

   const [total, setTotal] = useState(0)

   useEffect(() => {
      countTotal()
   }, [total])

   useEffect(() => {
      let string = ""
      checkedStates.forEach((el, i) => {
         if (el.isChecked) {
            string += `${extraServiceData[i].title} ${extraServiceData[i].cost + extraServiceData[i].point
               }, `
         }
      })
      setAllDops(string)
   }, [checkedStates])

   const countTotal = (updatedStates = "", week = "") => {
      let currentTotal = 0
      const SALE = 0.2 // Размер скидки
      const currentWeek = week === "" ? selectedWeek : week
      if (selectedLocation === "1") {
         // Лесная резиденция
         const BUDNI = 15000
         const VIHODNIE = 20000
         if (currentWeek === "пн-чт") {
            currentTotal += BUDNI
            if (guesses > 12) {
               if (guesses <= 17) {
                  // Подсчет в зависимости от кол-ва гостей
                  currentTotal += 5000
               } else if (guesses <= 22) {
                  currentTotal += 10000
               } else {
                  currentTotal += 15000
               }
            }

            currentTotal += (days - 1) * 5000 // Подсчет за ночевки
         } else {
            currentTotal += VIHODNIE
            if (guesses > 12) {
               if (guesses <= 17) {
                  // Подсчет в зависимости от кол-ва гостей
                  currentTotal += 5000
               } else if (guesses <= 22) {
                  currentTotal += 10000
               } else {
                  currentTotal += 15000
               }
            }

            currentTotal += (days - 1) * 10000 // Подсчет за ночевки
         }
      } else if (selectedLocation === "2") {
         // Шале
         const BUDNI = 10000
         const VIHODNIE = 20000
         if (currentWeek === "пн-чт") {
            currentTotal += BUDNI
            if (guesses > 12) {
               if (guesses <= 17) {
                  // Подсчет в зависимости от кол-ва гостей
                  currentTotal += 5000
               } else if (guesses <= 22) {
                  currentTotal += 10000
               } else {
                  currentTotal += 15000
               }
            }
            currentTotal += (days - 1) * 15000 // Подсчет за ночевки
         } else {
            currentTotal += VIHODNIE
            if (guesses > 12) {
               if (guesses <= 17) {
                  // Подсчет в зависимости от кол-ва гостей
                  currentTotal += 5000
               } else if (guesses <= 22) {
                  currentTotal += 10000
               } else {
                  currentTotal += 15000
               }
            }
            currentTotal += (days - 1) * 20000 // Подсчет за ночевки
         }
      } else if (selectedLocation === "3") {
         // Коттедж
         const BUDNI = 20000
         const VIHODNIE = 30000
         if (currentWeek === "пн-чт") {
            currentTotal += days * BUDNI // Подсчет за сутки
         } else {
            currentTotal += days * VIHODNIE // Подсчет за сутки
         }
      } else {
         // Олимпийка
         const BUDNI = 15000
         const VIHODNIE = 20000
         if (currentWeek === "пн-чт") {
            currentTotal += BUDNI
            if (guesses > 6) {
               if (guesses <= 12) {
                  currentTotal += 5000
               } else if (guesses <= 18) {
                  currentTotal += 20000
               } else if (guesses <= 24) {
                  currentTotal += 35000
               } else {
                  currentTotal += 50000
               }
            }
            currentTotal = currentTotal * days
         } else {
            currentTotal += VIHODNIE
            if (guesses > 6) {
               if (guesses <= 12) {
                  currentTotal += 10000
               } else if (guesses <= 18) {
                  currentTotal += 30000
               } else if (guesses <= 24) {
                  currentTotal += 50000
               } else {
                  currentTotal += 70000
               }
            }
            currentTotal = currentTotal * days
         }
      }

      // Подсчет дополнительных ништячков
      if (updatedStates == "") {
         checkedStates.forEach((el, i) => {
            if (el.isChecked) {
               currentTotal += el.cost
            }
         })
      } else {
         updatedStates.forEach((el, i) => {
            if (el.isChecked) {
               currentTotal += el.cost
            }
         })
      }

      if (days >= 3) {
         currentTotal = currentTotal * (1 - SALE) // отнимаем скидку
      }

      setTotal(currentTotal)
   }

   const onSubmit = () => {
      togglePopup()
   }
   return (
      <section
         id="calculator"
         style={{ backgroundImage: "url(/image/calc_bg.webp)" }}
         className="section back_settings relative"
      >
         <MainPopup
            key={2}
            togglePopup={togglePopup}
            isPopupOpen={isPopupOpen}
            additionalData={additional}
            additionalDataType="Калькулятор"
         />

         <div className="relative flex h-[90px] flex-col items-center justify-center">
            <picture>
               <source srcSet="/avif/titles_bg.avif 1x" type="image/avif" />
               <img
                  className="left-50% absolute top-0 translate-x-[-50%]"
                  src="/image/titles_bg.webp"
                  alt="Икша Кантри Клаб"
               />
            </picture>
            <h2 className="z-10 mt-2 text-[20px] font-bold text-white">
               КАЛЬКУЛЯТОР ОТДЫХА
            </h2>
         </div>
         <form className="flex flex-col items-center">
            <div
               style={{ backgroundImage: "url(/image/calc_type_bg.webp)" }}
               className="back_settings monterey h-[376px] w-[337px] text-[#000]"
            >
               <div className="monterey flex flex-col gap-2 text-[13px] text-[#433E6A]">
                  <h3 className="mb-[5px] mt-[10px] text-center text-[15px] font-semibold text-[#000]">
                     Выберите локацию
                  </h3>
                  <div className="pl-12">
                     <label className="flex gap-[15px]">
                        <input
                           checked={selectedLocation === "1"}
                           onChange={handleLocationChange}
                           className="w-[15px]"
                           name="location"
                           value="1"
                           type="radio"
                        />
                        <p>ЛЕСНАЯ РЕЗИДЕНЦИЯ</p>
                     </label>
                  </div>
                  <div className="pl-12">
                     <label className="flex gap-[15px]">
                        <input
                           checked={selectedLocation === "2"}
                           onChange={handleLocationChange}
                           className="w-[15px]"
                           name="location"
                           value="2"
                           type="radio"
                        />
                        <p>ШАЛЕ</p>
                     </label>
                  </div>
                  <div className="pl-12">
                     <label className="flex gap-[15px]">
                        <input
                           checked={selectedLocation === "3"}
                           onChange={handleLocationChange}
                           className="w-[15px]"
                           name="location"
                           value="3"
                           type="radio"
                        />
                        <p>КОТТЕДЖ</p>
                     </label>
                  </div>
                  <div className="pl-12">
                     <label className="flex gap-[15px]">
                        <input
                           checked={selectedLocation === "4"}
                           onChange={handleLocationChange}
                           className="w-[15px]"
                           name="location"
                           value="4"
                           type="radio"
                        />
                        <p>ОЛИМПИЙСКАЯ ДЕРЕВНЯ</p>
                     </label>
                  </div>
               </div>
               <div className="monterey mt-[42px] flex flex-col text-[13px] text-[#000]">
                  <h3 className="flex justify-center text-center text-[15px] font-semibold">
                     Количество гостей:{" "}
                     <span className="ml-1 block w-5">{guesses}</span>
                  </h3>
                  <div className="flex justify-center">
                     <div className="flex items-center">
                        <img
                           className="mr-[10px]"
                           src="/image/man_icon.webp"
                           alt=""
                        />
                        <div className="flex h-[22px] w-8 items-center justify-center border border-black text-[19px] font-semibold">
                           1
                        </div>
                        <input
                           type="range"
                           min="1"
                           max={maxDays}
                           value={guesses}
                           onChange={handleSliderChange}
                           className="slider w-[140px]"
                        />
                        <div className="flex h-[22px] w-8 items-center justify-center border border-black text-[19px] font-semibold">
                           {maxDays}
                        </div>
                     </div>
                  </div>
                  <div className="flex items-center justify-center gap-[10px] py-3">
                     <h3 className="text-[15px] font-semibold">Заезд</h3>
                     <div className="flex flex-col text-[15px]">
                        <label className="flex items-center gap-2">
                           <input
                              checked={selectedWeek === "пн-чт"}
                              onChange={handleWeekChange}
                              className="w-[15px]"
                              name="week"
                              value="пн-чт"
                              type="radio"
                           />
                           <p className="font-semibold">пн-чт</p>
                        </label>
                        <label className="flex items-center gap-2">
                           <input
                              checked={selectedWeek === "пт-вс"}
                              onChange={handleWeekChange}
                              className="w-[15px]"
                              name="week"
                              value="пт-вс"
                              type="radio"
                           />
                           <p className="font-semibold">пт-вс</p>
                        </label>
                     </div>
                  </div>
                  <h3 className="flex justify-center text-center text-[15px] font-semibold">
                     Количество дней:{" "}
                     <span className="ml-1 block w-5">{days}</span>
                  </h3>
                  <div className="flex justify-center">
                     <div className="flex items-center">
                        <img
                           className="mr-[10px]"
                           src="/image/calculate_calendar.webp"
                           alt=""
                        />
                        <div className="flex h-[22px] w-8 items-center justify-center border border-black text-[19px] font-semibold">
                           1
                        </div>
                        <input
                           type="range"
                           min="1"
                           max="14"
                           value={days}
                           onChange={handleDaySliderChange}
                           className="slider w-[140px]"
                        />
                        <div className="flex h-[22px] w-8 items-center justify-center border border-black text-[19px] font-semibold">
                           14
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div
               style={{ backgroundImage: "url(/image/extra_calc_bg.webp)" }}
               className="back_settings monterey relative my-2 h-[255px] w-[345px] text-[#000]"
            >
               <div
                  style={{
                     transform: "translateX(-50%)",
                     backgroundImage: "url(/image/calc_headline.webp)",
                  }}
                  className="back_settings absolute left-1/2 top-0 flex h-[36px] w-[268px] items-center justify-center text-[15px] font-semibold"
               >
                  Дополнительные услуги
               </div>
               <div className="mt-10 flex h-[190px] flex-col gap-[10px] overflow-y-auto px-5">
                  {extraServiceData.map((el, i) => (
                     <div
                        key={uuidv4()}
                        className="flex items-center justify-between"
                     >
                        <label className="flex items-center gap-[5px]">
                           <input
                              type="checkbox"
                              className="h-[15px] w-[15px]"
                              checked={checkedStates[i].isChecked}
                              onChange={handleCheckboxChange(i)}
                           />
                           <p className="text-[13px] font-medium">{el.title}</p>
                        </label>
                        <div className="flex w-[80px] items-center justify-center rounded-sm border border-[#221B4B] bg-[#E4F4E7] text-[11px] font-medium">
                           {el.cost + el.point}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="flex justify-center rounded-[24px] border-[2px] border-[#B76569] bg-[#D9D9D9] px-1">
               Предварительная стоимость: {total}
            </div>
            <div className="flex justify-center">
               {/* <Link to={`/form/${total}?location=${selectedLocation}&guesses=${guesses}&week=${selectedWeek}&days=${days}&dops=${allDops}`}> */}
               <div
                  //   type="submit"
                  onClick={() => {
                     const currentLocation = selectedLocation === '1' ?
                        'ЛЕСНАЯ РЕЗИДЕНЦИЯ' : selectedLocation === '2' ?
                           'ШАЛЕ' : selectedLocation === '3' ?
                              'КОТТЕДЖ' : 'ОЛИМПИЙСКАЯ ДЕРЕВНЯ'

                     setAdditional(
                        {
                           amount: total,
                           location: currentLocation,
                           guesses: guesses,
                           week: selectedWeek,
                           days: days,
                           dops: allDops || '',
                        }
                     )

                     togglePopup()
                  }}
                  style={{
                     backgroundImage: "url(/image/calculate_continue.webp)",
                  }}
                  className="back_settings h-[45px] w-[208px]"
               ></div>
               {/* </Link> */}
            </div>
         </form>
      </section>
   )
}

export default Calculate
