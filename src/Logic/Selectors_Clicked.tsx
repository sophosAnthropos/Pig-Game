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