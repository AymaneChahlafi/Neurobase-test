<?php

namespace App\Repositories;

use App\Models\Product;
use App\Repositories\Criteria\SearchCriteria;
use App\Repositories\Criteria\SortCriteria;

class ProductRepository
{
    public function __construct()
    {
    }

    public function getAll(SearchCriteria $searchCriteria = null, SortCriteria $sortCriteria = null)
    {
        $query = Product::query();

        if ($searchCriteria) {
            $query = $searchCriteria->apply($query);
        }

        if ($sortCriteria) {
            $query = $sortCriteria->apply($query);
        }

        return $query->get();
    }

    public function getById($id)
    {
        return Product::find($id);
    }

    public function create(array $data)
    {
        return Product::create($data);
    }

    public function update($id, array $data)
    {
        $product = Product::find($id);
        if ($product) {
            $product->update($data);
        }
        return $product;
    }

    public function delete($id)
    {
        $product = Product::find($id);
        if ($product) {
            $product->delete();
            return true;
        }
        return false;
    }
}
