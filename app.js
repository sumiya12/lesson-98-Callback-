function getRecipe() {
  setTimeout(() => {
    const ids = [12, 334, 121, 86];
    console.log(ids);

    setTimeout(
      (id) => {
        const jor = {
          name: "Цуйван",
          author: "Өсөхбаяр",
        };

        setTimeout(
          (zohiogch) => {
            const nextJor = {
              name: "Тахианы шөл",
              author: "Өсөхбаяр",
            };
            console.log(nextJor);
          },
          2000,
          jor.author
        );
        console.log(jor);
      },
      2000,
      ids[0]
    );
  }, 1500);
}

console.log("App ажиллаж эхэллээ...");
getRecipe();
