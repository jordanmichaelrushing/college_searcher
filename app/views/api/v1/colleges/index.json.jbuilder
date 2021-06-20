json.meta do
  json.total_count @total_items
  json.page @page + 1
  json.per 20
end
json.data @colleges.merge(@lat_lon["results"][0].dig("geometry").dig("location"))