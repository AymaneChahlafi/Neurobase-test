<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::create([
            'name' => 'Product 1',
            'description' => 'This is a description for Product 1.',
            'price' => 100.00,
        ]);

        Product::create([
            'name' => 'Product 2',
            'description' => 'This is a description for Product 2.',
            'price' => 150.00,
        ]);

        Product::create([
            'name' => 'Product 3',
            'description' => 'This is a description for Product 3.',
            'price' => 250.00,
        ]);

        Product::create([
            'name' => 'Product 4',
            'description' => 'This is a description for Product 5.',
            'price' => 550.00,
        ]);

        Product::create([
            'name' => 'Product 5',
            'description' => 'This is a description for Product 5.',
            'price' => 120.00,
        ]);

        Product::create([
            'name' => 'Product 6',
            'description' => 'This is a description for Product 6.',
            'price' => 180.00,
        ]);

        Product::create([
            'name' => 'Product 7',
            'description' => 'This is a description for Product 7.',
            'price' => 270.00,
        ]);

        Product::create([
            'name' => 'Product 8',
            'description' => 'This is a description for Product 8.',
            'price' => 790.99,
        ]);

        Product::create([
            'name' => 'Product 9',
            'description' => 'This is a description for Product 9.',
            'price' => 1250.00,
        ]);

        Product::create([
            'name' => 'Product 10',
            'description' => 'This is a description for Product 10.',
            'price' => 0.99,
        ]);
    }
}
