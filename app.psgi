use Plack::Builder;
use Plack::App::File;

builder {
    enable 'Plack::Middleware::Static', path => qr{^/slides}, root => '';
    enable 'Plack::Middleware::Static', path => qr{^/root}, root => '';
};


