class MyFormData {
    constructor(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

    DataDisplay() {
        let output = "<h1>All Information</h1>";
        output += "<p><strong>Name:</strong> " + this.name + "</p>";
        output += "<p><strong>Address:</strong> " + this.address + "</p>";
        output += "<p><strong>Phone:</strong> " + this.phone + "</p>";
        return output;
    }
}
