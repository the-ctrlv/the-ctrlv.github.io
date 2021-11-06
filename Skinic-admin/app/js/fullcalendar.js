
document.getElementById("cal-button").onclick = function () {
      $(".day-button").removeClass("disabled");
      $(".month-button").addClass("active").siblings().removeClass("active");
  if ($("#homePage").hasClass("active")) {
    var mainText = $(".global-content__core").attr("data-name");
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: "dayGridMonth",
      initialDate: "2021-07-16",
      selectable: true,
      firstDay: 1,
      editable: false,
      slotEventOverlap: false,
      eventContent: function (arg) {
        return { html: arg.event.title };
      },
      events: [
        {
          id: 1,
          title:
            '<div class="widget widget--gilmour"><span>Dr. med. Dan Iselin</span><h2>Sharlini Goncalves</h2><span>Nachkontrolle Hyaluron</span><span class="duration">90min</span></div',
          start: "2021-07-16 07:00:00",
          end: "2021-07-16 09:00:00",
        },
        {
          id: 5,
          title:
            '<div class="widget widget--iselin"><span>Dr. med. David Jon Gilmour</span><h2>Sharlini Goncalves</h2><span>Nachkontrolle Hyaluron</span><span class="duration">90min</span></div',
          start: "2021-07-15 10:00:00",
          end: "2021-07-15 09:00:00",
        },
        {
          id: 6,
          title:
            '<div class="widget widget--barett"><span>Dr. med. David Jon Gilmour</span><h2>Sharlini Goncalves</h2><span>Nachkontrolle Hyaluron</span><span class="duration">90min</span></div',
          start: "2021-07-16 10:00:00",
          end: "2021-07-16 11:00:00",
        },
        {
        id: 4,
          title:
            '<div class="widget widget--blocked-hours BH-iselin"><h2>Blocked Hours</h2><span class="duration">90min</span></div',
          start: "2021-07-16 14:00:00",
          end: "2021-07-16 15:00:00",
        },
        {
          id: 3,
          title:
            '<div class="widget widget--iselin"><span>Dr. med. Dan Iselin</span><h2>Sharlini Goncalves</h2><span>Nachkontrolle Hyaluron</span><span class="duration">90min</span></div',
          start: "2021-07-16 07:00:00",
          end: "2021-07-16 09:00:00",
        },
        {
          id: 2,
          title:
            '<div class="widget widget--barett"><span>Dr. med. Syd Barrett</span><h2>Sharlini Goncalves</h2><span>Nachkontrolle Hyaluron</span><span class="duration">90min</span></div',
          start: "2021-07-16 07:00:00",
          end: "2021-07-16 09:00:00",
        },
      ],
      headerToolbar: {
        center: "timeGridDay,timeGridWeek,dayGridMonth,prev,next",
        right: "",
      },
      views: {
        basic: {
          // options apply to basicWeek and basicDay views
        },
        agenda: {
          // options apply to agendaWeek and agendaDay views
        },
        week: {
          // options apply to basicWeek and agendaWeek views
        },
        day: {
          // options apply to basicDay and agendaDay views
        },
      },
    });
  }
  calendar.render();


  $(".fc-daygrid-day-events").each(function () {
    var that = $(this);
    quantity = that.children(".fc-daygrid-event-harness").length
    appts = '<span class="appts">' + quantity + '<span> appt.</span></span>';
    console.log(that.children(".fc-daygrid-event-harness").length);

    if (that.children(".fc-daygrid-event-harness").length > 0) {
      that.prev(".fc-daygrid-day-top").append(appts);
    }
  })
    


  

  document.getElementById("home-table-button").onclick = function () {
    calendar.destroy();
  };
};
