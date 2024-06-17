import { relations } from "drizzle-orm/relations";
import { phone_phones, phone_backups, phone_clock_alarms, phone_darkchat_accounts, phone_instagram_accounts, phone_instagram_posts, phone_instagram_comments, phone_instagram_follows, phone_instagram_follow_requests, phone_instagram_likes, phone_instagram_loggedin, phone_instagram_messages, phone_instagram_notifications, phone_instagram_stories, phone_instagram_stories_views, phone_last_phone, phone_logged_in_accounts, phone_mail_accounts, phone_mail_loggedin, phone_maps_locations, phone_message_channels, phone_message_members, phone_message_messages, phone_music_playlists, phone_music_saved_playlists, phone_music_songs, phone_notes, phone_notifications, phone_photos, phone_photo_albums, phone_photo_album_photos, phone_services_channels, phone_services_messages, phone_tiktok_accounts, phone_tiktok_channels, phone_tiktok_videos, phone_tiktok_comments, phone_tiktok_comments_likes, phone_tiktok_follows, phone_tiktok_likes, phone_tiktok_loggedin, phone_tiktok_messages, phone_tiktok_notifications, phone_tiktok_pinned_videos, phone_tiktok_saves, phone_tiktok_unread_messages, phone_tiktok_views, phone_tinder_accounts, phone_tinder_matches, phone_tinder_messages, phone_tinder_swipes, phone_twitter_accounts, phone_twitter_follows, phone_twitter_follow_requests, phone_twitter_likes, phone_twitter_loggedin, phone_twitter_messages, phone_twitter_notifications, phone_twitter_tweets, phone_twitter_promoted, phone_twitter_retweets, phone_voice_memos_recordings, phone_wallet_transactions, rcore_prison_accounts, rcore_prison_contacts } from "./schema";

export const phone_backupsRelations = relations(phone_backups, ({one}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_backups.phone_number],
		references: [phone_phones.phone_number]
	}),
}));

export const phone_phonesRelations = relations(phone_phones, ({many}) => ({
	phone_backups: many(phone_backups),
	phone_clock_alarms: many(phone_clock_alarms),
	phone_darkchat_accounts: many(phone_darkchat_accounts),
	phone_instagram_accounts: many(phone_instagram_accounts),
	phone_instagram_loggedins: many(phone_instagram_loggedin),
	phone_last_phones: many(phone_last_phone),
	phone_logged_in_accounts: many(phone_logged_in_accounts),
	phone_mail_loggedins: many(phone_mail_loggedin),
	phone_maps_locations: many(phone_maps_locations),
	phone_music_playlists: many(phone_music_playlists),
	phone_music_saved_playlists: many(phone_music_saved_playlists),
	phone_notes: many(phone_notes),
	phone_notifications: many(phone_notifications),
	phone_photos: many(phone_photos),
	phone_photo_albums: many(phone_photo_albums),
	phone_tiktok_accounts: many(phone_tiktok_accounts),
	phone_tiktok_loggedins: many(phone_tiktok_loggedin),
	phone_tinder_accounts: many(phone_tinder_accounts),
	phone_tinder_matches_phone_number_1: many(phone_tinder_matches, {
		relationName: "phone_tinder_matches_phone_number_1_phone_phones_phone_number"
	}),
	phone_tinder_matches_phone_number_2: many(phone_tinder_matches, {
		relationName: "phone_tinder_matches_phone_number_2_phone_phones_phone_number"
	}),
	phone_tinder_messages_sender: many(phone_tinder_messages, {
		relationName: "phone_tinder_messages_sender_phone_phones_phone_number"
	}),
	phone_tinder_messages_recipient: many(phone_tinder_messages, {
		relationName: "phone_tinder_messages_recipient_phone_phones_phone_number"
	}),
	phone_tinder_swipes_swiper: many(phone_tinder_swipes, {
		relationName: "phone_tinder_swipes_swiper_phone_phones_phone_number"
	}),
	phone_tinder_swipes_swipee: many(phone_tinder_swipes, {
		relationName: "phone_tinder_swipes_swipee_phone_phones_phone_number"
	}),
	phone_twitter_accounts: many(phone_twitter_accounts),
	phone_twitter_loggedins: many(phone_twitter_loggedin),
	phone_voice_memos_recordings: many(phone_voice_memos_recordings),
	phone_wallet_transactions: many(phone_wallet_transactions),
}));

