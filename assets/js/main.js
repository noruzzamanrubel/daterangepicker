(function($) {
    $(document).ready(function () {

        var bookingFormPickUpDate = $('.booking-form__input__pickup-date');
        var bookingFormDropOffDate = $('.booking-form__input__dropoff-date');

        // Initiate datetime picker for pickup date
        bookingFormPickUpDate.daterangepicker({
            startDate: moment(),
            minDate: moment(),
            singleDatePicker: true,
            timePicker: true,
            showDropdowns: true,
            locale: {
                format: 'DD/MM/YYYY HH:mm'
            }
        });

        // Initiate datetime picker for drop off date
        bookingFormDropOffDate.daterangepicker({
            startDate: moment(),
            minDate: moment(),
            singleDatePicker: true,
            timePicker: true,
            showDropdowns: true,
            locale: {
                format: 'DD/MM/YYYY HH:mm'
            }
        });
    });
})(jQuery);