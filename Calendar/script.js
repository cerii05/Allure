function goToHome(){
    window.location.href = "../index.html";
}

function goToGallery(){
    window.location.href = "../Gallery/galleryPage.html";
}

function goToCalendar(){
    window.location.href = "calendarPage.html";
}

function goToProfile(){
    window.location.href = "../Profile/profilePage.html";
}

function goToUpload(){
    window.location.href = "../Upload/uploadPage.html";
}

function goToAI(){
    window.location.href = "../AI/askAIpage.html";
}

// Calendar Content Function 

    document.addEventListener('DOMContentLoaded', () => {
        const daysContainer = document.querySelector('.calendar .days');
        const monthYearDisplay = document.getElementById('month-year');
        const agendaList = document.getElementById('agenda-list');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');

        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();

        // Sample Agenda Data
        const agendaData = {
            '2024-12-18': ['09:00 AM - Formal meeting (Monochrome)', '04:00 PM - Sarah\'s Birthday Party (Casual, floral)'],
            '2024-12-25': ['All day - Christmas Celebration'],
        };

        function renderCalendar(month, year) {
            daysContainer.innerHTML = '';
            const firstDayOfMonth = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            for (let i = 0; i < firstDayOfMonth; i++) {
                daysContainer.innerHTML += '<div></div>';
            }

            for (let day = 1; day <= daysInMonth; day++) {
                const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const dayDiv = document.createElement('div');
                dayDiv.textContent = day;
                if (agendaData[dateKey]) {
                    dayDiv.classList.add('has-agenda');
                }
                dayDiv.addEventListener('click', () => {
                    showAgenda(dateKey);
                    document.querySelectorAll('.calendar .days div').forEach(d => d.classList.remove('selected'));
                    dayDiv.classList.add('selected');
                });
                daysContainer.appendChild(dayDiv);
            }

            monthYearDisplay.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
        }

        function showAgenda(dateKey) {
            agendaList.innerHTML = '';
            if (agendaData[dateKey]) {
                agendaData[dateKey].forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    agendaList.appendChild(li);
                });
            } else {
                agendaList.innerHTML = '<li>No agenda for this date.</li>';
            }
        }

        prevBtn.addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar(currentMonth, currentYear);
        });

        nextBtn.addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar(currentMonth, currentYear);
        });

        renderCalendar(currentMonth, currentYear);
    });
