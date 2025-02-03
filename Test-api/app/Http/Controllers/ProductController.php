<?php

namespace App\Http\Controllers;

use App\Repositories\Criteria\SearchCriteria;
use App\Repositories\Criteria\SortCriteria;
use App\Services\ProductService;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    protected $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function index()
    {
        $searchCriteria = new SearchCriteria(request('search', ''));
        $sortCriteria = new SortCriteria(request('sort_by', 'name'), request('sort_direction', 'asc'));
        return response()->json($this->productService->getAllProducts($sortCriteria, $searchCriteria));
    }

    public function show($id)
    {
        $product = $this->productService->getProductById($id);
        if (!$product) {
            return response()->json(['message' => 'Produit non trouvé'], 404);
        }
        return response()->json($product);
    }

    public function store(Request $request)
    {
        $product = $this->productService->createProduct($request->all());

        if (isset($product['errors'])) {
            return response()->json($product['errors'], 400);
        }

        return response()->json($product, 201);
    }

    public function update(Request $request, $id)
    {
        $product = $this->productService->updateProduct($id, $request->all());

        if (isset($product['errors'])) {
            return response()->json($product['errors'], 400);
        }

        return response()->json($product);
    }

    public function destroy($id)
    {
        if ($this->productService->deleteProduct($id)) {
            return response()->json(['message' => 'Produit supprimé'], 200);
        }
        return response()->json(['message' => 'Produit non trouvé'], 404);
    }
}

