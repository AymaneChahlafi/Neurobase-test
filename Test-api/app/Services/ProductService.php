<?php

namespace App\Services;

use App\Repositories\Criteria\SearchCriteria;
use App\Repositories\Criteria\SortCriteria;
use App\Repositories\ProductRepository;
use App\Services\Validators\ProductValidator;

class ProductService
{
    public function __construct(protected ProductRepository $productRepository)
    {
    }

    public function getAllProducts(SortCriteria $sortCriteria, SearchCriteria $searchCriteria)
    {
        return $this->productRepository->getAll($searchCriteria, $sortCriteria);
    }

    public function getProductById($id)
    {
        return $this->productRepository->getById($id);
    }

    public function createProduct(array $data)
    {
        $validatedData = ProductValidator::validate($data);

        return $this->productRepository->create($validatedData);
    }

    public function updateProduct($id, array $data)
    {
        $validatedData = ProductValidator::validate($data, true);

        return $this->productRepository->update($id, $validatedData);
    }

    public function deleteProduct($id)
    {
        return $this->productRepository->delete($id);
    }
}
