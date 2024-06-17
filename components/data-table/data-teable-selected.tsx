import { Table } from '@tanstack/react-table';
import React from 'react';
import { Button } from '../ui/button';
import { Trash } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface DataTableSelectedProps<TData> {
    table: Table<TData>
}

export function DataTableSelected<TData>({
    table,
}: DataTableSelectedProps<TData>) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onConfirmReset = () => {
        // we need to post /api/reset with all of the ApiRow's that are selected
        const selectedRows = table.getSelectedRowModel().rows
        // row.original.identifier
        const identifiers = selectedRows.map((row) => ({
            identifier: row.getValue("identifier") as string,
            column: row.getValue("type") as string
        }))
        // post /api/reset with identifiers
        setLoading(true)
        fetch("/api/reset", {
            method: "POST",
            body: JSON.stringify(identifiers),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to reset selected rows")
                }
                return response.json()
            })
            .then(() => {
                table.toggleAllRowsSelected(false)
                setOpen(false)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return table.getSelectedRowModel().rows.length > 0 ? (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 border border-border border-dashed hover:bg-red-100/20 hover:text-red-400"
                >
                    <Trash size={18} />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Reset Selected Rows</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                    Are you sure you want to reset the selected rows?
                </AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={onConfirmReset} disabled={loading}>
                        Reset
                    </AlertDialogAction>
                    <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    ) : null
}