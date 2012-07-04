class Diced < Padrino::Application
  register Padrino::Rendering
  register Padrino::Mailer
  register Padrino::Helpers
  register Padrino::Sprockets

  sprockets #:minify => (Padrino.env == :production)

  enable :sessions

  set :cache, Padrino::Cache::Store::Memcache.new(::Dalli::Client.new(ENV["MEMCACHE_SERVERS"] || '127.0.0.1:11211', :exception_retry_limit => 1))

  set :google_analytics, "XXXXXXXX"
  set :typekit, "jsu6fgr"
  set :title, "Dabble with your dinner"
  set :base_host, "justaddveg.herokuapp.com"
  set :description, "Easy ways to veg-up your old favourite meals"
end