export const phone_clock_alarmsRelations = relations(phone_clock_alarms, ({one}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_clock_alarms.phone_number],
		references: [phone_phones.phone_number]
	}),
}));

export const phone_darkchat_accountsRelations = relations(phone_darkchat_accounts, ({one}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_darkchat_accounts.phone_number],
		references: [phone_phones.phone_number]
	}),
}));

export const phone_instagram_accountsRelations = relations(phone_instagram_accounts, ({one, many}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_instagram_accounts.phone_number],
		references: [phone_phones.phone_number]
	}),
	phone_instagram_comments: many(phone_instagram_comments),
	phone_instagram_follows_followed: many(phone_instagram_follows, {
		relationName: "phone_instagram_follows_followed_phone_instagram_accounts_username"
	}),
	phone_instagram_follows_follower: many(phone_instagram_follows, {
		relationName: "phone_instagram_follows_follower_phone_instagram_accounts_username"
	}),
	phone_instagram_follow_requests_requester: many(phone_instagram_follow_requests, {
		relationName: "phone_instagram_follow_requests_requester_phone_instagram_accounts_username"
	}),
	phone_instagram_follow_requests_requestee: many(phone_instagram_follow_requests, {
		relationName: "phone_instagram_follow_requests_requestee_phone_instagram_accounts_username"
	}),
	phone_instagram_likes: many(phone_instagram_likes),
	phone_instagram_loggedins: many(phone_instagram_loggedin),
	phone_instagram_messages_sender: many(phone_instagram_messages, {
		relationName: "phone_instagram_messages_sender_phone_instagram_accounts_username"
	}),
	phone_instagram_messages_recipient: many(phone_instagram_messages, {
		relationName: "phone_instagram_messages_recipient_phone_instagram_accounts_username"
	}),
	phone_instagram_notifications_username: many(phone_instagram_notifications, {
		relationName: "phone_instagram_notifications_username_phone_instagram_accounts_username"
	}),
	phone_instagram_notifications_from: many(phone_instagram_notifications, {
		relationName: "phone_instagram_notifications_from_phone_instagram_accounts_username"
	}),
	phone_instagram_posts: many(phone_instagram_posts),
	phone_instagram_stories: many(phone_instagram_stories),
	phone_instagram_stories_views: many(phone_instagram_stories_views),
}));

export const phone_instagram_commentsRelations = relations(phone_instagram_comments, ({one}) => ({
	phone_instagram_post: one(phone_instagram_posts, {
		fields: [phone_instagram_comments.post_id],
		references: [phone_instagram_posts.id]
	}),
	phone_instagram_account: one(phone_instagram_accounts, {
		fields: [phone_instagram_comments.username],
		references: [phone_instagram_accounts.username]
	}),
}));

export const phone_instagram_postsRelations = relations(phone_instagram_posts, ({one, many}) => ({
	phone_instagram_comments: many(phone_instagram_comments),
	phone_instagram_account: one(phone_instagram_accounts, {
		fields: [phone_instagram_posts.username],
		references: [phone_instagram_accounts.username]
	}),
}));

export const phone_instagram_followsRelations = relations(phone_instagram_follows, ({one}) => ({
	phone_instagram_account_followed: one(phone_instagram_accounts, {
		fields: [phone_instagram_follows.followed],
		references: [phone_instagram_accounts.username],
		relationName: "phone_instagram_follows_followed_phone_instagram_accounts_username"
	}),
	phone_instagram_account_follower: one(phone_instagram_accounts, {
		fields: [phone_instagram_follows.follower],
		references: [phone_instagram_accounts.username],
		relationName: "phone_instagram_follows_follower_phone_instagram_accounts_username"
	}),
}));

export const phone_instagram_follow_requestsRelations = relations(phone_instagram_follow_requests, ({one}) => ({
	phone_instagram_account_requester: one(phone_instagram_accounts, {
		fields: [phone_instagram_follow_requests.requester],
		references: [phone_instagram_accounts.username],
		relationName: "phone_instagram_follow_requests_requester_phone_instagram_accounts_username"
	}),
	phone_instagram_account_requestee: one(phone_instagram_accounts, {
		fields: [phone_instagram_follow_requests.requestee],
		references: [phone_instagram_accounts.username],
		relationName: "phone_instagram_follow_requests_requestee_phone_instagram_accounts_username"
	}),
}));

