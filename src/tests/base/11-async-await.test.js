import { getImagen } from "../../base-pruebas/11-async-await"

describe('Pruebas con async-await y fetch', () => {
    test('Debe de retornar la URL de la imagen ', async () => {
        const url  =  await getImagen();
         console.log(url);
        expect( url.includes('https://')).toBe(true);
    })
    
})