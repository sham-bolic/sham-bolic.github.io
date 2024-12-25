enum Colours {
    "primarytext",
    "secondarytext"
}

export const colours = Object.values(Colours);
export type ColourType = keyof typeof Colours;