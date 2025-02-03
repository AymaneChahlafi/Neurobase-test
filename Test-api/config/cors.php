<?php

return [

'paths' => ['api/*'],  // Adjust this if your API paths differ
'allowed_methods' => ['*'],  // Allow all methods (GET, POST, PUT, DELETE, etc.)
'allowed_origins' => ['http://localhost:3000'],  // Your React app URL
'allowed_origins_patterns' => [],
'allowed_headers' => ['*'],  // Allow all headers
'exposed_headers' => [],
'max_age' => 0,
'supports_credentials' => true,  // Enable credentials if needed
];
