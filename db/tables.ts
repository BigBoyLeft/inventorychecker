import { db } from "@/db";
import { ApiRow } from "@/types/ApiRow";
import { users, owned_vehicles, ox_inventory } from "@/drizzle/schema";
import {
  eq,
  ne,
  gt,
  gte,
  lt,
  lte,
  isNull,
  isNotNull,
  inArray,
  notInArray,
  exists,
  notExists,
  between,
  notBetween,
  like,
  ilike,
  notIlike,
  not,
  and,
  or,
  arrayContains,
  arrayContained,
  arrayOverlaps,
  sql,
} from "drizzle-orm";

const ItemsToCheck: Record<string, number> = {
  money: 5000000,
  bank: 5000000,
  black_money: 5000000,
};

type Inventory = {
  name: string;
  count: number;
  slot: number;
}[];

function scanInventory(Inventory: Inventory) {
  return Inventory.filter((item) => {
    return item.count >= ItemsToCheck[item.name];
  });
}

export const TableTypes: {
  table: string;
  identifier: string;
  column: string;
  columnLabel: string;
  func?: () => Promise<ApiRow[]>;
  reset?: (identifier: string) => Promise<void>;
}[] = [
  {
    table: "users",
    identifier: "identifier",
    column: "accounts",
    columnLabel: "Player Account",
    func: async function (): Promise<ApiRow[]> {
      return new Promise(async (resolve, reject) => {
        const database = await db();
        const results = await database
          ?.select({
            identifier: users.identifier,
            accounts: users.accounts,
            lastUpdated: users.last_seen,
          })
          .from(users)
          .where(
            or(
              sql<string>`JSON_EXTRACT(accounts, '$.money') > ${ItemsToCheck.money}`,
              sql<string>`JSON_EXTRACT(accounts, '$.bank') > ${ItemsToCheck.bank}`,
              sql<string>`JSON_EXTRACT(accounts, '$.black_money') > ${ItemsToCheck.black_money}`
            )
          );

        if (!results) return [];

        const flaggedRows: ApiRow[] = [];

        for (const row of results) {
          const accounts = row.accounts ? JSON.parse(row.accounts) : null;
          const flaggedAccounts = Object.entries(accounts).filter(
            ([key, value]: [string, unknown]) =>
              (value as number) > ItemsToCheck[key]
          );

          if (flaggedAccounts.length > 0) {
            flaggedRows.push({
              identifier: row.identifier,
              message: `Account has ${flaggedAccounts
                .map(
                  ([key, value]) =>
                    `${new Intl.NumberFormat("en-US").format(
                      value as number
                    )}x '${key}'`
                )
                .join(", ")}`,
              lastUpdated: row.lastUpdated || "Unknown",
              type: "accounts",
            });
          }
        }

        resolve(flaggedRows);
      });
    },
    reset: async function (identifier: string) {
      const database = await db();
      const user = await database
        ?.select({
          accounts: users.accounts,
        })
        .from(users)
        .where(sql<string>`identifier = ${identifier}`);

      if (!user) return;

      const accounts = user[0].accounts ? JSON.parse(user[0].accounts) : null;

      const flaggedAccounts = Object.entries(accounts).filter(
        ([key, value]: [string, unknown]) =>
          (value as number) > ItemsToCheck[key]
      );

      if (flaggedAccounts.length > 0) {
        for (const [key, _] of flaggedAccounts) {
          accounts[key] = 0;
        }

        await database
          ?.update(users)
          .set({ accounts: JSON.stringify(accounts) })
          .where(sql<string>`identifier = ${identifier}`);
      }

      return;
    },
  },
  {
    table: "users",
    identifier: "identifier",
    column: "inventory",
    columnLabel: "Player Inventory",
    func: function (): Promise<ApiRow[]> {
      return new Promise(async (resolve, reject) => {
        const database = await db();
        const results = await database
          ?.select({
            identifier: users.identifier,
            inventory: users.inventory,
            lastUpdated: users.last_seen,
          })
          .from(users)
          .where(sql<string>`JSON_LENGTH(inventory) > 0`);

        if (!results) return [];

        const flaggedRows: ApiRow[] = [];

        for (const row of results) {
          const inventory = row.inventory ? JSON.parse(row.inventory) : null;
          const flaggedItems = scanInventory(inventory);

          if (flaggedItems.length > 0) {
            flaggedRows.push({
              identifier: row.identifier,
              message: `Inventory has ${flaggedItems
                .map(
                  (item) =>
                    `${new Intl.NumberFormat("en-US").format(item.count)}x '${
                      item.name
                    }'`
                )
                .join(", ")}`,
              lastUpdated: row.lastUpdated || "Unknown",
              type: "inventory",
            });
          }
        }

        resolve(flaggedRows);
      });
    },
    reset: async function (identifier: string) {
      const database = await db();
      const user = await database
        ?.select({
          inventory: users.inventory,
        })
        .from(users)
        .where(sql<string>`identifier = ${identifier}`);

      if (!user) return;

      let inventory = user[0].inventory ? JSON.parse(user[0].inventory) : null;

      const flaggedItems = scanInventory(inventory);

      if (flaggedItems.length > 0) {
        for (const item of flaggedItems) {
          inventory = inventory.filter(
            (i: { slot: number; count: number; name: string }) =>
              i.slot !== item.slot
          );
        }

        await database
          ?.update(users)
          .set({ inventory: JSON.stringify(inventory) })
          .where(sql<string>`identifier = ${identifier}`);
      }

      return;
    },
  },
  {
    table: "owned_vehicles",
    identifier: "plate",
    column: "glovebox",
    columnLabel: "Vehicle Glovebox",
    func: function (): Promise<ApiRow[]> {
      return new Promise(async (resolve, reject) => {
        const database = await db();
        const results = await database
          ?.select({
            identifier: owned_vehicles.plate,
            glovebox: owned_vehicles.glovebox,
          })
          .from(owned_vehicles)
          .where(sql<string>`JSON_LENGTH(glovebox) > 0`);

        if (!results) return [];

        const flaggedRows: ApiRow[] = [];

        for (const row of results) {
          const glovebox = row.glovebox ? JSON.parse(row.glovebox) : null;
          const flaggedItems = scanInventory(glovebox);

          if (flaggedItems.length > 0) {
            flaggedRows.push({
              identifier: row.identifier,
              message: `glovebox has ${flaggedItems
                .map(
                  (item) =>
                    `${new Intl.NumberFormat("en-US").format(item.count)}x '${
                      item.name
                    }'`
                )
                .join(", ")}`,
              lastUpdated: "Unknown",
              type: "glovebox",
            });
          }
        }

        resolve(flaggedRows);
      });
    },
    reset: async function (identifier: string) {
      const database = await db();
      const vehicle = await database
        ?.select({
          glovebox: owned_vehicles.glovebox,
        })
        .from(owned_vehicles)
        .where(sql<string>`plate = ${identifier}`);

      if (!vehicle) return;

      let glovebox = vehicle[0].glovebox
        ? JSON.parse(vehicle[0].glovebox)
        : null;
      const flaggedItems = scanInventory(glovebox);

      if (flaggedItems.length > 0) {
        for (const item of flaggedItems) {
          glovebox = glovebox.filter(
            (i: { slot: number; count: number; name: string }) =>
              i.slot !== item.slot
          );
        }

        await database
          ?.update(owned_vehicles)
          .set({ glovebox: JSON.stringify(glovebox) })
          .where(sql<string>`plate = ${identifier}`);
      }
    },
  },
  {
    table: "owned_vehicles",
    identifier: "plate",
    column: "trunk",
    columnLabel: "Vehicle Trunk",
    func: function (): Promise<ApiRow[]> {
      return new Promise(async (resolve, reject) => {
        const database = await db();
        const results = await database
          ?.select({
            identifier: owned_vehicles.plate,
            trunk: owned_vehicles.trunk,
          })
          .from(owned_vehicles)
          .where(sql<string>`JSON_LENGTH(trunk) > 0`);

        if (!results) return [];

        const flaggedRows: ApiRow[] = [];

        for (const row of results) {
          const trunk = row.trunk ? JSON.parse(row.trunk) : null;
          const flaggedItems = scanInventory(trunk);

          if (flaggedItems.length > 0) {
            flaggedRows.push({
              identifier: row.identifier,
              message: `trunk has ${flaggedItems
                .map(
                  (item) =>
                    `${new Intl.NumberFormat("en-US").format(item.count)}x '${
                      item.name
                    }'`
                )
                .join(", ")}`,
              lastUpdated: "Unknown",
              type: "trunk",
            });
          }
        }

        resolve(flaggedRows);
      });
    },
    reset: async function (identifier: string) {
      const database = await db();
      const vehicle = await database
        ?.select({
          trunk: owned_vehicles.trunk,
        })
        .from(owned_vehicles)
        .where(sql<string>`plate = ${identifier}`);

      if (!vehicle) return;

      let trunk = vehicle[0].trunk ? JSON.parse(vehicle[0].trunk) : null;
      const flaggedItems = scanInventory(trunk);

      if (flaggedItems.length > 0) {
        for (const item of flaggedItems) {
          trunk = trunk.filter(
            (i: { slot: number; count: number; name: string }) =>
              i.slot !== item.slot
          );
        }

        await database
          ?.update(owned_vehicles)
          .set({ trunk: JSON.stringify(trunk) })
          .where(sql<string>`plate = ${identifier}`);
      }
    },
  },
  {
    table: "ox_inventory",
    identifier: "plate",
    column: "data",
    columnLabel: "Inventory Stash",
    func: function (): Promise<ApiRow[]> {
      return new Promise(async (resolve, reject) => {
        const database = await db();
        const results = await database
          ?.select({
            identifier: ox_inventory.name,
            data: ox_inventory.data,
          })
          .from(ox_inventory)
          .where(sql<string>`JSON_LENGTH(data) > 0`);

        if (!results) return [];

        const flaggedRows: ApiRow[] = [];

        for (const row of results) {
          const data = row.data ? JSON.parse(row.data) : null;
          const flaggedItems = scanInventory(data);

          if (flaggedItems.length > 0) {
            flaggedRows.push({
              identifier: row.identifier,
              message: `Stash has ${flaggedItems
                .map(
                  (item) =>
                    `${new Intl.NumberFormat("en-US").format(item.count)}x '${
                      item.name
                    }'`
                )
                .join(", ")}`,
              lastUpdated: "Unknown",
              type: "data",
            });
          }
        }

        resolve(flaggedRows);
      });
    },
    reset: async function (identifier: string) {
      const database = await db();
      const stash = await database
        ?.select({
          data: ox_inventory.data,
        })
        .from(ox_inventory)
        .where(sql<string>`name = ${identifier}`);

      if (!stash) return;

      let data = stash[0].data ? JSON.parse(stash[0].data) : null;
      const flaggedItems = scanInventory(data);

      if (flaggedItems.length > 0) {
        for (const item of flaggedItems) {
          data = data.filter(
            (i: { slot: number; count: number; name: string }) =>
              i.slot !== item.slot
          );
        }

        await database
          ?.update(ox_inventory)
          .set({ data: JSON.stringify(data) })
          .where(sql<string>`name = ${identifier}`);
      }
    },
  },
];

export async function getAllFlaggedRows(): Promise<ApiRow[]> {
  const results: ApiRow[] = [];

  for (const table of TableTypes) {
    if (table.func) {
      const rows = await table.func();
      results.push(...rows);
    }
  }

  return results;
}

export async function handleResetRows(
  identifiers: { identifier: string; column: string }[]
): Promise<void> {
  console.log("Resetting rows", identifiers);
  for (const { identifier, column } of identifiers) {
    const table = TableTypes.find((table) => table.column === column);

    if (table && table.reset) {
      await table.reset(identifier);
    }
  }
}
