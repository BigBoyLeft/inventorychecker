"use client"
import { DataTable } from '@/components/data-table';
import { Columns } from "@/components/data-table/columns";
import { ApiRow } from '@/types/ApiRow';
import useSWR from 'swr'

const data: ApiRow[] = [
    {
        identifier: "char1:165f6449adcd566a6c33af3cf352ff77cc90ffdb",
        message: `Inventory has 20,000,000x 'dirty_money'`,
        lastUpdated: "2024-03-18 09:00:00",
        type: "accounts",
    },
    {
        identifier: "duffel_287564CWU111597",
        message: `Inventory has 418,736x 'cash'`,
        lastUpdated: "2024-03-18 09:00:00",
        type: "data",
    },
]

export default function Table() {
    const { data, error, isLoading } = useSWR("/api/get", (...args) => fetch(...args).then(res => res.json()));

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return <DataTable columns={Columns} data={data} />
}