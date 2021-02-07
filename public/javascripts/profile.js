window.addEventListener("DOMContentLoaded", (event) => {
  const stamps = document.querySelectorAll(".tripName");
  const localPassport = document.querySelectorAll(".localPassport");
  const goToPassport = document.querySelectorAll(".goToPassport");
  const visitedPassport = document.querySelectorAll(".visitedPassport");
  const tags = document.querySelectorAll(".tags");
  const explore = document.querySelector('.need');




  explore.addEventListener('change', (e) => {
    e.preventDefault();
    if (e.target.value === 'default') return;
    console.log(e.target)
    const myStamp = e.target.value.split(" ").join("_") + "_stamp";
    stamps.forEach((stamp) => {
      if (stamp.id !== myStamp && !(stamp.classList.contains('hidden_stamp'))) {
        stamp.classList.add("hidden_stamp");
      } else {
        stamp.classList.remove('hidden_stamp')
      };
    });
  });

    // let eventListenerHandler = (nodeArray, cb) => {
      //   nodeArray.forEach((node) =>
      //     node.addEventListener("click", (event) => {
        //       event.stopPropagation();
        //       cb(event);
        //     })
        //   );
        // };

        // const tagsHandler = (event) => {
          //   console.log(event.target);
          //   if (event.target.classList.contains("hidden_stamp")) {
            //     const myStamp = event.target.id.split(" ").join("_") + "_stamp";
            //     stamps.forEach((stamp) => {
              //       if (stamp.id !== myStamp) {
                //         stamp.classList.remove("hidden_stamp");
                //       }
                //     });
                //   } else {
                  //     const myStamp = event.target.id.split(" ").join("_") + "_stamp";
                  //     stamps.forEach((stamp) => {
                    //       if (stamp.id !== myStamp) {
                      //         stamp.classList.add("hidden_stamp");
                      //       }
                      //     });
                      //   }
                      // };

                      // eventListenerHandler(tags, tagsHandler);


});
