function CardHtml(resto) {
  return `
     <article>
                    <div class="card">
                         <img src="${resto.pictureId}"  class="card-img" alt=${resto.name}>
                         <div class="card-lokasi">
                              <h3>Kota,${resto.city}</h3>
                         </div>
                         <div class="card-body">
                              <h4 class="card-rating">Rating ${resto.rating}</h4>
                              <h5 class="card-title"><a href="">${resto.name}</a></h5>
                              <p class="card-text">${resto.description}</p>
                         </div>
                    </div>
     </article>

     `;
}

export { CardHtml };
