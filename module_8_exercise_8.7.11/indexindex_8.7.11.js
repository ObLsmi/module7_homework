async function getRandomimage() {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        if (!res.ok) {
            throw new Error("Ну пиздец, ошибка( не будет босаки(((")
        }
        const data = await res.json();
        if (data) {
            const url = data.message;
            displayDogImage(url);
        }
    } catch {
        console.log(e.message);
    }
}

function displayDogImage(imageUrl) {
    const dogImage= document.getElementById("dog-image");
    dogImage.style.display = "block"
    dogImage.src = imageUrl;
}


// async function getRandomDogImage() {
//     try {
//       const res = await fetch("https://dog.ceo/api/breeds/image/random");
//       if (!res.ok) {
//         throw new Error("Что-то пошло не так!");
//       }
//       const data = await res.json();
//       if (data) {
//         const url = data.message;
//         displayDogImage(url);
//       }
//     } catch (e) {
//       console.error(e.message);
//     }
//   }
//   // Вывод картинки на страницу
//   function displayDogImage(imageUrl) {
//     const dogImage = document.getElementById("dog-image");
//     dogImage.style.display = "block";
//     dogImage.src = imageUrl;
//   }


// Подсказка
// Чтобы поместить адрес на картинку через JS используйте запись по типу:
//     const image = document.querySelector("...")
//     image.src = "https://dog...."