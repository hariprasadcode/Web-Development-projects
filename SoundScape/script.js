let container = document.getElementsByClassName("container")[0];

fetch("https://itunes.apple.com/search?term=taylor+swift&media=music&entity=song&limit=20")
  .then(d => d.json())
  .then(f_d => {
    f_d.results.map((e) => {

      container.innerHTML += `
      
        <div class="box">
       
          <img src="${e.artworkUrl100}" />
          <h3>${e.trackName}</h3>
          <p>${e.artistName}</p>
          <p>${e.collectionName}</p>
          <audio controls src="${e.previewUrl}"></audio>
        </div>
      `;

    });
  });
