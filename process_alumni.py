import csv
import json
from typing import List, Dict


def process_alumni_csv(input_file: str, output_file: str) -> None:
    """
    Convert alumni CSV file to JSON format

    Args:
        input_file (str): Path to input CSV file
        output_file (str): Path to output JSON file
    """
    alumni_data: List[Dict] = []

    with open(input_file, "r", encoding="utf-8") as csvfile:
        csv_reader = csv.DictReader(csvfile)
        for row in csv_reader:
            # Clean up the data
            cleaned_row = {key.strip(): value.strip() for key, value in row.items()}

            # Extract the ID from the photo URL if it exists
            if "Photo" in cleaned_row:
                cleaned_row["Photo"] = cleaned_row["Photo"].split("?id=")[-1]

            alumni_data.append(cleaned_row)

    # Write to JSON file with proper formatting
    with open(output_file, "w", encoding="utf-8") as jsonfile:
        json.dump(alumni_data, jsonfile, indent=2, ensure_ascii=False)


if __name__ == "__main__":
    input_csv = "Alumni Information (Responses) - Form Responses 1.csv"
    output_json = "alumni_data.json"

    process_alumni_csv(input_csv, output_json)
    print(f"Successfully converted {input_csv} to {output_json}")
