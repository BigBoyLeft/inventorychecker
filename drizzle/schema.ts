import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  int,
  text,
  varchar,
  tinyint,
  index,
  unique,
  longtext,
  datetime,
  timestamp,
  float,
  mysqlEnum,
  tinytext,
  decimal,
  date,
  mediumtext,
  foreignKey,
  double,
  bigint,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const movtvs17 = mysqlTable("movtvs17", {
  id: int("id").autoincrement().notNull(),
  type: text("type"),
  data: varchar("data", { length: 1000 }),
  active: tinyint("active").default(1),
  owner: varchar("owner", { length: 46 }),
});

export const addon_account = mysqlTable("addon_account", {
  name: varchar("name", { length: 60 }).notNull(),
  label: varchar("label", { length: 100 }).notNull(),
  shared: int("shared").notNull(),
});

export const addon_account_data = mysqlTable(
  "addon_account_data",
  {
    id: int("id").autoincrement().notNull(),
    account_name: varchar("account_name", { length: 100 }),
    money: int("money").notNull(),
    owner: varchar("owner", { length: 46 }),
  },
  (table) => {
    return {
      index_addon_account_data_account_name: index(
        "index_addon_account_data_account_name"
      ).on(table.account_name),
      index_addon_account_data_account_name_owner: unique(
        "index_addon_account_data_account_name_owner"
      ).on(table.account_name, table.owner),
    };
  }
);

export const addon_inventory = mysqlTable("addon_inventory", {
  name: varchar("name", { length: 60 }).notNull(),
  label: varchar("label", { length: 100 }).notNull(),
  shared: int("shared").notNull(),
});

export const addon_inventory_items = mysqlTable(
  "addon_inventory_items",
  {
    id: int("id").autoincrement().notNull(),
    inventory_name: varchar("inventory_name", { length: 100 }).notNull(),
    name: varchar("name", { length: 100 }).notNull(),
    count: int("count").notNull(),
    owner: varchar("owner", { length: 46 }),
  },
  (table) => {
    return {
      index_addon_inventory_items_inventory_name_name: index(
        "index_addon_inventory_items_inventory_name_name"
      ).on(table.inventory_name, table.name),
      index_addon_inventory_items_inventory_name_name_owner: index(
        "index_addon_inventory_items_inventory_name_name_owner"
      ).on(table.inventory_name, table.name, table.owner),
      index_addon_inventory_inventory_name: index(
        "index_addon_inventory_inventory_name"
      ).on(table.inventory_name),
    };
  }
);

export const admin_bans = mysqlTable("admin_bans", {
  id: int("id").autoincrement().notNull(),
  staff: varchar("staff", { length: 50 }),
  player: varchar("player", { length: 50 }),
  reason: varchar("reason", { length: 50 }),
  identifiers: longtext("identifiers"),
  tokens: longtext("tokens"),
  ban_time: int("ban_time"),
  exp_time: int("exp_time"),
});

export const ak47_cannabiscafe = mysqlTable("ak47_cannabiscafe", {
  id: int("id").notNull(),
  pos: varchar("pos", { length: 255 }).default("''").notNull(),
  stage: int("stage").default(0).notNull(),
  growing: int("growing").default(0).notNull(),
  time: int("time").default(0).notNull(),
  fertilizer: int("fertilizer").default(0).notNull(),
  spray: int("spray").default(0).notNull(),
});

export const ak47_cannabiscafe_bong = mysqlTable("ak47_cannabiscafe_bong", {
  id: int("id"),
  stock: int("stock"),
});

export const ak47_cannabis_cafe_shop_items = mysqlTable(
  "ak47_cannabis_cafe_shop_items",
  {
    name: varchar("name", { length: 50 }).notNull(),
    label: varchar("label", { length: 50 }),
    price: varchar("price", { length: 50 }),
    stock: int("stock"),
  }
);

export const ak47_chickfila = mysqlTable("ak47_chickfila", {
  stock: longtext("stock"),
});

export const ak47_chicknfries = mysqlTable("ak47_chicknfries", {
  stock: longtext("stock"),
});

export const ak47_dominos = mysqlTable("ak47_dominos", {
  stock: longtext("stock"),
});

export const ak47_donutshop = mysqlTable("ak47_donutshop", {
  stock: longtext("stock"),
});

export const ak47_hookahlounge = mysqlTable("ak47_hookahlounge", {
  id: int("id").notNull(),
  water: int("water").default(100),
  hose: int("hose").default(100),
  foil: int("foil").default(100),
  coals: int("coals").default(100),
  t_level: int("t_level").default(100),
  tobaco: longtext("tobaco").default("'Social Smoke Absolute Zero'"),
  price: int("price").default(100),
  usable: int("usable").default(1),
});

export const ak47_mcdonalds = mysqlTable("ak47_mcdonalds", {
  stock: longtext("stock"),
});

export const bandit_babys = mysqlTable("bandit_babys", {
  identifier: varchar("identifier", { length: 46 }),
  name: varchar("name", { length: 128 }).notNull(),
  data: varchar("data", { length: 128 }).notNull(),
});

export const bandit_pets = mysqlTable("bandit_pets", {
  identifier: varchar("identifier", { length: 46 }),
  name: varchar("name", { length: 128 }).notNull(),
  model: varchar("model", { length: 128 }).notNull(),
  type: varchar("type", { length: 128 }).notNull(),
  dead: varchar("dead", { length: 128 }).notNull(),
  skin: int("skin").notNull(),
  collar: int("collar").notNull(),
  thirst: int("thirst").notNull(),
  hunger: int("hunger").notNull(),
  hp: int("hp").notNull(),
});

export const banking = mysqlTable("banking", {
  identifier: varchar("identifier", { length: 46 }),
  type: varchar("type", { length: 50 }),
  amount: int("amount"),
  time: bigint("time", { mode: "number" }),
  ID: int("ID").autoincrement().notNull(),
  balance: int("balance").default(0),
});

export const basketball_rpg = mysqlTable("basketball_rpg", {
  id: int("id").autoincrement().notNull(),
  identifier: varchar("identifier", { length: 46 }),
  score: int("score").notNull(),
});

export const billing = mysqlTable("billing", {
  id: int("id").autoincrement().notNull(),
  identifier: varchar("identifier", { length: 46 }),
  sender: varchar("sender", { length: 60 }).notNull(),
  target_type: varchar("target_type", { length: 50 }).notNull(),
  target: varchar("target", { length: 40 }).notNull(),
  label: varchar("label", { length: 255 }).notNull(),
  amount: int("amount").notNull(),
});

export const boombox_songs = mysqlTable("boombox_songs", {
  identifier: varchar("identifier", { length: 46 }),
  label: varchar("label", { length: 30 }).notNull(),
  link: longtext("link").notNull(),
});

export const business = mysqlTable("business", {
  id: int("id").autoincrement().notNull(),
  shop: varchar("shop", { length: 50 }),
  items: longtext("items").notNull(),
});

export const business_moneywash = mysqlTable("business_moneywash", {
  id: int("id").autoincrement().notNull(),
  job: varchar("job", { length: 50 }).default("'0'").notNull(),
  tax: int("tax").default(15),
  collectedmoney: int("collectedmoney").default(0),
});

export const bwh_bans = mysqlTable("bwh_bans", {
  id: int("id").autoincrement().notNull(),
  receiver: text("receiver").notNull(),
  sender: varchar("sender", { length: 60 }).notNull(),
  length: datetime("length", { mode: "string" }),
  reason: text("reason").notNull(),
  unbanned: tinyint("unbanned").default(0).notNull(),
});

export const bwh_identifiers = mysqlTable("bwh_identifiers", {
  steam: varchar("steam", { length: 60 }).notNull(),
  license: varchar("license", { length: 60 }).notNull(),
  ip: varchar("ip", { length: 60 }).notNull(),
  name: varchar("name", { length: 128 }).notNull(),
  xbl: varchar("xbl", { length: 60 }),
  live: varchar("live", { length: 60 }),
  discord: varchar("discord", { length: 60 }),
  fivem: varchar("fivem", { length: 60 }),
});

export const bwh_warnings = mysqlTable("bwh_warnings", {
  id: int("id").autoincrement().notNull(),
  receiver: text("receiver").notNull(),
  sender: varchar("sender", { length: 60 }).notNull(),
  message: text("message").notNull(),
});

export const cardealer_vehicles = mysqlTable("cardealer_vehicles", {
  id: int("id").autoincrement().notNull(),
  vehicle: varchar("vehicle", { length: 255 }).notNull(),
  price: int("price").notNull(),
});

export const casino_cache = mysqlTable("casino_cache", {
  ID: int("ID").autoincrement().notNull(),
  Settings: text("Settings").notNull(),
});

export const casino_players = mysqlTable("casino_players", {
  ID: int("ID").autoincrement().notNull(),
  identifier: varchar("identifier", { length: 128 }).notNull(),
  properties: longtext("properties").notNull(),
});

export const casino_timestamp = mysqlTable(
  "casino_timestamp",
  {
    id: int("id").autoincrement().notNull(),
    usedamount: int("usedamount").default(0).notNull(),
    csn: longtext("csn"),
    time: int("time"),
  },
  (table) => {
    return {
      id: index("id").on(table.id),
    };
  }
);

export const cd_dispatch = mysqlTable("cd_dispatch", {
  identifier: varchar("identifier", { length: 50 }),
  callsign: varchar("callsign", { length: 100 }),
});

export const claimedpackages = mysqlTable("claimedpackages", {
  tebexId: varchar("tebexId", { length: 50 }),
  timestamp: timestamp("timestamp", { mode: "string" }).default(
    "current_timestamp()"
  ),
});

export const comserv = mysqlTable("comserv", {
  identifier: varchar("identifier", { length: 46 }),
  name: varchar("name", { length: 50 }),
  actions: int("actions"),
  reason: varchar("reason", { length: 50 }),
});

export const cs_carplay = mysqlTable("cs_carplay", {
  id: int("id").autoincrement().notNull(),
  identifier: varchar("identifier", { length: 46 }),
  musicData: varchar("musicData", { length: 1500 }),
});

export const datastore = mysqlTable("datastore", {
  name: varchar("name", { length: 60 }).notNull(),
  label: varchar("label", { length: 100 }).notNull(),
  shared: int("shared").notNull(),
});

export const datastore_data = mysqlTable(
  "datastore_data",
  {
    id: int("id").autoincrement().notNull(),
    name: varchar("name", { length: 60 }).notNull(),
    owner: varchar("owner", { length: 46 }),
    data: longtext("data"),
  },
  (table) => {
    return {
      index_datastore_data_name: index("index_datastore_data_name").on(
        table.name
      ),
      index_datastore_data_name_owner: unique(
        "index_datastore_data_name_owner"
      ).on(table.name, table.owner),
    };
  }
);

export const drunk_stats = mysqlTable("drunk_stats", {
  identifier: varchar("identifier", { length: 46 }).notNull(),
  drunk_level: float("drunk_level").notNull(),
  headache_level: float("headache_level").notNull(),
  toughness: int("toughness").default(0).notNull(),
});

export const dusa_mechanic = mysqlTable("dusa_mechanic", {
  id: int("id").autoincrement().notNull(),
  m_id: varchar("m_id", { length: 50 }),
  mechanic: varchar("mechanic", { length: 255 }),
  boss: varchar("boss", { length: 100 }),
  employees: longtext("employees"),
  ranks: longtext("ranks"),
  job: varchar("job", { length: 30 }),
});

export const dusa_modifications = mysqlTable("dusa_modifications", {
  plate: varchar("plate", { length: 128 }).notNull(),
  stancer: longtext("stancer"),
  tuning: longtext("tuning"),
});

export const dusa_pets = mysqlTable("dusa_pets", {
  id: int("id").autoincrement().notNull(),
  owner: varchar("owner", { length: 60 }),
  modelname: varchar("modelname", { length: 250 }),
  health: tinyint("health").default(100).notNull(),
  illnesses: varchar("illnesses", { length: 60 }).default("'none'").notNull(),
  name: varchar("name", { length: 255 }).default("'Pet'"),
  clothes: varchar("clothes", { length: 255 }),
  type: varchar("type", { length: 10 }),
});