export const phone_instagram_likesRelations = relations(phone_instagram_likes, ({one}) => ({
	phone_instagram_account: one(phone_instagram_accounts, {
		fields: [phone_instagram_likes.username],
		references: [phone_instagram_accounts.username]
	}),
}));

export const phone_instagram_loggedinRelations = relations(phone_instagram_loggedin, ({one}) => ({
	phone_instagram_account: one(phone_instagram_accounts, {
		fields: [phone_instagram_loggedin.username],
		references: [phone_instagram_accounts.username]
	}),
	phone_phone: one(phone_phones, {
		fields: [phone_instagram_loggedin.phone_number],
		references: [phone_phones.phone_number]
	}),
}));

export const phone_instagram_messagesRelations = relations(phone_instagram_messages, ({one}) => ({
	phone_instagram_account_sender: one(phone_instagram_accounts, {
		fields: [phone_instagram_messages.sender],
		references: [phone_instagram_accounts.username],
		relationName: "phone_instagram_messages_sender_phone_instagram_accounts_username"
	}),
	phone_instagram_account_recipient: one(phone_instagram_accounts, {
		fields: [phone_instagram_messages.recipient],
		references: [phone_instagram_accounts.username],
		relationName: "phone_instagram_messages_recipient_phone_instagram_accounts_username"
	}),
}));

export const phone_instagram_notificationsRelations = relations(phone_instagram_notifications, ({one}) => ({
	phone_instagram_account_username: one(phone_instagram_accounts, {
		fields: [phone_instagram_notifications.username],
		references: [phone_instagram_accounts.username],
		relationName: "phone_instagram_notifications_username_phone_instagram_accounts_username"
	}),
	phone_instagram_account_from: one(phone_instagram_accounts, {
		fields: [phone_instagram_notifications.from],
		references: [phone_instagram_accounts.username],
		relationName: "phone_instagram_notifications_from_phone_instagram_accounts_username"
	}),
}));

export const phone_instagram_storiesRelations = relations(phone_instagram_stories, ({one, many}) => ({
	phone_instagram_account: one(phone_instagram_accounts, {
		fields: [phone_instagram_stories.username],
		references: [phone_instagram_accounts.username]
	}),
	phone_instagram_stories_views: many(phone_instagram_stories_views),
}));

export const phone_instagram_stories_viewsRelations = relations(phone_instagram_stories_views, ({one}) => ({
	phone_instagram_story: one(phone_instagram_stories, {
		fields: [phone_instagram_stories_views.story_id],
		references: [phone_instagram_stories.id]
	}),
	phone_instagram_account: one(phone_instagram_accounts, {
		fields: [phone_instagram_stories_views.viewer],
		references: [phone_instagram_accounts.username]
	}),
}));

export const phone_last_phoneRelations = relations(phone_last_phone, ({one}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_last_phone.phone_number],
		references: [phone_phones.phone_number]
	}),
}));

export const phone_logged_in_accountsRelations = relations(phone_logged_in_accounts, ({one}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_logged_in_accounts.phone_number],
		references: [phone_phones.phone_number]
	}),
}));

export const phone_mail_loggedinRelations = relations(phone_mail_loggedin, ({one}) => ({
	phone_mail_account: one(phone_mail_accounts, {
		fields: [phone_mail_loggedin.address],
		references: [phone_mail_accounts.address]
	}),
	phone_phone: one(phone_phones, {
		fields: [phone_mail_loggedin.phone_number],
		references: [phone_phones.phone_number]
	}),
}));

export const phone_mail_accountsRelations = relations(phone_mail_accounts, ({many}) => ({
	phone_mail_loggedins: many(phone_mail_loggedin),
}));

export const phone_maps_locationsRelations = relations(phone_maps_locations, ({one}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_maps_locations.phone_number],
		references: [phone_phones.phone_number]
	}),
}));

export const phone_message_membersRelations = relations(phone_message_members, ({one}) => ({
	phone_message_channel: one(phone_message_channels, {
		fields: [phone_message_members.channel_id],
		references: [phone_message_channels.id]
	}),
}));

