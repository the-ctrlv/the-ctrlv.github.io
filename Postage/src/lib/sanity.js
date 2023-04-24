import createImageUrlBuilder from '@sanity/image-url';
// eslint-disable-next-line import/no-unresolved
import { definePreview } from 'next-sanity/preview';
import { sanityConfig } from './sanity.config';

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source) => imageBuilder.image(source).auto('format').fit('max');

export const usePreview = definePreview(sanityConfig);
