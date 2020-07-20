// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
    $(".change-devour").on("click", function () {
      const id = $(this).data("id");
      const newDevour = $(this).data("newDevour");
  
      const newDevourState = { value: newDevour };
  
      // Send the PUT request.
      $.ajax(`/api/burger/${id}/devour`, {
        type: "PUT",

        data: JSON.stringify(newDevourState),
        contentType: "application/json; charset=UTF-8",
      }).then(() => {
        
        location.reload();
      });
    });
  
    $(".create-form").on("submit", (event) => {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: $("").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(() => {
        // Reload the page to get the updated list
        location.reload();
      });
    });
  

  });
  