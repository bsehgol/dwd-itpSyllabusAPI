# NYU ITP Syllabus API
## DWD Assignment 4

On ITP students email list students curate a shared google spreadsheet with a list of ITP course syllabi. This list is passed down from Year 2's to Year 1's every year. The list gives you course websites something that is missing in the Course Packet emailed by Dante each semester. This list is highly sought for at the time of enrollment and I thought why not make an API out of it for students to access from their websites?

I converted the spreadsheet into a CSV file
![itpsyllcsv](itpsyllcsv.png)

Then I converted it into a JSON file using https://csvjson.com/csv2json

![itpsyll7](itpsyll7.png)

The API gives you a list with names of courses and their URL's. 

![itpsyll6](itpsyll6.png)

I had to look for an efficient way to present the data in tables, at first only one data point would show, whereas I could see all data points in the developer console. It took me multiple iterations before I could get data to display in the way I wanted. This JSON file was more complex than the one in Backend Workbook.

![itpsyll2](itpsyll2.png)

Perhaps there is a better way to use for loop to generate tables in javascript

![itpsyll5](itpsyll5.png)

The API is deployed on [glitch](https://bsehgol-dwd-itpsyllabusapi.glitch.me/) and has a [github repo](https://github.com/bsehgol/dwd-itpSyllabusAPI)

I also wanted to make my API dynamic and I watched Shiffman's video's that are recommended. However, I did not find these videos as useful as he pivots to using p5 libraries that allow users to draw the data towards the end of his 7 video series. 


