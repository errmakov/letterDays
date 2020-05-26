# letterDays
Calculate "letter-days" metric for your Gmail inbox and store it to Google Spreadsheet
{{What this metric for?}}

## Installation
1. Login to [script.google.com](script.google.com) and create new project
1. Copy and paste code to code.gs and save project
1. Create new spreadsheet on https://drive.google.com/drive/my-drive or https://docs.google.com/spreadsheets/u/0/ where metrics will be stored.
1. Set spreadsheet_id in the code (line 3). [Where I can get spreadsheet id](https://www.google.com/search?q=how+to+get+google+spread+sheet+id)?
1. Make the first run. Google ask you about permission to your Gmail. Give access required (read). This app will be not trusted by Google, so don't panic and follow next.

## Known issues
1. Average for first week will be incorrect, because your first run may be in the middle of the week.