export const phone_message_channelsRelations = relations(phone_message_channels, ({many}) => ({
	phone_message_members: many(phone_message_members),
	phone_message_messages: many(phone_message_messages),
}));

export const phone_message_messagesRelations = relations(phone_message_messages, ({one}) => ({
	phone_message_channel: one(phone_message_channels, {
		fields: [phone_message_messages.channel_id],
		references: [phone_message_channels.id]
	}),
}));

export const phone_music_playlistsRelations = relations(phone_music_playlists, ({one, many}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_music_playlists.phone_number],
		references: [phone_phones.phone_number]
	}),
	phone_music_saved_playlists: many(phone_music_saved_playlists),
	phone_music_songs: many(phone_music_songs),
}));

export const phone_music_saved_playlistsRelations = relations(phone_music_saved_playlists, ({one}) => ({
	phone_music_playlist: one(phone_music_playlists, {
		fields: [phone_music_saved_playlists.playlist_id],
		references: [phone_music_playlists.id]
	}),
	phone_phone: one(phone_phones, {
		fields: [phone_music_saved_playlists.phone_number],
		references: [phone_phones.phone_number]
	}),
}));

export const phone_music_songsRelations = relations(phone_music_songs, ({one}) => ({
	phone_music_playlist: one(phone_music_playlists, {
		fields: [phone_music_songs.playlist_id],
		references: [phone_music_playlists.id]
	}),
}));

export const phone_notesRelations = relations(phone_notes, ({one}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_notes.phone_number],
		references: [phone_phones.phone_number]
	}),
}));

export const phone_notificationsRelations = relations(phone_notifications, ({one}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_notifications.phone_number],
		references: [phone_phones.phone_number]
	}),
}));

export const phone_photosRelations = relations(phone_photos, ({one, many}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_photos.phone_number],
		references: [phone_phones.phone_number]
	}),
	phone_photo_album_photos: many(phone_photo_album_photos),
}));

export const phone_photo_albumsRelations = relations(phone_photo_albums, ({one, many}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_photo_albums.phone_number],
		references: [phone_phones.phone_number]
	}),
	phone_photo_album_photos: many(phone_photo_album_photos),
}));

export const phone_photo_album_photosRelations = relations(phone_photo_album_photos, ({one}) => ({
	phone_photo_album: one(phone_photo_albums, {
		fields: [phone_photo_album_photos.album_id],
		references: [phone_photo_albums.id]
	}),
	phone_photo: one(phone_photos, {
		fields: [phone_photo_album_photos.photo_id],
		references: [phone_photos.id]
	}),
}));

export const phone_services_messagesRelations = relations(phone_services_messages, ({one}) => ({
	phone_services_channel: one(phone_services_channels, {
		fields: [phone_services_messages.channel_id],
		references: [phone_services_channels.id]
	}),
}));

export const phone_services_channelsRelations = relations(phone_services_channels, ({many}) => ({
	phone_services_messages: many(phone_services_messages),
}));

export const phone_tiktok_accountsRelations = relations(phone_tiktok_accounts, ({one, many}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_tiktok_accounts.phone_number],
		references: [phone_phones.phone_number]
	}),
	phone_tiktok_channels_member_1: many(phone_tiktok_channels, {
		relationName: "phone_tiktok_channels_member_1_phone_tiktok_accounts_username"
	}),
	phone_tiktok_channels_member_2: many(phone_tiktok_channels, {
		relationName: "phone_tiktok_channels_member_2_phone_tiktok_accounts_username"
	}),
	phone_tiktok_comments: many(phone_tiktok_comments),
	phone_tiktok_comments_likes: many(phone_tiktok_comments_likes),
	phone_tiktok_follows_followed: many(phone_tiktok_follows, {
		relationName: "phone_tiktok_follows_followed_phone_tiktok_accounts_username"
	}),
	phone_tiktok_follows_follower: many(phone_tiktok_follows, {
		relationName: "phone_tiktok_follows_follower_phone_tiktok_accounts_username"
	}),
	phone_tiktok_likes: many(phone_tiktok_likes),
	phone_tiktok_loggedins: many(phone_tiktok_loggedin),
	phone_tiktok_messages: many(phone_tiktok_messages),
	phone_tiktok_notifications_username: many(phone_tiktok_notifications, {
		relationName: "phone_tiktok_notifications_username_phone_tiktok_accounts_username"
	}),
	phone_tiktok_notifications_from: many(phone_tiktok_notifications, {
		relationName: "phone_tiktok_notifications_from_phone_tiktok_accounts_username"
	}),
	phone_tiktok_pinned_videos: many(phone_tiktok_pinned_videos),
	phone_tiktok_saves: many(phone_tiktok_saves),
	phone_tiktok_unread_messages: many(phone_tiktok_unread_messages),
	phone_tiktok_videos: many(phone_tiktok_videos),
	phone_tiktok_views: many(phone_tiktok_views),
}));

