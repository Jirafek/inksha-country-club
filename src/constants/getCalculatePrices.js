const getCalculatePrices = (houseName) => {
   const currentMonth = new Date().getMonth() + 1 // Получаем текущий месяц (от 0 до 11)

   const forestHomePrices = {
      1: { weekday: 13300, weekend: 22400 },
      2: { weekday: 13300, weekend: 22400 },
      3: { weekday: 13300, weekend: 22400 },
      4: { weekday: 19000, weekend: 28000 },// апрель
      5: { weekday: 19000, weekend: 28000 }, // май
      6: { weekday: 23370, weekend: 39360 }, // июнь
      7: { weekday: 23370, weekend: 39360 },
      8: { weekday: 23370, weekend: 39360 },
      9: { weekday: 19000, weekend: 32000 },
      10: { weekday: 16150, weekend: 27200 },
      11: { weekday: 16150, weekend: 27200 },
      12: { weekday: 13300, weekend: 22400 },
      // ... и так далее для всех месяцев
   }
   const duplexPrices = { // aka олимпийская деревня 
      1: { weekday: 16640, weekend: 20480 },
      2: { weekday: 16640, weekend: 20480 },
      3: { weekday: 16640, weekend: 20480 },
      4: { weekday: 21000, weekend: 25000 },// апрель
      5: { weekday: 21000, weekend: 25000 }, // май
      6: { weekday: 24960, weekend: 30720 }, // июнь
      7: { weekday: 24960, weekend: 30720 },
      8: { weekday: 24960, weekend: 30720 },
      9: { weekday: 20800, weekend: 25600 },
      10: { weekday: 18720, weekend: 23040 },
      11: { weekday: 18720, weekend: 23040 },
      12: { weekday: 16640, weekend: 20480 },
      // ... и так далее для всех месяцев
   }


   const shaletPrices = {
      1: { weekday: 11900, weekend: 20700 },
      2: { weekday: 11900, weekend: 20700 },
      3: { weekday: 11900, weekend: 20700 },
      4: { weekday: 13000, weekend: 22600 },// апрель
      5: { weekday: 13000, weekend: 22600 }, // май
      6: { weekday: 13900, weekend: 23900 }, // июнь
      7: { weekday: 13900, weekend: 23900 },//июль
      8: { weekday: 13900, weekend: 23900 }, // август
      9: { weekday: 12200, weekend: 21700 },
      10: { weekday: 11500, weekend: 19900 },
      11: { weekday: 11500, weekend: 19900 },
      12: { weekday: 11900, weekend: 20700 },
      // ... и так далее для всех месяцев
   }

   if (houseName === 'forestHome')
      return forestHomePrices[currentMonth]
   else if (houseName === 'shalet')
      return shaletPrices[currentMonth]
   else if (houseName === 'duplex')
      return duplexPrices[currentMonth]
   else
      return { error: 'Неверное название дома' }

}

export { getCalculatePrices }