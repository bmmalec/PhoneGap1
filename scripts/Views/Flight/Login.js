function AddCrew() {
    if ($("#EmployeeNum").val() == "") { return; }

    // Demo Only: Inserts Different Names
    var CrewMemberName = null;
    switch($("#Crew li").length)
    {
        case 0: CrewMemberName = "E.L. James";
            break;
        case 1: CrewMemberName = "William Butler Yeats";
            break;
        case 2: CrewMemberName = "Rudyard Kipling";
            break;
        case 3: CrewMemberName = "J.R.R. Tolkien";
            break;
        case 4: CrewMemberName = "Ernest Hemingway";
            break;
        case 5: CrewMemberName = "John Steinbeck, Jr.";
            break;
        case 6: CrewMemberName = "John Hersey";
            break;
        case 7: CrewMemberName = "Toni Morrison";
            break;
        case 8: CrewMemberName = "Pearl S. Buck";
            break;
        case 9: CrewMemberName = "J. K. Rowling";
            break;
        case 10: CrewMemberName = "Stephen King";
            break;
        case 11: CrewMemberName = "Philip K. Dick";
            break;
        case 12: CrewMemberName = "Harper Lee";
            break;
        case 13: CrewMemberName = "William Faulkner";
            break;
        case 14: CrewMemberName = " Virginia Woolf";
            break;
        default:
            CrewMemberName = "Miscellaneous #" + $("#Crew li").length;
    }

    // STEP 1: Append the crew member's name to the Top of the List.
    $("#Crew").prepend("<li data-icon='delete'><a href='#' onclick='DeleteCrew(this);'>" + CrewMemberName + "</a></li>");
    $("#Crew").listview("refresh");

    // STEP 2: Clear the input and Set Focus().
    $("#EmployeeNum").val("");
    $("#EmployeeNum").focus();

}

function DeleteCrew(cntrl) {
    $(cntrl).closest("li").remove();
}