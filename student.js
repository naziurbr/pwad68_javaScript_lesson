class StudentClass {
    constructor(name, roll, address) {
        this.name = name;
        this.roll = roll;
        this.address = address;
    }

    StudentInfo() {
        let output = "<h1>Student Information</h1>";
        output += "<p><strong>Name:</strong> " + this.name + "</p>";
        output += "<p><strong>Roll No:</strong> " + this.roll + "</p>";
        output += "<p><strong>Address:</strong> " + this.address + "</p>";
        return output;
    }
}
