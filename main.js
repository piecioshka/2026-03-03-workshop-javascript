// document.querySelector('h1')
// JSON = JavaScript Object Notation

function renderPhotos(photos) {
  photos.forEach(function (photo) {
    // console.log("photo", photo);
    const img = document.createElement("img");
    img.src = photo;
    // Renderowanie zdjęcia w galerii poprzez dodanie elementu <img> do kontenera o id "photo-gallery"
    document.querySelector('#photo-gallery').append(img)
  });
}

function parsePhotos(photos) {
  const images = [];
  for (
    // inicjalizacja
    let i = 0;
    // warunek kontynuacji
    i < photos.length;
    // iteracja (inkrementacja postfiksowa)
    i++
  ) {
    const photo = photos[i];
    images.push(photo.imageUrl);
  }
  // console.log("images", images);
  renderPhotos(images);
}

function fetchPhotos() {
  const url = "https://fakes.piecioshka.dev/photos";
  // Wysłanie zapytania HTTP GET do serwera, który zwróci nam dane w formacie JSON
  fetch(url)
    // Po otrzymaniu odpowiedzi od serwera, przekształcamy ją na format JSON
    .then((response) => response.json())
    // Po przekształceniu danych na format JSON, możemy je wykorzystać w naszej aplikacji
    .then((x) => {
      console.log("photos", x);
      parsePhotos(x);
    })
    .catch((reason) => {
      console.error("Error fetching photos");
    });
}

function main() {
  console.log("app started");
  fetchPhotos();
}

main();
