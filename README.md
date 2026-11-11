# 🇲🇦🇪🇸 Marroquíes en España — Premium V8
A mobile-first Moroccan community app for Moroccan residents in Spain.

## In-app features
- Authenticated profiles, image posts, likes, comments, friendships and direct messages (Supabase)
- Premium Moroccan branding with Android system status-bar safe area
- Mercado: listings with photo, price, city, search, categories and saved items
- **Empleo:** post an offer / available work or advertise that you are seeking work, with specialties including hairdressing, butcher shop, mechanic, carpentry, cooking, phone repair and design
- **Alquiler:** offer a room/apartment/house or request a rental, with property type, city and optional budget
- **Grupos:** any signed-in member may create a public group with custom name, description, city and cover image; members can join and post.

## Modes
The shipped app uses real Supabase data by default. To explore the UI with example data in a web browser, append `?preview=1`.

## Android
The GitHub Actions workflow compiles an Android **debug APK** and publishes a GitHub Release with a direct APK download. It is a beta test build; do not treat it as a production release.

**Important Android signing note:** debug builds created on distinct CI runners may use a different signing certificate. If Android refuses to update an older debug APK, uninstall the older beta first; this may remove local demo data. Real published Supabase posts remain on the server.

## Backend
Project: `ynjfclivartuyrptgkag`. The frontend contains only a **public publishable key**, never an admin or service-role key. RLS protects user-owned and private records.

Database changes for V8 already applied: `listings.intent`, `listings.specialty`, `listings.property_type`; `communities.created_by`, `communities.cover_path`; community insert policy and owner membership trigger.

## Before production
- Test login, email verification, new listings, group cover photo upload and messaging with two real accounts across two phones
- Add moderation, abuse reporting review, rate limits, privacy terms and legal checks for jobs and rental listings
- Set up stable Android signing before releasing updateable builds

This repository is **not** an official Facebook product or marketplace.