export const phone_tiktok_channelsRelations = relations(phone_tiktok_channels, ({one, many}) => ({
	phone_tiktok_account_member_1: one(phone_tiktok_accounts, {
		fields: [phone_tiktok_channels.member_1],
		references: [phone_tiktok_accounts.username],
		relationName: "phone_tiktok_channels_member_1_phone_tiktok_accounts_username"
	}),
	phone_tiktok_account_member_2: one(phone_tiktok_accounts, {
		fields: [phone_tiktok_channels.member_2],
		references: [phone_tiktok_accounts.username],
		relationName: "phone_tiktok_channels_member_2_phone_tiktok_accounts_username"
	}),
	phone_tiktok_messages: many(phone_tiktok_messages),
	phone_tiktok_unread_messages: many(phone_tiktok_unread_messages),
}));

export const phone_tiktok_commentsRelations = relations(phone_tiktok_comments, ({one, many}) => ({
	phone_tiktok_video: one(phone_tiktok_videos, {
		fields: [phone_tiktok_comments.video_id],
		references: [phone_tiktok_videos.id]
	}),
	phone_tiktok_account: one(phone_tiktok_accounts, {
		fields: [phone_tiktok_comments.username],
		references: [phone_tiktok_accounts.username]
	}),
	phone_tiktok_comment: one(phone_tiktok_comments, {
		fields: [phone_tiktok_comments.reply_to],
		references: [phone_tiktok_comments.id],
		relationName: "phone_tiktok_comments_reply_to_phone_tiktok_comments_id"
	}),
	phone_tiktok_comments: many(phone_tiktok_comments, {
		relationName: "phone_tiktok_comments_reply_to_phone_tiktok_comments_id"
	}),
	phone_tiktok_comments_likes: many(phone_tiktok_comments_likes),
	phone_tiktok_notifications: many(phone_tiktok_notifications),
}));

export const phone_tiktok_videosRelations = relations(phone_tiktok_videos, ({one, many}) => ({
	phone_tiktok_comments: many(phone_tiktok_comments),
	phone_tiktok_likes: many(phone_tiktok_likes),
	phone_tiktok_notifications: many(phone_tiktok_notifications),
	phone_tiktok_pinned_videos: many(phone_tiktok_pinned_videos),
	phone_tiktok_saves: many(phone_tiktok_saves),
	phone_tiktok_account: one(phone_tiktok_accounts, {
		fields: [phone_tiktok_videos.username],
		references: [phone_tiktok_accounts.username]
	}),
	phone_tiktok_views: many(phone_tiktok_views),
}));

export const phone_tiktok_comments_likesRelations = relations(phone_tiktok_comments_likes, ({one}) => ({
	phone_tiktok_account: one(phone_tiktok_accounts, {
		fields: [phone_tiktok_comments_likes.username],
		references: [phone_tiktok_accounts.username]
	}),
	phone_tiktok_comment: one(phone_tiktok_comments, {
		fields: [phone_tiktok_comments_likes.comment_id],
		references: [phone_tiktok_comments.id]
	}),
}));

export const phone_tiktok_followsRelations = relations(phone_tiktok_follows, ({one}) => ({
	phone_tiktok_account_followed: one(phone_tiktok_accounts, {
		fields: [phone_tiktok_follows.followed],
		references: [phone_tiktok_accounts.username],
		relationName: "phone_tiktok_follows_followed_phone_tiktok_accounts_username"
	}),
	phone_tiktok_account_follower: one(phone_tiktok_accounts, {
		fields: [phone_tiktok_follows.follower],
		references: [phone_tiktok_accounts.username],
		relationName: "phone_tiktok_follows_follower_phone_tiktok_accounts_username"
	}),
}));