export const fine_types = mysqlTable("fine_types", {
  id: int("id").autoincrement().notNull(),
  label: varchar("label", { length: 255 }),
  amount: int("amount"),
  category: int("category"),
});

export const frkn_pet = mysqlTable(
  "frkn_pet",
  {
    id: int("id").autoincrement().notNull(),
    netID: int("netID"),
    petHash: varchar("petHash", { length: 50 }),
    petTexureID: int("petTexureID"),
    petLeash: varchar("petLeash", { length: 50 }),
    petLeashID: int("petLeashID"),
    frknHat: varchar("frknHat", { length: 50 }),
    frknLeash: varchar("frknLeash", { length: 50 }),
    frknGlasses: varchar("frknGlasses", { length: 50 }),
    petOwner: varchar("petOwner", { length: 50 }),
    petGender: varchar("petGender", { length: 50 }),
    petName: varchar("petName", { length: 50 }),
    petLabel: longtext("petLabel"),
    hungryDecrase: int("hungryDecrase"),
    petHungryLevel: int("petHungryLevel"),
    thirstDecrase: int("thirstDecrase"),
    isOutSide: tinyint("isOutSide").default(0),
    petThirstLevel: int("petThirstLevel"),
    petEnergyLevel: int("petEnergyLevel"),
    petHealthLevel: int("petHealthLevel"),
    petXP: int("petXP"),
    lastXP: int("lastXP"),
    petLevel: int("petLevel"),
    petAge: int("petAge"),
    petPosition: text("petPosition"),
    petIMG: longtext("petIMG").default(
      "'https://cdn.discordapp.com/attachments/942150634554163250/1091896194818658304/unkownpet.png'"
    ),
    listOf: varchar("listOf", { length: 50 }),
    isSelling: tinyint("isSelling").default(0),
    petSellingPrice: int("petSellingPrice"),
    petFace: varchar("petFace", { length: 50 }),
  },
  (table) => {
    return {
      netID: unique("netID").on(table.netID),
    };
  }
);

export const gangs = mysqlTable("gangs", {
  id: int("id").autoincrement().notNull(),
  name: varchar("name", { length: 50 }),
  label: varchar("label", { length: 50 }),
  leader: int("leader").default(0),
  turf_wins: int("turf_wins").default(0),
  hp_wins: int("hp_wins").default(0),
  inventory: longtext("inventory").default("'[]'"),
  kills: int("kills").default(0),
  deaths: int("deaths").default(0),
  package_sells: int("package_sells").default(0),
  rank_edits: int("rank_edits").default(0),
});

export const gangs_grades = mysqlTable("gangs_grades", {
  id: int("id").autoincrement().notNull(),
  label: varchar("label", { length: 50 }),
  gang: varchar("gang", { length: 50 }),
  rank: int("rank"),
});

export const gympass = mysqlTable(
  "gympass",
  {
    id: int("id").autoincrement().notNull(),
    identifier: varchar("identifier", { length: 500 }).notNull(),
    gymid: int("gymid").notNull(),
    gymtime: int("gymtime").notNull(),
  },
  (table) => {
    return {
      identifier: index("identifier").on(table.identifier),
    };
  }
);

export const gymstats = mysqlTable(
  "gymstats",
  {
    id: int("id").autoincrement().notNull(),
    identifier: varchar("identifier", { length: 500 }).notNull(),
    stats: longtext("stats").notNull(),
  },
  (table) => {
    return {
      identifier: index("identifier").on(table.identifier),
    };
  }
);

export const items = mysqlTable("items", {
  name: varchar("name", { length: 50 }).notNull(),
  label: varchar("label", { length: 50 }).notNull(),
  weight: int("weight").default(1).notNull(),
  rare: tinyint("rare").default(0).notNull(),
  can_remove: tinyint("can_remove").default(1).notNull(),
});

export const jail = mysqlTable("jail", {
  id: int("id").autoincrement().notNull(),
  identifier: varchar("identifier", { length: 46 }),
  reason: varchar("reason", { length: 50 }),
  time: int("time"),
});

export const jobs = mysqlTable("jobs", {
  name: varchar("name", { length: 50 }).notNull(),
  label: varchar("label", { length: 50 }),
  whitelisted: tinyint("whitelisted").default(0).notNull(),
});

export const job_grades = mysqlTable("job_grades", {
  id: int("id").autoincrement().notNull(),
  job_name: varchar("job_name", { length: 50 }),
  grade: int("grade").notNull(),
  name: varchar("name", { length: 50 }).notNull(),
  label: varchar("label", { length: 50 }).notNull(),
  salary: int("salary").notNull(),
  skin_male: longtext("skin_male").notNull(),
  skin_female: longtext("skin_female").notNull(),
});

