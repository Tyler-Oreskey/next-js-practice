import fs from 'node:fs';

import sqlite3 from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sqlite3('meals.db');

export async function getMeals() {
    // promise added here to simulate the loading screen for fetching meals
    await new Promise(resolve => setTimeout(resolve, 500));
    // throw new Error('loading meals failed'); demo to show that the error handling page works
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

export async function addMeal(meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Failed to save image');
        }
    });

    meal.image = `/images/${fileName}`;

    db.prepare(
        `INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email,
            @image,
            @slug
        )
    `).run(meal);
}