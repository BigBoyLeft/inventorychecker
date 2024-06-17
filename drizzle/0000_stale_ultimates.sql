-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `17movtvs` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`type` text DEFAULT 'NULL',
	`data` varchar(1000) DEFAULT 'NULL',
	`active` tinyint DEFAULT 1,
	`owner` varchar(46) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `addon_account` (
	`name` varchar(60) NOT NULL,
	`label` varchar(100) NOT NULL,
	`shared` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `addon_account_data` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`account_name` varchar(100) DEFAULT 'NULL',
	`money` int(11) NOT NULL,
	`owner` varchar(46) DEFAULT 'NULL',
	CONSTRAINT `index_addon_account_data_account_name_owner` UNIQUE(`account_name`,`owner`)
);
--> statement-breakpoint
CREATE TABLE `addon_inventory` (
	`name` varchar(60) NOT NULL,
	`label` varchar(100) NOT NULL,
	`shared` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `addon_inventory_items` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`inventory_name` varchar(100) NOT NULL,
	`name` varchar(100) NOT NULL,
	`count` int(11) NOT NULL,
	`owner` varchar(46) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `admin_bans` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`staff` varchar(50) DEFAULT 'NULL',
	`player` varchar(50) DEFAULT 'NULL',
	`reason` varchar(50) DEFAULT 'NULL',
	`identifiers` longtext DEFAULT 'NULL',
	`tokens` longtext DEFAULT 'NULL',
	`ban_time` int(11) DEFAULT 'NULL',
	`exp_time` int(11) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `ak47_cannabiscafe` (
	`id` int(11) NOT NULL,
	`pos` varchar(255) NOT NULL DEFAULT '''',
	`stage` int(11) NOT NULL DEFAULT 0,
	`growing` int(11) NOT NULL DEFAULT 0,
	`time` int(11) NOT NULL DEFAULT 0,
	`fertilizer` int(11) NOT NULL DEFAULT 0,
	`spray` int(11) NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `ak47_cannabiscafe_bong` (
	`id` int(11) DEFAULT 'NULL',
	`stock` int(11) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `ak47_cannabis_cafe_shop_items` (
	`name` varchar(50) NOT NULL,
	`label` varchar(50) DEFAULT 'NULL',
	`price` varchar(50) DEFAULT 'NULL',
	`stock` int(11) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `ak47_chickfila` (
	`stock` longtext DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `ak47_chicknfries` (
	`stock` longtext DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `ak47_dominos` (
	`stock` longtext DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `ak47_donutshop` (
	`stock` longtext DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `ak47_hookahlounge` (
	`id` int(11) NOT NULL,
	`water` int(11) DEFAULT 100,
	`hose` int(11) DEFAULT 100,
	`foil` int(11) DEFAULT 100,
	`coals` int(11) DEFAULT 100,
	`t_level` int(11) DEFAULT 100,
	`tobaco` longtext DEFAULT ''Social Smoke Absolute Zero'',
	`price` int(11) DEFAULT 100,
	`usable` int(11) DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE `ak47_mcdonalds` (
	`stock` longtext DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `bandit_babys` (
	`identifier` varchar(46) DEFAULT 'NULL',
	`name` varchar(128) NOT NULL,
	`data` varchar(128) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `bandit_pets` (
	`identifier` varchar(46) DEFAULT 'NULL',
	`name` varchar(128) NOT NULL,
	`model` varchar(128) NOT NULL,
	`type` varchar(128) NOT NULL,
	`dead` varchar(128) NOT NULL,
	`skin` int(128) NOT NULL,
	`collar` int(128) NOT NULL,
	`thirst` int(128) NOT NULL,
	`hunger` int(128) NOT NULL,
	`hp` int(128) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `banking` (
	`identifier` varchar(46) DEFAULT 'NULL',
	`type` varchar(50) DEFAULT 'NULL',
	`amount` int(64) DEFAULT 'NULL',
	`time` bigint(20) DEFAULT 'NULL',
	`ID` int(11) AUTO_INCREMENT NOT NULL,
	`balance` int(11) DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `basketball_rpg` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`identifier` varchar(46) DEFAULT 'NULL',
	`score` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `billing` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`identifier` varchar(46) DEFAULT 'NULL',
	`sender` varchar(60) NOT NULL,
	`target_type` varchar(50) NOT NULL,
	`target` varchar(40) NOT NULL,
	`label` varchar(255) NOT NULL,
	`amount` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `boombox_songs` (
	`identifier` varchar(46) DEFAULT 'NULL',
	`label` varchar(30) NOT NULL,
	`link` longtext NOT NULL
);
--> statement-breakpoint
CREATE TABLE `business` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`shop` varchar(50) DEFAULT 'NULL',
	`items` longtext NOT NULL
);
--> statement-breakpoint
CREATE TABLE `business_moneywash` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`job` varchar(50) NOT NULL DEFAULT ''0'',
	`tax` int(11) DEFAULT 15,
	`collectedmoney` int(11) DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `bwh_bans` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`receiver` text NOT NULL,
	`sender` varchar(60) NOT NULL,
	`length` datetime DEFAULT 'NULL',
	`reason` text NOT NULL,
	`unbanned` tinyint NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `bwh_identifiers` (
	`steam` varchar(60) NOT NULL,
	`license` varchar(60) NOT NULL,
	`ip` varchar(60) NOT NULL,
	`name` varchar(128) NOT NULL,
	`xbl` varchar(60) DEFAULT 'NULL',
	`live` varchar(60) DEFAULT 'NULL',
	`discord` varchar(60) DEFAULT 'NULL',
	`fivem` varchar(60) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `bwh_warnings` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`receiver` text NOT NULL,
	`sender` varchar(60) NOT NULL,
	`message` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `cardealer_vehicles` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`vehicle` varchar(255) NOT NULL,
	`price` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `casino_cache` (
	`ID` int(11) AUTO_INCREMENT NOT NULL,
	`Settings` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `casino_players` (
	`ID` int(11) AUTO_INCREMENT NOT NULL,
	`identifier` varchar(128) NOT NULL,
	`properties` longtext NOT NULL
);
--> statement-breakpoint
CREATE TABLE `casino_timestamp` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`usedamount` int(11) NOT NULL DEFAULT 0,
	`csn` longtext DEFAULT 'NULL',
	`time` int(11) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `cd_dispatch` (
	`identifier` varchar(50) DEFAULT 'NULL',
	`callsign` varchar(100) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `claimedpackages` (
	`tebexId` varchar(50) DEFAULT 'NULL',
	`timestamp` timestamp DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `comserv` (
	`identifier` varchar(46) DEFAULT 'NULL',
	`name` varchar(50) DEFAULT 'NULL',
	`actions` int(11) DEFAULT 'NULL',
	`reason` varchar(50) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `cs_carplay` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`identifier` varchar(46) DEFAULT 'NULL',
	`musicData` varchar(1500) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `datastore` (
	`name` varchar(60) NOT NULL,
	`label` varchar(100) NOT NULL,
	`shared` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `datastore_data` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(60) NOT NULL,
	`owner` varchar(46) DEFAULT 'NULL',
	`data` longtext DEFAULT 'NULL',
	CONSTRAINT `index_datastore_data_name_owner` UNIQUE(`name`,`owner`)
);
--> statement-breakpoint
CREATE TABLE `drunk_stats` (
	`identifier` varchar(46) NOT NULL,
	`drunk_level` float NOT NULL DEFAULT 0,
	`headache_level` float NOT NULL DEFAULT 0,
	`toughness` int(11) NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `dusa_mechanic` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`m_id` varchar(50) DEFAULT 'NULL',
	`mechanic` varchar(255) DEFAULT 'NULL',
	`boss` varchar(100) DEFAULT 'NULL',
	`employees` longtext DEFAULT 'NULL',
	`ranks` longtext DEFAULT 'NULL',
	`job` varchar(30) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `dusa_modifications` (
	`plate` varchar(128) NOT NULL,
	`stancer` longtext DEFAULT 'NULL',
	`tuning` longtext DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `dusa_pets` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`owner` varchar(60) DEFAULT 'NULL',
	`modelname` varchar(250) DEFAULT 'NULL',
	`health` tinyint NOT NULL DEFAULT 100,
	`illnesses` varchar(60) NOT NULL DEFAULT ''none'',
	`name` varchar(255) DEFAULT ''Pet'',
	`clothes` varchar(255) DEFAULT 'NULL',
	`type` varchar(10) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `fine_types` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`label` varchar(255) DEFAULT 'NULL',
	`amount` int(11) DEFAULT 'NULL',
	`category` int(11) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `frkn_pet` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`netID` int(11) DEFAULT 'NULL',
	`petHash` varchar(50) DEFAULT 'NULL',
	`petTexureID` int(11) DEFAULT 'NULL',
	`petLeash` varchar(50) DEFAULT 'NULL',
	`petLeashID` int(11) DEFAULT 'NULL',
	`frknHat` varchar(50) DEFAULT 'NULL',
	`frknLeash` varchar(50) DEFAULT 'NULL',
	`frknGlasses` varchar(50) DEFAULT 'NULL',
	`petOwner` varchar(50) DEFAULT 'NULL',
	`petGender` varchar(50) DEFAULT 'NULL',
	`petName` varchar(50) DEFAULT 'NULL',
	`petLabel` longtext DEFAULT 'NULL',
	`hungryDecrase` int(11) DEFAULT 'NULL',
	`petHungryLevel` int(11) DEFAULT 'NULL',
	`thirstDecrase` int(11) DEFAULT 'NULL',
	`isOutSide` tinyint DEFAULT 0,
	`petThirstLevel` int(11) DEFAULT 'NULL',
	`petEnergyLevel` int(11) DEFAULT 'NULL',
	`petHealthLevel` int(11) DEFAULT 'NULL',
	`petXP` int(11) DEFAULT 'NULL',
	`lastXP` int(11) DEFAULT 'NULL',
	`petLevel` int(11) DEFAULT 'NULL',
	`petAge` int(11) DEFAULT 'NULL',
	`petPosition` text DEFAULT 'NULL',
	`petIMG` longtext DEFAULT ''https://cdn.discordapp.com/attachments/942150634554163250/1091896194818658304/unkownpet.png'',
	`listOf` varchar(50) DEFAULT 'NULL',
	`isSelling` tinyint DEFAULT 0,
	`petSellingPrice` int(11) DEFAULT 'NULL',
	`petFace` varchar(50) DEFAULT 'NULL',
	CONSTRAINT `netID` UNIQUE(`netID`)
);
--> statement-breakpoint
CREATE TABLE `gangs` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(50) DEFAULT 'NULL',
	`label` varchar(50) DEFAULT 'NULL',
	`leader` int(11) DEFAULT 0,
	`turf_wins` int(11) DEFAULT 0,
	`hp_wins` int(11) DEFAULT 0,
	`inventory` longtext DEFAULT ''[]'',
	`kills` int(11) DEFAULT 0,
	`deaths` int(11) DEFAULT 0,
	`package_sells` int(11) DEFAULT 0,
	`rank_edits` int(11) DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `gangs_grades` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`label` varchar(50) DEFAULT 'NULL',
	`gang` varchar(50) DEFAULT 'NULL',
	`rank` int(11) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `gympass` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`identifier` varchar(500) NOT NULL,
	`gymid` int(11) NOT NULL,
	`gymtime` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `gymstats` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`identifier` varchar(500) NOT NULL,
	`stats` longtext NOT NULL
);
--> statement-breakpoint
CREATE TABLE `items` (
	`name` varchar(50) NOT NULL,
	`label` varchar(50) NOT NULL,
	`weight` int(11) NOT NULL DEFAULT 1,
	`rare` tinyint NOT NULL DEFAULT 0,
	`can_remove` tinyint NOT NULL DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE `jail` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`identifier` varchar(46) DEFAULT 'NULL',
	`reason` varchar(50) DEFAULT 'NULL',
	`time` int(11) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `jobs` (
	`name` varchar(50) NOT NULL,
	`label` varchar(50) DEFAULT 'NULL',
	`whitelisted` tinyint NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `job_grades` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`job_name` varchar(50) DEFAULT 'NULL',
	`grade` int(11) NOT NULL,
	`name` varchar(50) NOT NULL,
	`label` varchar(50) NOT NULL,
	`salary` int(11) NOT NULL,
	`skin_male` longtext NOT NULL,
	`skin_female` longtext NOT NULL
);
--> statement-breakpoint
CREATE TABLE `kq_tuning` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`plate` varchar(50) NOT NULL DEFAULT '''',
	`engine` varchar(50) NOT NULL DEFAULT '''',
	`tuned_by` varchar(50) DEFAULT 'NULL',
	`created_at` datetime NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `kq_tuningparts` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`storage` varchar(50) NOT NULL DEFAULT ''0'',
	`type` varchar(50) NOT NULL DEFAULT ''0'',
	`part` varchar(50) NOT NULL DEFAULT ''0'',
	`available_at` bigint(20) NOT NULL DEFAULT 0,
	`created_at` datetime NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `kub_truckingcontracts` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`citizenid` text NOT NULL,
	`playerid` int(11) DEFAULT 'NULL',
	`company` text DEFAULT 'NULL',
	`destinationcompany` text DEFAULT 'NULL',
	`vehiclemodel` text DEFAULT 'NULL',
	`goodstype` text DEFAULT 'NULL',
	`startlocationname` longtext DEFAULT 'NULL',
	`startcoords` text DEFAULT 'NULL',
	`destinationcoords` text DEFAULT 'NULL',
	`payout` int(11) DEFAULT 'NULL',
	`deposit` int(11) DEFAULT 'NULL',
	`xppayout` int(11) DEFAULT 'NULL',
	`logo` text DEFAULT 'NULL',
	`destinationlocationname` longtext DEFAULT 'NULL',
	`distance` text DEFAULT 'NULL',
	`status` enum('Not Started','Started','Vehicle Spawned','Goods picked up','Goods delivered','Completed','Canceled','Expired') DEFAULT ''Not Started'',
	`expirydate` text DEFAULT 'NULL',
	`donedate` text DEFAULT 'NULL',
	`adrlvl` tinyint DEFAULT 0,
	`longdistancelvl` tinyint DEFAULT 0,
	`fragilelvl` tinyint DEFAULT 0,
	`highvaluelvl` tinyint DEFAULT 0,
	`jitlvl` tinyint DEFAULT 0,
	`jobtype` enum('Quick','Freight','Convoy') DEFAULT 'NULL',
	`convoyName` varchar(50) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `kub_truckingplayervehicles` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`citizenid` text NOT NULL,
	`vehicleid` int(11) NOT NULL,
	`name` text DEFAULT 'NULL',
	`model` tinytext DEFAULT 'NULL',
	`price` int(11) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `kub_truckingprofile` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`citizenid` text NOT NULL,
	`accountname` text DEFAULT 'NULL',
	`xp` int(11) DEFAULT 0,
	`nextlevelxp` int(11) DEFAULT 'NULL',
	`previouslevelxp` int(11) DEFAULT 0,
	`level` int(2) DEFAULT 1,
	`skillpoints` tinyint DEFAULT 0,
	`rank` tinytext DEFAULT 'NULL',
	`totalpayout` int(11) DEFAULT 0,
	`totaldistance` decimal(20,2) DEFAULT '0.00',
	`profileurl` text DEFAULT '''',
	`adrlvl` int(1) DEFAULT 0,
	`longdistancelvl` int(1) DEFAULT 0,
	`highvaluelvl` int(1) DEFAULT 0,
	`fragilelvl` int(1) DEFAULT 0,
	`jitlvl` int(1) DEFAULT 0,
	`availablexp` int(1) DEFAULT 0,
	`jobscompleted` int(1) DEFAULT 0,
	`lastupdated` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`created` timestamp DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `kub_truckingvehicles` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` text DEFAULT 'NULL',
	`model` tinytext NOT NULL,
	`vehiclecondition` tinyint DEFAULT 0,
	`price` int(11) NOT NULL,
	`power` tinytext DEFAULT 'NULL',
	`engine` text DEFAULT 'NULL',
	`jobscompleted` int(11) NOT NULL,
	`image` text DEFAULT 'NULL',
	`isdeleted` tinyint NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `last_pregnant` (
	`identifier` varchar(46) NOT NULL,
	`pregnant_time` int(255) DEFAULT 'NULL',
	`pregnant` tinyint DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `licenses` (
	`type` varchar(60) NOT NULL,
	`label` varchar(60) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `loaf_current_property` (
	`identifier` varchar(46) NOT NULL,
	`propertyid` int(11) NOT NULL,
	`id` varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `loaf_furniture` (
	`identifier` varchar(46) NOT NULL,
	`object` varchar(100) NOT NULL,
	`amount` int(11) NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `loaf_invoices` (
	`id` varchar(15) NOT NULL,
	`issued` date DEFAULT 'curdate()',
	`biller` varchar(150) NOT NULL,
	`biller_name` varchar(150) NOT NULL,
	`billed` varchar(150) NOT NULL,
	`billed_name` varchar(150) NOT NULL,
	`owner` varchar(46) DEFAULT 'NULL',
	`due` date NOT NULL,
	`interest` int(11) NOT NULL DEFAULT 0,
	`late` int(11) NOT NULL DEFAULT 0,
	`amount` int(11) NOT NULL DEFAULT 0,
	`name` varchar(150) NOT NULL,
	`description` varchar(150) NOT NULL DEFAULT ''Unknown'',
	`company` varchar(50) DEFAULT 'NULL',
	`company_name` varchar(150) DEFAULT 'NULL',
	`signed` tinyint NOT NULL DEFAULT 0,
	`signature` longtext DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `loaf_keys` (
	`unique_id` varchar(15) NOT NULL,
	`key_id` varchar(255) NOT NULL,
	`identifier` varchar(46) DEFAULT 'NULL',
	`key_data` longtext DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `loaf_properties` (
	`owner` varchar(46) NOT NULL,
	`propertyid` int(11) NOT NULL,
	`shell` varchar(75) NOT NULL,
	`furniture` longtext DEFAULT 'NULL',
	`id` varchar(10) DEFAULT 'NULL',
	`rent` varchar(100) DEFAULT 'NULL',
	`last_entered` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `loaf_rent` (
	`rent_wallet` varchar(100) NOT NULL,
	`owner` varchar(46) DEFAULT 'NULL',
	`propertyid` int(11) NOT NULL,
	`balance` int(11) NOT NULL DEFAULT 0,
	`rent_due` int(11) NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `management_funds` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`job_name` varchar(50) NOT NULL,
	`amount` int(100) NOT NULL,
	`type` enum('boss','gang') NOT NULL DEFAULT ''boss'',
	CONSTRAINT `job_name` UNIQUE(`job_name`)
);
--> statement-breakpoint
CREATE TABLE `management_outfits` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`job_name` varchar(50) NOT NULL,
	`type` varchar(50) NOT NULL,
	`minrank` int(11) NOT NULL DEFAULT 0,
	`name` varchar(50) NOT NULL DEFAULT ''Cool Outfit'',
	`gender` varchar(50) NOT NULL DEFAULT ''male'',
	`model` varchar(50) DEFAULT 'NULL',
	`props` varchar(1000) DEFAULT 'NULL',
	`components` varchar(1500) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `mdt_announcements` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`author` varchar(255) NOT NULL,
	`title` varchar(255) NOT NULL,
	`content` mediumtext NOT NULL,
	`pinned` tinyint NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `mdt_bolos` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` mediumtext NOT NULL,
	`bolo_type` varchar(255) NOT NULL,
	`players` mediumtext NOT NULL DEFAULT ''[]'',
	`vehicles` mediumtext NOT NULL DEFAULT ''[]'',
	`status` tinyint NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `mdt_codes` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`code` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `mdt_evidences` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`images` mediumtext DEFAULT 'NULL',
	`players` mediumtext DEFAULT 'NULL',
	`description` mediumtext NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `mdt_fines` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`code` varchar(255) DEFAULT 'NULL',
	`name` mediumtext DEFAULT 'NULL',
	`amount` int(11) DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `mdt_incidents` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(255) DEFAULT 'NULL',
	`description` mediumtext DEFAULT 'NULL',
	`players` mediumtext DEFAULT 'NULL',
	`cops` mediumtext DEFAULT 'NULL',
	`vehicles` mediumtext DEFAULT 'NULL',
	`evidences` mediumtext DEFAULT 'NULL',
	`fines` mediumtext DEFAULT 'NULL',
	`jail` mediumtext DEFAULT 'NULL',
	`createdAt` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `mdt_jail` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` mediumtext DEFAULT 'NULL',
	`time` int(11) DEFAULT 'NULL',
	`createdAt` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `mdt_warrants` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`wtype` varchar(255) NOT NULL,
	`players` mediumtext NOT NULL DEFAULT ''[]'',
	`house` varchar(255) DEFAULT 'NULL',
	`reason` mediumtext NOT NULL,
	`description` mediumtext NOT NULL,
	`done` tinyint NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `multicharacter_slots` (
	`identifier` varchar(46) NOT NULL,
	`slots` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `multijob` (
	`identifier` varchar(46) DEFAULT 'NULL',
	`job` varchar(100) NOT NULL,
	`grade` int(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `myemergency_criminal_complaint` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`charge_from` varchar(90) NOT NULL DEFAULT '''',
	`perpetrator` varchar(90) NOT NULL DEFAULT '''',
	`perpetrator_description` text DEFAULT 'NULL',
	`state` int(11) NOT NULL DEFAULT 0,
	`act_of_crime` text DEFAULT 'NULL',
	`notes` text DEFAULT 'NULL',
	`createdby` varchar(90) NOT NULL DEFAULT '''',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT '''',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `myemergency_emergency_vehicle` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`name` varchar(90) NOT NULL DEFAULT '''',
	`short_name` varchar(90) NOT NULL DEFAULT '''',
	`vehicle` varchar(90) NOT NULL DEFAULT '''',
	`radio_status_id` int(11) NOT NULL DEFAULT -1,
	`createdby` varchar(90) NOT NULL DEFAULT '''',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT '''',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `myemergency_employees` (
	`id` varchar(90) NOT NULL,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`is_suspended` tinyint NOT NULL DEFAULT 0,
	`is_suspended_by` varchar(90) NOT NULL DEFAULT '''',
	`is_suspended_date` timestamp DEFAULT 'NULL',
	`is_control_centre` tinyint NOT NULL DEFAULT 0,
	`emegency_vehicle_id` int(11) NOT NULL DEFAULT -1,
	`radio_status_id` int(11) NOT NULL DEFAULT -1,
	`createdby` varchar(90) NOT NULL DEFAULT '''',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT '''',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`serviceno` varchar(90) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `myemergency_employees_entries` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`serviceno` varchar(90) DEFAULT 'NULL',
	`employee_id` varchar(90) NOT NULL DEFAULT '''',
	`content` text DEFAULT 'NULL',
	`type_of_entry` int(11) NOT NULL DEFAULT 0,
	`closed` tinyint NOT NULL DEFAULT 0,
	`createdby` varchar(90) NOT NULL DEFAULT '''',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT '''',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `myemergency_files` (
	`id` varchar(90) NOT NULL,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`player_id` varchar(90) NOT NULL DEFAULT '''',
	`name` varchar(90) NOT NULL DEFAULT '''',
	`alias` varchar(90) NOT NULL DEFAULT '''',
	`sex` int(11) NOT NULL DEFAULT 0,
	`phone` varchar(90) NOT NULL DEFAULT '''',
	`size` varchar(90) NOT NULL DEFAULT '''',
	`birth` varchar(90) NOT NULL DEFAULT '''',
	`eyecolor` varchar(90) NOT NULL DEFAULT '''',
	`haircolor` varchar(90) NOT NULL DEFAULT '''',
	`blood_type` varchar(10) NOT NULL DEFAULT ''A'',
	`weight` varchar(90) NOT NULL DEFAULT '''',
	`allergies` text DEFAULT 'NULL',
	`known_illnesses` text DEFAULT 'NULL',
	`blackend` tinyint NOT NULL DEFAULT 0,
	`closed` tinyint NOT NULL DEFAULT 0,
	`createdby` varchar(90) NOT NULL DEFAULT '''',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT '''',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`shared` tinyint NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `myemergency_files_entries` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`file_id` varchar(90) DEFAULT 'NULL',
	`file_entry_id` varchar(90) NOT NULL DEFAULT '''',
	`content` text DEFAULT 'NULL',
	`is_wanted` tinyint NOT NULL DEFAULT 0,
	`is_wanted_by` varchar(90) NOT NULL DEFAULT '''',
	`is_wanted_done` tinyint NOT NULL DEFAULT 0,
	`is_wanted_reason` text DEFAULT 'NULL',
	`type_of_entry` int(11) NOT NULL DEFAULT 0,
	`fine` int(11) NOT NULL DEFAULT 0,
	`detention_time` int(11) NOT NULL DEFAULT 0,
	`closed` tinyint NOT NULL DEFAULT 0,
	`shared` tinyint NOT NULL DEFAULT 0,
	`injury_head` tinyint NOT NULL DEFAULT 0,
	`injury_left_shoulder` tinyint NOT NULL DEFAULT 0,
	`injury_right_shoulder` tinyint NOT NULL DEFAULT 0,
	`injury_left_arm` tinyint NOT NULL DEFAULT 0,
	`injury_right_arm` tinyint NOT NULL DEFAULT 0,
	`injury_chest` tinyint NOT NULL DEFAULT 0,
	`injury_stomach` tinyint NOT NULL DEFAULT 0,
	`injury_left_leg` tinyint NOT NULL DEFAULT 0,
	`injury_right_leg` tinyint NOT NULL DEFAULT 0,
	`injury_left_hand` tinyint NOT NULL DEFAULT 0,
	`injury_right_hand` tinyint NOT NULL DEFAULT 0,
	`injury_left_foot` tinyint NOT NULL DEFAULT 0,
	`injury_right_foot` tinyint NOT NULL DEFAULT 0,
	`injury_summary` text DEFAULT 'NULL',
	`intensity_of_wounds` varchar(128) NOT NULL DEFAULT '''',
	`type_of_bleeding` varchar(128) NOT NULL DEFAULT '''',
	`treatment` varchar(128) NOT NULL DEFAULT '''',
	`needs_follow_up_treatment` tinyint NOT NULL DEFAULT 0,
	`createdby` varchar(90) NOT NULL DEFAULT '''',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT '''',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `myemergency_files_licences` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`file_id` varchar(90) NOT NULL,
	`license_id` int(11) NOT NULL,
	`createdby` varchar(90) NOT NULL DEFAULT '''',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT '''',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	CONSTRAINT `id_UNIQUE` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `myemergency_investigations` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`name` varchar(90) NOT NULL DEFAULT '''',
	`reason` text DEFAULT 'NULL',
	`closed` tinyint NOT NULL DEFAULT 0,
	`createdby` varchar(90) NOT NULL DEFAULT '''',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT '''',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `myemergency_investigations_entries` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`investigation_id` int(11) NOT NULL DEFAULT 0,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`content` text DEFAULT 'NULL',
	`is_important_entry` tinyint NOT NULL DEFAULT 0,
	`createdby` varchar(90) NOT NULL DEFAULT ''0'',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT ''0'',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `myemergency_law_books` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`name` varchar(90) NOT NULL DEFAULT '''',
	`short_name` varchar(90) NOT NULL DEFAULT '''',
	`createdby` varchar(90) NOT NULL DEFAULT '''',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT '''',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `myemergency_law_book_laws` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`lawbook_id` int(11) NOT NULL DEFAULT 0,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`crime` varchar(90) NOT NULL DEFAULT '''',
	`paragraph` varchar(90) NOT NULL DEFAULT '''',
	`minimum_penalty` int(11) NOT NULL DEFAULT 0,
	`detention_time` int(11) NOT NULL DEFAULT 0,
	`others` varchar(128) NOT NULL DEFAULT '''',
	`createdby` varchar(90) NOT NULL DEFAULT '''',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT '''',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `myemergency_licenses` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`string_key` varchar(60) DEFAULT 'NULL',
	`name` varchar(90) NOT NULL DEFAULT '''',
	`createdby` varchar(90) NOT NULL DEFAULT '''',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT '''',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `myemergency_mission_reports` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`name` varchar(90) NOT NULL DEFAULT '''',
	`mission_date` varchar(90) NOT NULL DEFAULT '''',
	`mission_location` varchar(90) NOT NULL DEFAULT '''',
	`involved_forces` varchar(90) NOT NULL DEFAULT '''',
	`report` text DEFAULT 'NULL',
	`createdby` varchar(90) NOT NULL DEFAULT '''',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT '''',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `myemergency_possible_rights` (
	`fromsystem` varchar(10) NOT NULL DEFAULT '''',
	`right_key` varchar(90) NOT NULL DEFAULT '''',
	`sortorder` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `myemergency_radio_state` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`name` varchar(90) NOT NULL DEFAULT '''',
	`short_name` varchar(90) NOT NULL DEFAULT '''',
	`color` varchar(90) NOT NULL DEFAULT '''',
	`createdby` varchar(90) NOT NULL DEFAULT '''',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT '''',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `myemergency_reg_vehicle` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`plate` varchar(90) NOT NULL DEFAULT '''',
	`owner` varchar(90) DEFAULT 'NULL',
	`veh_type` varchar(90) NOT NULL DEFAULT '''',
	`mot` varchar(90) NOT NULL DEFAULT '''',
	`veh_model` varchar(90) NOT NULL DEFAULT '''',
	`others` varchar(512) NOT NULL DEFAULT '''',
	`is_wanted` tinyint NOT NULL DEFAULT 0,
	`is_wanted_reason` varchar(512) NOT NULL DEFAULT '''',
	`color` varchar(90) NOT NULL DEFAULT '''',
	`createdby` varchar(90) NOT NULL DEFAULT '''',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT '''',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `myemergency_reg_weapons` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`serialno` varchar(128) NOT NULL DEFAULT '''',
	`owner` varchar(90) DEFAULT 'NULL',
	`weapontype` varchar(128) NOT NULL DEFAULT '''',
	`weaponmodel` varchar(128) NOT NULL DEFAULT '''',
	`others` text DEFAULT 'NULL',
	`is_wanted` tinyint NOT NULL DEFAULT 0,
	`is_wanted_reason` varchar(512) NOT NULL DEFAULT '''',
	`createdby` varchar(90) NOT NULL DEFAULT '''',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT '''',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `myemergency_rights` (
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`rank_id` int(11) NOT NULL DEFAULT -1,
	`rights_key` varchar(90) NOT NULL DEFAULT '''',
	`active` tinyint NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `myemergency_trainings` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`name` varchar(90) NOT NULL DEFAULT '''',
	`short_name` varchar(90) NOT NULL DEFAULT '''',
	`content` text DEFAULT 'NULL',
	`allow_self_entry` tinyint NOT NULL DEFAULT 0,
	`min_rank_id` int(11) NOT NULL DEFAULT 0,
	`trainee` varchar(90) NOT NULL DEFAULT '''',
	`createdby` varchar(90) NOT NULL DEFAULT '''',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT '''',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `myemergency_trainings_employees` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`training_id` int(11) NOT NULL,
	`employee_id` varchar(90) NOT NULL,
	`fromsystem` varchar(10) NOT NULL DEFAULT ''police'',
	`passed` int(11) NOT NULL DEFAULT -1,
	`createdby` varchar(90) NOT NULL DEFAULT ''0'',
	`createddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	`changedby` varchar(90) NOT NULL DEFAULT ''0'',
	`changeddate` timestamp NOT NULL DEFAULT 'current_timestamp()',
	CONSTRAINT `id_UNIQUE` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `nass_bossmenu_graphdata` (
	`society` varchar(50) DEFAULT 'NULL',
	`data` longtext DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `nass_bossmenu_transactions` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`society` varchar(50) DEFAULT 'NULL',
	`reason` varchar(50) DEFAULT 'NULL',
	`date` timestamp DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `okokbanking_societies` (
	`society` varchar(255) DEFAULT 'NULL',
	`society_name` varchar(255) DEFAULT 'NULL',
	`value` int(50) DEFAULT 'NULL',
	`iban` varchar(255) NOT NULL,
	`is_withdrawing` int(1) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `okokbanking_transactions` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`receiver_identifier` varchar(255) NOT NULL,
	`receiver_name` varchar(255) NOT NULL,
	`sender_identifier` varchar(255) NOT NULL,
	`sender_name` varchar(255) NOT NULL,
	`date` varchar(255) NOT NULL,
	`value` int(50) NOT NULL,
	`type` varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `okokbilling` (
	`id` int(50) AUTO_INCREMENT NOT NULL,
	`receiver_identifier` varchar(255) NOT NULL,
	`receiver_name` varchar(255) NOT NULL,
	`author_identifier` varchar(255) NOT NULL,
	`author_name` varchar(255) DEFAULT 'NULL',
	`society` varchar(255) NOT NULL,
	`society_name` varchar(255) NOT NULL,
	`item` varchar(255) NOT NULL,
	`invoice_value` int(50) NOT NULL,
	`status` varchar(50) NOT NULL,
	`notes` varchar(255) DEFAULT '' '',
	`sent_date` varchar(255) NOT NULL,
	`limit_pay_date` varchar(255) DEFAULT 'NULL',
	`fees_amount` int(50) DEFAULT 0,
	`paid_date` varchar(255) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `ot_skills` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`identifier` varchar(46) DEFAULT 'NULL',
	`stamina` longtext DEFAULT ''{"statlevel":0,"xp":0,"level":1}'',
	`strength` longtext DEFAULT ''{"statlevel":0,"xp":0,"level":1}'',
	`driving` longtext DEFAULT ''{"statlevel":0,"xp":0,"level":1}'',
	`shooting` longtext DEFAULT ''{"statlevel":0,"xp":0,"level":1}'',
	`diving` longtext DEFAULT ''{"statlevel":0,"xp":0,"level":1}'',
	`drugs` longtext DEFAULT ''{"statlevel":0,"xp":0,"level":1}'',
	`crafting` longtext DEFAULT ''{"statlevel":0,"xp":0,"level":1}'',
	`gunsmithing` longtext DEFAULT ''{"statlevel":0,"xp":0,"level":1}'',
	`chemistry` longtext DEFAULT ''{"statlevel":0,"xp":0,"level":1}'',
	`woodcutting` longtext DEFAULT ''{"statlevel":0,"xp":0,"level":1}'',
	`mixology` longtext DEFAULT ''{"statlevel":0,"xp":0,"level":1}'',
	`cooking` longtext DEFAULT ''{"statlevel":0,"xp":0,"level":1}'',
	`condition` longtext DEFAULT ''{"level":"1","xp":"0","statlevel":"0"}'',
	`gunsmith` longtext DEFAULT ''{"xp":"0","statlevel":"0","level":"1"}''
);
--> statement-breakpoint
CREATE TABLE `outfits` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`identifier` varchar(46) DEFAULT 'NULL',
	`name` longtext DEFAULT 'NULL',
	`ped` longtext DEFAULT 'NULL',
	`components` longtext DEFAULT 'NULL',
	`props` longtext DEFAULT 'NULL',
	CONSTRAINT `id_UNIQUE` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `owned_gyms` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`identifier` varchar(500) NOT NULL,
	`gymid` int(11) NOT NULL,
	`gymprice` int(11) NOT NULL,
	`gymbalance` int(11) NOT NULL,
	`gymvisitorsdata` longtext NOT NULL,
	`gymclosed` tinyint NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `owned_vehicles` (
	`owner` varchar(46) DEFAULT 'NULL',
	`plate` varchar(12) NOT NULL,
	`vehicle` longtext DEFAULT 'NULL',
	`type` varchar(20) NOT NULL DEFAULT ''car'',
	`job` varchar(20) DEFAULT '''',
	`parking` varchar(60) DEFAULT 'NULL',
	`pound` varchar(60) DEFAULT 'NULL',
	`glovebox` longtext DEFAULT 'NULL',
	`trunk` longtext DEFAULT 'NULL',
	`damages` longtext DEFAULT 'NULL',
	`garage` varchar(50) NOT NULL DEFAULT ''square'',
	`stored` tinyint NOT NULL DEFAULT 1,
	`carseller` int(11) DEFAULT 0,
	`mdt_image` mediumtext DEFAULT 'NULL',
	`mdt_description` mediumtext DEFAULT 'NULL',
	`fitment` longtext DEFAULT 'NULL',
	`tuning` longtext DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `ox_doorlock` (
	`id` int(11) unsigned AUTO_INCREMENT NOT NULL,
	`name` varchar(50) NOT NULL,
	`data` longtext NOT NULL
);
--> statement-breakpoint
CREATE TABLE `ox_inventory` (
	`owner` varchar(46) DEFAULT 'NULL',
	`name` varchar(100) NOT NULL,
	`data` longtext DEFAULT 'NULL',
	`lastupdated` timestamp DEFAULT 'current_timestamp()',
	CONSTRAINT `owner` UNIQUE(`owner`,`name`)
);
--> statement-breakpoint
CREATE TABLE `phone_backups` (
	`id` varchar(100) NOT NULL,
	`phone_number` varchar(15) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_clock_alarms` (
	`id` varchar(10) NOT NULL,
	`phone_number` varchar(15) NOT NULL,
	`hours` int(2) NOT NULL DEFAULT 0,
	`minutes` int(2) NOT NULL DEFAULT 0,
	`label` varchar(50) DEFAULT 'NULL',
	`enabled` tinyint DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE `phone_crypto` (
	`id` varchar(100) NOT NULL,
	`coin` varchar(15) NOT NULL,
	`amount` double NOT NULL DEFAULT 0,
	`invested` int(11) NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `phone_darkchat_accounts` (
	`phone_number` varchar(15) NOT NULL,
	`username` varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_darkchat_channels` (
	`name` varchar(50) NOT NULL,
	`last_message` varchar(50) NOT NULL DEFAULT '''',
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_darkchat_members` (
	`channel_name` varchar(50) NOT NULL,
	`username` varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_darkchat_messages` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`channel` varchar(50) NOT NULL,
	`sender` varchar(20) NOT NULL,
	`content` varchar(1000) DEFAULT 'NULL',
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_instagram_accounts` (
	`display_name` varchar(30) NOT NULL,
	`username` varchar(20) NOT NULL,
	`password` varchar(100) NOT NULL,
	`profile_image` varchar(500) DEFAULT 'NULL',
	`bio` varchar(100) DEFAULT 'NULL',
	`post_count` int(11) NOT NULL DEFAULT 0,
	`story_count` int(11) NOT NULL DEFAULT 0,
	`follower_count` int(11) NOT NULL DEFAULT 0,
	`following_count` int(11) NOT NULL DEFAULT 0,
	`phone_number` varchar(15) NOT NULL,
	`private` tinyint DEFAULT 0,
	`verified` tinyint DEFAULT 0,
	`date_joined` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_instagram_comments` (
	`id` varchar(10) NOT NULL,
	`post_id` varchar(50) NOT NULL,
	`username` varchar(20) NOT NULL,
	`comment` varchar(500) NOT NULL DEFAULT '''',
	`like_count` int(11) NOT NULL DEFAULT 0,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_instagram_follows` (
	`followed` varchar(20) NOT NULL,
	`follower` varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_instagram_follow_requests` (
	`requester` varchar(20) NOT NULL,
	`requestee` varchar(20) NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_instagram_likes` (
	`id` varchar(10) NOT NULL,
	`username` varchar(20) NOT NULL,
	`is_comment` tinyint NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `phone_instagram_loggedin` (
	`phone_number` varchar(15) NOT NULL,
	`username` varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_instagram_messages` (
	`id` varchar(10) NOT NULL,
	`sender` varchar(20) NOT NULL,
	`recipient` varchar(20) NOT NULL,
	`content` varchar(1000) DEFAULT 'NULL',
	`attachments` text DEFAULT 'NULL',
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_instagram_notifications` (
	`id` varchar(10) NOT NULL,
	`username` varchar(20) NOT NULL,
	`from` varchar(20) NOT NULL,
	`type` varchar(20) NOT NULL,
	`post_id` varchar(50) DEFAULT 'NULL',
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_instagram_posts` (
	`id` varchar(10) NOT NULL,
	`media` text DEFAULT 'NULL',
	`caption` varchar(500) NOT NULL DEFAULT '''',
	`location` varchar(50) DEFAULT 'NULL',
	`like_count` int(11) NOT NULL DEFAULT 0,
	`comment_count` int(11) NOT NULL DEFAULT 0,
	`username` varchar(20) NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_instagram_stories` (
	`id` varchar(10) NOT NULL,
	`username` varchar(20) NOT NULL,
	`image` varchar(500) NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_instagram_stories_views` (
	`story_id` varchar(50) NOT NULL,
	`viewer` varchar(20) NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_last_phone` (
	`id` varchar(100) NOT NULL,
	`phone_number` varchar(15) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_logged_in_accounts` (
	`phone_number` varchar(15) NOT NULL,
	`app` varchar(50) NOT NULL,
	`username` varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_mail_accounts` (
	`address` varchar(100) NOT NULL,
	`password` varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_mail_loggedin` (
	`address` varchar(100) NOT NULL,
	`phone_number` varchar(15) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_mail_messages` (
	`id` varchar(10) NOT NULL,
	`recipient` varchar(100) NOT NULL,
	`sender` varchar(100) NOT NULL,
	`subject` varchar(100) NOT NULL,
	`content` text NOT NULL,
	`attachments` longtext DEFAULT 'NULL',
	`actions` longtext DEFAULT 'NULL',
	`read` tinyint NOT NULL DEFAULT 0,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_maps_locations` (
	`id` varchar(10) NOT NULL,
	`phone_number` varchar(15) NOT NULL,
	`name` varchar(50) NOT NULL,
	`x_pos` float NOT NULL,
	`y_pos` float NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_marketplace_posts` (
	`id` varchar(10) NOT NULL,
	`phone_number` varchar(15) NOT NULL,
	`title` varchar(50) NOT NULL,
	`description` varchar(1000) NOT NULL,
	`attachments` text DEFAULT 'NULL',
	`price` int(11) NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_message_channels` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`is_group` tinyint NOT NULL DEFAULT 0,
	`name` varchar(50) DEFAULT 'NULL',
	`last_message` varchar(50) NOT NULL DEFAULT '''',
	`last_message_timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_message_members` (
	`phone_number` varchar(15) NOT NULL,
	`channel_id` int(11) NOT NULL,
	`is_owner` tinyint NOT NULL DEFAULT 0,
	`deleted` tinyint NOT NULL DEFAULT 0,
	`unread` int(11) NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `phone_message_messages` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`channel_id` int(11) NOT NULL,
	`sender` varchar(15) NOT NULL,
	`content` varchar(1000) DEFAULT 'NULL',
	`attachments` text DEFAULT 'NULL',
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_music_playlists` (
	`id` varchar(10) NOT NULL,
	`phone_number` varchar(15) NOT NULL,
	`name` varchar(50) NOT NULL,
	`cover` varchar(500) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `phone_music_saved_playlists` (
	`playlist_id` varchar(50) NOT NULL,
	`phone_number` varchar(15) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_music_songs` (
	`song_id` varchar(100) NOT NULL,
	`playlist_id` varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_notes` (
	`id` varchar(10) NOT NULL,
	`phone_number` varchar(15) NOT NULL,
	`title` varchar(50) NOT NULL,
	`content` longtext DEFAULT 'NULL',
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_notifications` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`phone_number` varchar(15) NOT NULL,
	`app` varchar(50) NOT NULL,
	`title` varchar(50) DEFAULT 'NULL',
	`content` varchar(500) DEFAULT 'NULL',
	`thumbnail` varchar(500) DEFAULT 'NULL',
	`avatar` varchar(500) DEFAULT 'NULL',
	`show_avatar` tinyint DEFAULT 0,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_phones` (
	`id` varchar(100) NOT NULL,
	`owner_id` varchar(100) NOT NULL,
	`phone_number` varchar(15) NOT NULL,
	`name` varchar(50) DEFAULT 'NULL',
	`pin` varchar(4) DEFAULT 'NULL',
	`face_id` varchar(100) DEFAULT 'NULL',
	`settings` longtext DEFAULT 'NULL',
	`is_setup` tinyint DEFAULT 0,
	`assigned` tinyint DEFAULT 0,
	`battery` int(11) NOT NULL DEFAULT 100,
	CONSTRAINT `phone_number` UNIQUE(`phone_number`)
);
--> statement-breakpoint
CREATE TABLE `phone_phone_blocked_numbers` (
	`phone_number` varchar(15) NOT NULL,
	`blocked_number` varchar(15) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_phone_calls` (
	`id` varchar(10) NOT NULL,
	`caller` varchar(15) NOT NULL,
	`callee` varchar(15) NOT NULL,
	`duration` int(11) NOT NULL DEFAULT 0,
	`answered` tinyint DEFAULT 0,
	`hide_caller_id` tinyint DEFAULT 0,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_phone_contacts` (
	`contact_phone_number` varchar(15) NOT NULL,
	`firstname` varchar(50) NOT NULL DEFAULT '''',
	`lastname` varchar(50) NOT NULL DEFAULT '''',
	`profile_image` varchar(500) DEFAULT 'NULL',
	`email` varchar(50) DEFAULT 'NULL',
	`address` varchar(50) DEFAULT 'NULL',
	`favourite` tinyint DEFAULT 0,
	`phone_number` varchar(15) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_phone_voicemail` (
	`id` varchar(10) NOT NULL,
	`caller` varchar(15) NOT NULL,
	`callee` varchar(15) NOT NULL,
	`url` varchar(500) NOT NULL,
	`duration` int(11) NOT NULL,
	`hide_caller_id` tinyint DEFAULT 0,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_photos` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`phone_number` varchar(15) NOT NULL,
	`link` varchar(500) NOT NULL,
	`is_video` tinyint DEFAULT 0,
	`size` float NOT NULL DEFAULT 0,
	`metadata` varchar(20) DEFAULT 'NULL',
	`is_favourite` tinyint DEFAULT 0,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_photo_albums` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`phone_number` varchar(15) NOT NULL,
	`title` varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_photo_album_photos` (
	`album_id` int(11) NOT NULL,
	`photo_id` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_services_channels` (
	`id` varchar(10) NOT NULL,
	`phone_number` varchar(15) NOT NULL,
	`company` varchar(50) NOT NULL,
	`last_message` varchar(100) DEFAULT 'NULL',
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_services_messages` (
	`id` varchar(10) NOT NULL,
	`channel_id` varchar(50) NOT NULL,
	`sender` varchar(15) NOT NULL,
	`message` varchar(1000) NOT NULL,
	`x_pos` int(11) DEFAULT 'NULL',
	`y_pos` int(11) DEFAULT 'NULL',
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_tiktok_accounts` (
	`name` varchar(30) NOT NULL,
	`bio` varchar(100) DEFAULT 'NULL',
	`avatar` varchar(500) DEFAULT 'NULL',
	`username` varchar(20) NOT NULL,
	`password` varchar(100) NOT NULL,
	`verified` tinyint DEFAULT 0,
	`follower_count` int(11) NOT NULL DEFAULT 0,
	`following_count` int(11) NOT NULL DEFAULT 0,
	`like_count` int(11) NOT NULL DEFAULT 0,
	`video_count` int(11) NOT NULL DEFAULT 0,
	`twitter` varchar(20) DEFAULT 'NULL',
	`instagram` varchar(20) DEFAULT 'NULL',
	`show_likes` tinyint DEFAULT 1,
	`phone_number` varchar(15) NOT NULL,
	`date_joined` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_tiktok_channels` (
	`id` varchar(10) NOT NULL,
	`last_message` varchar(50) NOT NULL,
	`member_1` varchar(20) NOT NULL,
	`member_2` varchar(20) NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()',
	CONSTRAINT `member_1` UNIQUE(`member_1`,`member_2`)
);
--> statement-breakpoint
CREATE TABLE `phone_tiktok_comments` (
	`id` varchar(10) NOT NULL,
	`reply_to` varchar(10) DEFAULT 'NULL',
	`video_id` varchar(10) NOT NULL,
	`username` varchar(20) NOT NULL,
	`comment` varchar(550) NOT NULL,
	`likes` int(11) NOT NULL DEFAULT 0,
	`replies` int(11) NOT NULL DEFAULT 0,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_tiktok_comments_likes` (
	`username` varchar(20) NOT NULL,
	`comment_id` varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_tiktok_follows` (
	`followed` varchar(20) NOT NULL,
	`follower` varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_tiktok_likes` (
	`username` varchar(20) NOT NULL,
	`video_id` varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_tiktok_loggedin` (
	`username` varchar(20) NOT NULL,
	`phone_number` varchar(15) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_tiktok_messages` (
	`id` varchar(10) NOT NULL,
	`channel_id` varchar(10) NOT NULL,
	`sender` varchar(20) NOT NULL,
	`content` varchar(500) NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_tiktok_notifications` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`username` varchar(20) NOT NULL,
	`from` varchar(20) NOT NULL,
	`type` varchar(20) NOT NULL,
	`video_id` varchar(10) DEFAULT 'NULL',
	`comment_id` varchar(10) DEFAULT 'NULL',
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_tiktok_pinned_videos` (
	`username` varchar(20) NOT NULL,
	`video_id` varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_tiktok_saves` (
	`username` varchar(20) NOT NULL,
	`video_id` varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_tiktok_unread_messages` (
	`username` varchar(20) NOT NULL,
	`channel_id` varchar(10) NOT NULL,
	`amount` int(11) NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `phone_tiktok_videos` (
	`id` varchar(10) NOT NULL,
	`username` varchar(20) NOT NULL,
	`src` varchar(500) NOT NULL,
	`caption` varchar(100) DEFAULT 'NULL',
	`metadata` longtext DEFAULT 'NULL',
	`music` text DEFAULT 'NULL',
	`likes` int(11) NOT NULL DEFAULT 0,
	`comments` int(11) NOT NULL DEFAULT 0,
	`views` int(11) NOT NULL DEFAULT 0,
	`saves` int(11) NOT NULL DEFAULT 0,
	`pinned_comment` varchar(10) DEFAULT 'NULL',
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_tiktok_views` (
	`username` varchar(20) NOT NULL,
	`video_id` varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_tinder_accounts` (
	`name` varchar(50) NOT NULL,
	`phone_number` varchar(15) NOT NULL,
	`photos` text DEFAULT 'NULL',
	`bio` varchar(500) DEFAULT 'NULL',
	`dob` date NOT NULL,
	`is_male` tinyint NOT NULL,
	`interested_men` tinyint NOT NULL,
	`interested_women` tinyint NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_tinder_matches` (
	`phone_number_1` varchar(15) NOT NULL,
	`phone_number_2` varchar(15) NOT NULL,
	`latest_message` varchar(1000) DEFAULT 'NULL',
	`latest_message_timestamp` timestamp DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `phone_tinder_messages` (
	`id` varchar(10) NOT NULL,
	`sender` varchar(15) NOT NULL,
	`recipient` varchar(15) NOT NULL,
	`content` varchar(1000) DEFAULT 'NULL',
	`attachments` text DEFAULT 'NULL',
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_tinder_swipes` (
	`swiper` varchar(15) NOT NULL,
	`swipee` varchar(15) NOT NULL,
	`liked` tinyint NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `phone_twitter_accounts` (
	`display_name` varchar(30) NOT NULL,
	`username` varchar(20) NOT NULL,
	`password` varchar(100) NOT NULL,
	`phone_number` varchar(15) NOT NULL,
	`bio` varchar(100) DEFAULT 'NULL',
	`profile_image` varchar(500) DEFAULT 'NULL',
	`profile_header` varchar(500) DEFAULT 'NULL',
	`pinned_tweet` varchar(50) DEFAULT 'NULL',
	`verified` tinyint DEFAULT 0,
	`follower_count` int(11) NOT NULL DEFAULT 0,
	`following_count` int(11) NOT NULL DEFAULT 0,
	`private` tinyint DEFAULT 0,
	`date_joined` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_twitter_follows` (
	`followed` varchar(20) NOT NULL,
	`follower` varchar(20) NOT NULL,
	`notifications` tinyint NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `phone_twitter_follow_requests` (
	`requester` varchar(20) NOT NULL,
	`requestee` varchar(20) NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_twitter_hashtags` (
	`hashtag` varchar(50) NOT NULL,
	`amount` int(11) NOT NULL DEFAULT 0,
	`last_used` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_twitter_likes` (
	`tweet_id` varchar(50) NOT NULL,
	`username` varchar(20) NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_twitter_loggedin` (
	`phone_number` varchar(15) NOT NULL,
	`username` varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `phone_twitter_messages` (
	`id` varchar(10) NOT NULL,
	`sender` varchar(20) NOT NULL,
	`recipient` varchar(20) NOT NULL,
	`content` varchar(1000) DEFAULT 'NULL',
	`attachments` text DEFAULT 'NULL',
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_twitter_notifications` (
	`id` varchar(10) NOT NULL,
	`username` varchar(20) NOT NULL,
	`from` varchar(20) NOT NULL,
	`type` varchar(20) NOT NULL,
	`tweet_id` varchar(50) DEFAULT 'NULL',
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_twitter_promoted` (
	`tweet_id` varchar(50) NOT NULL,
	`promotions` int(11) NOT NULL DEFAULT 0,
	`views` int(11) NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `phone_twitter_retweets` (
	`tweet_id` varchar(50) NOT NULL,
	`username` varchar(20) NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_twitter_tweets` (
	`id` varchar(10) NOT NULL,
	`username` varchar(20) NOT NULL,
	`content` varchar(280) DEFAULT 'NULL',
	`attachments` text DEFAULT 'NULL',
	`reply_to` varchar(50) DEFAULT 'NULL',
	`like_count` int(11) DEFAULT 0,
	`reply_count` int(11) DEFAULT 0,
	`retweet_count` int(11) DEFAULT 0,
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_voice_memos_recordings` (
	`id` varchar(10) NOT NULL,
	`phone_number` varchar(15) NOT NULL,
	`file_name` varchar(50) NOT NULL,
	`file_url` varchar(500) NOT NULL,
	`file_length` int(11) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_wallet_transactions` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`phone_number` varchar(15) NOT NULL,
	`amount` int(11) NOT NULL,
	`company` varchar(50) NOT NULL,
	`logo` varchar(200) DEFAULT 'NULL',
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `phone_yellow_pages_posts` (
	`id` varchar(10) NOT NULL,
	`phone_number` varchar(15) NOT NULL,
	`title` varchar(50) NOT NULL,
	`description` varchar(1000) NOT NULL,
	`attachment` varchar(500) DEFAULT 'NULL',
	`price` int(11) DEFAULT 'NULL',
	`timestamp` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `plane_datastorage` (
	`storageOwner` varchar(50) NOT NULL,
	`storageData` longtext NOT NULL
);
--> statement-breakpoint
CREATE TABLE `playerskins` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`citizenid` varchar(255) NOT NULL,
	`model` varchar(255) NOT NULL,
	`skin` text NOT NULL,
	`active` tinyint NOT NULL DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE `player_multijob` (
	`id` int(255) AUTO_INCREMENT NOT NULL,
	`identifier` varchar(46) DEFAULT 'NULL',
	`job` varchar(100) NOT NULL,
	`grade` int(11) NOT NULL,
	`removeable` tinyint NOT NULL
);
--> statement-breakpoint
CREATE TABLE `player_outfits` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`citizenid` varchar(50) DEFAULT 'NULL',
	`outfitname` varchar(50) NOT NULL DEFAULT ''0'',
	`model` varchar(50) DEFAULT 'NULL',
	`props` varchar(1000) DEFAULT 'NULL',
	`components` varchar(1500) DEFAULT 'NULL',
	CONSTRAINT `citizenid_outfitname_model` UNIQUE(`citizenid`,`outfitname`,`model`)
);
--> statement-breakpoint
CREATE TABLE `player_outfit_codes` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`outfitid` int(11) NOT NULL,
	`code` varchar(50) NOT NULL DEFAULT ''''
);
--> statement-breakpoint
CREATE TABLE `playlists` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`label` varchar(60) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `playlist_songs` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`playlist` int(11) DEFAULT 'NULL',
	`link` varchar(500) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `playtime` (
	`identifier` varchar(50) NOT NULL,
	`playtime` int(11) NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `protection` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`name` varchar(50) DEFAULT 'NULL',
	`identifiers` longtext DEFAULT 'NULL',
	`tokens` longtext DEFAULT 'NULL',
	`reason` varchar(50) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `queue` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`identifier` varchar(46) DEFAULT 'NULL',
	`name` varchar(255) DEFAULT 'NULL',
	`points` bigint(20) NOT NULL DEFAULT 0,
	`category` varchar(255) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `radiocar_music` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`label` varchar(64) NOT NULL,
	`url` varchar(256) NOT NULL,
	`plate` varchar(32) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `radiocar_owned` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`spz` varchar(32) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `radiocar_playlist` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`playlist` text NOT NULL,
	`plate` varchar(32) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `rcore_prison` (
	`prisoner_id` int(11) AUTO_INCREMENT NOT NULL,
	`owner` varchar(46) DEFAULT 'NULL',
	`jail_time` datetime DEFAULT 'NULL',
	`data` longtext DEFAULT 'NULL',
	`createdAt` timestamp DEFAULT 'current_timestamp()',
	`updatedAt` timestamp DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `rcore_prison_accounts` (
	`account_id` int(11) AUTO_INCREMENT NOT NULL,
	`owner` varchar(46) DEFAULT 'NULL',
	`balance` bigint(20) DEFAULT 0,
	`giftstate` tinyint DEFAULT 0,
	`createdAt` timestamp DEFAULT 'current_timestamp()',
	`updatedAt` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `rcore_prison_contacts` (
	`account_id` int(11) DEFAULT 'NULL',
	`owner` varchar(46) DEFAULT 'NULL',
	`name` longtext DEFAULT 'NULL',
	`targetowner` varchar(50) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `rcore_prison_stash` (
	`owner` varchar(46) NOT NULL,
	`stash` longtext NOT NULL
);
--> statement-breakpoint
CREATE TABLE `rcore_prison_transactions` (
	`transaction_id` int(11) AUTO_INCREMENT NOT NULL,
	`account_id` int(11) DEFAULT 'NULL',
	`transaction_name` varchar(255) DEFAULT 'NULL',
	`charid` int(11) DEFAULT 'NULL',
	`isRead` tinyint NOT NULL DEFAULT 0,
	`message` varchar(255) DEFAULT 'NULL',
	`createdAt` timestamp DEFAULT 'current_timestamp()',
	`updatedAt` timestamp DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `rented_vehicles` (
	`vehicle` varchar(60) NOT NULL,
	`plate` varchar(12) NOT NULL,
	`player_name` varchar(255) NOT NULL,
	`base_price` int(11) NOT NULL,
	`rent_price` int(11) NOT NULL,
	`owner` varchar(46) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `society_moneywash` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`identifier` varchar(46) DEFAULT 'NULL',
	`society` varchar(60) NOT NULL,
	`amount` int(11) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `sprays` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`identifier` varchar(46) DEFAULT 'NULL',
	`x` float(8,4) NOT NULL,
	`y` float(8,4) NOT NULL,
	`z` float(8,4) NOT NULL,
	`origX` float(8,4) NOT NULL,
	`origY` float(8,4) NOT NULL,
	`origZ` float(8,4) NOT NULL,
	`rx` float(8,4) NOT NULL,
	`ry` float(8,4) NOT NULL,
	`rz` float(8,4) NOT NULL,
	`scale` float(8,4) NOT NULL,
	`text` varchar(32) DEFAULT 'NULL',
	`image` varchar(64) DEFAULT 'NULL',
	`imageDict` varchar(64) DEFAULT 'NULL',
	`font` varchar(32) DEFAULT 'NULL',
	`color` varchar(32) DEFAULT 'NULL',
	`interior` int(3) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `tebex` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`transaction_id` text DEFAULT 'NULL',
	`fivem_id` text DEFAULT 'NULL',
	`data` longtext DEFAULT 'NULL',
	`claimed` int(11) DEFAULT 'NULL',
	`package_id` text DEFAULT 'NULL',
	`date_received` text DEFAULT 'NULL',
	`date_claimed` text DEFAULT 'NULL',
	CONSTRAINT `id` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `trappin_gunplug` (
	`id` varchar(50) NOT NULL DEFAULT '''',
	`ammo` int(11) DEFAULT 10000,
	`credits` int(11) DEFAULT 800,
	`date` bigint(20) DEFAULT 'NULL',
	CONSTRAINT `id` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `trappin_pets` (
	`identifier` varchar(46) DEFAULT 'NULL',
	`name` varchar(128) NOT NULL,
	`model` varchar(128) NOT NULL,
	`type` varchar(128) NOT NULL,
	`dead` varchar(128) NOT NULL,
	`skin` int(128) NOT NULL,
	`collar` int(128) NOT NULL,
	`thirst` int(128) NOT NULL,
	`hunger` int(128) NOT NULL,
	`hp` int(128) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`identifier` varchar(46) NOT NULL,
	`discord` varchar(50) DEFAULT 'NULL',
	`accounts` longtext DEFAULT 'NULL',
	`group` varchar(50) DEFAULT ''user'',
	`inventory` longtext DEFAULT 'NULL',
	`job` varchar(20) DEFAULT ''unemployed'',
	`job_grade` int(11) DEFAULT 0,
	`loadout` longtext DEFAULT 'NULL',
	`metadata` longtext DEFAULT 'NULL',
	`position` longtext DEFAULT 'NULL',
	`firstname` varchar(16) DEFAULT 'NULL',
	`lastname` varchar(16) DEFAULT 'NULL',
	`dateofbirth` varchar(10) DEFAULT 'NULL',
	`sex` varchar(1) DEFAULT 'NULL',
	`height` int(11) DEFAULT 'NULL',
	`skin` longtext DEFAULT 'NULL',
	`status` longtext DEFAULT 'NULL',
	`is_dead` tinyint NOT NULL DEFAULT 0,
	`deaths` int(255) NOT NULL DEFAULT 0,
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`disabled` tinyint DEFAULT 0,
	`last_property` varchar(255) DEFAULT 'NULL',
	`created_at` timestamp DEFAULT 'current_timestamp()',
	`last_seen` timestamp DEFAULT 'NULL',
	`phone_number` varchar(20) DEFAULT 'NULL',
	`pincode` int(11) DEFAULT 'NULL',
	`pregnant` int(11) DEFAULT 'NULL',
	`gang` longtext DEFAULT 'NULL',
	`gang_name` varchar(50) DEFAULT 'NULL',
	`sits` int(11) DEFAULT 0,
	`drugssold` int(11) DEFAULT 0,
	`iban` varchar(255) DEFAULT 'NULL',
	`rocksmined` int(11) DEFAULT 0,
	`playtime` int(11) DEFAULT 0,
	`mdt_image` mediumtext DEFAULT 'NULL',
	`mdt_height` int(11) DEFAULT 'NULL',
	`mdt_description` mediumtext DEFAULT 'NULL',
	`society_permissions` longtext DEFAULT 'NULL',
	CONSTRAINT `id` UNIQUE(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_licenses` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`type` varchar(60) NOT NULL,
	`owner` varchar(46) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `vehicles` (
	`name` varchar(60) NOT NULL,
	`model` varchar(60) NOT NULL,
	`price` int(11) NOT NULL,
	`category` varchar(60) DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `vehicle_categories` (
	`name` varchar(60) NOT NULL,
	`label` varchar(60) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `vehicle_sold` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`client` varchar(50) NOT NULL,
	`model` varchar(50) NOT NULL,
	`plate` varchar(50) NOT NULL,
	`soldby` varchar(50) NOT NULL,
	`date` varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `wasabi_bans` (
	`author` varchar(40) DEFAULT 'NULL',
	`player` varchar(40) DEFAULT 'NULL',
	`license` varchar(50) DEFAULT 'NULL',
	`ip` varchar(25) DEFAULT 'NULL',
	`discord` varchar(40) DEFAULT 'NULL',
	`reason` varchar(100) DEFAULT 'NULL',
	`ban_time` int(50) NOT NULL,
	`exp_time` int(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `wasabi_evidence` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`data` longtext NOT NULL
);
--> statement-breakpoint
CREATE TABLE `wasabi_fingerprints` (
	`identifier` varchar(46) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `wasabi_manual_prints` (
	`identifier` varchar(46) NOT NULL,
	`firstname` varchar(50) NOT NULL,
	`lastname` varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `wasabi_multijob` (
	`identifier` varchar(46) DEFAULT 'NULL',
	`job` varchar(100) NOT NULL,
	`grade` int(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `weaponrepairs` (
	`identifier` varchar(46) DEFAULT 'NULL',
	`repairs` int(11) DEFAULT 10,
	`lastReset` date DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `whitelist` (
	`identifier` varchar(46) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `zm_eroticmenucheck` (
	`citizenid` varchar(255) NOT NULL,
	`license` varchar(255) DEFAULT 'NULL',
	`checked` tinyint DEFAULT 1
);
--> statement-breakpoint
CREATE TABLE `zm_lovemenucheck` (
	`citizenid` varchar(255) NOT NULL,
	`license` varchar(255) DEFAULT 'NULL',
	`checked` tinyint DEFAULT 1
);
--> statement-breakpoint
ALTER TABLE `phone_backups` ADD CONSTRAINT `phone_backups_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_clock_alarms` ADD CONSTRAINT `phone_clock_alarms_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_darkchat_accounts` ADD CONSTRAINT `phone_darkchat_accounts_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_instagram_accounts` ADD CONSTRAINT `phone_instagram_accounts_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_instagram_comments` ADD CONSTRAINT `phone_instagram_comments_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `phone_instagram_posts`(`id`) ON DELETE cascade ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `phone_instagram_comments` ADD CONSTRAINT `phone_instagram_comments_ibfk_2` FOREIGN KEY (`username`) REFERENCES `phone_instagram_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_instagram_follows` ADD CONSTRAINT `phone_instagram_follows_ibfk_1` FOREIGN KEY (`followed`) REFERENCES `phone_instagram_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_instagram_follows` ADD CONSTRAINT `phone_instagram_follows_ibfk_2` FOREIGN KEY (`follower`) REFERENCES `phone_instagram_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_instagram_follow_requests` ADD CONSTRAINT `phone_instagram_follow_requests_ibfk_1` FOREIGN KEY (`requester`) REFERENCES `phone_instagram_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_instagram_follow_requests` ADD CONSTRAINT `phone_instagram_follow_requests_ibfk_2` FOREIGN KEY (`requestee`) REFERENCES `phone_instagram_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_instagram_likes` ADD CONSTRAINT `phone_instagram_likes_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_instagram_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_instagram_loggedin` ADD CONSTRAINT `phone_instagram_loggedin_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_instagram_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_instagram_loggedin` ADD CONSTRAINT `phone_instagram_loggedin_ibfk_2` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_instagram_messages` ADD CONSTRAINT `phone_instagram_messages_ibfk_1` FOREIGN KEY (`sender`) REFERENCES `phone_instagram_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_instagram_messages` ADD CONSTRAINT `phone_instagram_messages_ibfk_2` FOREIGN KEY (`recipient`) REFERENCES `phone_instagram_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_instagram_notifications` ADD CONSTRAINT `phone_instagram_notifications_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_instagram_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_instagram_notifications` ADD CONSTRAINT `phone_instagram_notifications_ibfk_2` FOREIGN KEY (`from`) REFERENCES `phone_instagram_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_instagram_posts` ADD CONSTRAINT `phone_instagram_posts_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_instagram_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_instagram_stories` ADD CONSTRAINT `phone_instagram_stories_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_instagram_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_instagram_stories_views` ADD CONSTRAINT `phone_instagram_stories_views_ibfk_1` FOREIGN KEY (`story_id`) REFERENCES `phone_instagram_stories`(`id`) ON DELETE cascade ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `phone_instagram_stories_views` ADD CONSTRAINT `phone_instagram_stories_views_ibfk_2` FOREIGN KEY (`viewer`) REFERENCES `phone_instagram_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_last_phone` ADD CONSTRAINT `phone_last_phone_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_logged_in_accounts` ADD CONSTRAINT `phone_logged_in_accounts_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_mail_loggedin` ADD CONSTRAINT `phone_mail_loggedin_ibfk_1` FOREIGN KEY (`address`) REFERENCES `phone_mail_accounts`(`address`) ON DELETE cascade ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `phone_mail_loggedin` ADD CONSTRAINT `phone_mail_loggedin_ibfk_2` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_maps_locations` ADD CONSTRAINT `phone_maps_locations_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_message_members` ADD CONSTRAINT `phone_message_members_ibfk_1` FOREIGN KEY (`channel_id`) REFERENCES `phone_message_channels`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_message_messages` ADD CONSTRAINT `phone_message_messages_ibfk_1` FOREIGN KEY (`channel_id`) REFERENCES `phone_message_channels`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_music_playlists` ADD CONSTRAINT `phone_music_playlists_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_music_saved_playlists` ADD CONSTRAINT `phone_music_saved_playlists_ibfk_1` FOREIGN KEY (`playlist_id`) REFERENCES `phone_music_playlists`(`id`) ON DELETE cascade ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `phone_music_saved_playlists` ADD CONSTRAINT `phone_music_saved_playlists_ibfk_2` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_music_songs` ADD CONSTRAINT `phone_music_songs_ibfk_1` FOREIGN KEY (`playlist_id`) REFERENCES `phone_music_playlists`(`id`) ON DELETE cascade ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `phone_notes` ADD CONSTRAINT `phone_notes_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_notifications` ADD CONSTRAINT `phone_notifications_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_photos` ADD CONSTRAINT `phone_photos_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_photo_albums` ADD CONSTRAINT `phone_photo_albums_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_photo_album_photos` ADD CONSTRAINT `phone_photo_album_photos_ibfk_1` FOREIGN KEY (`album_id`) REFERENCES `phone_photo_albums`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_photo_album_photos` ADD CONSTRAINT `phone_photo_album_photos_ibfk_2` FOREIGN KEY (`photo_id`) REFERENCES `phone_photos`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_services_messages` ADD CONSTRAINT `phone_services_messages_ibfk_1` FOREIGN KEY (`channel_id`) REFERENCES `phone_services_channels`(`id`) ON DELETE cascade ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `phone_tiktok_accounts` ADD CONSTRAINT `phone_tiktok_accounts_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_channels` ADD CONSTRAINT `phone_tiktok_channels_ibfk_1` FOREIGN KEY (`member_1`) REFERENCES `phone_tiktok_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_channels` ADD CONSTRAINT `phone_tiktok_channels_ibfk_2` FOREIGN KEY (`member_2`) REFERENCES `phone_tiktok_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_comments` ADD CONSTRAINT `phone_tiktok_comments_ibfk_1` FOREIGN KEY (`video_id`) REFERENCES `phone_tiktok_videos`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_comments` ADD CONSTRAINT `phone_tiktok_comments_ibfk_2` FOREIGN KEY (`username`) REFERENCES `phone_tiktok_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_comments` ADD CONSTRAINT `phone_tiktok_comments_ibfk_3` FOREIGN KEY (`reply_to`) REFERENCES `phone_tiktok_comments`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_comments_likes` ADD CONSTRAINT `phone_tiktok_comments_likes_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_tiktok_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_comments_likes` ADD CONSTRAINT `phone_tiktok_comments_likes_ibfk_2` FOREIGN KEY (`comment_id`) REFERENCES `phone_tiktok_comments`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_follows` ADD CONSTRAINT `phone_tiktok_follows_ibfk_1` FOREIGN KEY (`followed`) REFERENCES `phone_tiktok_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_follows` ADD CONSTRAINT `phone_tiktok_follows_ibfk_2` FOREIGN KEY (`follower`) REFERENCES `phone_tiktok_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_likes` ADD CONSTRAINT `phone_tiktok_likes_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_tiktok_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_likes` ADD CONSTRAINT `phone_tiktok_likes_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `phone_tiktok_videos`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_loggedin` ADD CONSTRAINT `phone_tiktok_loggedin_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_tiktok_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_loggedin` ADD CONSTRAINT `phone_tiktok_loggedin_ibfk_2` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_messages` ADD CONSTRAINT `phone_tiktok_messages_ibfk_1` FOREIGN KEY (`channel_id`) REFERENCES `phone_tiktok_channels`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_messages` ADD CONSTRAINT `phone_tiktok_messages_ibfk_2` FOREIGN KEY (`sender`) REFERENCES `phone_tiktok_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_notifications` ADD CONSTRAINT `phone_tiktok_notifications_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_tiktok_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_notifications` ADD CONSTRAINT `phone_tiktok_notifications_ibfk_2` FOREIGN KEY (`from`) REFERENCES `phone_tiktok_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_notifications` ADD CONSTRAINT `phone_tiktok_notifications_ibfk_3` FOREIGN KEY (`video_id`) REFERENCES `phone_tiktok_videos`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_notifications` ADD CONSTRAINT `phone_tiktok_notifications_ibfk_4` FOREIGN KEY (`comment_id`) REFERENCES `phone_tiktok_comments`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_pinned_videos` ADD CONSTRAINT `phone_tiktok_pinned_videos_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_tiktok_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_pinned_videos` ADD CONSTRAINT `phone_tiktok_pinned_videos_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `phone_tiktok_videos`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_saves` ADD CONSTRAINT `phone_tiktok_saves_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_tiktok_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_saves` ADD CONSTRAINT `phone_tiktok_saves_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `phone_tiktok_videos`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_unread_messages` ADD CONSTRAINT `phone_tiktok_unread_messages_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_tiktok_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_unread_messages` ADD CONSTRAINT `phone_tiktok_unread_messages_ibfk_2` FOREIGN KEY (`channel_id`) REFERENCES `phone_tiktok_channels`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_videos` ADD CONSTRAINT `phone_tiktok_videos_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_tiktok_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_views` ADD CONSTRAINT `phone_tiktok_views_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_tiktok_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tiktok_views` ADD CONSTRAINT `phone_tiktok_views_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `phone_tiktok_videos`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tinder_accounts` ADD CONSTRAINT `phone_tinder_accounts_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tinder_matches` ADD CONSTRAINT `phone_tinder_matches_ibfk_1` FOREIGN KEY (`phone_number_1`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tinder_matches` ADD CONSTRAINT `phone_tinder_matches_ibfk_2` FOREIGN KEY (`phone_number_2`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tinder_messages` ADD CONSTRAINT `phone_tinder_messages_ibfk_1` FOREIGN KEY (`sender`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tinder_messages` ADD CONSTRAINT `phone_tinder_messages_ibfk_2` FOREIGN KEY (`recipient`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tinder_swipes` ADD CONSTRAINT `phone_tinder_swipes_ibfk_1` FOREIGN KEY (`swiper`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_tinder_swipes` ADD CONSTRAINT `phone_tinder_swipes_ibfk_2` FOREIGN KEY (`swipee`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_twitter_accounts` ADD CONSTRAINT `phone_twitter_accounts_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_twitter_follows` ADD CONSTRAINT `phone_twitter_follows_ibfk_1` FOREIGN KEY (`followed`) REFERENCES `phone_twitter_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_twitter_follows` ADD CONSTRAINT `phone_twitter_follows_ibfk_2` FOREIGN KEY (`follower`) REFERENCES `phone_twitter_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_twitter_follow_requests` ADD CONSTRAINT `phone_twitter_follow_requests_ibfk_1` FOREIGN KEY (`requester`) REFERENCES `phone_twitter_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_twitter_follow_requests` ADD CONSTRAINT `phone_twitter_follow_requests_ibfk_2` FOREIGN KEY (`requestee`) REFERENCES `phone_twitter_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_twitter_likes` ADD CONSTRAINT `phone_twitter_likes_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_twitter_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_twitter_loggedin` ADD CONSTRAINT `phone_twitter_loggedin_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_twitter_loggedin` ADD CONSTRAINT `phone_twitter_loggedin_ibfk_2` FOREIGN KEY (`username`) REFERENCES `phone_twitter_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_twitter_messages` ADD CONSTRAINT `phone_twitter_messages_ibfk_1` FOREIGN KEY (`sender`) REFERENCES `phone_twitter_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_twitter_messages` ADD CONSTRAINT `phone_twitter_messages_ibfk_2` FOREIGN KEY (`recipient`) REFERENCES `phone_twitter_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_twitter_notifications` ADD CONSTRAINT `phone_twitter_notifications_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_twitter_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_twitter_notifications` ADD CONSTRAINT `phone_twitter_notifications_ibfk_2` FOREIGN KEY (`from`) REFERENCES `phone_twitter_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_twitter_promoted` ADD CONSTRAINT `phone_twitter_promoted_ibfk_1` FOREIGN KEY (`tweet_id`) REFERENCES `phone_twitter_tweets`(`id`) ON DELETE cascade ON UPDATE restrict;--> statement-breakpoint
ALTER TABLE `phone_twitter_retweets` ADD CONSTRAINT `phone_twitter_retweets_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_twitter_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_twitter_tweets` ADD CONSTRAINT `phone_twitter_tweets_ibfk_1` FOREIGN KEY (`username`) REFERENCES `phone_twitter_accounts`(`username`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_voice_memos_recordings` ADD CONSTRAINT `phone_voice_memos_recordings_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `phone_wallet_transactions` ADD CONSTRAINT `phone_wallet_transactions_ibfk_1` FOREIGN KEY (`phone_number`) REFERENCES `phone_phones`(`phone_number`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `rcore_prison_contacts` ADD CONSTRAINT `FK_rcore_prison_contacts_rcore_prison_accounts` FOREIGN KEY (`account_id`) REFERENCES `rcore_prison_accounts`(`account_id`) ON DELETE restrict ON UPDATE restrict;--> statement-breakpoint
CREATE INDEX `index_addon_account_data_account_name` ON `addon_account_data` (`account_name`);--> statement-breakpoint
CREATE INDEX `index_addon_inventory_items_inventory_name_name` ON `addon_inventory_items` (`inventory_name`,`name`);--> statement-breakpoint
CREATE INDEX `index_addon_inventory_items_inventory_name_name_owner` ON `addon_inventory_items` (`inventory_name`,`name`,`owner`);--> statement-breakpoint
CREATE INDEX `index_addon_inventory_inventory_name` ON `addon_inventory_items` (`inventory_name`);--> statement-breakpoint
CREATE INDEX `id` ON `casino_timestamp` (`id`);--> statement-breakpoint
CREATE INDEX `index_datastore_data_name` ON `datastore_data` (`name`);--> statement-breakpoint
CREATE INDEX `identifier` ON `gympass` (`identifier`);--> statement-breakpoint
CREATE INDEX `identifier` ON `gymstats` (`identifier`);--> statement-breakpoint
CREATE INDEX `citizenID` ON `kub_truckingcontracts` (`citizenid`);--> statement-breakpoint
CREATE INDEX `citizenid` ON `kub_truckingplayervehicles` (`citizenid`);--> statement-breakpoint
CREATE INDEX `vehicleid` ON `kub_truckingplayervehicles` (`vehicleid`);--> statement-breakpoint
CREATE INDEX `citizenID` ON `kub_truckingprofile` (`citizenid`);--> statement-breakpoint
CREATE INDEX `type` ON `management_funds` (`type`);--> statement-breakpoint
CREATE INDEX `author` ON `mdt_announcements` (`author`);--> statement-breakpoint
CREATE INDEX `slots` ON `multicharacter_slots` (`slots`);--> statement-breakpoint
CREATE INDEX `idx_from` ON `myemergency_criminal_complaint` (`charge_from`);--> statement-breakpoint
CREATE INDEX `idx_perpetrator` ON `myemergency_criminal_complaint` (`perpetrator`);--> statement-breakpoint
CREATE INDEX `idx_name` ON `myemergency_emergency_vehicle` (`name`);--> statement-breakpoint
CREATE INDEX `idx_short_name` ON `myemergency_emergency_vehicle` (`short_name`);--> statement-breakpoint
CREATE INDEX `idx_vehicle` ON `myemergency_emergency_vehicle` (`vehicle`);--> statement-breakpoint
CREATE INDEX `idx_employee_id` ON `myemergency_employees_entries` (`employee_id`);--> statement-breakpoint
CREATE INDEX `idx_type` ON `myemergency_files` (`fromsystem`);--> statement-breakpoint
CREATE INDEX `idx_name` ON `myemergency_files` (`name`);--> statement-breakpoint
CREATE INDEX `idx_alias` ON `myemergency_files` (`alias`);--> statement-breakpoint
CREATE INDEX `idx_file_id` ON `myemergency_files_entries` (`file_id`);--> statement-breakpoint
CREATE INDEX `idx_is_wanted_done` ON `myemergency_files_entries` (`is_wanted_done`);--> statement-breakpoint
CREATE INDEX `idx_is_wanted` ON `myemergency_files_entries` (`is_wanted`);--> statement-breakpoint
CREATE INDEX `idx_name` ON `myemergency_investigations` (`name`);--> statement-breakpoint
CREATE INDEX `idx_name` ON `myemergency_law_books` (`name`);--> statement-breakpoint
CREATE INDEX `idx_short_name` ON `myemergency_law_books` (`short_name`);--> statement-breakpoint
CREATE INDEX `idx_name` ON `myemergency_licenses` (`name`);--> statement-breakpoint
CREATE INDEX `idx_name` ON `myemergency_mission_reports` (`name`);--> statement-breakpoint
CREATE INDEX `idx_sortorder` ON `myemergency_possible_rights` (`sortorder`);--> statement-breakpoint
CREATE INDEX `idx_type` ON `myemergency_possible_rights` (`fromsystem`);--> statement-breakpoint
CREATE INDEX `idx_name` ON `myemergency_radio_state` (`name`);--> statement-breakpoint
CREATE INDEX `idx_shortname` ON `myemergency_radio_state` (`short_name`);--> statement-breakpoint
CREATE INDEX `idx_owner` ON `myemergency_reg_vehicle` (`owner`);--> statement-breakpoint
CREATE INDEX `idx_plate` ON `myemergency_reg_vehicle` (`plate`);--> statement-breakpoint
CREATE INDEX `idx_veh_type` ON `myemergency_reg_vehicle` (`veh_type`);--> statement-breakpoint
CREATE INDEX `idx_veh_model` ON `myemergency_reg_vehicle` (`veh_model`);--> statement-breakpoint
CREATE INDEX `idx_serialno` ON `myemergency_reg_weapons` (`serialno`);--> statement-breakpoint
CREATE INDEX `idx_owner` ON `myemergency_reg_weapons` (`owner`);--> statement-breakpoint
CREATE INDEX `idx_weapontype` ON `myemergency_reg_weapons` (`weapontype`);--> statement-breakpoint
CREATE INDEX `idx_weaponmodel` ON `myemergency_reg_weapons` (`weaponmodel`);--> statement-breakpoint
CREATE INDEX `idx_name` ON `myemergency_trainings` (`name`);--> statement-breakpoint
CREATE INDEX `idx_short_name` ON `myemergency_trainings` (`short_name`);--> statement-breakpoint
CREATE INDEX `identifier` ON `owned_gyms` (`identifier`);--> statement-breakpoint
CREATE INDEX `phone_number` ON `phone_backups` (`phone_number`);--> statement-breakpoint
CREATE INDEX `phone_number` ON `phone_clock_alarms` (`phone_number`);--> statement-breakpoint
CREATE INDEX `phone_number` ON `phone_darkchat_accounts` (`phone_number`);--> statement-breakpoint
CREATE INDEX `phone_number` ON `phone_instagram_accounts` (`phone_number`);--> statement-breakpoint
CREATE INDEX `post_id` ON `phone_instagram_comments` (`post_id`);--> statement-breakpoint
CREATE INDEX `username` ON `phone_instagram_comments` (`username`);--> statement-breakpoint
CREATE INDEX `follower` ON `phone_instagram_follows` (`follower`);--> statement-breakpoint
CREATE INDEX `requestee` ON `phone_instagram_follow_requests` (`requestee`);--> statement-breakpoint
CREATE INDEX `username` ON `phone_instagram_likes` (`username`);--> statement-breakpoint
CREATE INDEX `username` ON `phone_instagram_loggedin` (`username`);--> statement-breakpoint
CREATE INDEX `sender` ON `phone_instagram_messages` (`sender`);--> statement-breakpoint
CREATE INDEX `recipient` ON `phone_instagram_messages` (`recipient`);--> statement-breakpoint
CREATE INDEX `username` ON `phone_instagram_notifications` (`username`);--> statement-breakpoint
CREATE INDEX `from` ON `phone_instagram_notifications` (`from`);--> statement-breakpoint
CREATE INDEX `username` ON `phone_instagram_posts` (`username`);--> statement-breakpoint
CREATE INDEX `username` ON `phone_instagram_stories` (`username`);--> statement-breakpoint
CREATE INDEX `viewer` ON `phone_instagram_stories_views` (`viewer`);--> statement-breakpoint
CREATE INDEX `phone_number` ON `phone_last_phone` (`phone_number`);--> statement-breakpoint
CREATE INDEX `address` ON `phone_mail_loggedin` (`address`);--> statement-breakpoint
CREATE INDEX `phone_number` ON `phone_maps_locations` (`phone_number`);--> statement-breakpoint
CREATE INDEX `channel_id` ON `phone_message_members` (`channel_id`);--> statement-breakpoint
CREATE INDEX `channel_id` ON `phone_message_messages` (`channel_id`);--> statement-breakpoint
CREATE INDEX `phone_number` ON `phone_music_playlists` (`phone_number`);--> statement-breakpoint
CREATE INDEX `phone_number` ON `phone_music_saved_playlists` (`phone_number`);--> statement-breakpoint
CREATE INDEX `playlist_id` ON `phone_music_songs` (`playlist_id`);--> statement-breakpoint
CREATE INDEX `phone_number` ON `phone_notes` (`phone_number`);--> statement-breakpoint
CREATE INDEX `phone_number` ON `phone_notifications` (`phone_number`);--> statement-breakpoint
CREATE INDEX `phone_number` ON `phone_photos` (`phone_number`);--> statement-breakpoint
CREATE INDEX `phone_number` ON `phone_photo_albums` (`phone_number`);--> statement-breakpoint
CREATE INDEX `photo_id` ON `phone_photo_album_photos` (`photo_id`);--> statement-breakpoint
CREATE INDEX `channel_id` ON `phone_services_messages` (`channel_id`);--> statement-breakpoint
CREATE INDEX `phone_number` ON `phone_tiktok_accounts` (`phone_number`);--> statement-breakpoint
CREATE INDEX `member_2` ON `phone_tiktok_channels` (`member_2`);--> statement-breakpoint
CREATE INDEX `video_id` ON `phone_tiktok_comments` (`video_id`);--> statement-breakpoint
CREATE INDEX `username` ON `phone_tiktok_comments` (`username`);--> statement-breakpoint
CREATE INDEX `reply_to` ON `phone_tiktok_comments` (`reply_to`);--> statement-breakpoint
CREATE INDEX `comment_id` ON `phone_tiktok_comments_likes` (`comment_id`);--> statement-breakpoint
CREATE INDEX `follower` ON `phone_tiktok_follows` (`follower`);--> statement-breakpoint
CREATE INDEX `video_id` ON `phone_tiktok_likes` (`video_id`);--> statement-breakpoint
CREATE INDEX `username` ON `phone_tiktok_loggedin` (`username`);--> statement-breakpoint
CREATE INDEX `channel_id` ON `phone_tiktok_messages` (`channel_id`);--> statement-breakpoint
CREATE INDEX `sender` ON `phone_tiktok_messages` (`sender`);--> statement-breakpoint
CREATE INDEX `username` ON `phone_tiktok_notifications` (`username`);--> statement-breakpoint
CREATE INDEX `from` ON `phone_tiktok_notifications` (`from`);--> statement-breakpoint
CREATE INDEX `video_id` ON `phone_tiktok_notifications` (`video_id`);--> statement-breakpoint
CREATE INDEX `comment_id` ON `phone_tiktok_notifications` (`comment_id`);--> statement-breakpoint
CREATE INDEX `video_id` ON `phone_tiktok_pinned_videos` (`video_id`);--> statement-breakpoint
CREATE INDEX `video_id` ON `phone_tiktok_saves` (`video_id`);--> statement-breakpoint
CREATE INDEX `channel_id` ON `phone_tiktok_unread_messages` (`channel_id`);--> statement-breakpoint
CREATE INDEX `username` ON `phone_tiktok_videos` (`username`);--> statement-breakpoint
CREATE INDEX `video_id` ON `phone_tiktok_views` (`video_id`);--> statement-breakpoint
CREATE INDEX `phone_number_2` ON `phone_tinder_matches` (`phone_number_2`);--> statement-breakpoint
CREATE INDEX `sender` ON `phone_tinder_messages` (`sender`);--> statement-breakpoint
CREATE INDEX `recipient` ON `phone_tinder_messages` (`recipient`);--> statement-breakpoint
CREATE INDEX `swipee` ON `phone_tinder_swipes` (`swipee`);--> statement-breakpoint
CREATE INDEX `phone_number` ON `phone_twitter_accounts` (`phone_number`);--> statement-breakpoint
CREATE INDEX `follower` ON `phone_twitter_follows` (`follower`);--> statement-breakpoint
CREATE INDEX `requestee` ON `phone_twitter_follow_requests` (`requestee`);--> statement-breakpoint
CREATE INDEX `username` ON `phone_twitter_likes` (`username`);--> statement-breakpoint
CREATE INDEX `username` ON `phone_twitter_loggedin` (`username`);--> statement-breakpoint
CREATE INDEX `sender` ON `phone_twitter_messages` (`sender`);--> statement-breakpoint
CREATE INDEX `recipient` ON `phone_twitter_messages` (`recipient`);--> statement-breakpoint
CREATE INDEX `username` ON `phone_twitter_notifications` (`username`);--> statement-breakpoint
CREATE INDEX `from` ON `phone_twitter_notifications` (`from`);--> statement-breakpoint
CREATE INDEX `username` ON `phone_twitter_retweets` (`username`);--> statement-breakpoint
CREATE INDEX `username` ON `phone_twitter_tweets` (`username`);--> statement-breakpoint
CREATE INDEX `phone_number` ON `phone_voice_memos_recordings` (`phone_number`);--> statement-breakpoint
CREATE INDEX `phone_number` ON `phone_wallet_transactions` (`phone_number`);--> statement-breakpoint
CREATE INDEX `citizenid` ON `playerskins` (`citizenid`);--> statement-breakpoint
CREATE INDEX `active` ON `playerskins` (`active`);--> statement-breakpoint
CREATE INDEX `citizenid` ON `player_outfits` (`citizenid`);--> statement-breakpoint
CREATE INDEX `FK_player_outfit_codes_player_outfits` ON `player_outfit_codes` (`outfitid`);--> statement-breakpoint
CREATE INDEX `id` ON `protection` (`id`);--> statement-breakpoint
CREATE INDEX `owner` ON `rcore_prison` (`owner`);--> statement-breakpoint
CREATE INDEX `owner` ON `rcore_prison_accounts` (`owner`);--> statement-breakpoint
CREATE INDEX `account_id` ON `rcore_prison_transactions` (`account_id`);
*/