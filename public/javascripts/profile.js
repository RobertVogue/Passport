window.addEventListener("DOMContentLoaded", (event) => {
  const stamps = document.querySelectorAll(".tripName");
  const localPassport = document.querySelectorAll(".localPassport");
  const goToPassport = document.querySelectorAll(".goToPassport");
  const visitedPassport = document.querySelectorAll(".visitedPassport");
  const tags = document.querySelectorAll(".tags");

  let eventListenerHandler = (nodeArray, cb) => {
    nodeArray.forEach((node) =>
      node.addEventListener("click", (event) => {
        event.stopPropagation();
        cb(event);
      })
    );
  };

  const tagsHandler = (event) => {
    console.log(event.target);
    if (event.target.classList.contains("highlight_me")) {
      const myStamp = event.target.id.split(" ").join("_") + "_stamp";
      event.target.classList.remove("highlight_me");
      stamps.forEach((stamp) => {
        if (stamp.id !== myStamp) {
          console.log(stamp.id);
          stamp.classList.remove("hidden_stamp");
        }
      });
    } else {
      const myStamp = event.target.id.split(" ").join("_") + "_stamp";
      event.target.classList.add("highlight_me");
      stamps.forEach((stamp) => {
        if (stamp.id !== myStamp) {
          stamp.classList.add("hidden_stamp");
        }
      });
    }
  };

  eventListenerHandler(tags, tagsHandler);
});
