# Youtube Thumbnail Scraper
This repo stores multiple useful scripts to collect thumbnails and data from the Youtube API.
- video_data_collector
 - Collects an input (Channel ID, Video Search Term) and returns a .csv file with a list of the videos, plus data connected to them.
- video_thumbnail_scraper
 - Collects all the thumbnails from all video IDs stored within video_data_collector.py returned .csv file, named as the video ID
- train_set_generator
 - Generates a tensorflow training set using the .csv files & downloaded thumbnails

# Installation
These scripts use NodeJS alongside yarn