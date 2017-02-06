function main() {
    drawList();
    $('li').find("button").on("click", onDelete);


}

function drawList() {
    for (var i = 0; i < listMe.getLength(); i++) {
        var newString = "<li>" + "name: " + listMe.get(i).name + " phone: " + listMe.get(i).phone + "<button class='" + i + "'>Delete</button>" + "</li>";
        $('ul').append(newString);
    }

}
main();

function onDelete() {
    var button = $(this);
    listMe.delete(($(button).attr("class")));
    // console.log(button);
    var li = button.closest("li");
    li.remove();
}