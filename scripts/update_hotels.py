import json
import os
import copy

root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
hotels_path = os.path.join(root, 'hotels.json')
countries_path = os.path.join(root, 'countries.json')


def parse_price(p):
    if not p:
        return 0
    nums = ''.join(ch for ch in p if ch.isdigit())
    return int(nums) if nums else 0


def format_price(n):
    s = f"{int(n):,}".replace(',', ' ')
    return f"{s} ₸"


with open(hotels_path, 'r', encoding='utf-8') as f:
    hotels = json.load(f)

with open(countries_path, 'r', encoding='utf-8') as f:
    countries = json.load(f)

# group by country_code
by_country = {}
for h in hotels:
    cc = h.get('country_code') or ''
    by_country.setdefault(cc, []).append(h)

desired = {'5-star': 2, '4-star': 2, '3-star': 2, '2-star': 2}

new_hotels = []

for cc, country in countries.items():
    group = by_country.get(cc, [])
    # counts
    counts = {lvl: sum(1 for h in group if h.get('level') == lvl) for lvl in desired}
    # sample by level
    sample_by_level = {}
    for h in group:
        lvl = h.get('level')
        sample_by_level.setdefault(lvl, []).append(h)

    def clone_hot(h, suffix, level_override=None, price_multiplier=1.0, rating_override=None):
        new = copy.deepcopy(h)
        new['name'] = f"{h.get('name')} {suffix}"
        if level_override:
            new['level'] = level_override
        if rating_override:
            new['rating'] = rating_override
        if 'price' in new:
            pnum = parse_price(new['price'])
            new['price'] = format_price(int(pnum * price_multiplier)) if pnum else new['price']
        if 'reviews' in new:
            new['reviews'] = max(3, int(new.get('reviews', 10) * max(0.5, price_multiplier)))
        return new

    # ensure duplicates for 5/4/3
    for lvl in ['5-star', '4-star', '3-star']:
        while counts.get(lvl, 0) < desired[lvl]:
            templates = sample_by_level.get(lvl)
            if templates:
                src = templates[0]
                suffix = 'Annex' if lvl == '3-star' else ('Suites' if lvl == '4-star' else 'Palace')
                new = clone_hot(src, suffix, level_override=lvl, price_multiplier=1.0, rating_override=src.get('rating'))
            else:
                src = group[0] if group else None
                if src:
                    new = clone_hot(src, lvl + ' Annex', level_override=lvl)
                else:
                    new = {
                        'name': f"{country.get('title')} Hotel {lvl}",
                        'country': country.get('title'),
                        'country_code': cc,
                        'rating': '4 ★' if lvl == '4-star' else ('3 ★' if lvl == '3-star' else '5 ★'),
                        'price': format_price(50000),
                        'image': '',
                        'tags': ['#ДОБАВЛЕНО'],
                        'desc': 'Автоматически добавленный отель.',
                        'level': lvl,
                        'district': 'центр',
                        'suitable_for': 'туристы',
                        'features': ['Wi-Fi'],
                        'location': country.get('title'),
                        'reviews': 10,
                        'pros': [],
                        'cons': [],
                        'tags_standard': []
                    }
            group.append(new)
            sample_by_level.setdefault(lvl, []).append(new)
            counts[lvl] = counts.get(lvl, 0) + 1
            new_hotels.append(new)

    # add 2-star hotels
    while counts.get('2-star', 0) < desired['2-star']:
        src = sample_by_level.get('3-star', [None])[0] or (group[0] if group else None)
        if src:
            existing2 = counts.get('2-star', 0)
            suffix = 'Economy' if existing2 == 0 else 'Traveler'
            new = clone_hot(src, suffix, level_override='2-star', price_multiplier=0.6, rating_override='2 ★')
        else:
            new = {
                'name': f"{country.get('title')} Economy",
                'country': country.get('title'),
                'country_code': cc,
                'rating': '2 ★',
                'price': format_price(30000),
                'image': '',
                'tags': ['#ЭКОНОМИЯ'],
                'desc': 'Автоматически добавленный 2-звёздочный отель.',
                'level': '2-star',
                'district': 'центр',
                'suitable_for': 'бюджетные путешествия',
                'features': ['Wi-Fi'],
                'location': country.get('title'),
                'reviews': 5,
                'pros': [],
                'cons': [],
                'tags_standard': []
            }
        group.append(new)
        counts['2-star'] = counts.get('2-star', 0) + 1
        new_hotels.append(new)

    by_country[cc] = group

# append only new unique hotels
updated = hotels[:]
existing_names = set(h.get('name') for h in updated)
for h in new_hotels:
    if h.get('name') not in existing_names:
        updated.append(h)
        existing_names.add(h.get('name'))

with open(hotels_path, 'w', encoding='utf-8') as f:
    json.dump(updated, f, ensure_ascii=False, indent=2)

print(f"Added {len(new_hotels)} hotels. Total now {len(updated)}.")
