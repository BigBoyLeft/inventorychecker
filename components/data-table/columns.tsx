"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { ApiRow } from "@/types/ApiRow"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export const TypesAndLabels = [
    {
        value: "accounts",
        label: "Player Accounts",
    },
    {
        value: "inventory",
        label: "Player Inventory",
    },
    {
        value: "glovebox",
        label: "Vehicle Glovebox",
    },
    {
        value: "trunk",
        label: "Vehicle Trunk",
    },
    {
        value: "data",
        label: "Inventory Stash",
    }
]

export const Columns: ColumnDef<ApiRow>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value: any) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "identifier",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Identifier" />
        ),
        cell: ({ row }) => <div>{row.getValue("identifier")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "message",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Message" />
        ),
        cell: ({ row }) => {
            return (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <div className="truncate max-w-[400px]">{row.getValue("message")}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <div className="max-w-[600px]">{row.getValue("message")}</div>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )
        },
        sortingFn: (rowA, rowB, columnId: string) => {
            // row.getValue('message) is a string like:
            //  "Stash has 20,000,000x 'dirty_money'"
            //  "Stash has 4,384,255,926,259,448,300 'black_money'"
            // "Stash has 418,736x 'cash', 1,000,000,000 'money'"
            // "Stash has 418,736x 'cash', 1,000,000,000 'money', 1,000,000,000 'black_money'"
            // this sortingFn should sort by the highest number in the message

            const regex = /(\d{1,3}(?:,\d{3})*)(?:x|,|')/g
            const getNumber = (message: string) => {
                const numbers = message.match(regex)
                if (!numbers) return 0

                return Math.max(
                    ...numbers.map((number) => parseInt(number.replace(/,/g, "")))
                )
            }

            return getNumber(rowB.getValue(columnId)) - getNumber(rowA.getValue(columnId))

        },
        enableSorting: true,
        enableHiding: false,
    },
    {
        accessorKey: "lastUpdated",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Last Updated" />
        ),
        cell: ({ row }) => {
            return (
                <div>{row.getValue("lastUpdated")}</div>
            )
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'type',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Type" />
        ),
        cell: ({ row }) => {
            const type = TypesAndLabels.find((type) => type.value === row.getValue("type"))

            if (!type) {
                return null
            }

            return (
                <div>
                    {type.label}
                </div>
            )
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: 'actions',
        header: ({ column }) => (<DataTableColumnHeader className="w-fit" column={column} title="Actions" />),
        cell: ({ row }) => <DataTableRowActions row={row} />,
        enableSorting: false,
        enableHiding: false,
    }
]