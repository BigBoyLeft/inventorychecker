import UserNav from "@/components/user-nav"

export function Header() {
    return <div className="flex items-center justify-between">
        <div>
            <h2 className="text-2xl font-bold font uppercase tracking-wide">trappin nyc</h2>
            <p className="text-base font-bold font uppercase text-muted-foreground">database manager</p>
        </div>
        <div className="flex items-center space-x-2">
            <UserNav />
        </div>
    </div>
}