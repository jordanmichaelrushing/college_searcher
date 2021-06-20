class Api::V1::CollegesController < ApplicationController
  def index
    @page = (params[:page] || 1).to_i
    @page -= 1
    @name = search_params[:name] || 'Stanford'
    @colleges = CollegeSearchService.process(college_name: @name, page: @page)
    @lat_lon = MapSearchService.process(college_name: college_name)
    @total_items = @colleges['metadata']['total'] || 0
  end

  private
    def search_params
      params.permit(:name)
    end

    def college_name
      @colleges['results'][0].dig("school.name") || @name
    end
end
