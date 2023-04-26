import gtfs_kit as gk

path = 'VLOOT.zip'
gk.list_feed(path)
feed = gk.read_feed(path, dist_units='km')
feed.describe()

trip_stats = feed.compute_trip_stats()
trip_stats.head().T

numOfTrips = trip_stats.start_stop_id.size

# Bazel is ID 1
filtered_df = trip_stats.loc[trip_stats['start_stop_id'] == "1"]
start_times = filtered_df['start_time'].tolist()
print(start_times)

# Hemiksem is ID 2
filtered_df = trip_stats.loc[trip_stats['start_stop_id'] == "2"]
start_times = filtered_df['start_time'].tolist()
print(start_times)


