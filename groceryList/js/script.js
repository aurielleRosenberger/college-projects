"use strict"

const displayGroceryList = groceries => {
    let groceryString = "";
    if (groceries.length > 0) {
        groceries = groceries.map( item => [item[0], new Date(item[1])] );

        groceries.sort( (item1, item2) => {
            const date1 = item1[1];
            const date2 = item2[1];
            if (date1 < date2) { return -1; }
            else if (date1 > date2) { return 1; }
            else { return 0; }
        });

        groceryString = groceries.reduce( (prev, curr) => {
            return prev + curr[1].toDateString() + " - " + curr[0] + "\n";
        }, "");
    }

    $("#grocery_list").val(groceryString);
    $("#item").focus();
};

$(document).ready( () => {
    const groceryString = localStorage.E15groceries;
    const groceries = (groceryString) ? JSON.parse(groceryString) : [];

    $("#add_item").click( () => {
        const item = $("#item").val();
        const dateString = $("#due_date").val();
        const dueDate = new Date(dateString);
        
        if (item && dateString && dueDate != "Invalid Date") {
            const newItem = [item, dateString];
            groceries.push(newItem);
            localStorage.E15groceries = JSON.stringify(groceries);

            $("#item").val("");
            $("#due_date").val("");
            displayGroceryList(groceries);
        } else {
            alert("Please enter a grocery item and valid due date.");
            $("#item").select();
        }
    });
    
    $("#clear_groceries").click( () => {
        groceries.length = 0;
        localStorage.removeItem("E15groceries");
        $("#grocery_list").val("");
        $("#item").focus();
    });   
    
    $("#filter").click( () => {
        let searchTerm = prompt("Enter text to filter groceries by, or leave blank to see all groceries.");
        if (searchTerm === "") {
            displayGroceryList(groceries);
        }
        else {
            searchTerm = searchTerm.toLowerCase();

            const searchGroceries = current => {
                const text = current[0].toLowerCase();
                const date = new Date(current[1]).toDateString().toLowerCase();
                return date.indexOf(searchTerm) > -1 || text.indexOf(searchTerm) > -1;
            };
            const filteredGroceries = groceries.filter(searchGroceries);
            displayGroceryList(filteredGroceries);
        }
    });
    
    displayGroceryList(groceries);
});
