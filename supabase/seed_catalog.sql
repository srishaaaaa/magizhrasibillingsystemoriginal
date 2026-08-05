-- Magizhrasi catalog seed: run this in Supabase SQL Editor (Project > SQL Editor > New query)
-- Adds all items from the shop's product list poster, bilingual (Tamil + English), with category and a starting price.
-- Prices are ESTIMATES — edit the "default_price" values below to match your actual pricing before running,
-- or adjust them later from the Catalog screen in the admin panel.

INSERT INTO products (name, description, default_price, category) VALUES
-- ஆண்கள் பிரிவு / Men
('ஆண்கள் சட்டை (Men''s Shirt)', 'Men''s Shirt', 499, 'Men'),
('ஆண்கள் டி-ஷர்ட் (Men''s T-Shirt)', 'Men''s T-Shirt', 349, 'Men'),
('ஆண்கள் பேண்ட் (Men''s Pant)', 'Men''s Pant', 599, 'Men'),
('ஆண்கள் லோயர் (Men''s Lower)', 'Men''s Lower', 349, 'Men'),
('ஆண்கள் சாக்ஸ் (Men''s Socks)', 'Men''s Socks', 99, 'Men'),
('ஆண்கள் பனியன் (Men''s Vest)', 'Men''s Vest', 149, 'Men'),
('ஆண்கள் ஜட்டி (Men''s Briefs)', 'Men''s Briefs', 129, 'Men'),
('ஆண்கள் லுங்கி (Men''s Lungi)', 'Men''s Lungi', 299, 'Men'),
('வெள்ளை வேட்டி (Men''s White Dhoti)', 'Men''s White Dhoti', 399, 'Men'),
('கலர் வேட்டி (Men''s Colour Dhoti)', 'Men''s Colour Dhoti', 449, 'Men'),

-- பெண்கள் பிரிவு / Women
('பெண்கள் டாப் (Girls Top)', 'Girls Top', 399, 'Women'),
('பெண்கள் லெகின்ஸ் (Girls Leggings)', 'Girls Leggings', 299, 'Women'),
('பெண்கள் சுடிதார் (Girl Chudidhar)', 'Girl Chudidhar', 799, 'Women'),
('பெண்கள் பிளவுஸ் (Girl Blouse)', 'Girl Blouse', 249, 'Women'),
('புடவை (Girl Saree)', 'Girl Saree', 1499, 'Women'),
('பெண்கள் உள்ளாடை (Girl Inner)', 'Girl Inner', 199, 'Women'),
('பெண்கள் சல்வாஸ் (Girl Salwars)', 'Girl Salwars', 349, 'Women'),
('பெண்கள் நைட்டி (Girl Nighty)', 'Girl Nighty', 399, 'Women'),
('பெண்கள் நைட் டிரஸ் (Girl Night Dress)', 'Girl Night Dress', 349, 'Women'),

-- குழந்தைகள் பிரிவு / Kids
('குழந்தைகள் டிரஸ் (Baby Dress)', 'Baby Dress', 399, 'Kids'),
('குழந்தைகள் பிராக் (Baby Frock)', 'Baby Frock', 449, 'Kids'),
('குழந்தைகள் கிட் பாக்ஸ் (Baby Gift Box)', 'Baby Gift Box', 599, 'Kids'),
('குழந்தைகள் டி-ஷர்ட் (Baby T-Shirt)', 'Baby T-Shirt', 249, 'Kids'),
('குழந்தைகள் ஜட்டி (Baby Briefs)', 'Baby Briefs', 99, 'Kids'),
('குழந்தைகள் லோயர் (Baby Lower)', 'Baby Lower', 199, 'Kids'),
('குழந்தைகள் சட்டை & பேண்ட் (Baby Shirt & Pant)', 'Baby Shirt & Pant Set', 499, 'Kids'),
('குழந்தைகள் சொட்டர் (Baby Sweater)', 'Baby Sweater', 349, 'Kids'),
('குழந்தைகள் பெட்டு (Baby Blanket)', 'Baby Blanket', 299, 'Kids'),
('குழந்தைகள் துண்டு (Baby Towel)', 'Baby Towel', 149, 'Kids'),

-- மற்ற பொருட்கள் / Others
('துண்டு (Towel)', 'Towel', 199, 'Others'),
('பேச்சிட் (Bedsheet)', 'Bedsheet', 599, 'Others'),
('சால்வை (Shawl)', 'Shawl', 499, 'Others'),
('கட்சிப் (Handkerchief)', 'Handkerchief', 49, 'Others'),
('ரெயின் கோட் (Rain Coat)', 'Rain Coat', 399, 'Others'),
('ரெயின் ட்ரெஸ் (Rain Dress)', 'Rain Dress', 449, 'Others');
