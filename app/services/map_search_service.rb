class MapSearchService
  include Service

  attr_reader :college_name

  def initialize(college_name:)
    @college_name = college_name
  end

  def process
    #Hit the maps api and return the lat & lon
    body = RestClient.get(search_url)
    JSON.parse(body)
  end

  def search_url
    "#{base_url}#{api_key}#{school_name}"
  end

  def base_url
    "https://maps.googleapis.com/maps/api/place/textsearch/json?"
  end

  def school_name
    "&query=#{@college_name}"
  end

  def api_key
    "key=#{ENV['GOOGLE_API_KEY']}"
  end
end
