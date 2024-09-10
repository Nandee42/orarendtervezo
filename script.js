$(document).ready(function () {
    // Show all subjects
    subjects.forEach(subject => {
        const subjectDiv = $("<div class='subject' draggable='true' ondragstart='drag(event)'></div>")
            .text(subject.name)
            .data("id", subject.id)
            .mousedown(function () {
                dropSubject(subject);
                showCourses(subject);
            })
            .mouseup(function () {
                hideCourses(subject);
            })
            .on("dragend", function (event) {
                hideCourses(subject);
            });
            console.log(subject.id);

        $("#subjectContainer").append(subjectDiv);
    });
    $("#subjectContainer").click(function () {
        console.log(addedCourses);
    });

});


var addedCourses = [];

const subjects = [
    {
        id: 1,
        name: "Kalkulus Előadás",
        courses: [
            {
                id: 1,
                name: "Kalkulus",
                startTime: "12:00",
                endTime: "15:00",
                day: "monday"
            },
            {
                id: 2,
                name: "Kalkulus",
                startTime: "8:00",
                endTime: "11:00",
                day: "thursday"
            }
        ]
    },
    {
        id: 2,
        name: "Kalkulus Gyakorlat",
        courses: [
            {
                id: 3,
                name: "Kalkulus",
                startTime: "9:00",
                endTime: "11:00",
                day: "monday"
            },
            {
                id: 4,
                name: "Kalkulus",
                startTime: "14:00",
                endTime: "16:00",
                day: "tuesday"
            },
            {
                id: 5,
                name: "Kalkulus",
                startTime: "12:00",
                endTime: "14:00",
                day: "wednesday"
            },
            {
                id: 6,
                name: "Kalkulus",
                startTime: "11:00",
                endTime: "13:00",
                day: "thursday"
            },
            {
                id: 7,
                name: "Kalkulus",
                startTime: "18:00",
                endTime: "20:00",
                day: "friday"
            }
        ]
    },
    {
        id: 3,
        name: "Algebra Előadás",
        courses: [
            {
                id: 8,
                name: "Algebra",
                startTime: "10:00",
                endTime: "11:00",
                day: "monday"
            },
            {
                id: 9,
                name: "Algebra",
                startTime: "13:00",
                endTime: "14:00",
                day: "wednesday"
            }
        ]
    },
    {
        id: 4,
        name: "Algebra Gyakorlat",
        courses: [
            {
                id: 10,
                name: "Algebra",
                startTime: "9:00",
                endTime: "11:00",
                day: "tuesday"
            },
            {
                id: 11,
                name: "Algebra",
                startTime: "14:00",
                endTime: "16:00",
                day: "thursday"
            },
            {
                id: 12,
                name: "Algebra",
                startTime: "12:00",
                endTime: "14:00",
                day: "friday"
            }
        ]
    },
    {
        id: 5,
        name: "Physics Lecture",
        courses: [
            {
                id: 13,
                name: "Physics",
                startTime: "10:00",
                endTime: "12:00",
                day: "monday"
            },
            {
                id: 14,
                name: "Physics",
                startTime: "13:00",
                endTime: "15:00",
                day: "wednesday"
            }
        ]
    },
    {
        id: 6,
        name: "Physics Lab",
        courses: [
            {
                id: 15,
                name: "Physics",
                startTime: "9:00",
                endTime: "11:00",
                day: "tuesday"
            },
            {
                id: 16,
                name: "Physics",
                startTime: "14:00",
                endTime: "16:00",
                day: "thursday"
            },
            {
                id: 17,
                name: "Physics",
                startTime: "12:00",
                endTime: "14:00",
                day: "friday"
            }
        ]
    }

];

function showCourses(subject) {
    subject.courses.forEach(course => {
        if (canAddCourseToTimetable(course)) {
            var courseDiv = $("<div class=\"course\" id='" + course.id + "' ondrop='drop(event)' ondragover='allowDrop(event)' draggable='true' ondragstart='drag(event)'></div>")
                .text(course.name)
                .data("slot", true)
                .data("subjectId", subject.id)
                .mousedown(function () {
                    dropSubject(subject);
                    showCourses(subject);
                })
                .mouseup(function () {
                    hideCourses(subject);
                })
                .on("dragend", function (event) {
                    hideCourses(subject);
                });

        }
        else {
            var courseDiv = $("<div class='course wrong' id='" + course.id + "'></div>")
                .text(course.name)
                .fadeIn(1000, function () {
                    $(this).fadeOut(1000, function () {
                        $(this).remove();
                    });
                });
        }


        const startTime = parseInt(course.startTime.split(":")[0]);
        const endTime = parseInt(course.endTime.split(":")[0]);
        const totalDuration = 20 - 8; // Duration of the day in hours (8:00 - 20:00)
        // Calculate the percent value of the timestamps
        const startPercentage = ((startTime - 8) / totalDuration) * 100;
        const endPercentage = ((endTime - 8) / totalDuration) * 100;

        // Set the position and size of the course div
        courseDiv.css("top", startPercentage + "%");
        courseDiv.css("height", endPercentage - startPercentage + "%");

        $(`#${course.day}`).append(courseDiv);
    });
}

function canAddCourseToTimetable(course) {
    const startTime = parseInt(course.startTime.split(":")[0]);
    const endTime = parseInt(course.endTime.split(":")[0]);

    for (let i = 0; i < addedCourses.length; i++) {
        const addedCourse = addedCourses[i];
        const addedStartTime = parseInt(addedCourse.startTime.split(":")[0]);
        const addedEndTime = parseInt(addedCourse.endTime.split(":")[0]);

        if (course.day === addedCourse.day && (startTime >= addedStartTime && startTime < addedEndTime || endTime > addedStartTime && endTime <= addedEndTime)) {

            return false;

        }
    }

    return true; // Course does not collide with any existing courses
}

function hideCourses(subject) {
    subject.courses.forEach(course => {
        if ($(`#${course.id}`).length && $(`#${course.id}`).data("slot") === true) {
            $(`#${course.id}`).remove();
        }
        //$(`#${course.day}`).children().each(function () {
        //    if ($(this).data("id") === course.id && $(this).data("slot") === true) {
        //        $(this).remove();
        //    }
        //});
    });
}

function dropSubject(subject) {
    subject.courses.forEach(course => {
        const courseElement = document.getElementById(course.id);
        if (courseElement) {
            courseElement.remove();
            addedCourses = addedCourses.filter(c => c.id !== course.id);
        }
    });
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    //ev.preventDefault();
    if ($(ev.target).hasClass("subject")) {
        ev.dataTransfer.setData("id", $(ev.target).data("id"));
        console.log($(ev.target).data("id"));
    } else if ($(ev.target).hasClass("course")) {
        ev.dataTransfer.setData("id", $(ev.target).data("subjectId"));
    }
}

function drop(ev) {
    //ev.preventDefault();
    var subjectId = ev.dataTransfer.getData("id");
    var courseId = $(ev.target).attr("id");

    console.log(subjectId);
    console.log(subjects);

    const course = subjects[subjectId - 1].courses.find(course => course.id === parseInt(courseId));

    if (course && $(ev.target).hasClass("course")) {
        var courseDiv = $("#" + courseId);

        courseDiv.data("slot", false);
        courseDiv.data("subjectId", subjectId);
        courseDiv.addClass("added");
        addedCourses.push(course);
        notify("Course added to timetable!");
    }
    
}
function notify(message){
    const notificationContainer = $(".notificationContainer");
    const notification = $("<div class='notification'></div>").text(message).fadeOut(3000, function(){  $(this).remove(); });
    notificationContainer.append(notification);
}


