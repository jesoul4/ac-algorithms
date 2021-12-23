// 3) In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div(like "Laura really likes pink cucumbers.") -- >
// Bonus: Make an object with the list elements as keys and the inputs as values.  -->


function makeMadLib() {
    var noun = $("#noun").val();
    var adjective = $("#adjective").val();
    var person = $("#person").val();
    $("#story").append("When you called my name " + person + ", I became as " + adjective + " " + noun + ".");
}
$("#lib-button").on("click", function() {
    makeMadLib();
});
console.log("Jesoul", "special", "being");