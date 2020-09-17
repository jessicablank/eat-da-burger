// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  $(".delete-burger").on("click", function () {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax(`/api/burger/${id}`, {
      type: "DELETE",     
    }).then(() => {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //Devour button click
    $(".change-devour").on("click", function () {
      const id = $(this).data("id");
      const newDevour = $(this).data("newdevour");
      const newDevourState = {value: newDevour}
     
      $.ajax(`/api/burger/${id}/devour`, {
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
  
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger,
      }).then(() => {
        location.reload();
      });
    });
  });
  