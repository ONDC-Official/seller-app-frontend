export const getFulfillmentData = (fulfillments, type) => {
  const filtered_data = fulfillments.filter(f => f?.type === type);
  if (filtered_data?.length > 0) {
    return filtered_data[0];
  }
  return {};
};

export const getFullAddress = (location_details) => {
  const location_values = [location_details?.name || '',
                           location_details?.door || '',
                           location_details?.building || '',
                           location_details?.street || '',
                           location_details?.city || '',
                           location_details?.state || '',
                           location_details?.area_code || ''
                          ];
  return location_values?.join(",");
};