export const phone_tiktok_likesRelations = relations(phone_tiktok_likes, ({one}) => ({
	phone_tiktok_account: one(phone_tiktok_accounts, {
		fields: [phone_tiktok_likes.username],
		references: [phone_tiktok_accounts.username]
	}),
	phone_tiktok_video: one(phone_tiktok_videos, {
		fields: [phone_tiktok_likes.video_id],
		references: [phone_tiktok_videos.id]
	}),
}));

export const phone_tiktok_loggedinRelations = relations(phone_tiktok_loggedin, ({one}) => ({
	phone_tiktok_account: one(phone_tiktok_accounts, {
		fields: [phone_tiktok_loggedin.username],
		references: [phone_tiktok_accounts.username]
	}),
	phone_phone: one(phone_phones, {
		fields: [phone_tiktok_loggedin.phone_number],
		references: [phone_phones.phone_number]
	}),
}));

export const phone_tiktok_messagesRelations = relations(phone_tiktok_messages, ({one}) => ({
	phone_tiktok_channel: one(phone_tiktok_channels, {
		fields: [phone_tiktok_messages.channel_id],
		references: [phone_tiktok_channels.id]
	}),
	phone_tiktok_account: one(phone_tiktok_accounts, {
		fields: [phone_tiktok_messages.sender],
		references: [phone_tiktok_accounts.username]
	}),
}));

export const phone_tiktok_notificationsRelations = relations(phone_tiktok_notifications, ({one}) => ({
	phone_tiktok_account_username: one(phone_tiktok_accounts, {
		fields: [phone_tiktok_notifications.username],
		references: [phone_tiktok_accounts.username],
		relationName: "phone_tiktok_notifications_username_phone_tiktok_accounts_username"
	}),
	phone_tiktok_account_from: one(phone_tiktok_accounts, {
		fields: [phone_tiktok_notifications.from],
		references: [phone_tiktok_accounts.username],
		relationName: "phone_tiktok_notifications_from_phone_tiktok_accounts_username"
	}),
	phone_tiktok_video: one(phone_tiktok_videos, {
		fields: [phone_tiktok_notifications.video_id],
		references: [phone_tiktok_videos.id]
	}),
	phone_tiktok_comment: one(phone_tiktok_comments, {
		fields: [phone_tiktok_notifications.comment_id],
		references: [phone_tiktok_comments.id]
	}),
}));

export const phone_tiktok_pinned_videosRelations = relations(phone_tiktok_pinned_videos, ({one}) => ({
	phone_tiktok_account: one(phone_tiktok_accounts, {
		fields: [phone_tiktok_pinned_videos.username],
		references: [phone_tiktok_accounts.username]
	}),
	phone_tiktok_video: one(phone_tiktok_videos, {
		fields: [phone_tiktok_pinned_videos.video_id],
		references: [phone_tiktok_videos.id]
	}),
}));

export const phone_tiktok_savesRelations = relations(phone_tiktok_saves, ({one}) => ({
	phone_tiktok_account: one(phone_tiktok_accounts, {
		fields: [phone_tiktok_saves.username],
		references: [phone_tiktok_accounts.username]
	}),
	phone_tiktok_video: one(phone_tiktok_videos, {
		fields: [phone_tiktok_saves.video_id],
		references: [phone_tiktok_videos.id]
	}),
}));

export const phone_tiktok_unread_messagesRelations = relations(phone_tiktok_unread_messages, ({one}) => ({
	phone_tiktok_account: one(phone_tiktok_accounts, {
		fields: [phone_tiktok_unread_messages.username],
		references: [phone_tiktok_accounts.username]
	}),
	phone_tiktok_channel: one(phone_tiktok_channels, {
		fields: [phone_tiktok_unread_messages.channel_id],
		references: [phone_tiktok_channels.id]
	}),
}));

export const phone_tiktok_viewsRelations = relations(phone_tiktok_views, ({one}) => ({
	phone_tiktok_account: one(phone_tiktok_accounts, {
		fields: [phone_tiktok_views.username],
		references: [phone_tiktok_accounts.username]
	}),
	phone_tiktok_video: one(phone_tiktok_videos, {
		fields: [phone_tiktok_views.video_id],
		references: [phone_tiktok_videos.id]
	}),
}));

export const phone_tinder_accountsRelations = relations(phone_tinder_accounts, ({one}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_tinder_accounts.phone_number],
		references: [phone_phones.phone_number]
	}),
}));

