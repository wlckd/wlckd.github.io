#!/bin/bash

# Set the path to your images folder
input_folder="/home/wlckd/shinobu/cut out/converted/"

# Set the path to your palette file
palette_file="palette.png"

# Create an output folder
output_folder="${input_folder}/output"
mkdir -p "${output_folder}"

# Loop through each image in the input folder
for input_file in "${input_folder}"/*.png; do
    # Get the filename without extension
    filename=$(basename -- "${input_file%.*}")

    # Set the output file path
    output_file="${output_folder}/${filename}_processed.png"

    # Run the imagemagick convert command
    convert "${input_file}" -resize x125 -ordered-dither o8x8 -remap "${palette_file}" "${output_file}"

    echo "Processed: ${input_file}"
done

echo "All images processed."
