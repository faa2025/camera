#!/usr/bin/env bash

# Directory containing the files
DIRECTORY="/home/roda/labeled_images_trains/has_trains"

# Loop through all files in the directory
for FILE in "$DIRECTORY"/*; do

  # Check if a file, only rename if a regular file
  if [[ -f "$FILE" ]]; then

    #Get the filename without the path
    FILENAME=$(basename "$FILE")

    # Skip if filename already starts with hastrain_
    if [[ $FILENAME != hastrain_* ]]; then
      #Construct new filename:
      NEWFILE="$DIRECTORY/hastrain_$FILENAME"
      #Rename the file
      mv "$FILE" "$NEWFILE"
    fi
  fi
done

echo "Renaming complete in has_trains directory."