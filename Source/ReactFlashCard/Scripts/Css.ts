namespace Css {

    export class Display {
        static Inline: DisplayOption           = "inline";
        static Block: DisplayOption            = "block";
        static Flex: DisplayOption             = "flex";
        static InlineBlock: DisplayOption      = "inline-block";
        static InlineFlex: DisplayOption       = "inline-flex";
        static InlineTable: DisplayOption      = "inline-table";
        static ListItem: DisplayOption         = "list-item";
        static RunIn: DisplayOption            = "run-in";
        static Table: DisplayOption            = "table";
        static TableCaption: DisplayOption     = "table-caption";
        static TableColumnGroup: DisplayOption = "table-column-group";
        static TableHeaderGroup: DisplayOption = "table-header-group";
        static TableFooterGroup: DisplayOption = "table-footer-group";
        static TableRowGroup: DisplayOption    = "table-row-group";
        static TableCell: DisplayOption        = "table-cell";
        static TableColumn: DisplayOption      = "table-column";
        static TableRow: DisplayOption         = "table-row";
        static None: DisplayOption             = "none";
        static Initial: DisplayOption          = "initial";
        static Inherit: DisplayOption          = "inherit";
    }

    export type DisplayOption = "inline" | "block" | "flex" | "inline-block" | "inline-flex" | "inline-table"
        | "list-item" | "run-in" | "table" | "table-caption" | "table-column-group"
        | "table-header-group" | "table-footer-group" | "table-row-group" | "table-cell"
        | "table-column" | "table-row" | "none" | "initial" | "inherit";
}

