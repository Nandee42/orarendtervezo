$(document).ready(function () {
    $("#timeTable").click(function () {
        console.log("click");
        $(this).css("background-color", "white");
    });
    
    subjects.forEach(subject => {
        const subjectDiv = $("<div class='subject'></div>")
            .text(subject.name)
            .data("id", subject.id);
        
        $("#subjectContainer").append(subjectDiv);
    });

    $("#subjectContainer").click(function (){
        showCourses(courses);
    });
});

function showCourses(courses) {
    courses.forEach(course => {
        const courseDiv = $("<div class=\"course\"></div>").text(course.name);
        
        const startTime = parseInt(course.startTime.split(":")[0]);
        const endTime = parseInt(course.endTime.split(":")[0]);

        const totalDuration = 16 - 8; // Duration of the day in hours (8:00 - 16:00)

        // Calculate the percent value of the timestamps
        const startPercentage = ((startTime - 8) / totalDuration) * 100; 
        const endPercentage = ((endTime - 8) / totalDuration) * 100; 
        
        // Set the position and size of the course div
        courseDiv.css("top", startPercentage + "%"); 
        courseDiv.css("height", endPercentage - startPercentage + "%");

        $(`#${course.day}`).append(courseDiv);
    });
}

const subjects = [
    {
        id: 1,
        name: "Kalkulus Előadás",
        courses: [
            {
                id: 1,
                name: "Kalkulus",
                startTime: "9:00",
                endTime: "11:00",
                day: "monday"
            },
            {
                id: 2,
                name: "Kalkulus",
                startTime: "14:00",
                endTime: "16:00",
                day: "tuesday"
            },
            {
                id: 3,
                name: "Kalkulus",
                startTime: "12:00",
                endTime: "14:00",
                day: "wednesday"
            },
            {
                id: 4,
                name: "Kalkulus",
                startTime: "11:00",
                endTime: "13:00",
                day: "thursday"
            },
            {
                id: 5,
                name: "Kalkulus",
                startTime: "8:00",
                endTime: "10:00",
                day: "friday"
            }
        ]
    },
    {
        id: 2,
        name: "Kalkulus Gyakorlat",
        courses: [
            {
                id: 6,
                name: "Kalkulus",
                startTime: "9:00",
                endTime: "11:00",
                day: "monday"
            },
            {
                id: 7,
                name: "Kalkulus",
                startTime: "14:00",
                endTime: "16:00",
                day: "tuesday"
            },
            {
                id: 8,
                name: "Kalkulus",
                startTime: "12:00",
                endTime: "14:00",
                day: "wednesday"
            },
            {
                id: 9,
                name: "Kalkulus",
                startTime: "11:00",
                endTime: "13:00",
                day: "thursday"
            },
            {
                id: 10,
                name: "Kalkulus",
                startTime: "8:00",
                endTime: "10:00",
                day: "friday"
            }
        ]
    },
    
];

const courses = [
    {
        id: 1,
        name: "Course 1",
        startTime: "9:00",
        endTime: "11:00",
        day: "monday"
    },
    {
        id: 2,
        name: "Course 2",
        startTime: "14:00",
        endTime: "16:00",
        day: "tuesday"
    },
    {
        id: 3,
        name: "Course 3",
        startTime: "12:00",
        endTime: "14:00",
        day: "wednesday"
    },
    {
        id: 4,
        name: "Course 4",
        startTime: "11:00",
        endTime: "13:00",
        day: "thursday"
    },
    {
        id: 5,
        name: "Course 5",
        startTime: "8:00",
        endTime: "10:00",
        day: "friday"
    }
];

/*
    formatTime(time) {
      const hours = Math.floor(time / 60) + 8;
      const minutes = time % 60;

      const formattedHours = hours.toString();
      const formattedMinutes = minutes.toString().padStart(2, '0');

      const formattedTime = `${formattedHours}:${formattedMinutes}`;

      return formattedTime;
    },

    // Position, scale

    this.height = this.data.length * (this.dayHeight / 720) + 'px';
    this.top = this.data.startTime * (this.dayHeight / 720) + 'px';

*/