export const kq_tuning = mysqlTable("kq_tuning", {
  id: int("id").autoincrement().notNull(),
  plate: varchar("plate", { length: 50 }).default("''").notNull(),
  engine: varchar("engine", { length: 50 }).default("''").notNull(),
  tuned_by: varchar("tuned_by", { length: 50 }),
  created_at: datetime("created_at", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const kq_tuningparts = mysqlTable("kq_tuningparts", {
  id: int("id").autoincrement().notNull(),
  storage: varchar("storage", { length: 50 }).default("'0'").notNull(),
  type: varchar("type", { length: 50 }).default("'0'").notNull(),
  part: varchar("part", { length: 50 }).default("'0'").notNull(),
  available_at: bigint("available_at", { mode: "number" }).notNull(),
  created_at: datetime("created_at", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const kub_truckingcontracts = mysqlTable(
  "kub_truckingcontracts",
  {
    id: int("id").autoincrement().notNull(),
    citizenid: text("citizenid").notNull(),
    playerid: int("playerid"),
    company: text("company"),
    destinationcompany: text("destinationcompany"),
    vehiclemodel: text("vehiclemodel"),
    goodstype: text("goodstype"),
    startlocationname: longtext("startlocationname"),
    startcoords: text("startcoords"),
    destinationcoords: text("destinationcoords"),
    payout: int("payout"),
    deposit: int("deposit"),
    xppayout: int("xppayout"),
    logo: text("logo"),
    destinationlocationname: longtext("destinationlocationname"),
    distance: text("distance"),
    status: mysqlEnum("status", [
      "Not Started",
      "Started",
      "Vehicle Spawned",
      "Goods picked up",
      "Goods delivered",
      "Completed",
      "Canceled",
      "Expired",
    ]).default("Not Started"),
    expirydate: text("expirydate"),
    donedate: text("donedate"),
    adrlvl: tinyint("adrlvl").default(0),
    longdistancelvl: tinyint("longdistancelvl").default(0),
    fragilelvl: tinyint("fragilelvl").default(0),
    highvaluelvl: tinyint("highvaluelvl").default(0),
    jitlvl: tinyint("jitlvl").default(0),
    jobtype: mysqlEnum("jobtype", ["Quick", "Freight", "Convoy"]),
    convoyName: varchar("convoyName", { length: 50 }),
  },
  (table) => {
    return {
      citizenID: index("citizenID").on(table.citizenid),
    };
  }
);

export const kub_truckingplayervehicles = mysqlTable(
  "kub_truckingplayervehicles",
  {
    id: int("id").autoincrement().notNull(),
    citizenid: text("citizenid").notNull(),
    vehicleid: int("vehicleid").notNull(),
    name: text("name"),
    model: tinytext("model"),
    price: int("price"),
  },
  (table) => {
    return {
      citizenid: index("citizenid").on(table.citizenid),
      vehicleid: index("vehicleid").on(table.vehicleid),
    };
  }
);

export const kub_truckingprofile = mysqlTable(
  "kub_truckingprofile",
  {
    id: int("id").autoincrement().notNull(),
    citizenid: text("citizenid").notNull(),
    accountname: text("accountname"),
    xp: int("xp").default(0),
    nextlevelxp: int("nextlevelxp"),
    previouslevelxp: int("previouslevelxp").default(0),
    level: int("level").default(1),
    skillpoints: tinyint("skillpoints").default(0),
    rank: tinytext("rank"),
    totalpayout: int("totalpayout").default(0),
    totaldistance: decimal("totaldistance", {
      precision: 20,
      scale: 2,
    }).default("0.00"),
    profileurl: text("profileurl").default("''"),
    adrlvl: int("adrlvl").default(0),
    longdistancelvl: int("longdistancelvl").default(0),
    highvaluelvl: int("highvaluelvl").default(0),
    fragilelvl: int("fragilelvl").default(0),
    jitlvl: int("jitlvl").default(0),
    availablexp: int("availablexp").default(0),
    jobscompleted: int("jobscompleted").default(0),
    lastupdated: timestamp("lastupdated", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    created: timestamp("created", { mode: "string" }).default(
      "current_timestamp()"
    ),
  },
  (table) => {
    return {
      citizenID: index("citizenID").on(table.citizenid),
    };
  }
);

export const kub_truckingvehicles = mysqlTable("kub_truckingvehicles", {
  id: int("id").autoincrement().notNull(),
  name: text("name"),
  model: tinytext("model").notNull(),
  vehiclecondition: tinyint("vehiclecondition").default(0),
  price: int("price").notNull(),
  power: tinytext("power"),
  engine: text("engine"),
  jobscompleted: int("jobscompleted").notNull(),
  image: text("image"),
  isdeleted: tinyint("isdeleted").default(0).notNull(),
});

export const last_pregnant = mysqlTable("last_pregnant", {
  identifier: varchar("identifier", { length: 46 }).notNull(),
  pregnant_time: int("pregnant_time"),
  pregnant: tinyint("pregnant").default(0),
});

export const licenses = mysqlTable("licenses", {
  type: varchar("type", { length: 60 }).notNull(),
  label: varchar("label", { length: 60 }).notNull(),
});

export const loaf_current_property = mysqlTable("loaf_current_property", {
  identifier: varchar("identifier", { length: 46 }).notNull(),
  propertyid: int("propertyid").notNull(),
  id: varchar("id", { length: 10 }).notNull(),
});

export const loaf_furniture = mysqlTable("loaf_furniture", {
  identifier: varchar("identifier", { length: 46 }).notNull(),
  object: varchar("object", { length: 100 }).notNull(),
  amount: int("amount").default(0).notNull(),
});

export const loaf_invoices = mysqlTable("loaf_invoices", {
  id: varchar("id", { length: 15 }).notNull(),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  issued: date("issued", { mode: "string" }).default("curdate()"),
  biller: varchar("biller", { length: 150 }).notNull(),
  biller_name: varchar("biller_name", { length: 150 }).notNull(),
  billed: varchar("billed", { length: 150 }).notNull(),
  billed_name: varchar("billed_name", { length: 150 }).notNull(),
  owner: varchar("owner", { length: 46 }),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  due: date("due", { mode: "string" }).notNull(),
  interest: int("interest").default(0).notNull(),
  late: int("late").default(0).notNull(),
  amount: int("amount").default(0).notNull(),
  name: varchar("name", { length: 150 }).notNull(),
  description: varchar("description", { length: 150 })
    .default("'Unknown'")
    .notNull(),
  company: varchar("company", { length: 50 }),
  company_name: varchar("company_name", { length: 150 }),
  signed: tinyint("signed").default(0).notNull(),
  signature: longtext("signature"),
});

export const loaf_keys = mysqlTable("loaf_keys", {
  unique_id: varchar("unique_id", { length: 15 }).notNull(),
  key_id: varchar("key_id", { length: 255 }).notNull(),
  identifier: varchar("identifier", { length: 46 }),
  key_data: longtext("key_data"),
});

export const loaf_properties = mysqlTable("loaf_properties", {
  owner: varchar("owner", { length: 46 }).notNull(),
  propertyid: int("propertyid").notNull(),
  shell: varchar("shell", { length: 75 }).notNull(),
  furniture: longtext("furniture"),
  id: varchar("id", { length: 10 }),
  rent: varchar("rent", { length: 100 }),
  last_entered: timestamp("last_entered", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const loaf_rent = mysqlTable("loaf_rent", {
  rent_wallet: varchar("rent_wallet", { length: 100 }).notNull(),
  owner: varchar("owner", { length: 46 }),
  propertyid: int("propertyid").notNull(),
  balance: int("balance").default(0).notNull(),
  rent_due: int("rent_due").default(0).notNull(),
});

export const management_funds = mysqlTable(
  "management_funds",
  {
    id: int("id").autoincrement().notNull(),
    job_name: varchar("job_name", { length: 50 }).notNull(),
    amount: int("amount").notNull(),
    type: mysqlEnum("type", ["boss", "gang"]).default("boss").notNull(),
  },
  (table) => {
    return {
      type: index("type").on(table.type),
      job_name: unique("job_name").on(table.job_name),
    };
  }
);

export const management_outfits = mysqlTable("management_outfits", {
  id: int("id").autoincrement().notNull(),
  job_name: varchar("job_name", { length: 50 }).notNull(),
  type: varchar("type", { length: 50 }).notNull(),
  minrank: int("minrank").default(0).notNull(),
  name: varchar("name", { length: 50 }).default("'Cool Outfit'").notNull(),
  gender: varchar("gender", { length: 50 }).default("'male'").notNull(),
  model: varchar("model", { length: 50 }),
  props: varchar("props", { length: 1000 }),
  components: varchar("components", { length: 1500 }),
});

export const mdt_announcements = mysqlTable(
  "mdt_announcements",
  {
    id: int("id").autoincrement().notNull(),
    author: varchar("author", { length: 255 }).notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    content: mediumtext("content").notNull(),
    pinned: tinyint("pinned").default(0).notNull(),
    createdAt: timestamp("createdAt", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      author: index("author").on(table.author),
    };
  }
);

export const mdt_bolos = mysqlTable("mdt_bolos", {
  id: int("id").autoincrement().notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: mediumtext("description").notNull(),
  bolo_type: varchar("bolo_type", { length: 255 }).notNull(),
  players: mediumtext("players").default("'[]'").notNull(),
  vehicles: mediumtext("vehicles").default("'[]'").notNull(),
  status: tinyint("status").default(1).notNull(),
  createdAt: timestamp("createdAt", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const mdt_codes = mysqlTable("mdt_codes", {
  id: int("id").autoincrement().notNull(),
  code: varchar("code", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  createdAt: timestamp("createdAt", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const mdt_evidences = mysqlTable("mdt_evidences", {
  id: int("id").autoincrement().notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  images: mediumtext("images"),
  players: mediumtext("players"),
  description: mediumtext("description").notNull(),
  createdAt: timestamp("createdAt", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const mdt_fines = mysqlTable("mdt_fines", {
  id: int("id").autoincrement().notNull(),
  code: varchar("code", { length: 255 }),
  name: mediumtext("name"),
  amount: int("amount").default(0),
  createdAt: timestamp("createdAt", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const mdt_incidents = mysqlTable("mdt_incidents", {
  id: int("id").autoincrement().notNull(),
  name: varchar("name", { length: 255 }),
  description: mediumtext("description"),
  players: mediumtext("players"),
  cops: mediumtext("cops"),
  vehicles: mediumtext("vehicles"),
  evidences: mediumtext("evidences"),
  fines: mediumtext("fines"),
  jail: mediumtext("jail"),
  createdAt: timestamp("createdAt", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const mdt_jail = mysqlTable("mdt_jail", {
  id: int("id").autoincrement().notNull(),
  name: mediumtext("name"),
  time: int("time"),
  createdAt: timestamp("createdAt", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const mdt_warrants = mysqlTable("mdt_warrants", {
  id: int("id").autoincrement().notNull(),
  wtype: varchar("wtype", { length: 255 }).notNull(),
  players: mediumtext("players").default("'[]'").notNull(),
  house: varchar("house", { length: 255 }),
  reason: mediumtext("reason").notNull(),
  description: mediumtext("description").notNull(),
  done: tinyint("done").default(0).notNull(),
  createdAt: timestamp("createdAt", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const multicharacter_slots = mysqlTable(
  "multicharacter_slots",
  {
    identifier: varchar("identifier", { length: 46 }).notNull(),
    slots: int("slots").notNull(),
  },
  (table) => {
    return {
      slots: index("slots").on(table.slots),
    };
  }
);

export const multijob = mysqlTable("multijob", {
  identifier: varchar("identifier", { length: 46 }),
  job: varchar("job", { length: 100 }).notNull(),
  grade: int("grade").notNull(),
});

export const myemergency_criminal_complaint = mysqlTable(
  "myemergency_criminal_complaint",
  {
    id: int("id").autoincrement().notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    charge_from: varchar("charge_from", { length: 90 }).default("''").notNull(),
    perpetrator: varchar("perpetrator", { length: 90 }).default("''").notNull(),
    perpetrator_description: text("perpetrator_description"),
    state: int("state").default(0).notNull(),
    act_of_crime: text("act_of_crime"),
    notes: text("notes"),
    createdby: varchar("createdby", { length: 90 }).default("''").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("''").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      idx_from: index("idx_from").on(table.charge_from),
      idx_perpetrator: index("idx_perpetrator").on(table.perpetrator),
    };
  }
);

export const myemergency_emergency_vehicle = mysqlTable(
  "myemergency_emergency_vehicle",
  {
    id: int("id").autoincrement().notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    name: varchar("name", { length: 90 }).default("''").notNull(),
    short_name: varchar("short_name", { length: 90 }).default("''").notNull(),
    vehicle: varchar("vehicle", { length: 90 }).default("''").notNull(),
    radio_status_id: int("radio_status_id").default(-1).notNull(),
    createdby: varchar("createdby", { length: 90 }).default("''").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("''").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      idx_name: index("idx_name").on(table.name),
      idx_short_name: index("idx_short_name").on(table.short_name),
      idx_vehicle: index("idx_vehicle").on(table.vehicle),
    };
  }
);

export const myemergency_employees = mysqlTable("myemergency_employees", {
  id: varchar("id", { length: 90 }).notNull(),
  fromsystem: varchar("fromsystem", { length: 10 })
    .default("'police'")
    .notNull(),
  is_suspended: tinyint("is_suspended").default(0).notNull(),
  is_suspended_by: varchar("is_suspended_by", { length: 90 })
    .default("''")
    .notNull(),
  is_suspended_date: timestamp("is_suspended_date", { mode: "string" }),
  is_control_centre: tinyint("is_control_centre").default(0).notNull(),
  emegency_vehicle_id: int("emegency_vehicle_id").default(-1).notNull(),
  radio_status_id: int("radio_status_id").default(-1).notNull(),
  createdby: varchar("createdby", { length: 90 }).default("''").notNull(),
  createddate: timestamp("createddate", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
  changedby: varchar("changedby", { length: 90 }).default("''").notNull(),
  changeddate: timestamp("changeddate", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
  serviceno: varchar("serviceno", { length: 90 }),
});

export const myemergency_employees_entries = mysqlTable(
  "myemergency_employees_entries",
  {
    id: int("id").autoincrement().notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    serviceno: varchar("serviceno", { length: 90 }),
    employee_id: varchar("employee_id", { length: 90 }).default("''").notNull(),
    content: text("content"),
    type_of_entry: int("type_of_entry").default(0).notNull(),
    closed: tinyint("closed").default(0).notNull(),
    createdby: varchar("createdby", { length: 90 }).default("''").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("''").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      idx_employee_id: index("idx_employee_id").on(table.employee_id),
    };
  }
);

export const myemergency_files = mysqlTable(
  "myemergency_files",
  {
    id: varchar("id", { length: 90 }).notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    player_id: varchar("player_id", { length: 90 }).default("''").notNull(),
    name: varchar("name", { length: 90 }).default("''").notNull(),
    alias: varchar("alias", { length: 90 }).default("''").notNull(),
    sex: int("sex").default(0).notNull(),
    phone: varchar("phone", { length: 90 }).default("''").notNull(),
    size: varchar("size", { length: 90 }).default("''").notNull(),
    birth: varchar("birth", { length: 90 }).default("''").notNull(),
    eyecolor: varchar("eyecolor", { length: 90 }).default("''").notNull(),
    haircolor: varchar("haircolor", { length: 90 }).default("''").notNull(),
    blood_type: varchar("blood_type", { length: 10 }).default("'A'").notNull(),
    weight: varchar("weight", { length: 90 }).default("''").notNull(),
    allergies: text("allergies"),
    known_illnesses: text("known_illnesses"),
    blackend: tinyint("blackend").default(0).notNull(),
    closed: tinyint("closed").default(0).notNull(),
    createdby: varchar("createdby", { length: 90 }).default("''").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("''").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    shared: tinyint("shared").default(0).notNull(),
  },
  (table) => {
    return {
      idx_type: index("idx_type").on(table.fromsystem),
      idx_name: index("idx_name").on(table.name),
      idx_alias: index("idx_alias").on(table.alias),
    };
  }
);

export const myemergency_files_entries = mysqlTable(
  "myemergency_files_entries",
  {
    id: int("id").autoincrement().notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    file_id: varchar("file_id", { length: 90 }),
    file_entry_id: varchar("file_entry_id", { length: 90 })
      .default("''")
      .notNull(),
    content: text("content"),
    is_wanted: tinyint("is_wanted").default(0).notNull(),
    is_wanted_by: varchar("is_wanted_by", { length: 90 })
      .default("''")
      .notNull(),
    is_wanted_done: tinyint("is_wanted_done").default(0).notNull(),
    is_wanted_reason: text("is_wanted_reason"),
    type_of_entry: int("type_of_entry").default(0).notNull(),
    fine: int("fine").default(0).notNull(),
    detention_time: int("detention_time").default(0).notNull(),
    closed: tinyint("closed").default(0).notNull(),
    shared: tinyint("shared").default(0).notNull(),
    injury_head: tinyint("injury_head").default(0).notNull(),
    injury_left_shoulder: tinyint("injury_left_shoulder").default(0).notNull(),
    injury_right_shoulder: tinyint("injury_right_shoulder")
      .default(0)
      .notNull(),
    injury_left_arm: tinyint("injury_left_arm").default(0).notNull(),
    injury_right_arm: tinyint("injury_right_arm").default(0).notNull(),
    injury_chest: tinyint("injury_chest").default(0).notNull(),
    injury_stomach: tinyint("injury_stomach").default(0).notNull(),
    injury_left_leg: tinyint("injury_left_leg").default(0).notNull(),
    injury_right_leg: tinyint("injury_right_leg").default(0).notNull(),
    injury_left_hand: tinyint("injury_left_hand").default(0).notNull(),
    injury_right_hand: tinyint("injury_right_hand").default(0).notNull(),
    injury_left_foot: tinyint("injury_left_foot").default(0).notNull(),
    injury_right_foot: tinyint("injury_right_foot").default(0).notNull(),
    injury_summary: text("injury_summary"),
    intensity_of_wounds: varchar("intensity_of_wounds", { length: 128 })
      .default("''")
      .notNull(),
    type_of_bleeding: varchar("type_of_bleeding", { length: 128 })
      .default("''")
      .notNull(),
    treatment: varchar("treatment", { length: 128 }).default("''").notNull(),
    needs_follow_up_treatment: tinyint("needs_follow_up_treatment")
      .default(0)
      .notNull(),
    createdby: varchar("createdby", { length: 90 }).default("''").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("''").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      idx_file_id: index("idx_file_id").on(table.file_id),
      idx_is_wanted_done: index("idx_is_wanted_done").on(table.is_wanted_done),
      idx_is_wanted: index("idx_is_wanted").on(table.is_wanted),
    };
  }
);

export const myemergency_files_licences = mysqlTable(
  "myemergency_files_licences",
  {
    id: int("id").autoincrement().notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    file_id: varchar("file_id", { length: 90 }).notNull(),
    license_id: int("license_id").notNull(),
    createdby: varchar("createdby", { length: 90 }).default("''").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("''").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      id_UNIQUE: unique("id_UNIQUE").on(table.id),
    };
  }
);

export const myemergency_investigations = mysqlTable(
  "myemergency_investigations",
  {
    id: int("id").autoincrement().notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    name: varchar("name", { length: 90 }).default("''").notNull(),
    reason: text("reason"),
    closed: tinyint("closed").default(0).notNull(),
    createdby: varchar("createdby", { length: 90 }).default("''").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("''").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      idx_name: index("idx_name").on(table.name),
    };
  }
);

export const myemergency_investigations_entries = mysqlTable(
  "myemergency_investigations_entries",
  {
    id: int("id").autoincrement().notNull(),
    investigation_id: int("investigation_id").default(0).notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    content: text("content"),
    is_important_entry: tinyint("is_important_entry").default(0).notNull(),
    createdby: varchar("createdby", { length: 90 }).default("'0'").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("'0'").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  }
);

export const myemergency_law_books = mysqlTable(
  "myemergency_law_books",
  {
    id: int("id").autoincrement().notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    name: varchar("name", { length: 90 }).default("''").notNull(),
    short_name: varchar("short_name", { length: 90 }).default("''").notNull(),
    createdby: varchar("createdby", { length: 90 }).default("''").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("''").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      idx_name: index("idx_name").on(table.name),
      idx_short_name: index("idx_short_name").on(table.short_name),
    };
  }
);

export const myemergency_law_book_laws = mysqlTable(
  "myemergency_law_book_laws",
  {
    id: int("id").autoincrement().notNull(),
    lawbook_id: int("lawbook_id").default(0).notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    crime: varchar("crime", { length: 90 }).default("''").notNull(),
    paragraph: varchar("paragraph", { length: 90 }).default("''").notNull(),
    minimum_penalty: int("minimum_penalty").default(0).notNull(),
    detention_time: int("detention_time").default(0).notNull(),
    others: varchar("others", { length: 128 }).default("''").notNull(),
    createdby: varchar("createdby", { length: 90 }).default("''").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("''").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  }
);

export const myemergency_licenses = mysqlTable(
  "myemergency_licenses",
  {
    id: int("id").autoincrement().notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    string_key: varchar("string_key", { length: 60 }),
    name: varchar("name", { length: 90 }).default("''").notNull(),
    createdby: varchar("createdby", { length: 90 }).default("''").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("''").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      idx_name: index("idx_name").on(table.name),
    };
  }
);

export const myemergency_mission_reports = mysqlTable(
  "myemergency_mission_reports",
  {
    id: int("id").autoincrement().notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    name: varchar("name", { length: 90 }).default("''").notNull(),
    mission_date: varchar("mission_date", { length: 90 })
      .default("''")
      .notNull(),
    mission_location: varchar("mission_location", { length: 90 })
      .default("''")
      .notNull(),
    involved_forces: varchar("involved_forces", { length: 90 })
      .default("''")
      .notNull(),
    report: text("report"),
    createdby: varchar("createdby", { length: 90 }).default("''").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("''").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      idx_name: index("idx_name").on(table.name),
    };
  }
);

export const myemergency_possible_rights = mysqlTable(
  "myemergency_possible_rights",
  {
    fromsystem: varchar("fromsystem", { length: 10 }).default("''").notNull(),
    right_key: varchar("right_key", { length: 90 }).default("''").notNull(),
    sortorder: int("sortorder").notNull(),
  },
  (table) => {
    return {
      idx_sortorder: index("idx_sortorder").on(table.sortorder),
      idx_type: index("idx_type").on(table.fromsystem),
    };
  }
);

export const myemergency_radio_state = mysqlTable(
  "myemergency_radio_state",
  {
    id: int("id").autoincrement().notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    name: varchar("name", { length: 90 }).default("''").notNull(),
    short_name: varchar("short_name", { length: 90 }).default("''").notNull(),
    color: varchar("color", { length: 90 }).default("''").notNull(),
    createdby: varchar("createdby", { length: 90 }).default("''").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("''").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      idx_name: index("idx_name").on(table.name),
      idx_shortname: index("idx_shortname").on(table.short_name),
    };
  }
);

export const myemergency_reg_vehicle = mysqlTable(
  "myemergency_reg_vehicle",
  {
    id: int("id").autoincrement().notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    plate: varchar("plate", { length: 90 }).default("''").notNull(),
    owner: varchar("owner", { length: 90 }),
    veh_type: varchar("veh_type", { length: 90 }).default("''").notNull(),
    mot: varchar("mot", { length: 90 }).default("''").notNull(),
    veh_model: varchar("veh_model", { length: 90 }).default("''").notNull(),
    others: varchar("others", { length: 512 }).default("''").notNull(),
    is_wanted: tinyint("is_wanted").default(0).notNull(),
    is_wanted_reason: varchar("is_wanted_reason", { length: 512 })
      .default("''")
      .notNull(),
    color: varchar("color", { length: 90 }).default("''").notNull(),
    createdby: varchar("createdby", { length: 90 }).default("''").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("''").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      idx_owner: index("idx_owner").on(table.owner),
      idx_plate: index("idx_plate").on(table.plate),
      idx_veh_type: index("idx_veh_type").on(table.veh_type),
      idx_veh_model: index("idx_veh_model").on(table.veh_model),
    };
  }
);

export const myemergency_reg_weapons = mysqlTable(
  "myemergency_reg_weapons",
  {
    id: int("id").autoincrement().notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    serialno: varchar("serialno", { length: 128 }).default("''").notNull(),
    owner: varchar("owner", { length: 90 }),
    weapontype: varchar("weapontype", { length: 128 }).default("''").notNull(),
    weaponmodel: varchar("weaponmodel", { length: 128 })
      .default("''")
      .notNull(),
    others: text("others"),
    is_wanted: tinyint("is_wanted").default(0).notNull(),
    is_wanted_reason: varchar("is_wanted_reason", { length: 512 })
      .default("''")
      .notNull(),
    createdby: varchar("createdby", { length: 90 }).default("''").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("''").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      idx_serialno: index("idx_serialno").on(table.serialno),
      idx_owner: index("idx_owner").on(table.owner),
      idx_weapontype: index("idx_weapontype").on(table.weapontype),
      idx_weaponmodel: index("idx_weaponmodel").on(table.weaponmodel),
    };
  }
);

export const myemergency_rights = mysqlTable("myemergency_rights", {
  fromsystem: varchar("fromsystem", { length: 10 })
    .default("'police'")
    .notNull(),
  rank_id: int("rank_id").default(-1).notNull(),
  rights_key: varchar("rights_key", { length: 90 }).default("''").notNull(),
  active: tinyint("active").default(0).notNull(),
});

export const myemergency_trainings = mysqlTable(
  "myemergency_trainings",
  {
    id: int("id").autoincrement().notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    name: varchar("name", { length: 90 }).default("''").notNull(),
    short_name: varchar("short_name", { length: 90 }).default("''").notNull(),
    content: text("content"),
    allow_self_entry: tinyint("allow_self_entry").default(0).notNull(),
    min_rank_id: int("min_rank_id").default(0).notNull(),
    trainee: varchar("trainee", { length: 90 }).default("''").notNull(),
    createdby: varchar("createdby", { length: 90 }).default("''").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("''").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      idx_name: index("idx_name").on(table.name),
      idx_short_name: index("idx_short_name").on(table.short_name),
    };
  }
);

export const myemergency_trainings_employees = mysqlTable(
  "myemergency_trainings_employees",
  {
    id: int("id").autoincrement().notNull(),
    training_id: int("training_id").notNull(),
    employee_id: varchar("employee_id", { length: 90 }).notNull(),
    fromsystem: varchar("fromsystem", { length: 10 })
      .default("'police'")
      .notNull(),
    passed: int("passed").default(-1).notNull(),
    createdby: varchar("createdby", { length: 90 }).default("'0'").notNull(),
    createddate: timestamp("createddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
    changedby: varchar("changedby", { length: 90 }).default("'0'").notNull(),
    changeddate: timestamp("changeddate", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      id_UNIQUE: unique("id_UNIQUE").on(table.id),
    };
  }
);

export const nass_bossmenu_graphdata = mysqlTable("nass_bossmenu_graphdata", {
  society: varchar("society", { length: 50 }),
  data: longtext("data"),
});

export const nass_bossmenu_transactions = mysqlTable(
  "nass_bossmenu_transactions",
  {
    id: int("id").autoincrement().notNull(),
    society: varchar("society", { length: 50 }),
    reason: varchar("reason", { length: 50 }),
    date: timestamp("date", { mode: "string" }).default("current_timestamp()"),
  }
);

export const okokbanking_societies = mysqlTable("okokbanking_societies", {
  society: varchar("society", { length: 255 }),
  society_name: varchar("society_name", { length: 255 }),
  value: int("value"),
  iban: varchar("iban", { length: 255 }).notNull(),
  is_withdrawing: int("is_withdrawing"),
});

export const okokbanking_transactions = mysqlTable("okokbanking_transactions", {
  id: int("id").autoincrement().notNull(),
  receiver_identifier: varchar("receiver_identifier", {
    length: 255,
  }).notNull(),
  receiver_name: varchar("receiver_name", { length: 255 }).notNull(),
  sender_identifier: varchar("sender_identifier", { length: 255 }).notNull(),
  sender_name: varchar("sender_name", { length: 255 }).notNull(),
  date: varchar("date", { length: 255 }).notNull(),
  value: int("value").notNull(),
  type: varchar("type", { length: 255 }).notNull(),
});

export const okokbilling = mysqlTable("okokbilling", {
  id: int("id").autoincrement().notNull(),
  receiver_identifier: varchar("receiver_identifier", {
    length: 255,
  }).notNull(),
  receiver_name: varchar("receiver_name", { length: 255 }).notNull(),
  author_identifier: varchar("author_identifier", { length: 255 }).notNull(),
  author_name: varchar("author_name", { length: 255 }),
  society: varchar("society", { length: 255 }).notNull(),
  society_name: varchar("society_name", { length: 255 }).notNull(),
  item: varchar("item", { length: 255 }).notNull(),
  invoice_value: int("invoice_value").notNull(),
  status: varchar("status", { length: 50 }).notNull(),
  notes: varchar("notes", { length: 255 }).default("' '"),
  sent_date: varchar("sent_date", { length: 255 }).notNull(),
  limit_pay_date: varchar("limit_pay_date", { length: 255 }),
  fees_amount: int("fees_amount").default(0),
  paid_date: varchar("paid_date", { length: 255 }),
});

export const ot_skills = mysqlTable("ot_skills", {
  id: int("id").autoincrement().notNull(),
  identifier: varchar("identifier", { length: 46 }),
  stamina: longtext("stamina").default('{"statlevel":0,"xp":0,"level":1}'),
  strength: longtext("strength").default('{"statlevel":0,"xp":0,"level":1}'),
  driving: longtext("driving").default('{"statlevel":0,"xp":0,"level":1}'),
  shooting: longtext("shooting").default('{"statlevel":0,"xp":0,"level":1}'),
  diving: longtext("diving").default('{"statlevel":0,"xp":0,"level":1}'),
  drugs: longtext("drugs").default('{"statlevel":0,"xp":0,"level":1}'),
  crafting: longtext("crafting").default('{"statlevel":0,"xp":0,"level":1}'),
  gunsmithing: longtext("gunsmithing").default(
    '{"statlevel":0,"xp":0,"level":1}'
  ),
  chemistry: longtext("chemistry").default('{"statlevel":0,"xp":0,"level":1}'),
  woodcutting: longtext("woodcutting").default(
    '{"statlevel":0,"xp":0,"level":1}'
  ),
  mixology: longtext("mixology").default('{"statlevel":0,"xp":0,"level":1}'),
  cooking: longtext("cooking").default('{"statlevel":0,"xp":0,"level":1}'),
  condition: longtext("condition").default(
    '{"level":"1","xp":"0","statlevel":"0"}'
  ),
  gunsmith: longtext("gunsmith").default(
    '{"xp":"0","statlevel":"0","level":"1"}'
  ),
});

export const outfits = mysqlTable(
  "outfits",
  {
    id: int("id").autoincrement().notNull(),
    identifier: varchar("identifier", { length: 46 }),
    name: longtext("name"),
    ped: longtext("ped"),
    components: longtext("components"),
    props: longtext("props"),
  },
  (table) => {
    return {
      id_UNIQUE: unique("id_UNIQUE").on(table.id),
    };
  }
);

export const owned_gyms = mysqlTable(
  "owned_gyms",
  {
    id: int("id").autoincrement().notNull(),
    identifier: varchar("identifier", { length: 500 }).notNull(),
    gymid: int("gymid").notNull(),
    gymprice: int("gymprice").notNull(),
    gymbalance: int("gymbalance").notNull(),
    gymvisitorsdata: longtext("gymvisitorsdata").notNull(),
    gymclosed: tinyint("gymclosed").default(0).notNull(),
  },
  (table) => {
    return {
      identifier: index("identifier").on(table.identifier),
    };
  }
);

export const owned_vehicles = mysqlTable("owned_vehicles", {
  owner: varchar("owner", { length: 46 }),
  plate: varchar("plate", { length: 12 }).notNull(),
  vehicle: longtext("vehicle"),
  type: varchar("type", { length: 20 }).default("'car'").notNull(),
  job: varchar("job", { length: 20 }).default("''"),
  parking: varchar("parking", { length: 60 }),
  pound: varchar("pound", { length: 60 }),
  glovebox: longtext("glovebox"),
  trunk: longtext("trunk"),
  damages: longtext("damages"),
  garage: varchar("garage", { length: 50 }).default("'square'").notNull(),
  stored: tinyint("stored").default(1).notNull(),
  carseller: int("carseller").default(0),
  mdt_image: mediumtext("mdt_image"),
  mdt_description: mediumtext("mdt_description"),
  fitment: longtext("fitment"),
  tuning: longtext("tuning"),
});

export const ox_doorlock = mysqlTable("ox_doorlock", {
  id: int("id").autoincrement().notNull(),
  name: varchar("name", { length: 50 }).notNull(),
  data: longtext("data").notNull(),
});

export const ox_inventory = mysqlTable(
  "ox_inventory",
  {
    owner: varchar("owner", { length: 46 }),
    name: varchar("name", { length: 100 }).notNull(),
    data: longtext("data"),
    lastupdated: timestamp("lastupdated", { mode: "string" }).default(
      "current_timestamp()"
    ),
  },
  (table) => {
    return {
      owner: unique("owner").on(table.owner, table.name),
    };
  }
);

export const phone_backups = mysqlTable(
  "phone_backups",
  {
    id: varchar("id", { length: 100 }).notNull(),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
  },
  (table) => {
    return {
      phone_number: index("phone_number").on(table.phone_number),
    };
  }
);

export const phone_clock_alarms = mysqlTable(
  "phone_clock_alarms",
  {
    id: varchar("id", { length: 10 }).notNull(),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    hours: int("hours").default(0).notNull(),
    minutes: int("minutes").default(0).notNull(),
    label: varchar("label", { length: 50 }),
    enabled: tinyint("enabled").default(1),
  },
  (table) => {
    return {
      phone_number: index("phone_number").on(table.phone_number),
    };
  }
);

export const phone_crypto = mysqlTable("phone_crypto", {
  id: varchar("id", { length: 100 }).notNull(),
  coin: varchar("coin", { length: 15 }).notNull(),
  amount: double("amount").notNull(),
  invested: int("invested").default(0).notNull(),
});

export const phone_darkchat_accounts = mysqlTable(
  "phone_darkchat_accounts",
  {
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    username: varchar("username", { length: 20 }).notNull(),
  },
  (table) => {
    return {
      phone_number: index("phone_number").on(table.phone_number),
    };
  }
);

export const phone_darkchat_channels = mysqlTable("phone_darkchat_channels", {
  name: varchar("name", { length: 50 }).notNull(),
  last_message: varchar("last_message", { length: 50 }).default("''").notNull(),
  timestamp: timestamp("timestamp", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const phone_darkchat_members = mysqlTable("phone_darkchat_members", {
  channel_name: varchar("channel_name", { length: 50 }).notNull(),
  username: varchar("username", { length: 20 }).notNull(),
});

export const phone_darkchat_messages = mysqlTable("phone_darkchat_messages", {
  id: int("id").autoincrement().notNull(),
  channel: varchar("channel", { length: 50 }).notNull(),
  sender: varchar("sender", { length: 20 }).notNull(),
  content: varchar("content", { length: 1000 }),
  timestamp: timestamp("timestamp", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const phone_instagram_accounts = mysqlTable(
  "phone_instagram_accounts",
  {
    display_name: varchar("display_name", { length: 30 }).notNull(),
    username: varchar("username", { length: 20 }).notNull(),
    password: varchar("password", { length: 100 }).notNull(),
    profile_image: varchar("profile_image", { length: 500 }),
    bio: varchar("bio", { length: 100 }),
    post_count: int("post_count").default(0).notNull(),
    story_count: int("story_count").default(0).notNull(),
    follower_count: int("follower_count").default(0).notNull(),
    following_count: int("following_count").default(0).notNull(),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    private: tinyint("private").default(0),
    verified: tinyint("verified").default(0),
    date_joined: timestamp("date_joined", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      phone_number: index("phone_number").on(table.phone_number),
    };
  }
);

export const phone_instagram_comments = mysqlTable(
  "phone_instagram_comments",
  {
    id: varchar("id", { length: 10 }).notNull(),
    post_id: varchar("post_id", { length: 50 })
      .notNull()
      .references(() => phone_instagram_posts.id, {
        onDelete: "cascade",
        onUpdate: "restrict",
      }),
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_instagram_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    comment: varchar("comment", { length: 500 }).default("''").notNull(),
    like_count: int("like_count").default(0).notNull(),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      post_id: index("post_id").on(table.post_id),
      username: index("username").on(table.username),
    };
  }
);

export const phone_instagram_follows = mysqlTable(
  "phone_instagram_follows",
  {
    followed: varchar("followed", { length: 20 })
      .notNull()
      .references(() => phone_instagram_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    follower: varchar("follower", { length: 20 })
      .notNull()
      .references(() => phone_instagram_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
  },
  (table) => {
    return {
      follower: index("follower").on(table.follower),
    };
  }
);

export const phone_instagram_follow_requests = mysqlTable(
  "phone_instagram_follow_requests",
  {
    requester: varchar("requester", { length: 20 })
      .notNull()
      .references(() => phone_instagram_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    requestee: varchar("requestee", { length: 20 })
      .notNull()
      .references(() => phone_instagram_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      requestee: index("requestee").on(table.requestee),
    };
  }
);

export const phone_instagram_likes = mysqlTable(
  "phone_instagram_likes",
  {
    id: varchar("id", { length: 10 }).notNull(),
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_instagram_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    is_comment: tinyint("is_comment").default(0).notNull(),
  },
  (table) => {
    return {
      username: index("username").on(table.username),
    };
  }
);

export const phone_instagram_loggedin = mysqlTable(
  "phone_instagram_loggedin",
  {
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_instagram_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
  },
  (table) => {
    return {
      username: index("username").on(table.username),
    };
  }
);

export const phone_instagram_messages = mysqlTable(
  "phone_instagram_messages",
  {
    id: varchar("id", { length: 10 }).notNull(),
    sender: varchar("sender", { length: 20 })
      .notNull()
      .references(() => phone_instagram_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    recipient: varchar("recipient", { length: 20 })
      .notNull()
      .references(() => phone_instagram_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    content: varchar("content", { length: 1000 }),
    attachments: text("attachments"),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      sender: index("sender").on(table.sender),
      recipient: index("recipient").on(table.recipient),
    };
  }
);

export const phone_instagram_notifications = mysqlTable(
  "phone_instagram_notifications",
  {
    id: varchar("id", { length: 10 }).notNull(),
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_instagram_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    from: varchar("from", { length: 20 })
      .notNull()
      .references(() => phone_instagram_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    type: varchar("type", { length: 20 }).notNull(),
    post_id: varchar("post_id", { length: 50 }),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      username: index("username").on(table.username),
      from: index("from").on(table.from),
    };
  }
);

export const phone_instagram_posts = mysqlTable(
  "phone_instagram_posts",
  {
    id: varchar("id", { length: 10 }).notNull(),
    media: text("media"),
    caption: varchar("caption", { length: 500 }).default("''").notNull(),
    location: varchar("location", { length: 50 }),
    like_count: int("like_count").default(0).notNull(),
    comment_count: int("comment_count").default(0).notNull(),
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_instagram_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      username: index("username").on(table.username),
    };
  }
);

export const phone_instagram_stories = mysqlTable(
  "phone_instagram_stories",
  {
    id: varchar("id", { length: 10 }).notNull(),
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_instagram_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    image: varchar("image", { length: 500 }).notNull(),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      username: index("username").on(table.username),
    };
  }
);

export const phone_instagram_stories_views = mysqlTable(
  "phone_instagram_stories_views",
  {
    story_id: varchar("story_id", { length: 50 })
      .notNull()
      .references(() => phone_instagram_stories.id, {
        onDelete: "cascade",
        onUpdate: "restrict",
      }),
    viewer: varchar("viewer", { length: 20 })
      .notNull()
      .references(() => phone_instagram_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      viewer: index("viewer").on(table.viewer),
    };
  }
);

export const phone_last_phone = mysqlTable(
  "phone_last_phone",
  {
    id: varchar("id", { length: 100 }).notNull(),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
  },
  (table) => {
    return {
      phone_number: index("phone_number").on(table.phone_number),
    };
  }
);

export const phone_logged_in_accounts = mysqlTable("phone_logged_in_accounts", {
  phone_number: varchar("phone_number", { length: 15 })
    .notNull()
    .references(() => phone_phones.phone_number, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
  app: varchar("app", { length: 50 }).notNull(),
  username: varchar("username", { length: 100 }).notNull(),
});

export const phone_mail_accounts = mysqlTable("phone_mail_accounts", {
  address: varchar("address", { length: 100 }).notNull(),
  password: varchar("password", { length: 100 }).notNull(),
});

export const phone_mail_loggedin = mysqlTable(
  "phone_mail_loggedin",
  {
    address: varchar("address", { length: 100 })
      .notNull()
      .references(() => phone_mail_accounts.address, {
        onDelete: "cascade",
        onUpdate: "restrict",
      }),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
  },
  (table) => {
    return {
      address: index("address").on(table.address),
    };
  }
);

export const phone_mail_messages = mysqlTable("phone_mail_messages", {
  id: varchar("id", { length: 10 }).notNull(),
  recipient: varchar("recipient", { length: 100 }).notNull(),
  sender: varchar("sender", { length: 100 }).notNull(),
  subject: varchar("subject", { length: 100 }).notNull(),
  content: text("content").notNull(),
  attachments: longtext("attachments"),
  actions: longtext("actions"),
  read: tinyint("read").default(0).notNull(),
  timestamp: timestamp("timestamp", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const phone_maps_locations = mysqlTable(
  "phone_maps_locations",
  {
    id: varchar("id", { length: 10 }).notNull(),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    name: varchar("name", { length: 50 }).notNull(),
    x_pos: float("x_pos").notNull(),
    y_pos: float("y_pos").notNull(),
  },
  (table) => {
    return {
      phone_number: index("phone_number").on(table.phone_number),
    };
  }
);

export const phone_marketplace_posts = mysqlTable("phone_marketplace_posts", {
  id: varchar("id", { length: 10 }).notNull(),
  phone_number: varchar("phone_number", { length: 15 }).notNull(),
  title: varchar("title", { length: 50 }).notNull(),
  description: varchar("description", { length: 1000 }).notNull(),
  attachments: text("attachments"),
  price: int("price").notNull(),
  timestamp: timestamp("timestamp", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const phone_message_channels = mysqlTable("phone_message_channels", {
  id: int("id").autoincrement().notNull(),
  is_group: tinyint("is_group").default(0).notNull(),
  name: varchar("name", { length: 50 }),
  last_message: varchar("last_message", { length: 50 }).default("''").notNull(),
  last_message_timestamp: timestamp("last_message_timestamp", {
    mode: "string",
  })
    .default("current_timestamp()")
    .notNull(),
});

export const phone_message_members = mysqlTable(
  "phone_message_members",
  {
    phone_number: varchar("phone_number", { length: 15 }).notNull(),
    channel_id: int("channel_id")
      .notNull()
      .references(() => phone_message_channels.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    is_owner: tinyint("is_owner").default(0).notNull(),
    deleted: tinyint("deleted").default(0).notNull(),
    unread: int("unread").default(0).notNull(),
  },
  (table) => {
    return {
      channel_id: index("channel_id").on(table.channel_id),
    };
  }
);

export const phone_message_messages = mysqlTable(
  "phone_message_messages",
  {
    id: int("id").autoincrement().notNull(),
    channel_id: int("channel_id")
      .notNull()
      .references(() => phone_message_channels.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    sender: varchar("sender", { length: 15 }).notNull(),
    content: varchar("content", { length: 1000 }),
    attachments: text("attachments"),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      channel_id: index("channel_id").on(table.channel_id),
    };
  }
);

export const phone_music_playlists = mysqlTable(
  "phone_music_playlists",
  {
    id: varchar("id", { length: 10 }).notNull(),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    name: varchar("name", { length: 50 }).notNull(),
    cover: varchar("cover", { length: 500 }),
  },
  (table) => {
    return {
      phone_number: index("phone_number").on(table.phone_number),
    };
  }
);

export const phone_music_saved_playlists = mysqlTable(
  "phone_music_saved_playlists",
  {
    playlist_id: varchar("playlist_id", { length: 50 })
      .notNull()
      .references(() => phone_music_playlists.id, {
        onDelete: "cascade",
        onUpdate: "restrict",
      }),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
  },
  (table) => {
    return {
      phone_number: index("phone_number").on(table.phone_number),
    };
  }
);

export const phone_music_songs = mysqlTable(
  "phone_music_songs",
  {
    song_id: varchar("song_id", { length: 100 }).notNull(),
    playlist_id: varchar("playlist_id", { length: 50 })
      .notNull()
      .references(() => phone_music_playlists.id, {
        onDelete: "cascade",
        onUpdate: "restrict",
      }),
  },
  (table) => {
    return {
      playlist_id: index("playlist_id").on(table.playlist_id),
    };
  }
);

export const phone_notes = mysqlTable(
  "phone_notes",
  {
    id: varchar("id", { length: 10 }).notNull(),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    title: varchar("title", { length: 50 }).notNull(),
    content: longtext("content"),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      phone_number: index("phone_number").on(table.phone_number),
    };
  }
);

export const phone_notifications = mysqlTable(
  "phone_notifications",
  {
    id: int("id").autoincrement().notNull(),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    app: varchar("app", { length: 50 }).notNull(),
    title: varchar("title", { length: 50 }),
    content: varchar("content", { length: 500 }),
    thumbnail: varchar("thumbnail", { length: 500 }),
    avatar: varchar("avatar", { length: 500 }),
    show_avatar: tinyint("show_avatar").default(0),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      phone_number: index("phone_number").on(table.phone_number),
    };
  }
);

export const phone_phones = mysqlTable(
  "phone_phones",
  {
    id: varchar("id", { length: 100 }).notNull(),
    owner_id: varchar("owner_id", { length: 100 }).notNull(),
    phone_number: varchar("phone_number", { length: 15 }).notNull(),
    name: varchar("name", { length: 50 }),
    pin: varchar("pin", { length: 4 }),
    face_id: varchar("face_id", { length: 100 }),
    settings: longtext("settings"),
    is_setup: tinyint("is_setup").default(0),
    assigned: tinyint("assigned").default(0),
    battery: int("battery").default(100).notNull(),
  },
  (table) => {
    return {
      phone_number: unique("phone_number").on(table.phone_number),
    };
  }
);

export const phone_phone_blocked_numbers = mysqlTable(
  "phone_phone_blocked_numbers",
  {
    phone_number: varchar("phone_number", { length: 15 }).notNull(),
    blocked_number: varchar("blocked_number", { length: 15 }).notNull(),
  }
);

export const phone_phone_calls = mysqlTable("phone_phone_calls", {
  id: varchar("id", { length: 10 }).notNull(),
  caller: varchar("caller", { length: 15 }).notNull(),
  callee: varchar("callee", { length: 15 }).notNull(),
  duration: int("duration").default(0).notNull(),
  answered: tinyint("answered").default(0),
  hide_caller_id: tinyint("hide_caller_id").default(0),
  timestamp: timestamp("timestamp", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const phone_phone_contacts = mysqlTable("phone_phone_contacts", {
  contact_phone_number: varchar("contact_phone_number", {
    length: 15,
  }).notNull(),
  firstname: varchar("firstname", { length: 50 }).default("''").notNull(),
  lastname: varchar("lastname", { length: 50 }).default("''").notNull(),
  profile_image: varchar("profile_image", { length: 500 }),
  email: varchar("email", { length: 50 }),
  address: varchar("address", { length: 50 }),
  favourite: tinyint("favourite").default(0),
  phone_number: varchar("phone_number", { length: 15 }).notNull(),
});

export const phone_phone_voicemail = mysqlTable("phone_phone_voicemail", {
  id: varchar("id", { length: 10 }).notNull(),
  caller: varchar("caller", { length: 15 }).notNull(),
  callee: varchar("callee", { length: 15 }).notNull(),
  url: varchar("url", { length: 500 }).notNull(),
  duration: int("duration").notNull(),
  hide_caller_id: tinyint("hide_caller_id").default(0),
  timestamp: timestamp("timestamp", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const phone_photos = mysqlTable(
  "phone_photos",
  {
    id: int("id").autoincrement().notNull(),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    link: varchar("link", { length: 500 }).notNull(),
    is_video: tinyint("is_video").default(0),
    size: float("size").notNull(),
    metadata: varchar("metadata", { length: 20 }),
    is_favourite: tinyint("is_favourite").default(0),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      phone_number: index("phone_number").on(table.phone_number),
    };
  }
);

export const phone_photo_albums = mysqlTable(
  "phone_photo_albums",
  {
    id: int("id").autoincrement().notNull(),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    title: varchar("title", { length: 100 }).notNull(),
  },
  (table) => {
    return {
      phone_number: index("phone_number").on(table.phone_number),
    };
  }
);

export const phone_photo_album_photos = mysqlTable(
  "phone_photo_album_photos",
  {
    album_id: int("album_id")
      .notNull()
      .references(() => phone_photo_albums.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    photo_id: int("photo_id")
      .notNull()
      .references(() => phone_photos.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
  },
  (table) => {
    return {
      photo_id: index("photo_id").on(table.photo_id),
    };
  }
);

export const phone_services_channels = mysqlTable("phone_services_channels", {
  id: varchar("id", { length: 10 }).notNull(),
  phone_number: varchar("phone_number", { length: 15 }).notNull(),
  company: varchar("company", { length: 50 }).notNull(),
  last_message: varchar("last_message", { length: 100 }),
  timestamp: timestamp("timestamp", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const phone_services_messages = mysqlTable(
  "phone_services_messages",
  {
    id: varchar("id", { length: 10 }).notNull(),
    channel_id: varchar("channel_id", { length: 50 })
      .notNull()
      .references(() => phone_services_channels.id, {
        onDelete: "cascade",
        onUpdate: "restrict",
      }),
    sender: varchar("sender", { length: 15 }).notNull(),
    message: varchar("message", { length: 1000 }).notNull(),
    x_pos: int("x_pos"),
    y_pos: int("y_pos"),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      channel_id: index("channel_id").on(table.channel_id),
    };
  }
);

export const phone_tiktok_accounts = mysqlTable(
  "phone_tiktok_accounts",
  {
    name: varchar("name", { length: 30 }).notNull(),
    bio: varchar("bio", { length: 100 }),
    avatar: varchar("avatar", { length: 500 }),
    username: varchar("username", { length: 20 }).notNull(),
    password: varchar("password", { length: 100 }).notNull(),
    verified: tinyint("verified").default(0),
    follower_count: int("follower_count").default(0).notNull(),
    following_count: int("following_count").default(0).notNull(),
    like_count: int("like_count").default(0).notNull(),
    video_count: int("video_count").default(0).notNull(),
    twitter: varchar("twitter", { length: 20 }),
    instagram: varchar("instagram", { length: 20 }),
    show_likes: tinyint("show_likes").default(1),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    date_joined: timestamp("date_joined", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      phone_number: index("phone_number").on(table.phone_number),
    };
  }
);

export const phone_tiktok_channels = mysqlTable(
  "phone_tiktok_channels",
  {
    id: varchar("id", { length: 10 }).notNull(),
    last_message: varchar("last_message", { length: 50 }).notNull(),
    member_1: varchar("member_1", { length: 20 })
      .notNull()
      .references(() => phone_tiktok_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    member_2: varchar("member_2", { length: 20 })
      .notNull()
      .references(() => phone_tiktok_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      member_2: index("member_2").on(table.member_2),
      member_1: unique("member_1").on(table.member_1, table.member_2),
    };
  }
);

export const phone_tiktok_comments = mysqlTable(
  "phone_tiktok_comments",
  {
    id: varchar("id", { length: 10 }).notNull(),
    reply_to: varchar("reply_to", { length: 10 }),
    video_id: varchar("video_id", { length: 10 })
      .notNull()
      .references(() => phone_tiktok_videos.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_tiktok_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    comment: varchar("comment", { length: 550 }).notNull(),
    likes: int("likes").default(0).notNull(),
    replies: int("replies").default(0).notNull(),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      video_id: index("video_id").on(table.video_id),
      username: index("username").on(table.username),
      reply_to: index("reply_to").on(table.reply_to),
      phone_tiktok_comments_ibfk_3: foreignKey({
        columns: [table.reply_to],
        foreignColumns: [table.id],
        name: "phone_tiktok_comments_ibfk_3",
      })
        .onUpdate("cascade")
        .onDelete("cascade"),
    };
  }
);

export const phone_tiktok_comments_likes = mysqlTable(
  "phone_tiktok_comments_likes",
  {
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_tiktok_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    comment_id: varchar("comment_id", { length: 10 })
      .notNull()
      .references(() => phone_tiktok_comments.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
  },
  (table) => {
    return {
      comment_id: index("comment_id").on(table.comment_id),
    };
  }
);

export const phone_tiktok_follows = mysqlTable(
  "phone_tiktok_follows",
  {
    followed: varchar("followed", { length: 20 })
      .notNull()
      .references(() => phone_tiktok_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    follower: varchar("follower", { length: 20 })
      .notNull()
      .references(() => phone_tiktok_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
  },
  (table) => {
    return {
      follower: index("follower").on(table.follower),
    };
  }
);

export const phone_tiktok_likes = mysqlTable(
  "phone_tiktok_likes",
  {
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_tiktok_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    video_id: varchar("video_id", { length: 10 })
      .notNull()
      .references(() => phone_tiktok_videos.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
  },
  (table) => {
    return {
      video_id: index("video_id").on(table.video_id),
    };
  }
);

export const phone_tiktok_loggedin = mysqlTable(
  "phone_tiktok_loggedin",
  {
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_tiktok_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
  },
  (table) => {
    return {
      username: index("username").on(table.username),
    };
  }
);

export const phone_tiktok_messages = mysqlTable(
  "phone_tiktok_messages",
  {
    id: varchar("id", { length: 10 }).notNull(),
    channel_id: varchar("channel_id", { length: 10 })
      .notNull()
      .references(() => phone_tiktok_channels.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    sender: varchar("sender", { length: 20 })
      .notNull()
      .references(() => phone_tiktok_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    content: varchar("content", { length: 500 }).notNull(),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      channel_id: index("channel_id").on(table.channel_id),
      sender: index("sender").on(table.sender),
    };
  }
);

export const phone_tiktok_notifications = mysqlTable(
  "phone_tiktok_notifications",
  {
    id: int("id").autoincrement().notNull(),
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_tiktok_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    from: varchar("from", { length: 20 })
      .notNull()
      .references(() => phone_tiktok_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    type: varchar("type", { length: 20 }).notNull(),
    video_id: varchar("video_id", { length: 10 }).references(
      () => phone_tiktok_videos.id,
      { onDelete: "cascade", onUpdate: "cascade" }
    ),
    comment_id: varchar("comment_id", { length: 10 }).references(
      () => phone_tiktok_comments.id,
      { onDelete: "cascade", onUpdate: "cascade" }
    ),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      username: index("username").on(table.username),
      from: index("from").on(table.from),
      video_id: index("video_id").on(table.video_id),
      comment_id: index("comment_id").on(table.comment_id),
    };
  }
);

export const phone_tiktok_pinned_videos = mysqlTable(
  "phone_tiktok_pinned_videos",
  {
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_tiktok_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    video_id: varchar("video_id", { length: 10 })
      .notNull()
      .references(() => phone_tiktok_videos.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
  },
  (table) => {
    return {
      video_id: index("video_id").on(table.video_id),
    };
  }
);

export const phone_tiktok_saves = mysqlTable(
  "phone_tiktok_saves",
  {
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_tiktok_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    video_id: varchar("video_id", { length: 10 })
      .notNull()
      .references(() => phone_tiktok_videos.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
  },
  (table) => {
    return {
      video_id: index("video_id").on(table.video_id),
    };
  }
);

export const phone_tiktok_unread_messages = mysqlTable(
  "phone_tiktok_unread_messages",
  {
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_tiktok_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    channel_id: varchar("channel_id", { length: 10 })
      .notNull()
      .references(() => phone_tiktok_channels.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    amount: int("amount").default(0).notNull(),
  },
  (table) => {
    return {
      channel_id: index("channel_id").on(table.channel_id),
    };
  }
);

export const phone_tiktok_videos = mysqlTable(
  "phone_tiktok_videos",
  {
    id: varchar("id", { length: 10 }).notNull(),
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_tiktok_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    src: varchar("src", { length: 500 }).notNull(),
    caption: varchar("caption", { length: 100 }),
    metadata: longtext("metadata"),
    music: text("music"),
    likes: int("likes").default(0).notNull(),
    comments: int("comments").default(0).notNull(),
    views: int("views").default(0).notNull(),
    saves: int("saves").default(0).notNull(),
    pinned_comment: varchar("pinned_comment", { length: 10 }),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      username: index("username").on(table.username),
    };
  }
);

export const phone_tiktok_views = mysqlTable(
  "phone_tiktok_views",
  {
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_tiktok_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    video_id: varchar("video_id", { length: 10 })
      .notNull()
      .references(() => phone_tiktok_videos.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
  },
  (table) => {
    return {
      video_id: index("video_id").on(table.video_id),
    };
  }
);

export const phone_tinder_accounts = mysqlTable("phone_tinder_accounts", {
  name: varchar("name", { length: 50 }).notNull(),
  phone_number: varchar("phone_number", { length: 15 })
    .notNull()
    .references(() => phone_phones.phone_number, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
  photos: text("photos"),
  bio: varchar("bio", { length: 500 }),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  dob: date("dob", { mode: "string" }).notNull(),
  is_male: tinyint("is_male").notNull(),
  interested_men: tinyint("interested_men").notNull(),
  interested_women: tinyint("interested_women").notNull(),
});

export const phone_tinder_matches = mysqlTable(
  "phone_tinder_matches",
  {
    phone_number_1: varchar("phone_number_1", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    phone_number_2: varchar("phone_number_2", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    latest_message: varchar("latest_message", { length: 1000 }),
    latest_message_timestamp: timestamp("latest_message_timestamp", {
      mode: "string",
    }),
  },
  (table) => {
    return {
      phone_number_2: index("phone_number_2").on(table.phone_number_2),
    };
  }
);

export const phone_tinder_messages = mysqlTable(
  "phone_tinder_messages",
  {
    id: varchar("id", { length: 10 }).notNull(),
    sender: varchar("sender", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    recipient: varchar("recipient", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    content: varchar("content", { length: 1000 }),
    attachments: text("attachments"),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      sender: index("sender").on(table.sender),
      recipient: index("recipient").on(table.recipient),
    };
  }
);

export const phone_tinder_swipes = mysqlTable(
  "phone_tinder_swipes",
  {
    swiper: varchar("swiper", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    swipee: varchar("swipee", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    liked: tinyint("liked").default(0).notNull(),
  },
  (table) => {
    return {
      swipee: index("swipee").on(table.swipee),
    };
  }
);

export const phone_twitter_accounts = mysqlTable(
  "phone_twitter_accounts",
  {
    display_name: varchar("display_name", { length: 30 }).notNull(),
    username: varchar("username", { length: 20 }).notNull(),
    password: varchar("password", { length: 100 }).notNull(),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    bio: varchar("bio", { length: 100 }),
    profile_image: varchar("profile_image", { length: 500 }),
    profile_header: varchar("profile_header", { length: 500 }),
    pinned_tweet: varchar("pinned_tweet", { length: 50 }),
    verified: tinyint("verified").default(0),
    follower_count: int("follower_count").default(0).notNull(),
    following_count: int("following_count").default(0).notNull(),
    private: tinyint("private").default(0),
    date_joined: timestamp("date_joined", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      phone_number: index("phone_number").on(table.phone_number),
    };
  }
);

export const phone_twitter_follows = mysqlTable(
  "phone_twitter_follows",
  {
    followed: varchar("followed", { length: 20 })
      .notNull()
      .references(() => phone_twitter_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    follower: varchar("follower", { length: 20 })
      .notNull()
      .references(() => phone_twitter_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    notifications: tinyint("notifications").default(0).notNull(),
  },
  (table) => {
    return {
      follower: index("follower").on(table.follower),
    };
  }
);

export const phone_twitter_follow_requests = mysqlTable(
  "phone_twitter_follow_requests",
  {
    requester: varchar("requester", { length: 20 })
      .notNull()
      .references(() => phone_twitter_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    requestee: varchar("requestee", { length: 20 })
      .notNull()
      .references(() => phone_twitter_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      requestee: index("requestee").on(table.requestee),
    };
  }
);

export const phone_twitter_hashtags = mysqlTable("phone_twitter_hashtags", {
  hashtag: varchar("hashtag", { length: 50 }).notNull(),
  amount: int("amount").default(0).notNull(),
  last_used: timestamp("last_used", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const phone_twitter_likes = mysqlTable(
  "phone_twitter_likes",
  {
    tweet_id: varchar("tweet_id", { length: 50 }).notNull(),
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_twitter_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      username: index("username").on(table.username),
    };
  }
);

export const phone_twitter_loggedin = mysqlTable(
  "phone_twitter_loggedin",
  {
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_twitter_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
  },
  (table) => {
    return {
      username: index("username").on(table.username),
    };
  }
);

export const phone_twitter_messages = mysqlTable(
  "phone_twitter_messages",
  {
    id: varchar("id", { length: 10 }).notNull(),
    sender: varchar("sender", { length: 20 })
      .notNull()
      .references(() => phone_twitter_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    recipient: varchar("recipient", { length: 20 })
      .notNull()
      .references(() => phone_twitter_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    content: varchar("content", { length: 1000 }),
    attachments: text("attachments"),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      sender: index("sender").on(table.sender),
      recipient: index("recipient").on(table.recipient),
    };
  }
);

export const phone_twitter_notifications = mysqlTable(
  "phone_twitter_notifications",
  {
    id: varchar("id", { length: 10 }).notNull(),
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_twitter_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    from: varchar("from", { length: 20 })
      .notNull()
      .references(() => phone_twitter_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    type: varchar("type", { length: 20 }).notNull(),
    tweet_id: varchar("tweet_id", { length: 50 }),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      username: index("username").on(table.username),
      from: index("from").on(table.from),
    };
  }
);

export const phone_twitter_promoted = mysqlTable("phone_twitter_promoted", {
  tweet_id: varchar("tweet_id", { length: 50 })
    .notNull()
    .references(() => phone_twitter_tweets.id, {
      onDelete: "cascade",
      onUpdate: "restrict",
    }),
  promotions: int("promotions").default(0).notNull(),
  views: int("views").default(0).notNull(),
});

export const phone_twitter_retweets = mysqlTable(
  "phone_twitter_retweets",
  {
    tweet_id: varchar("tweet_id", { length: 50 }).notNull(),
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_twitter_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      username: index("username").on(table.username),
    };
  }
);

export const phone_twitter_tweets = mysqlTable(
  "phone_twitter_tweets",
  {
    id: varchar("id", { length: 10 }).notNull(),
    username: varchar("username", { length: 20 })
      .notNull()
      .references(() => phone_twitter_accounts.username, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    content: varchar("content", { length: 280 }),
    attachments: text("attachments"),
    reply_to: varchar("reply_to", { length: 50 }),
    like_count: int("like_count").default(0),
    reply_count: int("reply_count").default(0),
    retweet_count: int("retweet_count").default(0),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      username: index("username").on(table.username),
    };
  }
);

export const phone_voice_memos_recordings = mysqlTable(
  "phone_voice_memos_recordings",
  {
    id: varchar("id", { length: 10 }).notNull(),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    file_name: varchar("file_name", { length: 50 }).notNull(),
    file_url: varchar("file_url", { length: 500 }).notNull(),
    file_length: int("file_length").notNull(),
    created_at: timestamp("created_at", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      phone_number: index("phone_number").on(table.phone_number),
    };
  }
);

export const phone_wallet_transactions = mysqlTable(
  "phone_wallet_transactions",
  {
    id: int("id").autoincrement().notNull(),
    phone_number: varchar("phone_number", { length: 15 })
      .notNull()
      .references(() => phone_phones.phone_number, {
        onDelete: "cascade",
        onUpdate: "cascade",
      }),
    amount: int("amount").notNull(),
    company: varchar("company", { length: 50 }).notNull(),
    logo: varchar("logo", { length: 200 }),
    timestamp: timestamp("timestamp", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      phone_number: index("phone_number").on(table.phone_number),
    };
  }
);

export const phone_yellow_pages_posts = mysqlTable("phone_yellow_pages_posts", {
  id: varchar("id", { length: 10 }).notNull(),
  phone_number: varchar("phone_number", { length: 15 }).notNull(),
  title: varchar("title", { length: 50 }).notNull(),
  description: varchar("description", { length: 1000 }).notNull(),
  attachment: varchar("attachment", { length: 500 }),
  price: int("price"),
  timestamp: timestamp("timestamp", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const plane_datastorage = mysqlTable("plane_datastorage", {
  storageOwner: varchar("storageOwner", { length: 50 }).notNull(),
  storageData: longtext("storageData").notNull(),
});

export const playerskins = mysqlTable(
  "playerskins",
  {
    id: int("id").autoincrement().notNull(),
    citizenid: varchar("citizenid", { length: 255 }).notNull(),
    model: varchar("model", { length: 255 }).notNull(),
    skin: text("skin").notNull(),
    active: tinyint("active").default(1).notNull(),
  },
  (table) => {
    return {
      citizenid: index("citizenid").on(table.citizenid),
      active: index("active").on(table.active),
    };
  }
);

export const player_multijob = mysqlTable("player_multijob", {
  id: int("id").autoincrement().notNull(),
  identifier: varchar("identifier", { length: 46 }),
  job: varchar("job", { length: 100 }).notNull(),
  grade: int("grade").notNull(),
  removeable: tinyint("removeable").notNull(),
});

export const player_outfits = mysqlTable(
  "player_outfits",
  {
    id: int("id").autoincrement().notNull(),
    citizenid: varchar("citizenid", { length: 50 }),
    outfitname: varchar("outfitname", { length: 50 }).default("'0'").notNull(),
    model: varchar("model", { length: 50 }),
    props: varchar("props", { length: 1000 }),
    components: varchar("components", { length: 1500 }),
  },
  (table) => {
    return {
      citizenid: index("citizenid").on(table.citizenid),
      citizenid_outfitname_model: unique("citizenid_outfitname_model").on(
        table.citizenid,
        table.outfitname,
        table.model
      ),
    };
  }
);

export const player_outfit_codes = mysqlTable(
  "player_outfit_codes",
  {
    id: int("id").autoincrement().notNull(),
    outfitid: int("outfitid").notNull(),
    code: varchar("code", { length: 50 }).default("''").notNull(),
  },
  (table) => {
    return {
      FK_player_outfit_codes_player_outfits: index(
        "FK_player_outfit_codes_player_outfits"
      ).on(table.outfitid),
    };
  }
);

export const playlists = mysqlTable("playlists", {
  id: int("id").autoincrement().notNull(),
  label: varchar("label", { length: 60 }),
});

export const playlist_songs = mysqlTable("playlist_songs", {
  id: int("id").autoincrement().notNull(),
  playlist: int("playlist"),
  link: varchar("link", { length: 500 }),
});

export const playtime = mysqlTable("playtime", {
  identifier: varchar("identifier", { length: 50 }).notNull(),
  playtime: int("playtime").default(0).notNull(),
});

export const protection = mysqlTable(
  "protection",
  {
    id: int("id").autoincrement().notNull(),
    name: varchar("name", { length: 50 }),
    identifiers: longtext("identifiers"),
    tokens: longtext("tokens"),
    reason: varchar("reason", { length: 50 }),
  },
  (table) => {
    return {
      id: index("id").on(table.id),
    };
  }
);

export const queue = mysqlTable("queue", {
  id: int("id").autoincrement().notNull(),
  identifier: varchar("identifier", { length: 46 }),
  name: varchar("name", { length: 255 }),
  points: bigint("points", { mode: "number" }).notNull(),
  category: varchar("category", { length: 255 }),
});

export const radiocar_music = mysqlTable("radiocar_music", {
  id: int("id").autoincrement().notNull(),
  label: varchar("label", { length: 64 }).notNull(),
  url: varchar("url", { length: 256 }).notNull(),
  plate: varchar("plate", { length: 32 }).notNull(),
});

export const radiocar_owned = mysqlTable("radiocar_owned", {
  id: int("id").autoincrement().notNull(),
  spz: varchar("spz", { length: 32 }).notNull(),
});

export const radiocar_playlist = mysqlTable("radiocar_playlist", {
  id: int("id").autoincrement().notNull(),
  playlist: text("playlist").notNull(),
  plate: varchar("plate", { length: 32 }).notNull(),
});

export const rcore_prison = mysqlTable(
  "rcore_prison",
  {
    prisoner_id: int("prisoner_id").autoincrement().notNull(),
    owner: varchar("owner", { length: 46 }),
    jail_time: datetime("jail_time", { mode: "string" }),
    data: longtext("data"),
    createdAt: timestamp("createdAt", { mode: "string" }).default(
      "current_timestamp()"
    ),
    updatedAt: timestamp("updatedAt", { mode: "string" }).default(
      "current_timestamp()"
    ),
  },
  (table) => {
    return {
      owner: index("owner").on(table.owner),
    };
  }
);

export const rcore_prison_accounts = mysqlTable(
  "rcore_prison_accounts",
  {
    account_id: int("account_id").autoincrement().notNull(),
    owner: varchar("owner", { length: 46 }),
    balance: bigint("balance", { mode: "number" }),
    giftstate: tinyint("giftstate").default(0),
    createdAt: timestamp("createdAt", { mode: "string" }).default(
      "current_timestamp()"
    ),
    updatedAt: timestamp("updatedAt", { mode: "string" })
      .default("current_timestamp()")
      .notNull(),
  },
  (table) => {
    return {
      owner: index("owner").on(table.owner),
    };
  }
);

export const rcore_prison_contacts = mysqlTable("rcore_prison_contacts", {
  account_id: int("account_id").references(
    () => rcore_prison_accounts.account_id,
    { onDelete: "restrict", onUpdate: "restrict" }
  ),
  owner: varchar("owner", { length: 46 }),
  name: longtext("name"),
  targetowner: varchar("targetowner", { length: 50 }),
});

export const rcore_prison_stash = mysqlTable("rcore_prison_stash", {
  owner: varchar("owner", { length: 46 }).notNull(),
  stash: longtext("stash").notNull(),
});

export const rcore_prison_transactions = mysqlTable(
  "rcore_prison_transactions",
  {
    transaction_id: int("transaction_id").autoincrement().notNull(),
    account_id: int("account_id"),
    transaction_name: varchar("transaction_name", { length: 255 }),
    charid: int("charid"),
    isRead: tinyint("isRead").default(0).notNull(),
    message: varchar("message", { length: 255 }),
    createdAt: timestamp("createdAt", { mode: "string" }).default(
      "current_timestamp()"
    ),
    updatedAt: timestamp("updatedAt", { mode: "string" }).default(
      "current_timestamp()"
    ),
  },
  (table) => {
    return {
      account_id: index("account_id").on(table.account_id),
    };
  }
);

export const rented_vehicles = mysqlTable("rented_vehicles", {
  vehicle: varchar("vehicle", { length: 60 }).notNull(),
  plate: varchar("plate", { length: 12 }).notNull(),
  player_name: varchar("player_name", { length: 255 }).notNull(),
  base_price: int("base_price").notNull(),
  rent_price: int("rent_price").notNull(),
  owner: varchar("owner", { length: 46 }),
});

export const society_moneywash = mysqlTable("society_moneywash", {
  id: int("id").autoincrement().notNull(),
  identifier: varchar("identifier", { length: 46 }),
  society: varchar("society", { length: 60 }).notNull(),
  amount: int("amount").notNull(),
});

export const sprays = mysqlTable("sprays", {
  id: int("id").autoincrement().notNull(),
  identifier: varchar("identifier", { length: 46 }),
  // Warning: Can't parse float(8,4) from database
  // float(8,4)Type: float(8,4)("x").notNull(),
  // Warning: Can't parse float(8,4) from database
  // float(8,4)Type: float(8,4)("y").notNull(),
  // Warning: Can't parse float(8,4) from database
  // float(8,4)Type: float(8,4)("z").notNull(),
  // Warning: Can't parse float(8,4) from database
  // float(8,4)Type: float(8,4)("origX").notNull(),
  // Warning: Can't parse float(8,4) from database
  // float(8,4)Type: float(8,4)("origY").notNull(),
  // Warning: Can't parse float(8,4) from database
  // float(8,4)Type: float(8,4)("origZ").notNull(),
  // Warning: Can't parse float(8,4) from database
  // float(8,4)Type: float(8,4)("rx").notNull(),
  // Warning: Can't parse float(8,4) from database
  // float(8,4)Type: float(8,4)("ry").notNull(),
  // Warning: Can't parse float(8,4) from database
  // float(8,4)Type: float(8,4)("rz").notNull(),
  // Warning: Can't parse float(8,4) from database
  // float(8,4)Type: float(8,4)("scale").notNull(),
  text: varchar("text", { length: 32 }),
  image: varchar("image", { length: 64 }),
  imageDict: varchar("imageDict", { length: 64 }),
  font: varchar("font", { length: 32 }),
  color: varchar("color", { length: 32 }),
  interior: int("interior").notNull(),
  created_at: timestamp("created_at", { mode: "string" })
    .default("current_timestamp()")
    .notNull(),
});

export const tebex = mysqlTable(
  "tebex",
  {
    id: int("id").autoincrement().notNull(),
    transaction_id: text("transaction_id"),
    fivem_id: text("fivem_id"),
    data: longtext("data"),
    claimed: int("claimed"),
    package_id: text("package_id"),
    date_received: text("date_received"),
    date_claimed: text("date_claimed"),
  },
  (table) => {
    return {
      id: unique("id").on(table.id),
    };
  }
);

export const trappin_gunplug = mysqlTable(
  "trappin_gunplug",
  {
    id: varchar("id", { length: 50 }).default("''").notNull(),
    ammo: int("ammo").default(10000),
    credits: int("credits").default(800),
    date: bigint("date", { mode: "number" }),
  },
  (table) => {
    return {
      id: unique("id").on(table.id),
    };
  }
);

export const trappin_pets = mysqlTable("trappin_pets", {
  identifier: varchar("identifier", { length: 46 }),
  name: varchar("name", { length: 128 }).notNull(),
  model: varchar("model", { length: 128 }).notNull(),
  type: varchar("type", { length: 128 }).notNull(),
  dead: varchar("dead", { length: 128 }).notNull(),
  skin: int("skin").notNull(),
  collar: int("collar").notNull(),
  thirst: int("thirst").notNull(),
  hunger: int("hunger").notNull(),
  hp: int("hp").notNull(),
});

export const users = mysqlTable(
  "users",
  {
    identifier: varchar("identifier", { length: 46 }).notNull(),
    discord: varchar("discord", { length: 50 }),
    accounts: longtext("accounts"),
    group: varchar("group", { length: 50 }).default("'user'"),
    inventory: longtext("inventory"),
    job: varchar("job", { length: 20 }).default("'unemployed'"),
    job_grade: int("job_grade").default(0),
    loadout: longtext("loadout"),
    metadata: longtext("metadata"),
    position: longtext("position"),
    firstname: varchar("firstname", { length: 16 }),
    lastname: varchar("lastname", { length: 16 }),
    dateofbirth: varchar("dateofbirth", { length: 10 }),
    sex: varchar("sex", { length: 1 }),
    height: int("height"),
    skin: longtext("skin"),
    status: longtext("status"),
    is_dead: tinyint("is_dead").default(0).notNull(),
    deaths: int("deaths").default(0).notNull(),
    id: int("id").autoincrement().notNull(),
    disabled: tinyint("disabled").default(0),
    last_property: varchar("last_property", { length: 255 }),
    created_at: timestamp("created_at", { mode: "string" }).default(
      "current_timestamp()"
    ),
    last_seen: timestamp("last_seen", { mode: "string" }),
    phone_number: varchar("phone_number", { length: 20 }),
    pincode: int("pincode"),
    pregnant: int("pregnant"),
    gang: longtext("gang"),
    gang_name: varchar("gang_name", { length: 50 }),
    sits: int("sits").default(0),
    drugssold: int("drugssold").default(0),
    iban: varchar("iban", { length: 255 }),
    rocksmined: int("rocksmined").default(0),
    playtime: int("playtime").default(0),
    mdt_image: mediumtext("mdt_image"),
    mdt_height: int("mdt_height"),
    mdt_description: mediumtext("mdt_description"),
    society_permissions: longtext("society_permissions"),
  },
  (table) => {
    return {
      id: unique("id").on(table.id),
    };
  }
);

export const user_licenses = mysqlTable("user_licenses", {
  id: int("id").autoincrement().notNull(),
  type: varchar("type", { length: 60 }).notNull(),
  owner: varchar("owner", { length: 46 }),
});

export const vehicles = mysqlTable("vehicles", {
  name: varchar("name", { length: 60 }).notNull(),
  model: varchar("model", { length: 60 }).notNull(),
  price: int("price").notNull(),
  category: varchar("category", { length: 60 }),
});

export const vehicle_categories = mysqlTable("vehicle_categories", {
  name: varchar("name", { length: 60 }).notNull(),
  label: varchar("label", { length: 60 }).notNull(),
});

export const vehicle_sold = mysqlTable("vehicle_sold", {
  id: int("id").autoincrement().notNull(),
  client: varchar("client", { length: 50 }).notNull(),
  model: varchar("model", { length: 50 }).notNull(),
  plate: varchar("plate", { length: 50 }).notNull(),
  soldby: varchar("soldby", { length: 50 }).notNull(),
  date: varchar("date", { length: 50 }).notNull(),
});

export const wasabi_bans = mysqlTable("wasabi_bans", {
  author: varchar("author", { length: 40 }),
  player: varchar("player", { length: 40 }),
  license: varchar("license", { length: 50 }),
  ip: varchar("ip", { length: 25 }),
  discord: varchar("discord", { length: 40 }),
  reason: varchar("reason", { length: 100 }),
  ban_time: int("ban_time").notNull(),
  exp_time: int("exp_time").notNull(),
});

export const wasabi_evidence = mysqlTable("wasabi_evidence", {
  id: int("id").autoincrement().notNull(),
  data: longtext("data").notNull(),
});

export const wasabi_fingerprints = mysqlTable("wasabi_fingerprints", {
  identifier: varchar("identifier", { length: 46 }).notNull(),
});

export const wasabi_manual_prints = mysqlTable("wasabi_manual_prints", {
  identifier: varchar("identifier", { length: 46 }).notNull(),
  firstname: varchar("firstname", { length: 50 }).notNull(),
  lastname: varchar("lastname", { length: 50 }).notNull(),
});

export const wasabi_multijob = mysqlTable("wasabi_multijob", {
  identifier: varchar("identifier", { length: 46 }),
  job: varchar("job", { length: 100 }).notNull(),
  grade: int("grade").notNull(),
});

export const weaponrepairs = mysqlTable("weaponrepairs", {
  identifier: varchar("identifier", { length: 46 }),
  repairs: int("repairs").default(10),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  lastReset: date("lastReset", { mode: "string" }),
});

export const whitelist = mysqlTable("whitelist", {
  identifier: varchar("identifier", { length: 46 }).notNull(),
});

export const zm_eroticmenucheck = mysqlTable("zm_eroticmenucheck", {
  citizenid: varchar("citizenid", { length: 255 }).notNull(),
  license: varchar("license", { length: 255 }),
  checked: tinyint("checked").default(1),
});

export const zm_lovemenucheck = mysqlTable("zm_lovemenucheck", {
  citizenid: varchar("citizenid", { length: 255 }).notNull(),
  license: varchar("license", { length: 255 }),
  checked: tinyint("checked").default(1),
});
