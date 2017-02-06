function contacts() {
    this.c = [];
}

contacts.prototype.add = function(name, phone) {
    this.c.push({ "name": name, "phone": phone });
    return this;
};
contacts.prototype.show = function(id) {
    console.log(this.c[id]);
};
contacts.prototype.get = function(id) {
    return (this.c[id]);
};

contacts.prototype.delete = function(id) {
    this.c.splice(id, 1);
    return this;
};


contacts.prototype.update = function(id, name, phone) {
    this.delete(id);
    this.add(name, phone);

};

contacts.prototype.getLength = function() {
    return this.c.length;
};

var listMe = new contacts().add("me1", "65654665");
listMe.add("test44", "656556");
listMe.add("ggfgfd", "34334343");