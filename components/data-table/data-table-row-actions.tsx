"use client"

import { MenuIcon } from "lucide-react"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}

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
import React from "react"

export function DataTableRowActions<TData>({
    row,
}: DataTableRowActionsProps<TData>) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onConfirmReset = () => {
        // we need to post /api/reset with all of the ApiRow's that are selected
        const identifiers = [{
            identifier: row.getValue("identifier") as string,
            column: row.getValue("type") as string
        }]
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
                setOpen(false)
            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                    >
                        <MenuIcon className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[160px]">
                    <AlertDialogTrigger asChild>
                        <DropdownMenuItem>
                            Delete
                        </DropdownMenuItem>
                    </AlertDialogTrigger>
                </DropdownMenuContent>
            </DropdownMenu>
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
    )
}