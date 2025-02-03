<?php

namespace App\Services\Validators;

use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class ProductValidator
{
    public static function validate(array $data, $isUpdate = false)
    {
        $rules = [
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
        ];

        if ($isUpdate) {
            $rules['name'] = 'sometimes|string|max:255';
            $rules['price'] = 'sometimes|numeric|min:0';
            $rules['stock'] = 'sometimes|integer|min:0';
        }

        $validator = Validator::make($data, $rules);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        return $validator->validated();
    }
}
