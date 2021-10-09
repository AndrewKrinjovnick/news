export const getDayName = (numDay) => {
   switch (numDay) {
      case 0:
         return 'Воскресенье';
      case 1:
         return 'Понедельник'
      case 2:
         return 'Вторник';
      case 3:
         return 'Среда'
      case 4:
         return 'Четверг';
      case 5:
         return 'Пятница'
      case 6:
         return 'Суббота';
      default: return;
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