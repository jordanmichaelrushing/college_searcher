class CollegeSearchService
  include Service

  attr_reader :college_name, :page

  def initialize(college_name:,page:)
    @college_name = college_name
    @page = page
  end

  def process
    #Hit the .gov api and return the data
    body = RestClient.get(search_url)
    JSON.parse(body)
  end

  def search_url
    "#{base_url}#{school_name}#{page_number}#{fields}#{api_key}"
  end

  def base_url
    "https://api.data.gov/ed/collegescorecard/v1/"
  end

  def school_name
    "schools.json?school.name=#{@college_name}"
  end

  def page_number
    "&page=#{page}"
  end

  def fields
    "&fields=id,school.name,2018.student.size"
  end

  def api_key
    "&api_key=#{ENV['GOV_API_KEY']}"
  end
end
