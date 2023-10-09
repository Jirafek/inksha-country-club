import AirDatepicker from 'air-datepicker';
import { createPopper } from '@popperjs/core';
import anime from 'animejs';
import 'air-datepicker/air-datepicker.css';

function BookingCalendar(dateArray, nameOfClass) {
  new AirDatepicker(`#${nameOfClass}`, {
    classes: 'calendar',
    isMobile: true,
    minDate: new Date(),
    onRenderCell({date, cellType}) {
        const oneDay = 24 * 60 * 60 * 1000;
        const formDate = new Date(date.getTime() + oneDay);
        const formattedDate = formDate.toISOString().split('T')[0];
        if (dateArray.includes(formattedDate)) {
            return {
                disabled: true,
                classes: 'disabled-class'
            }
        }
    },
  });
}

export default BookingCalendar;