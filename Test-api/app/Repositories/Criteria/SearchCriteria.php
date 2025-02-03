<?php

namespace App\Repositories\Criteria;

use Illuminate\Database\Eloquent\Builder;

class SearchCriteria
{
    protected $searchTerm;

    public function __construct($searchTerm)
    {
        $this->searchTerm = $searchTerm;
    }

    public function apply(Builder $query): Builder
    {
        if ($this->searchTerm) {
            return $query->where('name', 'like', '%' . $this->searchTerm . '%');
        }

        return $query;
    }
}
