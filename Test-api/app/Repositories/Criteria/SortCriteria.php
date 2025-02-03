<?php

namespace App\Repositories\Criteria;

use Illuminate\Database\Eloquent\Builder;

class SortCriteria
{
    protected $sort;
    protected $direction;

    public function __construct($sort, $direction = 'asc')
    {
        $this->sort = $sort;
        $this->direction = $direction;
    }

    public function apply(Builder $query): Builder
    {
        return $query->orderBy($this->sort, $this->direction);
    }
}
