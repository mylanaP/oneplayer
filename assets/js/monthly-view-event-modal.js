const sharedEvents = [
    {
        title: 'Strength & Power',
        start: '2025-05-15T10:00:00',
        end: '2025-05-15T11:00:00',
    },
    {
        title: 'Recovery',
        start: '2025-06-12T09:00:00',
        end: '2025-06-12T10:00:00',
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const calendarThis = new FullCalendar.Calendar(document.querySelector('.calendar-this-month'), {
        initialView: 'dayGridMonth',
        initialDate: new Date(), // current month
        headerToolbar: {
            left: '',          // remove 'today' from here
            center: 'title',
            right: 'customPrev,customNext'
        },
        events: [
            {
                title: '',
                start: '2025-05-15',
                display: 'list-item',
                className: 'has-event'
            }
        ],
        titleFormat: { month: 'long' },
        dayHeaderFormat: { weekday: 'narrow' },
        customButtons: {
            customPrev: {
                text: '',
                click: function () {
                    calendarThis.prev();
                }
            },
            customNext: {
                text: '',
                click: function () {
                    calendarThis.next();
                }
            }
        },
        dateClick: handleDateClick
    });

    const calendarNext = new FullCalendar.Calendar(document.querySelector('.calendar-next-month'), {
        initialView: 'dayGridMonth',
        initialDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1), // next month
        headerToolbar: {
            left: '',          // remove 'today' from here
            center: 'title',
            right: 'customPrev,customNext'
        },
        events: [
            {
                title: '',
                start: '2025-05-15',
                display: 'list-item',
                className: 'has-event'
            }
        ],
        titleFormat: { month: 'long' },
        dayHeaderFormat: { weekday: 'narrow' },
        customButtons: {
            customPrev: {
                text: '',
                click: function () {
                    calendarNext.prev();
                }
            },
            customNext: {
                text: '',
                click: function () {
                    calendarNext.next();
                }
            }
        },
        dateClick: handleDateClick
    });

    calendarThis.render();
    calendarNext.render();

    function handleDateClick(info) {
        const popover = document.querySelector('.eventPopover');
        const rect = info.dayEl.getBoundingClientRect();
        const eventOnDate = sharedEvents.find(e => e.start.startsWith(info.dateStr));

        if (eventOnDate) {
            // popover.querySelector('span').textContent = eventOnDate.title;
            // popover.querySelector('p').innerHTML = `<strong>Time:</strong> ${eventOnDate.start.substring(11, 16)} – ${eventOnDate.end.substring(11, 16)}`;

            popover.style.top = `${rect.top + window.scrollY + rect.height}px`;
            popover.style.left = `${rect.left + window.scrollX}px`;
            popover.style.display = 'block';
        } else {
            popover.style.display = 'none';
        }
    }

    document.addEventListener('click', function (e) {
        const popover = document.querySelector('.eventPopover');
        if (!popover.contains(e.target) && !e.target.closest('.fc-daygrid-day')) {
            popover.style.display = 'none';
        }
    });
});