
import { galleryItems } from './gallery-items.js';


const galleryBoxEl = document.querySelector('.gallery');

const makeGalleryCard = ({ preview, original, description } = {}) => {
   
  return `
  <div class="gallery__item">
  <a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a>
</div>
  `;
}

const galleryStringArrayEl = galleryItems.map((el) => {
  return makeGalleryCard(el);
});

galleryBoxEl.insertAdjacentHTML('beforeend', galleryStringArrayEl.join(""));

new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay: 250} );
