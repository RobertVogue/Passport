window.addEventListener("DOMContentLoaded", (event) => {
  const stamps = document.querySelectorAll(".tripName");
  const passports = document.querySelectorAll(".passport_btn");
  const tags = document.querySelectorAll(".tags");
  const explore = document.querySelector(".need");

  explore.addEventListener("change", (e) => {
    e.preventDefault();
    if (e.target.value === "default") return;
    const myStamp = e.target.value.split(" ").join("_") + "_stamp";
    stamps.forEach((stamp) => {
      if (stamp.id !== myStamp && !stamp.classList.contains("hidden_stamp")) {
        stamp.classList.add("hidden_stamp");
      } else {
        stamp.classList.remove("hidden_stamp");
      }
    });
  });

  const renderDom = (idArr) => {
    console.log(idArr);
    idArr.forEach((id) => {
      const stamp = document.getElementById(id + "_stamp");
      if (stamp) {
        stamp.classList.remove("hidden_stamp");
      }
    });
  };

  const passportHandler = (event) => {
    stamps.forEach((stamp) => stamp.classList.add("hidden_stamp"));
    event.stopPropagation();
    event.preventDefault();
    const stampIds = event.target.getAttribute("value");
    const str = Array.from(stampIds);
    const res = [];
    str.forEach((ele) => {
      if (Number(ele)) {
        res.push(Number(ele));
      }
    });
    renderDom(res);
  };

  passports.forEach((passport) =>
    passport.addEventListener("click", passportHandler)
  );
});
