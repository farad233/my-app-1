// import './App.css';
// import React from 'react';
class ITSchool {
    constructor(name, description, maxIndexGroup, MaxIndexStudents) {
        this.name = name;
        this.description = description;
        this.maxIndexGroup = maxIndexGroup;
        this.MaxIndexStudents = MaxIndexStudents;


        this.availableCourses = [];
        this.startedGroups = [];

    }

    registerCourse(courseName, totalLessons, availableTeachersAmount) {
        if (this.availableCourses.find(course => course.courseName === courseName)) {
            return;
        } else {
            this.availableCourses.push(new Course(courseName, totalLessons, availableTeachersAmount));
        }


    }


    startLearningGroup(courseName, teacherName, amountOfStudents) {
        if (this.availableCourses.find(course => course.courseName === courseName)) {
            this.availableCourses.forEach(course => {
                if (course.availableTeachersAmount > 0) {
                    course.availableTeachersAmount--;
                }
            });
            this.startedGroups.push(new LearningGroup(courseName, teacherName, amountOfStudents));
        }
    }

    endLearningGroup(courseName, teacherName) {
        this.availableCourses.forEach(course => {
            if (course.availableTeachersAmount >= 0) {
                course.availableTeachersAmount++;
            }
        });
        this.startedGroups = this.startedGroups.filter(course => course.courseName !== courseName || course.teacherName !== teacherName);
    }
    getLearningGroupByCourseName(courseName) {
        this.startedGroups = this.startedGroups.filter(course => course.courseName === courseName);
    }
}
class Course {
    constructor(courseName, totalLessons, availableTeachersAmount) {
        this.courseName = courseName;
        this.totalLessons = totalLessons;
        this.availableTeachersAmount = availableTeachersAmount;
    }

}
class LearningGroup {
    constructor(courseName, teacherName, amountOfStudents) {
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.amountOfStudents = amountOfStudents;
        this.passedLessons = [];
    }
    doneLessons(lessonTittle, lessonTopic) {
        if (this.passedLessons.find(lesson => lesson.lessonTittle === lessonTittle && lesson.lessonTopic === lessonTopic)) {
            return
        } else {
            this.passedLessons.push(new Lesson(lessonTittle, lessonTopic))
        }
    }
}
class Lesson {
    constructor(lessonTittle, lessonTopic) {
        this.lessonTittle = lessonTittle;
        this.lessonTopic = lessonTopic;
    }
}
const react = new ITSchool()
const lesson = new LearningGroup()


console.log(react)
console.log(lesson)
react.registerCourse('name', 'lessons', 20, 'teachers')
react.startLearningGroup('name', "teacherName", 12 + ' ' + 'student')
lesson.doneLessons('dsadsa', 'asdsadsa')
react.endLearningGroup('name', "teacherName")
// react.getLearningGroupByCourseName('react')


// export default class App extends React.Component {
//     componentDidMount() {

//     }
//     render() {
//         return (
//             <div className="wrapper  container">
//             </div>
//         );
//     }
// }