export const phone_tinder_matchesRelations = relations(phone_tinder_matches, ({one}) => ({
	phone_phone_phone_number_1: one(phone_phones, {
		fields: [phone_tinder_matches.phone_number_1],
		references: [phone_phones.phone_number],
		relationName: "phone_tinder_matches_phone_number_1_phone_phones_phone_number"
	}),
	phone_phone_phone_number_2: one(phone_phones, {
		fields: [phone_tinder_matches.phone_number_2],
		references: [phone_phones.phone_number],
		relationName: "phone_tinder_matches_phone_number_2_phone_phones_phone_number"
	}),
}));

export const phone_tinder_messagesRelations = relations(phone_tinder_messages, ({one}) => ({
	phone_phone_sender: one(phone_phones, {
		fields: [phone_tinder_messages.sender],
		references: [phone_phones.phone_number],
		relationName: "phone_tinder_messages_sender_phone_phones_phone_number"
	}),
	phone_phone_recipient: one(phone_phones, {
		fields: [phone_tinder_messages.recipient],
		references: [phone_phones.phone_number],
		relationName: "phone_tinder_messages_recipient_phone_phones_phone_number"
	}),
}));

export const phone_tinder_swipesRelations = relations(phone_tinder_swipes, ({one}) => ({
	phone_phone_swiper: one(phone_phones, {
		fields: [phone_tinder_swipes.swiper],
		references: [phone_phones.phone_number],
		relationName: "phone_tinder_swipes_swiper_phone_phones_phone_number"
	}),
	phone_phone_swipee: one(phone_phones, {
		fields: [phone_tinder_swipes.swipee],
		references: [phone_phones.phone_number],
		relationName: "phone_tinder_swipes_swipee_phone_phones_phone_number"
	}),
}));

export const phone_twitter_accountsRelations = relations(phone_twitter_accounts, ({one, many}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_twitter_accounts.phone_number],
		references: [phone_phones.phone_number]
	}),
	phone_twitter_follows_followed: many(phone_twitter_follows, {
		relationName: "phone_twitter_follows_followed_phone_twitter_accounts_username"
	}),
	phone_twitter_follows_follower: many(phone_twitter_follows, {
		relationName: "phone_twitter_follows_follower_phone_twitter_accounts_username"
	}),
	phone_twitter_follow_requests_requester: many(phone_twitter_follow_requests, {
		relationName: "phone_twitter_follow_requests_requester_phone_twitter_accounts_username"
	}),
	phone_twitter_follow_requests_requestee: many(phone_twitter_follow_requests, {
		relationName: "phone_twitter_follow_requests_requestee_phone_twitter_accounts_username"
	}),
	phone_twitter_likes: many(phone_twitter_likes),
	phone_twitter_loggedins: many(phone_twitter_loggedin),
	phone_twitter_messages_sender: many(phone_twitter_messages, {
		relationName: "phone_twitter_messages_sender_phone_twitter_accounts_username"
	}),
	phone_twitter_messages_recipient: many(phone_twitter_messages, {
		relationName: "phone_twitter_messages_recipient_phone_twitter_accounts_username"
	}),
	phone_twitter_notifications_username: many(phone_twitter_notifications, {
		relationName: "phone_twitter_notifications_username_phone_twitter_accounts_username"
	}),
	phone_twitter_notifications_from: many(phone_twitter_notifications, {
		relationName: "phone_twitter_notifications_from_phone_twitter_accounts_username"
	}),
	phone_twitter_retweets: many(phone_twitter_retweets),
	phone_twitter_tweets: many(phone_twitter_tweets),
}));

export const phone_twitter_followsRelations = relations(phone_twitter_follows, ({one}) => ({
	phone_twitter_account_followed: one(phone_twitter_accounts, {
		fields: [phone_twitter_follows.followed],
		references: [phone_twitter_accounts.username],
		relationName: "phone_twitter_follows_followed_phone_twitter_accounts_username"
	}),
	phone_twitter_account_follower: one(phone_twitter_accounts, {
		fields: [phone_twitter_follows.follower],
		references: [phone_twitter_accounts.username],
		relationName: "phone_twitter_follows_follower_phone_twitter_accounts_username"
	}),
}));

