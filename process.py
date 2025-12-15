import pandas as pd


def main():
    data = pd.read_csv("./responses.csv")

    column_renames = {
        "Name": "name",
        "About Me (~40 words)": "about_me",
        "Position (2024-2025) (Optional)": "position",
        "Linkedin": "linkedin",
        "Phone": "phone",
        "Personal Website": "website",
        "Top 5 stocks (Separated by commas). Put upto 5, can be less than 5 too. (These are your favourite stocks)": "top_stocks",
        "Have you had any internships? If yes, where did you work? (Need company name only)": "internships",
        "Have you worked on a Stock pitch? If yes, which company have you worked on? (If more than one separate the companies with commas)": "stock_pitch",
        "Have you worked on a book review? If yes, which books have you worked on? (If more than one separate the books with commas)": "book_review",
        "Upload a photo of yourself. Please ensure only you are in the photo, and your face is well lit up.": "photo",
    }

    data.rename(columns=column_renames, inplace=True)

    res = data[column_renames.values()]

    res["photo"] = res["photo"].apply(lambda x: x.split("?id=")[-1])

    res["name"] = res["name"].apply(lambda x: x.strip().title())

    res = res[
        (res["position"] != "")
        & (res["position"].notnull())
        & (res["position"].notna())
    ]

    res["position"] = res["position"].apply(
        lambda x: str(x).strip().title() if x else ""
    )

    res["id"] = res["name"].apply(lambda x: x.lower().replace(" ", "-"))

    res["top_stocks"] = res["top_stocks"].apply(lambda x: x.split(",") if x else [])
    res["internships"] = res["internships"].apply(
        lambda x: str(x).split(",") if x else []
    )
    res["stock_pitch"] = res["stock_pitch"].apply(lambda x: x.split(",") if x else [])
    res["book_review"] = res["book_review"].apply(lambda x: x.split(",") if x else [])

    res.to_csv("./processed.csv", index=False)
    # print(res.to_dict('records'))
    with open("./output.json", "w") as f:
        f.write(res.to_json(orient="records"))


if __name__ == "__main__":
    main()
