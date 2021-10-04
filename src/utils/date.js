export const getDayName = (numDay) => {
   switch (numDay) {
      case 0:
         return 'Вс';
      case 1:
         return 'Пн'
      case 2:
         return 'Вт';
      case 3:
         return 'Ср'
      case 4:
         return 'Чт';
      case 5:
         return 'Пт'
      case 6:
         return 'Сб';
   }
}

export const getDayMounth = (day) => {
   if (day < 10) return '0' + day;
   return day
}

export const getMounthName = (month) => {
   const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
   return months[month];
}