export const phone_twitter_follow_requestsRelations = relations(phone_twitter_follow_requests, ({one}) => ({
	phone_twitter_account_requester: one(phone_twitter_accounts, {
		fields: [phone_twitter_follow_requests.requester],
		references: [phone_twitter_accounts.username],
		relationName: "phone_twitter_follow_requests_requester_phone_twitter_accounts_username"
	}),
	phone_twitter_account_requestee: one(phone_twitter_accounts, {
		fields: [phone_twitter_follow_requests.requestee],
		references: [phone_twitter_accounts.username],
		relationName: "phone_twitter_follow_requests_requestee_phone_twitter_accounts_username"
	}),
}));

export const phone_twitter_likesRelations = relations(phone_twitter_likes, ({one}) => ({
	phone_twitter_account: one(phone_twitter_accounts, {
		fields: [phone_twitter_likes.username],
		references: [phone_twitter_accounts.username]
	}),
}));

export const phone_twitter_loggedinRelations = relations(phone_twitter_loggedin, ({one}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_twitter_loggedin.phone_number],
		references: [phone_phones.phone_number]
	}),
	phone_twitter_account: one(phone_twitter_accounts, {
		fields: [phone_twitter_loggedin.username],
		references: [phone_twitter_accounts.username]
	}),
}));

export const phone_twitter_messagesRelations = relations(phone_twitter_messages, ({one}) => ({
	phone_twitter_account_sender: one(phone_twitter_accounts, {
		fields: [phone_twitter_messages.sender],
		references: [phone_twitter_accounts.username],
		relationName: "phone_twitter_messages_sender_phone_twitter_accounts_username"
	}),
	phone_twitter_account_recipient: one(phone_twitter_accounts, {
		fields: [phone_twitter_messages.recipient],
		references: [phone_twitter_accounts.username],
		relationName: "phone_twitter_messages_recipient_phone_twitter_accounts_username"
	}),
}));

export const phone_twitter_notificationsRelations = relations(phone_twitter_notifications, ({one}) => ({
	phone_twitter_account_username: one(phone_twitter_accounts, {
		fields: [phone_twitter_notifications.username],
		references: [phone_twitter_accounts.username],
		relationName: "phone_twitter_notifications_username_phone_twitter_accounts_username"
	}),
	phone_twitter_account_from: one(phone_twitter_accounts, {
		fields: [phone_twitter_notifications.from],
		references: [phone_twitter_accounts.username],
		relationName: "phone_twitter_notifications_from_phone_twitter_accounts_username"
	}),
}));

export const phone_twitter_promotedRelations = relations(phone_twitter_promoted, ({one}) => ({
	phone_twitter_tweet: one(phone_twitter_tweets, {
		fields: [phone_twitter_promoted.tweet_id],
		references: [phone_twitter_tweets.id]
	}),
}));

export const phone_twitter_tweetsRelations = relations(phone_twitter_tweets, ({one, many}) => ({
	phone_twitter_promoteds: many(phone_twitter_promoted),
	phone_twitter_account: one(phone_twitter_accounts, {
		fields: [phone_twitter_tweets.username],
		references: [phone_twitter_accounts.username]
	}),
}));

export const phone_twitter_retweetsRelations = relations(phone_twitter_retweets, ({one}) => ({
	phone_twitter_account: one(phone_twitter_accounts, {
		fields: [phone_twitter_retweets.username],
		references: [phone_twitter_accounts.username]
	}),
}));

export const phone_voice_memos_recordingsRelations = relations(phone_voice_memos_recordings, ({one}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_voice_memos_recordings.phone_number],
		references: [phone_phones.phone_number]
	}),
}));

export const phone_wallet_transactionsRelations = relations(phone_wallet_transactions, ({one}) => ({
	phone_phone: one(phone_phones, {
		fields: [phone_wallet_transactions.phone_number],
		references: [phone_phones.phone_number]
	}),
}));

export const rcore_prison_contactsRelations = relations(rcore_prison_contacts, ({one}) => ({
	rcore_prison_account: one(rcore_prison_accounts, {
		fields: [rcore_prison_contacts.account_id],
		references: [rcore_prison_accounts.account_id]
	}),
}));

export const rcore_prison_accountsRelations = relations(rcore_prison_accounts, ({many}) => ({
	rcore_prison_contacts: many(rcore_prison_contacts),
}));