// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  //Devour button click
    $(".change-devour").on("click", function () {
      const id = $(this).data("id");

      const newDevourState = { value: true };
  
      // Send the PUT request.
      $.ajax(`/api/burger/${id}`, {
        type: "PUT",
        data: JSON.stringify(newDevourState),
        contentType: "application/json; charset=UTF-8",
      }).then(() => {
        location.reload();
      });
    });

  
    $(".create-form").on("submit", (event) => {
      event.preventDefault();
      const newBurger = {
        burger_name: $("#br").val().trim(),
        devoured: 0
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger,
      }).then(() => {
        location.reload();
      });
    });
  

  });
  