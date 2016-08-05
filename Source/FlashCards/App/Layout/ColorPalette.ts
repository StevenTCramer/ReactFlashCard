//https://material.google.com/style/color.html#color-color-palette

export class ColorPalette {
  // Material UI Palettes
  public static deepOrange: string[] = ["#FBE9E7", "#FFCCBC", "#FFAB91", "#FF8A65", "#FF7043", "#FF5722", "#F4511E",
    "#E64A19", "#D84315", "#BF360C", "#FF9E80", "#FF6E40", "#FF3D00", "#DD2C00"];
  public static lightGreen: string[] = ["#F1F8E9", "#DCEDC8", "#C5E1A5", "#AED581", "#9CCC65", "#8BC34A", "#7CB342",
    "#689F38", "#558B2F", "#33691E", "#CCFF90", "#B2FF59", "#76FF03", "#64DD17"];

  public static debugPalette: string[] = ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69",
    "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"];

  private static productionPalette: string[] = [];

  public static primaryPalette: string[] = ColorPalette.deepOrange;
  public static secondaryPalette: string[] = ColorPalette.lightGreen;

  public static primary: string = ColorPalette.primaryPalette[5];
  public static primarylight: string = ColorPalette.primaryPalette[1];
  public static primarydark: string = ColorPalette.primaryPalette[7];;

  public static accent: string = ColorPalette.secondaryPalette[11];
  public static accentlight: string = ColorPalette.secondaryPalette[10];
  public static accentdark: string = ColorPalette.secondaryPalette[12];

  // DarkText
  public static darkText: string = "#000000";
  public static darkTextPrimary: string = "rgba(0, 0, 0, 0.87)";
  public static darkTextSecondary: string = "rgba(0, 0, 0, 0.54)";
  public static darkTextDisable: string = "rgba(0, 0, 0, 0.38)";
  public static darkTextDivider: string = "rgba(0, 0, 0, 0.12)";

  //LightText
  public static lightText: string = "#FFFFFF";
  public static lightTextPrimary: string   = "rgba(255, 255, 255, 1.0)";
  public static lightTextSecondary: string = "rgba(FF, FF, FF, 0.70)";
  public static lightTextDisable: string   = "rgba(FF, FF, FF, 0.50)";
  public static lightTextDivider: string = "rgba(FF, FF, FF, 0.12)";
}
