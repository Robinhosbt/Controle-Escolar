document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const grades = [];
        const attendances = [];

        for (let i = 1; i <= 4; i++) {
            const gradeInput = document.getElementById(`grade${i}`);
            const attendanceInput = document.getElementById(`attendance${i}`);
            
            grades.push(parseFloat(gradeInput.value));
            attendances.push(parseFloat(attendanceInput.value));
        }

        const averageGrade = grades.reduce((total, grade) => total + grade, 0) / 4;
        const averageAttendance = attendances.reduce((total, attendance) => total + attendance, 0) / 4;

        let resultText = "";

        if (averageGrade >= 6 && averageAttendance >= 75) {
            resultText = "Aprovado!";
            resultDiv.style.color = "blue";
        } else if (averageGrade < 6) {
            resultText = "Reprovado por nota!";
            resultDiv.style.color = "red";
        } else {
            resultText = "Reprovado por frequência!";
            resultDiv.style.color = "red";
        }

        resultDiv.textContent = resultText;
    });
});
