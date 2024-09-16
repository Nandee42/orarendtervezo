$(document).ready(function () {
    // Show all subjects
    subjects.forEach(subject => {
        const subjectDiv = $("<div class='subject hover-shadow' draggable='true' ondragstart='drag(event)'></div>")
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

        $("#subjectContainer").append(subjectDiv);
    });
    loadFromLocalStorage();
});


var addedCourses = [];

const subjects = [
    {
        id: 1,
        name: "Calculus Lecture",
        courses: [
            {
                id: 1,
                subjectId: 1,
                name: "Calculus Lecture",
                startTime: "12:00",
                endTime: "15:00",
                day: "monday"
            },
            {
                id: 2,
                subjectId: 1,
                name: "Calculus Lecture",
                startTime: "8:00",
                endTime: "11:00",
                day: "thursday"
            }
        ]
    },
    {
        id: 2,
        name: "Calculus Practice",
        courses: [
            {
                id: 3,
                subjectId: 2,
                name: "Calculus Practice",
                startTime: "9:00",
                endTime: "11:00",
                day: "monday"
            },
            {
                id: 4,
                subjectId: 2,
                name: "Calculus Practice",
                startTime: "14:00",
                endTime: "16:00",
                day: "tuesday"
            },
            {
                id: 5,
                subjectId: 2,
                name: "Calculus Practice",
                startTime: "12:00",
                endTime: "14:00",
                day: "wednesday"
            },
            {
                id: 6,
                subjectId: 2,
                name: "Calculus Practice",
                startTime: "11:00",
                endTime: "13:00",
                day: "thursday"
            },
            {
                id: 7,
                subjectId: 2,
                name: "Calculus Practice",
                startTime: "18:00",
                endTime: "20:00",
                day: "friday"
            }
        ]
    },
    {
        id: 3,
        name: "Algebra Practice",
        courses: [
            {
                id: 8,
                subjectId: 3,
                name: "Algebra Practice",
                startTime: "10:00",
                endTime: "11:00",
                day: "monday"
            },
            {
                id: 9,
                subjectId: 3,
                name: "Algebra Practice",
                startTime: "13:00",
                endTime: "14:00",
                day: "wednesday"
            }
        ]
    },
    {
        id: 4,
        name: "Algebra Lecture",
        courses: [
            {
                id: 10,
                subjectId: 4,
                name: "Algebra Lecture",
                startTime: "9:00",
                endTime: "11:00",
                day: "tuesday"
            },
            {
                id: 11,
                subjectId: 4,
                name: "Algebra Lecture",
                startTime: "14:00",
                endTime: "16:00",
                day: "wednesday"
            },
            {
                id: 12,
                subjectId: 4,
                name: "Algebra Lecture",
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
                subjectId: 5,
                name: "Physics Lecture",
                startTime: "16:00",
                endTime: "18:00",
                day: "monday"
            },
            {
                id: 14,
                subjectId: 5,
                name: "Physics Lecture",
                startTime: "17:00",
                endTime: "19:00",
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
                subjectId: 6,
                name: "Physics Lab",
                startTime: "9:00",
                endTime: "11:00",
                day: "wednesday"
            },
            {
                id: 16,
                subjectId: 6,
                name: "Physics Lab",
                startTime: "14:00",
                endTime: "16:00",
                day: "thursday"
            },
            {
                id: 17,
                subjectId: 6,
                name: "Physics Lab",
                startTime: "12:00",
                endTime: "14:00",
                day: "friday"
            }
        ]
    },
    {
        id: 7,
        name: "Chemistry Lecture",
        courses: [
            {
                id: 18,
                subjectId: 7,
                name: "Chemistry Lecture",
                startTime: "18:00",
                endTime: "20:00",
                day: "monday"
            },
            {
                id: 19,
                subjectId: 7,
                name: "Chemistry Lecture",
                startTime: "18:00",
                endTime: "20:00",
                day: "friday"
            }
        ]
    },
    {
        id: 8,
        name: "Chemistry Lab",
        courses: [
            {
                id: 20,
                subjectId: 8,
                name: "Chemistry Lab",
                startTime: "9:00",
                endTime: "11:00",
                day: "tuesday"
            },
            {
                id: 21,
                subjectId: 8,
                name: "Chemistry Lab",
                startTime: "14:00",
                endTime: "16:00",
                day: "thursday"
            },
            {
                id: 22,
                subjectId: 8,
                name: "Chemistry Lab",
                startTime: "14:00",
                endTime: "16:00",
                day: "friday"
            }
        ]
    },
    {
        id: 9,
        name: "Biology Lecture",
        courses: [
            {
                id: 23,
                subjectId: 9,
                name: "Biology Lecture",
                startTime: "8:00",
                endTime: "10:00",
                day: "monday"
            },
            {
                id: 24,
                subjectId: 9,
                name: "Biology Lecture",
                startTime: "9:00",
                endTime: "11:00",
                day: "friday"
            }
        ]
    },
    {
        id: 10,
        name: "Biology Lab",
        courses: [
            {
                id: 25,
                subjectId: 10,
                name: "Biology Lab",
                startTime: "9:00",
                endTime: "11:00",
                day: "tuesday"
            },
            {
                id: 26,
                subjectId: 10,
                name: "Biology Lab",
                startTime: "12:00",
                endTime: "14:00",
                day: "monday"
            },
            {
                id: 27,
                subjectId: 10,
                name: "Biology Lab",
                startTime: "17:00",
                endTime: "19:00",
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
        courseDiv.removeClass("popIn");
        courseDiv[0].offsetWidth;
        courseDiv.addClass("popIn");
        addedCourses.push(course);
        notify("Course added to timetable!");
    }

}
function addCourse(course) {
    const subject = subjects.find(subject => subject.id === course.subjectId);
    var courseDiv = $("<div class=\"course added\" id='" + course.id + "' ondrop='drop(event)' ondragover='allowDrop(event)' draggable='true' ondragstart='drag(event)'></div>")
        .text(course.name)
        .data("slot", false)
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


    const startTime = parseInt(course.startTime.split(":")[0]);
    const endTime = parseInt(course.endTime.split(":")[0]);
    const totalDuration = 20 - 8; // Duration of the day in hours (8:00 - 20:00)
    // Calculate the percent value of the timestamps
    const startPercentage = ((startTime - 8) / totalDuration) * 100;
    const endPercentage = ((endTime - 8) / totalDuration) * 100;

    // Set the position and size of the course div
    courseDiv.css("top", startPercentage + "%");
    courseDiv.css("height", endPercentage - startPercentage + "%");

    console.log(course);

    $(`#${course.day}`).append(courseDiv);
    addedCourses.push(course);
}

function clearTimetable() {
    addedCourses = [];
    $(".course").remove();
}

function notify(message, wrong = false) {
    const notificationContainer = $(".notificationContainer");
    if (wrong){
        var notification = $("<div class='notification wrong'></div>")
    }
    else{
        var notification = $("<div class='notification'></div>")
    }
    notification.text(message).fadeOut(3000, function () { $(this).remove(); });
    notificationContainer.prepend(notification);
}

function saveTimetable() {
    const savedTimetables = JSON.parse(localStorage.getItem("timetables")) || [];
    if (savedTimetables.length >= 3) {
        notify("Cannot save more than 3 timetables", true);
        return;
    }
    savedTimetables.push(addedCourses);
    savedTimetablesDiv = $("<div class='savedTimeTable'><div>")
        .text(savedTimetables.length)
        .click(function () {
            loadTimetable(savedTimetables.length);
        });
    deleteButton = $("<div class='deleteTimeTable'>X</div>")
        .click(function () {
            deleteSavedTimetable(savedTimetables.length);
        });
    savedTimetablesDiv.append(deleteButton);
    $("#savedTimetables").append(savedTimetablesDiv);
    localStorage.setItem("timetables", JSON.stringify(savedTimetables));
    notify("Timetable saved successfully");
}

function loadTimetable(number) {
    clearTimetable();
    const savedTimetables = JSON.parse(localStorage.getItem("timetables")) || [];
    if (number < 1 || number > 3) {
        notify("Invalid timetable number", true);
        return;
    }
    if (savedTimetables.length < number) {
        notify("Timetable not found", true);
        return;
    }
    savedTimetables[number - 1].forEach(course => {
        addCourse(course);
    });
}
function deleteSavedTimetable(number) {
    const savedTimetables = JSON.parse(localStorage.getItem("timetables")) || [];
    if (number < 1 || number > 3) {
        notify("Invalid timetable number", true);
        return;
    }
    if (savedTimetables.length < number) {
        notify("Timetable not found", true);
        return;
    }
    savedTimetables.splice(number - 1, 1);
    localStorage.setItem("timetables", JSON.stringify(savedTimetables));
    notify("Timetable deleted successfully");
    $(".savedTimeTable").remove();
    savedTimetables.forEach((timetable, index) => {
        savedTimetablesDiv = $("<div class='savedTimeTable'><div>")
            .text(index + 1)
            .click(function () {
                loadTimetable(index + 1);
            });
        deleteButton = $("<div class='deleteTimeTable'>X</div>")
            .click(function () {
                deleteSavedTimetable(index + 1);
            });
        savedTimetablesDiv.append(deleteButton);
        $("#savedTimetables").append(savedTimetablesDiv);
    });
}
function loadFromLocalStorage() {
    const savedTimetables = JSON.parse(localStorage.getItem("timetables")) || [];
    savedTimetables.forEach((timetable, index) => {
        savedTimetablesDiv = $("<div class='savedTimeTable'><div>")
            .text(index + 1)
            .click(function () {
                loadTimetable(index + 1);
            });
        deleteButton = $("<div class='deleteTimeTable'>X</div>")
            .click(function () {
                deleteSavedTimetable(index + 1);
            });
        savedTimetablesDiv.append(deleteButton);
        $("#savedTimetables").append(savedTimetablesDiv);
    });
}

