export function parseImages(images: string[]) {
 try {
   const parsedImages = JSON.parse(images[0]);

   if (Array.isArray(parsedImages)) {
     return parsedImages;
   } else {
     return images;
   }
 } catch (error) {
   return images;
 }
}