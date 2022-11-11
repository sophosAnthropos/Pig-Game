export const selected = (option: number, appearance: string, num: number, color: string, p1I: number, p1T: string, p2I: number, p2T: string) => {
    switch (option) {
        case 0: 
            color = appearance
            break;
        case 1:
            p1I = num
            p1T = appearance
            break;
        case 2:
            p2I = num
            p2T = appearance
            break;
    }
}
// This function is passed to the array_of_images tsx file in the same functions directory this file is located in. 
// this function provides the images a way to pass selected image values to the data_context tsx file's ref Obj via the onClick prop added to each.
// those image values will be passed on from the modals to the game. 